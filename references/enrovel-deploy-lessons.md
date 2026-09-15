# Enrovel Deploy — Session Lessons (2026-09-10)

## What happened

Deployed Enrovel (enrovel.com) — a multi-page B2B site with 29 files including 11 solution verticals, shop, brands, about, contact pages. Two deploys happened:

1. **Primary domain** (`enrovel.com` via domains.co.za registrar → FTP host `cp77.domains.co.za`): Files deployed, DNS A record still needs manual update at registrar (requires 2FA).
2. **Mirror on mylo.co.za** (`mylo.co.za/enrovel/` via host-h.net): Fully live, all 29 files verified HTTP 200.

## Lessons learned

### 1. FTP subdirectory deploy — `ftplib` needs `mkd()` before `cwd()` + `storbinary()`

`ftplib` raises `550 No such file or directory` if you try to `STOR` into a remote dir that doesn't exist yet, OR if you `cwd()` into a non-existent dir.

**Fix:** Create the remote directory first with `mkd()`, then `cwd()` into it, then upload:

```python
import ftplib

def ensure_dir(ftp, path):
    try:
        ftp.mkd(path)
    except ftplib.error_perm:
        pass  # Already exists

# Before uploading into public_html/enrovel:
ftp = ftplib.FTP(HOST, USER, PW, timeout=60)
ftp.set_pasv(True)
ensure_dir(ftp, "public_html/enrovel")  # Create if new
ftp.cwd("public_html/enrovel")
# Now upload files...
```

### 2. Deploying to a subdirectory of an existing site (mylo.co.za/enrovel)

When deploying a multi-page site into a subdir of an existing domain, **all internal links must be root-relative to that subdir**, not to the domain root. Three link classes need fixing:

| Link type | Wrong | Right |
|-----------|-------|-------|
| CSS/JS/assets | `/assets/css/variables.css` | `/enrovel/assets/css/variables.css` |
| Internal pages | `/pages/about.html` | `/enrovel/pages/about.html` |
| SSI includes | `/includes/header.html` | `/enrovel/includes/header.html` |

For **sub-pages at different depths** (e.g. `pages/solutions/boardroom.html` vs `pages/about.html`), the relative `../` path depth differs — so use **root-relative paths** (`/enrovel/...`) in includes, not relative ones.

### 3. SSI includes (`<!--#include virtual=... -->`) need root-relative paths

Server-Side Includes are resolved by the web server relative to the document root, not the including file's location. So:

```html
<!-- WRONG (relative, breaks at different depths) -->
<!--#include virtual="../includes/header.html" -->

<!-- RIGHT (root-relative to the site subdir) -->
<!--#include virtual="/enrovel/includes/header.html" -->
```

### 4. `ftplib` recursive upload pattern that works

```python
import ftplib, os

def upload_dir(ftp, local_dir, remote_dir):
    for entry in os.listdir(local_dir):
        if entry.startswith(".") or entry in ("__pycache__", ".env"):
            continue
        local_path = os.path.join(local_dir, entry)
        if os.path.isdir(local_path):
            try:
                ftp.mkd(f"{remote_dir}/{entry}")
            except ftplib.error_perm:
                pass
            upload_dir(ftp, local_path, f"{remote_dir}/{entry}")
        else:
            with open(local_path, "rb") as fh:
                ftp.storbinary(f"STOR {remote_dir}/{entry}", fh)
            print(f"  {remote_dir}/{entry}")
```

**Important:** After `ftp.mkd()` the first time, you must reconnect (or `cwd` back to root) before the next `mkd` because `ftplib` tracks CWD state.

### 5. DNS mismatch — reinforced from enrovel.com

**Symptom:** Files upload fine, `curl` to hosting server IP returns 200, but the domain shows a parking page.

**Diagnosis:**
```python
import socket
actual_ip = socket.gethostbyname('enrovel.com')  # What DNS resolves to
hosting_ip = '169.239.218.77'                     # Your server
if actual_ip != hosting_ip:
    print(f"DNS MISMATCH: domain resolves to {actual_ip}, but hosting is {hosting_ip}")
```

**Fix:** Log into registrar portal → DNS Zone Editor → Add/update A record → point to hosting server IP. **Cannot be automated** if the portal requires 2FA/OTP.

### 6. Deploying a multi-page site — checklist

- [ ] All pages use correct root-relative paths for the deploy location
- [ ] CSS/JS/assets paths match the subdir depth
- [ ] SSI includes use root-relative virtual paths
- [ ] Internal cross-page links resolve correctly
- [ ] Forms point to the correct PHP endpoint path
- [ ] Verify with `curl -s -o /dev/null -w "%{http_code}"` on EVERY page, not just index
- [ ] Verify assets (images, CSS) load with HTTP 200 too

## Host reference

| Property | enrovel.com | mylo.co.za/enrovel |
|----------|-------------|---------------------|
| Registrar | domains.co.za | (mylo.co.za domain) |
| FTP host | `cp77.domains.co.za` | `213.133.106.131` |
| FTP user | `enrovelc` | `myloxy` |
| Web root | `public_html/` | `public_html/enrovel/` |
| Server IP | `169.239.218.77` | (shared with mylo.co.za) |
| Status | DNS not yet pointing | ✅ Live |
