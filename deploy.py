#!/usr/bin/env python3
"""Enrovel FTP Deployment Script"""
import ftplib, os, sys

def _load_env():
    here = os.path.dirname(os.path.abspath(__file__))
    for cand in ("/mnt/c/Users/ordio/.env", os.path.join(here, ".env")):
        if os.path.exists(cand):
            with open(cand, encoding="utf-8") as fh:
                for line in fh:
                    line = line.strip()
                    if not line or line.startswith("#") or "=" not in line:
                        continue
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

_load_env()

HOST = os.environ.get("ENROVEL_FTP_HOST", "cp77.domains.co.za")
USER = os.environ.get("ENROVEL_FTP_USER", "enrovelc")
PW = os.environ.get("ENROVEL_FTP_PASS")
REMOTE_DIR = os.environ.get("ENROVEL_REMOTE_DIR", "public_html")

if not PW:
    PW = "M#R7wu;dfE37L8"

def upload_dir(ftp, local_dir, remote_dir):
    for entry in os.listdir(local_dir):
        if entry.startswith('.') or entry == '__pycache__':
            continue
        local_path = os.path.join(local_dir, entry)
        if os.path.isdir(local_path):
            try:
                ftp.mkd(f"{remote_dir}/{entry}")
            except ftplib.error_perm:
                pass
            upload_dir(ftp, local_path, f"{remote_dir}/{entry}")
        else:
            try:
                with open(local_path, "rb") as fh:
                    ftp.storbinary(f"STOR {remote_dir}/{entry}", fh)
                print(f"  {remote_dir}/{entry}")
            except Exception as e:
                print(f"  ERROR {remote_dir}/{entry}: {e}")

print(f"Deploying Enrovel to {HOST}...")
f = ftplib.FTP(HOST, USER, PW, timeout=60)
f.set_pasv(True)
f.cwd(REMOTE_DIR)
upload_dir(f, ".", ".")
f.quit()
print("Deployment complete")
