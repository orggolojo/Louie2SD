// Load the site's data + app.js with a stub DOM, then dump every ASAS topic as JSON.
const fs = require("fs"), vm = require("vm");
const repo = process.argv[2], out = process.argv[3];
const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => "" : stub), apply: () => stub, set: () => true, construct: () => stub });
const ctx = { document: stub, window: stub, console, setTimeout: () => 0, Math, JSON };
vm.createContext(ctx);
const src = fs.readFileSync(repo + "/data/subjects.js", "utf8") + "\n" + fs.readFileSync(repo + "/app.js", "utf8") + "\n;globalThis.__S = SUBJECTS;";
vm.runInContext(src, ctx);
const data = ctx.__S.map((s) => {
  const t = s.topik.find((x) => x.id === "asas");
  return { id: s.id, nama: s.nama, ikon: s.ikon, ringkasan: t.ringkasan, pg: t.pilihanGandaSets.flat(), esai: t.esaiSets.flat() };
});
fs.writeFileSync(out, JSON.stringify(data));
console.log(data.map((d) => `${d.nama}: ${d.pg.length} pg, ${d.esai.length} esai, ${d.ringkasan.length} ringkasan`).join("\n"));
