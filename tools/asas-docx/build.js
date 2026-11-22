// Build one printable ASAS .docx per subject from asas.json (see export.js).
// Usage: node build.js <asas.json> <imgmap.json> <imgsize.json> <png-dir> <out-dir>
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, BorderStyle,
  Table, TableRow, TableCell, WidthType, ShadingType, PageBreak, Footer, PageNumber,
  LevelFormat, TabStopType,
} = require("docx");

const [, , dataPath, mapPath, sizePath, pngDir, outDir] = process.argv;
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const imgMap = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const imgSize = JSON.parse(fs.readFileSync(sizePath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

const FONT = "Arial";
const HURUF = ["a", "b", "c", "d", "e"];
const CONTENT_W = 9638; // A4 width minus 2 cm margins, in DXA

function gambarRun(g, maxW = 220) {
  const h = imgMap[g];
  if (!h) return null;
  const [w, hh] = imgSize[h] || [600, 600];
  const scale = Math.min(maxW / w, 120 / hh); // tinggi gambar maks. ±3 cm
  return new ImageRun({
    type: "png",
    data: fs.readFileSync(path.join(pngDir, h + ".svg.png")),
    transformation: { width: Math.round(w * scale), height: Math.round(hh * scale) },
  });
}

const p = (text, opts = {}) => new Paragraph({ children: [new TextRun({ text, ...(opts.run || {}) })], ...opts.para });

function judulBagian(text) {
  return new Paragraph({
    keepNext: true,
    spacing: { before: 240, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: "4361EE", space: 2 } },
    children: [new TextRun({ text, bold: true, size: 28, color: "1E3A8A" })],
  });
}

function garisJawaban(n) {
  return Array.from({ length: n }, () => new Paragraph({
    spacing: { before: 200, after: 0 },
    border: { bottom: { style: BorderStyle.DOTTED, size: 6, color: "94A3B8", space: 1 } },
    children: [new TextRun("")],
  }));
}

function soalPG(q, i) {
  const out = [];
  out.push(new Paragraph({
    keepNext: true, keepLines: true,
    spacing: { before: 160, after: 60 },
    indent: { left: 400, hanging: 400 },
    tabStops: [{ type: TabStopType.LEFT, position: 400 }],
    children: [new TextRun({ text: `${i + 1}.`, bold: true }), new TextRun({ text: "\t" + q.soal })],
  }));
  const img = q.gambar && gambarRun(q.gambar);
  if (img) out.push(new Paragraph({ keepNext: true, indent: { left: 400 }, spacing: { after: 60 }, children: [img] }));
  q.pilihan.forEach((opt, k) => {
    out.push(new Paragraph({
      keepNext: k < q.pilihan.length - 1,
      indent: { left: 800, hanging: 400 },
      tabStops: [{ type: TabStopType.LEFT, position: 800 }],
      spacing: { after: 20 },
      children: [new TextRun({ text: `${HURUF[k]}.` }), new TextRun({ text: "\t" + opt })],
    }));
  });
  return out;
}

function soalEsai(q, i) {
  const out = [];
  out.push(new Paragraph({
    keepNext: true, keepLines: true,
    spacing: { before: 200, after: 60 },
    indent: { left: 400, hanging: 400 },
    tabStops: [{ type: TabStopType.LEFT, position: 400 }],
    children: [new TextRun({ text: `${i + 1}.`, bold: true }), new TextRun({ text: "\t" + q.soal })],
  }));
  const img = q.gambar && gambarRun(q.gambar);
  if (img) out.push(new Paragraph({ keepNext: true, indent: { left: 400 }, spacing: { after: 60 }, children: [img] }));
  return out.concat(garisJawaban(3));
}

function kunciTabel(pg) {
  const cols = 5, rows = Math.ceil(pg.length / cols), w = Math.floor(CONTENT_W / cols);
  const border = { style: BorderStyle.SINGLE, size: 4, color: "CBD5E1" };
  const borders = { top: border, bottom: border, left: border, right: border };
  return new Table({
    width: { size: w * cols, type: WidthType.DXA },
    columnWidths: Array(cols).fill(w),
    rows: Array.from({ length: rows }, (_, r) => new TableRow({
      children: Array.from({ length: cols }, (_, c) => {
        const i = c * rows + r; // read down each column: 1–10, 11–20, …
        const q = pg[i];
        return new TableCell({
          borders, width: { size: w, type: WidthType.DXA },
          shading: r % 2 ? { fill: "F1F5F9", type: ShadingType.CLEAR, color: "auto" } : undefined,
          margins: { top: 40, bottom: 40, left: 100, right: 100 },
          children: [new Paragraph({ children: q ? [new TextRun({ text: `${i + 1}. `, bold: true }), new TextRun(`${HURUF[q.jawaban]}. ${q.pilihan[q.jawaban]}`)] : [] })],
        });
      }),
    })),
  });
}

function dokumen(s) {
  const isi = [];
  isi.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [new TextRun({ text: "ASESMEN SUMATIF AKHIR SEMESTER (ASAS)", bold: true, size: 32, color: "1E3A8A" })],
  }));
  isi.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 200 },
    children: [new TextRun({ text: `${s.nama} — Kelas 2 — Latihan ${s.latihan}`, bold: true, size: 28 })],
  }));
  ["Nama", "Kelas", "Tanggal"].forEach((label) => isi.push(new Paragraph({
    spacing: { after: 80 },
    tabStops: [{ type: TabStopType.LEFT, position: 1400 }, { type: TabStopType.RIGHT, position: 6500, leader: "dot" }],
    children: [new TextRun(label), new TextRun("\t:"), new TextRun("\t")],
  })));

  // CEK=soal / CEK=kunci: hanya untuk memeriksa tata letak (Quick Look cuma halaman 1)
  const cek = process.env.CEK;
  // Ringkasan
  if (!cek) isi.push(judulBagian("Ringkasan Materi"));
  (cek ? [] : s.ringkasan).forEach((r) => {
    if (r.judulModul) {
      isi.push(new Paragraph({ keepNext: true, spacing: { before: 160, after: 60 }, children: [new TextRun({ text: r.teks, bold: true, color: "1E3A8A" })] }));
    } else {
      isi.push(new Paragraph({ numbering: { reference: "poin", level: 0 }, spacing: { after: 40 }, children: [new TextRun(r.teks)] }));
    }
  });

  // Soal
  if (!cek) isi.push(new Paragraph({ children: [new PageBreak()] }));
  isi.push(judulBagian("A. Pilihan Ganda"));
  isi.push(p("Berilah tanda silang (X) pada huruf a, b, atau c di depan jawaban yang paling tepat!", { run: { italics: true } }));
  if (cek !== "kunci") s.pg.forEach((q, i) => isi.push(...soalPG(q, i)));

  isi.push(judulBagian("B. Esai"));
  isi.push(p("Jawablah pertanyaan berikut dengan benar!", { run: { italics: true } }));
  if (cek !== "kunci") s.esai.forEach((q, i) => isi.push(...soalEsai(q, i)));

  // Kunci jawaban
  if (!cek) isi.push(new Paragraph({ children: [new PageBreak()] }));
  isi.push(judulBagian("Kunci Jawaban (untuk orang tua/guru)"));
  isi.push(new Paragraph({ keepNext: true, spacing: { after: 80 }, children: [new TextRun({ text: "A. Pilihan Ganda", bold: true })] }));
  isi.push(kunciTabel(s.pg));
  isi.push(new Paragraph({ keepNext: true, spacing: { before: 240, after: 80 }, children: [new TextRun({ text: "B. Esai (contoh jawaban)", bold: true })] }));
  s.esai.forEach((q, i) => isi.push(new Paragraph({
    indent: { left: 400, hanging: 400 }, spacing: { after: 80 },
    tabStops: [{ type: TabStopType.LEFT, position: 400 }],
    children: [new TextRun({ text: `${i + 1}.`, bold: true }), new TextRun("\t" + (q.contohJawaban || "").replace(/<[^>]+>/g, ""))],
  })));

  return new Document({
    creator: "Belajar Yuk!",
    title: `ASAS ${s.nama} Kelas 2 - Latihan ${s.latihan}`,
    styles: { default: { document: { run: { font: FONT, size: 24 } } } },
    numbering: {
      config: [{
        reference: "poin",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 260 } } } }],
      }],
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: `ASAS ${s.nama} (Latihan ${s.latihan}) — halaman `, size: 18, color: "64748B" }), new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "64748B" })],
          })],
        }),
      },
      children: isi,
    }],
  });
}

(async () => {
  for (const s of data) {
    const buf = await Packer.toBuffer(dokumen(s));
    const f = path.join(outDir, `${s.file}.docx`);
    fs.writeFileSync(f, buf);
    console.log(path.basename(f), Math.round(buf.length / 1024) + " KB");
  }
})();
