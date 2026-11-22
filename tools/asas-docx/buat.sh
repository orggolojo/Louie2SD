#!/bin/sh
# Buat ulang file cetak ASAS (.docx) untuk semua mata pelajaran ke folder cetak/.
# Jalankan dari folder repo:  sh tools/asas-docx/buat.sh
# Butuh: macOS (qlmanage, sips), Node.js, dan Python 3.
set -e
REPO=$(cd "$(dirname "$0")/../.." && pwd)
ALAT="$REPO/tools/asas-docx"
KERJA=$(mktemp -d)
[ -d "$ALAT/node_modules/docx" ] || (cd "$ALAT" && npm install --silent)
node "$ALAT/export.js" "$REPO" "$KERJA/asas.json"
python3 "$ALAT/gambar.py" "$REPO" "$KERJA"
node "$ALAT/build.js" "$KERJA/asas.json" "$KERJA/imgmap.json" "$KERJA/imgsize.json" "$KERJA/png" "$REPO/cetak"
for f in "$REPO"/cetak/*.docx; do zip -dq "$f" '*/' >/dev/null 2>&1 || true; done
rm -rf "$KERJA"
