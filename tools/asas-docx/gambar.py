"""Kumpulkan gambar soal ASAS (SVG) lalu ubah menjadi PNG untuk Word.

Pemakaian: python3 gambar.py <repo> <kerja>
Menulis <kerja>/imgmap.json, <kerja>/imgsize.json, dan <kerja>/png/*.png.
Memakai qlmanage (Quick Look, bawaan macOS) dan sips untuk memotong PNG.
"""
import hashlib, json, os, re, shutil, subprocess, sys

repo, kerja = sys.argv[1], sys.argv[2]
for d in ("svg", "png"):
    shutil.rmtree(f"{kerja}/{d}", ignore_errors=True)
    os.makedirs(f"{kerja}/{d}")

data = json.load(open(f"{kerja}/asas.json"))
peta = {}
for s in data:
    for q in s["pg"] + s["esai"]:
        g = q.get("gambar")
        if not g:
            continue
        h = hashlib.md5(g.encode()).hexdigest()[:12]
        if g.strip().startswith("<svg"):
            open(f"{kerja}/svg/{h}.svg", "w").write(g)
        else:
            shutil.copy(os.path.join(repo, g), f"{kerja}/svg/{h}.svg")
        peta[g] = h

svgs = sorted(os.listdir(f"{kerja}/svg"))
if svgs:
    subprocess.run(["qlmanage", "-t", "-s", "600", "-o", f"{kerja}/png"] + [f"{kerja}/svg/{f}" for f in svgs], capture_output=True)

# Quick Look membuat PNG persegi 600x600; potong ke rasio viewBox aslinya.
ukuran = {}
for f in svgs:
    m = re.search(r'viewBox="\s*[-\d.]+[ ,]+[-\d.]+[ ,]+([\d.]+)[ ,]+([\d.]+)', open(f"{kerja}/svg/{f}").read(3000))
    w, h = (float(m.group(1)), float(m.group(2))) if m else (1, 1)
    cw, ch = (600, round(600 * h / w)) if w >= h else (round(600 * w / h), 600)
    if (cw, ch) != (600, 600):
        subprocess.run(["sips", "-c", str(ch), str(cw), f"{kerja}/png/{f}.png"], capture_output=True)
    ukuran[f[:-4]] = [cw, ch]

json.dump(peta, open(f"{kerja}/imgmap.json", "w"))
json.dump(ukuran, open(f"{kerja}/imgsize.json", "w"))
print(len(peta), "gambar")
