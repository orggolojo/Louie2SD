// Load the site's data + app.js with a stub DOM, then dump every ASAS topic as JSON.
const fs = require("fs"), vm = require("vm");
const repo = process.argv[2], out = process.argv[3];
const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => "" : stub), apply: () => stub, set: () => true, construct: () => stub });
const ctx = { document: stub, window: stub, console, setTimeout: () => 0, Math, JSON };
vm.createContext(ctx);
const src = ["data/subjects.js", "data/asas-latihan.js", "app.js"].map((f) => fs.readFileSync(repo + "/" + f, "utf8")).join("\n") + "\n;globalThis.__S = SUBJECTS;";
vm.runInContext(src, ctx);
// Satu entri per latihan; Latihan 1 memakai nama file lama (asas-<id>.docx).
const data = ctx.__S.flatMap((s) => {
  const t = s.topik.find((x) => x.id === "asas");
  return t.latihan.map((l, i) => ({
    id: s.id, file: "asas-" + s.id + (i ? "-" + (i + 1) : ""), latihan: i + 1,
    nama: s.nama, ikon: s.ikon, ringkasan: t.ringkasan, pg: l.pg, esai: l.esai,
  }));
});
fs.writeFileSync(out, JSON.stringify(data));
console.log(data.map((d) => `${d.nama} L${d.latihan}: ${d.pg.length} pg, ${d.esai.length} esai, ${d.ringkasan.length} ringkasan`).join("\n"));
