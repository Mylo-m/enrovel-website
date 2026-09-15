// Enrovel Shop - Brand Grid & Product Views
const Products = {
  "Audio-Technica": [
    { model: "AT8665", desc: "Drum microphone clamp", price: 299, img: "https://picsum.photos/seed/at8665/400/300", link: "https://www.audio-technica.com/en-eu/at8665" },
    { model: "AT8434", desc: "Plastic clothing clip for lavalier microphones", price: 334, img: "https://picsum.photos/seed/at8434/400/300", link: "https://www.audio-technica.com/en-gb/at8434" },
    { model: "AT8406a", desc: "Microphone stand clamp, tapered", price: 414, img: "https://picsum.photos/seed/at8406a/400/300", link: "https://www.audio-technica.com/en-eu/at8406a" },
    { model: "AT8405a", desc: "Microphone stand clamp, 21mm", price: 437, img: "https://picsum.photos/seed/at8405a/400/300", link: "https://www.audio-technica.com/en-eu/at8405a" },
    { model: "AT8470", desc: "Microphone stand clamp for Ae Mics", price: 518, img: "https://picsum.photos/seed/at8470/400/300", link: "https://www.audio-technica.com/en-gb/at8470" },
    { model: "AT8407", desc: "Microphone stand clamp, spring loaded", price: 621, img: "https://picsum.photos/seed/at8407/400/300", link: "https://www.audio-technica.com/en-eu/at8407" },
    { model: "AT8456A", desc: "Stand clamp for A-T handheld wireless transmitters", price: 782, img: "https://picsum.photos/seed/at8456a/400/300" },
    { model: "AT8471", desc: "Microphone stand isolation clamp for Ae Mics", price: 982, img: "https://picsum.photos/seed/at8471/400/300", link: "https://www.audio-technica.com/en-gb/at8471" },
    { model: "AT8473", desc: "Microphone stand clamp for goosenecks", price: 1012, img: "https://picsum.photos/seed/at8473/400/300", link: "https://www.audio-technica.com/en-gb/at8473" },
    { model: "MA-CL21", desc: "Microphone clamp for 21mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl21/400/300", link: "https://global.beyerdynamic.com/ma-cl21.html" },
    { model: "MA-CL25", desc: "Microphone clamp for 25mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl25/400/300", link: "https://global.beyerdynamic.com/ma-cl25.html" },
    { model: "MA-CL29", desc: "Microphone clamp for 29mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl29/400/300", link: "https://global.beyerdynamic.com/ma-cl29.html" },
    { model: "MA-CL36", desc: "Microphone clamp for 36mm diameter microphones", price: 1035, img: "https://picsum.photos/seed/ma-cl36/400/300", link: "https://global.beyerdynamic.com/ma-cl36.html" },
    { model: "AT8601", desc: "Low profile microphone desk stand", price: 828, img: "https://picsum.photos/seed/at8601/400/300", link: "https://www.audio-technica.com/en-gb/at8601" },
    { model: "AT8688", desc: "Microphone desk stand for XLR goosenecks", price: 2852, img: "https://picsum.photos/seed/at8688/400/300", link: "https://www.audio-technica.com/en-eu/at8688" },
    { model: "AT8688S", desc: "Microphone desk stand with switch for XLR goosenecks", price: 3427, img: "https://picsum.photos/seed/at8688s/400/300", link: "https://www.audio-technica.com/en-eu/at8688" },
    { model: "AT8699", desc: "Low profile microphone desk stand for XLR goosenecks", price: 3427, img: "https://picsum.photos/seed/at8699/400/300", link: "https://www.audio-technica.com/en-eu/at8699" },
    { model: "AT8699R", desc: "Low profile microphone desk stand with switch", price: 5704, img: "https://picsum.photos/seed/at8699r/400/300", link: "https://www.audio-technica.com/en-eu/at8699r" },
    { model: "AT8700", desc: "\"Anglepoise\" microphone boom arm", price: 2277 },
    { model: "AT8430", desc: "Microphone stand isolation clamp for AT4033/AT4050", price: 5290, img: "https://picsum.photos/seed/at8430/400/300", link: "https://www.audio-technica.com/en-gb/at8430" },
    { model: "AT831C", desc: "Miniature cardioid condenser lavalier microphone", price: 2852, img: "https://picsum.photos/seed/at831c/400/300", link: "https://www.audio-technica.com/en-eu/at831" },
    { model: "AT8538", desc: "Power module for Es microphones", price: 2852, img: "https://picsum.photos/seed/at8538/400/300", link: "https://www.audio-technica.com/en-gb/at8538" },
    { model: "AT803", desc: "Miniature omnidirectional lavalier microphone with beltpack", price: 6210, img: "https://picsum.photos/seed/at803/400/300", link: "https://www.audio-technica.com/en-eu/at803" },
    { model: "AT831B(S4)", desc: "Miniature cardioid lavalier microphone with beltpack", price: 6268, img: "https://picsum.photos/seed/at831b-s4/400/300", link: "https://www.audio-technica.com/en-eu/at831" },
    { model: "AT831R(S2)", desc: "Miniature cardioid lavalier microphone with XLR phantom", price: 7710, img: "https://picsum.photos/seed/at831r-s2/400/300", link: "https://www.audio-technica.com/en-eu/at831" },
    { model: "AT8010", desc: "Omnidirectional condenser hand held interview microphone", price: 6268, img: "https://picsum.photos/seed/at8010/400/300", link: "https://www.audio-technica.com/en-eu/at8010" },
    { model: "AT8033", desc: "Cardioid hand held condenser recording microphone", price: 6268, img: "https://picsum.photos/seed/at8033/400/300", link: "https://www.audio-technica.com/en-eu/at8033" },
    { model: "AT808G(S2)", desc: "Directional gooseneck dynamic console talkback microphone", price: 4830, img: "https://picsum.photos/seed/at808g-s2/400/300", link: "https://www.audio-technica.com/en-eu/at808g" },
    { model: "AT8022", desc: "X/Y single point stereo condenser microphone", price: 14778, img: "https://picsum.photos/seed/at8022/400/300", link: "https://www.audio-technica.com/en-eu/at8022" },
    { model: "AT8015", desc: "Line + gradient rifle microphone, battery or phantom", price: 12282, img: "https://picsum.photos/seed/at8015/400/300", link: "https://www.audio-technica.com/en-eu/at8015" },
    { model: "AT8035", desc: "Line + gradient rifle microphone, battery or phantom", price: 11247, img: "https://picsum.photos/seed/at8035/400/300", link: "https://www.audio-technica.com/en-eu/at8035" },
    { model: "AT875R", desc: "Rifle microphone, phantom only, 175mm", price: 5382, img: "https://picsum.photos/seed/at875r/400/300", link: "https://www.audio-technica.com/en-eu/at875r" },
    { model: "AT897", desc: "Line + gradient rifle microphone, battery or phantom", price: 8568, img: "https://picsum.photos/seed/at897/400/300", link: "https://www.audio-technica.com/en-eu/at897" },
    { model: "BP28", desc: "Line + gradient large diaphragm rifle microphone", price: 33868, img: "https://picsum.photos/seed/bp28/400/300", link: "https://www.audio-technica.com/en-eu/bp28" },
    { model: "BP28L", desc: "Line + gradient large diaphragm rifle microphone (long)", price: 38878, img: "https://picsum.photos/seed/bp28l/400/300", link: "https://www.audio-technica.com/en-eu/bp28l" },
    { model: "BP4027", desc: "Stereo rifle microphone, line-cardioid and figure", price: 36198, img: "https://picsum.photos/seed/bp4027/400/300", link: "https://www.audio-technica.com/en-eu/bp4027" },
    { model: "BP4029", desc: "Stereo rifle microphone, line-cardioid and figure", price: 31798, img: "https://picsum.photos/seed/bp4029/400/300", link: "https://www.audio-technica.com/en-eu/bp4029" },
    { model: "BP4071", desc: "Line + gradient rifle microphone, condenser capsule", price: 33868, img: "https://picsum.photos/seed/bp4071/400/300", link: "https://www.audio-technica.com/en-eu/bp4071" },
    { model: "BP4071L", desc: "Line + gradient rifle microphone, condenser capsule (long)", price: 38878, img: "https://picsum.photos/seed/bp4071l/400/300", link: "https://www.audio-technica.com/en-eu/bp4071l" },
    { model: "BP4073", desc: "Line + gradient rifle microphone, condenser capsule", price: 40768, img: "https://picsum.photos/seed/bp4073/400/300", link: "https://www.audio-technica.com/en-eu/bp4073" },
    { model: "BP4025", desc: "X/Y single point stereo condenser microphone, phantom", price: 7570, img: "https://picsum.photos/seed/bp4025/400/300", link: "https://www.audio-technica.com/en-eu/bp4025" },
    { model: "BP3600", desc: "Immersive audio multi microphone cluster", price: 158010, img: "https://picsum.photos/seed/bp3600/400/300", link: "https://www.audio-technica.com/en-eu/bp3600" },
    { model: "BP3600/WJ", desc: "Windjammer for BP3600/WS", price: 3680, img: "https://picsum.photos/seed/bp3600-wj/400/300", link: "https://www.audio-technica.com/en-eu/bp3600" },
    { model: "ATM510", desc: "Cardioid dynamic handheld microphone", price: 3393, img: "https://picsum.photos/seed/atm510/400/300", link: "https://www.audio-technica.com/en-eu/atm510" },
    { model: "ATM610A", desc: "Hypercardioid dynamic handheld microphone", price: 4462, img: "https://picsum.photos/seed/atm610a/400/300", link: "https://www.audio-technica.com/en-eu/atm610a" },
    { model: "ATM650", desc: "Hypercardioid dynamic instrument microphone", price: 4140, img: "https://picsum.photos/seed/atm650/400/300", link: "https://www.audio-technica.com/en-eu/atm650" },
    { model: "ATM710", desc: "Cardioid condenser handheld microphone", price: 5923, img: "https://picsum.photos/seed/atm710/400/300", link: "https://www.audio-technica.com/en-eu/atm710" },
    { model: "ATM450", desc: "Cardioid condenser side address instrument microphone", price: 7993, img: "https://picsum.photos/seed/atm450/400/300", link: "https://www.audio-technica.com/en-eu/atm450" },
    { model: "ATM350PL", desc: "Cardioid condenser piano microphone with integral clamp", price: 11822, img: "https://picsum.photos/seed/atm350pl/400/300", link: "https://www.audio-technica.com/en-eu/atm350pl" },
    { model: "ATM350G", desc: "Cardioid condenser guitar microphone with integral clamp", price: 12128, img: "https://picsum.photos/seed/atm350g/400/300", link: "https://www.audio-technica.com/en-eu/atm350gl" },
    { model: "ATM350GL", desc: "Cardioid condenser guitar microphone with long clamp", price: 12420, img: "https://picsum.photos/seed/atm350gl/400/300", link: "https://www.audio-technica.com/en-eu/atm350gl" },
    { model: "ATM350D", desc: "Cardioid condenser drum microphone with integral clamp", price: 12803, img: "https://picsum.photos/seed/atm350d/400/300", link: "https://www.audio-technica.com/en-eu/atm350d" },
    { model: "AE2300", desc: "Cardioid dynamic side address instrument microphone", price: 8918, img: "https://picsum.photos/seed/ae2300/400/300", link: "https://www.audio-technica.com/en-eu/ae2300" },
    { model: "AE2500", desc: "Cardioid dual element dynamic+condenser instrument microphone", price: 21678, img: "https://picsum.photos/seed/ae2500/400/300", link: "https://www.audio-technica.com/en-eu/ae2500" },
    { model: "AE3000", desc: "Cardioid large diaphragm condenser side address instrument", price: 9488, img: "https://picsum.photos/seed/ae3000/400/300", link: "https://www.audio-technica.com/en-eu/ae3000" },
    { model: "AE3300", desc: "Cardioid condenser handheld microphone", price: 10350, img: "https://picsum.photos/seed/ae3300/400/300", link: "https://www.audio-technica.com/en-eu/ae3300" },
    { model: "AE4100", desc: "Cardioid dynamic handheld microphone", price: 6647, img: "https://picsum.photos/seed/ae4100/400/300", link: "https://www.audio-technica.com/en-eu/ae4100" },
    { model: "AE5100", desc: "Cardioid condenser instrument microphone", price: 9948, img: "https://picsum.photos/seed/ae5100/400/300", link: "https://www.audio-technica.com/en-eu/ae5100" },
    { model: "AE5400", desc: "Cardioid large diaphragm condenser handheld microphone", price: 13283, img: "https://picsum.photos/seed/ae5400/400/300", link: "https://www.audio-technica.com/en-eu/ae5400" },
    { model: "AE6100", desc: "Hypercardioid dynamic handheld microphone", price: 6647, img: "https://picsum.photos/seed/ae6100/400/300", link: "https://www.audio-technica.com/en-eu/ae6100" },
    { model: "ATS99", desc: "Premium hypercardioid dynamic handheld microphone", price: 9488, img: "https://picsum.photos/seed/ats99/400/300", link: "https://www.audio-technica.com/en-eu/ats99" },
    { model: "AT4021", desc: "Cardioid condenser instrument microphone, 48V phantom", price: 13800, img: "https://picsum.photos/seed/at4021/400/300", link: "https://www.audio-technica.com/en-gb/catalogsearch/result/?q=at4021" },
    { model: "AT4022", desc: "Omnidirectional condenser instrument microphone, 48V phantom", price: 15353, img: "https://picsum.photos/seed/at4022/400/300", link: "https://www.audio-technica.com/en-gb/catalogsearch/result/?q=at4021" },
    { model: "AT4041", desc: "Cardioid condenser instrument microphone, 48V phantom", price: 12075, img: "https://picsum.photos/seed/at4041/400/300", link: "https://www.audio-technica.com/en-gb/at4041" },
    { model: "AT4049B", desc: "Omnidirectional condenser modular instrument microphone", price: 20672, img: "https://picsum.photos/seed/at4049b/400/300", link: "https://www.audio-technica.com/en-gb/at4049b" },
    { model: "AT4049B-EL", desc: "Omnidirectional element only for modular instrument microphone", price: 8602, img: "https://picsum.photos/seed/at4049b-el/400/300", link: "https://www.audio-technica.com/en-gb/at4049b-el" },
    { model: "AT4050", desc: "Side address multi pattern cardioid condenser microphone", price: 27543, img: "https://picsum.photos/seed/at4050/400/300", link: "https://www.audio-technica.com/en-gb/at4050" },
    { model: "AT4051B", desc: "Cardioid condenser modular instrument microphone", price: 20672, img: "https://picsum.photos/seed/at4051b/400/300", link: "https://www.audio-technica.com/en-gb/at4051b" },
    { model: "AT4051B-EL", desc: "Cardioid element only for modular instrument microphone", price: 8602, img: "https://picsum.photos/seed/at4051b-el/400/300", link: "https://www.audio-technica.com/en-gb/at4051b-el" },
    { model: "AT4053B", desc: "Hypercardioid condenser modular instrument microphone", price: 20672, img: "https://picsum.photos/seed/at4053b/400/300", link: "https://www.audio-technica.com/en-gb/at4053b" },
    { model: "AT4053B-EL", desc: "Hypercardioid element only for modular instrument microphone", price: 8602, img: "https://picsum.photos/seed/at4053b-el/400/300", link: "https://www.audio-technica.com/en-gb/at4053b-el" },
    { model: "AT4081", desc: "Bi-directional ribbon instrument microphone", price: 25847, img: "https://picsum.photos/seed/at4081/400/300", link: "https://www.audio-technica.com/en-gb/at4081" },
    { model: "M 88", desc: "Hypercardioid dynamic mic with high SPL capability", price: 19550, img: "https://picsum.photos/seed/m-88/400/300", link: "https://global.beyerdynamic.com/m-88-tg.html" },
    { model: "M 160", desc: "Hypercardioid dynamic double ribbon microphone", price: 33293, img: "https://picsum.photos/seed/m-160/400/300", link: "https://global.beyerdynamic.com/m-160.html" },
    { model: "M 130", desc: "Figure-of-eight dynamic double ribbon microphone", price: 47035, img: "https://picsum.photos/seed/m-130/400/300", link: "https://global.beyerdynamic.com/m-130.html" },
    { model: "M 201TG", desc: "Hypercardioid dynamic \"pencil\" type mic for instrument miking", price: 14835 },
    { model: "MC 930", desc: "Cardioid end address true condenser microphone", price: 25473, img: "https://picsum.photos/seed/mc-930/400/300", link: "https://global.beyerdynamic.com/mc-930.html" },
    { model: "MC 930 Stereo Set", desc: "Matched pair of cardioid true condenser microphones", price: 50945, img: "https://picsum.photos/seed/mc-930-stereo-set/400/300", link: "https://global.beyerdynamic.com/mc-930-stereo-set.html" },
    { model: "MC 950", desc: "Supercardioid end address true condenser microphone", price: 25473, img: "https://picsum.photos/seed/mc-950/400/300", link: "https://global.beyerdynamic.com/mc-950.html" },
    { model: "TG I51", desc: "Cardioid dynamic microphone for instrument cabs, brass", price: 5060, img: "https://picsum.photos/seed/tg-i51/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=i51" },
    { model: "TG I53", desc: "Cardioid electret condenser microphone for overheads", price: 5520, img: "https://picsum.photos/seed/tg-i53/400/300", link: "https://global.beyerdynamic.com/tg-i53.html" },
    { model: "TG D35", desc: "Compact supercardioid dynamic microphone for toms, snare", price: 3508, img: "https://picsum.photos/seed/tg-d35/400/300", link: "https://global.beyerdynamic.com/tg-d35-triple-set.html" },
    { model: "TG D57", desc: "Cardioid condenser microphone for toms, snare and percussion", price: 7073, img: "https://picsum.photos/seed/tg-d57/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d57" },
    { model: "TG D58", desc: "Cardioid condenser microphone for toms, snare and percussion", price: 7073, img: "https://picsum.photos/seed/tg-d58/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d58" },
    { model: "TG D70Mk2", desc: "Hypercardioid large diaphragm dynamic mic for kick drum", price: 10178, img: "https://picsum.photos/seed/tg-d70mk2/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d70" },
    { model: "TG D71", desc: "Half-cardioid boundary microphone for kick drum", price: 10983, img: "https://picsum.photos/seed/tg-d71/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d71" },
    { model: "TG V35s", desc: "Supercardioid dynamic general purpose microphone", price: 1955, img: "https://picsum.photos/seed/tg-v35s/400/300", link: "https://global.beyerdynamic.com/tg-v35s.html" },
    { model: "TG V50", desc: "Cardioid dynamic mic for speech & lead or backing vocals", price: 3887, img: "https://picsum.photos/seed/tg-v50/400/300", link: "https://global.beyerdynamic.com/tg-v50s.html" },
    { model: "TG V50s", desc: "Cardioid dynamic microphone with lockable switch", price: 4313, img: "https://picsum.photos/seed/tg-v50s/400/300", link: "https://global.beyerdynamic.com/tg-v50s.html" },
    { model: "TG V70", desc: "Hypercardioid dynamic microphone for lead vocals", price: 7820, img: "https://picsum.photos/seed/tg-v70/400/300", link: "https://global.beyerdynamic.com/tg-v70s.html" },
    { model: "TG V70s", desc: "Hypercardioid dynamic microphone with lockable switch", price: 8228, img: "https://picsum.photos/seed/tg-v70s/400/300", link: "https://global.beyerdynamic.com/tg-v70s.html" },
    { model: "TG Drum Set Pro M", desc: "Drum microphone set (kick, snare, toms, overheads)", price: 29325, img: "https://picsum.photos/seed/tg-drum-set-pro-m/400/300", link: "https://global.beyerdynamic.com/tg-drum-set.html" },
    { model: "TG Drum Set Pro L", desc: "Drum microphone set (kick, snare, toms, overheads, hi-hat)", price: 47035, img: "https://picsum.photos/seed/tg-drum-set-pro-l/400/300", link: "https://global.beyerdynamic.com/tg-drum-set.html" },
    { model: "ES925/12", desc: "ES Modular 12\" gooseneck without power module", price: 4025 },
    { model: "ES931C/MIC", desc: "Cardioid condenser gooseneck mic without power module", price: 6785, img: "https://picsum.photos/seed/es931c-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES931H/MIC", desc: "Hypercardioid condenser gooseneck mic without power module", price: 6785, img: "https://picsum.photos/seed/es931h-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES931ML/MIC", desc: "Microline condenser gooseneck mic without power module", price: 7648, img: "https://picsum.photos/seed/es931ml-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES931WC/MIC", desc: "Cardioid condenser gooseneck mic without power module - White", price: 7073, img: "https://picsum.photos/seed/es931wc-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES931WH/MIC", desc: "Hypercardioid condenser gooseneck mic without power module - White", price: 7073, img: "https://picsum.photos/seed/es931wh-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES931WML/MIC", desc: "Microline condenser gooseneck mic without power module - White", price: 7938, img: "https://picsum.photos/seed/es931wml-mic/400/300", link: "https://www.audio-technica.com/en-eu/es931" },
    { model: "ES933CMIC", desc: "Cardioid condenser hanging microphone for choirs", price: 6785, img: "https://picsum.photos/seed/es933cmic/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933HMIC", desc: "Hypercardioid condenser hanging microphone for choirs", price: 6785, img: "https://picsum.photos/seed/es933hmic/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933C", desc: "Cardioid condenser hanging microphone for choirs, instrumental", price: 9660, img: "https://picsum.photos/seed/es933c/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933H", desc: "Hypercardioid condenser hanging microphone for choirs", price: 9660, img: "https://picsum.photos/seed/es933h/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933ML", desc: "Microline condenser hanging microphone for choirs", price: 10523, img: "https://picsum.photos/seed/es933ml/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933O", desc: "Omni condenser hanging microphone for choirs", price: 9660, img: "https://picsum.photos/seed/es933o/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933WC", desc: "Cardioid condenser hanging mic for choirs - White", price: 9898, img: "https://picsum.photos/seed/es933wc/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933WH", desc: "Hypercardioid condenser hanging mic for choirs - White", price: 9898, img: "https://picsum.photos/seed/es933wh/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933WML", desc: "Microline condenser hanging mic for choirs - White", price: 10782, img: "https://picsum.photos/seed/es933wml/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES933WO", desc: "Omni condenser hanging microphone for choirs - White", price: 9898, img: "https://picsum.photos/seed/es933wo/400/300", link: "https://www.audio-technica.com/en-eu/es933c" },
    { model: "ES964", desc: "Triple capsule low profile boundary microphone array", price: 20523, img: "https://picsum.photos/seed/es964/400/300", link: "https://www.audio-technica.com/en-eu/es964" },
    { model: "BP898c", desc: "Cardioid sub-miniature condenser lavalier microphone", price: 5118, img: "https://picsum.photos/seed/bp898c/400/300", link: "https://www.audio-technica.com/en-eu/bp898" },
    { model: "BP899c", desc: "Omnidirectional condenser lavalier microphone unterminated", price: 5118, img: "https://picsum.photos/seed/bp899c/400/300", link: "https://www.audio-technica.com/en-eu/bp899" },
    { model: "BP899c-TH", desc: "Omnidirectional condenser lavalier microphone (theatre)", price: 5118, img: "https://picsum.photos/seed/bp899c-th/400/300", link: "https://www.audio-technica.com/en-eu/bp899" },
    { model: "BP898", desc: "Sub-miniature cardioid condenser lavalier microphone with AT8545", price: 8942, img: "https://picsum.photos/seed/bp898/400/300", link: "https://www.audio-technica.com/en-eu/bp898" },
    { model: "BP899", desc: "Sub-miniature omni condenser lavalier microphone with AT8545", price: 8942, img: "https://picsum.photos/seed/bp899/400/300", link: "https://www.audio-technica.com/en-eu/bp899" },
    { model: "BP892x", desc: "Sub-miniature omnidirectional headworn microphone", price: 15640, img: "https://picsum.photos/seed/bp892x/400/300", link: "https://www.audio-technica.com/en-eu/bp892x" },
    { model: "BP892x-TH", desc: "Sub-miniature omnidirectional headworn microphone (theatre)", price: 15640, img: "https://picsum.photos/seed/bp892x-th/400/300", link: "https://www.audio-technica.com/en-eu/bp892x" },
    { model: "AT889CW", desc: "Noise cancelling moisture resistant headset condenser microphone", price: 9200, img: "https://picsum.photos/seed/at889cw/400/300", link: "https://www.audio-technica.com/en-eu/at889cw" },
    { model: "ATW-T220CD", desc: "2000 Series frequency agile true diversity 10 channel handheld", price: 7590, img: "https://picsum.photos/seed/atw-t220cd/400/300", link: "https://www.audio-technica.com/en-eu/microphones/wireless-systems/series/2000-series" },
    { model: "ATW-T220CI", desc: "2000 Series frequency agile true diversity 10 channel instrument", price: 7590, img: "https://picsum.photos/seed/atw-t220ci/400/300", link: "https://www.audio-technica.com/en-eu/microphones/wireless-systems/series/2000-series" },
    { model: "ATW-R3250DF2", desc: "3000 Series diversity UHF in-ear monitoring receiver", price: 17595, img: "https://picsum.photos/seed/atw-r3250df2/400/300", link: "https://www.audio-technica.com/en-eu/3000-series-iem?_gl=1*1n8jdac*_up*MQ..*_ga*NTAzNTM1NzM2LjE3NzIwMDg1NzA.*_ga_9B1Z5FDEW6*czE3NzIwMDg1NjkkbzEkZzEkdDE3NzIwMDg5OTMkajYwJGwwJGgxODY1NTY2NjI2" },
    { model: "ATW-R3250EG2", desc: "3000 Series diversity UHF in-ear monitoring receiver", price: 17595, img: "https://picsum.photos/seed/atw-r3250eg2/400/300", link: "https://www.audio-technica.com/en-eu/3000-series-iem?_gl=1*1n8jdac*_up*MQ..*_ga*NTAzNTM1NzM2LjE3NzIwMDg1NzA.*_ga_9B1Z5FDEW6*czE3NzIwMDg1NjkkbzEkZzEkdDE3NzIwMDg5OTMkajYwJGwwJGgxODY1NTY2NjI2" },
    { model: "ATW-T3205DF2EU", desc: "3000 Series diversity UHF in-ear monitoring transmitter", price: 14490, img: "https://picsum.photos/seed/atw-t3205df2eu/400/300", link: "https://www.audio-technica.com/en-eu/3000-series-iem?_gl=1*1n8jdac*_up*MQ..*_ga*NTAzNTM1NzM2LjE3NzIwMDg1NzA.*_ga_9B1Z5FDEW6*czE3NzIwMDg1NjkkbzEkZzEkdDE3NzIwMDg5OTMkajYwJGwwJGgxODY1NTY2NjI2" },
    { model: "ATW-T3205EG2EU", desc: "3000 Series diversity UHF in-ear monitoring transmitter", price: 14490, img: "https://picsum.photos/seed/atw-t3205eg2eu/400/300", link: "https://www.audio-technica.com/en-eu/3000-series-iem?_gl=1*1n8jdac*_up*MQ..*_ga*NTAzNTM1NzM2LjE3NzIwMDg1NzA.*_ga_9B1Z5FDEW6*czE3NzIwMDg1NjkkbzEkZzEkdDE3NzIwMDg5OTMkajYwJGwwJGgxODY1NTY2NjI2" },
    { model: "ESW-T4107E", desc: "ESW Series desk stand transmitter for use with ESW series", price: 28463, img: "https://picsum.photos/seed/esw-t4107e/400/300", link: "https://www.audio-technica.com/en-us/es-wireless" },
    { model: "ESW-CHG5", desc: "ESW Series Four-Bay Charging Station for desk stand", price: 37950, img: "https://picsum.photos/seed/esw-chg5/400/300", link: "https://www.audio-technica.com/en-us/es-wireless" },
    { model: "ATCS-B60EU", desc: "Intelligent quick-charger has 10 individual advanced charging", price: 36225, img: "https://picsum.photos/seed/atcs-b60eu/400/300" },
    { model: "TP-11", desc: "Vacuum tube microphone pre-amplifier with 16 presets", price: 7073, img: "https://picsum.photos/seed/tp-11/400/300", link: "https://www.montarbo.com/prod/tp-11/" },
    { model: "MA-PVA", desc: "Microphone pre-amplifier/phantom adaptor", price: 2875, img: "https://picsum.photos/seed/ma-pva/400/300", link: "https://global.beyerdynamic.com/ma-pva.html" },
    { model: "MKV87", desc: "Patented microphone clamp with 3/8\" thread for drum hoops", price: 2358 },
    { model: "EDT770V", desc: "Ear cushions pair with foam pads, silver grey velour", price: 805, img: "https://picsum.photos/seed/edt770v/400/300" },
    { model: "EDT770VB", desc: "Ear cushions pair with foam pads, black velour", price: 886, img: "https://picsum.photos/seed/edt770vb/400/300" },
    { model: "HCPRO", desc: "Hardcase for DT 1770/1990 Pro headphones", price: 1725, img: "https://picsum.photos/seed/hcpro/400/300", link: "https://global.beyerdynamic.com/hardcase-pro.html" },
    { model: "DT Hardcase", desc: "Solid transport case with internal pocket, fits DT series", price: 1323, img: "https://picsum.photos/seed/dt-hardcase/400/300", link: "https://global.beyerdynamic.com/dt-hard-case.html" },
  ],
  "Beyerdynamic": [
    { model: "DT70ie", desc: "In ear monitors for mixing and critical listening", price: 19550, img: "https://picsum.photos/seed/dt70ie/400/300", link: "https://global.beyerdynamic.com/dt-ie-series" },
    { model: "DT71ie", desc: "In ear monitors for drummers and bassists", price: 19550, img: "https://picsum.photos/seed/dt71ie/400/300", link: "https://global.beyerdynamic.com/dt-ie-series" },
    { model: "DT72ie", desc: "In ear monitors for guitarists and vocalists", price: 19550, img: "https://picsum.photos/seed/dt72ie/400/300", link: "https://global.beyerdynamic.com/dt-ie-series" },
    { model: "DT73ie", desc: "In ear monitors for strings, woodwinds and keyboards", price: 19550, img: "https://picsum.photos/seed/dt73ie/400/300", link: "https://global.beyerdynamic.com/dt-ie-series" },
    { model: "TG I51", desc: "Cardioid dynamic microphone for instrument cabs, brass", price: 5060, img: "https://picsum.photos/seed/tg-i51/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=i51" },
    { model: "TG D70Mk2", desc: "Hypercardioid large diaphragm dynamic mic for kick drum", price: 10178, img: "https://picsum.photos/seed/tg-d70mk2/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d70" },
    { model: "TG D71", desc: "Half-cardioid boundary microphone for kick drum", price: 10983, img: "https://picsum.photos/seed/tg-d71/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d71" },
    { model: "TG Drum Set Pro M", desc: "Drum microphone set (kick, snare, toms, overheads)", price: 29325, img: "https://picsum.photos/seed/tg-drum-set-pro-m/400/300", link: "https://global.beyerdynamic.com/tg-drum-set.html" },
    { model: "TG Drum Set Pro L", desc: "Drum microphone set (kick, snare, toms, overheads, hi-hat)", price: 47035, img: "https://picsum.photos/seed/tg-drum-set-pro-l/400/300", link: "https://global.beyerdynamic.com/tg-drum-set.html" },
    { model: "MC 930", desc: "Cardioid end address true condenser microphone", price: 25473, img: "https://picsum.photos/seed/mc-930/400/300", link: "https://global.beyerdynamic.com/mc-930.html" },
    { model: "MC 930 Stereo Set", desc: "Matched pair of cardioid true condenser microphones", price: 50945, img: "https://picsum.photos/seed/mc-930-stereo-set/400/300", link: "https://global.beyerdynamic.com/mc-930-stereo-set.html" },
    { model: "MC 950", desc: "Supercardioid end address true condenser microphone", price: 25473, img: "https://picsum.photos/seed/mc-950/400/300", link: "https://global.beyerdynamic.com/mc-950.html" },
    { model: "M 88", desc: "Hypercardioid dynamic mic with high SPL capability", price: 19550, img: "https://picsum.photos/seed/m-88/400/300", link: "https://global.beyerdynamic.com/m-88-tg.html" },
    { model: "M 160", desc: "Hypercardioid dynamic double ribbon microphone", price: 33293, img: "https://picsum.photos/seed/m-160/400/300", link: "https://global.beyerdynamic.com/m-160.html" },
    { model: "M 130", desc: "Figure-of-eight dynamic double ribbon microphone", price: 47035, img: "https://picsum.photos/seed/m-130/400/300", link: "https://global.beyerdynamic.com/m-130.html" },
    { model: "TG V35s", desc: "Supercardioid dynamic general purpose microphone", price: 1955, img: "https://picsum.photos/seed/tg-v35s/400/300", link: "https://global.beyerdynamic.com/tg-v35s.html" },
    { model: "TG V50", desc: "Cardioid dynamic mic for speech & lead or backing vocals", price: 3887, img: "https://picsum.photos/seed/tg-v50/400/300", link: "https://global.beyerdynamic.com/tg-v50s.html" },
    { model: "TG V50s", desc: "Cardioid dynamic microphone with lockable switch", price: 4313, img: "https://picsum.photos/seed/tg-v50s/400/300", link: "https://global.beyerdynamic.com/tg-v50s.html" },
    { model: "TG V70", desc: "Hypercardioid dynamic microphone for lead vocals", price: 7820, img: "https://picsum.photos/seed/tg-v70/400/300", link: "https://global.beyerdynamic.com/tg-v70s.html" },
    { model: "TG V70s", desc: "Hypercardioid dynamic microphone with lockable switch", price: 8228, img: "https://picsum.photos/seed/tg-v70s/400/300", link: "https://global.beyerdynamic.com/tg-v70s.html" },
    { model: "TG D35", desc: "Compact supercardioid dynamic microphone for toms, snare", price: 3508, img: "https://picsum.photos/seed/tg-d35/400/300", link: "https://global.beyerdynamic.com/tg-d35-triple-set.html" },
    { model: "TG D57", desc: "Cardioid condenser microphone for toms, snare and percussion", price: 7073, img: "https://picsum.photos/seed/tg-d57/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d57" },
    { model: "TG D58", desc: "Cardioid condenser microphone for toms, snare and percussion", price: 7073, img: "https://picsum.photos/seed/tg-d58/400/300", link: "https://global.beyerdynamic.com/catalogsearch/result/?q=d58" },
    { model: "TG I53", desc: "Cardioid electret condenser microphone for overheads", price: 5520, img: "https://picsum.photos/seed/tg-i53/400/300", link: "https://global.beyerdynamic.com/tg-i53.html" },
    { model: "M 201TG", desc: "Hypercardioid dynamic \"pencil\" type mic for instrument miking", price: 14835 },
    { model: "MA-CL21", desc: "Microphone clamp for 21mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl21/400/300", link: "https://global.beyerdynamic.com/ma-cl21.html" },
    { model: "MA-CL25", desc: "Microphone clamp for 25mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl25/400/300", link: "https://global.beyerdynamic.com/ma-cl25.html" },
    { model: "MA-CL29", desc: "Microphone clamp for 29mm diameter microphones", price: 828, img: "https://picsum.photos/seed/ma-cl29/400/300", link: "https://global.beyerdynamic.com/ma-cl29.html" },
    { model: "MA-CL36", desc: "Microphone clamp for 36mm diameter microphones", price: 1035, img: "https://picsum.photos/seed/ma-cl36/400/300", link: "https://global.beyerdynamic.com/ma-cl36.html" },
    { model: "MA-PVA", desc: "Microphone pre-amplifier/phantom adaptor", price: 2875, img: "https://picsum.photos/seed/ma-pva/400/300", link: "https://global.beyerdynamic.com/ma-pva.html" },
    { model: "MKV87", desc: "Patented microphone clamp with 3/8\" thread for drum hoops", price: 2358 },
    { model: "HCPRO", desc: "Hardcase for DT 1770/1990 Pro headphones", price: 1725, img: "https://picsum.photos/seed/hcpro/400/300", link: "https://global.beyerdynamic.com/hardcase-pro.html" },
    { model: "DT Hardcase", desc: "Solid transport case with internal pocket, fits DT series", price: 1323, img: "https://picsum.photos/seed/dt-hardcase/400/300", link: "https://global.beyerdynamic.com/dt-hard-case.html" },
    { model: "EDT770V", desc: "Ear cushions pair with foam pads, silver grey velour", price: 805, img: "https://picsum.photos/seed/edt770v/400/300" },
    { model: "EDT770VB", desc: "Ear cushions pair with foam pads, black velour", price: 886, img: "https://picsum.photos/seed/edt770vb/400/300" },
  ],
  "Tascam": [
    { model: "DR-05XP", desc: "Stereo handheld audio recorder and USB Audio Interface", price: 4600, img: "https://picsum.photos/seed/dr-05xp/400/300", link: "https://www.tascam.eu/en/dr-05xp" },
    { model: "DR-07XP", desc: "Stereo handheld audio recorder and USB Audio Interface", price: 5750, img: "https://picsum.photos/seed/dr-07xp/400/300", link: "https://www.tascam.eu/en/dr-07xp" },
    { model: "DR-40XP", desc: "Four track handheld audio recorder and USB Audio Interface", price: 9200, img: "https://picsum.photos/seed/dr-40xp/400/300", link: "https://www.tascam.eu/en/dr-40xp" },
    { model: "DR-10L Pro", desc: "32-Bit Float Voice Recorder With Lavalier Microphone", price: 7475, img: "https://picsum.photos/seed/dr-10l-pro/400/300", link: "https://www.tascam.eu/en/dr-10l_pro" },
    { model: "Portacapture X6", desc: "Multi Track (4 track + stereo mix) handheld audio recorder", price: 13800, img: "https://picsum.photos/seed/portacapture-x6/400/300", link: "https://www.tascam.eu/en/portacapture_x6" },
    { model: "Portacapture X8", desc: "Multi Track (6 track + stereo mix) handheld audio recorder", price: 18975, img: "https://picsum.photos/seed/portacapture-x8/400/300", link: "https://www.tascam.eu/en/portacapture_x8" },
    { model: "FR-AV2", desc: "Professional 2 track audio recorder for film makers", price: 14950, img: "https://picsum.photos/seed/fr-av2/400/300", link: "https://www.tascam.eu/en/fr-av2" },
    { model: "FR-AV4", desc: "Professional 6 track (4 track + stereo mix) audio recorder", price: 33350, img: "https://picsum.photos/seed/fr-av4/400/300", link: "https://www.tascam.eu/en/fr-av4" },
    { model: "TH-11", desc: "Closed back foldable studio headphone, 50mm 32 Ohm", price: 2128, img: "https://picsum.photos/seed/th-11/400/300", link: "https://www.tascam.eu/en/th-11" },
    { model: "TM-70", desc: "Supercardioid dynamic microphone optimised for podcast", price: 2875, img: "https://picsum.photos/seed/tm-70/400/300", link: "https://www.tascam.eu/en/tm-70" },
    { model: "TM-80", desc: "Cardioid large diaphragm side address condenser microphone", price: 2300, img: "https://picsum.photos/seed/tm-80/400/300", link: "https://www.tascam.eu/en/tm-80" },
    { model: "TM-10LB", desc: "Omnidirectional electret condenser lavalier microphone", price: 3680, img: "https://picsum.photos/seed/tm-10lb/400/300", link: "https://www.tascam.eu/en/tm-10l" },
    { model: "TM-200SG", desc: "Supercardioid electret condenser shotgun microphone", price: 6498, img: "https://picsum.photos/seed/tm-200sg/400/300", link: "https://www.tascam.eu/en/tm-200sg" },
    { model: "TM-90BM", desc: "Supercardioid electret condenser boundary microphone", price: 5980, img: "https://picsum.photos/seed/tm-90bm/400/300", link: "https://www.tascam.eu/en/tm-90bm" },
    { model: "TM-95GN", desc: "Unidirectional electret condenser gooseneck microphone", price: 5980, img: "https://picsum.photos/seed/tm-95gn/400/300", link: "https://www.tascam.eu/en/tm-95gn" },
    { model: "Mixcast 4", desc: "Content production station for podcasts, live streaming", price: 23403, img: "https://picsum.photos/seed/mixcast-4/400/300", link: "https://www.tascam.eu/en/mixcast4" },
    { model: "CS-PCAS20", desc: "Carry bag for Mixcast 4", price: 2875, img: "https://picsum.photos/seed/cs-pcas20/400/300" },
    { model: "US-2x2HR", desc: "High resolution 2 I/O USB Audio MIDI interface", price: 6900, img: "https://picsum.photos/seed/us-2x2hr/400/300", link: "https://www.tascam.eu/en/us-2x2hr" },
    { model: "US-4x4HR", desc: "High resolution 4 I/O USB Audio MIDI interface", price: 8740, img: "https://picsum.photos/seed/us-4x4hr/400/300", link: "https://www.tascam.eu/en/us-4x4hr" },
    { model: "US-16x8", desc: "High resolution 16 in x 8 out USB Audio MIDI interface", price: 14088, img: "https://picsum.photos/seed/us-16x8/400/300", link: "https://www.tascam.eu/en/us-16x08" },
    { model: "Model 12", desc: "10 input mixing console with onboard multitrack digital recorder", price: 25300, img: "https://picsum.photos/seed/model-12/400/300", link: "https://www.tascam.eu/en/model12" },
    { model: "Model 16", desc: "14 input mixing console with onboard multitrack digital recorder", price: 34500, img: "https://picsum.photos/seed/model-16/400/300", link: "https://www.tascam.eu/en/model16" },
    { model: "Model 24", desc: "22 input mixing console with onboard multitrack digital recorder", price: 44850, img: "https://picsum.photos/seed/model-24/400/300", link: "https://www.tascam.eu/en/model24" },
    { model: "MX-8A", desc: "8 channel matrix mixer with DSP, 8 balanced mic/line inputs", price: 37375, img: "https://picsum.photos/seed/mx-8a/400/300", link: "https://www.tascam.eu/en/mx-8a" },
    { model: "MH-8", desc: "8 channel headphone distribution amplifier, 250mW", price: 17250, img: "https://picsum.photos/seed/mh-8/400/300", link: "https://www.tascam.eu/en/mh-8" },
    { model: "CA-XLR2D-AN", desc: "Two channel microphone pre-amplifier for use on DSLR", price: 16100, img: "https://picsum.photos/seed/ca-xlr2d-an/400/300", link: "https://www.tascam.eu/en/ca-xlr2d" },
    { model: "CA-AK1-C", desc: "Hot shoe adaptor for CA-XLR2D-AN for Canon cameras", price: 3163, img: "https://picsum.photos/seed/ca-ak1-c/400/300" },
    { model: "CA-AK1-F", desc: "Hot shoe adaptor for CA-XLR2D-AN for Fujifilm cameras", price: 3163, img: "https://picsum.photos/seed/ca-ak1-f/400/300" },
    { model: "CA-AK1-N", desc: "Hot shoe adaptor for CA-XLR2D-AN for Nikon cameras", price: 7303, img: "https://picsum.photos/seed/ca-ak1-n/400/300" },
    { model: "AK-BT1", desc: "Bluetooth adaptor for wireless control and Atomos", price: 1495, img: "https://picsum.photos/seed/ak-bt1/400/300", link: "https://www.tascam.eu/en/ak-bt1" },
    { model: "AK-BT2", desc: "Bluetooth adaptor for wireless control, audio and video", price: 2473, img: "https://picsum.photos/seed/ak-bt2/400/300", link: "https://www.tascam.eu/en/ak-bt2" },
    { model: "RC-1F", desc: "Unlatched momentary footswitch for Model 12/16/24", price: 1265, img: "https://picsum.photos/seed/rc-1f/400/300" },
    { model: "RC-3F", desc: "3 pedal footswitch for SS-R250N", price: 2013, img: "https://picsum.photos/seed/rc-3f/400/300" },
    { model: "WS-11", desc: "Fur windscreen for handheld recorders", price: 529, img: "https://picsum.photos/seed/ws-11/400/300", link: "https://www.tascam.eu/en/ws-11" },
    { model: "AK-DR11C MK2", desc: "Film making accessory pack for Portacapture and DR series", price: 1587, img: "https://picsum.photos/seed/ak-dr11c-mk2/400/300", link: "https://www.tascam.eu/en/ak-dr11" },
    { model: "AK-DR11G Mk3", desc: "Hand held recording accessory pack for Portacapture", price: 1495, img: "https://picsum.photos/seed/ak-dr11g-mk3/400/300", link: "https://www.tascam.eu/en/ak-dr11" },
    { model: "PS-P520U", desc: "5V 2A power supply with USB A to USB C, MicroB", price: 863, img: "https://picsum.photos/seed/ps-p520u/400/300", link: "https://www.tascam.eu/en/ps-p520u" },
  ],
  "AKG": [
    { model: "AKGW-WMS40 MINI V ISM1", desc: "WMS40 MINI Plug & Play wireless vocal microphone system", price: 5106, img: "https://picsum.photos/seed/akgw-wms40-mini-v-ism1/400/300" },
    { model: "AKGW-WMS40 MINI I ISM1", desc: "WMS40 MINI Plug & Play wireless instrument microphone system", price: 5106, img: "https://picsum.photos/seed/akgw-wms40-mini-i-ism1/400/300" },
    { model: "AKGW-WMS420 V", desc: "WMS420 Wireless Vocal Microphone System", price: 12535, img: "https://picsum.photos/seed/akgw-wms420-v/400/300" },
    { model: "AKGW-WMS420 I", desc: "WMS420 Wireless Instrument Microphone System", price: 11247, img: "https://picsum.photos/seed/akgw-wms420-i/400/300" },
    { model: "AKGW-WMS420 P", desc: "WMS420 Wireless Presenter Microphone System", price: 12834, img: "https://picsum.photos/seed/akgw-wms420-p/400/300" },
    { model: "AKGW-WMS420 H", desc: "WMS420 Wireless Headworn Microphone System", price: 17503, img: "https://picsum.photos/seed/akgw-wms420-h/400/300" },
  ],
  "Catchbox": [
    { model: "Catchbox MOD V2", desc: "Catchbox Mod is a unique microphone solution for audience interaction", price: 50405, img: "https://picsum.photos/seed/catchbox-mod-v2/400/300" },
    { model: "CatchboxMOD V2 -C", desc: "Catchbox MOD V2 with charging case", price: 54234, img: "https://picsum.photos/seed/catchboxmod-v2-c/400/300" },
    { model: "PLU-1CB-1WC", desc: "Catchbox Plus PLU-1CB-1WC complete wireless system", price: 87458, img: "https://picsum.photos/seed/plu-1cb-1wc/400/300", link: "https://catchbox.com/catchbox-plus" },
    { model: "PLU-1CB-1WC-C", desc: "Catchbox Plus PLU-1CB-1WC-C complete wireless system with case", price: 91310, img: "https://picsum.photos/seed/plu-1cb-1wc-c/400/300", link: "https://catchbox.com/catchbox-plus" },
    { model: "PLU-1ST-1DC", desc: "Catchbox Plus PLU-1ST-1DC complete wireless system", price: 84928, img: "https://picsum.photos/seed/plu-1st-1dc/400/300", link: "https://catchbox.com/catchbox-plus" },
    { model: "PLU-1ST-1DC-C", desc: "Catchbox Plus PLU-1ST-1DC-C complete wireless system with case", price: 88670, img: "https://picsum.photos/seed/plu-1st-1dc-c/400/300", link: "https://catchbox.com/catchbox-plus" },
  ],
  "Montarbo": [
    { model: "DSI-12", desc: "USB Audio Interface 1-Channel", price: 6555, img: "https://picsum.photos/seed/dsi-12/400/300", link: "https://www.montarbo.com/prod/dsi-12/" },
    { model: "DSI-22", desc: "USB Audio Interface 2-Channel", price: 8970, img: "https://picsum.photos/seed/dsi-22/400/300", link: "https://www.montarbo.com/prod/dsi-22/" },
    { model: "CR-44", desc: "Passive stereo volume control for 2 pairs of active speakers", price: 6670, img: "https://picsum.photos/seed/cr-44/400/300", link: "https://www.montarbo.com/prod/cr-44/" },
    { model: "CONTROL 2", desc: "RDNET USB Controller (For Nettuno 20 | Nettuno 50)", price: 7188, img: "https://picsum.photos/seed/control-2/400/300" },
    { model: "Nettuno 10 Sub Cover", desc: "Transport Cover for Nettuno 10 Sub", price: 3853, img: "https://picsum.photos/seed/nettuno-10-sub-cover/400/300", link: "https://www.montarbo.com/prod/nettuno-10/" },
    { model: "Nettuno 20 Top Cover", desc: "Transport cover for Nettuno 20 TOP", price: 6210, img: "https://picsum.photos/seed/nettuno-20-top-cover/400/300" },
    { model: "Nettuno 20 Sub Cover", desc: "Transport cover for Nettuno 20 SUB", price: 12282, img: "https://picsum.photos/seed/nettuno-20-sub-cover/400/300" },
  ],
  "Rolls": [
    { model: "MX153", desc: "Mini mixer, 2 x XLR Mic with tone control, 2 x RCA stereo inputs", price: 12075, img: "https://picsum.photos/seed/mx153/400/300", link: "https://rolls.com/product/MX153" },
    { model: "MX310", desc: "Mini mic mixer, 3 x XLR Mic inputs with individual volume", price: 7935, img: "https://picsum.photos/seed/mx310/400/300", link: "https://rolls.com/product/MX310" },
    { model: "MP13", desc: "Microphone pre-amp, balanced & unbalanced I/O, switchable phantom", price: 6325, img: "https://picsum.photos/seed/mp13/400/300", link: "https://rolls.com/product/MP13" },
    { model: "MB15b", desc: "Active stereo bi-directional balanced to unbalanced converter", price: 6325, img: "https://picsum.photos/seed/mb15b/400/300", link: "https://rolls.com/product/MB15b" },
    { model: "HA43 PRO", desc: "4 channel simple headphone amp, RCA & jack inputs", price: 5175, img: "https://picsum.photos/seed/ha43-pro/400/300", link: "https://rolls.com/product/HA43" },
    { model: "PM50SE", desc: "Personal monitor amp, XLR mic through & mix with RCA", price: 4600, img: "https://picsum.photos/seed/pm50se/400/300", link: "https://rolls.com/product/PM50se" },
    { model: "PM60", desc: "Personal monitor with mic preamp, phantom power", price: 6900, img: "https://picsum.photos/seed/pm60/400/300", link: "https://rolls.com/product/PM60" },
    { model: "PM351", desc: "Personal monitor amp, XLR mic pass through & mix with RCA", price: 7820, img: "https://picsum.photos/seed/pm351/400/300", link: "https://rolls.com/product/PM351" },
    { model: "BD87", desc: "Bluetooth audio adaptor/DI box, stereo RCA and minijack", price: 7475, img: "https://picsum.photos/seed/bd87/400/300", link: "https://rolls.com/product/BD87" },
    { model: "HR187", desc: "Bluetooth audio adaptor/DI box, stereo RCA, minijack", price: 10925, img: "https://picsum.photos/seed/hr187/400/300" },
    { model: "SS412", desc: "Passive 4 input source selector, 4 x stereo RCA inputs", price: 6325, img: "https://picsum.photos/seed/ss412/400/300", link: "https://rolls.com/product/SS412" },
    { model: "DB14b", desc: "Passive DI, stereo RCA or minijack inputs with L/R level", price: 4140, img: "https://picsum.photos/seed/db14b/400/300", link: "https://rolls.com/product/DB14" },
    { model: "DB24", desc: "Passive stereo DI, RCA & jack inputs with L/R level", price: 6325, img: "https://picsum.photos/seed/db24/400/300", link: "https://rolls.com/product/DB24" },
    { model: "WP37", desc: "Remote level control plate for RM64, RM67, & RM316", price: 1265, img: "https://picsum.photos/seed/wp37/400/300" },
  ]
};

// Brand logos mapping — ALL brands with available logos
const BrandLogos = {
  "Audio-Technica": "audio-technica.png",
  "Beyerdynamic": "beyerdynamic.png",
  "Tascam": "tascam.png",
  "AKG": null,
  "Catchbox": "catchbox.png",
  "Montarbo": "montarbo.png",
  "Rolls": "rolls.png",
  "Absen": "absen.png",
  "AREC": "arec.png",
  "Alfatron": "alfatron.png",
  "Barix": "barix.png",
  "Biamp": "biamp.png",
  "Bose": "bose-pro.png",
  "Cloud": "cloud.png",
  "Grandview": "grandview.png",
  "InFocus": "infocus.png",
  "Niveo": "niveo.png",
  "SmartBus-G4": "smartbus-g4.png",
  "WyreStorm": "wyrestorm.png"
};

// Categorize products
function categorize(product) {
  const text = `${product.model} ${product.desc}`.toLowerCase();
  if (text.includes('headphone') || text.includes('headset') || text.includes('ear') || text.includes('iem')) return 'Headphones & Headsets';
  if (text.includes('wireless') || text.includes('transmitter') || text.includes('receiver')) return 'Wireless Systems';
  if (text.includes('recorder') || text.includes('recording') || text.includes('handheld audio')) return 'Recorders';
  if (text.includes('mixer') || text.includes('interface') || text.includes('usb') || text.includes('console')) return 'Mixers & Interfaces';
  if (text.includes('microphone') || text.includes('mic') || text.includes('lavalier') || text.includes('lapel') || text.includes('gooseneck') || text.includes('boundary') || text.includes('handheld') || text.includes('drum') || text.includes('instrument') || text.includes('vocal') || text.includes('shotgun') || text.includes('rifle') || text.includes('hanging') || text.includes('headworn') || text.includes('podcast')) return 'Microphones';
  if (text.includes('personal') || text.includes('monitor') || text.includes('headphone amp')) return 'Headphones & Headsets';
  if (text.includes('pre-amp') || text.includes('preamp') || text.includes('di') || text.includes('bluetooth') || text.includes('adapter') || text.includes('selector') || text.includes('source') || text.includes('volume') || text.includes('control') || text.includes('windscreen') || text.includes('accessory') || text.includes('accessories') || text.includes('clamp') || text.includes('stand') || text.includes('clip') || text.includes('case') || text.includes('cover') || text.includes('cushion') || text.includes('power supply')) return 'Accessories';
  return 'Audio';
}

// Add categories to all products
for (const brand in Products) {
  Products[brand].forEach(p => p.category = categorize(p));
}

// State
let currentView = 'categories'; // 'categories' or 'products'
let currentBrand = null;
let currentCategory = 'all';

// Get all unique categories across all brands
function getAllCategories() {
  const categories = new Set();
  for (const brand in Products) {
    Products[brand].forEach(p => categories.add(p.category));
  }
  return Array.from(categories).sort();
}

// Count products per category
function countByCategory(category) {
  let count = 0;
  for (const brand in Products) {
    count += Products[brand].filter(p => p.category === category).length;
  }
  return count;
}

// Category images mapping
const CategoryImages = {
  'Microphones': '../assets/img/categories/microphones.jpg',
  'Headphones & Headsets': '../assets/img/categories/headphones.jpg',
  'Mixers & Interfaces': '../assets/img/categories/mixers.jpg',
  'Recorders': '../assets/img/categories/recorders.jpg',
  'Wireless Systems': '../assets/img/categories/wireless.jpg',
  'Accessories': '../assets/img/categories/microphones.jpg',
  'Audio': '../assets/img/categories/headphones.jpg'
};

// Render brand logos as main view
function renderLogos() {
  const logoGrid = document.getElementById('logoGrid');
  const productsGrid = document.getElementById('productsGrid');
  const tabs = document.getElementById('categoryTabs');
  productsGrid.style.display = 'none';
  tabs.style.display = 'none';
  logoGrid.style.display = 'grid';
  logoGrid.innerHTML = '';
  
  const brands = Object.keys(BrandLogos);
  brands.forEach(brand => {
    const logo = BrandLogos[brand];
    const count = Products[brand] ? Products[brand].length : 0;
    const card = document.createElement('div');
    card.className = 'logo-card';
    
    if (logo) {
      card.innerHTML = `<img src="../assets/brands/${logo}" alt="${brand}" title="${brand} — ${count} products">`;
    } else {
      card.innerHTML = `<span class="logo-fallback" title="${brand} — ${count} products">${brand}</span>`;
    }
    
    card.addEventListener('click', () => {
      // If brand has products, go to products view; otherwise just open external link
      if (Products[brand]) {
        currentBrand = brand;
        currentCategory = 'all';
        currentView = 'products';
        renderProducts();
      } else {
        // No products mapped yet — just log or show alert
        alert(`${brand} — Coming soon!`);
      }
    });
    
    logoGrid.appendChild(card);
  });
}

// Remove the getCategoryIcon function since we're using images now

// Render products by category (across all brands)
function renderProductsByCategory() {
  const logoGrid = document.getElementById('logoGrid');
  const grid = document.getElementById('productsGrid');
  const tabs = document.getElementById('categoryTabs');
  logoGrid.style.display = 'none';
  tabs.style.display = 'none';
  grid.innerHTML = '';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(260px, 1fr))';
  grid.style.gap = '24px';
  
  // Add back button
  const backBtn = document.createElement('div');
  backBtn.style.cssText = 'grid-column:1/-1;margin-bottom:20px;';
  backBtn.innerHTML = `<button class="btn btn-outline" onclick="renderLogos()" style="font-size:0.85rem;padding:8px 16px;"><i class="fas fa-arrow-left"></i> Back to Brands</button><h2 style="margin:20px 0 10px;font-family:var(--font-heading);color:var(--color-text-heading);">${currentCategory}</h2>`;
  grid.appendChild(backBtn);
  
  // Collect all products in this category
  let items = [];
  for (const brand in Products) {
    const brandProducts = Products[brand]
      .filter(p => p.category === currentCategory)
      .map(p => ({ ...p, brand: brand }));
    items.push(...brandProducts);
  }
  
  // Sort by price
  items.sort((a, b) => a.price - b.price);
  
  // Render
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = p.link ? 'pointer' : 'default';
    if (p.link) {
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
          window.open(p.link, '_blank');
        }
      });
    }
    card.innerHTML = `
      <div class="product-image"><img src="${p.img}" alt="${p.model}" style="width:100%;height:100%;object-fit:cover;"></div>
      <div class="product-body">
        <div class="brand-tag">${p.brand} • ${p.category}</div>
        <div class="product-name">${p.model}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">R${p.price.toLocaleString()}<span class="vat-label">incl. VAT (15%)</span></div>
        <button class="add-to-cart" data-id="${p.model}" data-brand="${p.brand}" data-name="${p.model}" data-price="${p.price}" data-img="${p.img}" data-link="${p.link || ''}" data-desc="${p.desc.replace(/"/g, '&quot;')}">${p.link ? 'View Product & Add to Cart' : 'Add to Cart'}</button>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Add event listeners
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const product = {
        id: this.dataset.id + '-' + this.dataset.brand,
        name: this.dataset.name,
        brand: this.dataset.brand,
        price: parseFloat(this.dataset.price),
        desc: this.dataset.desc,
        quantity: 1
      };
      Cart.add(product);
    });
  });
}

// Render brand grid (keep for brands page)
function renderBrands() {
  const grid = document.getElementById('productsGrid');
  const tabs = document.getElementById('categoryTabs');
  tabs.style.display = 'none';
  grid.innerHTML = '';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
  grid.style.gap = '16px';
  
  const brands = Object.keys(Products);
  brands.forEach(brand => {
    const card = document.createElement('div');
    card.className = 'brand-card';
    card.style.cursor = 'pointer';
    card.style.textAlign = 'center';
    card.style.padding = '30px 20px';
    
    const logo = BrandLogos[brand];
    const logoHtml = logo 
      ? `<img src="../assets/brands/${logo}" alt="${brand}" style="max-height:50px;max-width:120px;object-fit:contain;margin-bottom:12px;">`
      : `<div style="font-size:1.5rem;font-weight:700;color:var(--color-text-heading);margin-bottom:12px;font-family:var(--font-heading);">${brand}</div>`;
    
    card.innerHTML = `
      ${logoHtml}
      <div style="font-size:0.75rem;color:var(--color-text-muted);">${Products[brand].length} products</div>
    `;
    card.addEventListener('click', () => {
      currentBrand = brand;
      currentCategory = 'all';
      currentView = 'products';
      renderProducts();
    });
    grid.appendChild(card);
  });
}

// Render products for selected brand
function renderProducts() {
  const logoGrid = document.getElementById('logoGrid');
  const grid = document.getElementById('productsGrid');
  const tabs = document.getElementById('categoryTabs');
  logoGrid.style.display = 'none';
  grid.style.display = 'grid';
  tabs.style.display = 'flex';
  grid.innerHTML = '';
  
  // Add back button
  const backBtn = document.createElement('div');
  backBtn.style.cssText = 'grid-column:1/-1;margin-bottom:20px;';
  backBtn.innerHTML = `<button class="btn btn-outline" onclick="renderLogos()" style="font-size:0.85rem;padding:8px 16px;"><i class="fas fa-arrow-left"></i> Back to Brands</button><h2 style="margin:20px 0 10px;font-family:var(--font-heading);color:var(--color-text-heading);">${currentBrand}</h2>`;
  grid.appendChild(backBtn);
  
  let items = Products[currentBrand];
  
  // Filter by category
  if (currentCategory !== 'all') {
    items = items.filter(p => p.category === currentCategory);
  }
  
  // Sort by price
  items.sort((a, b) => a.price - b.price);
  
  // Render
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = p.link ? 'pointer' : 'default';
    if (p.link) {
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
          window.open(p.link, '_blank');
        }
      });
    }
    card.innerHTML = `
      <div class="product-image"><img src="${p.img}" alt="${p.model}" style="width:100%;height:100%;object-fit:cover;"></div>
      <div class="product-body">
        <div class="brand-tag">${p.category}</div>
        <div class="product-name">${p.model}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">R${p.price.toLocaleString()}<span class="vat-label">incl. VAT (15%)</span></div>
        <button class="add-to-cart" data-id="${p.model}" data-brand="${currentBrand}" data-name="${p.model}" data-price="${p.price}" data-img="${p.img}" data-link="${p.link || ''}" data-desc="${p.desc.replace(/"/g, '&quot;')}">${p.link ? 'View Product & Add to Cart' : 'Add to Cart'}</button>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Add event listeners to buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const product = {
        id: this.dataset.id + '-' + this.dataset.brand,
        name: this.dataset.name,
        brand: this.dataset.brand,
        price: parseFloat(this.dataset.price),
        desc: this.dataset.desc,
        quantity: 1
      };
      Cart.add(product);
    });
  });
}

// Category filter buttons
document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.cat;
    renderProducts();
  });
});

// Cart drawer
const cartIcon = document.getElementById('cartIcon');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');

function openCart() {
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
  renderCart();
}

function closeCart() {
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
}

cartIcon.addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);
cartClose.addEventListener('click', closeCart);

function renderCart() {
  const items = Cart.get();
  
  if (items.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p></div>';
    cartTotal.textContent = 'R 0';
    cartBadge.textContent = '0';
    return;
  }
  
  let total = 0;
  let count = 0;
  
  cartItems.innerHTML = items.map(item => {
    total += item.price * item.quantity;
    count += item.quantity;
    const imgSrc = item.img || '';
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="width:50px;height:50px;background:#f0f0f0;border-radius:4px;overflow:hidden;flex-shrink:0;">
          ${imgSrc ? `<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover;">` : ''}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">R${item.price.toLocaleString()} × ${item.quantity}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="Cart.updateQty('${item.id}', -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="Cart.updateQty('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove('${item.id}')">✕</button>
      </div>
    `;
  }).join('');
  
  cartTotal.textContent = 'R ' + total.toLocaleString();
  cartBadge.textContent = count;
}

// Extend Cart with updateQty
Cart.updateQty = function(id, delta) {
  const items = this.get();
  const item = items.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.remove(id);
    } else {
      localStorage.setItem('enrovel_cart', JSON.stringify(items));
      this.updateUI();
      renderCart();
    }
  }
};

// Checkout button
document.getElementById('cartCheckout').addEventListener('click', function() {
  const items = Cart.get();
  if (items.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  let message = 'Order Summary:\n\n';
  let total = 0;
  items.forEach(item => {
    message += `${item.name} × ${item.quantity} = R${(item.price * item.quantity).toLocaleString()}\n`;
    total += item.price * item.quantity;
  });
  message += `\nTotal (incl. VAT): R${total.toLocaleString()}\n\nContact us to complete your order:`;
  message += `\nEmail: info@enrovel.com`;
  message += `\nPhone: +27 74 662 6356`;
  
  const subject = 'Online Order from Enrovel Website';
  const body = encodeURIComponent(message);
  window.location.href = `mailto:info@enrovel.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});

// Initial render - show brand logos as main page
document.addEventListener('DOMContentLoaded', () => {
  renderLogos();
  Cart.updateUI();
});
