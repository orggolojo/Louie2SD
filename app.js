/* ============================================================
   Belajar Yuk! — Logika aplikasi
   Semua tampilan dibuat dari data di data/subjects.js
   ============================================================ */

const app = document.getElementById("app");
const breadcrumb = document.getElementById("breadcrumb");
const homeBtn = document.getElementById("homeBtn");
const confettiLayer = document.getElementById("confetti");

const HURUF = ["A", "B", "C", "D", "E"];

/* ---------- Pembantu ---------- */
function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text != null) node.textContent = opts.text;
  if (opts.html != null) node.innerHTML = opts.html;
  if (opts.on) for (const [ev, fn] of Object.entries(opts.on)) node.addEventListener(ev, fn);
  for (const c of [].concat(children)) if (c) node.appendChild(c);
  return node;
}

function clear() { app.innerHTML = ""; }

function findSubject(id) { return SUBJECTS.find((s) => s.id === id); }
function findTopic(subject, id) { return subject.topik.find((t) => t.id === id); }

/* ---------- Pembantu untuk SET soal acak ---------- */

// Mengingat set terakhir yang dipakai supaya "Coba Lagi" / buka ulang
// memberi set yang BERBEDA (bergiliran & acak). Kuncinya per-topik per-jenis.
const setTerakhir = {};

// Ambil daftar set soal, mendukung format baru (pilihanGandaSets / esaiSets)
// maupun format lama (pilihanGanda / esai) agar tetap aman.
function ambilSemuaSet(topic, jenis) {
  if (jenis === "kuis") {
    if (Array.isArray(topic.pilihanGandaSets) && topic.pilihanGandaSets.length) return topic.pilihanGandaSets;
    if (Array.isArray(topic.pilihanGanda) && topic.pilihanGanda.length) return [topic.pilihanGanda];
  } else {
    if (Array.isArray(topic.esaiSets) && topic.esaiSets.length) return topic.esaiSets;
    if (Array.isArray(topic.esai) && topic.esai.length) return [topic.esai];
  }
  return [];
}

// Berapa banyak soal tersedia (untuk mengaktifkan/menyembunyikan tab)
function jumlahSoal(topic, jenis) {
  return ambilSemuaSet(topic, jenis).reduce((n, set) => n + (set?.length || 0), 0);
}

// Daftar set mencocokkan (format: array of { instruksi, pasangan: [...] })
function ambilSetCocok(topic) {
  return Array.isArray(topic.cocokkanSets) ? topic.cocokkanSets : [];
}
function jumlahCocok(topic) {
  return ambilSetCocok(topic).reduce((n, set) => n + (set?.pasangan?.length || 0), 0);
}

// Pilih indeks set berikutnya: acak, tetapi berbeda dari yang terakhir dipakai.
function pilihIndeksSet(topicId, jenis, totalSet) {
  if (totalSet <= 1) return 0;
  const kunci = topicId + ":" + jenis;
  const sebelumnya = setTerakhir[kunci];
  let idx;
  do { idx = Math.floor(Math.random() * totalSet); } while (idx === sebelumnya);
  setTerakhir[kunci] = idx;
  return idx;
}

// Acak urutan item dalam sebuah array (membuat latihan lebih bervariasi).
function acak(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   HALAMAN 1 — Daftar mata pelajaran
   ============================================================ */
function renderHome() {
  breadcrumb.textContent = "";
  clear();

  app.appendChild(el("h1", { class: "page-title", text: "Selamat Datang! 👋" }));
  app.appendChild(el("p", { class: "page-subtitle", text: "Pilih mata pelajaran yang ingin kamu pelajari hari ini." }));

  const grid = el("div", { class: "subject-grid" });

  SUBJECTS.forEach((s) => {
    const jumlahTopik = s.topik.length;
    const card = el("div", {
      class: "subject-card",
      on: { click: () => renderSubject(s.id) }
    }, [
      el("span", { class: "big-icon", text: s.ikon }),
      el("h2", { text: s.nama }),
      el("p", { text: s.deskripsi || "" }),
      el("span", { class: "pill", text: jumlahTopik + " topik seru" })
    ]);
    card.style.borderColor = s.warna;
    grid.appendChild(card);
  });

  // Kartu "akan datang" sebagai ajakan menambah mata pelajaran lain
  grid.appendChild(el("div", { class: "subject-card coming" }, [
    el("span", { class: "big-icon", text: "➕" }),
    el("h2", { text: "Akan Datang" }),
    el("p", { text: "Mata pelajaran lain akan ditambahkan di sini." })
  ]));

  app.appendChild(grid);
}

/* ============================================================
   HALAMAN 2 — Daftar topik dalam satu mata pelajaran
   ============================================================ */
function renderSubject(subjectId) {
  const subject = findSubject(subjectId);
  if (!subject) return renderHome();

  breadcrumb.textContent = subject.nama;
  clear();

  app.appendChild(backLink("Kembali", renderHome));
  app.appendChild(el("h1", { class: "page-title", text: subject.ikon + " " + subject.nama }));
  app.appendChild(el("p", { class: "page-subtitle", text: "Pilih topik yang mau kamu pelajari." }));

  const grid = el("div", { class: "topic-grid" });
  subject.topik.forEach((t) => {
    const card = el("div", {
      class: "topic-card",
      on: { click: () => renderTopic(subject.id, t.id) }
    }, [
      el("span", { class: "t-emoji", text: t.emoji || "📘" }),
      el("div", {}, [
        el("h3", { text: t.judul }),
        el("small", { text: "Ringkasan • Kuis • Esai" })
      ])
    ]);
    card.style.borderLeftColor = subject.warna;
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

/* ============================================================
   HALAMAN 3 — Topik dengan tab Ringkasan / Pilihan Ganda / Esai
   ============================================================ */
function renderTopic(subjectId, topicId, activeTab = "ringkasan") {
  const subject = findSubject(subjectId);
  const topic = findTopic(subject, topicId);
  if (!topic) return renderSubject(subjectId);

  breadcrumb.textContent = subject.nama + " › " + topic.judul;
  clear();

  app.appendChild(backLink("Kembali", () => renderSubject(subjectId)));
  app.appendChild(el("h1", { class: "page-title", text: (topic.emoji || "📘") + " " + topic.judul }));

  // Tab
  const tabs = el("div", { class: "tabs" });
  const tabDefs = [
    { id: "ringkasan", label: "📖 Ringkasan", ada: topic.ringkasan?.length },
    { id: "ayat", label: "📜 Ayat Alkitab", ada: topic.ayatAlkitab?.length },
    { id: "kuis", label: "📝 Pilihan Ganda", ada: jumlahSoal(topic, "kuis") },
    { id: "esai", label: "✏️ Esai", ada: jumlahSoal(topic, "esai") },
    { id: "cocok", label: "🔗 Mencocokkan", ada: jumlahCocok(topic) }
  ];
  tabDefs.forEach((td) => {
    if (!td.ada) return;
    tabs.appendChild(el("button", {
      class: "tab" + (td.id === activeTab ? " active" : ""),
      text: td.label,
      on: { click: () => renderTopic(subjectId, topicId, td.id) }
    }));
  });
  app.appendChild(tabs);

  const content = el("div", { class: "tab-content" });
  app.appendChild(content);

  if (activeTab === "ringkasan") renderRingkasan(content, topic);
  else if (activeTab === "ayat") renderAyat(content, topic);
  else if (activeTab === "kuis") renderKuis(content, subject, topic);
  else if (activeTab === "esai") renderEsai(content, topic);
  else if (activeTab === "cocok") renderCocok(content, subject, topic);
}

/* ---------- Tab: Ayat Alkitab ---------- */
function renderAyat(root, topic) {
  root.appendChild(el("h2", { class: "section-title", text: "Firman Tuhan untuk Kita 📜" }));
  root.appendChild(el("p", { class: "page-subtitle", text: "Yuk, baca dan renungkan ayat Alkitab yang mengajarkan hidup rukun." }));

  const list = el("div", { class: "verse-list" });
  topic.ayatAlkitab.forEach((item, i) => {
    const card = el("div", { class: "verse-card" }, [
      el("div", { class: "verse-ref" }, [
        el("span", { class: "verse-icon", text: "📖" }),
        el("span", { text: item.referensi })
      ]),
      el("blockquote", { class: "verse-text", text: "\u201C" + item.teks + "\u201D" })
    ]);
    if (item.makna) {
      card.appendChild(el("div", { class: "verse-makna" }, [
        el("strong", { text: "Apa artinya? " }),
        document.createTextNode(item.makna)
      ]));
    }
    card.style.animationDelay = (i * 0.08) + "s";
    list.appendChild(card);
  });
  root.appendChild(list);
}

/* ---------- Tab: Ringkasan ---------- */
function renderRingkasan(root, topic) {
  root.appendChild(el("h2", { class: "section-title", text: "Yuk, Baca Ringkasannya! 📖" }));
  const list = el("div", { class: "summary-list" });
  topic.ringkasan.forEach((item, i) => {
    const row = el("div", { class: "summary-item" }, [
      el("span", { class: "s-emoji", text: item.emoji || "⭐" }),
      el("span", { text: item.teks })
    ]);
    row.style.animationDelay = (i * 0.06) + "s";
    list.appendChild(row);
  });
  root.appendChild(list);
}

/* ---------- Tab: Pilihan Ganda ---------- */
function renderKuis(root, subject, topic) {
  const semuaSet = ambilSemuaSet(topic, "kuis");
  let soalList = [];
  let setIdx = 0;
  let indeks = 0;
  let benar = 0;
  let sudahJawab = false;

  // Pilih satu set (acak & berbeda dari sebelumnya), lalu acak urutan soalnya.
  function muatSet() {
    setIdx = pilihIndeksSet(topic.id, "kuis", semuaSet.length);
    soalList = acak(semuaSet[setIdx] || []);
    indeks = 0;
    benar = 0;
  }

  const label = el("div", { class: "set-label" });
  const progress = el("div", { class: "quiz-progress" });
  const bar = el("div", { class: "progress-bar" }, [el("div", { class: "progress-fill" })]);
  const area = el("div", {});
  root.appendChild(label);
  root.appendChild(progress);
  root.appendChild(bar);
  root.appendChild(area);

  function perbaruiLabel() {
    label.textContent = semuaSet.length > 1
      ? `📦 Set soal ${setIdx + 1} dari ${semuaSet.length} • berganti otomatis saat kamu "Coba Lagi"`
      : "";
  }

  function tampilkanSoal() {
    perbaruiLabel();
    sudahJawab = false;
    const q = soalList[indeks];
    progress.textContent = `Soal ${indeks + 1} dari ${soalList.length}`;
    bar.querySelector(".progress-fill").style.width = ((indeks) / soalList.length * 100) + "%";

    area.innerHTML = "";
    const card = el("div", { class: "quiz-card" });
    card.appendChild(el("div", { class: "quiz-question", text: q.soal }));

    const opts = el("div", { class: "options" });
    q.pilihan.forEach((teks, i) => {
      const btn = el("button", { class: "option" }, [
        el("span", { class: "letter", text: HURUF[i] }),
        el("span", { text: teks })
      ]);
      btn.addEventListener("click", () => pilih(i, opts, card));
      opts.appendChild(btn);
    });
    card.appendChild(opts);
    area.appendChild(card);
  }

  function pilih(dipilih, opts, card) {
    if (sudahJawab) return;
    sudahJawab = true;
    const q = soalList[indeks];
    const tombol = [...opts.children];

    tombol.forEach((b, i) => {
      b.disabled = true;
      if (i === q.jawaban) b.classList.add("correct");
      if (i === dipilih && dipilih !== q.jawaban) b.classList.add("wrong");
    });

    const tepat = dipilih === q.jawaban;
    if (tepat) { benar++; tebarkanBintang(); }

    const terakhir = indeks === soalList.length - 1;
    const fb = el("div", { class: "feedback " + (tepat ? "ok" : "no") });
    fb.appendChild(document.createTextNode(
      tepat ? "🎉 Hebat! Jawabanmu benar." : "💡 Belum tepat. " + (q.penjelasan || "")
    ));
    if (tepat && q.penjelasan) {
      fb.appendChild(el("span", { class: "next-hint", text: q.penjelasan }));
    }
    card.appendChild(fb);

    const nextBtn = el("button", {
      class: "btn big",
      text: terakhir ? "Lihat Hasil 🏆" : "Soal Berikutnya ➡️",
      on: { click: () => { if (terakhir) tampilkanHasil(); else { indeks++; tampilkanSoal(); } } }
    });
    card.appendChild(el("div", { class: "btn-row" }, [nextBtn]));
  }

  function tampilkanHasil() {
    progress.textContent = "";
    bar.querySelector(".progress-fill").style.width = "100%";
    area.innerHTML = "";

    const total = soalList.length;
    const persen = Math.round((benar / total) * 100);
    let emoji, pesan, bintang;
    if (persen === 100) { emoji = "🏆"; pesan = "Luar biasa! Semua benar!"; bintang = 3; }
    else if (persen >= 60) { emoji = "🌟"; pesan = "Bagus sekali! Terus semangat belajar."; bintang = 2; }
    else { emoji = "💪"; pesan = "Ayo coba lagi, kamu pasti bisa!"; bintang = 1; }

    const bintangStr = "⭐".repeat(bintang) + "☆".repeat(3 - bintang);

    const card = el("div", { class: "result-card" }, [
      el("div", { class: "result-emoji", text: emoji }),
      el("div", { class: "stars", text: bintangStr }),
      el("div", { class: "result-score", text: benar + " / " + total + " benar" }),
      el("div", { class: "result-msg", text: pesan }),
      el("div", { class: "btn-row" }, [
        el("button", { class: "btn big", text: "Coba Set Lain 🔄", on: { click: () => { muatSet(); tampilkanSoal(); } } }),
        el("button", { class: "btn secondary", text: "Kembali ke Topik", on: { click: () => renderSubject(subject.id) } })
      ])
    ]);
    area.appendChild(card);
    if (bintang >= 2) tebarkanBintang(true);
  }

  muatSet();
  tampilkanSoal();
}

/* ---------- Tab: Esai ---------- */
function renderEsai(root, topic) {
  const semuaSet = ambilSemuaSet(topic, "esai");
  let setIdx = 0;

  root.appendChild(el("h2", { class: "section-title", text: "Jawab Pertanyaan Berikut ✏️" }));
  root.appendChild(el("p", { class: "page-subtitle", text: "Tulis jawabanmu, lalu tekan tombol untuk melihat contoh jawaban." }));

  const label = el("div", { class: "set-label" });
  const toolbar = el("div", { class: "btn-row" });
  const list = el("div", { class: "essay-list" });
  root.appendChild(label);
  root.appendChild(toolbar);
  root.appendChild(list);

  if (semuaSet.length > 1) {
    toolbar.appendChild(el("button", {
      class: "btn",
      text: "Soal Lain 🔄",
      on: { click: muatSet }
    }));
  }

  function muatSet() {
    setIdx = pilihIndeksSet(topic.id, "esai", semuaSet.length);
    label.textContent = semuaSet.length > 1
      ? `📦 Set soal ${setIdx + 1} dari ${semuaSet.length} • tekan "Soal Lain" untuk soal berbeda`
      : "";

    const soalEsai = acak(semuaSet[setIdx] || []);
    list.innerHTML = "";
    soalEsai.forEach((item, i) => {
      const card = el("div", { class: "essay-card" });
      card.appendChild(el("div", { class: "essay-q" }, [
        el("span", { class: "essay-num", text: String(i + 1) }),
        document.createTextNode(item.soal)
      ]));
      const textarea = el("textarea", { });
      card.appendChild(textarea);
      const answer = el("div", { class: "answer-box", html: "<strong>Contoh jawaban:</strong> " + item.contohJawaban });
      answer.style.display = "none";

      // Tombol baru bisa diklik SETELAH anak menulis jawaban dulu.
      const btn = el("button", {
        class: "btn reveal-btn",
        text: "Lihat Contoh Jawaban 👀",
        on: {
          click: () => {
            if (btn.disabled) return;
            const buka = answer.style.display === "none";
            answer.style.display = buka ? "block" : "none";
            btn.textContent = buka ? "Sembunyikan Jawaban 🙈" : "Lihat Contoh Jawaban 👀";
          }
        }
      });

      const hint = el("div", { class: "essay-hint", text: "✍️ Tulis jawabanmu dulu, ya." });

      function perbaruiTombol() {
        const adaIsi = textarea.value.trim().length > 0;
        btn.disabled = !adaIsi;
        hint.style.display = adaIsi ? "none" : "block";
      }
      textarea.addEventListener("input", perbaruiTombol);
      perbaruiTombol(); // mulai dalam keadaan nonaktif

      card.appendChild(hint);
      card.appendChild(btn);
      card.appendChild(answer);
      list.appendChild(card);
    });
  }

  muatSet();
}

/* ---------- Tab: Mencocokkan Jawaban ---------- */
function renderCocok(root, subject, topic) {
  const semuaSet = ambilSetCocok(topic);
  let setIdx = 0;

  root.appendChild(el("h2", { class: "section-title", text: "Cocokkan Jawabannya! 🔗" }));
  const info = el("p", { class: "page-subtitle" });
  root.appendChild(info);

  const label = el("div", { class: "set-label" });
  const toolbar = el("div", { class: "btn-row" });
  root.appendChild(label);
  root.appendChild(toolbar);

  // Wadah: SVG untuk garis + dua kolom
  const wrap = el("div", { class: "match-wrap" });
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "match-lines");
  const kolomKiri = el("div", { class: "match-col left" });
  const kolomKanan = el("div", { class: "match-col right" });
  wrap.appendChild(svg);
  wrap.appendChild(kolomKiri);
  wrap.appendChild(kolomKanan);
  root.appendChild(wrap);

  const pesan = el("div", { class: "match-status" });
  root.appendChild(pesan);

  if (semuaSet.length > 1) {
    toolbar.appendChild(el("button", { class: "btn", text: "Soal Lain 🔄", on: { click: muatSet } }));
  }
  const ulangBtn = el("button", { class: "btn secondary", text: "Ulangi 🧽", on: { click: () => mulaiUlang() } });
  toolbar.appendChild(ulangBtn);

  // State pemilihan
  let dataSet, pasangan, pilihKiri, selesai, benar;

  function muatSet() {
    setIdx = pilihIndeksSet(topic.id, "cocok", semuaSet.length);
    label.textContent = semuaSet.length > 1
      ? `📦 Set soal ${setIdx + 1} dari ${semuaSet.length} • tekan "Soal Lain" untuk soal berbeda`
      : "";
    mulaiUlang();
  }

  function mulaiUlang() {
    dataSet = semuaSet[setIdx];
    info.textContent = dataSet.instruksi || "Ketuk gambar di kiri, lalu ketuk pasangannya di kanan.";
    // Pasangan diacak kiri & kanan terpisah supaya posisinya tidak sejajar
    pasangan = dataSet.pasangan.map((p, i) => ({ ...p, id: i }));
    pilihKiri = null;
    selesai = 0;
    benar = 0;
    gambarUlang();
  }

  function gambarUlang() {
    kolomKiri.innerHTML = "";
    kolomKanan.innerHTML = "";
    pesan.textContent = "";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const kiriAcak = acak(pasangan);
    const kananAcak = acak(pasangan);

    kiriAcak.forEach((p) => {
      const isi = [];
      if (p.kiri.gambar) {
        isi.push(el("img", { class: "match-img" }));
        isi[isi.length - 1].src = p.kiri.gambar;
        isi[isi.length - 1].alt = p.kiri.teks || "";
      } else {
        isi.push(el("span", { class: "match-emoji", text: p.kiri.emoji || "❓" }));
      }
      if (p.kiri.teks) isi.push(el("span", { class: "match-teks", text: p.kiri.teks }));
      const item = el("button", { class: "match-item" }, isi);
      item.dataset.id = p.id;
      item.addEventListener("click", () => klikKiri(item, p));
      kolomKiri.appendChild(item);
    });

    kananAcak.forEach((p) => {
      const item = el("button", { class: "match-item kanan" }, [
        el("span", { class: "match-teks", text: p.kanan })
      ]);
      item.dataset.id = p.id;
      item.addEventListener("click", () => klikKanan(item, p));
      kolomKanan.appendChild(item);
    });
  }

  function klikKiri(item, p) {
    if (item.classList.contains("matched")) return;
    // batalkan pilihan kiri sebelumnya
    [...kolomKiri.children].forEach((c) => c.classList.remove("selected"));
    item.classList.add("selected");
    pilihKiri = { item, p };
  }

  function klikKanan(item, p) {
    if (item.classList.contains("matched")) return;
    if (!pilihKiri) {
      pesan.textContent = "👆 Pilih dulu gambar di sebelah kiri, ya.";
      pesan.className = "match-status warn";
      return;
    }
    // Cocok jika nilai di kanan sama. Ini membuat jawaban yang
    // teksnya sama (misalnya "Aturan di rumah") tetap dianggap benar.
    const cocok = pilihKiri.p.kanan === p.kanan && !item.classList.contains("matched");
    if (cocok) {
      pilihKiri.item.classList.remove("selected");
      pilihKiri.item.classList.add("matched");
      item.classList.add("matched");
      tarikGaris(pilihKiri.item, item);
      benar++;
      selesai++;
      tebarkanBintang();
      pesan.textContent = "✅ Benar! Pasangan cocok.";
      pesan.className = "match-status ok";
      pilihKiri = null;
      if (selesai === pasangan.length) selesaiSemua();
    } else {
      // tanda salah sejenak
      pilihKiri.item.classList.add("shake");
      item.classList.add("shake");
      const salahKiri = pilihKiri.item;
      setTimeout(() => { salahKiri.classList.remove("shake", "selected"); item.classList.remove("shake"); }, 450);
      pesan.textContent = "❌ Belum cocok. Coba lagi, ya.";
      pesan.className = "match-status no";
      pilihKiri = null;
    }
  }

  function tarikGaris(a, b) {
    const box = wrap.getBoundingClientRect();
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", ra.right - box.left);
    line.setAttribute("y1", ra.top + ra.height / 2 - box.top);
    line.setAttribute("x2", rb.left - box.left);
    line.setAttribute("y2", rb.top + rb.height / 2 - box.top);
    line.setAttribute("class", "match-line");
    svg.appendChild(line);
  }

  function selesaiSemua() {
    pesan.textContent = "🎉 Hebat! Semua pasangan sudah cocok!";
    pesan.className = "match-status done";
    tebarkanBintang(true);
  }

  muatSet();
}

/* ---------- Komponen kecil ---------- */
function backLink(teks, fn) {
  return el("button", { class: "back-link", text: "⬅️ " + teks, on: { click: fn } });
}

/* ---------- Animasi bintang/konfeti ---------- */
function tebarkanBintang(banyak = false) {
  const simbol = ["⭐", "🌟", "✨", "🎉", "💛", "🎈"];
  const jumlah = banyak ? 36 : 12;
  for (let i = 0; i < jumlah; i++) {
    const p = el("span", { class: "confetti-piece", text: simbol[Math.floor(Math.random() * simbol.length)] });
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (1.6 + Math.random() * 1.6) + "s";
    p.style.fontSize = (1.1 + Math.random() * 1.4) + "rem";
    confettiLayer.appendChild(p);
    setTimeout(() => p.remove(), 3600);
  }
}

/* ---------- Mulai ---------- */
homeBtn.addEventListener("click", renderHome);
renderHome();
