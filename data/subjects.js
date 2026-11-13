/*
 * ============================================================
 *  DATA MATA PELAJARAN  (Belajar Yuk!)
 * ============================================================
 *
 *  CARA MENAMBAH MATA PELAJARAN BARU:
 *  1. Salin satu blok { ... } di dalam array SUBJECTS di bawah.
 *  2. Ganti isinya (id, nama, ikon, warna, dan topik-topiknya).
 *  3. Simpan file ini. Website akan otomatis menampilkannya.
 *
 *  Setiap "topik" (tampil sebagai MODUL di website) boleh punya:
 *   - ringkasan        : daftar poin ringkasan (kalimat pendek)
 *   - pilihanGandaSets : BEBERAPA SET soal pilihan ganda
 *   - esaiSets         : BEBERAPA SET soal uraian singkat
 *   - cocokkanSets     : BEBERAPA SET permainan mencocokkan
 *  Soal & ringkasan boleh diberi "gambar": "img/.../file.svg"
 *
 *  >>> TENTANG "SET" SOAL <<<
 *  Agar anak bisa berlatih dengan banyak variasi soal, soal
 *  dikelompokkan ke dalam beberapa "set". Setiap kali anak
 *  membuka kuis / esai atau menekan "Coba Lagi", aplikasi akan
 *  menampilkan SET yang BERBEDA secara bergiliran & acak.
 *
 *  pilihanGandaSets: [
 *    [ ...soal set 1... ],
 *    [ ...soal set 2... ],
 *    [ ...soal set 3... ]
 *  ]
 *
 *  Mau menambah set? Tinggal tambahkan satu array [ ... ] lagi.
 *  Mau soal lebih banyak dalam satu set? Tambah objek soal di
 *  dalam array set tersebut. Tidak perlu tahu coding.
 * ============================================================
 */

/* ============================================================
 *  DEFINISI MATA PELAJARAN BAHASA INDONESIA
 *  (dipisah agar mudah dibaca; dipakai di array SUBJECTS)
 *  Fokus: Paragraf, Fabel, Antonim — Bab 2 "Serunya Membaca Fabel".
 * ============================================================ */
const BAHASA_INDONESIA_SUBJECT = {
  id: "bahasa-indonesia",
  nama: "Bahasa Indonesia",
  ikon: "📚",
  warna: "#06d6a0",
  deskripsi: "Belajar paragraf, fabel, antonim, huruf kapital, puisi, petunjuk, dan deskripsi.",
  topik: [

    /* ========================================================
     *  TOPIK 1 — PARAGRAF
     * ====================================================== */
    {
      id: "paragraf",
      judul: "Paragraf dalam Cerita",
      emoji: "📝",

      ringkasan: [
        { emoji: "📝", teks: "Paragraf adalah kumpulan beberapa kalimat yang menceritakan satu bagian cerita." },
        { emoji: "📖", teks: "Dalam fabel, cerita disusun menjadi beberapa paragraf agar mudah dibaca dan dipahami." },
        { emoji: "➡️", teks: "Kalimat dalam paragraf disusun berurutan, dari awal, tengah, hingga akhir cerita." },
        { emoji: "🔢", teks: "Cerita yang acak bisa kita urutkan menjadi paragraf yang runtut sesuai jalan ceritanya." },
        { emoji: "🧩", teks: "Setiap paragraf menceritakan satu peristiwa penting dalam cerita." },
        { emoji: "✍️", teks: "Kata-kata sederhana membuat paragraf mudah dipahami pembaca." },
        { emoji: "🗣️", teks: "Setelah membaca, kita bisa menceritakan kembali isi cerita dengan kata-kata sendiri." },
        { emoji: "⭐", teks: "Saat menceritakan kembali, kita cukup menyampaikan bagian-bagian pentingnya saja." },
        { emoji: "😊", teks: "Manfaat menceritakan kembali: lebih mudah memahami cerita dan berani berbicara di depan orang lain." },
        { emoji: "🙂", teks: "Ceritakan kembali isi cerita dengan bahasa yang sopan dan lantang." },
        { emoji: "📑", teks: "Teks petunjuk berisi langkah-langkah berurutan untuk melakukan sesuatu, seperti cara menyiram tanaman." }
      ],

      /* ===== 6 SET SOAL PILIHAN GANDA (digandakan) ===== */
      pilihanGandaSets: [

        // ---------- SET 1 ----------
        [
          {
            soal: "Kumpulan beberapa kalimat yang menceritakan satu bagian cerita disebut ....",
            pilihan: ["Paragraf", "Judul", "Gambar"],
            jawaban: 0,
            penjelasan: "Paragraf adalah kumpulan kalimat yang menceritakan satu bagian cerita."
          },
          {
            soal: "Kalimat dalam sebuah paragraf sebaiknya disusun secara ....",
            pilihan: ["Acak", "Berurutan", "Terbalik"],
            jawaban: 1,
            penjelasan: "Kalimat disusun berurutan agar cerita mudah diikuti."
          },
          {
            soal: "Agar paragraf mudah dipahami, kita menggunakan kata-kata yang ....",
            pilihan: ["Sederhana", "Sulit", "Asing"],
            jawaban: 0,
            penjelasan: "Kata-kata sederhana membuat isi cerita mudah dipahami."
          },
          {
            soal: "Saat menceritakan kembali isi fabel, kita menyampaikan ....",
            pilihan: ["Semua kata persis", "Bagian pentingnya saja", "Hanya judulnya"],
            jawaban: 1,
            penjelasan: "Kita cukup menceritakan bagian-bagian penting saja."
          },
          {
            soal: "Menceritakan kembali isi fabel dilakukan dengan bahasa yang ....",
            pilihan: ["Kasar", "Sopan", "Marah"],
            jawaban: 1,
            penjelasan: "Menceritakan kembali dilakukan dengan bahasa yang sopan."
          },
          {
            soal: "Berikut ini manfaat menceritakan kembali isi fabel, KECUALI ....",
            pilihan: ["Memudahkan memahami cerita", "Membantu berbagi cerita", "Membuat kita mengantuk"],
            jawaban: 2,
            penjelasan: "Manfaatnya: memahami cerita, berbagi cerita, dan percaya diri berbicara."
          },
          {
            soal: "Teks yang berisi langkah-langkah melakukan sesuatu disebut teks ....",
            pilihan: ["Petunjuk", "Berita", "Cerita"],
            jawaban: 0,
            penjelasan: "Teks petunjuk berisi langkah-langkah melakukan sesuatu."
          },
          {
            soal: "Dalam cerita 'Kura-Kura dan Kelinci', peristiwa pertama yang terjadi adalah ....",
            pilihan: ["Kura-Kura sampai lebih dulu", "Kelinci menantang Kura-Kura lomba lari", "Kelinci tertidur"],
            jawaban: 1,
            penjelasan: "Cerita diawali saat Kelinci menantang Kura-Kura lomba lari."
          },
          {
            soal: "Menceritakan kembali isi fabel membuat kita belajar berbicara dengan ....",
            pilihan: ["Percaya diri", "Takut", "Malas"],
            jawaban: 0,
            penjelasan: "Salah satu manfaatnya adalah belajar berbicara dengan percaya diri."
          },
          {
            soal: "Agar temanmu mudah memahami cerita, kamu sebaiknya menceritakannya secara ....",
            pilihan: ["Lisan dan jelas", "Berbisik", "Diam saja"],
            jawaban: 0,
            penjelasan: "Menceritakan kembali secara lisan membantu teman memahami cerita."
          }
        ],

        // ---------- SET 2 ----------
        [
          {
            soal: "Langkah pertama saat ingin menceritakan kembali isi fabel adalah ....",
            pilihan: ["Membaca atau menyimak fabel dengan saksama", "Langsung bercerita", "Menggambar tokoh"],
            jawaban: 0,
            penjelasan: "Langkah pertama: baca atau simak fabel dengan saksama."
          },
          {
            soal: "Setelah membaca fabel, sebaiknya kita mencatat ....",
            pilihan: ["Peristiwa penting dalam fabel", "Semua kata", "Nomor halaman"],
            jawaban: 0,
            penjelasan: "Catatlah peristiwa penting dalam fabel sebelum menceritakannya."
          },
          {
            soal: "Teks petunjuk 'Cara Menyiram Tanaman' berisi langkah ....",
            pilihan: ["Menyiapkan alat penyiram, mengisi air, menyiram", "Memasak nasi", "Membaca buku"],
            jawaban: 0,
            penjelasan: "Langkahnya: siapkan alat, isi air, arahkan, lalu siram tanaman."
          },
          {
            soal: "Pada teks petunjuk, langkah-langkah ditulis secara ....",
            pilihan: ["Berurutan", "Terbalik", "Acak"],
            jawaban: 0,
            penjelasan: "Langkah pada teks petunjuk ditulis berurutan agar mudah diikuti."
          },
          {
            soal: "Judul yang tepat untuk teks berisi langkah menyiram tanaman adalah ....",
            pilihan: ["Cara Menyiram Tanaman", "Cara Menyapu Halaman", "Cara Menanam Pohon"],
            jawaban: 0,
            penjelasan: "Isinya tentang menyiram tanaman, jadi judulnya 'Cara Menyiram Tanaman'."
          },
          {
            soal: "Dalam paragraf fabel 'Semut dan Kumbang', musim saat Semut mengumpulkan makanan adalah musim ....",
            pilihan: ["Kemarau", "Hujan", "Dingin"],
            jawaban: 0,
            penjelasan: "Pada musim kemarau Semut sibuk mengumpulkan makanan."
          },
          {
            soal: "Saat musim hujan, Kumbang bingung karena tidak punya ....",
            pilihan: ["Makanan", "Teman", "Rumah"],
            jawaban: 0,
            penjelasan: "Kumbang bingung karena tidak punya makanan saat hujan."
          },
          {
            soal: "Ketika mengurutkan cerita acak, kita memperhatikan ....",
            pilihan: ["Urutan kejadian", "Warna huruf", "Jumlah gambar"],
            jawaban: 0,
            penjelasan: "Cerita diurutkan sesuai urutan kejadian dari awal sampai akhir."
          },
          {
            soal: "Menceritakan kembali membantu temanmu untuk ....",
            pilihan: ["Memahami isi cerita", "Melupakan cerita", "Bosan"],
            jawaban: 0,
            penjelasan: "Menceritakan kembali membantu teman memahami isi cerita."
          },
          {
            soal: "Setiap paragraf dalam cerita biasanya menceritakan ....",
            pilihan: ["Satu peristiwa penting", "Semua peristiwa sekaligus", "Tidak ada peristiwa"],
            jawaban: 0,
            penjelasan: "Satu paragraf umumnya menceritakan satu peristiwa penting."
          }
        ],

        // ---------- SET 3 ----------
        [
          {
            soal: "Teks tanya jawab antara Arya dan Lusi berisi ....",
            pilihan: ["Pertanyaan dan jawaban", "Langkah memasak", "Daftar hewan"],
            jawaban: 0,
            penjelasan: "Teks tanya jawab berisi pertanyaan dan jawaban."
          },
          {
            soal: "Kata tanya yang tepat untuk menanyakan alasan adalah ....",
            pilihan: ["Mengapa", "Di mana", "Siapa"],
            jawaban: 0,
            penjelasan: "'Mengapa' dipakai untuk menanyakan alasan atau sebab."
          },
          {
            soal: "Kata tanya 'siapa' digunakan untuk menanyakan ....",
            pilihan: ["Orang atau tokoh", "Tempat", "Waktu"],
            jawaban: 0,
            penjelasan: "'Siapa' menanyakan orang atau tokoh."
          },
          {
            soal: "Kata tanya 'kapan' digunakan untuk menanyakan ....",
            pilihan: ["Waktu", "Tempat", "Jumlah"],
            jawaban: 0,
            penjelasan: "'Kapan' menanyakan waktu suatu kejadian."
          },
          {
            soal: "Kata tanya 'di mana' digunakan untuk menanyakan ....",
            pilihan: ["Tempat", "Alasan", "Orang"],
            jawaban: 0,
            penjelasan: "'Di mana' menanyakan tempat."
          },
          {
            soal: "Dalam cerita Lusi, Rusa selalu datang ke pesta ....",
            pilihan: ["Tepat waktu", "Terlambat", "Tidak pernah"],
            jawaban: 0,
            penjelasan: "Rusa selalu datang ke pesta tepat waktu."
          },
          {
            soal: "Mengapa Jerapah menjadi sedih di pesta Gajah?",
            pilihan: ["Datang terlambat dan kehabisan makanan", "Lupa jalan", "Tidak diundang"],
            jawaban: 0,
            penjelasan: "Jerapah datang terlambat sehingga kehabisan makanan di pesta."
          },
          {
            soal: "Langkah terakhir menceritakan kembali isi fabel adalah ....",
            pilihan: ["Menceritakan kembali dengan bahasa sopan", "Membaca ulang terus", "Menggambar"],
            jawaban: 0,
            penjelasan: "Langkah terakhir: ceritakan kembali dengan bahasa yang sopan."
          },
          {
            soal: "Saat menceritakan kembali, kita TIDAK perlu ....",
            pilihan: ["Menghafalkan semua cerita", "Menyebut tokoh penting", "Menyebut peristiwa penting"],
            jawaban: 0,
            penjelasan: "Kita tidak perlu menghafal semua cerita, cukup bagian intinya."
          },
          {
            soal: "Cerita yang runtut membuat pembaca menjadi ....",
            pilihan: ["Mudah memahami", "Bingung", "Mengantuk"],
            jawaban: 0,
            penjelasan: "Cerita yang runtut memudahkan pembaca memahami isinya."
          }
        ],

        // ---------- SET 4 ----------
        [
          {
            soal: "Bagian cerita yang menjelaskan masalah mulai muncul berada di paragraf ....",
            pilihan: ["Tengah", "Judul", "Gambar"],
            jawaban: 0,
            penjelasan: "Masalah biasanya muncul di bagian tengah cerita."
          },
          {
            soal: "Bagian cerita tempat masalah selesai berada di ....",
            pilihan: ["Akhir cerita", "Awal cerita", "Luar cerita"],
            jawaban: 0,
            penjelasan: "Masalah diselesaikan di bagian akhir cerita."
          },
          {
            soal: "'Semut sibuk mengumpulkan makanan.' Kalimat ini menceritakan kegiatan ....",
            pilihan: ["Semut", "Kumbang", "Burung"],
            jawaban: 0,
            penjelasan: "Kalimat itu menceritakan kegiatan Semut."
          },
          {
            soal: "Agar bisa diceritakan kembali, isi fabel sebaiknya kita ....",
            pilihan: ["Pahami dulu", "Lupakan", "Abaikan"],
            jawaban: 0,
            penjelasan: "Pahami isi fabel dulu agar bisa diceritakan kembali."
          },
          {
            soal: "Kalimat 'Kura-Kura berjalan perlahan, tetapi tidak berhenti' menunjukkan sifat Kura-Kura yang ....",
            pilihan: ["Pantang menyerah", "Pemalas", "Sombong"],
            jawaban: 0,
            penjelasan: "Kura-Kura terus berjalan tanpa berhenti, menunjukkan pantang menyerah."
          },
          {
            soal: "Teks petunjuk membantu kita melakukan sesuatu dengan ....",
            pilihan: ["Benar dan berurutan", "Asal-asalan", "Terbalik"],
            jawaban: 0,
            penjelasan: "Teks petunjuk membantu melakukan sesuatu dengan benar dan berurutan."
          },
          {
            soal: "Dalam teks menyiram tanaman, langkah 'isi alat penyiram dengan air' dilakukan ....",
            pilihan: ["Sebelum menyiram", "Setelah menyiram", "Tidak perlu"],
            jawaban: 0,
            penjelasan: "Mengisi air dilakukan sebelum menyiram tanaman."
          },
          {
            soal: "Menceritakan kembali di depan kelas melatih keberanian ....",
            pilihan: ["Berbicara", "Diam", "Lari"],
            jawaban: 0,
            penjelasan: "Bercerita di depan kelas melatih keberanian berbicara."
          },
          {
            soal: "Satu cerita utuh biasanya terdiri atas ....",
            pilihan: ["Beberapa paragraf", "Satu kata", "Satu gambar"],
            jawaban: 0,
            penjelasan: "Satu cerita biasanya tersusun dari beberapa paragraf."
          },
          {
            soal: "Agar pendengar tidak bingung, ceritakan peristiwa secara ....",
            pilihan: ["Urut dari awal", "Loncat-loncat", "Dari akhir dulu"],
            jawaban: 0,
            penjelasan: "Ceritakan peristiwa urut dari awal agar pendengar tidak bingung."
          }
        ],

        // ---------- SET 5 ----------
        [
          {
            soal: "'Tolong' sebaiknya diucapkan ketika ....",
            pilihan: ["Meminta bantuan orang lain", "Menerima hadiah", "Makan"],
            jawaban: 0,
            penjelasan: "'Tolong' diucapkan saat meminta bantuan orang lain."
          },
          {
            soal: "Saat menerima bantuan, sebaiknya kita mengucapkan ....",
            pilihan: ["Terima kasih", "Maaf", "Tolong"],
            jawaban: 0,
            penjelasan: "Saat menerima bantuan kita mengucapkan 'terima kasih'."
          },
          {
            soal: "'Maaf' diucapkan ketika kita ....",
            pilihan: ["Berbuat salah", "Mendapat hadiah", "Menang lomba"],
            jawaban: 0,
            penjelasan: "'Maaf' diucapkan ketika berbuat salah, bukan saat menerima hadiah."
          },
          {
            soal: "Langkah menulis yang benar adalah menulis pada alas yang ....",
            pilihan: ["Rata", "Miring", "Basah"],
            jawaban: 0,
            penjelasan: "Menulis sebaiknya pada alas yang rata."
          },
          {
            soal: "Agar tulisan terlihat jelas, kita menulis di tempat yang ....",
            pilihan: ["Terang", "Gelap", "Ramai"],
            jawaban: 0,
            penjelasan: "Menulis di tempat yang terang membuat tulisan jelas."
          },
          {
            soal: "Posisi tubuh yang benar saat menulis adalah ....",
            pilihan: ["Tegak", "Bungkuk", "Tiduran"],
            jawaban: 0,
            penjelasan: "Posisi tubuh tegak (tidak bungkuk) baik saat menulis."
          },
          {
            soal: "Dalam teks tanya jawab, Lusi menjawab bahwa menyikat gigi membuat gigi ....",
            pilihan: ["Bersih dan sehat", "Kotor", "Sakit"],
            jawaban: 0,
            penjelasan: "Lusi menjawab gigi akan bersih dan terasa lebih sehat."
          },
          {
            soal: "Kalimat 'Siramlah tanaman dengan air yang cukup' termasuk ....",
            pilihan: ["Langkah pada teks petunjuk", "Judul cerita", "Nama tokoh"],
            jawaban: 0,
            penjelasan: "Kalimat itu adalah salah satu langkah pada teks petunjuk."
          },
          {
            soal: "Menceritakan kembali membuat kita ... berbagi cerita kepada orang lain.",
            pilihan: ["Mudah", "Sulit", "Takut"],
            jawaban: 0,
            penjelasan: "Menceritakan kembali membantu kita berbagi cerita kepada orang lain."
          },
          {
            soal: "Urutan yang benar: menyiapkan alat → mengisi air → ....",
            pilihan: ["Menyiram tanaman", "Membaca buku", "Tidur"],
            jawaban: 0,
            penjelasan: "Setelah menyiapkan alat dan mengisi air, barulah menyiram tanaman."
          }
        ],

        // ---------- SET 6 ----------
        [
          {
            soal: "'Pada suatu pagi, Kupu-Kupu terbang mengelilingi taman.' Paragraf ini menceritakan ....",
            pilihan: ["Awal cerita", "Akhir cerita", "Judul"],
            jawaban: 0,
            penjelasan: "Kalimat pembuka ini menceritakan bagian awal cerita."
          },
          {
            soal: "'Tiba-tiba, hujan turun deras.' Kalimat ini menunjukkan munculnya ....",
            pilihan: ["Masalah", "Judul", "Akhir bahagia"],
            jawaban: 0,
            penjelasan: "Hujan deras adalah masalah yang muncul dalam cerita."
          },
          {
            soal: "'Semut menolongnya berteduh di lubang kecil.' Kalimat ini adalah bagian ....",
            pilihan: ["Penyelesaian masalah", "Awal cerita", "Judul"],
            jawaban: 0,
            penjelasan: "Semut menolong Kupu-Kupu, ini bagian penyelesaian masalah."
          },
          {
            soal: "Dalam cerita Kancil dan Pohon Mangga, masalahnya adalah Kancil tidak bisa memetik mangga karena ....",
            pilihan: ["Tubuhnya kecil", "Mangga busuk", "Pohon roboh"],
            jawaban: 0,
            penjelasan: "Kancil tidak bisa memetik karena tubuhnya kecil."
          },
          {
            soal: "Masalah Kancil terselesaikan ketika ia dibantu oleh ....",
            pilihan: ["Gajah", "Harimau", "Burung"],
            jawaban: 0,
            penjelasan: "Gajah membantu Kancil dengan membiarkannya naik ke punggungnya."
          },
          {
            soal: "Akhir cerita Kancil dan Gajah adalah mereka ....",
            pilihan: ["Makan bersama di bawah pohon", "Bertengkar", "Berpisah marah"],
            jawaban: 0,
            penjelasan: "Mereka makan mangga bersama di bawah pohon."
          },
          {
            soal: "Dalam fabel Rusa dan Bangau, Rusa ragu mendekat ke sungai karena airnya tampak ....",
            pilihan: ["Dalam", "Keruh", "Panas"],
            jawaban: 0,
            penjelasan: "Rusa ragu karena air sungai tampak dalam."
          },
          {
            soal: "Masalah Rusa selesai ketika Bangau memberi tahu bahwa airnya ....",
            pilihan: ["Dangkal", "Beracun", "Habis"],
            jawaban: 0,
            penjelasan: "Bangau memberi tahu bahwa air sungai dangkal sehingga Rusa bisa minum."
          },
          {
            soal: "Sebuah cerita yang baik memiliki awal, tengah, dan ....",
            pilihan: ["Akhir", "Gambar", "Judul saja"],
            jawaban: 0,
            penjelasan: "Cerita yang baik memiliki bagian awal, tengah, dan akhir."
          },
          {
            soal: "Mengurutkan paragraf acak melatih kita memahami ....",
            pilihan: ["Jalan cerita", "Warna", "Jumlah huruf"],
            jawaban: 0,
            penjelasan: "Mengurutkan paragraf melatih pemahaman jalan cerita."
          }
        ]

      ],

      /* ===== SOAL ESAI (ditambah 5 soal ekstra) ===== */
      esaiSets: [

        // ---------- SET 1 ----------
        [
          { soal: "Apa yang dimaksud dengan paragraf?", contohJawaban: "Paragraf adalah kumpulan beberapa kalimat yang menceritakan satu bagian cerita." },
          { soal: "Mengapa kalimat dalam paragraf harus disusun berurutan?", contohJawaban: "Agar cerita runtut dan mudah dipahami pembaca." },
          { soal: "Sebutkan tiga manfaat menceritakan kembali isi fabel.", contohJawaban: "Memudahkan memahami cerita, membantu berbagi cerita kepada orang lain, dan belajar berbicara dengan percaya diri." },
          { soal: "Tuliskan langkah-langkah menceritakan kembali isi fabel.", contohJawaban: "1) Baca atau simak fabel dengan saksama; 2) Catat peristiwa penting; 3) Ceritakan kembali dengan bahasa yang sopan." },
          { soal: "Apa itu teks petunjuk? Berikan satu contoh.", contohJawaban: "Teks petunjuk adalah teks berisi langkah-langkah melakukan sesuatu, contohnya 'Cara Menyiram Tanaman'." }
        ],

        // ---------- SET 2 (5 soal ekstra sesuai permintaan) ----------
        [
          { soal: "Urutkan langkah menyiram tanaman dengan benar!", contohJawaban: "Siapkan alat penyiram, isi dengan air, arahkan ke tanaman, lalu siram dengan air yang cukup." },
          { soal: "Mengapa kita menceritakan kembali isi fabel dengan bahasa yang sopan?", contohJawaban: "Agar pendengar nyaman, menghargai orang lain, dan cerita tersampaikan dengan baik." },
          { soal: "Apa yang terjadi jika kita bercerita dengan bahasa yang tidak sopan?", contohJawaban: "Pendengar bisa tersinggung atau tidak nyaman, dan pesan cerita jadi sulit diterima." },
          { soal: "Tuliskan kembali secara singkat isi cerita 'Semut dan Kumbang'.", contohJawaban: "Saat kemarau Semut rajin mengumpulkan makanan, sedangkan Kumbang bermain. Ketika hujan, Semut punya makanan, tetapi Kumbang kebingungan karena tidak punya makanan." },
          { soal: "Mengapa cerita sebaiknya dibagi menjadi beberapa paragraf?", contohJawaban: "Agar setiap peristiwa penting terlihat jelas dan cerita lebih mudah dibaca serta dipahami." }
        ],

        // ---------- SET 3 ----------
        [
          { soal: "Apa yang harus Rudi lakukan jika ada kata yang belum ia pahami saat membaca fabel?", contohJawaban: "Rudi sebaiknya mencari makna kata itu, misalnya bertanya kepada guru atau melihat arti katanya, agar paham isi cerita." },
          { soal: "Kapan sebaiknya kita mengucapkan 'tolong', 'maaf', dan 'terima kasih'?", contohJawaban: "'Tolong' saat meminta bantuan, 'maaf' saat berbuat salah, dan 'terima kasih' saat menerima bantuan." },
          { soal: "Tuliskan satu teks petunjuk singkat tentang cara mencuci tangan.", contohJawaban: "1) Basahi tangan dengan air; 2) Gunakan sabun; 3) Gosok seluruh tangan; 4) Bilas dengan air bersih; 5) Keringkan tangan." },
          { soal: "Mengapa cerita acak perlu diurutkan terlebih dahulu?", contohJawaban: "Supaya jalan ceritanya runtut dan mudah dipahami dari awal hingga akhir." },
          { soal: "Apa manfaat menyampaikan cerita secara lisan kepada teman?", contohJawaban: "Membantu teman memahami isi cerita dan melatih kita berbicara dengan percaya diri." }
        ]

      ],

      /* ===== 6 SET SOAL MENCOCOKKAN (digandakan) ===== */
      cocokkanSets: [

        // ---------- SET 1 : Bagian cerita ----------
        {
          instruksi: "Pasangkan bagian cerita dengan penjelasannya!",
          pasangan: [
            { kiri: { emoji: "🏁", teks: "Awal cerita" }, kanan: "Pengenalan tokoh dan keadaan" },
            { kiri: { emoji: "⚡", teks: "Tengah cerita" }, kanan: "Munculnya masalah" },
            { kiri: { emoji: "🎉", teks: "Akhir cerita" }, kanan: "Masalah diselesaikan" },
            { kiri: { emoji: "📝", teks: "Paragraf" }, kanan: "Kumpulan beberapa kalimat" },
            { kiri: { emoji: "📑", teks: "Teks petunjuk" }, kanan: "Langkah-langkah melakukan sesuatu" }
          ]
        },

        // ---------- SET 2 : Kata ajaib ----------
        {
          instruksi: "Pasangkan kata ajaib dengan waktu mengucapkannya!",
          pasangan: [
            { kiri: { emoji: "🙏", teks: "Tolong" }, kanan: "Saat meminta bantuan" },
            { kiri: { emoji: "😊", teks: "Terima kasih" }, kanan: "Saat menerima bantuan" },
            { kiri: { emoji: "🙇", teks: "Maaf" }, kanan: "Saat berbuat salah" },
            { kiri: { emoji: "👋", teks: "Permisi" }, kanan: "Saat ingin lewat atau bertanya" },
            { kiri: { emoji: "🎈", teks: "Selamat" }, kanan: "Saat memberi ucapan baik" }
          ]
        },

        // ---------- SET 3 : Kata tanya ----------
        {
          instruksi: "Pasangkan kata tanya dengan kegunaannya!",
          pasangan: [
            { kiri: { emoji: "❓", teks: "Siapa" }, kanan: "Menanyakan orang" },
            { kiri: { emoji: "📍", teks: "Di mana" }, kanan: "Menanyakan tempat" },
            { kiri: { emoji: "⏰", teks: "Kapan" }, kanan: "Menanyakan waktu" },
            { kiri: { emoji: "💭", teks: "Mengapa" }, kanan: "Menanyakan alasan" },
            { kiri: { emoji: "🔧", teks: "Bagaimana" }, kanan: "Menanyakan cara" }
          ]
        },

        // ---------- SET 4 : Langkah menyiram tanaman ----------
        {
          instruksi: "Pasangkan nomor langkah dengan kegiatannya (cara menyiram tanaman)!",
          pasangan: [
            { kiri: { emoji: "1️⃣", teks: "Langkah 1" }, kanan: "Siapkan alat penyiram" },
            { kiri: { emoji: "2️⃣", teks: "Langkah 2" }, kanan: "Isi alat dengan air" },
            { kiri: { emoji: "3️⃣", teks: "Langkah 3" }, kanan: "Arahkan ke tanaman" },
            { kiri: { emoji: "4️⃣", teks: "Langkah 4" }, kanan: "Siram dengan air cukup" }
          ]
        },

        // ---------- SET 5 : Peristiwa & cerita ----------
        {
          instruksi: "Pasangkan peristiwa dengan judul ceritanya!",
          pasangan: [
            { kiri: { emoji: "🐜", teks: "Mengumpulkan makanan saat kemarau" }, kanan: "Semut dan Kumbang" },
            { kiri: { emoji: "🐢", teks: "Menang lomba lari karena tidak berhenti" }, kanan: "Kura-Kura dan Kelinci" },
            { kiri: { emoji: "🦌", teks: "Dibantu Bangau untuk minum" }, kanan: "Rusa dan Bangau" },
            { kiri: { emoji: "🦋", teks: "Ditolong Semut saat hujan" }, kanan: "Kupu-Kupu dan Semut Kecil" },
            { kiri: { emoji: "🐘", teks: "Membantu Kancil memetik mangga" }, kanan: "Kancil dan Pohon Mangga" }
          ]
        },

        // ---------- SET 6 : Manfaat & langkah bercerita ----------
        {
          instruksi: "Pasangkan kegiatan dengan tujuannya!",
          pasangan: [
            { kiri: { emoji: "📖", teks: "Membaca fabel saksama" }, kanan: "Memahami isi cerita" },
            { kiri: { emoji: "✏️", teks: "Mencatat peristiwa penting" }, kanan: "Mengingat bagian inti" },
            { kiri: { emoji: "🗣️", teks: "Bercerita dengan sopan" }, kanan: "Pendengar nyaman" },
            { kiri: { emoji: "👫", teks: "Berbagi cerita ke teman" }, kanan: "Teman ikut memahami" },
            { kiri: { emoji: "💪", teks: "Bercerita di depan kelas" }, kanan: "Melatih percaya diri" }
          ]
        }

      ]
    },

    /* ========================================================
     *  TOPIK 2 — FABEL
     * ====================================================== */
    {
      id: "fabel",
      judul: "Mengenal Fabel",
      emoji: "🦊",

      ringkasan: [
        { emoji: "🦊", teks: "Fabel adalah cerita yang tokohnya hewan." },
        { emoji: "💛", teks: "Fabel berisi pesan baik yang dapat dicontoh oleh setiap pembacanya." },
        { emoji: "ℹ️", teks: "Dalam fabel ada informasi, yaitu kabar atau berita tentang sesuatu yang menambah pengetahuan." },
        { emoji: "🎭", teks: "Tokoh adalah pelaku dalam cerita. Dalam fabel tokohnya hewan, misalnya burung atau tupai." },
        { emoji: "😇", teks: "Watak adalah sifat tokoh. Ada watak baik dan ada watak buruk." },
        { emoji: "🧭", teks: "Alur adalah jalan cerita, berupa urutan peristiwa dari awal hingga akhir." },
        { emoji: "🏞️", teks: "Latar adalah keterangan tentang suasana, tempat, dan waktu dalam cerita." },
        { emoji: "✉️", teks: "Amanat adalah pesan dalam cerita, dijelaskan lewat ucapan atau perilaku tokoh." },
        { emoji: "🐘", teks: "Dalam fabel, hewan sering melambangkan sifat tertentu: gajah kuat, kancil cerdik, kura-kura sabar." },
        { emoji: "✍️", teks: "Menulis fabel: pilih tema, tentukan tokoh hewan, tentukan tempat dan waktu, buat masalah kecil, selesaikan masalah, lalu tambahkan pesan baik." }
      ],

      /* ===== 6 SET SOAL PILIHAN GANDA (digandakan) ===== */
      pilihanGandaSets: [

        // ---------- SET 1 ----------
        [
          {
            soal: "Fabel adalah cerita yang tokohnya ....",
            pilihan: ["Hewan", "Manusia dewasa", "Robot"],
            jawaban: 0,
            penjelasan: "Fabel adalah cerita yang tokohnya hewan."
          },
          {
            soal: "Tokoh yang cocok ada di dalam fabel adalah ....",
            pilihan: ["Harimau", "Anak sekolah", "Pohon"],
            jawaban: 0,
            penjelasan: "Tokoh fabel adalah hewan, misalnya Harimau."
          },
          {
            soal: "Fabel biasanya berisi ... bagi pembacanya.",
            pilihan: ["Pesan baik", "Pesan buruk", "Daftar harga"],
            jawaban: 0,
            penjelasan: "Fabel berisi pesan baik yang bisa dicontoh pembaca."
          },
          {
            soal: "Pelaku dalam cerita disebut ....",
            pilihan: ["Tokoh", "Latar", "Alur"],
            jawaban: 0,
            penjelasan: "Tokoh adalah pelaku dalam cerita."
          },
          {
            soal: "Sifat tokoh dalam cerita disebut ....",
            pilihan: ["Watak", "Tempat", "Judul"],
            jawaban: 0,
            penjelasan: "Watak adalah sifat tokoh."
          },
          {
            soal: "Jalan cerita atau urutan peristiwa disebut ....",
            pilihan: ["Alur", "Latar", "Amanat"],
            jawaban: 0,
            penjelasan: "Alur adalah jalan cerita dari awal hingga akhir."
          },
          {
            soal: "Keterangan tentang tempat, waktu, dan suasana disebut ....",
            pilihan: ["Latar", "Tokoh", "Watak"],
            jawaban: 0,
            penjelasan: "Latar adalah keterangan tempat, waktu, dan suasana."
          },
          {
            soal: "Pesan dalam cerita disebut ....",
            pilihan: ["Amanat", "Alur", "Tokoh"],
            jawaban: 0,
            penjelasan: "Amanat adalah pesan dalam cerita."
          },
          {
            soal: "Dalam fabel, gajah sering melambangkan sifat ....",
            pilihan: ["Kuat", "Pemalas", "Penakut"],
            jawaban: 0,
            penjelasan: "Gajah biasanya melambangkan sifat kuat."
          },
          {
            soal: "Dalam fabel, kancil sering melambangkan sifat ....",
            pilihan: ["Cerdik", "Bodoh", "Lambat"],
            jawaban: 0,
            penjelasan: "Kancil biasanya melambangkan sifat cerdik."
          }
        ],

        // ---------- SET 2 : Dua Tupai & Kancil-Harimau ----------
        [
          {
            soal: "Dalam fabel 'Dua Tupai Bersahabat', nama kedua tupai adalah ....",
            pilihan: ["Tina dan Tutu", "Moli dan Kuku", "Sisi dan Ciko"],
            jawaban: 0,
            penjelasan: "Kedua tupai bersahabat itu bernama Tina dan Tutu."
          },
          {
            soal: "Tutu pergi ke sarang Tina karena ....",
            pilihan: ["Kelaparan dan tidak menemukan makanan", "Ingin bermain", "Ingin tidur"],
            jawaban: 0,
            penjelasan: "Tutu kelaparan dan tidak menemukan makanan, lalu ke sarang Tina."
          },
          {
            soal: "Sikap Tina kepada Tutu menunjukkan watak ....",
            pilihan: ["Suka berbagi", "Pelit", "Sombong"],
            jawaban: 0,
            penjelasan: "Tina mau berbagi makanannya, berarti suka berbagi."
          },
          {
            soal: "Dalam fabel 'Kancil dan Harimau', Kancil mengajak Harimau untuk ....",
            pilihan: ["Lari pagi bersama", "Tidur", "Bertengkar"],
            jawaban: 0,
            penjelasan: "Kancil mengajak Harimau lari pagi bersama agar segar."
          },
          {
            soal: "Watak Kancil dalam fabel 'Kancil dan Harimau' adalah ....",
            pilihan: ["Peduli", "Jahat", "Pemalas"],
            jawaban: 0,
            penjelasan: "Kancil peduli terhadap Harimau yang lemas."
          },
          {
            soal: "Amanat fabel 'Kancil dan Harimau' adalah ....",
            pilihan: ["Bersikaplah peduli kepada orang lain", "Jangan menolong", "Jangan olahraga"],
            jawaban: 0,
            penjelasan: "Amanatnya adalah bersikap peduli kepada orang lain."
          },
          {
            soal: "Latar waktu fabel 'Kancil dan Harimau' adalah ....",
            pilihan: ["Pagi hari", "Tengah malam", "Dini hari"],
            jawaban: 0,
            penjelasan: "Latar waktunya pagi hari saat lari pagi."
          },
          {
            soal: "Latar tempat fabel 'Kancil dan Harimau' adalah ....",
            pilihan: ["Hutan", "Pasar", "Sekolah"],
            jawaban: 0,
            penjelasan: "Latar tempatnya di hutan."
          },
          {
            soal: "Setelah rajin lari pagi, Harimau menjadi ....",
            pilihan: ["Segar", "Lemas", "Sakit"],
            jawaban: 0,
            penjelasan: "Beberapa hari kemudian Harimau merasa segar."
          },
          {
            soal: "Mengapa pada awalnya Harimau lemas?",
            pilihan: ["Jarang olahraga", "Terlalu banyak lari", "Kekenyangan"],
            jawaban: 0,
            penjelasan: "Kancil menduga Harimau lemas karena jarang berolahraga."
          }
        ],

        // ---------- SET 3 : Kisah Sisi dan Ciko ----------
        [
          {
            soal: "Dalam 'Kisah Sisi dan Ciko', Sisi adalah seekor ....",
            pilihan: ["Merak", "Macan tutul", "Beruang"],
            jawaban: 0,
            penjelasan: "Sisi adalah merak lincah yang tinggal di hutan."
          },
          {
            soal: "Watak Sisi di awal cerita adalah ....",
            pilihan: ["Sombong", "Rendah hati", "Pemalu"],
            jawaban: 0,
            penjelasan: "Sisi sombong karena suka memamerkan bulunya."
          },
          {
            soal: "Mengapa Sisi terjatuh ke dalam lubang?",
            pilihan: ["Berlari tanpa melihat ke depan", "Didorong Ciko", "Mengantuk"],
            jawaban: 0,
            penjelasan: "Sisi berlari sambil pamer tanpa melihat lubang di depannya."
          },
          {
            soal: "Watak Ciko dalam cerita adalah ....",
            pilihan: ["Suka menolong", "Pelit", "Sombong"],
            jawaban: 0,
            penjelasan: "Ciko langsung menolong Sisi, berarti suka menolong."
          },
          {
            soal: "Setelah ditolong, Sisi berubah menjadi lebih ....",
            pilihan: ["Hati-hati", "Sombong", "Malas"],
            jawaban: 0,
            penjelasan: "Sejak itu Sisi berlari dengan hati-hati."
          },
          {
            soal: "Amanat 'Kisah Sisi dan Ciko' adalah ....",
            pilihan: ["Jangan sombong dan berhati-hatilah", "Jangan menolong", "Pamerlah terus"],
            jawaban: 0,
            penjelasan: "Pesannya: jangan sombong dan perhatikan sekitar dengan baik."
          },
          {
            soal: "Dalam fabel 'Kisah Sisi dan Cika', tokoh yang terjatuh ke lubang adalah ....",
            pilihan: ["Sisi", "Ciko", "Gajah"],
            jawaban: 0,
            penjelasan: "Sisi yang terjatuh ke dalam lubang."
          },
          {
            soal: "Latar tempat 'Kisah Sisi dan Ciko' adalah ....",
            pilihan: ["Hutan", "Laut", "Kota"],
            jawaban: 0,
            penjelasan: "Ceritanya terjadi di hutan."
          },
          {
            soal: "Sisi tersenyum malu karena ....",
            pilihan: ["Menyadari kesalahannya", "Menang lomba", "Mendapat hadiah"],
            jawaban: 0,
            penjelasan: "Sisi mengangguk dan tersenyum malu menyadari kesombongannya."
          },
          {
            soal: "Dari kisah Sisi, kita belajar untuk tidak ....",
            pilihan: ["Memamerkan diri", "Menolong teman", "Berhati-hati"],
            jawaban: 0,
            penjelasan: "Kita belajar untuk tidak memamerkan diri (sombong)."
          }
        ],

        // ---------- SET 4 : Karo & Rubi, Moli & Kuku ----------
        [
          {
            soal: "Dalam fabel Karo dan Rubi, Karo adalah seekor kura-kura yang ....",
            pilihan: ["Sabar dan suka menolong", "Pemarah", "Pelit"],
            jawaban: 0,
            penjelasan: "Karo adalah kura-kura yang sabar dan suka menolong."
          },
          {
            soal: "Watak tokoh Karo adalah ....",
            pilihan: ["Penolong", "Serakah", "Pemalas"],
            jawaban: 0,
            penjelasan: "Karo berwatak penolong."
          },
          {
            soal: "Judul yang tepat untuk fabel tentang Karo yang menolong Rubi adalah ....",
            pilihan: ["Karo Si Penolong", "Rubi Penolong Karo", "Karo dan Rubi Tersesat"],
            jawaban: 0,
            penjelasan: "Karo yang menolong, jadi judulnya 'Karo Si Penolong'."
          },
          {
            soal: "Latar waktu fabel Karo dan Rubi adalah ....",
            pilihan: ["Pagi hari", "Malam hari", "Tengah malam"],
            jawaban: 0,
            penjelasan: "Peristiwa terjadi suatu pagi."
          },
          {
            soal: "Dalam fabel 'Moli dan Kuku', Moli dan Kuku adalah dua ....",
            pilihan: ["Beruang petualang", "Tupai", "Burung"],
            jawaban: 0,
            penjelasan: "Moli dan Kuku adalah dua beruang petualang."
          },
          {
            soal: "Saat berpetualang, Kuku bertugas ....",
            pilihan: ["Membaca peta", "Memasak", "Tidur"],
            jawaban: 0,
            penjelasan: "Kuku bertugas membaca peta."
          },
          {
            soal: "Kuku mengaku tersesat karena ....",
            pilihan: ["Mengantuk sehingga tidak jelas melihat", "Sengaja", "Peta hilang"],
            jawaban: 0,
            penjelasan: "Kuku tidak jelas melihat karena mengantuk."
          },
          {
            soal: "Sikap Moli saat Kuku jujur mengakui tersesat adalah ....",
            pilihan: ["Berterima kasih dan menggantikan membaca peta", "Marah", "Meninggalkan Kuku"],
            jawaban: 0,
            penjelasan: "Moli berterima kasih atas kejujuran Kuku lalu menggantikan membaca peta."
          },
          {
            soal: "Amanat dari fabel 'Moli dan Kuku' adalah pentingnya ....",
            pilihan: ["Kejujuran dan kerja sama", "Kesombongan", "Keserakahan"],
            jawaban: 0,
            penjelasan: "Pesannya: jujur dan bekerja sama saat menghadapi masalah."
          }
        ],

        // ---------- SET 5 : Unsur fabel ----------
        [
          {
            soal: "Unsur fabel yang menjelaskan 'siapa pelakunya' adalah ....",
            pilihan: ["Tokoh", "Latar", "Amanat"],
            jawaban: 0,
            penjelasan: "Tokoh menjelaskan siapa pelaku dalam cerita."
          },
          {
            soal: "Unsur fabel yang menjelaskan 'bagaimana sifat tokoh' adalah ....",
            pilihan: ["Watak", "Alur", "Latar"],
            jawaban: 0,
            penjelasan: "Watak menjelaskan sifat tokoh."
          },
          {
            soal: "Unsur fabel 'kapan dan di mana' cerita terjadi adalah ....",
            pilihan: ["Latar", "Tokoh", "Amanat"],
            jawaban: 0,
            penjelasan: "Latar menjelaskan waktu dan tempat cerita."
          },
          {
            soal: "Pesan yang bisa kita contoh dari cerita adalah ....",
            pilihan: ["Amanat", "Tokoh", "Judul"],
            jawaban: 0,
            penjelasan: "Amanat adalah pesan dalam cerita."
          },
          {
            soal: "Urutan peristiwa dari awal sampai akhir adalah ....",
            pilihan: ["Alur", "Latar", "Watak"],
            jawaban: 0,
            penjelasan: "Alur adalah urutan peristiwa dari awal hingga akhir."
          },
          {
            soal: "Dalam fabel, kura-kura sering melambangkan sifat ....",
            pilihan: ["Sabar", "Serakah", "Sombong"],
            jawaban: 0,
            penjelasan: "Kura-kura biasanya melambangkan sifat sabar."
          },
          {
            soal: "Perbedaan tokoh dan watak adalah ....",
            pilihan: ["Tokoh pelakunya, watak sifatnya", "Keduanya sama", "Tokoh tempat, watak waktu"],
            jawaban: 0,
            penjelasan: "Tokoh adalah pelaku, sedangkan watak adalah sifat tokoh."
          },
          {
            soal: "Latar waktu berbeda dengan latar tempat karena latar waktu menunjukkan ....",
            pilihan: ["Kapan cerita terjadi", "Di mana cerita terjadi", "Siapa tokohnya"],
            jawaban: 0,
            penjelasan: "Latar waktu menunjukkan kapan, latar tempat menunjukkan di mana."
          },
          {
            soal: "Watak baik tokoh dalam fabel sebaiknya ... pembacanya.",
            pilihan: ["Dicontoh", "Dihindari", "Dilupakan"],
            jawaban: 0,
            penjelasan: "Watak baik sebaiknya dicontoh oleh pembaca."
          },
          {
            soal: "Apa yang membedakan fabel dengan cerita lain?",
            pilihan: ["Tokohnya hewan", "Selalu sedih", "Tidak punya pesan"],
            jawaban: 0,
            penjelasan: "Fabel berbeda karena tokohnya hewan."
          }
        ],

        // ---------- SET 6 : Menulis fabel & campuran ----------
        [
          {
            soal: "Langkah pertama menulis fabel adalah ....",
            pilihan: ["Memilih tema cerita", "Menggambar sampul", "Menutup buku"],
            jawaban: 0,
            penjelasan: "Langkah pertama menulis fabel adalah memilih tema."
          },
          {
            soal: "Tema berguna untuk mengetahui ... cerita.",
            pilihan: ["Arah", "Harga", "Warna"],
            jawaban: 0,
            penjelasan: "Tema berguna untuk mengetahui arah cerita."
          },
          {
            soal: "Setelah memilih tema, kita menentukan ....",
            pilihan: ["Tokoh hewan", "Harga buku", "Nama penerbit"],
            jawaban: 0,
            penjelasan: "Setelah tema, tentukan tokoh hewannya."
          },
          {
            soal: "Agar cerita menarik, tokoh sebaiknya mengalami ....",
            pilihan: ["Masalah kecil", "Tidak terjadi apa-apa", "Kebosanan"],
            jawaban: 0,
            penjelasan: "Buatlah masalah kecil yang dialami tokoh."
          },
          {
            soal: "Cerita fabel diakhiri dengan tokoh yang ....",
            pilihan: ["Menyelesaikan masalahnya", "Lari dari masalah", "Diam saja"],
            jawaban: 0,
            penjelasan: "Akhiri cerita dengan tokoh menyelesaikan masalahnya."
          },
          {
            soal: "Jangan lupa, di akhir cerita fabel ditambahkan ....",
            pilihan: ["Pesan baik", "Daftar harga", "Nomor telepon"],
            jawaban: 0,
            penjelasan: "Tambahkan pesan baik di akhir cerita."
          },
          {
            soal: "Dalam fabel 'Pesta Hewan di Hutan', yang datang terlambat dan sedih adalah ....",
            pilihan: ["Jerapah", "Rusa", "Gajah"],
            jawaban: 0,
            penjelasan: "Jerapah datang terlambat dan kehabisan makanan, lalu sedih."
          },
          {
            soal: "Tokoh yang mengadakan pesta dalam 'Pesta Hewan di Hutan' adalah ....",
            pilihan: ["Gajah", "Rusa", "Jerapah"],
            jawaban: 0,
            penjelasan: "Gajah mengadakan pesta di hutan."
          },
          {
            soal: "Amanat fabel Gajah dan Kelinci 'Kelinci jatuh ke sungai lalu ditolong Gajah' adalah ....",
            pilihan: ["Jangan takut meminta tolong", "Jangan menolong", "Jangan bermain"],
            jawaban: 0,
            penjelasan: "Amanatnya: jangan takut meminta tolong."
          },
          {
            soal: "Saat menulis fabel, sebaiknya kita gunakan kalimat yang ....",
            pilihan: ["Sederhana", "Rumit", "Panjang sekali"],
            jawaban: 0,
            penjelasan: "Gunakan kalimat-kalimat sederhana saat menulis fabel."
          }
        ]

      ],

      /* ===== SOAL ESAI (ditambah 5 soal ekstra) ===== */
      esaiSets: [

        // ---------- SET 1 ----------
        [
          { soal: "Apa yang dimaksud dengan fabel?", contohJawaban: "Fabel adalah cerita yang tokohnya hewan dan berisi pesan baik bagi pembacanya." },
          { soal: "Sebutkan lima unsur dalam fabel.", contohJawaban: "Tokoh, watak, alur, latar, dan amanat." },
          { soal: "Apa perbedaan antara tokoh dan watak?", contohJawaban: "Tokoh adalah pelaku dalam cerita, sedangkan watak adalah sifat tokoh tersebut." },
          { soal: "Jelaskan perbedaan latar waktu dan latar tempat.", contohJawaban: "Latar waktu menunjukkan kapan cerita terjadi (misalnya pagi hari), sedangkan latar tempat menunjukkan di mana cerita terjadi (misalnya di hutan)." },
          { soal: "Apa amanat dari fabel 'Kancil dan Harimau'?", contohJawaban: "Bersikaplah peduli kepada orang lain, seperti Kancil yang menolong Harimau." }
        ],

        // ---------- SET 2 (5 soal ekstra sesuai permintaan) ----------
        [
          { soal: "Mengapa hewan dalam fabel sering melambangkan sifat tertentu? Berikan contoh.", contohJawaban: "Agar pesan cerita mudah dipahami. Contoh: gajah melambangkan kuat, kancil cerdik, dan kura-kura sabar." },
          { soal: "Tuliskan watak Tina dalam fabel 'Dua Tupai Bersahabat' beserta buktinya.", contohJawaban: "Tina berwatak suka berbagi, terbukti ia mempersilakan Tutu mengambil sebagian makanannya." },
          { soal: "Sebutkan langkah-langkah menulis fabel.", contohJawaban: "Pilih tema, tentukan tokoh hewan, tentukan tempat dan waktu, buat masalah kecil, akhiri dengan tokoh menyelesaikan masalah, lalu tambahkan pesan baik." },
          { soal: "Apa amanat fabel 'Kisah Sisi dan Ciko'?", contohJawaban: "Jangan sombong dan selalu berhati-hati serta perhatikan keadaan sekitar." },
          { soal: "Buatlah sebuah fabel singkat dengan tokoh Merpati dan Semut (Semut jatuh ke kolam lalu ditolong Merpati).", contohJawaban: "Pada sore hari di pinggir kolam, Semut ingin minum tetapi jatuh ke kolam. Merpati segera menolong Semut. Semut berterima kasih. Pesannya: bantulah orang lain yang kesulitan." }
        ],

        // ---------- SET 3 ----------
        [
          { soal: "Apa yang dimaksud dengan amanat dalam fabel?", contohJawaban: "Amanat adalah pesan dalam cerita yang dapat dicontoh, disampaikan lewat ucapan atau perilaku tokoh." },
          { soal: "Tuliskan tokoh dan watak dalam fabel 'Moli dan Kuku'.", contohJawaban: "Tokohnya Moli dan Kuku (dua beruang). Kuku jujur mengakui tersesat, dan Moli sabar serta mau bekerja sama." },
          { soal: "Mengapa fabel disukai anak-anak?", contohJawaban: "Karena tokohnya hewan yang lucu, ceritanya seru, dan berisi pesan baik yang mudah dipahami." },
          { soal: "Sebutkan contoh latar tempat dan latar waktu yang sering muncul dalam fabel.", contohJawaban: "Latar tempat: hutan, pinggir sungai, taman. Latar waktu: pagi hari, siang hari, sore hari." },
          { soal: "Tuliskan satu pesan baik yang kamu dapat dari fabel yang pernah kamu baca.", contohJawaban: "Contoh: kita harus suka menolong teman yang sedang kesulitan, seperti Semut yang menolong Kupu-Kupu." }
        ]

      ],

      /* ===== 6 SET SOAL MENCOCOKKAN (digandakan) ===== */
      cocokkanSets: [

        // ---------- SET 1 : Unsur fabel & artinya ----------
        {
          instruksi: "Pasangkan unsur fabel dengan artinya!",
          pasangan: [
            { kiri: { emoji: "🎭", teks: "Tokoh" }, kanan: "Pelaku dalam cerita" },
            { kiri: { emoji: "😇", teks: "Watak" }, kanan: "Sifat tokoh" },
            { kiri: { emoji: "🧭", teks: "Alur" }, kanan: "Urutan peristiwa" },
            { kiri: { emoji: "🏞️", teks: "Latar" }, kanan: "Tempat, waktu, suasana" },
            { kiri: { emoji: "✉️", teks: "Amanat" }, kanan: "Pesan dalam cerita" }
          ]
        },

        // ---------- SET 2 : Hewan & sifatnya ----------
        {
          instruksi: "Pasangkan hewan dengan sifat yang sering dilambangkan!",
          pasangan: [
            { kiri: { emoji: "🐘", teks: "Gajah" }, kanan: "Kuat" },
            { kiri: { emoji: "🦌", teks: "Kancil" }, kanan: "Cerdik" },
            { kiri: { emoji: "🐢", teks: "Kura-kura" }, kanan: "Sabar" },
            { kiri: { emoji: "🦚", teks: "Merak (sombong)" }, kanan: "Suka pamer" },
            { kiri: { emoji: "🐜", teks: "Semut" }, kanan: "Rajin" }
          ]
        },

        // ---------- SET 3 : Tokoh & ceritanya ----------
        {
          instruksi: "Pasangkan tokoh dengan judul fabelnya!",
          pasangan: [
            { kiri: { emoji: "🐿️", teks: "Tina dan Tutu" }, kanan: "Dua Tupai Bersahabat" },
            { kiri: { emoji: "🐻", teks: "Moli dan Kuku" }, kanan: "Moli dan Kuku" },
            { kiri: { emoji: "🦌", teks: "Kancil dan Harimau" }, kanan: "Kancil dan Harimau" },
            { kiri: { emoji: "🦚", teks: "Sisi dan Ciko" }, kanan: "Kisah Sisi dan Ciko" },
            { kiri: { emoji: "🐢", teks: "Karo dan Rubi" }, kanan: "Karo Si Penolong" }
          ]
        },

        // ---------- SET 4 : Tokoh & wataknya ----------
        {
          instruksi: "Pasangkan tokoh dengan wataknya!",
          pasangan: [
            { kiri: { emoji: "🐿️", teks: "Tina" }, kanan: "Suka berbagi" },
            { kiri: { emoji: "🦚", teks: "Sisi (awal cerita)" }, kanan: "Sombong" },
            { kiri: { emoji: "🐆", teks: "Ciko" }, kanan: "Suka menolong" },
            { kiri: { emoji: "🦌", teks: "Kancil" }, kanan: "Peduli" },
            { kiri: { emoji: "🐢", teks: "Karo" }, kanan: "Penolong" }
          ]
        },

        // ---------- SET 5 : Fabel & amanatnya ----------
        {
          instruksi: "Pasangkan fabel dengan amanatnya!",
          pasangan: [
            { kiri: { emoji: "🦌", teks: "Kancil dan Harimau" }, kanan: "Pedulilah kepada orang lain" },
            { kiri: { emoji: "🦚", teks: "Kisah Sisi dan Ciko" }, kanan: "Jangan sombong, berhati-hatilah" },
            { kiri: { emoji: "🐻", teks: "Moli dan Kuku" }, kanan: "Jujur dan bekerja sama" },
            { kiri: { emoji: "🐘", teks: "Gajah dan Kelinci" }, kanan: "Jangan takut meminta tolong" },
            { kiri: { emoji: "🐜", teks: "Semut dan Kupu-Kupu" }, kanan: "Suka menolong sesama" }
          ]
        },

        // ---------- SET 6 : Langkah menulis fabel ----------
        {
          instruksi: "Pasangkan nomor langkah menulis fabel dengan kegiatannya!",
          pasangan: [
            { kiri: { emoji: "1️⃣", teks: "Langkah 1" }, kanan: "Pilih tema cerita" },
            { kiri: { emoji: "2️⃣", teks: "Langkah 2" }, kanan: "Tentukan tokoh hewan" },
            { kiri: { emoji: "3️⃣", teks: "Langkah 3" }, kanan: "Tentukan tempat dan waktu" },
            { kiri: { emoji: "4️⃣", teks: "Langkah 4" }, kanan: "Buat masalah kecil tokoh" },
            { kiri: { emoji: "5️⃣", teks: "Langkah 5" }, kanan: "Tambahkan pesan baik" }
          ]
        }

      ]
    },

    /* ========================================================
     *  TOPIK 3 — ANTONIM
     * ====================================================== */
    {
      id: "antonim",
      judul: "Antonim (Lawan Kata)",
      emoji: "↔️",

      ringkasan: [
        { emoji: "↔️", teks: "Antonim adalah kata yang berlawanan maknanya dengan kata lain." },
        { emoji: "🔊", teks: "Contoh: keras lawannya lunak." },
        { emoji: "📏", teks: "Contoh: tinggi lawannya pendek." },
        { emoji: "💪", teks: "Contoh: gagah lawannya lemah." },
        { emoji: "🔵", teks: "Contoh: besar lawannya kecil." },
        { emoji: "🌳", teks: "Contoh: lebat lawannya tipis." },
        { emoji: "🏃", teks: "Contoh: cepat lawannya pelan (lambat)." },
        { emoji: "📐", teks: "Contoh: panjang lawannya pendek." },
        { emoji: "⬆️", teks: "Contoh: tinggi lawannya rendah." },
        { emoji: "😊", teks: "Contoh: baik lawannya buruk." },
        { emoji: "🔑", teks: "Dalam fabel, memahami kata sederhana dan antonimnya membantu kita mengerti isi cerita." }
      ],

      /* ===== 6 SET SOAL PILIHAN GANDA (digandakan) ===== */
      pilihanGandaSets: [

        // ---------- SET 1 ----------
        [
          { soal: "Kata yang berlawanan makna dengan kata lain disebut ....", pilihan: ["Antonim", "Sinonim", "Nama"], jawaban: 0, penjelasan: "Antonim adalah kata yang berlawanan maknanya." },
          { soal: "Antonim dari kata 'keras' adalah ....", pilihan: ["Lunak", "Kuat", "Tinggi"], jawaban: 0, penjelasan: "Keras lawannya lunak." },
          { soal: "Antonim dari kata 'tinggi' adalah ....", pilihan: ["Pendek", "Besar", "Cepat"], jawaban: 0, penjelasan: "Tinggi lawannya pendek." },
          { soal: "Antonim dari kata 'gagah' adalah ....", pilihan: ["Lemah", "Kuat", "Besar"], jawaban: 0, penjelasan: "Gagah lawannya lemah." },
          { soal: "Antonim dari kata 'besar' adalah ....", pilihan: ["Kecil", "Panjang", "Lebat"], jawaban: 0, penjelasan: "Besar lawannya kecil." },
          { soal: "Antonim dari kata 'lebat' adalah ....", pilihan: ["Tipis", "Tebal", "Rapat"], jawaban: 0, penjelasan: "Lebat lawannya tipis." },
          { soal: "Pasangan antonim yang tepat adalah ....", pilihan: ["Panjang >< pendek", "Besar >< luas", "Cepat >< gesit"], jawaban: 0, penjelasan: "Panjang berlawanan dengan pendek." },
          { soal: "Antonim dari kata 'cepat' adalah ....", pilihan: ["Pelan", "Kencang", "Laju"], jawaban: 0, penjelasan: "Cepat lawannya pelan (lambat)." },
          { soal: "Antonim dari kata 'baik' adalah ....", pilihan: ["Buruk", "Ramah", "Rajin"], jawaban: 0, penjelasan: "Baik lawannya buruk." },
          { soal: "Antonim dari kata 'rendah' adalah ....", pilihan: ["Tinggi", "Pendek", "Kecil"], jawaban: 0, penjelasan: "Rendah lawannya tinggi." }
        ],

        // ---------- SET 2 ----------
        [
          { soal: "Antonim dari kata 'lambat' adalah ....", pilihan: ["Cepat", "Pelan", "Diam"], jawaban: 0, penjelasan: "Lambat lawannya cepat." },
          { soal: "Antonim dari kata 'kecil' adalah ....", pilihan: ["Besar", "Pendek", "Tipis"], jawaban: 0, penjelasan: "Kecil lawannya besar." },
          { soal: "Antonim dari kata 'pendek' adalah ....", pilihan: ["Panjang", "Lebar", "Tebal"], jawaban: 0, penjelasan: "Pendek lawannya panjang (atau tinggi)." },
          { soal: "Antonim dari kata 'lunak' adalah ....", pilihan: ["Keras", "Lembut", "Halus"], jawaban: 0, penjelasan: "Lunak lawannya keras." },
          { soal: "Antonim dari kata 'buruk' adalah ....", pilihan: ["Baik", "Jahat", "Nakal"], jawaban: 0, penjelasan: "Buruk lawannya baik." },
          { soal: "Dalam fabel Kupu-Kupu dan Semut, kata 'lambat' berlawanan dengan ....", pilihan: ["Cepat", "Pelan", "Diam"], jawaban: 0, penjelasan: "Antonim 'lambat' adalah 'cepat'." },
          { soal: "Antonim dari kata 'lemah' adalah ....", pilihan: ["Gagah/kuat", "Kecil", "Pendek"], jawaban: 0, penjelasan: "Lemah lawannya gagah atau kuat." },
          { soal: "Antonim dari kata 'tipis' adalah ....", pilihan: ["Lebat/tebal", "Kecil", "Pendek"], jawaban: 0, penjelasan: "Tipis lawannya lebat atau tebal." },
          { soal: "Antonim dari kata 'dangkal' adalah ....", pilihan: ["Dalam", "Lebar", "Panjang"], jawaban: 0, penjelasan: "Dangkal lawannya dalam." },
          { soal: "Antonim dari kata 'siang' adalah ....", pilihan: ["Malam", "Pagi", "Sore"], jawaban: 0, penjelasan: "Siang lawannya malam." }
        ],

        // ---------- SET 3 ----------
        [
          { soal: "Antonim dari kata 'rajin' adalah ....", pilihan: ["Malas", "Pintar", "Cepat"], jawaban: 0, penjelasan: "Rajin lawannya malas." },
          { soal: "Antonim dari kata 'sombong' adalah ....", pilihan: ["Rendah hati", "Pelit", "Marah"], jawaban: 0, penjelasan: "Sombong lawannya rendah hati." },
          { soal: "Antonim dari kata 'berani' adalah ....", pilihan: ["Takut", "Kuat", "Gagah"], jawaban: 0, penjelasan: "Berani lawannya takut." },
          { soal: "Antonim dari kata 'senang' adalah ....", pilihan: ["Sedih", "Gembira", "Suka"], jawaban: 0, penjelasan: "Senang lawannya sedih." },
          { soal: "Antonim dari kata 'bersih' adalah ....", pilihan: ["Kotor", "Rapi", "Indah"], jawaban: 0, penjelasan: "Bersih lawannya kotor." },
          { soal: "Antonim dari kata 'terang' adalah ....", pilihan: ["Gelap", "Panas", "Cerah"], jawaban: 0, penjelasan: "Terang lawannya gelap." },
          { soal: "Antonim dari kata 'jauh' adalah ....", pilihan: ["Dekat", "Lebar", "Panjang"], jawaban: 0, penjelasan: "Jauh lawannya dekat." },
          { soal: "Antonim dari kata 'banyak' adalah ....", pilihan: ["Sedikit", "Penuh", "Besar"], jawaban: 0, penjelasan: "Banyak lawannya sedikit." },
          { soal: "Antonim dari kata 'panas' adalah ....", pilihan: ["Dingin", "Hangat", "Terang"], jawaban: 0, penjelasan: "Panas lawannya dingin." },
          { soal: "Antonim dari kata 'tua' adalah ....", pilihan: ["Muda", "Besar", "Tinggi"], jawaban: 0, penjelasan: "Tua lawannya muda." }
        ],

        // ---------- SET 4 ----------
        [
          { soal: "Antonim dari kata 'penuh' adalah ....", pilihan: ["Kosong", "Banyak", "Besar"], jawaban: 0, penjelasan: "Penuh lawannya kosong." },
          { soal: "Antonim dari kata 'buka' adalah ....", pilihan: ["Tutup", "Lebar", "Masuk"], jawaban: 0, penjelasan: "Buka lawannya tutup." },
          { soal: "Antonim dari kata 'naik' adalah ....", pilihan: ["Turun", "Jalan", "Lari"], jawaban: 0, penjelasan: "Naik lawannya turun." },
          { soal: "Antonim dari kata 'masuk' adalah ....", pilihan: ["Keluar", "Lewat", "Datang"], jawaban: 0, penjelasan: "Masuk lawannya keluar." },
          { soal: "Antonim dari kata 'depan' adalah ....", pilihan: ["Belakang", "Samping", "Atas"], jawaban: 0, penjelasan: "Depan lawannya belakang." },
          { soal: "Antonim dari kata 'atas' adalah ....", pilihan: ["Bawah", "Samping", "Depan"], jawaban: 0, penjelasan: "Atas lawannya bawah." },
          { soal: "Antonim dari kata 'kaya' adalah ....", pilihan: ["Miskin", "Banyak", "Besar"], jawaban: 0, penjelasan: "Kaya lawannya miskin." },
          { soal: "Antonim dari kata 'kuat' adalah ....", pilihan: ["Lemah", "Gagah", "Besar"], jawaban: 0, penjelasan: "Kuat lawannya lemah." },
          { soal: "Antonim dari kata 'basah' adalah ....", pilihan: ["Kering", "Dingin", "Panas"], jawaban: 0, penjelasan: "Basah lawannya kering." },
          { soal: "Antonim dari kata 'lebar' adalah ....", pilihan: ["Sempit", "Panjang", "Tinggi"], jawaban: 0, penjelasan: "Lebar lawannya sempit." }
        ],

        // ---------- SET 5 ----------
        [
          { soal: "Antonim dari kata 'ramai' adalah ....", pilihan: ["Sepi", "Banyak", "Riuh"], jawaban: 0, penjelasan: "Ramai lawannya sepi." },
          { soal: "Antonim dari kata 'maju' adalah ....", pilihan: ["Mundur", "Jalan", "Lari"], jawaban: 0, penjelasan: "Maju lawannya mundur." },
          { soal: "Antonim dari kata 'manis' adalah ....", pilihan: ["Pahit", "Asin", "Enak"], jawaban: 0, penjelasan: "Manis lawannya pahit." },
          { soal: "Antonim dari kata 'awal' adalah ....", pilihan: ["Akhir", "Tengah", "Mula"], jawaban: 0, penjelasan: "Awal lawannya akhir." },
          { soal: "Antonim dari kata 'menang' adalah ....", pilihan: ["Kalah", "Juara", "Hebat"], jawaban: 0, penjelasan: "Menang lawannya kalah." },
          { soal: "Antonim dari kata 'ingat' adalah ....", pilihan: ["Lupa", "Tahu", "Paham"], jawaban: 0, penjelasan: "Ingat lawannya lupa." },
          { soal: "Antonim dari kata 'berat' adalah ....", pilihan: ["Ringan", "Besar", "Tebal"], jawaban: 0, penjelasan: "Berat lawannya ringan." },
          { soal: "Antonim dari kata 'baru' adalah ....", pilihan: ["Lama", "Muda", "Bersih"], jawaban: 0, penjelasan: "Baru lawannya lama." },
          { soal: "Antonim dari kata 'bangun' adalah ....", pilihan: ["Tidur", "Duduk", "Jalan"], jawaban: 0, penjelasan: "Bangun lawannya tidur." },
          { soal: "Antonim dari kata 'sulit' adalah ....", pilihan: ["Mudah", "Berat", "Rumit"], jawaban: 0, penjelasan: "Sulit lawannya mudah." }
        ],

        // ---------- SET 6 ----------
        [
          { soal: "Pada fabel, 'air sungai tampak dalam' berlawanan dengan air yang ....", pilihan: ["Dangkal", "Keruh", "Bersih"], jawaban: 0, penjelasan: "Dalam lawannya dangkal." },
          { soal: "Watak Sisi yang 'sombong' berlawanan dengan watak ....", pilihan: ["Rendah hati", "Pemalas", "Pemarah"], jawaban: 0, penjelasan: "Sombong lawannya rendah hati." },
          { soal: "Kura-Kura berjalan 'pelan', lawan katanya adalah ....", pilihan: ["Cepat", "Diam", "Berhenti"], jawaban: 0, penjelasan: "Pelan lawannya cepat." },
          { soal: "Harimau yang semula 'lemas' berubah menjadi 'segar'. Lawan kata 'lemas' adalah ....", pilihan: ["Segar/kuat", "Sakit", "Lelah"], jawaban: 0, penjelasan: "Lemas lawannya segar atau bugar." },
          { soal: "Antonim dari pasangan kata yang tepat adalah ....", pilihan: ["Gagah >< lemah", "Besar >< luas", "Cepat >< gesit"], jawaban: 0, penjelasan: "Gagah berlawanan dengan lemah." },
          { soal: "Kata 'hutan lebat' berlawanan dengan hutan yang ....", pilihan: ["Tipis/jarang", "Besar", "Panjang"], jawaban: 0, penjelasan: "Lebat lawannya tipis atau jarang." },
          { soal: "Antonim dari kata 'bahagia' adalah ....", pilihan: ["Sedih", "Senang", "Gembira"], jawaban: 0, penjelasan: "Bahagia lawannya sedih." },
          { soal: "Antonim dari kata 'tajam' adalah ....", pilihan: ["Tumpul", "Runcing", "Panjang"], jawaban: 0, penjelasan: "Tajam lawannya tumpul." },
          { soal: "Antonim dari kata 'tebal' adalah ....", pilihan: ["Tipis", "Lebar", "Besar"], jawaban: 0, penjelasan: "Tebal lawannya tipis." },
          { soal: "Antonim dari kata 'cepat' pada 'terbang cepat' adalah ....", pilihan: ["Lambat", "Kencang", "Tinggi"], jawaban: 0, penjelasan: "Cepat lawannya lambat." }
        ]

      ],

      /* ===== SOAL ESAI (ditambah 5 soal ekstra) ===== */
      esaiSets: [

        // ---------- SET 1 ----------
        [
          { soal: "Apa yang dimaksud dengan antonim?", contohJawaban: "Antonim adalah kata yang berlawanan maknanya dengan kata lain." },
          { soal: "Tuliskan antonim dari: keras, tinggi, besar.", contohJawaban: "Keras >< lunak, tinggi >< pendek, besar >< kecil." },
          { soal: "Tuliskan antonim dari: cepat, gagah, lebat.", contohJawaban: "Cepat >< pelan (lambat), gagah >< lemah, lebat >< tipis." },
          { soal: "Buatlah satu kalimat yang memakai kata 'besar' dan satu kalimat memakai antonimnya.", contohJawaban: "Gajah bertubuh besar. Semut bertubuh kecil." },
          { soal: "Dalam fabel Kupu-Kupu dan Semut, apa antonim kata 'lambat'?", contohJawaban: "Antonim 'lambat' adalah 'cepat'." }
        ],

        // ---------- SET 2 (5 soal ekstra sesuai permintaan) ----------
        [
          { soal: "Tuliskan lima pasang antonim yang kamu ketahui.", contohJawaban: "Contoh: panjang >< pendek, tinggi >< rendah, siang >< malam, bersih >< kotor, berani >< takut." },
          { soal: "Mengapa memahami antonim penting saat membaca fabel?", contohJawaban: "Agar kita lebih mudah memahami makna kata dan isi cerita." },
          { soal: "Pasangkan dan tuliskan antonim: panjang, besar, tinggi, cepat.", contohJawaban: "Panjang >< pendek, besar >< kecil, tinggi >< rendah/pendek, cepat >< pelan." },
          { soal: "Buatlah kalimat memakai kata 'cepat' dan 'pelan' sekaligus.", contohJawaban: "Kelinci berlari cepat, sedangkan kura-kura berjalan pelan." },
          { soal: "Apa antonim dari kata 'sombong', dan tokoh fabel mana yang menunjukkan sifat sombong?", contohJawaban: "Antonim 'sombong' adalah 'rendah hati'. Tokoh Sisi (merak) dan Kupu-Kupu menunjukkan sifat sombong." }
        ],

        // ---------- SET 3 ----------
        [
          { soal: "Tuliskan antonim dari: dalam, siang, bersih.", contohJawaban: "Dalam >< dangkal, siang >< malam, bersih >< kotor." },
          { soal: "Apa antonim dari kata 'lemah'? Hubungkan dengan fabel Kancil dan Harimau.", contohJawaban: "Antonim 'lemah' adalah 'segar/kuat'. Harimau yang semula lemas menjadi segar setelah rajin olahraga." },
          { soal: "Buatlah dua kalimat memakai pasangan antonim 'tinggi' dan 'rendah'.", contohJawaban: "Pohon itu tinggi sekali. Rumput di bawahnya rendah." },
          { soal: "Tuliskan antonim dari: berani, rajin, menang.", contohJawaban: "Berani >< takut, rajin >< malas, menang >< kalah." },
          { soal: "Mengapa kata-kata sederhana dan antonimnya bermanfaat dalam fabel?", contohJawaban: "Karena membuat pesan cerita lebih mudah dipahami dan disampaikan kepada pembaca." }
        ]

      ],

      /* ===== 6 SET SOAL MENCOCOKKAN (digandakan) ===== */
      cocokkanSets: [

        // ---------- SET 1 : Antonim dasar (dari buku) ----------
        {
          instruksi: "Pasangkan kata dengan antonimnya!",
          pasangan: [
            { kiri: { emoji: "🔊", teks: "Keras" }, kanan: "Lunak" },
            { kiri: { emoji: "📏", teks: "Tinggi" }, kanan: "Pendek" },
            { kiri: { emoji: "💪", teks: "Gagah" }, kanan: "Lemah" },
            { kiri: { emoji: "🔵", teks: "Besar" }, kanan: "Kecil" },
            { kiri: { emoji: "🌳", teks: "Lebat" }, kanan: "Tipis" }
          ]
        },

        // ---------- SET 2 : Antonim (soal akhir) ----------
        {
          instruksi: "Pasangkan kata dengan antonimnya!",
          pasangan: [
            { kiri: { emoji: "🔵", teks: "Besar" }, kanan: "Kecil" },
            { kiri: { emoji: "📏", teks: "Tinggi" }, kanan: "Rendah" },
            { kiri: { emoji: "🏃", teks: "Cepat" }, kanan: "Pelan" },
            { kiri: { emoji: "😊", teks: "Baik" }, kanan: "Buruk" },
            { kiri: { emoji: "📐", teks: "Panjang" }, kanan: "Pendek" }
          ]
        },

        // ---------- SET 3 : Antonim waktu & keadaan ----------
        {
          instruksi: "Pasangkan kata dengan antonimnya!",
          pasangan: [
            { kiri: { emoji: "☀️", teks: "Siang" }, kanan: "Malam" },
            { kiri: { emoji: "💡", teks: "Terang" }, kanan: "Gelap" },
            { kiri: { emoji: "🧽", teks: "Bersih" }, kanan: "Kotor" },
            { kiri: { emoji: "🔥", teks: "Panas" }, kanan: "Dingin" },
            { kiri: { emoji: "💧", teks: "Basah" }, kanan: "Kering" }
          ]
        },

        // ---------- SET 4 : Antonim sifat ----------
        {
          instruksi: "Pasangkan sifat dengan lawannya!",
          pasangan: [
            { kiri: { emoji: "😤", teks: "Sombong" }, kanan: "Rendah hati" },
            { kiri: { emoji: "🦁", teks: "Berani" }, kanan: "Takut" },
            { kiri: { emoji: "📚", teks: "Rajin" }, kanan: "Malas" },
            { kiri: { emoji: "😀", teks: "Senang" }, kanan: "Sedih" },
            { kiri: { emoji: "💪", teks: "Kuat" }, kanan: "Lemah" }
          ]
        },

        // ---------- SET 5 : Antonim arah & posisi ----------
        {
          instruksi: "Pasangkan kata dengan antonimnya!",
          pasangan: [
            { kiri: { emoji: "⬆️", teks: "Naik" }, kanan: "Turun" },
            { kiri: { emoji: "➡️", teks: "Masuk" }, kanan: "Keluar" },
            { kiri: { emoji: "🔙", teks: "Depan" }, kanan: "Belakang" },
            { kiri: { emoji: "🔼", teks: "Atas" }, kanan: "Bawah" },
            { kiri: { emoji: "📍", teks: "Jauh" }, kanan: "Dekat" }
          ]
        },

        // ---------- SET 6 : Antonim ukuran & jumlah ----------
        {
          instruksi: "Pasangkan kata dengan antonimnya!",
          pasangan: [
            { kiri: { emoji: "🪨", teks: "Berat" }, kanan: "Ringan" },
            { kiri: { emoji: "🔢", teks: "Banyak" }, kanan: "Sedikit" },
            { kiri: { emoji: "🫗", teks: "Penuh" }, kanan: "Kosong" },
            { kiri: { emoji: "↔️", teks: "Lebar" }, kanan: "Sempit" },
            { kiri: { emoji: "🌊", teks: "Dalam" }, kanan: "Dangkal" }
          ]
        }

      ]
    },

    /* ========================================================
     *  TOPIK — HURUF KAPITAL
     *  Dari catatan kelas dan lembar latihan.
     * ====================================================== */
    {
      id: "huruf-kapital",
      judul: "Penggunaan Huruf Kapital",
      emoji: "🅰️",

      ringkasan: [
        { emoji: "✍️", teks: "Huruf kapital dipakai pada awal kalimat. Contoh: Ibu memasak di dapur." },
        { emoji: "👨", teks: "Awal kalimat juga seperti: Ayah pergi ke kantor. Kakak sedang membaca buku." },
        { emoji: "🧒", teks: "Huruf kapital dipakai pada awal nama orang. Contoh: Felix bermain bola." },
        { emoji: "👫", teks: "Sonya dan Mika membaca buku. Andi pergi ke sekolah bersama Kevin." },
        { emoji: "📅", teks: "Huruf kapital dipakai pada nama hari. Contoh: Senin, Selasa, dan Minggu." },
        { emoji: "👴", teks: "Hari Senin kakek pulang. Keluarga saya pergi berlibur pada hari Minggu." },
        { emoji: "🗓️", teks: "Huruf kapital dipakai pada nama bulan. Contoh: Januari, Oktober, dan November." },
        { emoji: "🎂", teks: "Adikku lahir bulan Januari. Sekarang sudah bulan Oktober." },
        { emoji: "📍", teks: "Huruf kapital dipakai pada nama tempat. Contoh: Jalan Kenari, Pamulang, dan Jakarta." },
        { emoji: "🏫", teks: "SDK Mater Dei berada di wilayah Tangerang Selatan. Nama sekolah dan wilayah itu diawali huruf kapital." },
        { emoji: "🏖️", teks: "Cerita Berlibur ke Pantai Anyer: Hari Minggu, Sonya dan keluarganya berangkat pagi hari." },
        { emoji: "🐚", teks: "Di Pantai Anyer, Sonya bermain pasir dan mengumpulkan kerang. Adik bermain air bersama ayah." },
        { emoji: "🧺", teks: "Ibu duduk di bawah pohon sambil menyiapkan bekal. Mereka merasa senang." },
        { emoji: "🗑️", teks: "Setelah bermain, mereka membersihkan sampah, lalu pulang ke rumah." }
      ],

      pilihanGandaSets: [
        [
          {
            soal: "Kalimat yang menggunakan huruf kapital dengan benar adalah ....",
            pilihan: [
              "Ani pergi ke sekolah pada hari Senin.",
              "Ani pergi ke Sekolah pada hari senin.",
              "Ani pergi ke sekolah pada hari senin."
            ],
            jawaban: 0,
            penjelasan: "Ani, awal kalimat, dan Senin (nama hari) memakai huruf kapital. Kata sekolah bukan nama, jadi tidak kapital."
          },
          {
            soal: "Hari setelah Senin adalah ....",
            pilihan: ["selasa", "Selasa", "SELasa"],
            jawaban: 1,
            penjelasan: "Nama hari ditulis dengan huruf pertama kapital: Selasa."
          },
          {
            soal: "Kalimat yang penulisannya benar adalah ....",
            pilihan: [
              "Rina pergi ke pasar pada hari Minggu.",
              "rina pergi ke pasar pada hari minggu.",
              "Rina pergi ke pasar pada hari minggu."
            ],
            jawaban: 0,
            penjelasan: "Rina (nama orang) dan Minggu (nama hari) diawali huruf kapital. Kalimat juga diawali huruf kapital."
          },
          {
            soal: "Kalimat yang penulisannya benar adalah ....",
            pilihan: [
              "Dodi berkunjung ke rumah nenek pada hari jumat.",
              "dodi berkunjung ke rumah nenek pada hari jumat.",
              "Dodi berkunjung ke rumah nenek pada hari Jumat."
            ],
            jawaban: 2,
            penjelasan: "Dodi dan Jumat diawali huruf kapital."
          },
          {
            soal: "Penulisan nama orang dan nama hari yang benar adalah ....",
            pilihan: [
              "lani pergi berenang pada hari sabtu.",
              "Lani pergi berenang pada hari Sabtu.",
              "Lani pergi berenang pada hari sabtu."
            ],
            jawaban: 1,
            penjelasan: "Lani dan Sabtu keduanya diawali huruf kapital."
          }
        ],
        [
          {
            soal: "Penulisan nama tempat yang benar adalah ....",
            pilihan: ["Kota surabaya", "kota surabaya", "Kota Surabaya"],
            jawaban: 2,
            penjelasan: "Kota dan Surabaya adalah nama tempat, jadi keduanya diawali huruf kapital."
          },
          {
            soal: "Penulisan nama tempat yang benar adalah ....",
            pilihan: ["Danau toba", "Danau Toba", "danau Toba"],
            jawaban: 1,
            penjelasan: "Danau Toba adalah nama tempat. Danau dan Toba diawali huruf kapital."
          },
          {
            soal: "Penulisan kalimat yang benar adalah ....",
            pilihan: [
              "teman baruku berasal dari Madura.",
              "Teman baruku berasal dari madura.",
              "Teman baruku berasal dari Madura."
            ],
            jawaban: 2,
            penjelasan: "Awal kalimat kapital, dan Madura adalah nama tempat."
          },
          {
            soal: "Penulisan kalimat yang benar adalah ....",
            pilihan: [
              "Kami studi lapangan di bulan oktober.",
              "Bulan Desember kami pergi ke Solo.",
              "Pamulang berada di wilayah banten."
            ],
            jawaban: 1,
            penjelasan: "Desember (nama bulan) dan Solo (nama tempat) diawali huruf kapital. Oktober dan Banten pada pilihan lain masih huruf kecil."
          },
          {
            soal: "Penulisan nama tempat yang benar adalah ....",
            pilihan: [
              "Temanku tinggal di Jalan Sudirman.",
              "temanku tinggal di Jalan Sudirman.",
              "Temanku tinggal di Jalan sudirman."
            ],
            jawaban: 0,
            penjelasan: "Awal kalimat, Jalan, dan Sudirman diawali huruf kapital."
          }
        ]
      ],

      esaiSets: [
        [
          {
            soal: "Tulislah dengan huruf kapital yang benar: ayah pergi ke medan.",
            contohJawaban: "Ayah pergi ke Medan."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: kami berlibur ke bali.",
            contohJawaban: "Kami berlibur ke Bali."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: ibu berbelanja di pasar ciputat.",
            contohJawaban: "Ibu berbelanja di Pasar Ciputat."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: michael dan tomas sekolah di mater dei.",
            contohJawaban: "Michael dan Tomas sekolah di Mater Dei."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: kakakku bernama joni sitompul.",
            contohJawaban: "Kakakku bernama Joni Sitompul."
          }
        ],
        [
          {
            soal: "Tulislah dengan huruf kapital yang benar: probolinggo terletak di jawa timur.",
            contohJawaban: "Probolinggo terletak di Jawa Timur."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: pak anton bekerja di medan.",
            contohJawaban: "Pak Anton bekerja di Medan."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: hari selasa kami belajar bersama.",
            contohJawaban: "Hari Selasa kami belajar bersama."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: keluargaku tinggal di bandung.",
            contohJawaban: "Keluargaku tinggal di Bandung."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: hari minggu kami pergi ke cirebon.",
            contohJawaban: "Hari Minggu kami pergi ke Cirebon."
          }
        ],
        [
          {
            soal: "Tulislah kembali dengan huruf kapital yang benar. Rapikan juga kata yang menempel: santo pergi ke sekolahbersama deni.",
            contohJawaban: "Santo pergi ke sekolah bersama Deni."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: bibi tinggal di jalan witana.",
            contohJawaban: "Bibi tinggal di Jalan Witana."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: hari minggu, kami pergi berlibur.",
            contohJawaban: "Hari Minggu, kami pergi berlibur."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: santi tinggal di bandung.",
            contohJawaban: "Santi tinggal di Bandung."
          },
          {
            soal: "Tulislah dengan huruf kapital yang benar: nama adikku adalah roni.",
            contohJawaban: "Nama adikku adalah Roni."
          }
        ],
        [
          {
            soal: "Salinlah dengan huruf kapital yang benar: bibi tinggal di dumai.",
            contohJawaban: "Bibi tinggal di Dumai."
          },
          {
            soal: "Salinlah dengan huruf kapital yang benar: ayah pergi tugas ke aceh.",
            contohJawaban: "Ayah pergi tugas ke Aceh."
          },
          {
            soal: "Salinlah dengan huruf kapital yang benar: kakek tinggal di jalan kenanga.",
            contohJawaban: "Kakek tinggal di Jalan Kenanga."
          },
          {
            soal: "Salinlah dengan huruf kapital yang benar: ibu membeli oleh-oleh dari yogyakarta.",
            contohJawaban: "Ibu membeli oleh-oleh dari Yogyakarta."
          },
          {
            soal: "Salinlah dengan huruf kapital yang benar: kakek tinggal di surabaya.",
            contohJawaban: "Kakek tinggal di Surabaya."
          }
        ],
        [
          {
            soal: "Dalam cerita Berlibur ke Pantai Anyer, ke mana Sonya pergi?",
            contohJawaban: "Sonya pergi berlibur ke Pantai Anyer bersama keluarganya."
          },
          {
            soal: "Pada hari apa mereka berangkat, dan kapan berangkatnya?",
            contohJawaban: "Hari Minggu, pagi hari."
          },
          {
            soal: "Apa yang Sonya lakukan di Pantai Anyer?",
            contohJawaban: "Sonya bermain pasir dan mengumpulkan kerang."
          },
          {
            soal: "Apa yang dilakukan adik dan ayah?",
            contohJawaban: "Adik bermain air bersama ayah."
          },
          {
            soal: "Apa yang Ibu lakukan, dan apa yang keluarga lakukan sebelum pulang?",
            contohJawaban: "Ibu duduk di bawah pohon sambil menyiapkan bekal. Sebelum pulang, mereka membersihkan sampah."
          }
        ]
      ],

      cocokkanSets: [
        {
          instruksi: "Pasangkan aturan huruf kapital dengan contohnya!",
          pasangan: [
            { kiri: { emoji: "✍️", teks: "Awal kalimat" }, kanan: "Ibu memasak di dapur." },
            { kiri: { emoji: "🧒", teks: "Nama orang" }, kanan: "Felix bermain bola." },
            { kiri: { emoji: "📅", teks: "Nama hari" }, kanan: "Hari Senin" },
            { kiri: { emoji: "🗓️", teks: "Nama bulan" }, kanan: "Bulan Januari" },
            { kiri: { emoji: "📍", teks: "Nama tempat" }, kanan: "Kota Jakarta" }
          ]
        },
        {
          instruksi: "Pasangkan tulisan yang masih salah dengan tulisan yang benar!",
          pasangan: [
            { kiri: { emoji: "1️⃣", teks: "selasa" }, kanan: "Selasa" },
            { kiri: { emoji: "2️⃣", teks: "jakarta" }, kanan: "Jakarta" },
            { kiri: { emoji: "3️⃣", teks: "oktober" }, kanan: "Oktober" },
            { kiri: { emoji: "4️⃣", teks: "sonya" }, kanan: "Sonya" },
            { kiri: { emoji: "5️⃣", teks: "banten" }, kanan: "Banten" }
          ]
        }
      ]
    },

    {
      id: "puisi-anak",
      judul: "Puisi Anak",
      emoji: "📝",
      ringkasan: [
        { emoji: "📝", teks: "Puisi anak memakai baris-baris pendek." },
        { emoji: "📄", teks: "Beberapa baris dapat disusun menjadi satu bait." },
        { emoji: "💛", teks: "Puisi dapat mengungkapkan perasaan, misalnya senang atau kagum." },
        { emoji: "🔤", teks: "Bunyi di akhir baris kadang sama, tetapi tidak semua puisi wajib begitu." },
        { emoji: "🌧️", teks: "Contoh buatan kita: Hujan rintik di atap rumah. Lou tersenyum minum susu hangat." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Puisi anak biasanya ditulis dalam ....", pilihan: ["baris pendek", "satu paragraf panjang saja", "daftar belanja"], jawaban: 0, penjelasan: "Puisi memakai baris-baris pendek." },
          { soal: "Beberapa baris puisi dapat disebut ....", pilihan: ["bait", "bab angka", "turus"], jawaban: 0, penjelasan: "Kumpulan baris itu disebut bait." },
          { soal: "Puisi dapat dipakai untuk ....", pilihan: ["mengungkapkan perasaan", "mengukur berat", "menghitung turus"], jawaban: 0, penjelasan: "Perasaan senang, sedih, atau kagum bisa ditulis dalam puisi." },
          { soal: "Bunyi akhir baris yang sama ....", pilihan: ["boleh dipakai, tetapi tidak wajib", "wajib pada setiap puisi", "membuat puisi menjadi soal hitung"], jawaban: 0, penjelasan: "Rima boleh ada, tetapi bukan syarat satu-satunya." }
        ],
        [
          { soal: "Hujan rintik di atap rumah. Baris itu adalah bagian ....", pilihan: ["puisi", "tabel data", "soal pengurangan"], jawaban: 0, penjelasan: "Itu satu baris puisi." },
          { soal: "Saat membaca puisi, suara kita ....", pilihan: ["jelas dan tidak berteriak", "harus berbisik terus", "harus sangat cepat tanpa jeda"], jawaban: 0, penjelasan: "Puisi dibacakan agar teman dapat mendengar perasaannya." },
          { soal: "Puisi berbeda dari paragraf karena puisi ....", pilihan: ["disusun dalam baris pendek", "tidak punya kata", "selalu berupa angka"], jawaban: 0, penjelasan: "Paragraf berupa kalimat berurutan. Puisi berupa baris." },
          { soal: "Perasaan yang dapat ditulis dalam puisi misalnya ....", pilihan: ["senang atau kagum", "hanya rumus", "hanya nama bulan"], jawaban: 0, penjelasan: "Puisi anak sering menceritakan perasaan." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan dua ciri puisi anak.", contohJawaban: "Barisnya pendek, dan ia dapat mengungkapkan perasaan. Beberapa baris dapat menjadi satu bait." },
          { soal: "Apa beda puisi dan paragraf?", contohJawaban: "Puisi disusun dalam baris pendek. Paragraf disusun dari kalimat yang berurutan." },
          { soal: "Tuliskan satu baris puisi tentang hujan.", contohJawaban: "Contoh: Hujan rintik di atap rumah." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan bagian puisi dengan artinya!",
        pasangan: [
          { kiri: { emoji: "📝", teks: "Baris" }, kanan: "Satu larik pendek" },
          { kiri: { emoji: "📄", teks: "Bait" }, kanan: "Beberapa baris yang berkelompok" },
          { kiri: { emoji: "💛", teks: "Perasaan" }, kanan: "Senang, sedih, atau kagum" },
          { kiri: { emoji: "🔤", teks: "Bunyi akhir" }, kanan: "Boleh sama, tidak wajib" }
        ]
      }]
    },

    {
      id: "teks-petunjuk",
      judul: "Teks Petunjuk",
      emoji: "🧼",
      ringkasan: [
        { emoji: "🧼", teks: "Teks petunjuk memberi langkah untuk melakukan sesuatu." },
        { emoji: "1️⃣", teks: "Langkahnya harus berurutan. Kalau dibalik, hasilnya bisa salah." },
        { emoji: "👐", teks: "Mencuci tangan: basahi tangan, gosok dengan sabun, bilas, lalu keringkan." },
        { emoji: "🌱", teks: "Menyiram tanaman: ambil air, siram pelan pada tanah, lalu simpan gayung." },
        { emoji: "👀", teks: "Kata seperti pertama, lalu, dan terakhir membantu kita mengikuti urutan." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Teks yang berisi langkah-langkah disebut teks ....", pilihan: ["petunjuk", "puisi", "turus"], jawaban: 0, penjelasan: "Teks petunjuk memberitahu cara melakukan sesuatu." },
          { soal: "Langkah petunjuk harus ....", pilihan: ["berurutan", "diacak", "hanya satu kata"], jawaban: 0, penjelasan: "Urutan yang benar membuat kegiatan berhasil." },
          { soal: "Setelah tangan digosok sabun, langkah berikutnya adalah ....", pilihan: ["dibilas", "dibiarkan sabunnya", "dipakai makan"], jawaban: 0, penjelasan: "Sabun dibilas, lalu tangan dikeringkan." },
          { soal: "Kata yang menunjukkan urutan adalah ....", pilihan: ["lalu", "karena", "tetapi"], jawaban: 0, penjelasan: "Lalu, pertama, dan terakhir menandai langkah." }
        ],
        [
          { soal: "Menyiram tanaman dimulai dengan ....", pilihan: ["mengambil air", "menyimpan gayung dulu", "memetik bunga"], jawaban: 0, penjelasan: "Air diambil lebih dulu, baru disiramkan." },
          { soal: "Air disiram pelan ke ....", pilihan: ["tanah", "langit-langit", "buku"], jawaban: 0, penjelasan: "Tanaman menyerap air dari tanah." },
          { soal: "Jika langkah dibalik, hasilnya bisa ....", pilihan: ["salah", "selalu lebih baik", "menjadi puisi"], jawaban: 0, penjelasan: "Urutan penting pada teks petunjuk." },
          { soal: "Teks petunjuk dipakai untuk kegiatan ....", pilihan: ["sehari-hari", "hanya upacara", "hanya berhitung"], jawaban: 0, penjelasan: "Contohnya mencuci tangan dan menyiram tanaman." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan urutan mencuci tangan.", contohJawaban: "Basahi tangan, gosok dengan sabun, bilas, lalu keringkan." },
          { soal: "Mengapa urutan langkah tidak boleh dibalik?", contohJawaban: "Karena hasilnya bisa salah atau kegiatan tidak selesai dengan baik." },
          { soal: "Sebutkan dua kata yang menunjukkan urutan.", contohJawaban: "Pertama, lalu, atau terakhir." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan kegiatan dengan langkah pertamanya!",
        pasangan: [
          { kiri: { emoji: "🧼", teks: "Mencuci tangan" }, kanan: "Basahi tangan" },
          { kiri: { emoji: "🌱", teks: "Menyiram tanaman" }, kanan: "Ambil air" },
          { kiri: { emoji: "1️⃣", teks: "Teks petunjuk" }, kanan: "Langkah yang berurutan" },
          { kiri: { emoji: "👀", teks: "Kata lalu" }, kanan: "Menunjukkan urutan" }
        ]
      }]
    },

    {
      id: "teks-deskripsi",
      judul: "Teks Deskripsi",
      emoji: "👀",
      ringkasan: [
        { emoji: "👀", teks: "Teks deskripsi menggambarkan sesuatu dengan kalimat sederhana." },
        { emoji: "🎨", teks: "Kita dapat menulis warna, bentuk, ukuran, atau rasanya." },
        { emoji: "⚽", teks: "Contoh: Bola Lou berwarna merah, bulat, dan ringan." },
        { emoji: "👃", teks: "Pancaindra membantu: mata melihat, tangan meraba, hidung mencium, lidah merasa, telinga mendengar." },
        { emoji: "✍️", teks: "Deskripsi menjawab pertanyaan seperti apa bendanya." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Teks yang menggambarkan suatu benda disebut teks ....", pilihan: ["deskripsi", "turus", "hanya judul"], jawaban: 0, penjelasan: "Deskripsi melukiskan ciri benda atau tempat." },
          { soal: "Bola Lou berwarna merah, bulat, dan ringan. Kalimat itu menggambarkan ....", pilihan: ["warna, bentuk, dan berat", "hanya nama orang", "langkah mencuci tangan"], jawaban: 0, penjelasan: "Merah adalah warna, bulat adalah bentuk, ringan adalah berat." },
          { soal: "Mata membantu kita mengetahui ....", pilihan: ["warna dan bentuk", "rasa manis", "berat dalam kilogram"], jawaban: 0, penjelasan: "Warna dan bentuk dilihat dengan mata." },
          { soal: "Deskripsi menjawab pertanyaan ....", pilihan: ["seperti apa bendanya", "berapa 8 + 7", "siapa presiden pertama"], jawaban: 0, penjelasan: "Kita menulis ciri-ciri benda itu." }
        ],
        [
          { soal: "Lidah membantu kita mengetahui ....", pilihan: ["rasa", "warna", "bunyi akhir puisi"], jawaban: 0, penjelasan: "Manis, asin, atau asam diketahui dengan lidah." },
          { soal: "Kalimat deskripsi yang tepat adalah ....", pilihan: ["Tas itu biru dan ada gambar bintang.", "Lalu bilas tangan.", "8 + 7 = 15."], jawaban: 0, penjelasan: "Kalimat pertama menggambarkan warna dan gambar pada tas." },
          { soal: "Tangan dapat meraba benda itu ....", pilihan: ["halus atau kasar", "berwarna apa dari jauh", "berbunyi apa"], jawaban: 0, penjelasan: "Rabaan memberitahu halus, kasar, panas, atau dingin." },
          { soal: "Deskripsi memakai ....", pilihan: ["beberapa kalimat sederhana", "hanya satu angka", "hanya turus"], jawaban: 0, penjelasan: "Cukup beberapa kalimat tentang cirinya." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa yang dimaksud teks deskripsi?", contohJawaban: "Teks yang menggambarkan sesuatu, misalnya warna, bentuk, atau ukurannya." },
          { soal: "Tuliskan satu kalimat deskripsi tentang bola merah.", contohJawaban: "Bola itu berwarna merah, bulat, dan ringan." },
          { soal: "Indra apa yang dipakai untuk mengetahui rasa?", contohJawaban: "Lidah." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan indra dengan yang diamatinya!",
        pasangan: [
          { kiri: { emoji: "👀", teks: "Mata" }, kanan: "Warna dan bentuk" },
          { kiri: { emoji: "✋", teks: "Tangan" }, kanan: "Halus atau kasar" },
          { kiri: { emoji: "👅", teks: "Lidah" }, kanan: "Rasa" },
          { kiri: { emoji: "👂", teks: "Telinga" }, kanan: "Bunyi" }
        ]
      }]
    },

    {
      id: "mengenal-perasaan",
      judul: "Mengenal Perasaan",
      emoji: "😊",
      ringkasan: [
        { emoji: "😊", teks: "Perasaan adalah apa yang kita rasakan, misalnya senang, sedih, marah, atau takut." },
        { emoji: "🎉", teks: "Senang saat mendapat kabar baik. Wajahnya tersenyum." },
        { emoji: "😢", teks: "Sedih saat kehilangan sesuatu atau teman pergi." },
        { emoji: "😠", teks: "Marah saat diganggu. Kita tetap boleh berkata dengan tenang." },
        { emoji: "😨", teks: "Takut saat berada di tempat yang belum dikenal. Minta bantuan orang yang dipercaya." },
        { emoji: "🌟", teks: "Bangga saat berhasil mencoba lagi. Perasaan boleh diceritakan dengan sopan." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Perasaan saat tersenyum karena kabar baik adalah ....", pilihan: ["senang", "takut", "lapar"], jawaban: 0, penjelasan: "Senang sering tampak dari senyuman." },
          { soal: "Saat mainan kesayangan hilang, Lou merasa ....", pilihan: ["sedih", "bangga", "mengantuk"], jawaban: 0, penjelasan: "Kehilangan dapat membuat kita sedih." },
          { soal: "Marah tetap boleh diungkapkan dengan ....", pilihan: ["kata yang tenang", "memukul", "mengejek"], jawaban: 0, penjelasan: "Kita boleh bilang bahwa kita marah tanpa menyakiti." },
          { soal: "Takut di tempat baru sebaiknya ....", pilihan: ["minta bantuan orang yang dipercaya", "berlari sendirian jauh", "berpura-pura tidak punya perasaan"], jawaban: 0, penjelasan: "Orang tua atau guru dapat menemani." }
        ],
        [
          { soal: "Bangga adalah perasaan saat ....", pilihan: ["berhasil mencoba lagi", "kehilangan barang", "diganggu teman"], jawaban: 0, penjelasan: "Berhasil setelah berusaha dapat membuat kita bangga." },
          { soal: "Perasaan boleh diceritakan kepada ....", pilihan: ["orang tua atau guru", "orang yang tidak dikenal di jalan", "tidak boleh kepada siapa pun"], jawaban: 0, penjelasan: "Cerita kepada orang yang dipercaya membuat hati lebih ringan." },
          { soal: "Kata yang menunjukkan perasaan adalah ....", pilihan: ["sedih", "meja", "puluhan"], jawaban: 0, penjelasan: "Sedih adalah perasaan. Meja adalah benda." },
          { soal: "Wajah tersenyum biasanya menunjukkan rasa ....", pilihan: ["senang", "takut", "marah"], jawaban: 0, penjelasan: "Senyum adalah tanda senang." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan empat perasaan.", contohJawaban: "Senang, sedih, marah, dan takut. Bangga juga boleh." },
          { soal: "Apa yang sebaiknya dilakukan saat marah?", contohJawaban: "Mengatakan perasaan itu dengan tenang, tanpa memukul atau mengejek." },
          { soal: "Kapan seseorang merasa bangga?", contohJawaban: "Saat berhasil mencoba lagi atau menyelesaikan usahanya." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan perasaan dengan tandanya!",
        pasangan: [
          { kiri: { emoji: "😊", teks: "Senang" }, kanan: "Tersenyum" },
          { kiri: { emoji: "😢", teks: "Sedih" }, kanan: "Kehilangan sesuatu" },
          { kiri: { emoji: "😠", teks: "Marah" }, kanan: "Terganggu, tetapi berkata tenang" },
          { kiri: { emoji: "🌟", teks: "Bangga" }, kanan: "Berhasil mencoba lagi" }
        ]
      }]
    }
  ]
};

/* ============================================================
 *  DEFINISI MATA PELAJARAN IPAS
 *  (dipisah agar mudah dibaca; dipakai di array SUBJECTS)
 *  Modul: Cuaca — Bab 3 "Kenampakan Matahari dan Cuaca".
 *
 *  Soal boleh punya "gambar": "img/cuaca/nama-file.svg"
 *  (ditampilkan di atas soal). Ringkasan juga boleh memakai
 *  "gambar" sebagai pengganti emoji.
 * ============================================================ */
const IPAS_SUBJECT = {
  id: "ipas",
  nama: "IPAS",
  ikon: "🔬",
  warna: "#3a86ff",
  deskripsi: "Mengenal cuaca, makhluk hidup, tempat hidup, dan manfaatnya.",
  topik: [

    /* ========================================================
     *  MODUL 1 — CUACA
     * ====================================================== */
    {
      id: "cuaca",
      judul: "Cuaca",
      emoji: "🌦️",

      ringkasan: [
        { emoji: "☀️", teks: "Matahari adalah sumber energi terbesar di Bumi. Sinarnya menerangi dan menghangatkan Bumi." },
        { emoji: "🌍", teks: "Saat sinar matahari sampai di Bumi, hanya dua pertiganya yang diserap Bumi. Sisanya dipantulkan kembali ke luar angkasa." },
        { emoji: "🌬️", teks: "Ada bagian Bumi yang panas dan ada yang dingin. Perbedaan inilah yang menyebabkan badai, angin, dan hujan." },
        { emoji: "🌦️", teks: "Cuaca adalah keadaan udara, angin, panas, dan hujan pada suatu tempat dalam waktu singkat." },
        { gambar: "img/cuaca/cerah.svg", teks: "Cuaca cerah: matahari bersinar terang dan langit biru. Cocok untuk menjemur pakaian dan bermain bola." },
        { gambar: "img/cuaca/cerah-berawan.svg", teks: "Cuaca cerah berawan: matahari bersinar, tetapi ada beberapa awan di langit." },
        { gambar: "img/cuaca/berawan.svg", teks: "Cuaca berawan: langit tertutup banyak awan. Jika awan gelap berkumpul dan angin kencang, biasanya akan turun hujan." },
        { gambar: "img/cuaca/hujan.svg", teks: "Cuaca hujan: titik-titik air turun ke permukaan bumi." },
        { gambar: "img/cuaca/hujan-petir.svg", teks: "Cuaca hujan petir: terjadi karena awan tebal menumpuk dan perbedaan panas di permukaan bumi." },
        { emoji: "🔭", teks: "Perkiraan cuaca ditentukan berdasarkan bentuk awan dan kecepatan angin. Kadang tepat, kadang kurang tepat." },
        { emoji: "🏢", teks: "Di Indonesia, informasi perkiraan cuaca diberikan oleh BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)." },
        { emoji: "✈️", teks: "Perkiraan cuaca penting untuk pesawat dan kapal. Jika cuaca buruk, penerbangan dan pelayaran ditunda sampai cuaca membaik." },
        { emoji: "🌾", teks: "Cuaca memengaruhi kegiatan manusia. Saat panas: membuat garam, menjemur gabah, dan menjemur ikan. Saat hujan: lebih banyak di dalam ruangan." },
        { gambar: "img/cuaca/kaos-katun.svg", teks: "Saat cuaca panas, pakailah baju dari bahan katun karena mudah menyerap keringat." },
        { gambar: "img/cuaca/jas-hujan.svg", teks: "Saat hujan, pakailah jas hujan ketika di luar rumah agar tubuh tidak basah. Saat udara dingin, pakailah jaket." },
        { gambar: "img/cuaca/banjir.svg", teks: "Hujan yang turun terus-menerus dapat menyebabkan banjir." },
        { gambar: "img/cuaca/posisi-matahari.svg", teks: "Pagi: matahari terbit di timur, udara sejuk. Siang: matahari di atas kepala, udara panas. Sore: matahari di barat, langit perlahan gelap." },
        { emoji: "🌙", teks: "Malam hari kita bisa melihat bulan dan bintang. Matahari terbenam di arah barat." },
        { gambar: "img/cuaca/bayang-pagi.svg", teks: "Benda yang disinari cahaya membentuk bayang-bayang. Bayang-bayang dipengaruhi posisi matahari." },
        { emoji: "📏", teks: "Pagi hari bayangan panjang ke arah barat. Siang hari bayangan paling pendek. Sore hari bayangan panjang ke arah timur." },
        { emoji: "🕶️", teks: "Matahari pagi mengandung vitamin D yang baik untuk tulang. Tetapi, jangan menatap matahari secara langsung karena dapat merusak mata." },
        { emoji: "🔄", teks: "Cuaca bisa berubah setiap waktu." },
        { emoji: "4️⃣", teks: "Catatan kelas menyebut 4 macam cuaca: cerah, berawan dan mendung, hujan, dan berangin." },
        { emoji: "☀️", teks: "Cuaca cerah: langit berwarna biru dan matahari bersinar terang. Pada malam hari terlihat bulan dan bintang." },
        { emoji: "☁️", teks: "Cuaca berawan dan mendung: banyak awan menutup matahari. Awan yang menebal menjadi hitam menandakan hujan akan turun." },
        { emoji: "🌧️", teks: "Cuaca hujan: langit gelap, udara dingin, dan titik-titik air turun. Hujan deras sering disertai petir dan suara menggelegar." },
        { emoji: "💨", teks: "Cuaca berangin: angin kencang dan suhu lebih dingin. Angin badai bertiup sangat kencang dan dapat merobohkan bangunan." }
      ],

      /* ===== 4 SET SOAL PILIHAN GANDA ===== */
      pilihanGandaSets: [

        // ---------- SET 1 : Latihan Ulangan Bab 3 ----------
        [
          {
            soal: "Lani dan ayah berolahraga di taman. Udara terasa sejuk dan matahari terbit di arah timur. Mereka berolahraga pada waktu ... hari.",
            pilihan: ["Pagi", "Siang", "Sore"],
            jawaban: 0,
            penjelasan: "Pagi hari matahari terbit di timur dan udara terasa sejuk."
          },
          {
            soal: "Matahari bersinar terang tepat di atas kepala. Udara terasa panas. Keadaan ini terjadi pada waktu ... hari.",
            pilihan: ["Pagi", "Siang", "Sore"],
            jawaban: 1,
            penjelasan: "Siang hari matahari berada di atas kepala sehingga udara terasa panas."
          },
          {
            soal: "Kondisi pada waktu sore hari adalah ....",
            pilihan: ["Matahari bersinar paling terik", "Matahari muncul dari arah timur", "Langit perlahan-lahan menjadi gelap"],
            jawaban: 2,
            penjelasan: "Sore hari matahari bergerak ke barat dan langit perlahan-lahan menjadi gelap. Matahari muncul dari timur itu pagi hari."
          },
          {
            soal: "Kegiatan yang biasa dilakukan pada sore hari adalah ....",
            pilihan: ["🛏️ Bangun tidur (05.00)", "🥣 Sarapan sebelum sekolah (06.00)", "🚿 Mandi sore (16.00)"],
            jawaban: 2,
            penjelasan: "Pukul 16.00 adalah sore hari, waktunya mandi sore."
          },
          {
            soal: "Benda yang disinari oleh cahaya akan membentuk ....",
            pilihan: ["Bayang-bayang", "Gerakan", "Sinar"],
            jawaban: 0,
            penjelasan: "Benda yang terkena cahaya membentuk bayang-bayang di sisi yang tidak terkena cahaya."
          },
          {
            soal: "Andi mengamati bayang-bayang tiang bendera di sekolahnya. Bayang-bayang paling pendek terjadi pada waktu ... hari.",
            pilihan: ["Pagi", "Siang", "Sore"],
            jawaban: 1,
            penjelasan: "Siang hari matahari tepat di atas kepala, jadi bayangannya paling pendek."
          },
          {
            gambar: "img/cuaca/langit-mendung.svg",
            soal: "Langit tampak gelap, banyak awan gelap berkumpul, dan angin terasa lebih kencang. Kondisi cuaca seperti ini adalah ....",
            pilihan: ["Hujan", "Cerah", "Berawan (mendung)"],
            jawaban: 2,
            penjelasan: "Itu ciri cuaca berawan atau mendung. Biasanya sebentar lagi turun hujan."
          },
          {
            gambar: "img/cuaca/jemur-pakaian.svg",
            soal: "Cuaca yang paling baik untuk menjemur pakaian adalah ....",
            pilihan: ["Berawan", "Cerah", "Hujan"],
            jawaban: 1,
            penjelasan: "Saat cerah, panas matahari membuat pakaian cepat kering."
          },
          {
            gambar: "img/cuaca/jas-hujan.svg",
            soal: "Perhatikan gambar. Pakaian tersebut biasa digunakan saat cuaca ....",
            pilihan: ["Cerah", "Hujan", "Berawan"],
            jawaban: 1,
            penjelasan: "Jas hujan dipakai saat hujan agar tubuh tidak basah."
          },
          {
            gambar: "img/cuaca/banjir.svg",
            soal: "Bencana alam yang dapat timbul jika hujan turun terus-menerus adalah ....",
            pilihan: ["Banjir", "Gempa", "Tsunami"],
            jawaban: 0,
            penjelasan: "Hujan terus-menerus membuat air meluap sehingga terjadi banjir."
          }
        ],

        // ---------- SET 2 : Lambang & tanda cuaca ----------
        [
          {
            gambar: "img/cuaca/langit-cerah.svg",
            soal: "Saat cuaca cerah, langit terlihat ....",
            pilihan: ["Gelap", "Biru dan terang", "Mendung"],
            jawaban: 1,
            penjelasan: "Saat cerah, langit biru dan terang karena matahari bersinar."
          },
          {
            soal: "Saat hujan, kita perlu memakai ....",
            pilihan: ["Topi", "Kacamata", "Jas hujan"],
            jawaban: 2,
            penjelasan: "Jas hujan menjaga tubuh tetap kering saat hujan."
          },
          {
            soal: "Cuaca berawan biasanya terjadi sebelum ....",
            pilihan: ["Malam", "Hujan", "Pagi"],
            jawaban: 1,
            penjelasan: "Awan yang semakin banyak dan gelap biasanya membawa hujan."
          },
          {
            gambar: "img/cuaca/angin.svg",
            soal: "Saat berangin, benda yang sering terlihat bergerak adalah ....",
            pilihan: ["Daun dan bendera", "Batu dan tanah", "Air dan pasir"],
            jawaban: 0,
            penjelasan: "Daun dan bendera ringan, jadi mudah bergerak tertiup angin."
          },
          {
            soal: "Pada siang hari yang cerah, posisi matahari berada ....",
            pilihan: ["Di bawah benda", "Tepat di atas kepala", "Di sebelah barat"],
            jawaban: 1,
            penjelasan: "Siang hari matahari berada tepat di atas kepala."
          },
          {
            gambar: "img/cuaca/hujan-petir.svg",
            soal: "Lambang cuaca pada gambar artinya ....",
            pilihan: ["Cerah berawan", "Hujan petir", "Berawan"],
            jawaban: 1,
            penjelasan: "Awan gelap dengan kilat dan tetes air berarti hujan petir."
          },
          {
            gambar: "img/cuaca/cerah-berawan.svg",
            soal: "Lambang cuaca pada gambar artinya ....",
            pilihan: ["Cerah berawan", "Hujan", "Berawan"],
            jawaban: 0,
            penjelasan: "Matahari yang sebagian tertutup awan berarti cerah berawan."
          },
          {
            gambar: "img/cuaca/berawan.svg",
            soal: "Lambang cuaca pada gambar artinya ....",
            pilihan: ["Cerah", "Hujan petir", "Berawan"],
            jawaban: 2,
            penjelasan: "Hanya ada awan tanpa matahari dan tanpa hujan, berarti berawan."
          },
          {
            soal: "Matahari tampak terbenam di arah ....",
            pilihan: ["Timur", "Barat", "Utara"],
            jawaban: 1,
            penjelasan: "Matahari terbit di timur dan terbenam di barat."
          },
          {
            soal: "Lembaga yang memberikan informasi perkiraan cuaca di Indonesia adalah ....",
            pilihan: ["BMKG", "PLN", "PDAM"],
            jawaban: 0,
            penjelasan: "BMKG = Badan Meteorologi, Klimatologi, dan Geofisika."
          }
        ],

        // ---------- SET 3 : Cuaca, kegiatan & pakaian ----------
        [
          {
            soal: "Keadaan udara, angin, panas, dan hujan pada suatu tempat dalam waktu singkat disebut ....",
            pilihan: ["Cuaca", "Pelangi", "Bayangan"],
            jawaban: 0,
            penjelasan: "Itulah arti cuaca."
          },
          {
            soal: "Sumber energi terbesar di Bumi adalah ....",
            pilihan: ["Bulan", "Matahari", "Bintang"],
            jawaban: 1,
            penjelasan: "Matahari memberi cahaya dan panas untuk seluruh Bumi."
          },
          {
            gambar: "img/cuaca/kaos-katun.svg",
            soal: "Saat cuaca panas, sebaiknya kita memakai pakaian dari bahan ....",
            pilihan: ["Katun", "Wol yang tebal", "Plastik"],
            jawaban: 0,
            penjelasan: "Pakaian katun terasa sejuk dan menyerap keringat."
          },
          {
            soal: "Pakaian katun cocok dipakai saat cuaca panas karena ....",
            pilihan: ["Warnanya cerah", "Harganya mahal", "Mudah menyerap keringat"],
            jawaban: 2,
            penjelasan: "Katun mudah menyerap keringat sehingga badan tetap nyaman."
          },
          {
            soal: "Pada saat hujan, manusia lebih banyak melakukan kegiatan di ....",
            pilihan: ["Dalam ruangan", "Lapangan", "Pantai"],
            jawaban: 0,
            penjelasan: "Saat hujan kita berkegiatan di dalam ruangan agar tidak basah."
          },
          {
            soal: "Kegiatan yang memanfaatkan cuaca panas adalah ....",
            pilihan: ["Bermain hujan-hujanan", "Menjemur gabah", "Memakai jas hujan"],
            jawaban: 1,
            penjelasan: "Petani memanfaatkan panas matahari untuk menjemur gabah."
          },
          {
            soal: "Perkiraan cuaca ditentukan berdasarkan ....",
            pilihan: ["Warna bunga", "Jumlah rumah", "Bentuk awan dan kecepatan angin"],
            jawaban: 2,
            penjelasan: "Bentuk awan dan kecepatan angin membantu memperkirakan cuaca."
          },
          {
            soal: "Jika cuaca buruk, penerbangan pesawat dan pelayaran kapal harus ....",
            pilihan: ["Ditunda sampai cuaca membaik", "Tetap berangkat lebih cepat", "Berjalan tanpa pilot"],
            jawaban: 0,
            penjelasan: "Perjalanan ditunda agar penumpang tetap aman."
          },
          {
            gambar: "img/cuaca/jaket.svg",
            soal: "Pakaian yang tepat digunakan saat udara dingin adalah ....",
            pilihan: ["Kaos tipis", "Jaket", "Baju renang"],
            jawaban: 1,
            penjelasan: "Jaket membuat tubuh tetap hangat."
          },
          {
            soal: "Cuaca hujan petir terjadi karena ....",
            pilihan: ["Matahari terlalu kecil", "Bulan muncul siang hari", "Awan tebal yang menumpuk"],
            jawaban: 2,
            penjelasan: "Awan tebal yang menumpuk dan perbedaan panas di permukaan bumi menyebabkan hujan petir."
          }
        ],

        // ---------- SET 4 : Matahari & bayang-bayang ----------
        [
          {
            gambar: "img/cuaca/bayang-pagi.svg",
            soal: "Perhatikan matahari dan bayangan tiang bendera. Kapan keadaan ini terjadi?",
            pilihan: ["Pagi hari", "Siang hari", "Sore hari"],
            jawaban: 0,
            penjelasan: "Matahari di timur dan bayangan panjang ke barat: itu pagi hari."
          },
          {
            gambar: "img/cuaca/bayang-sore.svg",
            soal: "Perhatikan matahari dan bayangan tiang bendera. Kapan keadaan ini terjadi?",
            pilihan: ["Pagi hari", "Siang hari", "Sore hari"],
            jawaban: 2,
            penjelasan: "Matahari di barat dan bayangan panjang ke timur: itu sore hari."
          },
          {
            gambar: "img/cuaca/bayang-siang.svg",
            soal: "Perhatikan matahari dan bayangan tiang bendera. Kapan keadaan ini terjadi?",
            pilihan: ["Pagi hari", "Siang hari", "Sore hari"],
            jawaban: 1,
            penjelasan: "Matahari di atas kepala dan bayangan sangat pendek: itu siang hari."
          },
          {
            soal: "Bayang-bayang yang terbentuk pada sore hari mengarah ke ....",
            pilihan: ["Timur", "Barat", "Atas"],
            jawaban: 0,
            penjelasan: "Sore hari matahari di barat, jadi bayangan jatuh ke arah timur."
          },
          {
            soal: "Bayang-bayang yang dihasilkan sebuah benda dipengaruhi oleh ....",
            pilihan: ["Warna benda", "Posisi matahari", "Suara angin"],
            jawaban: 1,
            penjelasan: "Arah dan panjang bayangan berubah mengikuti posisi matahari."
          },
          {
            soal: "Cahaya matahari pagi mengandung vitamin ....",
            pilihan: ["A", "D", "C"],
            jawaban: 1,
            penjelasan: "Matahari pagi membantu tubuh membuat vitamin D untuk tulang yang kuat."
          },
          {
            soal: "Mengapa kita tidak boleh menatap matahari secara langsung?",
            pilihan: ["Dapat merusak mata", "Membuat kita lapar", "Matahari bisa hilang"],
            jawaban: 0,
            penjelasan: "Sinar matahari sangat kuat dan bisa merusak mata."
          },
          {
            gambar: "img/cuaca/langit-cerah.svg",
            soal: "Andi dapat bermain bola di lapangan ketika cuaca ....",
            pilihan: ["Hujan petir", "Hujan", "Cerah"],
            jawaban: 2,
            penjelasan: "Saat cerah, bermain di luar aman dan menyenangkan."
          },
          {
            soal: "Benda langit yang dapat kita lihat pada malam hari adalah ....",
            pilihan: ["Matahari", "Bulan dan bintang", "Pelangi"],
            jawaban: 1,
            penjelasan: "Malam hari tampak bulan dan bintang."
          },
          {
            soal: "Ketika sinar matahari sampai di Bumi, berapa bagian yang diserap Bumi?",
            pilihan: ["Dua pertiga", "Semuanya", "Tidak ada"],
            jawaban: 0,
            penjelasan: "Dua pertiga diserap Bumi, sisanya dipantulkan ke luar angkasa."
          }
        ],

        // ---------- SET 5 : Catatan kelas, Cuaca di Sekitar ----------
        [
          {
            soal: "Cuaca bisa berubah ....",
            pilihan: ["setiap waktu", "hanya setahun sekali", "tidak pernah"],
            jawaban: 0,
            penjelasan: "Catatan kelas: cuaca bisa berubah setiap waktu."
          },
          {
            soal: "Catatan kelas menyebut cuaca ada ....",
            pilihan: ["4 macam", "1 macam", "10 macam"],
            jawaban: 0,
            penjelasan: "Empat macam itu: cerah, berawan dan mendung, hujan, dan berangin."
          },
          {
            soal: "Langit biru dan matahari bersinar terang. Itu cuaca ....",
            pilihan: ["cerah", "hujan", "berangin"],
            jawaban: 0,
            penjelasan: "Cuaca cerah: langit biru dan matahari bersinar terang."
          },
          {
            soal: "Awan yang menebal menjadi hitam menandakan ....",
            pilihan: ["hujan akan turun", "angin berhenti", "malam menjadi siang"],
            jawaban: 0,
            penjelasan: "Awan hitam yang menebal adalah tanda hujan akan turun."
          },
          {
            soal: "Angin yang sangat kencang sampai dapat merobohkan bangunan disebut angin ....",
            pilihan: ["badai", "sepoi-sepoi", "hangat"],
            jawaban: 0,
            penjelasan: "Angin badai bertiup sangat kencang dan dapat merobohkan bangunan."
          },
          {
            soal: "Saat cuaca berangin, suhu terasa ....",
            pilihan: ["lebih dingin", "sangat panas", "selalu kering"],
            jawaban: 0,
            penjelasan: "Cuaca berangin membuat suhu lebih dingin."
          }
        ]
      ],

      /* ===== 3 SET SOAL ESAI ===== */
      esaiSets: [

        // ---------- SET 1 : Kerjakan soal-soal berikut ----------
        [
          {
            soal: "Tulislah benda langit yang dapat dilihat pada pagi, siang, sore, dan malam hari.",
            contohJawaban: "Pagi, siang, dan sore: matahari (dan awan). Malam: bulan dan bintang."
          },
          {
            soal: "Mengapa posisi bayang-bayang pada waktu pagi dan sore hari berbeda?",
            contohJawaban: "Karena posisi matahari berpindah. Pagi matahari di timur sehingga bayangan ke barat. Sore matahari di barat sehingga bayangan ke timur."
          },
          {
            soal: "Tulislah hal-hal yang dapat menentukan perkiraan cuaca.",
            contohJawaban: "Bentuk awan dan kecepatan angin."
          },
          {
            gambar: "img/cuaca/lambang-abcd.svg",
            soal: "Perhatikan gambar. Tulislah arti lambang cuaca a, b, c, dan d.",
            contohJawaban: "a = cerah berawan, b = cerah, c = hujan, d = berawan."
          },
          {
            gambar: "img/cuaca/dua-langit.svg",
            soal: "Tulislah ciri-ciri cuaca pada gambar a dan b.",
            contohJawaban: "a (cerah): langit biru dan terang, awannya sedikit dan putih, matahari bersinar. b (mendung/berawan): langit gelap, banyak awan gelap, angin bertiup kencang."
          },
          {
            gambar: "img/cuaca/dua-langit.svg",
            soal: "Apa pakaian yang tepat digunakan atau disiapkan saat cuaca a dan b?",
            contohJawaban: "a: baju katun yang menyerap keringat dan topi. b: siapkan jas hujan atau payung karena akan turun hujan."
          },
          {
            soal: "Sebutkan aktivitas yang dilakukan pada pagi hari.",
            contohJawaban: "Bangun tidur, mandi, sarapan, berolahraga, dan berangkat ke sekolah."
          }
        ],

        // ---------- SET 2 : Matahari di sekitar kita ----------
        [
          {
            soal: "Matahari membuat gelap menjadi ....",
            contohJawaban: "Terang."
          },
          {
            gambar: "img/cuaca/jemur-pakaian.svg",
            soal: "Ibu menjemur pakaian pada siang hari. Ibu memanfaatkan ....",
            contohJawaban: "Panas matahari, supaya pakaian cepat kering."
          },
          {
            soal: "Cahaya matahari pagi mengandung vitamin ....",
            contohJawaban: "Vitamin D, yang baik untuk tulang."
          },
          {
            soal: "Sinar matahari dimanfaatkan petani untuk ....",
            contohJawaban: "Menjemur gabah (padi). Nelayan juga memakainya untuk mengeringkan ikan."
          },
          {
            soal: "Pada siang hari, matahari berada di ....",
            contohJawaban: "Tepat di atas kepala."
          },
          {
            soal: "Sebutkan 3 cara agar tidak terkena panas matahari!",
            contohJawaban: "Memakai topi, memakai payung, berteduh di tempat teduh, atau memakai baju lengan panjang."
          },
          {
            soal: "Mengapa kita tidak boleh menatap matahari secara langsung?",
            contohJawaban: "Karena sinar matahari sangat terang dan kuat sehingga dapat merusak mata."
          }
        ],

        // ---------- SET 3 : Teka-teki & bayangan ----------
        [
          {
            soal: "Tuliskan dua manfaat sinar matahari bagi manusia!",
            contohJawaban: "Menerangi bumi, menghangatkan tubuh, mengeringkan pakaian, dan membantu tubuh membuat vitamin D."
          },
          {
            gambar: "img/cuaca/posisi-matahari.svg",
            soal: "Ceritakan (atau gambarkan) bayangan tiang bendera saat pagi, siang, dan sore hari!",
            contohJawaban: "Pagi: bayangan panjang ke arah barat. Siang: bayangan sangat pendek, di bawah tiang. Sore: bayangan panjang ke arah timur."
          },
          {
            soal: "🧩 Teka-teki (8 huruf): Sumber energi terbesar di Bumi. M _ _ _ _ _ _ I",
            contohJawaban: "MATAHARI"
          },
          {
            soal: "🧩 Teka-teki (5 huruf): Turunnya titik-titik air ke permukaan bumi. H _ _ _ N",
            contohJawaban: "HUJAN"
          },
          {
            soal: "🧩 Teka-teki (5 huruf): Pakaian yang digunakan saat udara dingin. J _ _ _ T",
            contohJawaban: "JAKET"
          },
          {
            soal: "🧩 Teka-teki (5 huruf): Bahan pakaian yang cocok digunakan saat cuaca cerah. K _ _ _ N",
            contohJawaban: "KATUN"
          },
          {
            soal: "🧩 Teka-teki (5 huruf): Selain bentuk awan, hal yang memengaruhi perkiraan cuaca. A _ _ _ N",
            contohJawaban: "ANGIN"
          },
          {
            soal: "Mengapa pesawat dan kapal harus menunda perjalanan saat cuaca buruk?",
            contohJawaban: "Agar penumpang tetap aman. Perjalanan dilanjutkan setelah cuaca membaik."
          }
        ],

        // ---------- SET 4 : Latihan cuaca di sekitar ----------
        [
          {
            soal: "Sebutkan dua benda yang dapat digunakan untuk melindungi diri dari hujan!",
            contohJawaban: "Jas hujan dan payung."
          },
          {
            soal: "Sebutkan dua kegiatan yang dapat dilakukan saat cuaca cerah!",
            contohJawaban: "Menjemur pakaian dan bermain di luar, misalnya bermain bola."
          },
          {
            soal: "Mengapa pakaian yang dijemur lebih cepat kering saat cuaca panas?",
            contohJawaban: "Karena panas matahari mengeringkan air pada pakaian."
          },
          {
            soal: "Apa yang sebaiknya kamu lakukan jika hujan turun saat sedang bermain di luar rumah?",
            contohJawaban: "Masuk ke rumah, atau memakai jas hujan jika masih harus di luar."
          },
          {
            soal: "Sebutkan dua ciri cuaca cerah!",
            contohJawaban: "Langit berwarna biru dan matahari bersinar terang."
          }
        ],

        // ---------- SET 5 : Latihan matahari dan tanda hujan ----------
        [
          {
            soal: "Apa yang terjadi pada langit ketika matahari mulai terbenam?",
            contohJawaban: "Langit perlahan-lahan menjadi gelap."
          },
          {
            soal: "Mengapa kita perlu mengetahui keadaan cuaca sebelum kegiatan di luar rumah?",
            contohJawaban: "Supaya kita bisa memilih kegiatan yang cocok dan menyiapkan pakaian yang tepat."
          },
          {
            soal: "Apa yang terjadi pada bayangan tubuhmu saat berdiri di bawah sinar matahari pada pagi hari dan siang hari?",
            contohJawaban: "Pagi hari bayangan panjang. Siang hari bayangan paling pendek."
          },
          {
            soal: "Mengapa kita sebaiknya berteduh saat matahari bersinar sangat terik?",
            contohJawaban: "Agar tubuh tidak kepanasan. Sinar yang terlalu terik juga tidak baik untuk mata jika ditatap langsung."
          },
          {
            soal: "Sebutkan dua tanda bahwa hujan akan turun!",
            contohJawaban: "Awan menebal menjadi hitam, dan langit menjadi gelap."
          }
        ]
      ],

      /* ===== 3 SET MENCOCOKKAN ===== */
      cocokkanSets: [

        // ---------- SET 1 : Lambang cuaca ----------
        {
          instruksi: "Pasangkan lambang cuaca dengan namanya!",
          pasangan: [
            { kiri: { gambar: "img/cuaca/cerah.svg" }, kanan: "Cerah" },
            { kiri: { gambar: "img/cuaca/cerah-berawan.svg" }, kanan: "Cerah berawan" },
            { kiri: { gambar: "img/cuaca/berawan.svg" }, kanan: "Berawan" },
            { kiri: { gambar: "img/cuaca/hujan.svg" }, kanan: "Hujan" },
            { kiri: { gambar: "img/cuaca/hujan-petir.svg" }, kanan: "Hujan petir" }
          ]
        },

        // ---------- SET 2 : Cuaca & yang kita lakukan ----------
        {
          instruksi: "Pasangkan keadaan cuaca dengan pakaian atau kegiatan yang tepat!",
          pasangan: [
            { kiri: { gambar: "img/cuaca/jemur-pakaian.svg", teks: "Cerah" }, kanan: "Menjemur pakaian dan gabah" },
            { kiri: { gambar: "img/cuaca/kaos-katun.svg", teks: "Panas" }, kanan: "Memakai baju katun" },
            { kiri: { gambar: "img/cuaca/jas-hujan.svg", teks: "Hujan" }, kanan: "Memakai jas hujan" },
            { kiri: { gambar: "img/cuaca/jaket.svg", teks: "Dingin" }, kanan: "Memakai jaket" },
            { kiri: { gambar: "img/cuaca/hujan-petir.svg", teks: "Hujan petir" }, kanan: "Tetap di dalam ruangan" }
          ]
        },

        // ---------- SET 3 : Waktu & matahari ----------
        {
          instruksi: "Pasangkan gambar dengan keterangan yang benar!",
          pasangan: [
            { kiri: { gambar: "img/cuaca/bayang-pagi.svg", teks: "Pagi" }, kanan: "Matahari terbit di timur, udara sejuk" },
            { kiri: { gambar: "img/cuaca/bayang-siang.svg", teks: "Siang" }, kanan: "Matahari di atas kepala, bayangan paling pendek" },
            { kiri: { gambar: "img/cuaca/bayang-sore.svg", teks: "Sore" }, kanan: "Matahari di barat, bayangan ke timur" },
            { kiri: { emoji: "🌙", teks: "Malam" }, kanan: "Bulan dan bintang tampak" },
            { kiri: { emoji: "🏢", teks: "BMKG" }, kanan: "Memberi informasi perkiraan cuaca" }
          ]
        },

        // ---------- SET 4 : Empat macam cuaca dari catatan kelas ----------
        {
          instruksi: "Pasangkan macam cuaca dengan cirinya!",
          pasangan: [
            { kiri: { emoji: "☀️", teks: "Cerah" }, kanan: "Langit biru, matahari terang" },
            { kiri: { emoji: "☁️", teks: "Mendung" }, kanan: "Awan hitam, hujan akan turun" },
            { kiri: { emoji: "🌧️", teks: "Hujan" }, kanan: "Titik air turun, udara dingin" },
            { kiri: { emoji: "💨", teks: "Berangin" }, kanan: "Angin kencang, suhu lebih dingin" }
          ]
        }
      ]
    },

    {
      id: "ciri-makhluk-hidup",
      judul: "Ciri-ciri Makhluk Hidup",
      emoji: "🐾",
      ringkasan: [
        { emoji: "🐾", teks: "Makhluk hidup bergerak, bernapas, membutuhkan makan, tumbuh, dan berkembang biak." },
        { emoji: "🌬️", teks: "Manusia bernapas dengan udara. Ikan bernapas di dalam air." },
        { emoji: "🌱", teks: "Tumbuhan tumbuh dari kecil menjadi lebih besar. Anak juga bertambah tinggi." },
        { emoji: "🐣", teks: "Berkembang biak berarti punya keturunan, misalnya ayam punya anak ayam." },
        { emoji: "🪨", teks: "Batu tidak bernapas, tidak makan, dan tidak tumbuh. Batu bukan makhluk hidup." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Yang termasuk ciri makhluk hidup adalah ....", pilihan: ["tumbuh", "tidak pernah berubah", "tidak butuh makan"], jawaban: 0, penjelasan: "Makhluk hidup tumbuh." },
          { soal: "Ikan bernapas di ....", pilihan: ["air", "dalam batu", "tanpa apa pun"], jawaban: 0, penjelasan: "Ikan bernapas di dalam air." },
          { soal: "Batu bukan makhluk hidup karena batu ....", pilihan: ["tidak bernapas dan tidak tumbuh", "bisa berlari", "bertelur"], jawaban: 0, penjelasan: "Batu tidak melakukan ciri makhluk hidup." },
          { soal: "Ayam punya anak ayam. Itu disebut ....", pilihan: ["berkembang biak", "mengukur", "membandingkan berat"], jawaban: 0, penjelasan: "Punya keturunan berarti berkembang biak." }
        ],
        [
          { soal: "Manusia membutuhkan ....", pilihan: ["makanan", "tidak butuh apa pun", "hanya batu"], jawaban: 0, penjelasan: "Makhluk hidup butuh makan." },
          { soal: "Anak yang bertambah tinggi sedang ....", pilihan: ["tumbuh", "menjadi batu", "berhenti hidup"], jawaban: 0, penjelasan: "Bertambah besar atau tinggi adalah tumbuh." },
          { soal: "Kucing pindah tempat. Itu ciri ....", pilihan: ["bergerak", "diam selamanya", "tidak hidup"], jawaban: 0, penjelasan: "Makhluk hidup dapat bergerak." },
          { soal: "Meja tidak makan dan tidak tumbuh. Meja adalah ....", pilihan: ["benda tak hidup", "hewan", "tumbuhan"], jawaban: 0, penjelasan: "Meja tidak punya ciri makhluk hidup." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan tiga ciri makhluk hidup.", contohJawaban: "Bergerak, bernapas, butuh makan, tumbuh, atau berkembang biak." },
          { soal: "Mengapa batu bukan makhluk hidup?", contohJawaban: "Batu tidak bernapas, tidak makan, dan tidak tumbuh." },
          { soal: "Apa arti berkembang biak?", contohJawaban: "Punya keturunan, misalnya ayam punya anak ayam." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan makhluk dengan cirinya!",
        pasangan: [
          { kiri: { emoji: "🌬️", teks: "Ikan" }, kanan: "Bernapas di air" },
          { kiri: { emoji: "🌱", teks: "Tumbuhan" }, kanan: "Tumbuh lebih besar" },
          { kiri: { emoji: "🐣", teks: "Ayam" }, kanan: "Punya anak ayam" },
          { kiri: { emoji: "🪨", teks: "Batu" }, kanan: "Bukan makhluk hidup" }
        ]
      }]
    },

    {
      id: "tempat-hidup",
      judul: "Tempat Hidup Makhluk Hidup",
      emoji: "🌍",
      ringkasan: [
        { emoji: "🌍", teks: "Setiap makhluk hidup punya tempat hidup yang cocok." },
        { emoji: "🐟", teks: "Ikan hidup di air." },
        { emoji: "🐱", teks: "Kucing hidup di darat." },
        { emoji: "🐦", teks: "Burung banyak tinggal di pohon dan terbang di udara." },
        { emoji: "🪱", teks: "Cacing hidup di tanah." },
        { emoji: "🐸", teks: "Katak dapat hidup di air dan di darat." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Ikan hidup di ....", pilihan: ["air", "dalam buku", "pasir kering saja"], jawaban: 0, penjelasan: "Air adalah tempat hidup ikan." },
          { soal: "Cacing biasanya hidup di ....", pilihan: ["tanah", "awan", "laut dalam"], jawaban: 0, penjelasan: "Tanah yang lembap adalah tempat cacing." },
          { soal: "Kucing hidup di ....", pilihan: ["darat", "dasar laut", "dalam batu"], jawaban: 0, penjelasan: "Kucing berjalan dan tinggal di darat." },
          { soal: "Katak dapat hidup di ....", pilihan: ["air dan darat", "hanya di awan", "hanya di dalam buku"], jawaban: 0, penjelasan: "Katak dapat berada di dua tempat itu." }
        ],
        [
          { soal: "Burung banyak tinggal di ....", pilihan: ["pohon", "dasar sungai", "dalam tanah"], jawaban: 0, penjelasan: "Pohon menjadi tempat hinggap dan sarang banyak burung." },
          { soal: "Tempat hidup yang cocok membantu makhluk itu ....", pilihan: ["tetap hidup", "berubah menjadi batu", "tidak perlu makan"], jawaban: 0, penjelasan: "Tempat yang cocok menyediakan kebutuhan hidupnya." },
          { soal: "Ikan yang dijauhkan dari air akan ....", pilihan: ["kesulitan hidup", "semakin kuat", "berubah menjadi burung"], jawaban: 0, penjelasan: "Ikan membutuhkan air." },
          { soal: "Tanah adalah tempat hidup ....", pilihan: ["cacing", "ikan laut", "awan"], jawaban: 0, penjelasan: "Cacing hidup di tanah." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan tempat hidup ikan, kucing, dan cacing.", contohJawaban: "Ikan di air, kucing di darat, cacing di tanah." },
          { soal: "Mengapa katak disebut dapat hidup di dua tempat?", contohJawaban: "Karena katak dapat hidup di air dan di darat." },
          { soal: "Apa yang terjadi jika ikan dijauhkan dari air?", contohJawaban: "Ikan kesulitan hidup karena air adalah tempatnya." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan makhluk dengan tempatnya!",
        pasangan: [
          { kiri: { emoji: "🐟", teks: "Ikan" }, kanan: "Air" },
          { kiri: { emoji: "🐱", teks: "Kucing" }, kanan: "Darat" },
          { kiri: { emoji: "🐦", teks: "Burung" }, kanan: "Pohon" },
          { kiri: { emoji: "🐸", teks: "Katak" }, kanan: "Air dan darat" }
        ]
      }]
    },

    {
      id: "manfaat-makhluk-hidup",
      judul: "Manfaat Makhluk Hidup",
      emoji: "🌾",
      ringkasan: [
        { emoji: "🌾", teks: "Makhluk hidup berguna bagi manusia jika dipelihara dengan baik." },
        { emoji: "🐔", teks: "Ayam memberi telur." },
        { emoji: "🐄", teks: "Sapi dapat memberi susu." },
        { emoji: "🐝", teks: "Lebah membuat madu." },
        { emoji: "🍚", teks: "Padi menjadi beras, lalu nasi." },
        { emoji: "🌳", teks: "Pohon memberi buah, tempat teduh, dan udara yang lebih segar." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Telur didapat dari ....", pilihan: ["ayam", "batu", "meja"], jawaban: 0, penjelasan: "Ayam menghasilkan telur." },
          { soal: "Susu dapat didapat dari ....", pilihan: ["sapi", "ikan", "batu"], jawaban: 0, penjelasan: "Sapi dapat diperah susunya." },
          { soal: "Madu dibuat oleh ....", pilihan: ["lebah", "kucing", "cacing"], jawaban: 0, penjelasan: "Lebah membuat madu." },
          { soal: "Padi diolah menjadi ....", pilihan: ["beras", "susu", "madu"], jawaban: 0, penjelasan: "Beras berasal dari padi, lalu dapat ditanak menjadi nasi." }
        ],
        [
          { soal: "Pohon membuat udara terasa ....", pilihan: ["lebih segar", "lebih berdebu selalu", "hilang"], jawaban: 0, penjelasan: "Pohon membantu udara di sekitar terasa segar." },
          { soal: "Buah dapat kita makan. Buah berasal dari ....", pilihan: ["tumbuhan", "batu", "bayangan"], jawaban: 0, penjelasan: "Tumbuhan menghasilkan buah." },
          { soal: "Kita merawat hewan dan tumbuhan karena mereka ....", pilihan: ["berguna dan juga makhluk hidup", "tidak perlu tempat", "adalah benda mati"], jawaban: 0, penjelasan: "Mereka bermanfaat dan tetap perlu dipelihara." },
          { soal: "Tempat teduh di siang hari dapat diberikan oleh ....", pilihan: ["pohon", "telur", "madu"], jawaban: 0, penjelasan: "Ranting dan daun pohon menaungi kita." }
        ]
      ],
      esaiSets: [[
          { soal: "Sebutkan dua manfaat hewan bagi manusia.", contohJawaban: "Ayam memberi telur, sapi memberi susu, atau lebah membuat madu." },
          { soal: "Apa manfaat pohon?", contohJawaban: "Memberi buah, tempat teduh, dan udara yang lebih segar." },
          { soal: "Dari mana nasi berasal?", contohJawaban: "Dari padi yang menjadi beras, lalu ditanak." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan makhluk dengan manfaatnya!",
        pasangan: [
          { kiri: { emoji: "🐔", teks: "Ayam" }, kanan: "Telur" },
          { kiri: { emoji: "🐄", teks: "Sapi" }, kanan: "Susu" },
          { kiri: { emoji: "🐝", teks: "Lebah" }, kanan: "Madu" },
          { kiri: { emoji: "🌳", teks: "Pohon" }, kanan: "Buah dan udara segar" }
        ]
      }]
    }
  ]
};

/* ============================================================
 *  DEFINISI MATA PELAJARAN MATEMATIKA
 *  (dipisah agar mudah dibaca; dipakai di array SUBJECTS)
 *  Modul: Bangun Datar dan Bangun Ruang.
 * ============================================================ */
const MATEMATIKA_SUBJECT = {
  id: "matematika",
  nama: "Matematika",
  ikon: "➗",
  warna: "#ff8500",
  deskripsi: "Belajar bilangan, hitungan, pecahan, ukuran, pola, data, bangun, dan posisi.",
  topik: [

    /* ========================================================
     *  MODUL 1 — BANGUN DATAR DAN BANGUN RUANG
     * ====================================================== */
    {
      id: "bangun-datar-ruang",
      judul: "Bangun Datar dan Bangun Ruang",
      emoji: "🔷",

      ringkasan: [
        { emoji: "📄", teks: "Bangun datar adalah bangun yang rata dan tipis, seperti gambar di kertas. Contoh: segitiga, persegi, persegi panjang, dan lingkaran." },
        { gambar: "img/bangun/segitiga.svg", teks: "Segitiga memiliki 3 sisi dan 3 sudut. Contoh benda: rambu lalu lintas, penggaris segitiga, atap rumah." },
        { gambar: "img/bangun/persegi.svg", teks: "Persegi memiliki 4 sisi yang SAMA panjang dan 4 sudut. Contoh benda: ubin lantai, sapu tangan, papan catur." },
        { gambar: "img/bangun/persegi-panjang.svg", teks: "Persegi panjang memiliki 4 sisi dan 4 sudut. Dua pasang sisi yang berhadapan sama panjang. Contoh: buku tulis, pintu, papan tulis." },
        { gambar: "img/bangun/lingkaran.svg", teks: "Lingkaran berbentuk bulat dan TIDAK memiliki sudut. Contoh benda: uang koin, jam dinding, piring." },
        { emoji: "📦", teks: "Bangun ruang adalah bangun yang memiliki ruang (isi), bisa dipegang dari segala arah. Contoh: kubus, balok, tabung, kerucut, dan bola." },
        { gambar: "img/bangun/kubus.svg", teks: "Kubus memiliki 6 sisi berbentuk persegi yang sama besar, 12 rusuk, dan 8 titik sudut. Contoh: dadu, rubik." },
        { gambar: "img/bangun/balok.svg", teks: "Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut. Sisinya berbentuk persegi panjang. Contoh: lemari, kotak pensil, batu bata." },
        { gambar: "img/bangun/tabung.svg", teks: "Tabung memiliki 3 sisi: 2 sisi lingkaran (atas dan bawah) dan 1 sisi lengkung. Tidak punya titik sudut. Contoh: kaleng minuman, gelas, drum." },
        { gambar: "img/bangun/kerucut.svg", teks: "Kerucut memiliki 2 sisi (alas lingkaran dan sisi lengkung) dan 1 titik puncak. Contoh: topi ulang tahun, cone es krim, tumpeng." },
        { gambar: "img/bangun/bola.svg", teks: "Bola hanya memiliki 1 sisi lengkung dan tidak memiliki sudut. Contoh: bola sepak, kelereng, jeruk." },
        { emoji: "🔍", teks: "Sisi adalah bagian permukaan/garis tepi bangun. Sudut adalah tempat bertemunya dua sisi. Rusuk adalah garis pertemuan dua sisi pada bangun ruang." },
        { emoji: "🏠", teks: "Benda di sekitar kita punya banyak bentuk. Contoh: lemari berbentuk balok (6 sisi, 8 titik sudut)." }
      ],

      /* ===== 4 SET SOAL PILIHAN GANDA ===== */
      pilihanGandaSets: [

        // ---------- SET 1 : Latihan soal (bangun datar) ----------
        [
          {
            soal: "Bangun datar yang memiliki tiga sisi adalah ....",
            pilihan: ["Persegi", "Segitiga", "Lingkaran"],
            jawaban: 1,
            penjelasan: "Segitiga memiliki 3 sisi dan 3 sudut."
          },
          {
            soal: "Bangun datar yang memiliki empat sisi sama panjang adalah ....",
            pilihan: ["Persegi", "Segitiga", "Lingkaran"],
            jawaban: 0,
            penjelasan: "Keempat sisi persegi sama panjang."
          },
          {
            gambar: "img/bangun/jam-dinding.svg",
            soal: "Jam dinding berbentuk lingkaran. Lingkaran memiliki ....",
            pilihan: ["Tiga sudut", "Empat sudut", "Tidak memiliki sudut"],
            jawaban: 2,
            penjelasan: "Lingkaran bulat sehingga tidak memiliki sudut."
          },
          {
            soal: "Bangun datar yang memiliki dua pasang sisi berhadapan sama panjang adalah ....",
            pilihan: ["Persegi panjang", "Segitiga", "Lingkaran"],
            jawaban: 0,
            penjelasan: "Pada persegi panjang, sisi atas = bawah dan sisi kiri = kanan."
          },
          {
            soal: "Benda yang berbentuk persegi panjang adalah ....",
            pilihan: ["Uang koin", "Buku tulis", "Bola"],
            jawaban: 1,
            penjelasan: "Buku tulis berbentuk persegi panjang. Uang koin berbentuk lingkaran."
          },
          {
            gambar: "img/bangun/segitiga.svg",
            soal: "Bangun pada gambar bernama ....",
            pilihan: ["Persegi", "Lingkaran", "Segitiga"],
            jawaban: 2,
            penjelasan: "Bangun dengan 3 sisi dan 3 sudut adalah segitiga."
          },
          {
            gambar: "img/bangun/persegi.svg",
            soal: "Berapa banyak sudut pada bangun di gambar?",
            pilihan: ["3", "4", "0"],
            jawaban: 1,
            penjelasan: "Persegi memiliki 4 sudut (lihat titik-titik di ujungnya)."
          },
          {
            gambar: "img/bangun/uang-koin.svg",
            soal: "Uang koin berbentuk ....",
            pilihan: ["Lingkaran", "Persegi", "Segitiga"],
            jawaban: 0,
            penjelasan: "Uang koin bulat, berbentuk lingkaran."
          },
          {
            gambar: "img/bangun/rambu.svg",
            soal: "Rambu lalu lintas pada gambar berbentuk ....",
            pilihan: ["Persegi panjang", "Segitiga", "Lingkaran"],
            jawaban: 1,
            penjelasan: "Rambu itu punya 3 sisi, jadi berbentuk segitiga."
          },
          {
            soal: "Bangun datar yang TIDAK memiliki sudut adalah ....",
            pilihan: ["Persegi", "Persegi panjang", "Lingkaran"],
            jawaban: 2,
            penjelasan: "Lingkaran tidak memiliki sudut."
          }
        ],

        // ---------- SET 2 : Latihan soal (bangun ruang) ----------
        [
          {
            gambar: "img/bangun/dadu.svg",
            soal: "Dadu merupakan benda yang berbentuk ....",
            pilihan: ["Kubus", "Tabung", "Kerucut"],
            jawaban: 0,
            penjelasan: "Dadu berbentuk kubus: 6 sisi persegi yang sama besar."
          },
          {
            soal: "Benda yang berbentuk bola adalah ....",
            pilihan: ["Kaleng susu", "Topi ulang tahun", "Bola sepak"],
            jawaban: 2,
            penjelasan: "Bola sepak berbentuk bola. Kaleng susu = tabung, topi ulang tahun = kerucut."
          },
          {
            gambar: "img/bangun/kaleng.svg",
            soal: "Kaleng minuman memiliki bentuk ....",
            pilihan: ["Tabung", "Kubus", "Balok"],
            jawaban: 0,
            penjelasan: "Kaleng memiliki alas dan tutup lingkaran serta sisi lengkung: tabung."
          },
          {
            soal: "Bangun ruang yang memiliki enam sisi berbentuk persegi adalah ....",
            pilihan: ["Kerucut", "Kubus", "Bola"],
            jawaban: 1,
            penjelasan: "Kubus memiliki 6 sisi persegi yang sama besar."
          },
          {
            gambar: "img/bangun/lemari.svg",
            soal: "Lemari pakaian umumnya berbentuk ....",
            pilihan: ["Balok", "Bola", "Kerucut"],
            jawaban: 0,
            penjelasan: "Lemari berbentuk balok."
          },
          {
            gambar: "img/bangun/topi-ulang-tahun.svg",
            soal: "Topi ulang tahun berbentuk ....",
            pilihan: ["Tabung", "Kerucut", "Kubus"],
            jawaban: 1,
            penjelasan: "Topi ulang tahun memiliki alas lingkaran dan satu titik puncak: kerucut."
          },
          {
            gambar: "img/bangun/tabung.svg",
            soal: "Bangun ruang pada gambar bernama ....",
            pilihan: ["Kerucut", "Bola", "Tabung"],
            jawaban: 2,
            penjelasan: "Ada lingkaran di atas dan bawah, serta sisi lengkung: tabung."
          },
          {
            gambar: "img/bangun/kerucut.svg",
            soal: "Bangun ruang pada gambar bernama ....",
            pilihan: ["Kerucut", "Segitiga", "Balok"],
            jawaban: 0,
            penjelasan: "Alasnya lingkaran dan ujungnya runcing: kerucut. Segitiga itu bangun datar."
          },
          {
            soal: "Bangun ruang yang hanya memiliki satu sisi lengkung adalah ....",
            pilihan: ["Kubus", "Bola", "Balok"],
            jawaban: 1,
            penjelasan: "Bola hanya memiliki 1 sisi lengkung."
          },
          {
            soal: "Batu bata dan kotak pensil berbentuk ....",
            pilihan: ["Bola", "Tabung", "Balok"],
            jawaban: 2,
            penjelasan: "Batu bata dan kotak pensil berbentuk balok."
          }
        ],

        // ---------- SET 3 : Sisi & sudut ----------
        [
          {
            soal: "Berapa banyak sisi pada segitiga?",
            pilihan: ["2", "3", "4"],
            jawaban: 1,
            penjelasan: "Segitiga = tiga sisi."
          },
          {
            gambar: "img/bangun/persegi-panjang.svg",
            soal: "Bangun pada gambar memiliki ... sisi.",
            pilihan: ["4", "3", "6"],
            jawaban: 0,
            penjelasan: "Persegi panjang memiliki 4 sisi."
          },
          {
            gambar: "img/bangun/balok.svg",
            soal: "Balok memiliki ... sisi.",
            pilihan: ["4", "8", "6"],
            jawaban: 2,
            penjelasan: "Balok memiliki 6 sisi: depan, belakang, atas, bawah, kiri, dan kanan."
          },
          {
            soal: "Lemari berbentuk balok. Banyak titik sudut lemari adalah ....",
            pilihan: ["6", "8", "12"],
            jawaban: 1,
            penjelasan: "Balok memiliki 8 titik sudut."
          },
          {
            gambar: "img/bangun/kubus.svg",
            soal: "Kubus memiliki ... titik sudut.",
            pilihan: ["8", "6", "4"],
            jawaban: 0,
            penjelasan: "Kubus memiliki 8 titik sudut, 6 sisi, dan 12 rusuk."
          },
          {
            soal: "Banyak rusuk pada kubus adalah ....",
            pilihan: ["6", "8", "12"],
            jawaban: 2,
            penjelasan: "Kubus memiliki 12 rusuk."
          },
          {
            soal: "Bangun ruang yang memiliki satu titik puncak adalah ....",
            pilihan: ["Kerucut", "Tabung", "Bola"],
            jawaban: 0,
            penjelasan: "Kerucut memiliki 1 titik puncak di atasnya."
          },
          {
            soal: "Tabung memiliki ... sisi.",
            pilihan: ["1", "3", "6"],
            jawaban: 1,
            penjelasan: "Tabung: sisi atas (lingkaran), sisi bawah (lingkaran), dan sisi lengkung = 3 sisi."
          },
          {
            soal: "Bangun ruang yang TIDAK memiliki titik sudut adalah ....",
            pilihan: ["Kubus", "Balok", "Bola"],
            jawaban: 2,
            penjelasan: "Bola bulat dan tidak memiliki titik sudut."
          },
          {
            soal: "Perbedaan persegi dan persegi panjang adalah ....",
            pilihan: [
              "Persegi punya 3 sisi",
              "Semua sisi persegi sama panjang, persegi panjang tidak",
              "Persegi panjang tidak punya sudut"
            ],
            jawaban: 1,
            penjelasan: "Keduanya punya 4 sisi dan 4 sudut, tetapi hanya persegi yang keempat sisinya sama panjang."
          }
        ],

        // ---------- SET 4 : Datar atau ruang? ----------
        [
          {
            soal: "Manakah yang termasuk bangun DATAR?",
            pilihan: ["Kubus", "Segitiga", "Tabung"],
            jawaban: 1,
            penjelasan: "Segitiga adalah bangun datar. Kubus dan tabung adalah bangun ruang."
          },
          {
            soal: "Manakah yang termasuk bangun RUANG?",
            pilihan: ["Lingkaran", "Persegi", "Balok"],
            jawaban: 2,
            penjelasan: "Balok adalah bangun ruang karena memiliki isi."
          },
          {
            gambar: "img/bangun/bola-sepak.svg",
            soal: "Benda pada gambar berbentuk ....",
            pilihan: ["Bola", "Lingkaran", "Tabung"],
            jawaban: 0,
            penjelasan: "Bola sepak berbentuk bola (bangun ruang). Lingkaran adalah bangun datar."
          },
          {
            gambar: "img/bangun/buku-tulis.svg",
            soal: "Sampul buku tulis berbentuk ....",
            pilihan: ["Segitiga", "Persegi panjang", "Lingkaran"],
            jawaban: 1,
            penjelasan: "Sampul buku memiliki 4 sisi dengan sisi berhadapan sama panjang."
          },
          {
            soal: "Sisi-sisi pada kubus berbentuk ....",
            pilihan: ["Persegi", "Lingkaran", "Segitiga"],
            jawaban: 0,
            penjelasan: "Setiap sisi kubus berbentuk persegi."
          },
          {
            soal: "Alas tabung dan alas kerucut berbentuk ....",
            pilihan: ["Persegi", "Segitiga", "Lingkaran"],
            jawaban: 2,
            penjelasan: "Alas tabung dan kerucut berbentuk lingkaran."
          },
          {
            soal: "Benda berikut yang berbentuk kerucut adalah ....",
            pilihan: ["🍦 Cone es krim", "🎲 Dadu", "🥫 Kaleng"],
            jawaban: 0,
            penjelasan: "Cone es krim berbentuk kerucut."
          },
          {
            soal: "Benda berikut yang berbentuk lingkaran adalah ....",
            pilihan: ["Pintu", "Piring", "Lemari"],
            jawaban: 1,
            penjelasan: "Piring berbentuk lingkaran."
          },
          {
            soal: "Kelereng dan jeruk berbentuk ....",
            pilihan: ["Kubus", "Kerucut", "Bola"],
            jawaban: 2,
            penjelasan: "Kelereng dan jeruk bulat seperti bola."
          },
          {
            soal: "Ubin lantai yang keempat sisinya sama panjang berbentuk ....",
            pilihan: ["Persegi", "Segitiga", "Lingkaran"],
            jawaban: 0,
            penjelasan: "Empat sisi sama panjang = persegi."
          }
        ]
      ],

      /* ===== 3 SET SOAL ESAI ===== */
      esaiSets: [

        // ---------- SET 1 : Latihan soal ----------
        [
          {
            soal: "Sebutkan tiga contoh benda di sekitarmu yang berbentuk bangun ruang balok (persegi panjang)!",
            contohJawaban: "Lemari, kotak pensil, dan batu bata. (Bisa juga: kardus, kotak susu, buku tebal.)"
          },
          {
            soal: "Tuliskan dua perbedaan antara persegi dan segitiga!",
            contohJawaban: "1) Persegi memiliki 4 sisi, segitiga memiliki 3 sisi. 2) Persegi memiliki 4 sudut, segitiga memiliki 3 sudut."
          },
          {
            soal: "Apa perbedaan bangun datar dan bangun ruang?",
            contohJawaban: "Bangun datar rata dan tipis seperti gambar di kertas (contoh: persegi). Bangun ruang memiliki isi dan bisa dipegang (contoh: kubus)."
          },
          {
            soal: "Sebutkan dua benda yang berbentuk tabung!",
            contohJawaban: "Kaleng minuman dan gelas. (Bisa juga: drum, pipa.)"
          },
          {
            soal: "Sebutkan dua benda yang berbentuk lingkaran!",
            contohJawaban: "Uang koin dan jam dinding. (Bisa juga: piring, tutup botol.)"
          },
          {
            soal: "Mengapa lingkaran tidak memiliki sudut?",
            contohJawaban: "Karena garis tepinya melengkung terus tanpa ujung, jadi tidak ada dua sisi yang bertemu."
          }
        ],

        // ---------- SET 2 : Ayo mencari benda (tabel) ----------
        [
          {
            gambar: "img/bangun/lemari.svg",
            soal: "Contoh: lemari. Tulislah bentuk benda, banyak sisi, dan banyak titik sudutnya.",
            contohJawaban: "Bentuk: balok. Banyak sisi: 6. Banyak titik sudut: 8."
          },
          {
            gambar: "img/bangun/dadu.svg",
            soal: "Dadu. Tulislah bentuk benda, banyak sisi, dan banyak titik sudutnya.",
            contohJawaban: "Bentuk: kubus. Banyak sisi: 6. Banyak titik sudut: 8."
          },
          {
            gambar: "img/bangun/kaleng.svg",
            soal: "Kaleng susu. Tulislah bentuk benda, banyak sisi, dan banyak titik sudutnya.",
            contohJawaban: "Bentuk: tabung. Banyak sisi: 3. Banyak titik sudut: 0 (tidak ada)."
          },
          {
            gambar: "img/bangun/topi-ulang-tahun.svg",
            soal: "Topi ulang tahun. Tulislah bentuk benda, banyak sisi, dan titik puncaknya.",
            contohJawaban: "Bentuk: kerucut. Banyak sisi: 2. Memiliki 1 titik puncak."
          },
          {
            gambar: "img/bangun/bola-sepak.svg",
            soal: "Bola sepak. Tulislah bentuk benda, banyak sisi, dan banyak titik sudutnya.",
            contohJawaban: "Bentuk: bola. Banyak sisi: 1 (sisi lengkung). Banyak titik sudut: 0."
          },
          {
            soal: "🔎 Ayo mencari! Carilah 3 benda di rumahmu, lalu tulis nama benda dan bentuknya.",
            contohJawaban: "Contoh: televisi = balok, gelas = tabung, jeruk = bola. (Jawaban bisa berbeda-beda.)"
          }
        ],

        // ---------- SET 3 : Hitung sisi & sudut ----------
        [
          {
            gambar: "img/bangun/segitiga.svg",
            soal: "Berapa banyak sisi dan sudut segitiga?",
            contohJawaban: "3 sisi dan 3 sudut."
          },
          {
            gambar: "img/bangun/persegi-panjang.svg",
            soal: "Sebutkan ciri-ciri persegi panjang!",
            contohJawaban: "Memiliki 4 sisi dan 4 sudut. Dua pasang sisi yang berhadapan sama panjang."
          },
          {
            gambar: "img/bangun/kubus.svg",
            soal: "Sebutkan banyak sisi, rusuk, dan titik sudut kubus!",
            contohJawaban: "6 sisi, 12 rusuk, dan 8 titik sudut."
          },
          {
            soal: "Apa persamaan kubus dan balok?",
            contohJawaban: "Sama-sama memiliki 6 sisi, 12 rusuk, dan 8 titik sudut."
          },
          {
            soal: "Apa perbedaan kubus dan balok?",
            contohJawaban: "Semua sisi kubus berbentuk persegi yang sama besar. Sisi balok ada yang berbentuk persegi panjang."
          },
          {
            soal: "Ada 2 buah segitiga. Berapa jumlah semua sisinya?",
            contohJawaban: "3 + 3 = 6 sisi."
          },
          {
            soal: "Ada 3 buah persegi. Berapa jumlah semua sudutnya?",
            contohJawaban: "4 + 4 + 4 = 12 sudut."
          }
        ]
      ],

      /* ===== 3 SET MENCOCOKKAN ===== */
      cocokkanSets: [

        // ---------- SET 1 : Nama bangun ----------
        {
          instruksi: "Pasangkan gambar bangun dengan namanya!",
          pasangan: [
            { kiri: { gambar: "img/bangun/segitiga.svg" }, kanan: "Segitiga" },
            { kiri: { gambar: "img/bangun/persegi.svg" }, kanan: "Persegi" },
            { kiri: { gambar: "img/bangun/persegi-panjang.svg" }, kanan: "Persegi panjang" },
            { kiri: { gambar: "img/bangun/lingkaran.svg" }, kanan: "Lingkaran" },
            { kiri: { gambar: "img/bangun/kubus.svg" }, kanan: "Kubus" },
            { kiri: { gambar: "img/bangun/tabung.svg" }, kanan: "Tabung" }
          ]
        },

        // ---------- SET 2 : Benda & bentuknya ----------
        {
          instruksi: "Pasangkan benda dengan bentuk bangun ruangnya!",
          pasangan: [
            { kiri: { gambar: "img/bangun/dadu.svg", teks: "Dadu" }, kanan: "Kubus" },
            { kiri: { gambar: "img/bangun/lemari.svg", teks: "Lemari" }, kanan: "Balok" },
            { kiri: { gambar: "img/bangun/kaleng.svg", teks: "Kaleng" }, kanan: "Tabung" },
            { kiri: { gambar: "img/bangun/topi-ulang-tahun.svg", teks: "Topi ulang tahun" }, kanan: "Kerucut" },
            { kiri: { gambar: "img/bangun/bola-sepak.svg", teks: "Bola sepak" }, kanan: "Bola" }
          ]
        },

        // ---------- SET 3 : Ciri-ciri ----------
        {
          instruksi: "Pasangkan bangun dengan ciri-cirinya!",
          pasangan: [
            { kiri: { gambar: "img/bangun/segitiga.svg", teks: "Segitiga" }, kanan: "3 sisi dan 3 sudut" },
            { kiri: { gambar: "img/bangun/persegi.svg", teks: "Persegi" }, kanan: "4 sisi sama panjang" },
            { kiri: { gambar: "img/bangun/lingkaran.svg", teks: "Lingkaran" }, kanan: "Tidak memiliki sudut" },
            { kiri: { gambar: "img/bangun/balok.svg", teks: "Balok" }, kanan: "6 sisi dan 8 titik sudut" },
            { kiri: { gambar: "img/bangun/kerucut.svg", teks: "Kerucut" }, kanan: "Memiliki 1 titik puncak" }
          ]
        }
      ]
    },

    /* ========================================================
     *  TOPIK — POSISI DAN ARAH
     *  Gambar jalan: Rumah Albab, Bimbel Brilian, Rumah Ais.
     *  Tidak ada berkas gambar, jadi letak benda ditulis di teks.
     * ====================================================== */
    {
      id: "posisi-dan-arah",
      judul: "Posisi dan Arah",
      emoji: "🧭",

      ringkasan: [
        { emoji: "👈", teks: "Sebelah kiri dan sebelah kanan adalah dua sisi yang berlawanan." },
        { emoji: "🚪", teks: "Depan adalah sisi yang menghadap kita. Belakang adalah sisi sebaliknya." },
        { emoji: "⬆️", teks: "Atas berarti lebih tinggi. Bawah berarti lebih rendah." },
        { emoji: "↔️", teks: "Di antara berarti di tengah dua benda." },
        { emoji: "🏠", teks: "Di gambar jalan ada tiga rumah. Rumah Albab berwarna merah dan berada di kiri." },
        { emoji: "📗", teks: "Bimbel Brilian berwarna hijau dan berada di tengah." },
        { emoji: "📘", teks: "Rumah Ais berwarna biru dan berada di kanan." },
        { emoji: "🌳", teks: "Dua pohon berdiri di belakang Rumah Albab." },
        { emoji: "🌸", teks: "Banyak pot bunga berada di depan Bimbel Brilian." },
        { emoji: "🗑️", teks: "Tong sampah berada di bawah pohon, di antara Bimbel Brilian dan Rumah Ais." },
        { emoji: "🐦", teks: "Tiga burung terbang di atas Rumah Ais." },
        { emoji: "🚌", teks: "Di jalan, bus sekolah berada di sebelah kiri mobil merah." },
        { emoji: "🚗", teks: "Mobil merah berada di antara bus dan truk." },
        { emoji: "🚚", teks: "Truk berada di belakang mobil merah." },
        { emoji: "🐓", teks: "Dua ekor ayam berada di depan Rumah Ais." }
      ],

      pilihanGandaSets: [
        [
          {
            soal: "Rumah merah Albab ada di kiri rumah hijau. Rumah Albab terletak di sebelah .... Bimbel Brilian.",
            pilihan: ["kiri", "kanan", "atas"],
            jawaban: 0,
            penjelasan: "Rumah Albab ada di sebelah kiri Bimbel Brilian."
          },
          {
            soal: "Rumah biru Ais ada di kanan rumah hijau. Rumah Ais terletak di sebelah .... Bimbel Brilian.",
            pilihan: ["kanan", "kiri", "bawah"],
            jawaban: 0,
            penjelasan: "Rumah Ais ada di sebelah kanan Bimbel Brilian."
          },
          {
            soal: "Pot bunga tersusun di muka rumah hijau. Pot bunga berada di .... Bimbel Brilian.",
            pilihan: ["depan", "belakang", "atas"],
            jawaban: 0,
            penjelasan: "Pot bunga berada di depan Bimbel Brilian."
          },
          {
            soal: "Dua pohon berdiri di sisi belakang rumah merah. Pohon itu berada di .... Rumah Albab.",
            pilihan: ["belakang", "depan", "dalam"],
            jawaban: 0,
            penjelasan: "Dua pohon berada di belakang Rumah Albab."
          },
          {
            soal: "Tiga burung terbang di langit, di sisi rumah biru. Burung itu berada di .... Rumah Ais.",
            pilihan: ["atas", "bawah", "dalam"],
            jawaban: 0,
            penjelasan: "Tiga burung terbang di atas Rumah Ais."
          }
        ],
        [
          {
            soal: "Bus ada di kiri mobil merah. Bus berada di sebelah .... mobil merah.",
            pilihan: ["kiri", "kanan", "atas"],
            jawaban: 0,
            penjelasan: "Bus berada di sebelah kiri mobil merah."
          },
          {
            soal: "Tong sampah ada di bawah pohon, di tengah rumah hijau dan rumah biru. Tong sampah terletak di .... pohon.",
            pilihan: ["bawah", "atas", "dalam"],
            jawaban: 0,
            penjelasan: "Tong sampah terletak di bawah pohon."
          },
          {
            soal: "Dua ekor ayam berdiri di muka rumah biru. Ayam berada di .... Rumah Ais.",
            pilihan: ["depan", "belakang", "atas"],
            jawaban: 0,
            penjelasan: "Dua ekor ayam berada di depan Rumah Ais."
          },
          {
            soal: "Truk ada di belakang mobil merah. Di belakang mobil merah terdapat ....",
            pilihan: ["truk", "bus", "burung"],
            jawaban: 0,
            penjelasan: "Truk berada di belakang mobil merah. Bus ada di sebelah kirinya."
          },
          {
            soal: "Di sebelah kiri Bimbel Brilian terdapat satu ....",
            pilihan: ["Rumah Albab", "Rumah Ais", "truk"],
            jawaban: 0,
            penjelasan: "Rumah Albab berada di sebelah kiri Bimbel Brilian."
          }
        ],
        [
          {
            soal: "Mobil merah berada di antara ....",
            pilihan: ["bus dan truk", "dua rumah biru", "burung dan ayam"],
            jawaban: 0,
            penjelasan: "Urutannya: bus, mobil merah, lalu truk. Mobil merah di antara bus dan truk."
          },
          {
            soal: "Tong sampah berada di antara ....",
            pilihan: ["Bimbel Brilian dan Rumah Ais", "bus dan pagar", "dua burung"],
            jawaban: 0,
            penjelasan: "Tong sampah berada di antara Bimbel Brilian dan Rumah Ais."
          },
          {
            soal: "Bimbel Brilian berada di .... Rumah Albab dan Rumah Ais.",
            pilihan: ["antara", "atas", "bawah"],
            jawaban: 0,
            penjelasan: "Bimbel Brilian ada di tengah, di antara dua rumah itu."
          },
          {
            soal: "Kata yang berlawanan dengan kiri adalah ....",
            pilihan: ["kanan", "atas", "depan"],
            jawaban: 0,
            penjelasan: "Kiri berlawanan dengan kanan."
          },
          {
            soal: "Kata yang berlawanan dengan depan adalah ....",
            pilihan: ["belakang", "atas", "antara"],
            jawaban: 0,
            penjelasan: "Depan berlawanan dengan belakang."
          }
        ]
      ],

      esaiSets: [
        [
          {
            soal: "Rumah Albab di kiri, Bimbel Brilian di tengah, Rumah Ais di kanan. Di sebelah mana Rumah Ais?",
            contohJawaban: "Di sebelah kanan Bimbel Brilian."
          },
          {
            soal: "Apa yang ada di depan Bimbel Brilian?",
            contohJawaban: "Banyak pot bunga."
          },
          {
            soal: "Apa yang terbang di atas Rumah Ais?",
            contohJawaban: "Tiga burung."
          },
          {
            soal: "Mobil merah berada di antara benda apa?",
            contohJawaban: "Di antara bus dan truk."
          }
        ],
        [
          {
            soal: "Di mana tong sampah?",
            contohJawaban: "Di bawah pohon, di antara Bimbel Brilian dan Rumah Ais."
          },
          {
            soal: "Di mana dua ekor ayam?",
            contohJawaban: "Di depan Rumah Ais."
          },
          {
            soal: "Apa yang ada di belakang Rumah Albab?",
            contohJawaban: "Dua pohon."
          },
          {
            soal: "Apa yang ada di sebelah kiri Bimbel Brilian?",
            contohJawaban: "Rumah Albab."
          }
        ]
      ],

      cocokkanSets: [
        {
          instruksi: "Pasangkan benda dengan posisinya!",
          pasangan: [
            { kiri: { emoji: "🏠", teks: "Rumah Albab" }, kanan: "Sebelah kiri Bimbel Brilian" },
            { kiri: { emoji: "📘", teks: "Rumah Ais" }, kanan: "Sebelah kanan Bimbel Brilian" },
            { kiri: { emoji: "🌸", teks: "Pot bunga" }, kanan: "Di depan Bimbel Brilian" },
            { kiri: { emoji: "🐦", teks: "Tiga burung" }, kanan: "Di atas Rumah Ais" },
            { kiri: { emoji: "🌳", teks: "Dua pohon" }, kanan: "Di belakang Rumah Albab" }
          ]
        },
        {
          instruksi: "Pasangkan benda di jalan dengan letaknya!",
          pasangan: [
            { kiri: { emoji: "🚌", teks: "Bus" }, kanan: "Sebelah kiri mobil merah" },
            { kiri: { emoji: "🚚", teks: "Truk" }, kanan: "Di belakang mobil merah" },
            { kiri: { emoji: "🐓", teks: "Dua ayam" }, kanan: "Di depan Rumah Ais" },
            { kiri: { emoji: "🗑️", teks: "Tong sampah" }, kanan: "Di bawah pohon" }
          ]
        }
      ]
    },

    {
      id: "bilangan-sampai-100",
      judul: "Bilangan Cacah sampai 100",
      emoji: "🔢",
      ringkasan: [
        { emoji: "🔟", teks: "Kita belajar bilangan cacah dari 0 sampai 100." },
        { emoji: "🔟", teks: "Puluhan adalah kelompok sepuluh. 30 berarti 3 puluhan." },
        { emoji: "1️⃣", teks: "Satuan adalah bilangan yang tersisa setelah puluhan. 34 = 3 puluhan + 4 satuan." },
        { emoji: "↔️", teks: "Bandingkan puluhan dulu. 58 lebih besar dari 49 karena 5 puluhan lebih banyak dari 4." },
        { emoji: "🔢", teks: "Mengurutkan berarti menyusun dari yang kecil ke yang besar, atau sebaliknya." },
        { emoji: "💯", teks: "100 dibaca seratus. Itulah bilangan terakhir pada hitungan sampai 100." }
      ],
      pilihanGandaSets: [
        [
          { soal: "3 puluhan + 4 satuan = ....", pilihan: ["34", "43", "7"], jawaban: 0, penjelasan: "3 puluhan = 30, ditambah 4 satuan = 34." },
          { soal: "Bilangan yang lebih besar adalah ....", pilihan: ["46", "64", "keduanya sama"], jawaban: 1, penjelasan: "64 punya 6 puluhan. 46 hanya punya 4 puluhan." },
          { soal: "Bilangan setelah 29 adalah ....", pilihan: ["28", "30", "39"], jawaban: 1, penjelasan: "Setelah 29, puluhannya bertambah: 30." },
          { soal: "5 puluhan + 0 satuan = ....", pilihan: ["5", "50", "15"], jawaban: 1, penjelasan: "5 puluhan = 50. Satuan nol tidak menambah." }
        ],
        [
          { soal: "20 terdiri dari .... puluhan.", pilihan: ["2", "20", "0"], jawaban: 0, penjelasan: "20 = 2 puluhan." },
          { soal: "Urutan yang benar adalah ....", pilihan: ["18, 19, 20", "20, 18, 19", "19, 18, 20"], jawaban: 0, penjelasan: "18, lalu 19, lalu 20." },
          { soal: "Mana yang lebih kecil?", pilihan: ["72", "27", "keduanya sama"], jawaban: 1, penjelasan: "27 hanya punya 2 puluhan. 72 punya 7 puluhan." },
          { soal: "100 dibaca ....", pilihan: ["sepuluh", "seratus", "seribu"], jawaban: 1, penjelasan: "100 dibaca seratus." }
        ]
      ],
      esaiSets: [[
          { soal: "Berapa puluhan dan satuan pada 47?", contohJawaban: "4 puluhan dan 7 satuan." },
          { soal: "Mengapa 58 lebih besar dari 49?", contohJawaban: "Karena 58 punya 5 puluhan, sedangkan 49 punya 4 puluhan." },
          { soal: "Tuliskan tiga bilangan berurutan yang berakhir di 40.", contohJawaban: "38, 39, 40." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan bilangan dengan artinya!",
        pasangan: [
          { kiri: { emoji: "3️⃣", teks: "34" }, kanan: "3 puluhan + 4 satuan" },
          { kiri: { emoji: "5️⃣", teks: "50" }, kanan: "5 puluhan" },
          { kiri: { emoji: "💯", teks: "100" }, kanan: "Seratus" },
          { kiri: { emoji: "2️⃣", teks: "27" }, kanan: "Lebih kecil dari 72" }
        ]
      }]
    },

    {
      id: "penjumlahan-pengurangan",
      judul: "Penjumlahan dan Pengurangan",
      emoji: "➕",
      ringkasan: [
        { emoji: "➕", teks: "Penjumlahan menggabungkan dua jumlah. Tanda + berarti tambah." },
        { emoji: "➖", teks: "Pengurangan mengambil sebagian. Tanda − berarti kurang." },
        { emoji: "🟰", teks: "Tanda = berarti sama dengan. 8 + 5 = 13." },
        { emoji: "✋", teks: "Di kelas 2, kita berlatih hitungan sampai 20 dengan benda yang bisa dihitung." },
        { emoji: "🔢", teks: "8 + 7 = 15. 14 − 5 = 9. 20 − 7 = 13." }
      ],
      pilihanGandaSets: [
        [
          { soal: "8 + 7 = ....", pilihan: ["14", "15", "16"], jawaban: 1, penjelasan: "8 ditambah 7 sama dengan 15." },
          { soal: "14 − 5 = ....", pilihan: ["9", "8", "19"], jawaban: 0, penjelasan: "Dari 14, ambil 5, tersisa 9." },
          { soal: "10 + 10 = ....", pilihan: ["20", "10", "110"], jawaban: 0, penjelasan: "Sepuluh ditambah sepuluh sama dengan 20." },
          { soal: "Tanda = berarti ....", pilihan: ["tambah", "sama dengan", "kurang"], jawaban: 1, penjelasan: "Hasil di kiri sama dengan hasil di kanan." }
        ],
        [
          { soal: "9 + 6 = ....", pilihan: ["14", "15", "16"], jawaban: 1, penjelasan: "9 + 6 = 15." },
          { soal: "20 − 7 = ....", pilihan: ["13", "27", "12"], jawaban: 0, penjelasan: "20 dikurangi 7 sama dengan 13." },
          { soal: "12 − 4 = ....", pilihan: ["8", "16", "9"], jawaban: 0, penjelasan: "12 − 4 = 8." },
          { soal: "6 + 8 = ....", pilihan: ["12", "14", "15"], jawaban: 1, penjelasan: "6 + 8 = 14." }
        ]
      ],
      esaiSets: [[
          { soal: "Hitung 15 − 7.", contohJawaban: "8." },
          { soal: "Lou punya 9 kelereng, lalu dapat 6 lagi. Berapa sekarang?", contohJawaban: "15 kelereng." },
          { soal: "Apa arti tanda + dan tanda −?", contohJawaban: "+ berarti tambah. − berarti kurang." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan soal dengan hasilnya!",
        pasangan: [
          { kiri: { emoji: "➕", teks: "8 + 7" }, kanan: "15" },
          { kiri: { emoji: "➖", teks: "14 − 5" }, kanan: "9" },
          { kiri: { emoji: "🔟", teks: "10 + 10" }, kanan: "20" },
          { kiri: { emoji: "➖", teks: "20 − 7" }, kanan: "13" }
        ]
      }]
    },

    {
      id: "pecahan-setengah",
      judul: "Pecahan Setengah dan Seperempat",
      emoji: "🍕",
      ringkasan: [
        { emoji: "½", teks: "Setengah berarti 1 bagian dari 2 bagian yang sama besar." },
        { emoji: "¼", teks: "Seperempat berarti 1 bagian dari 4 bagian yang sama besar." },
        { emoji: "⚖️", teks: "Bagian-bagiannya harus sama besar. Kalau tidak sama, itu belum setengah atau seperempat." },
        { emoji: "🔵", teks: "Setengah dari 8 benda adalah 4. Seperempat dari 8 benda adalah 2." },
        { emoji: "🍕", teks: "Dua potong seperempat yang sama besar menyusun satu setengah." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Setengah adalah 1 bagian dari .... bagian sama besar.", pilihan: ["2", "4", "3"], jawaban: 0, penjelasan: "Setengah membagi sesuatu menjadi 2 bagian sama." },
          { soal: "Seperempat adalah 1 bagian dari .... bagian sama besar.", pilihan: ["2", "4", "8"], jawaban: 1, penjelasan: "Seperempat membagi sesuatu menjadi 4 bagian sama." },
          { soal: "Setengah dari 8 kelereng adalah ....", pilihan: ["2", "4", "8"], jawaban: 1, penjelasan: "8 dibagi 2 sama dengan 4." },
          { soal: "Seperempat dari 8 kelereng adalah ....", pilihan: ["2", "4", "6"], jawaban: 0, penjelasan: "8 dibagi 4 sama dengan 2." }
        ],
        [
          { soal: "Setengah dari 10 apel adalah ....", pilihan: ["4", "5", "10"], jawaban: 1, penjelasan: "10 dibagi 2 sama dengan 5." },
          { soal: "Dua seperempat yang sama besar sama dengan ....", pilihan: ["satu setengah", "satu utuh", "tiga"], jawaban: 0, penjelasan: "1/4 + 1/4 = 1/2." },
          { soal: "Kue dibagi 4 sama besar. Satu potong disebut ....", pilihan: ["setengah", "seperempat", "sepertiga"], jawaban: 1, penjelasan: "Satu dari empat bagian sama adalah seperempat." },
          { soal: "Bagian yang tidak sama besar ....", pilihan: ["belum disebut setengah", "tetap disebut setengah", "disebut seratus"], jawaban: 0, penjelasan: "Setengah harus dua bagian yang sama besar." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa arti setengah?", contohJawaban: "Satu bagian dari dua bagian yang sama besar." },
          { soal: "Ada 8 kue. Berapa kue jika diambil seperempatnya?", contohJawaban: "2 kue." },
          { soal: "Mengapa potongan yang ukurannya beda tidak disebut setengah?", contohJawaban: "Karena kedua bagian harus sama besar." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan pecahan dengan artinya!",
        pasangan: [
          { kiri: { emoji: "½", teks: "Setengah" }, kanan: "1 dari 2 bagian sama" },
          { kiri: { emoji: "¼", teks: "Seperempat" }, kanan: "1 dari 4 bagian sama" },
          { kiri: { emoji: "🔵", teks: "Setengah dari 8" }, kanan: "4" },
          { kiri: { emoji: "🍕", teks: "Dua seperempat" }, kanan: "Satu setengah" }
        ]
      }]
    },

    {
      id: "membandingkan-ukuran",
      judul: "Membandingkan Panjang, Berat, dan Waktu",
      emoji: "📏",
      ringkasan: [
        { emoji: "📏", teks: "Dua benda bisa dibandingkan langsung: mana yang lebih panjang dan mana yang lebih pendek." },
        { emoji: "✋", teks: "Jengkal dan langkah adalah satuan tidak baku. Hasilnya bisa berbeda pada orang yang berbeda." },
        { emoji: "⚖️", teks: "Benda yang lebih berat menekan lebih kuat. Pensil lebih ringan daripada buku." },
        { emoji: "⏱️", teks: "Durasi adalah lama suatu kegiatan. Kegiatan yang selesai lebih dulu lebih singkat." },
        { emoji: "👀", teks: "Di fase ini kita membandingkan dulu, belum harus memakai penggaris sentimeter." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Pensil lebih .... daripada sapu.", pilihan: ["pendek", "panjang", "berat sekali"], jawaban: 0, penjelasan: "Saat disandingkan, pensil lebih pendek daripada sapu." },
          { soal: "Jengkal disebut satuan tidak baku karena ....", pilihan: ["hasilnya bisa beda tiap orang", "semua orang hasilnya selalu sama", "ia adalah jam"], jawaban: 0, penjelasan: "Panjang jengkal tiap orang tidak sama." },
          { soal: "Buku biasanya lebih .... daripada pensil.", pilihan: ["berat", "ringan", "singkat"], jawaban: 0, penjelasan: "Buku menekan lebih kuat daripada pensil." },
          { soal: "Tepuk tangan sekali lebih .... daripada menonton cerita.", pilihan: ["singkat", "lama", "berat"], jawaban: 0, penjelasan: "Tepuk sekali selesai lebih cepat." }
        ],
        [
          { soal: "Membandingkan panjang bisa dilakukan dengan ....", pilihan: ["menyandingkan kedua benda", "hanya menebak warna", "menghitung huruf"], jawaban: 0, penjelasan: "Susun kedua benda dari ujung yang sama, lalu lihat mana yang lebih panjang." },
          { soal: "Langkah Lou dan langkah ayah bisa berbeda karena langkah adalah satuan ....", pilihan: ["tidak baku", "yang selalu sama", "waktu"], jawaban: 0, penjelasan: "Satuan tidak baku hasilnya tidak selalu sama." },
          { soal: "Kegiatan yang selesai belakangan berlangsung lebih ....", pilihan: ["lama", "singkat", "ringan"], jawaban: 0, penjelasan: "Yang selesai belakangan durasinya lebih lama." },
          { soal: "Mana yang lebih ringan?", pilihan: ["buku tulis", "pensil", "keduanya sama berat"], jawaban: 1, penjelasan: "Pensil lebih ringan daripada buku." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa arti satuan tidak baku? Beri satu contoh.", contohJawaban: "Satuan yang hasilnya bisa berbeda. Contoh: jengkal atau langkah." },
          { soal: "Bagaimana cara tahu benda mana yang lebih panjang?", contohJawaban: "Sandingkan dari ujung yang sama, lalu lihat ujung yang lebih jauh." },
          { soal: "Mana yang lebih singkat: mengikat tali sepatu atau tidur semalam? Mengapa?", contohJawaban: "Mengikat tali sepatu lebih singkat karena selesai lebih cepat." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan kata ukuran dengan pasangannya!",
        pasangan: [
          { kiri: { emoji: "📏", teks: "Lebih panjang" }, kanan: "Lebih pendek" },
          { kiri: { emoji: "⚖️", teks: "Lebih berat" }, kanan: "Lebih ringan" },
          { kiri: { emoji: "⏱️", teks: "Lebih lama" }, kanan: "Lebih singkat" },
          { kiri: { emoji: "✋", teks: "Jengkal" }, kanan: "Satuan tidak baku" }
        ]
      }]
    },

    {
      id: "pola",
      judul: "Pola",
      emoji: "🔁",
      ringkasan: [
        { emoji: "🔁", teks: "Pola adalah susunan yang berulang." },
        { emoji: "🔴", teks: "Pola bisa berupa warna, bentuk, atau bunyi." },
        { emoji: "🔵", teks: "Pada pola merah-biru-merah-biru, berikutnya adalah merah." },
        { emoji: "🔺", teks: "Kita bisa meniru pola, lalu melanjutkannya." },
        { emoji: "👂", teks: "Tepuk-diam-tepuk-diam juga sebuah pola bunyi." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Merah, biru, merah, biru, .... Berikutnya adalah ....", pilihan: ["merah", "kuning", "hijau"], jawaban: 0, penjelasan: "Warna berganti dua-dua, jadi setelah biru kembali merah." },
          { soal: "Lingkaran, segitiga, lingkaran, segitiga, .... Berikutnya adalah ....", pilihan: ["lingkaran", "persegi", "bintang"], jawaban: 0, penjelasan: "Bentuknya berulang: lingkaran lalu segitiga." },
          { soal: "Pola adalah susunan yang ....", pilihan: ["berulang", "selalu acak", "tidak punya urutan"], jawaban: 0, penjelasan: "Bagian pola kembali dengan aturan yang sama." },
          { soal: "Tepuk, diam, tepuk, diam, .... Berikutnya adalah ....", pilihan: ["tepuk", "lompat", "duduk"], jawaban: 0, penjelasan: "Bunyi dan diam bergantian." }
        ],
        [
          { soal: "⭐, ⭐, 🌙, ⭐, ⭐, 🌙, .... Berikutnya adalah ....", pilihan: ["⭐", "🌙", "☀️"], jawaban: 0, penjelasan: "Dua bintang, lalu bulan, lalu pola itu berulang." },
          { soal: "Kita bisa meniru pola, lalu ....", pilihan: ["melanjutkannya", "menghapus aturannya", "mengacak semuanya"], jawaban: 0, penjelasan: "Setelah meniru, kita lanjut sesuai aturan yang sama." },
          { soal: "Pola tidak hanya warna. Pola juga bisa berupa ....", pilihan: ["bentuk atau bunyi", "hanya angka besar", "hanya bau"], jawaban: 0, penjelasan: "Bentuk dan bunyi juga bisa disusun berulang." },
          { soal: "Biru, biru, kuning, biru, biru, kuning, .... Berikutnya adalah ....", pilihan: ["biru", "kuning", "merah"], jawaban: 0, penjelasan: "Dua biru dulu, baru kuning." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa yang dimaksud pola?", contohJawaban: "Susunan yang berulang." },
          { soal: "Lanjutkan: segitiga, persegi, segitiga, persegi, ....", contohJawaban: "Segitiga." },
          { soal: "Sebutkan satu pola bunyi.", contohJawaban: "Contoh: tepuk, diam, tepuk, diam." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan pola dengan lanjutan yang benar!",
        pasangan: [
          { kiri: { emoji: "🔴", teks: "Merah, biru, merah, biru" }, kanan: "Merah" },
          { kiri: { emoji: "🔺", teks: "Segitiga, persegi, segitiga, persegi" }, kanan: "Segitiga" },
          { kiri: { emoji: "⭐", teks: "Dua bintang lalu bulan" }, kanan: "Bintang" },
          { kiri: { emoji: "👏", teks: "Tepuk, diam, tepuk, diam" }, kanan: "Tepuk" }
        ]
      }]
    },

    {
      id: "data-sederhana",
      judul: "Data Sederhana",
      emoji: "📊",
      ringkasan: [
        { emoji: "📊", teks: "Data adalah kumpulan keterangan, misalnya banyak buah yang dipilih teman." },
        { emoji: "✏️", teks: "Turus dipakai untuk mencatat jumlah. Empat garis tegak dan garis kelima miring berarti 5." },
        { emoji: "🍎", teks: "Piktogram memakai gambar. Satu gambar mewakili satu benda." },
        { emoji: "4️⃣", teks: "Di fase ini kita memakai paling banyak 4 kategori, misalnya apel, jeruk, mangga, dan pisang." },
        { emoji: "👀", teks: "Kategori dengan gambar atau turus paling banyak adalah yang paling sering dipilih." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Empat garis tegak dan satu garis miring pada turus berarti ....", pilihan: ["4", "5", "6"], jawaban: 1, penjelasan: "Garis kelima yang miring membuat jumlahnya 5." },
          { soal: "Pada piktogram, satu gambar apel berarti ....", pilihan: ["1 apel", "10 apel", "0 apel"], jawaban: 0, penjelasan: "Satu gambar mewakili satu benda." },
          { soal: "Jika gambar apel ada 3 dan gambar jeruk ada 5, yang lebih banyak adalah ....", pilihan: ["jeruk", "apel", "sama banyak"], jawaban: 0, penjelasan: "5 lebih banyak daripada 3." },
          { soal: "Data sederhana di kelas ini paling banyak .... kategori.", pilihan: ["4", "40", "100"], jawaban: 0, penjelasan: "Piktogram fase ini memakai paling banyak 4 kategori." }
        ],
        [
          { soal: "Turus berguna untuk ....", pilihan: ["mencatat jumlah", "mengukur berat", "mewarnai bendera"], jawaban: 0, penjelasan: "Setiap hitungan ditandai dengan garis." },
          { soal: "Tiga gambar pisang pada piktogram berarti ada .... pisang.", pilihan: ["3", "30", "1"], jawaban: 0, penjelasan: "Satu gambar = satu pisang, jadi tiga gambar = 3." },
          { soal: "Kategori yang gambarnya paling sedikit adalah yang ....", pilihan: ["paling jarang", "paling sering", "paling berat"], jawaban: 0, penjelasan: "Gambar sedikit berarti jumlahnya lebih kecil." },
          { soal: "Apel, jeruk, mangga, dan pisang adalah contoh ....", pilihan: ["4 kategori", "4 bilangan", "4 satuan waktu"], jawaban: 0, penjelasan: "Masing-masing jenis buah adalah satu kategori." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa arti satu gambar pada piktogram?", contohJawaban: "Satu gambar mewakili satu benda." },
          { soal: "Bagaimana cara menulis 5 dengan turus?", contohJawaban: "Empat garis tegak dan garis kelima miring." },
          { soal: "Apel 4, jeruk 2. Mana yang lebih banyak, dan selisihnya berapa?", contohJawaban: "Apel lebih banyak, selisihnya 2." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan catatan dengan jumlahnya!",
        pasangan: [
          { kiri: { emoji: "✏️", teks: "Turus 5" }, kanan: "Empat garis tegak dan satu miring" },
          { kiri: { emoji: "🍎", teks: "3 gambar apel" }, kanan: "3 apel" },
          { kiri: { emoji: "🍊", teks: "Gambar paling banyak" }, kanan: "Kategori yang paling sering" },
          { kiri: { emoji: "4️⃣", teks: "Paling banyak 4 jenis" }, kanan: "Empat kategori" }
        ]
      }]
    }
  ]
};

/* ============================================================
 *  DEFINISI MATA PELAJARAN INFORMATIKA
 *  (dipisah agar mudah dibaca; dipakai di array SUBJECTS)
 *  Modul: Pengenalan Perangkat TIK — Bab 2 Sesi 1
 *  (Buku Informatika Erlangga Kelas 2).
 * ============================================================ */
const INFORMATIKA_SUBJECT = {
  id: "informatika",
  nama: "Informatika",
  ikon: "💻",
  warna: "#0096c7",
  deskripsi: "Mengenal perangkat TIK, mengelompokkan benda, instruksi runtut, dan sinyal.",
  topik: [

    /* ========================================================
     *  MODUL 1 — PENGENALAN PERANGKAT TIK
     * ====================================================== */
    {
      id: "perangkat-tik",
      judul: "Pengenalan Perangkat TIK",
      emoji: "📱",

      ringkasan: [
        { emoji: "💡", teks: "TIK adalah singkatan dari Teknologi Informasi dan Komunikasi." },
        { emoji: "🤝", teks: "TIK digunakan untuk berbagi informasi dan berkomunikasi secara cepat, baik, dan bijak." },
        { gambar: "img/tik/telepon-kabel.svg", teks: "Telepon kabel: alat komunikasi untuk berbicara dengan orang yang tinggal sangat jauh." },
        { gambar: "img/tik/telepon-genggam.svg", teks: "Telepon genggam: alat komunikasi tanpa kabel yang bisa dibawa ke mana-mana. Bisa untuk menelepon, SMS, dan MMS." },
        { gambar: "img/tik/ponsel-pintar.svg", teks: "Ponsel pintar (smartphone): alat komunikasi serbabisa yang memakai internet. Bisa untuk menelepon, mengirim pesan WhatsApp, menonton video, mendengar musik, dan e-mail." },
        { gambar: "img/tik/komputer-meja.svg", teks: "Komputer meja (PC) dan laptop: alat elektronik pengolah data seperti angka, gambar, tulisan, suara, dan video." },
        { gambar: "img/tik/laptop.svg", teks: "Dengan komputer kita bisa mengetik, menggambar, berhitung, belajar, dan menonton film. Laptop mudah dibawa ke mana-mana." },
        { gambar: "img/tik/internet.svg", teks: "Internet memperluas fungsi komputer: mencari informasi, bermain game online, dan mengirim e-mail." },
        { gambar: "img/tik/televisi.svg", teks: "Televisi dan Smart TV menampilkan gambar dan suara, seperti ilmu pengetahuan, berita, dan film. Tontonlah acara yang sesuai usia." },
        { gambar: "img/tik/jam-pintar.svg", teks: "Jam pintar (smartwatch) adalah komputer berbentuk jam. Bisa untuk menelepon, SMS, dan mengukur denyut nadi, suhu tubuh, serta kecepatan berjalan atau berlari." },
        { gambar: "img/tik/radio.svg", teks: "Radio juga perangkat TIK. Radio memperdengarkan suara, seperti berita dan lagu." },
        { gambar: "img/tik/monitor.svg", teks: "Bagian komputer: monitor (layar untuk melihat), keyboard (untuk mengetik), mouse (untuk menggerakkan penunjuk), dan CPU (otak komputer)." },
        { emoji: "🧽", teks: "Merawat perangkat TIK: bersihkan dengan kain lembut yang kering, jauhkan dari air, dan simpan di tempat yang aman." },
        { emoji: "🙌", teks: "Gunakan perangkat TIK dengan tangan bersih dan kering. Jangan makan atau minum di dekat komputer." },
        { emoji: "🔌", teks: "Matikan komputer dengan cara yang benar (Shut Down), jangan langsung mencabut kabelnya." },
        { emoji: "👀", teks: "Gunakan dengan bijak: duduk tegak, jaga jarak mata dari layar, istirahatkan mata, batasi waktu bermain, dan minta izin orang tua." }
      ],

      /* ===== 4 SET SOAL PILIHAN GANDA ===== */
      pilihanGandaSets: [

        // ---------- SET 1 : Mengenal perangkat TIK ----------
        [
          {
            soal: "TIK adalah singkatan dari ....",
            pilihan: ["Teknologi Informasi dan Komunikasi", "Tempat Istirahat Kita", "Tulisan, Ilmu, dan Kertas"],
            jawaban: 0,
            penjelasan: "TIK = Teknologi Informasi dan Komunikasi."
          },
          {
            soal: "TIK digunakan untuk ....",
            pilihan: ["Memasak nasi", "Berbagi informasi dan berkomunikasi", "Menyiram tanaman"],
            jawaban: 1,
            penjelasan: "TIK membantu kita berbagi informasi dan berkomunikasi dengan cepat."
          },
          {
            gambar: "img/tik/telepon-kabel.svg",
            soal: "Alat pada gambar bernama ....",
            pilihan: ["Radio", "Telepon kabel", "Televisi"],
            jawaban: 1,
            penjelasan: "Itu telepon kabel, untuk berbicara dengan orang yang jauh."
          },
          {
            gambar: "img/tik/ponsel-pintar.svg",
            soal: "Alat pada gambar bernama ....",
            pilihan: ["Ponsel pintar (smartphone)", "Kalkulator", "Jam dinding"],
            jawaban: 0,
            penjelasan: "Ponsel pintar memiliki layar sentuh dan banyak aplikasi."
          },
          {
            gambar: "img/tik/jam-pintar.svg",
            soal: "Komputer kecil berbentuk jam disebut ....",
            pilihan: ["Jam pasir", "Jam dinding", "Jam pintar (smartwatch)"],
            jawaban: 2,
            penjelasan: "Jam pintar bisa menelepon dan mengukur denyut nadi."
          },
          {
            gambar: "img/tik/televisi.svg",
            soal: "Televisi menampilkan ....",
            pilihan: ["Gambar dan suara", "Hanya suara", "Hanya tulisan"],
            jawaban: 0,
            penjelasan: "Televisi menampilkan gambar dan suara."
          },
          {
            gambar: "img/tik/laptop.svg",
            soal: "Komputer yang mudah dibawa ke mana-mana adalah ....",
            pilihan: ["Komputer meja (PC)", "Laptop", "Televisi"],
            jawaban: 1,
            penjelasan: "Laptop ringan dan bisa dilipat, jadi mudah dibawa."
          },
          {
            gambar: "img/tik/radio.svg",
            soal: "Perangkat TIK yang hanya memperdengarkan suara adalah ....",
            pilihan: ["Radio", "Televisi", "Komputer"],
            jawaban: 0,
            penjelasan: "Radio hanya mengeluarkan suara, tidak ada gambarnya."
          },
          {
            soal: "Berikut ini yang BUKAN perangkat TIK adalah ....",
            pilihan: ["Laptop", "Telepon genggam", "Sapu"],
            jawaban: 2,
            penjelasan: "Sapu adalah alat kebersihan, bukan perangkat TIK."
          },
          {
            soal: "Telepon genggam dapat digunakan untuk ....",
            pilihan: ["Menelepon dan mengirim SMS", "Memasak", "Mencuci baju"],
            jawaban: 0,
            penjelasan: "Telepon genggam bisa untuk menelepon, SMS, dan MMS."
          }
        ],

        // ---------- SET 2 : Kegunaan perangkat TIK ----------
        [
          {
            soal: "Alat komunikasi tanpa kabel yang dapat dibawa ke mana-mana adalah ....",
            pilihan: ["Telepon kabel", "Telepon genggam", "Komputer meja"],
            jawaban: 1,
            penjelasan: "Telepon genggam tidak memakai kabel dan bisa dibawa ke mana-mana."
          },
          {
            soal: "Mengirim pesan lewat WhatsApp dapat dilakukan dengan ....",
            pilihan: ["Radio", "Ponsel pintar", "Telepon kabel"],
            jawaban: 1,
            penjelasan: "WhatsApp adalah aplikasi di ponsel pintar yang memakai internet."
          },
          {
            soal: "Komputer adalah alat elektronik untuk ....",
            pilihan: ["Mengolah data", "Mendinginkan makanan", "Menerangi ruangan"],
            jawaban: 0,
            penjelasan: "Komputer mengolah angka, gambar, tulisan, suara, dan video."
          },
          {
            soal: "Dengan komputer kita bisa melakukan hal berikut, KECUALI ....",
            pilihan: ["Mengetik", "Menggambar", "Menanam padi"],
            jawaban: 2,
            penjelasan: "Menanam padi dilakukan di sawah, bukan dengan komputer."
          },
          {
            gambar: "img/tik/internet.svg",
            soal: "Mencari informasi dan mengirim e-mail memerlukan ....",
            pilihan: ["Internet", "Senter", "Kipas angin"],
            jawaban: 0,
            penjelasan: "Internet memperluas fungsi komputer dan ponsel."
          },
          {
            soal: "Jam pintar dapat mengukur ....",
            pilihan: ["Tinggi pohon", "Denyut nadi", "Berat lemari"],
            jawaban: 1,
            penjelasan: "Jam pintar bisa mengukur denyut nadi, suhu tubuh, dan kecepatan lari."
          },
          {
            soal: "Acara televisi yang baik ditonton anak adalah acara yang ....",
            pilihan: ["Sesuai usia", "Untuk orang dewasa", "Sampai larut malam"],
            jawaban: 0,
            penjelasan: "Tontonlah acara yang sesuai usia, seperti acara ilmu pengetahuan."
          },
          {
            soal: "Nenek tinggal di kota yang jauh. Agar bisa berbicara dengan nenek, kita menggunakan ....",
            pilihan: ["Televisi", "Telepon", "Radio"],
            jawaban: 1,
            penjelasan: "Telepon membantu kita berbicara dengan orang yang jauh."
          },
          {
            soal: "Ayah ingin mengetik surat dan mencetaknya. Ayah menggunakan ....",
            pilihan: ["Komputer", "Jam pintar", "Radio"],
            jawaban: 0,
            penjelasan: "Komputer bisa digunakan untuk mengetik."
          },
          {
            soal: "Kita dapat mendengarkan berita dan lagu tanpa gambar melalui ....",
            pilihan: ["Laptop", "Radio", "Smart TV"],
            jawaban: 1,
            penjelasan: "Radio hanya memperdengarkan suara."
          }
        ],

        // ---------- SET 3 : Bagian komputer ----------
        [
          {
            gambar: "img/tik/monitor.svg",
            soal: "Bagian komputer pada gambar disebut ....",
            pilihan: ["Monitor", "Mouse", "Keyboard"],
            jawaban: 0,
            penjelasan: "Monitor adalah layar untuk melihat tampilan komputer."
          },
          {
            gambar: "img/tik/keyboard.svg",
            soal: "Bagian komputer pada gambar digunakan untuk ....",
            pilihan: ["Melihat gambar", "Mengetik huruf dan angka", "Mendengar suara"],
            jawaban: 1,
            penjelasan: "Keyboard (papan ketik) digunakan untuk mengetik."
          },
          {
            gambar: "img/tik/mouse.svg",
            soal: "Bagian komputer pada gambar bernama ....",
            pilihan: ["Keyboard", "CPU", "Mouse"],
            jawaban: 2,
            penjelasan: "Mouse digunakan untuk menggerakkan penunjuk dan mengeklik."
          },
          {
            gambar: "img/tik/cpu.svg",
            soal: "Bagian komputer yang disebut \"otak komputer\" adalah ....",
            pilihan: ["CPU", "Monitor", "Mouse"],
            jawaban: 0,
            penjelasan: "CPU mengolah semua perintah, seperti otak."
          },
          {
            soal: "Untuk menggerakkan penunjuk (kursor) di layar, kita menggunakan ....",
            pilihan: ["Monitor", "Mouse", "Speaker"],
            jawaban: 1,
            penjelasan: "Mouse menggerakkan kursor di layar."
          },
          {
            soal: "Komputer meja (PC) terdiri dari monitor, keyboard, mouse, dan ....",
            pilihan: ["Kulkas", "CPU", "Kompor"],
            jawaban: 1,
            penjelasan: "CPU adalah bagian penting komputer meja."
          },
          {
            gambar: "img/tik/komputer-meja.svg",
            soal: "Perangkat pada gambar disebut ....",
            pilihan: ["Komputer meja (PC)", "Telepon kabel", "Jam pintar"],
            jawaban: 0,
            penjelasan: "Ada monitor, CPU, keyboard, dan mouse: itu komputer meja."
          },
          {
            soal: "Komputer dapat mengolah data berupa ....",
            pilihan: ["Angka, gambar, tulisan, suara, dan video", "Hanya angka", "Hanya suara"],
            jawaban: 0,
            penjelasan: "Komputer bisa mengolah banyak jenis data."
          },
          {
            soal: "Untuk menggambar di komputer, kita bisa menggunakan ....",
            pilihan: ["Mouse", "Kabel listrik", "Speaker"],
            jawaban: 0,
            penjelasan: "Mouse membantu kita menggambar garis dan bentuk di layar."
          },
          {
            soal: "Laptop sudah memiliki layar dan keyboard yang ....",
            pilihan: ["Terpisah jauh", "Menyatu dan bisa dilipat", "Tidak ada"],
            jawaban: 1,
            penjelasan: "Layar dan keyboard laptop menyatu sehingga mudah dibawa."
          }
        ],

        // ---------- SET 4 : Merawat & memakai dengan bijak ----------
        [
          {
            soal: "Layar komputer yang berdebu sebaiknya dibersihkan dengan ....",
            pilihan: ["Kain lembut yang kering", "Air sabun yang banyak", "Sikat kawat"],
            jawaban: 0,
            penjelasan: "Kain lembut yang kering tidak merusak layar."
          },
          {
            soal: "Sikap yang BENAR saat memakai komputer adalah ....",
            pilihan: ["Makan dan minum di dekat keyboard", "Memakai dengan tangan bersih dan kering", "Memukul keyboard dengan keras"],
            jawaban: 1,
            penjelasan: "Tangan bersih dan kering menjaga komputer tetap awet."
          },
          {
            soal: "Cara mematikan komputer yang benar adalah ....",
            pilihan: ["Mencabut kabel listrik", "Memilih menu Shut Down", "Menutup layar dengan kain"],
            jawaban: 1,
            penjelasan: "Pilih Shut Down agar komputer mati dengan aman."
          },
          {
            soal: "Perangkat TIK harus dijauhkan dari ....",
            pilihan: ["Air", "Meja", "Buku"],
            jawaban: 0,
            penjelasan: "Air bisa membuat perangkat elektronik rusak."
          },
          {
            soal: "Saat menonton atau memakai ponsel, mata kita sebaiknya ....",
            pilihan: ["Sangat dekat dengan layar", "Diberi jarak dan diistirahatkan", "Tidak berkedip"],
            jawaban: 1,
            penjelasan: "Jaga jarak dan istirahatkan mata agar mata tetap sehat."
          },
          {
            soal: "Sebelum memakai ponsel atau laptop milik orang tua, kita harus ....",
            pilihan: ["Langsung mengambilnya", "Meminta izin", "Menyembunyikannya"],
            jawaban: 1,
            penjelasan: "Minta izin dulu adalah sikap yang sopan dan bijak."
          },
          {
            soal: "Bermain game di ponsel sebaiknya ....",
            pilihan: ["Seharian penuh", "Dibatasi waktunya", "Sampai larut malam"],
            jawaban: 1,
            penjelasan: "Batasi waktu agar tetap punya waktu belajar, bermain di luar, dan beristirahat."
          },
          {
            soal: "Posisi duduk yang baik saat memakai komputer adalah ....",
            pilihan: ["Tegak dan nyaman", "Tidur telungkup", "Membungkuk dekat layar"],
            jawaban: 0,
            penjelasan: "Duduk tegak membuat punggung dan mata tidak cepat lelah."
          },
          {
            soal: "Setelah selesai dipakai, laptop sebaiknya disimpan ....",
            pilihan: ["Di lantai dekat pintu", "Di tempat yang aman dan kering", "Di kamar mandi"],
            jawaban: 1,
            penjelasan: "Tempat yang aman dan kering membuat laptop awet."
          },
          {
            soal: "Menggunakan TIK dengan bijak artinya ....",
            pilihan: [
              "Memakai untuk belajar dan berkomunikasi dengan sopan",
              "Mengirim pesan yang mengejek teman",
              "Menonton acara orang dewasa"
            ],
            jawaban: 0,
            penjelasan: "Gunakan TIK untuk hal yang baik dan bermanfaat."
          }
        ]
      ],

      /* ===== 3 SET SOAL ESAI ===== */
      esaiSets: [

        // ---------- SET 1 : Mengenal perangkat TIK ----------
        [
          {
            soal: "Apa kepanjangan dari TIK?",
            contohJawaban: "Teknologi Informasi dan Komunikasi."
          },
          {
            soal: "Sebutkan 4 contoh perangkat TIK yang ada di rumahmu!",
            contohJawaban: "Televisi, ponsel pintar, laptop, dan radio. (Bisa juga: komputer, telepon, jam pintar.)"
          },
          {
            gambar: "img/tik/ponsel-pintar.svg",
            soal: "Sebutkan 3 kegunaan ponsel pintar!",
            contohJawaban: "Menelepon, mengirim pesan WhatsApp, menonton video, mendengar musik, dan mengirim e-mail."
          },
          {
            soal: "Apa bedanya telepon kabel dan telepon genggam?",
            contohJawaban: "Telepon kabel memakai kabel sehingga tidak bisa dibawa ke mana-mana. Telepon genggam tanpa kabel dan bisa dibawa ke mana-mana."
          },
          {
            gambar: "img/tik/jam-pintar.svg",
            soal: "Sebutkan kegunaan jam pintar (smartwatch)!",
            contohJawaban: "Menelepon, SMS, mengukur denyut nadi, suhu tubuh, dan kecepatan berjalan atau berlari."
          },
          {
            soal: "Mengapa kita harus menonton acara televisi yang sesuai usia?",
            contohJawaban: "Agar yang kita tonton baik dan bermanfaat untuk anak, seperti acara ilmu pengetahuan."
          }
        ],

        // ---------- SET 2 : Komputer ----------
        [
          {
            soal: "Apa yang dimaksud dengan komputer?",
            contohJawaban: "Komputer adalah alat elektronik untuk mengolah data seperti angka, gambar, tulisan, suara, dan video."
          },
          {
            soal: "Sebutkan 3 kegiatan yang bisa kamu lakukan dengan komputer!",
            contohJawaban: "Mengetik, menggambar, berhitung, belajar, dan menonton film."
          },
          {
            gambar: "img/tik/komputer-meja.svg",
            soal: "Sebutkan bagian-bagian komputer meja pada gambar!",
            contohJawaban: "Monitor, CPU, keyboard, dan mouse."
          },
          {
            soal: "Apa kegunaan keyboard dan mouse?",
            contohJawaban: "Keyboard untuk mengetik huruf dan angka. Mouse untuk menggerakkan penunjuk dan mengeklik."
          },
          {
            gambar: "img/tik/internet.svg",
            soal: "Apa saja yang bisa dilakukan komputer jika terhubung ke internet?",
            contohJawaban: "Mencari informasi, bermain game online, dan mengirim e-mail."
          },
          {
            soal: "Apa kelebihan laptop dibandingkan komputer meja?",
            contohJawaban: "Laptop lebih ringan dan bisa dilipat, jadi mudah dibawa ke mana-mana."
          }
        ],

        // ---------- SET 3 : Merawat & bijak ----------
        [
          {
            soal: "Sebutkan 3 cara merawat komputer atau laptop!",
            contohJawaban: "Membersihkan dengan kain lembut yang kering, menjauhkan dari air, tidak makan/minum di dekatnya, dan mematikannya dengan Shut Down."
          },
          {
            soal: "Mengapa kita tidak boleh makan dan minum di dekat komputer?",
            contohJawaban: "Karena remah makanan atau tumpahan minuman bisa membuat komputer kotor dan rusak."
          },
          {
            soal: "Bagaimana cara mematikan komputer yang benar?",
            contohJawaban: "Klik tombol Start, lalu pilih Shut Down. Tunggu sampai layar mati. Jangan langsung mencabut kabel."
          },
          {
            soal: "Bagaimana cara menjaga mata saat memakai ponsel atau komputer?",
            contohJawaban: "Menjaga jarak mata dari layar, duduk tegak, mengistirahatkan mata, dan tidak memakai terlalu lama."
          },
          {
            soal: "Apa yang harus kamu lakukan sebelum memakai ponsel orang tuamu?",
            contohJawaban: "Meminta izin terlebih dahulu."
          },
          {
            soal: "Berikan contoh menggunakan TIK dengan bijak!",
            contohJawaban: "Memakai laptop untuk belajar, mengirim pesan yang sopan kepada teman, dan menonton acara sesuai usia."
          }
        ]
      ],

      /* ===== 3 SET MENCOCOKKAN ===== */
      cocokkanSets: [

        // ---------- SET 1 : Nama perangkat ----------
        {
          instruksi: "Pasangkan gambar perangkat TIK dengan namanya!",
          pasangan: [
            { kiri: { gambar: "img/tik/telepon-kabel.svg" }, kanan: "Telepon kabel" },
            { kiri: { gambar: "img/tik/ponsel-pintar.svg" }, kanan: "Ponsel pintar" },
            { kiri: { gambar: "img/tik/laptop.svg" }, kanan: "Laptop" },
            { kiri: { gambar: "img/tik/televisi.svg" }, kanan: "Televisi" },
            { kiri: { gambar: "img/tik/jam-pintar.svg" }, kanan: "Jam pintar" }
          ]
        },

        // ---------- SET 2 : Kegunaan ----------
        {
          instruksi: "Pasangkan perangkat TIK dengan kegunaannya!",
          pasangan: [
            { kiri: { gambar: "img/tik/telepon-genggam.svg", teks: "Telepon genggam" }, kanan: "Menelepon dan SMS di mana saja" },
            { kiri: { gambar: "img/tik/komputer-meja.svg", teks: "Komputer" }, kanan: "Mengetik dan menggambar" },
            { kiri: { gambar: "img/tik/radio.svg", teks: "Radio" }, kanan: "Mendengarkan berita dan lagu" },
            { kiri: { gambar: "img/tik/jam-pintar.svg", teks: "Jam pintar" }, kanan: "Mengukur denyut nadi" },
            { kiri: { gambar: "img/tik/internet.svg", teks: "Internet" }, kanan: "Mencari informasi dan mengirim e-mail" }
          ]
        },

        // ---------- SET 3 : Bagian komputer ----------
        {
          instruksi: "Pasangkan bagian komputer dengan fungsinya!",
          pasangan: [
            { kiri: { gambar: "img/tik/monitor.svg", teks: "Monitor" }, kanan: "Layar untuk melihat" },
            { kiri: { gambar: "img/tik/keyboard.svg", teks: "Keyboard" }, kanan: "Mengetik huruf dan angka" },
            { kiri: { gambar: "img/tik/mouse.svg", teks: "Mouse" }, kanan: "Menggerakkan penunjuk" },
            { kiri: { gambar: "img/tik/cpu.svg", teks: "CPU" }, kanan: "Otak komputer" }
          ]
        }
      ]
    },

    {
      id: "mengelompokkan-benda",
      judul: "Mengelompokkan dan Mengurutkan",
      emoji: "📦",
      ringkasan: [
        { emoji: "📦", teks: "Berpikir komputasional dimulai dari benda yang bisa kita lihat dan pegang." },
        { emoji: "🔍", teks: "Mengidentifikasi berarti mengenali ciri benda: warna, ukuran, atau bentuk." },
        { emoji: "⚖️", teks: "Membandingkan berarti melihat mana yang lebih besar, lebih kecil, atau sama." },
        { emoji: "🗂️", teks: "Mengelompokkan berarti mengumpulkan benda yang cirinya sama." },
        { emoji: "🔢", teks: "Mengurutkan berarti menyusun dari yang kecil ke yang besar, atau sebaliknya." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Mengenali warna dan ukuran sebuah benda disebut ....", pilihan: ["mengidentifikasi", "menghapus", "menyalakan layar"], jawaban: 0, penjelasan: "Kita menyebut ciri benda itu." },
          { soal: "Kancing merah dikumpulkan terpisah dari kancing biru. Itu disebut ....", pilihan: ["mengelompokkan", "mengacak", "mematikan wifi"], jawaban: 0, penjelasan: "Benda yang cirinya sama masuk satu kelompok." },
          { soal: "Menyusun balok dari yang kecil ke yang besar disebut ....", pilihan: ["mengurutkan", "mewarnai saja", "menyembunyikan"], jawaban: 0, penjelasan: "Urutan mengikuti ukuran." },
          { soal: "Membandingkan dua pensil berarti melihat ....", pilihan: ["mana yang lebih panjang", "bau pensil saja", "harganya di toko"], jawaban: 0, penjelasan: "Kita membandingkan cirinya." }
        ],
        [
          { soal: "Benda yang dapat dipegang disebut benda ....", pilihan: ["konkret", "yang tidak ada", "hanya bayangan"], jawaban: 0, penjelasan: "Benda konkret bisa dilihat dan dipegang." },
          { soal: "Kelompok buku dan kelompok pensil dipisah karena ....", pilihan: ["jenisnya berbeda", "keduanya selalu sama", "tidak punya ciri"], jawaban: 0, penjelasan: "Ciri yang berbeda masuk kelompok berbeda." },
          { soal: "Urutan yang benar dari kecil ke besar adalah ....", pilihan: ["kelereng, bola tenis, bola basket", "bola basket, kelereng, bola tenis", "semua dicampur"], jawaban: 0, penjelasan: "Kelereng paling kecil, bola basket paling besar." },
          { soal: "Setelah mengelompokkan, kita dapat melihat kelompok mana yang ....", pilihan: ["lebih banyak", "tidak punya anggota", "harus dihapus"], jawaban: 0, penjelasan: "Jumlah tiap kelompok bisa dibandingkan." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa arti mengelompokkan?", contohJawaban: "Mengumpulkan benda yang cirinya sama." },
          { soal: "Bagaimana cara mengurutkan tiga bola?", contohJawaban: "Susun dari yang paling kecil ke yang paling besar, atau sebaliknya." },
          { soal: "Sebutkan dua ciri yang dapat dipakai untuk membandingkan benda.", contohJawaban: "Warna, ukuran, atau bentuk." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan kegiatan dengan namanya!",
        pasangan: [
          { kiri: { emoji: "🔍", teks: "Menyebut warna benda" }, kanan: "Mengidentifikasi" },
          { kiri: { emoji: "🗂️", teks: "Mengumpulkan kancing merah" }, kanan: "Mengelompokkan" },
          { kiri: { emoji: "🔢", teks: "Kecil ke besar" }, kanan: "Mengurutkan" },
          { kiri: { emoji: "⚖️", teks: "Mana yang lebih panjang" }, kanan: "Membandingkan" }
        ]
      }]
    },

    {
      id: "instruksi-berurutan",
      judul: "Instruksi yang Runtut",
      emoji: "📋",
      ringkasan: [
        { emoji: "📋", teks: "Instruksi adalah perintah yang dapat diikuti langkah demi langkah." },
        { emoji: "🧦", teks: "Memakai sepatu: pakai kaus kaki lebih dulu, baru masukkan kaki ke sepatu." },
        { emoji: "🔁", teks: "Pengulangan berarti langkah yang sama dilakukan beberapa kali. Contoh: tepuk tangan 3 kali." },
        { emoji: "🌧️", teks: "Kalimat kondisi: jika hujan, bawa jas. Jika tidak hujan, jas tidak perlu." },
        { emoji: "✅", teks: "Urutan yang benar membuat hasilnya sesuai. Urutan yang terbalik membuat hasilnya kacau." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Sebelum sepatu dipakai, kita memakai ....", pilihan: ["kaus kaki", "topi di kaki", "jas hujan di kaki"], jawaban: 0, penjelasan: "Kaus kaki dipakai lebih dulu." },
          { soal: "Tepuk tangan 3 kali adalah contoh ....", pilihan: ["pengulangan", "warna", "sinyal wifi"], jawaban: 0, penjelasan: "Langkah yang sama diulang tiga kali." },
          { soal: "Jika hujan, kita bawa jas. Kata jika menunjukkan ....", pilihan: ["syarat", "penghapus", "bilangan"], jawaban: 0, penjelasan: "Jas dibawa hanya saat syaratnya terjadi, yaitu hujan." },
          { soal: "Urutan yang dibalik dapat membuat hasilnya ....", pilihan: ["kacau", "selalu sama", "lebih rapi tanpa alasan"], jawaban: 0, penjelasan: "Langkah awal yang tertukar mengubah hasil." }
        ],
        [
          { soal: "Instruksi yang baik urutannya ....", pilihan: ["jelas dari awal sampai selesai", "acak", "tanpa akhir"], jawaban: 0, penjelasan: "Kita tahu langkah mulai dan langkah selesai." },
          { soal: "Jika tidak hujan, jas ....", pilihan: ["tidak perlu dibawa", "wajib dipakai dua lapis", "dipakai di kepala"], jawaban: 0, penjelasan: "Syaratnya tidak terjadi, jadi langkah itu tidak dilakukan." },
          { soal: "Mengulang langkah yang sama disebut ....", pilihan: ["pengulangan", "membalik urutan", "menghapus instruksi"], jawaban: 0, penjelasan: "Contohnya tepuk sebanyak tiga kali." },
          { soal: "Orang lain dapat mengikuti instruksi jika langkahnya ....", pilihan: ["jelas", "rahasia", "berbeda artinya tiap orang"], jawaban: 0, penjelasan: "Satu langkah punya satu arti." }
        ]
      ],
      esaiSets: [[
          { soal: "Tuliskan urutan memakai sepatu.", contohJawaban: "Pakai kaus kaki, masukkan kaki ke sepatu, lalu rapikan talinya." },
          { soal: "Apa arti jika hujan, bawa jas?", contohJawaban: "Jas dibawa hanya ketika hujan. Jika tidak hujan, jas tidak perlu." },
          { soal: "Berikan contoh pengulangan.", contohJawaban: "Tepuk tangan 3 kali, atau lompat 3 kali." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan instruksi dengan jenisnya!",
        pasangan: [
          { kiri: { emoji: "🧦", teks: "Kaus kaki lalu sepatu" }, kanan: "Urutan yang benar" },
          { kiri: { emoji: "🔁", teks: "Tepuk 3 kali" }, kanan: "Pengulangan" },
          { kiri: { emoji: "🌧️", teks: "Jika hujan, bawa jas" }, kanan: "Syarat" },
          { kiri: { emoji: "✅", teks: "Langkah jelas" }, kanan: "Mudah diikuti" }
        ]
      }]
    },

    {
      id: "sinyal-sekitar",
      judul: "Sinyal Telepon dan Wifi",
      emoji: "📶",
      ringkasan: [
        { emoji: "📶", teks: "Ponsel memakai sinyal telepon seluler untuk menelepon dan mengirim pesan." },
        { emoji: "📡", teks: "Wifi adalah sinyal internet di tempat terdekat, misalnya rumah atau sekolah." },
        { emoji: "📊", teks: "Lebih banyak batang sinyal biasanya berarti hubungan lebih kuat." },
        { emoji: "🚫", teks: "Jika tidak ada batang, panggilan atau pesan sulit terkirim." },
        { emoji: "👀", teks: "Kita hanya melihat apakah sinyal ada dan kuat atau lemah, tanpa membuka pengaturannya." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Sinyal untuk menelepon lewat ponsel disebut sinyal ....", pilihan: ["telepon seluler", "penggaris", "turus"], jawaban: 0, penjelasan: "Ponsel membutuhkan sinyal seluler." },
          { soal: "Wifi biasanya dipakai untuk internet di ....", pilihan: ["rumah atau sekolah", "dasar laut", "dalam batu"], jawaban: 0, penjelasan: "Wifi ada di tempat terdekat yang memasangnya." },
          { soal: "Batang sinyal yang lebih banyak biasanya berarti hubungan ....", pilihan: ["lebih kuat", "mati", "lebih pendek secara ukuran"], jawaban: 0, penjelasan: "Banyak batang menunjukkan kualitas yang lebih baik." },
          { soal: "Jika tidak ada batang sinyal, pesan ....", pilihan: ["sulit terkirim", "pasti lebih cepat", "berubah menjadi buku"], jawaban: 0, penjelasan: "Tanpa sinyal, ponsel kesulitan terhubung." }
        ],
        [
          { soal: "Wifi dan sinyal telepon ....", pilihan: ["keduanya tanda hubungan, tetapi pemakaiannya berbeda", "adalah benda yang sama", "adalah satuan berat"], jawaban: 0, penjelasan: "Wifi untuk internet di tempat dekat. Sinyal seluler untuk telepon." },
          { soal: "Sinyal yang lemah tampak dari batang yang ....", pilihan: ["sedikit", "sangat banyak", "berwarna emas"], jawaban: 0, penjelasan: "Sedikit batang berarti kualitasnya lemah." },
          { soal: "Kita mengenali sinyal dengan ....", pilihan: ["melihat tanda batang di layar", "menimbang ponsel", "mengukur dengan jengkal"], jawaban: 0, penjelasan: "Tanda di layar menunjukkan ada atau tidaknya sinyal." },
          { soal: "Saat sinyal tidak ada, yang tepat dilakukan adalah ....", pilihan: ["pindah ke tempat yang bertanda sinyal", "menekan layar berkali-kali dengan marah", "membuka perangkatnya"], jawaban: 0, penjelasan: "Kita mencari tempat yang hubungannya lebih baik, tanpa membongkar alat." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa beda sinyal telepon dan wifi?", contohJawaban: "Sinyal telepon dipakai ponsel untuk menelepon. Wifi dipakai untuk internet di tempat terdekat." },
          { soal: "Apa arti batang sinyal yang banyak?", contohJawaban: "Hubungan biasanya lebih kuat." },
          { soal: "Apa yang terjadi jika tidak ada batang sinyal?", contohJawaban: "Panggilan atau pesan sulit terkirim." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan tanda dengan artinya!",
        pasangan: [
          { kiri: { emoji: "📶", teks: "Banyak batang" }, kanan: "Hubungan lebih kuat" },
          { kiri: { emoji: "🚫", teks: "Tidak ada batang" }, kanan: "Sulit terhubung" },
          { kiri: { emoji: "📡", teks: "Wifi" }, kanan: "Internet di tempat dekat" },
          { kiri: { emoji: "📱", teks: "Sinyal seluler" }, kanan: "Untuk telepon" }
        ]
      }]
    }
  ]
};

/* ============================================================
 *  DEFINISI MATA PELAJARAN PLH (Pendidikan Lingkungan Hidup)
 *  (dipisah agar mudah dibaca; dipakai di array SUBJECTS)
 *  Modul: Memelihara Lingkungan (catatan bagian D).
 * ============================================================ */
const PLH_SUBJECT = {
  id: "plh",
  nama: "PLH",
  ikon: "🌳",
  warna: "#38b000",
  deskripsi: "Pendidikan Lingkungan Hidup: menjaga alam dan membuat kompos.",
  topik: [

    /* ========================================================
     *  MODUL 1 — MEMELIHARA LINGKUNGAN
     * ====================================================== */
    {
      id: "memelihara-lingkungan",
      judul: "Memelihara Lingkungan",
      emoji: "🌱",

      ringkasan: [
        // --- Wajib: sesuai catatan dari sekolah ---
        { emoji: "🤝", teks: "Setiap makhluk hidup perlu bantuan makhluk hidup lain dan lingkungannya." },
        { emoji: "🌱", teks: "Di lingkungannya, makhluk hidup dapat tumbuh dan berkembang." },
        { gambar: "img/plh/sawah.svg", teks: "Misalnya, lingkungan di sawah: (a) petani menanam padi di sawah, (b) padi perlu tanah yang gembur." },
        { gambar: "img/plh/kerbau-membajak.svg", teks: "(c) Petani perlu kerbau untuk menggemburkan tanah. (d) Padi juga perlu air untuk tumbuh. Hasil panen dijual petani." },
        { gambar: "img/plh/menyiram-bunga.svg", teks: "Contoh memelihara lingkungan: Ibu menyiram bunga, memilah sampah, dan membuang sampah pada tempatnya." },
        { emoji: "💚", teks: "Untuk itu, peliharalah lingkunganmu. Semua wajib memelihara lingkungan." },
        { emoji: "🛡️", teks: "Memelihara lingkungan artinya menjaga lingkungan biotik dan lingkungan abiotik agar tidak rusak. Dengan begitu, hidup akan nyaman." },
        // --- Tambahan ---
        { emoji: "🐄", teks: "Lingkungan biotik = semua makhluk hidup: manusia, hewan, dan tumbuhan (contoh: petani, kerbau, padi)." },
        { emoji: "🪨", teks: "Lingkungan abiotik = benda tak hidup: tanah, air, udara, batu, dan cahaya matahari." },
        { gambar: "img/plh/sampah-organik.svg", teks: "Sampah organik berasal dari makhluk hidup dan mudah membusuk: daun kering, sisa makanan, kulit buah." },
        { gambar: "img/plh/sampah-anorganik.svg", teks: "Sampah anorganik sulit membusuk: plastik, botol, kaleng, kaca. Pisahkan sampah organik dan anorganik di tempat sampah yang berbeda." },
        { gambar: "img/plh/buang-sampah.svg", teks: "Buanglah sampah pada tempatnya. Jangan membuang sampah ke sungai atau selokan." },
        { gambar: "img/plh/sungai-kotor.svg", teks: "Jika lingkungan tidak dipelihara: sungai kotor dan bau, ikan mati, timbul penyakit, dan bisa terjadi banjir." },
        { emoji: "♻️", teks: "Ingat 3R: Reduce (kurangi sampah), Reuse (gunakan kembali), Recycle (daur ulang)." },
        { gambar: "img/plh/menanam-pohon.svg", teks: "Menanam pohon membuat udara segar dan sejuk. Jangan merusak tanaman." },
        { gambar: "img/plh/hemat-air.svg", teks: "Hemat air: tutup keran setelah dipakai. Hemat listrik: matikan lampu jika tidak dipakai." },
        { emoji: "🧹", teks: "Kita bisa ikut kerja bakti membersihkan kelas, rumah, dan lingkungan sekitar bersama-sama." }
      ],

      /* ===== 4 SET SOAL PILIHAN GANDA ===== */
      pilihanGandaSets: [

        // ---------- SET 1 : Catatan (wajib) ----------
        [
          {
            soal: "Setiap makhluk hidup perlu bantuan makhluk hidup lain dan ....",
            pilihan: ["Lingkungannya", "Mainannya", "Televisi"],
            jawaban: 0,
            penjelasan: "Makhluk hidup perlu makhluk hidup lain dan lingkungannya."
          },
          {
            soal: "Di lingkungannya, makhluk hidup dapat ....",
            pilihan: ["Tumbuh dan berkembang", "Berubah menjadi batu", "Menghilang"],
            jawaban: 0,
            penjelasan: "Lingkungan yang baik membuat makhluk hidup tumbuh dan berkembang."
          },
          {
            gambar: "img/plh/sawah.svg",
            soal: "Petani menanam padi di ....",
            pilihan: ["Laut", "Sawah", "Gunung es"],
            jawaban: 1,
            penjelasan: "Padi ditanam petani di sawah."
          },
          {
            soal: "Agar tumbuh dengan baik, padi perlu tanah yang ....",
            pilihan: ["Keras", "Gembur", "Berbatu"],
            jawaban: 1,
            penjelasan: "Padi perlu tanah yang gembur."
          },
          {
            gambar: "img/plh/kerbau-membajak.svg",
            soal: "Petani perlu kerbau untuk ....",
            pilihan: ["Menggemburkan tanah", "Memanen ikan", "Menjaga rumah"],
            jawaban: 0,
            penjelasan: "Kerbau membantu petani membajak dan menggemburkan tanah."
          },
          {
            soal: "Selain tanah yang gembur, padi juga perlu ... untuk tumbuh.",
            pilihan: ["Pasir", "Air", "Plastik"],
            jawaban: 1,
            penjelasan: "Padi juga perlu air untuk tumbuh."
          },
          {
            soal: "Hasil panen padi kemudian ... oleh petani.",
            pilihan: ["Dibuang", "Dijual", "Dibakar"],
            jawaban: 1,
            penjelasan: "Hasil panen dijual petani."
          },
          {
            gambar: "img/plh/menyiram-bunga.svg",
            soal: "Ibu menyiram bunga. Kegiatan ini adalah contoh ....",
            pilihan: ["Merusak lingkungan", "Memelihara lingkungan", "Membuang sampah"],
            jawaban: 1,
            penjelasan: "Menyiram bunga adalah contoh memelihara lingkungan."
          },
          {
            soal: "Memelihara lingkungan artinya menjaga lingkungan biotik dan abiotik agar ....",
            pilihan: ["Tidak rusak", "Cepat kotor", "Menjadi sepi"],
            jawaban: 0,
            penjelasan: "Memelihara lingkungan = menjaga agar tidak rusak."
          },
          {
            soal: "Jika lingkungan dipelihara dengan baik, hidup akan ....",
            pilihan: ["Nyaman", "Susah", "Berbahaya"],
            jawaban: 0,
            penjelasan: "Dengan memelihara lingkungan, hidup akan nyaman."
          }
        ],

        // ---------- SET 2 : Contoh memelihara lingkungan ----------
        [
          {
            soal: "Siapa yang wajib memelihara lingkungan?",
            pilihan: ["Hanya petani", "Hanya guru", "Semua orang"],
            jawaban: 2,
            penjelasan: "Semua wajib memelihara lingkungan, termasuk kita."
          },
          {
            gambar: "img/plh/buang-sampah.svg",
            soal: "Sampah sebaiknya dibuang ....",
            pilihan: ["Ke sungai", "Pada tempatnya", "Di halaman sekolah"],
            jawaban: 1,
            penjelasan: "Buanglah sampah pada tempatnya."
          },
          {
            soal: "Berikut ini contoh memelihara lingkungan, KECUALI ....",
            pilihan: ["Memilah sampah", "Menyiram bunga", "Mencoret-coret tembok"],
            jawaban: 2,
            penjelasan: "Mencoret tembok membuat lingkungan kotor dan rusak."
          },
          {
            soal: "Memisahkan sampah plastik dan sampah daun disebut ....",
            pilihan: ["Memilah sampah", "Menyiram sampah", "Menyimpan sampah"],
            jawaban: 0,
            penjelasan: "Memilah sampah = memisahkan sampah sesuai jenisnya."
          },
          {
            gambar: "img/plh/menanam-pohon.svg",
            soal: "Menanam pohon membuat udara menjadi ....",
            pilihan: ["Segar dan sejuk", "Panas dan berdebu", "Bau"],
            jawaban: 0,
            penjelasan: "Pohon membuat udara segar dan sejuk."
          },
          {
            gambar: "img/plh/hemat-air.svg",
            soal: "Setelah mencuci tangan, keran air sebaiknya ....",
            pilihan: ["Dibiarkan menyala", "Ditutup kembali", "Dicabut"],
            jawaban: 1,
            penjelasan: "Tutup keran agar air tidak terbuang."
          },
          {
            soal: "Membersihkan lingkungan bersama-sama disebut ....",
            pilihan: ["Kerja bakti", "Lomba lari", "Upacara"],
            jawaban: 0,
            penjelasan: "Kerja bakti = membersihkan lingkungan bersama-sama."
          },
          {
            soal: "Sikap yang benar saat melihat bunga di taman adalah ....",
            pilihan: ["Memetiknya", "Menginjaknya", "Merawat dan tidak merusaknya"],
            jawaban: 2,
            penjelasan: "Bunga di taman dirawat agar tetap indah."
          },
          {
            soal: "Lampu kamar yang tidak dipakai sebaiknya ....",
            pilihan: ["Dimatikan", "Dinyalakan terus", "Dipecahkan"],
            jawaban: 0,
            penjelasan: "Mematikan lampu berarti menghemat listrik."
          },
          {
            soal: "Agar kelas tetap bersih, kita sebaiknya ....",
            pilihan: ["Membuang sampah di laci", "Piket membersihkan kelas", "Membiarkan kelas kotor"],
            jawaban: 1,
            penjelasan: "Piket kelas menjaga kelas tetap bersih dan nyaman."
          }
        ],

        // ---------- SET 3 : Biotik, abiotik & sampah ----------
        [
          {
            soal: "Lingkungan biotik adalah lingkungan yang terdiri dari ....",
            pilihan: ["Makhluk hidup", "Benda tak hidup", "Mainan"],
            jawaban: 0,
            penjelasan: "Biotik = makhluk hidup: manusia, hewan, tumbuhan."
          },
          {
            soal: "Berikut ini yang termasuk lingkungan abiotik adalah ....",
            pilihan: ["Kerbau", "Padi", "Air"],
            jawaban: 2,
            penjelasan: "Air adalah benda tak hidup (abiotik). Kerbau dan padi adalah makhluk hidup."
          },
          {
            soal: "Petani, kerbau, dan padi termasuk lingkungan ....",
            pilihan: ["Abiotik", "Biotik", "Buatan"],
            jawaban: 1,
            penjelasan: "Ketiganya makhluk hidup, jadi termasuk biotik."
          },
          {
            soal: "Tanah, batu, dan udara termasuk lingkungan ....",
            pilihan: ["Biotik", "Abiotik", "Hewan"],
            jawaban: 1,
            penjelasan: "Tanah, batu, dan udara tidak hidup: abiotik."
          },
          {
            gambar: "img/plh/sampah-organik.svg",
            soal: "Daun kering dan kulit buah termasuk sampah ....",
            pilihan: ["Organik", "Anorganik", "Logam"],
            jawaban: 0,
            penjelasan: "Sampah organik berasal dari makhluk hidup dan mudah membusuk."
          },
          {
            gambar: "img/plh/sampah-anorganik.svg",
            soal: "Botol plastik dan kaleng bekas termasuk sampah ....",
            pilihan: ["Organik", "Anorganik", "Daun"],
            jawaban: 1,
            penjelasan: "Plastik dan kaleng sulit membusuk: sampah anorganik."
          },
          {
            soal: "Sampah yang mudah membusuk adalah ....",
            pilihan: ["Sisa makanan", "Kantong plastik", "Pecahan kaca"],
            jawaban: 0,
            penjelasan: "Sisa makanan adalah sampah organik yang mudah membusuk."
          },
          {
            soal: "Menggunakan kembali botol bekas menjadi pot bunga disebut ....",
            pilihan: ["Reuse", "Reduce", "Membuang"],
            jawaban: 0,
            penjelasan: "Reuse = menggunakan kembali barang bekas."
          },
          {
            soal: "Membawa botol minum sendiri agar tidak membeli air kemasan termasuk ....",
            pilihan: ["Reduce (mengurangi sampah)", "Recycle", "Mengotori lingkungan"],
            jawaban: 0,
            penjelasan: "Reduce = mengurangi sampah."
          },
          {
            soal: "Mengolah sampah plastik menjadi barang baru disebut ....",
            pilihan: ["Reduce", "Recycle (daur ulang)", "Reuse"],
            jawaban: 1,
            penjelasan: "Recycle = mendaur ulang menjadi barang baru."
          }
        ],

        // ---------- SET 4 : Akibat & sikap ----------
        [
          {
            gambar: "img/plh/sungai-kotor.svg",
            soal: "Sungai pada gambar kotor karena ....",
            pilihan: ["Banyak ikan", "Orang membuang sampah ke sungai", "Hujan turun"],
            jawaban: 1,
            penjelasan: "Membuang sampah ke sungai membuat sungai kotor."
          },
          {
            soal: "Akibat membuang sampah ke sungai adalah ....",
            pilihan: ["Banjir", "Pelangi", "Udara sejuk"],
            jawaban: 0,
            penjelasan: "Sampah menyumbat sungai sehingga air meluap dan terjadi banjir."
          },
          {
            gambar: "img/plh/sungai-bersih.svg",
            soal: "Sungai yang bersih membuat ikan dapat ....",
            pilihan: ["Hidup dengan baik", "Mati", "Pergi ke darat"],
            jawaban: 0,
            penjelasan: "Ikan bisa hidup dan berkembang di air yang bersih."
          },
          {
            soal: "Lingkungan yang kotor dapat menyebabkan ....",
            pilihan: ["Penyakit", "Kesehatan", "Kebersihan"],
            jawaban: 0,
            penjelasan: "Lingkungan kotor menjadi tempat kuman dan nyamuk."
          },
          {
            soal: "Andi melihat sampah di halaman sekolah. Sikap Andi sebaiknya ....",
            pilihan: ["Membiarkannya", "Memungut dan membuangnya ke tempat sampah", "Menendangnya"],
            jawaban: 1,
            penjelasan: "Pungut sampah dan buang pada tempatnya."
          },
          {
            soal: "Mengapa padi tidak dapat tumbuh jika sawah kering?",
            pilihan: ["Padi perlu air untuk tumbuh", "Padi takut matahari", "Padi suka plastik"],
            jawaban: 0,
            penjelasan: "Padi perlu air untuk tumbuh."
          },
          {
            soal: "Menebang pohon sembarangan dapat menyebabkan ....",
            pilihan: ["Tanah longsor dan banjir", "Udara lebih segar", "Sungai lebih bersih"],
            jawaban: 0,
            penjelasan: "Akar pohon menahan tanah dan menyerap air."
          },
          {
            soal: "Kerbau membantu petani, dan petani memberi makan kerbau. Ini menunjukkan makhluk hidup saling ....",
            pilihan: ["Membutuhkan", "Bertengkar", "Menjauh"],
            jawaban: 0,
            penjelasan: "Makhluk hidup saling membutuhkan."
          },
          {
            soal: "Membakar sampah sembarangan membuat udara menjadi ....",
            pilihan: ["Bersih", "Kotor dan berasap", "Wangi"],
            jawaban: 1,
            penjelasan: "Asap pembakaran sampah mengotori udara."
          },
          {
            soal: "Lingkungan yang bersih dan terpelihara membuat hidup kita ....",
            pilihan: ["Sehat dan nyaman", "Mudah sakit", "Tidak bahagia"],
            jawaban: 0,
            penjelasan: "Lingkungan bersih = hidup sehat dan nyaman."
          }
        ]
      ],

      /* ===== 3 SET SOAL ESAI ===== */
      esaiSets: [

        // ---------- SET 1 : Catatan (wajib) ----------
        [
          {
            soal: "Apa yang dibutuhkan setiap makhluk hidup?",
            contohJawaban: "Setiap makhluk hidup perlu bantuan makhluk hidup lain dan lingkungannya."
          },
          {
            gambar: "img/plh/sawah.svg",
            soal: "Ceritakan contoh lingkungan di sawah (a, b, c, d)!",
            contohJawaban: "a. Petani menanam padi di sawah. b. Padi perlu tanah yang gembur. c. Petani perlu kerbau untuk menggemburkan tanah. d. Padi juga perlu air untuk tumbuh. Hasil panen dijual petani."
          },
          {
            soal: "Untuk apa petani memerlukan kerbau?",
            contohJawaban: "Untuk menggemburkan tanah sawah."
          },
          {
            soal: "Tuliskan contoh memelihara lingkungan!",
            contohJawaban: "Ibu menyiram bunga, memilah sampah, dan membuang sampah pada tempatnya."
          },
          {
            soal: "Apa arti memelihara lingkungan?",
            contohJawaban: "Memelihara lingkungan artinya menjaga lingkungan biotik dan lingkungan abiotik agar tidak rusak."
          },
          {
            soal: "Apa yang terjadi jika kita memelihara lingkungan?",
            contohJawaban: "Hidup akan nyaman."
          },
          {
            soal: "Siapa yang wajib memelihara lingkungan?",
            contohJawaban: "Semua orang wajib memelihara lingkungan, termasuk aku."
          }
        ],

        // ---------- SET 2 : Biotik, abiotik & sampah ----------
        [
          {
            soal: "Sebutkan 3 contoh lingkungan biotik di sawah!",
            contohJawaban: "Petani, kerbau, dan padi. (Bisa juga: burung, katak, ikan.)"
          },
          {
            soal: "Sebutkan 3 contoh lingkungan abiotik!",
            contohJawaban: "Tanah, air, dan udara. (Bisa juga: batu, cahaya matahari.)"
          },
          {
            gambar: "img/plh/sampah-organik.svg",
            soal: "Apa itu sampah organik? Berikan 2 contohnya!",
            contohJawaban: "Sampah yang berasal dari makhluk hidup dan mudah membusuk. Contoh: daun kering dan sisa makanan."
          },
          {
            gambar: "img/plh/sampah-anorganik.svg",
            soal: "Apa itu sampah anorganik? Berikan 2 contohnya!",
            contohJawaban: "Sampah yang sulit membusuk. Contoh: botol plastik dan kaleng bekas."
          },
          {
            soal: "Mengapa kita perlu memilah sampah?",
            contohJawaban: "Agar sampah organik bisa dijadikan pupuk dan sampah anorganik bisa didaur ulang, sehingga lingkungan tetap bersih."
          },
          {
            soal: "Apa arti 3R? Berikan satu contoh!",
            contohJawaban: "Reduce (kurangi), Reuse (gunakan kembali), Recycle (daur ulang). Contoh: botol bekas dijadikan pot bunga (reuse)."
          }
        ],

        // ---------- SET 3 : Sikapku ----------
        [
          {
            soal: "Sebutkan 3 cara memelihara lingkungan di rumah!",
            contohJawaban: "Menyiram tanaman, membuang sampah pada tempatnya, menutup keran air, dan mematikan lampu yang tidak dipakai."
          },
          {
            soal: "Sebutkan 2 cara memelihara lingkungan di sekolah!",
            contohJawaban: "Melaksanakan piket kelas dan tidak mencoret-coret meja atau tembok."
          },
          {
            gambar: "img/plh/sungai-kotor.svg",
            soal: "Apa akibatnya jika orang membuang sampah ke sungai?",
            contohJawaban: "Sungai menjadi kotor dan bau, ikan mati, dan bisa terjadi banjir."
          },
          {
            gambar: "img/plh/menanam-pohon.svg",
            soal: "Apa manfaat menanam pohon?",
            contohJawaban: "Udara menjadi segar dan sejuk, tempat berteduh, dan akar pohon menahan tanah agar tidak longsor."
          },
          {
            soal: "Apa yang kamu lakukan jika melihat temanmu membuang sampah sembarangan?",
            contohJawaban: "Menegur dengan sopan dan mengajaknya membuang sampah ke tempat sampah."
          },
          {
            soal: "Mengapa kita harus menghemat air?",
            contohJawaban: "Karena air sangat dibutuhkan makhluk hidup, seperti manusia, hewan, dan tanaman padi."
          }
        ]
      ],

      /* ===== 3 SET MENCOCOKKAN ===== */
      cocokkanSets: [

        // ---------- SET 1 : Lingkungan di sawah (wajib) ----------
        {
          instruksi: "Pasangkan dengan kebutuhannya di sawah!",
          pasangan: [
            { kiri: { emoji: "👨‍🌾", teks: "Petani" }, kanan: "Menanam padi di sawah" },
            { kiri: { emoji: "🌾", teks: "Padi" }, kanan: "Perlu tanah gembur dan air" },
            { kiri: { emoji: "🐃", teks: "Kerbau" }, kanan: "Menggemburkan tanah" },
            { kiri: { emoji: "💧", teks: "Air" }, kanan: "Membuat padi tumbuh" },
            { kiri: { emoji: "💰", teks: "Hasil panen" }, kanan: "Dijual petani" }
          ]
        },

        // ---------- SET 2 : Organik atau anorganik ----------
        {
          instruksi: "Pasangkan sampah dengan jenisnya!",
          pasangan: [
            { kiri: { emoji: "🍂", teks: "Daun kering" }, kanan: "Organik" },
            { kiri: { emoji: "🍌", teks: "Kulit pisang" }, kanan: "Organik" },
            { kiri: { emoji: "🧴", teks: "Botol plastik" }, kanan: "Anorganik" },
            { kiri: { emoji: "🥫", teks: "Kaleng bekas" }, kanan: "Anorganik" },
            { kiri: { emoji: "🍚", teks: "Sisa makanan" }, kanan: "Organik" }
          ]
        },

        // ---------- SET 3 : Perbuatan & akibat ----------
        {
          instruksi: "Pasangkan perbuatan dengan akibatnya!",
          pasangan: [
            { kiri: { gambar: "img/plh/menyiram-bunga.svg", teks: "Menyiram bunga" }, kanan: "Bunga tumbuh segar" },
            { kiri: { gambar: "img/plh/buang-sampah.svg", teks: "Buang sampah pada tempatnya" }, kanan: "Lingkungan bersih" },
            { kiri: { gambar: "img/plh/sungai-kotor.svg", teks: "Buang sampah ke sungai" }, kanan: "Banjir" },
            { kiri: { gambar: "img/plh/menanam-pohon.svg", teks: "Menanam pohon" }, kanan: "Udara segar" },
            { kiri: { gambar: "img/plh/hemat-air.svg", teks: "Menutup keran" }, kanan: "Air tidak terbuang" }
          ]
        }
      ]
    },

    {
      id: "kompos",
      judul: "Kompos dari Sampah Organik",
      emoji: "🍂",
      ringkasan: [
        { emoji: "🍂", teks: "Sampah organik berasal dari makhluk hidup, misalnya daun kering dan sisa makanan." },
        { emoji: "♻️", teks: "Sampah organik yang ditumpuk di tempat lembap lama-kelamaan membusuk." },
        { emoji: "🌱", teks: "Hasil busukan yang menyuburkan tanah disebut kompos." },
        { emoji: "🚫", teks: "Plastik, kaleng, dan kaca tidak menjadi kompos. Pisahkan mereka." },
        { emoji: "🧤", teks: "Saat mengumpulkan sampah, cuci tangan sesudahnya." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Daun kering termasuk sampah ....", pilihan: ["organik", "yang tidak bisa membusuk", "logam"], jawaban: 0, penjelasan: "Daun berasal dari tumbuhan dan dapat membusuk." },
          { soal: "Kompos berguna untuk ....", pilihan: ["menyuburkan tanah", "menambal sepatu", "mengisi baterai"], jawaban: 0, penjelasan: "Kompos dicampurkan agar tanah lebih subur." },
          { soal: "Plastik ....", pilihan: ["tidak dijadikan kompos", "cepat menjadi pupuk", "adalah sisa makanan"], jawaban: 0, penjelasan: "Plastik dipisahkan dari sampah organik." },
          { soal: "Sisa makanan dapat ....", pilihan: ["membusuk menjadi kompos", "berubah menjadi kaca", "dipakai sebagai pensil"], jawaban: 0, penjelasan: "Sisa makanan termasuk sampah organik." }
        ],
        [
          { soal: "Agar sampah organik membusuk, tempatnya perlu ....", pilihan: ["lembab", "kering dan terkunci rapat selamanya", "penuh plastik"], jawaban: 0, penjelasan: "Tempat yang lembap membantu pembusukan." },
          { soal: "Setelah memegang sampah, kita ....", pilihan: ["cuci tangan", "langsung makan", "mengusap mata"], jawaban: 0, penjelasan: "Tangan dicuci agar tetap bersih." },
          { soal: "Kaleng dan kaca ....", pilihan: ["dipisahkan dari kompos", "dicampur agar cepat menjadi pupuk", "adalah daun"], jawaban: 0, penjelasan: "Keduanya bukan sampah organik." },
          { soal: "Kompos berbeda dari sampah yang dibuang sembarangan karena kompos ....", pilihan: ["kembali menyuburkan tanah", "dibuang ke sungai", "dibakar di kelas"], jawaban: 0, penjelasan: "Kompos dipakai untuk tanah, bukan dibuang ke sungai." }
        ]
      ],
      esaiSets: [[
          { soal: "Apa itu kompos?", contohJawaban: "Pupuk yang terjadi saat sampah organik membusuk dan menyuburkan tanah." },
          { soal: "Sebutkan dua sampah yang dapat dikomposkan dan satu yang tidak.", contohJawaban: "Daun kering dan sisa makanan dapat dikomposkan. Plastik tidak." },
          { soal: "Apa yang dilakukan setelah mengumpulkan sampah?", contohJawaban: "Mencuci tangan." }
        ]],
      cocokkanSets: [{
        instruksi: "Pasangkan sampah dengan tempatnya!",
        pasangan: [
          { kiri: { emoji: "🍂", teks: "Daun kering" }, kanan: "Bahan kompos" },
          { kiri: { emoji: "🍎", teks: "Sisa makanan" }, kanan: "Sampah organik" },
          { kiri: { emoji: "🛍️", teks: "Plastik" }, kanan: "Bukan bahan kompos" },
          { kiri: { emoji: "🌱", teks: "Kompos" }, kanan: "Menyuburkan tanah" }
        ]
      }]
    }
  ]
};



/* ============================================================
 *  MATA PELAJARAN: BAHASA MANDARIN
 *  Kosakata pemula Kelas 2: hanzi, pinyin, dan arti bahasa Indonesia.
 * ============================================================ */
const BAHASA_MANDARIN_SUBJECT = {
  id: "bahasa-mandarin",
  nama: "Bahasa Mandarin",
  ikon: "🀄",
  warna: "#ff6b6b",
  deskripsi: "Belajar salam, angka, warna, keluarga, dan kata sehari-hari.",
  topik: [
    {
      id: "makanan-dan-minuman",
      judul: "Makanan dan Minuman (Unit 4)",
      emoji: "🍔",
      ringkasan: [
        { emoji: "🍔", teks: "汉堡包 (hàn bǎo bāo) = hamburger" },
        { emoji: "🌭", teks: "热狗 (rè gǒu) = hot dog" },
        { emoji: "🍗", teks: "炸鸡 (zhá jī) = ayam goreng" },
        { emoji: "🍟", teks: "薯条 (shǔ tiáo) = kentang goreng" },
        { emoji: "🍜", teks: "面条 (miàn tiáo) = mie" },
        { emoji: "🍚", teks: "米饭 (mǐ fàn) = nasi" },
        { emoji: "🍛", teks: "炒饭 (chǎo fàn) = nasi goreng" },
        { emoji: "🥚", teks: "鸡蛋 (jī dàn) = telur" },
        { emoji: "🍞", teks: "面包 (miàn bāo) = roti" }
      ],
      pilihanGandaSets: [
        [
          { soal: "Hamburger dalam bahasa Mandarin adalah ....", pilihan: ["汉堡包 (hàn bǎo bāo)", "热狗 (rè gǒu)", "炸鸡 (zhá jī)"], jawaban: 0, penjelasan: "汉堡包 (hàn bǎo bāo) berarti hamburger." },
          { soal: "Hot dog ditulis ....", pilihan: ["薯条 (shǔ tiáo)", "热狗 (rè gǒu)", "面条 (miàn tiáo)"], jawaban: 1, penjelasan: "热狗 (rè gǒu) = hot dog." },
          { soal: "Ayam goreng dalam bahasa Mandarin adalah ....", pilihan: ["炸鸡 (zhá jī)", "鸡蛋 (jī dàn)", "面包 (miàn bāo)"], jawaban: 0, penjelasan: "炸鸡 (zhá jī) berarti ayam goreng." },
          { soal: "Kentang goreng disebut ....", pilihan: ["薯条 (shǔ tiáo)", "面条 (miàn tiáo)", "炒饭 (chǎo fàn)"], jawaban: 0, penjelasan: "薯条 (shǔ tiáo) = kentang goreng." },
          { soal: "Mie dalam bahasa Mandarin adalah ....", pilihan: ["面包 (miàn bāo)", "面条 (miàn tiáo)", "鸡蛋 (jī dàn)"], jawaban: 1, penjelasan: "面条 (miàn tiáo) berarti mie." },
          { soal: "Telur disebut ....", pilihan: ["鸡蛋 (jī dàn)", "炸鸡 (zhá jī)", "热狗 (rè gǒu)"], jawaban: 0, penjelasan: "鸡蛋 (jī dàn) = telur." },
          { soal: "Roti dalam bahasa Mandarin adalah ....", pilihan: ["面包 (miàn bāo)", "炒饭 (chǎo fàn)", "汉堡包 (hàn bǎo bāo)"], jawaban: 0, penjelasan: "面包 (miàn bāo) berarti roti." },
          { soal: "Nasi goreng disebut ....", pilihan: ["炒饭 (chǎo fàn)", "面条 (miàn tiáo)", "薯条 (shǔ tiáo)"], jawaban: 0, penjelasan: "炒饭 (chǎo fàn) = nasi goreng." }
        ],
        [
          { soal: "Manakah yang berarti hot dog?", pilihan: ["汉堡包", "热狗", "炸鸡"], jawaban: 1, penjelasan: "热狗 (rè gǒu) = hot dog." },
          { soal: "Pinyin dari 面条 adalah ....", pilihan: ["miàn tiáo", "miàn bāo", "jī dàn"], jawaban: 0, penjelasan: "面条 dibaca miàn tiáo." },
          { soal: "面包 berarti ....", pilihan: ["roti", "mie", "telur"], jawaban: 0, penjelasan: "面包 (miàn bāo) = roti." },
          { soal: "炸鸡 adalah ....", pilihan: ["ayam goreng", "kentang goreng", "nasi goreng"], jawaban: 0, penjelasan: "炸鸡 (zhá jī) = ayam goreng." }
        ],
        [
          { soal: "Nasi putih dalam mangkuk disebut ....", pilihan: ["米饭 (mǐ fàn)", "炒饭 (chǎo fàn)", "面条 (miàn tiáo)"], jawaban: 0, penjelasan: "米饭 (mǐ fàn) = nasi. 炒饭 adalah nasi yang sudah digoreng." },
          { soal: "米饭 berarti ....", pilihan: ["nasi", "nasi goreng", "roti"], jawaban: 0, penjelasan: "米饭 (mǐ fàn) berarti nasi." },
          { soal: "Pinyin dari 米饭 adalah ....", pilihan: ["mǐ fàn", "chǎo fàn", "miàn tiáo"], jawaban: 0, penjelasan: "米饭 dibaca mǐ fàn." },
          { soal: "Mana yang bukan makanan yang sama? 米饭 adalah nasi, sedangkan 炒饭 adalah ....", pilihan: ["nasi goreng", "telur", "roti"], jawaban: 0, penjelasan: "炒 (chǎo) berarti menumis atau menggoreng, jadi 炒饭 adalah nasi goreng." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk hamburger.", contohJawaban: "汉堡包 (hàn bǎo bāo)" },
        { soal: "Tuliskan hanzi dan pinyin untuk mie.", contohJawaban: "面条 (miàn tiáo)" },
        { soal: "Tuliskan hanzi dan pinyin untuk nasi.", contohJawaban: "米饭 (mǐ fàn)" },
        { soal: "Tuliskan hanzi dan pinyin untuk roti.", contohJawaban: "面包 (miàn bāo)" }
      ]],
      cocokkanSets: [
        {
          instruksi: "Pasangkan makanan dengan hanzi-nya!",
          pasangan: [
            { kiri: { emoji: "🍔", teks: "Hamburger" }, kanan: "汉堡包" },
            { kiri: { emoji: "🌭", teks: "Hot dog" }, kanan: "热狗" },
            { kiri: { emoji: "🍗", teks: "Ayam goreng" }, kanan: "炸鸡" },
            { kiri: { emoji: "🍟", teks: "Kentang goreng" }, kanan: "薯条" },
            { kiri: { emoji: "🍜", teks: "Mie" }, kanan: "面条" },
            { kiri: { emoji: "🍞", teks: "Roti" }, kanan: "面包" }
          ]
        },
        {
          instruksi: "Pasangkan makanan di mangkuk dengan hanzi-nya!",
          pasangan: [
            { kiri: { emoji: "🍚", teks: "Nasi" }, kanan: "米饭" },
            { kiri: { emoji: "🍛", teks: "Nasi goreng" }, kanan: "炒饭" },
            { kiri: { emoji: "🥚", teks: "Telur" }, kanan: "鸡蛋" }
          ]
        }
      ]
    },
    {
      id: "salam-dan-perkenalan",
      judul: "Salam dan Perkenalan",
      emoji: "👋",
      ringkasan: [
        { emoji: "👋", teks: "Saat bertemu teman, ucapkan 你好 (nǐ hǎo). Artinya halo." },
        { emoji: "🌅", teks: "Pagi hari kita bilang 早上好 (zǎo shang hǎo). Artinya selamat pagi." },
        { emoji: "🧑‍🏫", teks: "Kepada guru kita bisa bilang 老师好 (lǎo shī hǎo). 老师 (lǎo shī) berarti guru." },
        { emoji: "🙏", teks: "谢谢 (xiè xie) berarti terima kasih. Jawabannya 不客气 (bú kè qi), artinya sama-sama." },
        { emoji: "🙋", teks: "Untuk pamit, ucapkan 再见 (zài jiàn). Artinya sampai jumpa." },
        { emoji: "🪪", teks: "我叫 (wǒ jiào) dipakai untuk menyebut nama. Contoh: 我叫 Lou." },
        { emoji: "❓", teks: "Kamu bertanya nama teman dengan 你叫什么名字？ (nǐ jiào shén me míng zi?)" },
        { emoji: "🎒", teks: "我是学生 (wǒ shì xué sheng) berarti saya murid." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Halo dalam bahasa Mandarin adalah ....", pilihan: ["你好 (nǐ hǎo)", "再见 (zài jiàn)", "谢谢 (xiè xie)"], jawaban: 0, penjelasan: "你好 (nǐ hǎo) = halo." },
          { soal: "早上好 berarti ....", pilihan: ["selamat pagi", "sampai jumpa", "terima kasih"], jawaban: 0, penjelasan: "早上好 (zǎo shang hǎo) diucapkan pada pagi hari." },
          { soal: "Terima kasih ditulis ....", pilihan: ["再见", "谢谢 (xiè xie)", "你好"], jawaban: 1, penjelasan: "谢谢 (xiè xie) = terima kasih." },
          { soal: "再见 berarti ....", pilihan: ["sampai jumpa", "selamat pagi", "nama saya"], jawaban: 0, penjelasan: "再见 (zài jiàn) = sampai jumpa." }
        ],
        [
          { soal: "我叫 Lou berarti ....", pilihan: ["Nama saya Lou", "Sampai jumpa, Lou", "Terima kasih, Lou"], jawaban: 0, penjelasan: "我叫 (wǒ jiào) dipakai untuk memperkenalkan nama." },
          { soal: "Pertanyaan siapa namamu adalah ....", pilihan: ["你叫什么名字？", "早上好", "不客气"], jawaban: 0, penjelasan: "你叫什么名字？ (nǐ jiào shén me míng zi?) = Siapa namamu?" },
          { soal: "老师 berarti ....", pilihan: ["guru", "murid", "teman"], jawaban: 0, penjelasan: "老师 (lǎo shī) = guru. Murid adalah 学生 (xué sheng)." },
          { soal: "Kalau teman bilang 谢谢, jawaban yang sopan adalah ....", pilihan: ["不客气", "再见", "名字"], jawaban: 0, penjelasan: "不客气 (bú kè qi) berarti sama-sama." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk halo.", contohJawaban: "你好 (nǐ hǎo)" },
        { soal: "Tuliskan hanzi dan pinyin untuk terima kasih.", contohJawaban: "谢谢 (xiè xie)" },
        { soal: "Bagaimana cara bilang nama saya Lou?", contohJawaban: "我叫 Lou (wǒ jiào Lou)." },
        { soal: "Apa arti 我是学生?", contohJawaban: "Saya murid. 我是 (wǒ shì) = saya adalah, 学生 (xué sheng) = murid." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan salam dengan artinya!",
        pasangan: [
          { kiri: { emoji: "👋", teks: "你好" }, kanan: "Halo" },
          { kiri: { emoji: "🌅", teks: "早上好" }, kanan: "Selamat pagi" },
          { kiri: { emoji: "🙏", teks: "谢谢" }, kanan: "Terima kasih" },
          { kiri: { emoji: "🙋", teks: "再见" }, kanan: "Sampai jumpa" },
          { kiri: { emoji: "🪪", teks: "我叫" }, kanan: "Nama saya" }
        ]
      }]
    },
    {
      id: "angka-1-10",
      judul: "Angka 1 sampai 10",
      emoji: "🔢",
      ringkasan: [
        { emoji: "1️⃣", teks: "一 (yī) = 1" },
        { emoji: "2️⃣", teks: "二 (èr) = 2" },
        { emoji: "3️⃣", teks: "三 (sān) = 3" },
        { emoji: "4️⃣", teks: "四 (sì) = 4. Jangan tertukar dengan 十." },
        { emoji: "5️⃣", teks: "五 (wǔ) = 5" },
        { emoji: "6️⃣", teks: "六 (liù) = 6" },
        { emoji: "7️⃣", teks: "七 (qī) = 7" },
        { emoji: "8️⃣", teks: "八 (bā) = 8" },
        { emoji: "9️⃣", teks: "九 (jiǔ) = 9" },
        { emoji: "🔟", teks: "十 (shí) = 10" }
      ],
      pilihanGandaSets: [
        [
          { soal: "Angka 1 dalam bahasa Mandarin adalah ....", pilihan: ["一 (yī)", "二 (èr)", "三 (sān)"], jawaban: 0, penjelasan: "一 (yī) = 1." },
          { soal: "三 berarti ....", pilihan: ["3", "4", "10"], jawaban: 0, penjelasan: "三 (sān) = 3." },
          { soal: "Angka 5 ditulis ....", pilihan: ["五 (wǔ)", "六 (liù)", "九 (jiǔ)"], jawaban: 0, penjelasan: "五 (wǔ) = 5." },
          { soal: "八 berarti ....", pilihan: ["8", "7", "9"], jawaban: 0, penjelasan: "八 (bā) = 8." }
        ],
        [
          { soal: "Mana yang berarti 4?", pilihan: ["四 (sì)", "十 (shí)", "七 (qī)"], jawaban: 0, penjelasan: "四 (sì) = 4. 十 (shí) = 10." },
          { soal: "十 berarti ....", pilihan: ["10", "4", "1"], jawaban: 0, penjelasan: "十 (shí) = 10." },
          { soal: "Pinyin dari 九 adalah ....", pilihan: ["jiǔ", "qī", "liù"], jawaban: 0, penjelasan: "九 dibaca jiǔ dan berarti 9." },
          { soal: "Setelah 六, angka berikutnya adalah ....", pilihan: ["七 (qī)", "五 (wǔ)", "四 (sì)"], jawaban: 0, penjelasan: "六 = 6, lalu 七 = 7." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi angka 1, 2, dan 3 beserta pinyin-nya.", contohJawaban: "一 (yī), 二 (èr), 三 (sān)." },
        { soal: "Apa beda 四 dan 十?", contohJawaban: "四 (sì) berarti 4. 十 (shí) berarti 10." },
        { soal: "Tuliskan hanzi dan pinyin untuk angka 8 dan 9.", contohJawaban: "八 (bā) = 8. 九 (jiǔ) = 9." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan angka dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "1️⃣", teks: "1" }, kanan: "一" },
          { kiri: { emoji: "2️⃣", teks: "2" }, kanan: "二" },
          { kiri: { emoji: "3️⃣", teks: "3" }, kanan: "三" },
          { kiri: { emoji: "5️⃣", teks: "5" }, kanan: "五" },
          { kiri: { emoji: "🔟", teks: "10" }, kanan: "十" }
        ]
      }]
    },
    {
      id: "warna",
      judul: "Warna",
      emoji: "🎨",
      ringkasan: [
        { emoji: "🔴", teks: "红色 (hóng sè) = merah" },
        { emoji: "🟡", teks: "黄色 (huáng sè) = kuning" },
        { emoji: "🔵", teks: "蓝色 (lán sè) = biru" },
        { emoji: "🟢", teks: "绿色 (lǜ sè) = hijau" },
        { emoji: "⚪", teks: "白色 (bái sè) = putih" },
        { emoji: "⚫", teks: "黑色 (hēi sè) = hitam" },
        { emoji: "🖍️", teks: "Kata 色 (sè) berarti warna. Jadi 红色 adalah warna merah." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Merah dalam bahasa Mandarin adalah ....", pilihan: ["红色 (hóng sè)", "蓝色 (lán sè)", "白色 (bái sè)"], jawaban: 0, penjelasan: "红色 (hóng sè) = merah." },
          { soal: "黄色 berarti ....", pilihan: ["kuning", "hijau", "hitam"], jawaban: 0, penjelasan: "黄色 (huáng sè) = kuning." },
          { soal: "Biru ditulis ....", pilihan: ["蓝色 (lán sè)", "绿色 (lǜ sè)", "红色 (hóng sè)"], jawaban: 0, penjelasan: "蓝色 (lán sè) = biru." },
          { soal: "黑色 berarti ....", pilihan: ["hitam", "putih", "kuning"], jawaban: 0, penjelasan: "黑色 (hēi sè) = hitam. Putih adalah 白色." }
        ],
        [
          { soal: "绿色 berarti ....", pilihan: ["hijau", "merah", "biru"], jawaban: 0, penjelasan: "绿色 (lǜ sè) = hijau." },
          { soal: "Putih dalam bahasa Mandarin adalah ....", pilihan: ["白色 (bái sè)", "黑色 (hēi sè)", "黄色 (huáng sè)"], jawaban: 0, penjelasan: "白色 (bái sè) = putih." },
          { soal: "色 (sè) berarti ....", pilihan: ["warna", "angka", "nama"], jawaban: 0, penjelasan: "色 artinya warna. 红色 = warna merah." },
          { soal: "Pinyin dari 蓝色 adalah ....", pilihan: ["lán sè", "hóng sè", "lǜ sè"], jawaban: 0, penjelasan: "蓝 dibaca lán, 色 dibaca sè." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk merah dan kuning.", contohJawaban: "红色 (hóng sè) = merah. 黄色 (huáng sè) = kuning." },
        { soal: "Apa arti 绿色 dan 黑色?", contohJawaban: "绿色 = hijau. 黑色 = hitam." },
        { soal: "Apa arti kata 色?", contohJawaban: "色 (sè) berarti warna." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan warna dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "🔴", teks: "Merah" }, kanan: "红色" },
          { kiri: { emoji: "🟡", teks: "Kuning" }, kanan: "黄色" },
          { kiri: { emoji: "🔵", teks: "Biru" }, kanan: "蓝色" },
          { kiri: { emoji: "🟢", teks: "Hijau" }, kanan: "绿色" },
          { kiri: { emoji: "⚪", teks: "Putih" }, kanan: "白色" },
          { kiri: { emoji: "⚫", teks: "Hitam" }, kanan: "黑色" }
        ]
      }]
    },
    {
      id: "anggota-keluarga",
      judul: "Anggota Keluarga",
      emoji: "👪",
      ringkasan: [
        { emoji: "👨", teks: "爸爸 (bà ba) = ayah" },
        { emoji: "👩", teks: "妈妈 (mā ma) = ibu" },
        { emoji: "👦", teks: "哥哥 (gē ge) = kakak laki-laki" },
        { emoji: "👧", teks: "姐姐 (jiě jie) = kakak perempuan" },
        { emoji: "🧒", teks: "弟弟 (dì di) = adik laki-laki" },
        { emoji: "👶", teks: "妹妹 (mèi mei) = adik perempuan" },
        { emoji: "👴", teks: "爷爷 (yé ye) = kakek" },
        { emoji: "👵", teks: "奶奶 (nǎi nai) = nenek" }
      ],
      pilihanGandaSets: [
        [
          { soal: "Ayah dalam bahasa Mandarin adalah ....", pilihan: ["爸爸 (bà ba)", "妈妈 (mā ma)", "爷爷 (yé ye)"], jawaban: 0, penjelasan: "爸爸 (bà ba) = ayah. Ibu adalah 妈妈." },
          { soal: "妈妈 berarti ....", pilihan: ["ibu", "nenek", "kakak perempuan"], jawaban: 0, penjelasan: "妈妈 (mā ma) = ibu." },
          { soal: "Kakak laki-laki disebut ....", pilihan: ["哥哥 (gē ge)", "弟弟 (dì di)", "妹妹 (mèi mei)"], jawaban: 0, penjelasan: "哥哥 (gē ge) = kakak laki-laki. 弟弟 = adik laki-laki." },
          { soal: "姐姐 berarti ....", pilihan: ["kakak perempuan", "adik perempuan", "ibu"], jawaban: 0, penjelasan: "姐姐 (jiě jie) = kakak perempuan." }
        ],
        [
          { soal: "弟弟 berarti ....", pilihan: ["adik laki-laki", "kakek", "ayah"], jawaban: 0, penjelasan: "弟弟 (dì di) = adik laki-laki." },
          { soal: "Adik perempuan disebut ....", pilihan: ["妹妹 (mèi mei)", "姐姐 (jiě jie)", "奶奶 (nǎi nai)"], jawaban: 0, penjelasan: "妹妹 (mèi mei) = adik perempuan." },
          { soal: "爷爷 berarti ....", pilihan: ["kakek", "nenek", "ayah"], jawaban: 0, penjelasan: "爷爷 (yé ye) = kakek. Nenek adalah 奶奶." },
          { soal: "奶奶 berarti ....", pilihan: ["nenek", "ibu", "kakak"], jawaban: 0, penjelasan: "奶奶 (nǎi nai) = nenek." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk ayah dan ibu.", contohJawaban: "爸爸 (bà ba) = ayah. 妈妈 (mā ma) = ibu." },
        { soal: "Apa beda 哥哥 dan 弟弟?", contohJawaban: "哥哥 (gē ge) = kakak laki-laki. 弟弟 (dì di) = adik laki-laki." },
        { soal: "Tuliskan hanzi untuk kakek dan nenek.", contohJawaban: "爷爷 = kakek. 奶奶 = nenek." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan anggota keluarga dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "👨", teks: "Ayah" }, kanan: "爸爸" },
          { kiri: { emoji: "👩", teks: "Ibu" }, kanan: "妈妈" },
          { kiri: { emoji: "👦", teks: "Kakak laki-laki" }, kanan: "哥哥" },
          { kiri: { emoji: "👧", teks: "Kakak perempuan" }, kanan: "姐姐" },
          { kiri: { emoji: "👴", teks: "Kakek" }, kanan: "爷爷" },
          { kiri: { emoji: "👵", teks: "Nenek" }, kanan: "奶奶" }
        ]
      }]
    },
    {
      id: "anggota-tubuh",
      judul: "Anggota Tubuh",
      emoji: "🙋",
      ringkasan: [
        { emoji: "🙂", teks: "头 (tóu) = kepala" },
        { emoji: "👀", teks: "眼睛 (yǎn jing) = mata" },
        { emoji: "👃", teks: "鼻子 (bí zi) = hidung" },
        { emoji: "👄", teks: "嘴巴 (zuǐ ba) = mulut" },
        { emoji: "👂", teks: "耳朵 (ěr duo) = telinga" },
        { emoji: "✋", teks: "手 (shǒu) = tangan" },
        { emoji: "🦶", teks: "脚 (jiǎo) = kaki" }
      ],
      pilihanGandaSets: [
        [
          { soal: "Kepala dalam bahasa Mandarin adalah ....", pilihan: ["头 (tóu)", "手 (shǒu)", "脚 (jiǎo)"], jawaban: 0, penjelasan: "头 (tóu) = kepala." },
          { soal: "眼睛 berarti ....", pilihan: ["mata", "telinga", "mulut"], jawaban: 0, penjelasan: "眼睛 (yǎn jing) = mata." },
          { soal: "Hidung disebut ....", pilihan: ["鼻子 (bí zi)", "嘴巴 (zuǐ ba)", "耳朵 (ěr duo)"], jawaban: 0, penjelasan: "鼻子 (bí zi) = hidung." },
          { soal: "嘴巴 berarti ....", pilihan: ["mulut", "mata", "kaki"], jawaban: 0, penjelasan: "嘴巴 (zuǐ ba) = mulut." }
        ],
        [
          { soal: "耳朵 berarti ....", pilihan: ["telinga", "hidung", "tangan"], jawaban: 0, penjelasan: "耳朵 (ěr duo) = telinga." },
          { soal: "Tangan ditulis ....", pilihan: ["手 (shǒu)", "脚 (jiǎo)", "头 (tóu)"], jawaban: 0, penjelasan: "手 (shǒu) = tangan. Kaki adalah 脚 (jiǎo)." },
          { soal: "脚 berarti ....", pilihan: ["kaki", "tangan", "kepala"], jawaban: 0, penjelasan: "脚 (jiǎo) = kaki." },
          { soal: "Kita mendengar dengan ....", pilihan: ["耳朵", "鼻子", "嘴巴"], jawaban: 0, penjelasan: "耳朵 adalah telinga, alat untuk mendengar." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk mata dan telinga.", contohJawaban: "眼睛 (yǎn jing) = mata. 耳朵 (ěr duo) = telinga." },
        { soal: "Apa arti 手 dan 脚?", contohJawaban: "手 (shǒu) = tangan. 脚 (jiǎo) = kaki." },
        { soal: "Sebutkan tiga anggota tubuh yang ada di kepala, dalam bahasa Indonesia atau hanzi.", contohJawaban: "Mata (眼睛), hidung (鼻子), dan mulut (嘴巴). Telinga (耳朵) juga boleh." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan anggota tubuh dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "👀", teks: "Mata" }, kanan: "眼睛" },
          { kiri: { emoji: "👃", teks: "Hidung" }, kanan: "鼻子" },
          { kiri: { emoji: "👄", teks: "Mulut" }, kanan: "嘴巴" },
          { kiri: { emoji: "👂", teks: "Telinga" }, kanan: "耳朵" },
          { kiri: { emoji: "✋", teks: "Tangan" }, kanan: "手" },
          { kiri: { emoji: "🦶", teks: "Kaki" }, kanan: "脚" }
        ]
      }]
    },
    {
      id: "hewan",
      judul: "Hewan",
      emoji: "🐾",
      ringkasan: [
        { emoji: "🐱", teks: "猫 (māo) = kucing" },
        { emoji: "🐶", teks: "狗 (gǒu) = anjing" },
        { emoji: "🐦", teks: "鸟 (niǎo) = burung" },
        { emoji: "🐟", teks: "鱼 (yú) = ikan" },
        { emoji: "🐴", teks: "马 (mǎ) = kuda" },
        { emoji: "🐰", teks: "兔子 (tù zi) = kelinci" },
        { emoji: "🐮", teks: "牛 (niú) = sapi" },
        { emoji: "🐑", teks: "羊 (yáng) = domba" }
      ],
      pilihanGandaSets: [
        [
          { soal: "Kucing dalam bahasa Mandarin adalah ....", pilihan: ["猫 (māo)", "狗 (gǒu)", "鸟 (niǎo)"], jawaban: 0, penjelasan: "猫 (māo) = kucing. Anjing adalah 狗." },
          { soal: "狗 berarti ....", pilihan: ["anjing", "ikan", "kuda"], jawaban: 0, penjelasan: "狗 (gǒu) = anjing." },
          { soal: "Burung disebut ....", pilihan: ["鸟 (niǎo)", "鱼 (yú)", "马 (mǎ)"], jawaban: 0, penjelasan: "鸟 (niǎo) = burung." },
          { soal: "鱼 berarti ....", pilihan: ["ikan", "kucing", "sapi"], jawaban: 0, penjelasan: "鱼 (yú) = ikan." }
        ],
        [
          { soal: "马 berarti ....", pilihan: ["kuda", "domba", "kelinci"], jawaban: 0, penjelasan: "马 (mǎ) = kuda." },
          { soal: "Kelinci ditulis ....", pilihan: ["兔子 (tù zi)", "牛 (niú)", "羊 (yáng)"], jawaban: 0, penjelasan: "兔子 (tù zi) = kelinci." },
          { soal: "牛 berarti ....", pilihan: ["sapi", "kuda", "burung"], jawaban: 0, penjelasan: "牛 (niú) = sapi." },
          { soal: "羊 berarti ....", pilihan: ["domba", "ikan", "anjing"], jawaban: 0, penjelasan: "羊 (yáng) = domba." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk kucing dan anjing.", contohJawaban: "猫 (māo) = kucing. 狗 (gǒu) = anjing." },
        { soal: "Apa arti 鸟 dan 鱼?", contohJawaban: "鸟 (niǎo) = burung. 鱼 (yú) = ikan." },
        { soal: "Tuliskan hanzi untuk kelinci dan sapi.", contohJawaban: "兔子 = kelinci. 牛 = sapi." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan hewan dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "🐱", teks: "Kucing" }, kanan: "猫" },
          { kiri: { emoji: "🐶", teks: "Anjing" }, kanan: "狗" },
          { kiri: { emoji: "🐦", teks: "Burung" }, kanan: "鸟" },
          { kiri: { emoji: "🐟", teks: "Ikan" }, kanan: "鱼" },
          { kiri: { emoji: "🐴", teks: "Kuda" }, kanan: "马" },
          { kiri: { emoji: "🐰", teks: "Kelinci" }, kanan: "兔子" }
        ]
      }]
    },
    {
      id: "hari-dalam-seminggu",
      judul: "Hari dalam Seminggu",
      emoji: "📅",
      ringkasan: [
        { emoji: "1️⃣", teks: "Hari dalam bahasa Mandarin dimulai dengan 星期 (xīng qī)." },
        { emoji: "📌", teks: "星期一 (xīng qī yī) = Senin. Angka 一 berarti hari ke-1." },
        { emoji: "2️⃣", teks: "星期二 (xīng qī èr) = Selasa." },
        { emoji: "3️⃣", teks: "星期三 (xīng qī sān) = Rabu." },
        { emoji: "4️⃣", teks: "星期四 (xīng qī sì) = Kamis." },
        { emoji: "5️⃣", teks: "星期五 (xīng qī wǔ) = Jumat." },
        { emoji: "6️⃣", teks: "星期六 (xīng qī liù) = Sabtu." },
        { emoji: "☀️", teks: "Minggu bisa disebut 星期日 (xīng qī rì) atau 星期天 (xīng qī tiān)." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Senin dalam bahasa Mandarin adalah ....", pilihan: ["星期一", "星期二", "星期日"], jawaban: 0, penjelasan: "星期一 (xīng qī yī) = Senin." },
          { soal: "星期二 berarti ....", pilihan: ["Selasa", "Rabu", "Jumat"], jawaban: 0, penjelasan: "二 = 2, jadi 星期二 = Selasa." },
          { soal: "Rabu ditulis ....", pilihan: ["星期三", "星期四", "星期六"], jawaban: 0, penjelasan: "星期三 (xīng qī sān) = Rabu." },
          { soal: "星期五 berarti ....", pilihan: ["Jumat", "Kamis", "Sabtu"], jawaban: 0, penjelasan: "五 = 5, jadi 星期五 = Jumat." }
        ],
        [
          { soal: "星期六 berarti ....", pilihan: ["Sabtu", "Minggu", "Senin"], jawaban: 0, penjelasan: "六 = 6, jadi 星期六 = Sabtu." },
          { soal: "星期日 berarti ....", pilihan: ["Minggu", "Senin", "Kamis"], jawaban: 0, penjelasan: "星期日 (xīng qī rì) = Minggu." },
          { soal: "Cara lain menulis Minggu adalah ....", pilihan: ["星期天", "星期一", "星期三"], jawaban: 0, penjelasan: "星期天 (xīng qī tiān) juga berarti Minggu." },
          { soal: "Kata 星期 berarti ....", pilihan: ["minggu (pekan)", "warna", "hewan"], jawaban: 0, penjelasan: "星期 (xīng qī) dipakai di depan nama hari." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi untuk Senin dan Selasa.", contohJawaban: "星期一 = Senin. 星期二 = Selasa." },
        { soal: "Mengapa Senin memakai angka 一?", contohJawaban: "Karena Senin adalah hari ke-1. 一 (yī) berarti 1." },
        { soal: "Tuliskan dua cara menulis hari Minggu.", contohJawaban: "星期日 (xīng qī rì) atau 星期天 (xīng qī tiān)." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan hari dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "1️⃣", teks: "Senin" }, kanan: "星期一" },
          { kiri: { emoji: "2️⃣", teks: "Selasa" }, kanan: "星期二" },
          { kiri: { emoji: "3️⃣", teks: "Rabu" }, kanan: "星期三" },
          { kiri: { emoji: "5️⃣", teks: "Jumat" }, kanan: "星期五" },
          { kiri: { emoji: "☀️", teks: "Minggu" }, kanan: "星期日" }
        ]
      }]
    },
    {
      id: "benda-di-sekolah",
      judul: "Benda di Sekolah",
      emoji: "🏫",
      ringkasan: [
        { emoji: "📒", teks: "书 (shū) = buku" },
        { emoji: "🖊️", teks: "笔 (bǐ) = pena" },
        { emoji: "✏️", teks: "铅笔 (qiān bǐ) = pensil" },
        { emoji: "🎒", teks: "书包 (shū bāo) = tas sekolah" },
        { emoji: "📏", teks: "尺子 (chǐ zi) = penggaris" },
        { emoji: "⬜", teks: "橡皮 (xiàng pí) = penghapus" },
        { emoji: "🪑", teks: "桌子 (zhuō zi) = meja. 椅子 (yǐ zi) = kursi." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Buku dalam bahasa Mandarin adalah ....", pilihan: ["书 (shū)", "笔 (bǐ)", "尺子 (chǐ zi)"], jawaban: 0, penjelasan: "书 (shū) = buku." },
          { soal: "笔 berarti ....", pilihan: ["pena", "meja", "kursi"], jawaban: 0, penjelasan: "笔 (bǐ) = pena." },
          { soal: "Pensil disebut ....", pilihan: ["铅笔 (qiān bǐ)", "橡皮 (xiàng pí)", "书包 (shū bāo)"], jawaban: 0, penjelasan: "铅笔 (qiān bǐ) = pensil. 铅 berarti timah, 笔 berarti alat tulis." },
          { soal: "书包 berarti ....", pilihan: ["tas sekolah", "penggaris", "penghapus"], jawaban: 0, penjelasan: "书 = buku, 包 = tas, jadi 书包 = tas sekolah." }
        ],
        [
          { soal: "尺子 berarti ....", pilihan: ["penggaris", "buku", "kursi"], jawaban: 0, penjelasan: "尺子 (chǐ zi) = penggaris." },
          { soal: "Penghapus ditulis ....", pilihan: ["橡皮 (xiàng pí)", "桌子 (zhuō zi)", "椅子 (yǐ zi)"], jawaban: 0, penjelasan: "橡皮 (xiàng pí) = penghapus." },
          { soal: "桌子 berarti ....", pilihan: ["meja", "kursi", "tas"], jawaban: 0, penjelasan: "桌子 (zhuō zi) = meja. Kursi adalah 椅子." },
          { soal: "椅子 berarti ....", pilihan: ["kursi", "pensil", "buku"], jawaban: 0, penjelasan: "椅子 (yǐ zi) = kursi." }
        ]
      ],
      esaiSets: [[
        { soal: "Tuliskan hanzi dan pinyin untuk buku dan tas sekolah.", contohJawaban: "书 (shū) = buku. 书包 (shū bāo) = tas sekolah." },
        { soal: "Apa beda 笔 dan 铅笔?", contohJawaban: "笔 (bǐ) = pena. 铅笔 (qiān bǐ) = pensil." },
        { soal: "Tuliskan hanzi untuk meja dan kursi.", contohJawaban: "桌子 = meja. 椅子 = kursi." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan benda sekolah dengan hanzi-nya!",
        pasangan: [
          { kiri: { emoji: "📒", teks: "Buku" }, kanan: "书" },
          { kiri: { emoji: "✏️", teks: "Pensil" }, kanan: "铅笔" },
          { kiri: { emoji: "🎒", teks: "Tas sekolah" }, kanan: "书包" },
          { kiri: { emoji: "📏", teks: "Penggaris" }, kanan: "尺子" },
          { kiri: { emoji: "⬜", teks: "Penghapus" }, kanan: "橡皮" },
          { kiri: { emoji: "🪑", teks: "Kursi" }, kanan: "椅子" }
        ]
      }]
    }
  ]
};

/* ============================================================
 *  MATA PELAJARAN: SBDP (Seni Budaya dan Prakarya)
 *  Kelas 2 SD — bunyi, rupa, musik, tari, dan karya tempel.
 * ============================================================ */
const SBDP_SUBJECT = {
  id: "sbdp",
  nama: "SBDP",
  ikon: "🎵",
  warna: "#9b5de5",
  deskripsi: "Belajar bunyi, rupa, lagu, tari, dan karya tempel.",
  topik: [
    {
      id: "bunyi",
      judul: "Bunyi",
      emoji: "🔊",
      ringkasan: [
        { emoji: "🔊", teks: "Bunyi berasal dari benda yang bergetar." },
        { emoji: "🗣️", teks: "Contoh bunyi dari getaran: suara manusia berbicara dan suara lonceng." },
        { emoji: "📍", teks: "Sumber bunyi adalah benda atau sesuatu yang menghasilkan bunyi." },
        { emoji: "👨", teks: "Sumber bunyi dari manusia: berbicara dan bernyanyi." },
        { emoji: "🐦", teks: "Sumber bunyi dari hewan: burung berkicau." },
        { emoji: "🎸", teks: "Sumber bunyi dari alat musik: gitar dan angklung." },
        { emoji: "🔔", teks: "Sumber bunyi dari benda di sekitar: bel dan lonceng." },
        { emoji: "🌧️", teks: "Bunyi alam berasal dari alam atau makhluk hidup. Contoh: suara hujan dan suara burung." },
        { emoji: "🎺", teks: "Bunyi buatan dihasilkan benda atau alat yang dibuat atau dimainkan manusia. Contoh: angklung dan peluit." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Bunyi berasal dari benda yang ....", pilihan: ["Bergetar", "Diam", "Berwarna"], jawaban: 0, penjelasan: "Bunyi berasal dari benda yang bergetar." },
          { soal: "Contoh sumber bunyi dari manusia adalah ....", pilihan: ["Bercakap dan bernyanyi", "Berlari", "Tidur"], jawaban: 0, penjelasan: "Manusia menghasilkan bunyi dengan berbicara dan bernyanyi." },
          { soal: "Contoh sumber bunyi dari hewan adalah ....", pilihan: ["Burung berkicau", "Mobil", "Bel"], jawaban: 0, penjelasan: "Burung berkicau adalah sumber bunyi dari hewan." },
          { soal: "Bunyi alam berasal dari ....", pilihan: ["Alam atau makhluk hidup", "Alat musik", "Manusia saja"], jawaban: 0, penjelasan: "Bunyi alam berasal dari alam atau makhluk hidup, contoh: hujan, burung." },
          { soal: "Bunyi buatan dihasilkan oleh ....", pilihan: ["Benda atau alat buatan manusia", "Hujan", "Angin"], jawaban: 0, penjelasan: "Bunyi buatan seperti angklung dan peluit dibuat atau dimainkan manusia." },
          { soal: "Contoh bunyi buatan adalah ....", pilihan: ["Suara angklung", "Suara hujan", "Suara burung"], jawaban: 0, penjelasan: "Angklung adalah alat musik buatan manusia." }
        ],
        [
          { soal: "Ibu: 'Dengar suara lonceng itu.' Lou: 'Itu bunyi buatan, Bu.' Apakah Lou benar?", pilihan: ["Ya", "Tidak", "Tidak tahu"], jawaban: 0, penjelasan: "Lonceng adalah benda buatan yang menghasilkan bunyi." },
          { soal: "Sumber bunyi dari alat musik contohnya ....", pilihan: ["Gitar dan angklung", "Hujan dan angin", "Burung dan manusia"], jawaban: 0, penjelasan: "Gitar dan angklung adalah alat musik." },
          { soal: "Bel dan lonceng termasuk ....", pilihan: ["Benda di sekitar yang berbunyi", "Bunyi alam", "Tidak berbunyi"], jawaban: 0, penjelasan: "Bel dan lonceng adalah benda di sekitar yang menghasilkan bunyi." }
        ],
        [
          { soal: "Suara manusia berbicara terjadi karena sumber bunyi itu ....", pilihan: ["bergetar", "diam saja", "berubah warna"], jawaban: 0, penjelasan: "Catatan kelas: suara manusia berbicara adalah contoh bunyi dari benda yang bergetar." },
          { soal: "Gitar termasuk sumber bunyi dari ....", pilihan: ["alat musik", "hujan", "angin"], jawaban: 0, penjelasan: "Gitar dan angklung adalah contoh alat musik." },
          { soal: "Burung berkicau termasuk sumber bunyi dari ....", pilihan: ["hewan", "benda diam", "gambar"], jawaban: 0, penjelasan: "Hewan dapat menjadi sumber bunyi, contohnya burung berkicau." },
          { soal: "Peluit termasuk bunyi ....", pilihan: ["buatan", "alam", "yang tidak ada"], jawaban: 0, penjelasan: "Peluit dibuat dan ditiup manusia, jadi bunyi buatan." }
        ]
      ],
      esaiSets: [
        [
          { soal: "Sebutkan dua contoh bunyi alam.", contohJawaban: "Suara hujan dan suara burung." },
          { soal: "Sebutkan dua contoh bunyi buatan.", contohJawaban: "Suara angklung dan suara peluit." }
        ],
        [
          { soal: "Sebutkan empat macam sumber bunyi dari catatan kelas.", contohJawaban: "Manusia, hewan, alat musik, dan benda di sekitar." },
          { soal: "Beri satu contoh bunyi manusia dan satu contoh bunyi benda di sekitar.", contohJawaban: "Manusia: berbicara atau bernyanyi. Benda di sekitar: bel atau lonceng." },
          { soal: "Mengapa suara lonceng disebut bunyi?", contohJawaban: "Karena lonceng bergetar lalu menghasilkan bunyi." }
        ]
      ],
      cocokkanSets: [
        {
          instruksi: "Pasangkan jenis bunyi dengan contohnya!",
          pasangan: [
            { kiri: { emoji: "🌧️", teks: "Bunyi alam" }, kanan: "Suara hujan" },
            { kiri: { emoji: "🎸", teks: "Bunyi buatan" }, kanan: "Suara angklung" },
            { kiri: { emoji: "🗣️", teks: "Sumber bunyi manusia" }, kanan: "Berbicara" }
          ]
        },
        {
          instruksi: "Pasangkan sumber bunyi dengan contohnya!",
          pasangan: [
            { kiri: { emoji: "👨", teks: "Manusia" }, kanan: "Berbicara dan bernyanyi" },
            { kiri: { emoji: "🐦", teks: "Hewan" }, kanan: "Burung berkicau" },
            { kiri: { emoji: "🎸", teks: "Alat musik" }, kanan: "Gitar dan angklung" },
            { kiri: { emoji: "🔔", teks: "Benda di sekitar" }, kanan: "Bel dan lonceng" }
          ]
        }
      ]
    },
    {
      id: "unsur-rupa",
      judul: "Unsur Rupa",
      emoji: "✏️",
      ringkasan: [
        { emoji: "📏", teks: "Garis lurus contohnya tepi penggaris. Garis lengkung contohnya garis pelangi." },
        { emoji: "〰️", teks: "Garis putus-putus terputus-putus. Garis zig-zag patah seperti gigi gergaji." },
        { emoji: "🔺", teks: "Bentuk geometris punya aturan. Contoh: lingkaran, segitiga, persegi, dan persegi panjang." },
        { emoji: "🍃", teks: "Bentuk bebas meniru alam, misalnya daun, awan, atau batu. Tepinya tidak selalu sama." },
        { emoji: "🔴", teks: "Warna primer adalah merah, kuning, dan biru. Warna ini tidak dibuat dari campuran warna lain." },
        { emoji: "🟠", teks: "Merah dicampur kuning menjadi jingga (oranye)." },
        { emoji: "🟢", teks: "Kuning dicampur biru menjadi hijau." },
        { emoji: "🟣", teks: "Merah dicampur biru menjadi ungu. Jingga, hijau, dan ungu disebut warna sekunder." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Garis pada pelangi termasuk garis ....", pilihan: ["lengkung", "putus-putus", "zig-zag"], jawaban: 0, penjelasan: "Pelangi melengkung, jadi garisnya garis lengkung." },
          { soal: "Tepi penggaris menunjukkan garis ....", pilihan: ["lurus", "lengkung", "titik saja"], jawaban: 0, penjelasan: "Penggaris punya tepi lurus." },
          { soal: "Segitiga dan persegi termasuk bentuk ....", pilihan: ["geometris", "bebas seperti awan", "hanya warna"], jawaban: 0, penjelasan: "Bentuk geometris punya sisi dan aturan, seperti segitiga dan persegi." },
          { soal: "Bentuk daun dan awan termasuk bentuk ....", pilihan: ["bebas", "selalu persegi", "tanpa warna"], jawaban: 0, penjelasan: "Bentuk bebas meniru alam dan tepinya tidak selalu sama." }
        ],
        [
          { soal: "Warna primer adalah ....", pilihan: ["merah, kuning, dan biru", "jingga, hijau, dan ungu", "hitam dan putih saja"], jawaban: 0, penjelasan: "Merah, kuning, dan biru tidak dibuat dari campuran warna lain." },
          { soal: "Merah dicampur kuning menjadi ....", pilihan: ["jingga", "hijau", "ungu"], jawaban: 0, penjelasan: "Merah + kuning = jingga (oranye)." },
          { soal: "Kuning dicampur biru menjadi ....", pilihan: ["hijau", "ungu", "merah"], jawaban: 0, penjelasan: "Kuning + biru = hijau." },
          { soal: "Merah dicampur biru menjadi ....", pilihan: ["ungu", "hijau", "jingga"], jawaban: 0, penjelasan: "Merah + biru = ungu." }
        ]
      ],
      esaiSets: [[
        { soal: "Sebutkan dua macam garis dan beri contohnya.", contohJawaban: "Garis lurus, contoh tepi penggaris. Garis lengkung, contoh garis pelangi." },
        { soal: "Sebutkan tiga warna primer.", contohJawaban: "Merah, kuning, dan biru." },
        { soal: "Warna apa yang didapat dari kuning dicampur biru?", contohJawaban: "Hijau." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan campuran warna dengan hasilnya!",
        pasangan: [
          { kiri: { emoji: "🔴", teks: "Merah + kuning" }, kanan: "Jingga" },
          { kiri: { emoji: "🟡", teks: "Kuning + biru" }, kanan: "Hijau" },
          { kiri: { emoji: "🔵", teks: "Merah + biru" }, kanan: "Ungu" },
          { kiri: { emoji: "📏", teks: "Tepi penggaris" }, kanan: "Garis lurus" },
          { kiri: { emoji: "🌈", teks: "Garis pelangi" }, kanan: "Garis lengkung" }
        ]
      }]
    },
    {
      id: "menggambar-ekspresi",
      judul: "Menggambar Ekspresi dan Dekorasi",
      emoji: "😊",
      ringkasan: [
        { emoji: "😊", teks: "Menggambar ekspresi berarti menggambar perasaan, misalnya senang, sedih, atau marah." },
        { emoji: "🌞", teks: "Perasaan senang bisa ditampilkan dengan warna cerah dan garis yang melengkung." },
        { emoji: "🌧️", teks: "Perasaan sedih bisa ditampilkan dengan warna yang lebih gelap." },
        { emoji: "⚡", teks: "Perasaan marah bisa ditampilkan dengan garis yang tajam atau patah." },
        { emoji: "🎀", teks: "Gambar dekorasi menghias bidang dengan motif yang diulang, misalnya bunga, titik, atau gelombang." },
        { emoji: "💌", teks: "Motif dekorasi bisa dipakai di pinggir kertas atau pada kartu ucapan." },
        { emoji: "🖍️", teks: "Pilih warna yang rapi. Warna cerah dan warna gelap bisa menunjukkan perasaan yang berbeda." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Menggambar perasaan senang, sedih, atau marah disebut menggambar ....", pilihan: ["ekspresi", "peta", "angka"], jawaban: 0, penjelasan: "Gambar ekspresi menampilkan perasaan." },
          { soal: "Perasaan senang cocok ditampilkan dengan warna ....", pilihan: ["cerah", "yang sangat gelap semua", "tanpa warna"], jawaban: 0, penjelasan: "Warna cerah dan garis melengkung dapat menunjukkan rasa senang." },
          { soal: "Garis tajam atau patah dapat menunjukkan rasa ....", pilihan: ["marah", "mengantuk", "kosong"], jawaban: 0, penjelasan: "Garis patah terasa tegas, cocok untuk rasa marah." },
          { soal: "Warna yang lebih gelap dapat membantu menunjukkan rasa ....", pilihan: ["sedih", "sangat lapar", "berhitung"], jawaban: 0, penjelasan: "Warna gelap dapat menampilkan perasaan sedih." }
        ],
        [
          { soal: "Menghias gambar dengan motif yang diulang disebut ....", pilihan: ["dekorasi", "menyanyi", "berlari"], jawaban: 0, penjelasan: "Dekorasi memakai motif berulang seperti bunga, titik, atau gelombang." },
          { soal: "Contoh motif dekorasi adalah ....", pilihan: ["bunga yang diulang", "satu kata saja", "angka acak"], jawaban: 0, penjelasan: "Bunga, titik, dan garis gelombang bisa diulang menjadi hiasan." },
          { soal: "Dekorasi bisa diletakkan di ....", pilihan: ["pinggir kertas atau kartu ucapan", "dalam sepatu", "di piring makan"], jawaban: 0, penjelasan: "Pinggir gambar dan kartu ucapan cocok untuk motif hiasan." },
          { soal: "Lou senang karena dapat bintang. Garis yang cocok pada gambarnya adalah garis ....", pilihan: ["melengkung", "patah-patah semua", "tanpa arah"], jawaban: 0, penjelasan: "Garis melengkung dan warna cerah cocok untuk rasa senang." }
        ]
      ],
      esaiSets: [[
        { soal: "Apa yang dimaksud menggambar ekspresi?", contohJawaban: "Menggambar perasaan, misalnya senang, sedih, atau marah." },
        { soal: "Bagaimana cara menunjukkan rasa senang pada gambar?", contohJawaban: "Pakai warna cerah dan garis yang melengkung." },
        { soal: "Apa itu gambar dekorasi? Beri satu contoh motif.", contohJawaban: "Hiasan dengan motif yang diulang. Contoh motif: bunga, titik, atau gelombang." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan perasaan dengan cara menggambarnya!",
        pasangan: [
          { kiri: { emoji: "😊", teks: "Senang" }, kanan: "Warna cerah, garis melengkung" },
          { kiri: { emoji: "😢", teks: "Sedih" }, kanan: "Warna lebih gelap" },
          { kiri: { emoji: "😠", teks: "Marah" }, kanan: "Garis tajam atau patah" },
          { kiri: { emoji: "🌸", teks: "Dekorasi" }, kanan: "Motif yang diulang" }
        ]
      }]
    },
    {
      id: "lagu-anak",
      judul: "Lagu Anak dan Tinggi Rendah Nada",
      emoji: "🎤",
      ringkasan: [
        { emoji: "⬆️", teks: "Nada tinggi terdengar naik dan lebih melengking." },
        { emoji: "⬇️", teks: "Nada rendah terdengar turun dan lebih berat." },
        { emoji: "🎵", teks: "Lagu disusun dari nada yang ada tinggi dan ada rendahnya." },
        { emoji: "🌈", teks: "Pelangi-Pelangi adalah lagu anak tentang warna pelangi." },
        { emoji: "🎈", teks: "Balonku adalah lagu anak tentang balon." },
        { emoji: "🦎", teks: "Cicak di Dinding adalah lagu anak tentang cicak." },
        { emoji: "🎩", teks: "Topi Saya Bundar adalah lagu anak tentang topi yang bundar." },
        { emoji: "😊", teks: "Saat menyanyi, suara dijaga tetap jelas. Tidak perlu berteriak." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Nada yang terdengar naik dan melengking disebut nada ....", pilihan: ["tinggi", "rendah", "diam"], jawaban: 0, penjelasan: "Nada tinggi terdengar naik dan lebih melengking." },
          { soal: "Nada rendah terdengar ....", pilihan: ["lebih berat", "selalu berteriak", "tanpa suara"], jawaban: 0, penjelasan: "Nada rendah terdengar turun dan lebih berat." },
          { soal: "Lagu anak tentang cicak berjudul ....", pilihan: ["Cicak di Dinding", "Balonku", "Topi Saya Bundar"], jawaban: 0, penjelasan: "Cicak di Dinding adalah lagu anak tentang cicak." },
          { soal: "Lagu Balonku bercerita tentang ....", pilihan: ["balon", "topi bundar", "cicak"], jawaban: 0, penjelasan: "Balonku adalah lagu anak tentang balon." }
        ],
        [
          { soal: "Lagu Pelangi-Pelangi bercerita tentang ....", pilihan: ["warna pelangi", "sepatu", "meja"], jawaban: 0, penjelasan: "Pelangi-Pelangi adalah lagu anak tentang warna pelangi." },
          { soal: "Topi Saya Bundar adalah lagu tentang ....", pilihan: ["topi yang bundar", "ikan", "hujan deras"], jawaban: 0, penjelasan: "Judulnya sudah memberi tahu: topi yang bundar." },
          { soal: "Saat menyanyi, suara sebaiknya ....", pilihan: ["jelas, tidak berteriak", "sangat pelan sampai tidak terdengar", "hanya berteriak"], jawaban: 0, penjelasan: "Suara yang jelas membuat lagu enak didengar." },
          { soal: "Sebuah lagu punya nada yang ....", pilihan: ["ada tinggi dan ada rendah", "hanya satu tepukan", "tidak bersuara"], jawaban: 0, penjelasan: "Lagu disusun dari nada tinggi dan nada rendah." }
        ]
      ],
      esaiSets: [[
        { soal: "Apa beda nada tinggi dan nada rendah?", contohJawaban: "Nada tinggi terdengar naik dan melengking. Nada rendah terdengar turun dan lebih berat." },
        { soal: "Sebutkan dua judul lagu anak yang kamu pelajari.", contohJawaban: "Contoh: Pelangi-Pelangi, Balonku, Cicak di Dinding, atau Topi Saya Bundar." },
        { soal: "Bagaimana cara menyanyi yang baik?", contohJawaban: "Suara dijaga tetap jelas dan tidak berteriak." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan lagu anak dengan isinya!",
        pasangan: [
          { kiri: { emoji: "🌈", teks: "Pelangi-Pelangi" }, kanan: "Warna pelangi" },
          { kiri: { emoji: "🎈", teks: "Balonku" }, kanan: "Balon" },
          { kiri: { emoji: "🦎", teks: "Cicak di Dinding" }, kanan: "Cicak" },
          { kiri: { emoji: "🎩", teks: "Topi Saya Bundar" }, kanan: "Topi bundar" }
        ]
      }]
    },
    {
      id: "tempo-dan-irama",
      judul: "Tempo dan Irama",
      emoji: "👏",
      ringkasan: [
        { emoji: "🐇", teks: "Tempo adalah cepat atau lambatnya sebuah lagu." },
        { emoji: "🐢", teks: "Tempo cepat terasa tergesa. Tempo lambat terasa lebih tenang." },
        { emoji: "👏", teks: "Tepuk tangan bisa dilakukan cepat atau lambat. Itu latihan tempo." },
        { emoji: "🥁", teks: "Irama adalah pola bunyi yang teratur, misalnya tepuk-diam-tepuk." },
        { emoji: "➖", teks: "Bunyi panjang ditahan lebih lama. Bunyi pendek selesai dengan cepat." },
        { emoji: "🌙", teks: "Lagu pengantar tidur biasanya bertempo lambat." },
        { emoji: "🏃", teks: "Lagu untuk bermain biasanya bertempo lebih cepat." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Cepat atau lambatnya lagu disebut ....", pilihan: ["tempo", "warna", "garis"], jawaban: 0, penjelasan: "Tempo adalah kecepatan lagu." },
          { soal: "Lagu yang tenang biasanya bertempo ....", pilihan: ["lambat", "sangat cepat terus", "tanpa bunyi"], jawaban: 0, penjelasan: "Tempo lambat terasa lebih tenang." },
          { soal: "Pola bunyi yang teratur disebut ....", pilihan: ["irama", "warna primer", "kolase"], jawaban: 0, penjelasan: "Irama adalah pola bunyi yang berulang secara teratur." },
          { soal: "Bunyi yang ditahan lebih lama disebut bunyi ....", pilihan: ["panjang", "pendek", "diam"], jawaban: 0, penjelasan: "Bunyi panjang ditahan. Bunyi pendek selesai cepat." }
        ],
        [
          { soal: "Tepuk tangan yang tergesa menunjukkan tempo ....", pilihan: ["cepat", "lambat", "mati"], jawaban: 0, penjelasan: "Tepukan tergesa berarti temponya cepat." },
          { soal: "Lagu pengantar tidur biasanya ....", pilihan: ["lambat", "secepat lari", "tanpa nada"], jawaban: 0, penjelasan: "Lagu pengantar tidur bertempo lambat agar tenang." },
          { soal: "Bunyi pendek adalah bunyi yang ....", pilihan: ["selesai dengan cepat", "ditahan sangat lama", "tidak pernah berhenti"], jawaban: 0, penjelasan: "Bunyi pendek singkat, tidak ditahan lama." },
          { soal: "Tepuk-diam-tepuk adalah contoh ....", pilihan: ["pola irama", "warna sekunder", "garis lurus"], jawaban: 0, penjelasan: "Pola yang teratur itu disebut irama." }
        ]
      ],
      esaiSets: [[
        { soal: "Apa yang dimaksud tempo?", contohJawaban: "Tempo adalah cepat atau lambatnya sebuah lagu." },
        { soal: "Apa beda bunyi panjang dan bunyi pendek?", contohJawaban: "Bunyi panjang ditahan lebih lama. Bunyi pendek selesai dengan cepat." },
        { soal: "Mengapa lagu pengantar tidur biasanya lambat?", contohJawaban: "Karena tempo lambat terasa tenang, cocok untuk menjelang tidur." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan kata musik dengan artinya!",
        pasangan: [
          { kiri: { emoji: "🐇", teks: "Tempo cepat" }, kanan: "Lagu terasa tergesa" },
          { kiri: { emoji: "🐢", teks: "Tempo lambat" }, kanan: "Lagu terasa tenang" },
          { kiri: { emoji: "➖", teks: "Bunyi panjang" }, kanan: "Ditahan lebih lama" },
          { kiri: { emoji: "👏", teks: "Irama" }, kanan: "Pola bunyi yang teratur" }
        ]
      }]
    },
    {
      id: "alat-musik",
      judul: "Alat Musik Ritmis dan Melodis",
      emoji: "🥁",
      ringkasan: [
        { emoji: "🥁", teks: "Alat musik ritmis dipakai untuk menjaga irama. Contoh: tamborin, triangle, kastanyet, dan kendang." },
        { emoji: "🔔", teks: "Triangle dipukul dan berbunyi cing. Tamborin digoyang atau ditepuk." },
        { emoji: "🎵", teks: "Alat musik melodis dapat memainkan nada lagu. Contoh: pianika, rekorder, dan suling." },
        { emoji: "🎹", teks: "Pianika ditiup sambil jari menekan tombol nada." },
        { emoji: "🪈", teks: "Rekorder dan suling ditiup. Jari menutup lubang untuk mengubah nada." },
        { emoji: "🎶", teks: "Angklung digoyangkan. Setiap tabung punya nada, jadi angklung dapat memainkan lagu." },
        { emoji: "🤝", teks: "Mainkan alat musik secara bergantian dan jagalah irama bersama teman." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Tamborin termasuk alat musik ....", pilihan: ["ritmis", "yang hanya untuk mewarnai", "tanpa bunyi"], jawaban: 0, penjelasan: "Tamborin dipakai untuk menjaga irama, jadi alat ritmis." },
          { soal: "Pianika termasuk alat musik ....", pilihan: ["melodis", "yang tidak bernada", "hanya hiasan"], jawaban: 0, penjelasan: "Pianika dapat memainkan nada lagu, jadi alat melodis." },
          { soal: "Triangle dimainkan dengan cara ....", pilihan: ["dipukul", "ditiup seperti balon", "dilipat"], jawaban: 0, penjelasan: "Triangle dipukul lalu berbunyi cing." },
          { soal: "Suling mengubah nada dengan ....", pilihan: ["jari yang menutup lubang", "ditendang", "diwarnai"], jawaban: 0, penjelasan: "Lubang yang ditutup jari mengubah nada suling." }
        ],
        [
          { soal: "Kendang dan kastanyet berguna untuk menjaga ....", pilihan: ["irama", "warna cat", "garis gambar"], jawaban: 0, penjelasan: "Keduanya alat ritmis, dipakai untuk pola irama." },
          { soal: "Rekorder termasuk alat musik ....", pilihan: ["melodis", "ritmis tanpa nada", "diam"], jawaban: 0, penjelasan: "Rekorder ditiup dan dapat memainkan nada lagu." },
          { soal: "Angklung dapat memainkan lagu karena ....", pilihan: ["setiap tabung punya nada", "tidak berbunyi", "hanya berwarna"], jawaban: 0, penjelasan: "Setiap tabung angklung punya nada. Angklung digoyangkan." },
          { soal: "Alat yang ditiup sambil menekan tombol adalah ....", pilihan: ["pianika", "triangle", "kendang"], jawaban: 0, penjelasan: "Pianika ditiup dan tombolnya ditekan untuk memilih nada." }
        ]
      ],
      esaiSets: [[
        { soal: "Sebutkan dua alat musik ritmis.", contohJawaban: "Tamborin, triangle, kastanyet, atau kendang." },
        { soal: "Sebutkan dua alat musik melodis.", contohJawaban: "Pianika, rekorder, atau suling. Angklung juga dapat memainkan nada." },
        { soal: "Apa beda alat ritmis dan alat melodis?", contohJawaban: "Alat ritmis menjaga irama. Alat melodis dapat memainkan nada lagu." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan alat musik dengan kelompoknya!",
        pasangan: [
          { kiri: { emoji: "🥁", teks: "Tamborin" }, kanan: "Alat ritmis" },
          { kiri: { emoji: "🔔", teks: "Triangle" }, kanan: "Dipukul, menjaga irama" },
          { kiri: { emoji: "🎹", teks: "Pianika" }, kanan: "Alat melodis" },
          { kiri: { emoji: "🪈", teks: "Suling" }, kanan: "Ditiup, lubang diubah jari" },
          { kiri: { emoji: "🎶", teks: "Angklung" }, kanan: "Digoyang, tiap tabung punya nada" }
        ]
      }]
    },
    {
      id: "gerak-tari",
      judul: "Gerak Tari",
      emoji: "💃",
      ringkasan: [
        { emoji: "🙂", teks: "Gerak tari memakai anggota tubuh: kepala, tangan, dan kaki." },
        { emoji: "⬇️", teks: "Level rendah: gerak dekat lantai, misalnya berjongkok." },
        { emoji: "➡️", teks: "Level sedang: gerak setinggi badan saat berdiri." },
        { emoji: "⬆️", teks: "Level tinggi: tangan atau badan diangkat ke atas." },
        { emoji: "🦋", teks: "Meniru kupu-kupu: kedua lengan digerakkan seperti sayap." },
        { emoji: "🐰", teks: "Meniru kelinci: meloncat ringan. Meniru gajah: langkah berat, lengan seperti belalai." },
        { emoji: "🌊", teks: "Meniru alam: badan meliuk seperti angin, naik-turun seperti ombak, jari mengetuk seperti hujan." },
        { emoji: "🤝", teks: "Jaga jarak dengan teman supaya gerak tidak saling bertabrakan." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Gerak tari memakai ....", pilihan: ["kepala, tangan, dan kaki", "hanya sepatu", "hanya buku"], jawaban: 0, penjelasan: "Anggota tubuh yang digerakkan antara lain kepala, tangan, dan kaki." },
          { soal: "Berjongkok dekat lantai termasuk level ....", pilihan: ["rendah", "tinggi", "di luar ruangan"], jawaban: 0, penjelasan: "Level rendah berarti gerak dekat lantai." },
          { soal: "Tangan diangkat ke atas termasuk level ....", pilihan: ["tinggi", "rendah", "diam"], jawaban: 0, penjelasan: "Level tinggi berarti gerak ke arah atas." },
          { soal: "Meniru kupu-kupu dilakukan dengan ....", pilihan: ["lengan seperti sayap", "langkah sangat berat", "duduk diam"], jawaban: 0, penjelasan: "Kedua lengan digerakkan seperti sayap kupu-kupu." }
        ],
        [
          { soal: "Gerak kelinci pada tari adalah ....", pilihan: ["meloncat ringan", "merangkak sangat lambat saja", "berdiri kaku"], jawaban: 0, penjelasan: "Kelinci ditiru dengan lompatan yang ringan." },
          { soal: "Lengan diluruskan ke depan seperti belalai meniru ....", pilihan: ["gajah", "ikan kecil", "angin sepoi"], jawaban: 0, penjelasan: "Gajah ditiru dengan langkah berat dan lengan seperti belalai." },
          { soal: "Badan yang meliuk dapat meniru ....", pilihan: ["angin", "kursi", "buku"], jawaban: 0, penjelasan: "Gerak meliuk meniru angin. Ombak ditiru dengan gerak naik-turun." },
          { soal: "Saat menari bersama teman, kita perlu ....", pilihan: ["menjaga jarak", "saling mendorong", "menutup mata terus"], jawaban: 0, penjelasan: "Jarak dijaga supaya gerak tidak bertabrakan." }
        ]
      ],
      esaiSets: [[
        { soal: "Sebutkan tiga anggota tubuh yang dipakai untuk menari.", contohJawaban: "Kepala, tangan, dan kaki." },
        { soal: "Apa beda level rendah dan level tinggi?", contohJawaban: "Level rendah dekat lantai, misalnya berjongkok. Level tinggi mengangkat tangan atau badan ke atas." },
        { soal: "Bagaimana cara meniru kupu-kupu dan gajah?", contohJawaban: "Kupu-kupu: lengan seperti sayap. Gajah: langkah berat dan lengan seperti belalai." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan gerak dengan yang ditiru!",
        pasangan: [
          { kiri: { emoji: "🦋", teks: "Lengan seperti sayap" }, kanan: "Kupu-kupu" },
          { kiri: { emoji: "🐰", teks: "Meloncat ringan" }, kanan: "Kelinci" },
          { kiri: { emoji: "🐘", teks: "Lengan seperti belalai" }, kanan: "Gajah" },
          { kiri: { emoji: "🌬️", teks: "Badan meliuk" }, kanan: "Angin" },
          { kiri: { emoji: "🌊", teks: "Gerak naik-turun" }, kanan: "Ombak" }
        ]
      }]
    },
    {
      id: "kolase-montase",
      judul: "Kolase dan Montase",
      emoji: "🧩",
      ringkasan: [
        { emoji: "🧩", teks: "Kolase dibuat dengan menempel bahan, misalnya sobekan kertas, daun kering, kain, atau biji-bijian." },
        { emoji: "🖼️", teks: "Bahan kolase disusun sampai menjadi satu gambar, misalnya pemandangan atau hewan." },
        { emoji: "📰", teks: "Montase dibuat dengan menempel gambar yang sudah jadi, misalnya guntingan majalah atau foto." },
        { emoji: "✂️", teks: "Pada montase, beberapa gambar digabung menjadi satu karya baru." },
        { emoji: "🔍", teks: "Bedanya: kolase menempel bahan. Montase menempel gambar yang sudah utuh." },
        { emoji: "🧷", teks: "Gunakan gunting dengan hati-hati. Minta bantuan orang dewasa jika belum lancar." },
        { emoji: "🍃", teks: "Untuk bahan alam, pakai daun yang sudah kering dan jatuh. Jangan merusak tanaman." }
      ],
      pilihanGandaSets: [
        [
          { soal: "Menempel sobekan kertas, daun kering, atau biji menjadi gambar disebut ....", pilihan: ["kolase", "montase", "menyanyi"], jawaban: 0, penjelasan: "Kolase menempel bahan menjadi satu gambar." },
          { soal: "Menempel guntingan majalah atau foto menjadi karya baru disebut ....", pilihan: ["montase", "garis lurus", "tempo"], jawaban: 0, penjelasan: "Montase menggabungkan gambar yang sudah jadi." },
          { soal: "Daun kering yang ditempel pada gambar langit termasuk ....", pilihan: ["bahan kolase", "alat melodis", "nada tinggi"], jawaban: 0, penjelasan: "Daun kering adalah bahan yang ditempel, jadi bagian dari kolase." },
          { soal: "Foto yang digunting lalu ditempel bersama gambar lain termasuk ....", pilihan: ["montase", "warna primer", "kendang"], jawaban: 0, penjelasan: "Foto adalah gambar jadi. Menempelkannya menjadi montase." }
        ],
        [
          { soal: "Beda kolase dan montase adalah ....", pilihan: ["kolase menempel bahan, montase menempel gambar jadi", "keduanya hanya menyanyi", "keduanya tanpa lem"], jawaban: 0, penjelasan: "Kolase memakai bahan. Montase memakai gambar yang sudah utuh." },
          { soal: "Saat memakai gunting, kita harus ....", pilihan: ["hati-hati dan minta bantuan jika perlu", "berlari sambil menggunting", "menutup mata"], jawaban: 0, penjelasan: "Gunting dipakai pelan. Minta orang dewasa membantu jika belum lancar." },
          { soal: "Bahan daun untuk kolase sebaiknya ....", pilihan: ["daun kering yang sudah jatuh", "ditarik dari tanaman hidup", "daun yang masih di pohon"], jawaban: 0, penjelasan: "Pakai daun yang sudah jatuh supaya tanaman tidak rusak." },
          { soal: "Biji-bijian yang disusun menjadi bentuk ikan adalah contoh ....", pilihan: ["kolase", "lagu anak", "level tari"], jawaban: 0, penjelasan: "Biji adalah bahan yang ditempel, jadi karya itu kolase." }
        ]
      ],
      esaiSets: [[
        { soal: "Apa yang dimaksud kolase? Sebutkan dua bahannya.", contohJawaban: "Kolase menempel bahan menjadi gambar. Contoh bahan: sobekan kertas, daun kering, kain, atau biji." },
        { soal: "Apa yang dimaksud montase?", contohJawaban: "Montase menempel gambar yang sudah jadi, seperti guntingan majalah atau foto, menjadi satu karya baru." },
        { soal: "Bagaimana cara memakai gunting dengan aman?", contohJawaban: "Pakai gunting dengan hati-hati. Minta bantuan orang dewasa jika belum lancar." }
      ]],
      cocokkanSets: [{
        instruksi: "Pasangkan karya dengan bahannya!",
        pasangan: [
          { kiri: { emoji: "🍃", teks: "Daun kering ditempel" }, kanan: "Kolase" },
          { kiri: { emoji: "📰", teks: "Guntingan majalah" }, kanan: "Montase" },
          { kiri: { emoji: "🌽", teks: "Biji-bijian disusun" }, kanan: "Bahan kolase" },
          { kiri: { emoji: "🖼️", teks: "Beberapa foto digabung" }, kanan: "Karya montase" }
        ]
      }]
    }
  ]
};

const SUBJECTS = [
  {
    id: "pancasila",
    nama: "Pancasila",
    ikon: "🇮🇩",
    warna: "#e63946",
    deskripsi: "Belajar identitas, aturan, lambang negara, dan kerja sama.",
    topik: [
      {
        id: "aturan-di-rumah",
        judul: "Patuh pada Aturan di Rumah",
        emoji: "🏠",

        ringkasan: [
          { emoji: "📜", teks: "Setiap keluarga punya aturan. Aturan di rumah dibuat oleh ayah dan ibu." },
          { emoji: "🤝", teks: "Aturan disepakati oleh seluruh anggota keluarga. Semua harus menaatinya." },
          { emoji: "😊", teks: "Kalau aturan ditaati, rumah jadi nyaman dan keluarga hidup rukun." },
          { emoji: "🧹", teks: "Contoh aturan: menaruh barang pada tempatnya dan membuang sampah di tempat sampah." },
          { emoji: "👟", teks: "Menaruh sepatu di rak membuat rumah rapi dan barang mudah dicari." },
          { emoji: "🌙", teks: "Tidur tepat waktu membuat kita bangun pagi dan tidak terlambat ke sekolah." },
          { emoji: "📚", teks: "Mematuhi aturan membuat kita menjadi anak yang mandiri dan disiplin." },
          { emoji: "🙋", teks: "Berpamitan dan minta izin sebelum bermain membuat orang tua merasa tenang." },
          { emoji: "💛", teks: "Minta izin saat meminjam barang orang lain supaya pemiliknya merasa dihargai." },
          { emoji: "🧽", teks: "Bergotong royong membersihkan rumah membuat pekerjaan terasa ringan dan cepat selesai." },
          { emoji: "🏫", teks: "Selain di rumah, ada juga aturan di sekolah. Contohnya datang tepat waktu dan mengangkat tangan sebelum bertanya." },
          { emoji: "🇮🇩", teks: "Pancasila punya 5 sila dengan lambang: Bintang, Rantai, Pohon Beringin, Kepala Banteng, serta Padi dan Kapas." }
        ],

        /* ===== 3 SET SOAL PILIHAN GANDA ===== */
        pilihanGandaSets: [

          // ---------- SET 1 ----------
          [
            {
              soal: "Siapa yang membuat aturan di rumah?",
              pilihan: ["Teman", "Ayah dan ibu", "Guru"],
              jawaban: 1,
              penjelasan: "Aturan di rumah dibuat oleh ayah dan ibu, lalu disepakati seluruh keluarga."
            },
            {
              soal: "Rumah yang anggotanya mematuhi aturan akan terasa ....",
              pilihan: ["Kotor", "Nyaman", "Berantakan"],
              jawaban: 1,
              penjelasan: "Mematuhi aturan membuat rumah bersih, rapi, dan nyaman."
            },
            {
              soal: "Setelah bermain, mainan sebaiknya ....",
              pilihan: ["Dibiarkan saja", "Dirapikan ke tempatnya", "Dibuang"],
              jawaban: 1,
              penjelasan: "Barang diletakkan pada tempatnya supaya rumah rapi dan mudah dicari."
            },
            {
              soal: "Sampah harus dibuang di ....",
              pilihan: ["Lantai", "Bawah meja", "Tempat sampah"],
              jawaban: 2,
              penjelasan: "Membuang sampah di tempatnya membuat kita jauh dari kuman dan tetap sehat."
            },
            {
              soal: "Sebelum pergi bermain, sebaiknya kita ....",
              pilihan: ["Diam-diam pergi", "Minta izin orang tua", "Lari keluar"],
              jawaban: 1,
              penjelasan: "Berpamitan membuat orang tua tahu keberadaan kita dan merasa tenang."
            },
            {
              soal: "Tidur tepat waktu membuat kita ....",
              pilihan: ["Bangun kesiangan", "Bangun tepat waktu dan segar", "Malas belajar"],
              jawaban: 1,
              penjelasan: "Mematuhi aturan waktu tidur membuat kita bangun pagi dan siap sekolah."
            },
            {
              soal: "Saat ingin meminjam barang teman, kita harus ....",
              pilihan: ["Mengambil diam-diam", "Minta izin dulu", "Menyembunyikannya"],
              jawaban: 1,
              penjelasan: "Minta izin membuat pemilik barang merasa dihargai."
            },
            {
              soal: "Membersihkan rumah bersama-sama disebut ....",
              pilihan: ["Bertengkar", "Bergotong royong", "Bermain"],
              jawaban: 1,
              penjelasan: "Bergotong royong membuat pekerjaan terasa ringan dan cepat selesai."
            },
            {
              soal: "Sepatu sebaiknya diletakkan di ....",
              pilihan: ["Atas meja makan", "Rak sepatu", "Dalam lemari baju"],
              jawaban: 1,
              penjelasan: "Menaruh sepatu di rak membuat rumah rapi dan sepatu mudah dicari."
            },
            {
              soal: "Rumah yang tidak memiliki aturan akan menjadi ....",
              pilihan: ["Rapi dan bersih", "Berantakan dan kotor", "Nyaman"],
              jawaban: 1,
              penjelasan: "Tanpa aturan, anggota keluarga berbuat sesuka hati sehingga rumah berantakan."
            },
            {
              soal: "Mematuhi aturan di rumah membuat kita menjadi anak yang ....",
              pilihan: ["Malas", "Mandiri dan disiplin", "Nakal"],
              jawaban: 1,
              penjelasan: "Terbiasa patuh pada aturan melatih kita menjadi anak yang mandiri dan disiplin."
            },
            {
              soal: "Saat orang tua melihat kita disiplin, mereka akan merasa ....",
              pilihan: ["Marah", "Senang", "Bingung"],
              jawaban: 1,
              penjelasan: "Ayah dan ibu senang melihat anaknya disiplin dan tidak perlu sering menegur."
            },
            {
              soal: "Siapa saja yang harus mematuhi aturan di rumah?",
              pilihan: ["Hanya anak-anak", "Hanya ayah", "Semua anggota keluarga"],
              jawaban: 2,
              penjelasan: "Aturan disepakati bersama, jadi semua anggota keluarga harus menaatinya."
            },
            {
              soal: "Agar udara di rumah terasa segar, kita perlu ....",
              pilihan: ["Membiarkan debu menumpuk", "Membersihkan rumah secara teratur", "Menutup semua jendela selamanya"],
              jawaban: 1,
              penjelasan: "Membersihkan rumah dari debu secara teratur membuat udara lebih segar dan sehat."
            },
            {
              soal: "Sudah malam dan waktunya tidur, sebaiknya televisi ....",
              pilihan: ["Dibiarkan menyala", "Dimatikan", "Dikeraskan suaranya"],
              jawaban: 1,
              penjelasan: "Mematikan televisi saat waktu tidur membantu kita tidur tepat waktu dan bangun segar."
            }
          ],

          // ---------- SET 2 ----------
          [
            {
              soal: "Aturan di rumah sebaiknya kita ....",
              pilihan: ["Langgar", "Taati", "Lupakan"],
              jawaban: 1,
              penjelasan: "Semua anggota keluarga harus menaati aturan agar rumah tertib."
            },
            {
              soal: "Bangun kesiangan bisa membuat kita ....",
              pilihan: ["Terlambat ke sekolah", "Lebih pintar", "Lebih sehat"],
              jawaban: 0,
              penjelasan: "Kalau bangun kesiangan, kita bisa terlambat berangkat ke sekolah."
            },
            {
              soal: "Setelah makan, piring kotor sebaiknya ....",
              pilihan: ["Dibiarkan di meja", "Dibawa ke dapur / dicuci", "Disembunyikan"],
              jawaban: 1,
              penjelasan: "Membereskan piring sendiri melatih kita mandiri dan rumah tetap rapi."
            },
            {
              soal: "Contoh sikap patuh pada aturan di rumah adalah ....",
              pilihan: ["Belajar tepat waktu", "Membuang sampah sembarangan", "Bermain seharian"],
              jawaban: 0,
              penjelasan: "Belajar tepat waktu adalah salah satu bentuk mematuhi aturan."
            },
            {
              soal: "Jika kita selalu mematuhi aturan, Ayah dan Ibu tidak perlu ....",
              pilihan: ["Menyayangi kita", "Sering menegur kita", "Memberi makan"],
              jawaban: 1,
              penjelasan: "Saat kita patuh, orang tua tidak perlu sering menegur dan merasa senang."
            },
            {
              soal: "Meminjam mainan kakak sebaiknya dengan cara ....",
              pilihan: ["Merebut", "Meminta izin", "Mengambil diam-diam"],
              jawaban: 1,
              penjelasan: "Meminta izin membuat pemilik barang merasa dihargai."
            },
            {
              soal: "Rumah yang bersih membuat kita terhindar dari ....",
              pilihan: ["Teman", "Kuman penyakit", "Buku"],
              jawaban: 1,
              penjelasan: "Rumah bersih membuat kita jauh dari kuman sehingga tetap sehat."
            },
            {
              soal: "Aturan tentang waktu belajar membuat kita lebih ....",
              pilihan: ["Siap menerima pelajaran", "Mengantuk di kelas", "Malas"],
              jawaban: 0,
              penjelasan: "Belajar sesuai aturan membuat kita lebih siap menerima pelajaran."
            },
            {
              soal: "Berikut yang BUKAN aturan di rumah adalah ....",
              pilihan: ["Merapikan tempat tidur", "Membantu orang tua", "Mencoret-coret dinding"],
              jawaban: 2,
              penjelasan: "Mencoret dinding bukan aturan yang baik; itu membuat rumah kotor."
            },
            {
              soal: "Keluarga yang saling menghargai akan hidup ....",
              pilihan: ["Rukun", "Bertengkar", "Sendiri-sendiri"],
              jawaban: 0,
              penjelasan: "Saling menghargai membuat keluarga hidup rukun dan bahagia."
            },
            {
              soal: "Saat bersama keluarga, sebaiknya kita ....",
              pilihan: ["Sibuk main gawai", "Mengobrol bersama", "Pergi sendiri"],
              jawaban: 1,
              penjelasan: "Saat berkumpul, sebaiknya tidak sibuk bermain gawai agar waktu bersama berkualitas."
            },
            {
              soal: "Mematuhi aturan membuat suasana rumah menjadi ....",
              pilihan: ["Tertib dan teratur", "Ribut", "Kacau"],
              jawaban: 0,
              penjelasan: "Aturan yang ditaati membuat suasana rumah tertib dan teratur."
            },
            {
              soal: "Barang yang sudah dipakai sebaiknya dikembalikan ke ....",
              pilihan: ["Tempat semula", "Mana saja", "Dibiarkan jatuh"],
              jawaban: 0,
              penjelasan: "Mengembalikan barang ke tempatnya membuat rumah rapi dan mudah dicari."
            },
            {
              soal: "Jika semua anggota keluarga membantu, pekerjaan rumah akan ....",
              pilihan: ["Lebih lama", "Cepat selesai", "Tidak selesai"],
              jawaban: 1,
              penjelasan: "Bergotong royong membuat pekerjaan rumah cepat selesai."
            },
            {
              soal: "Anak yang disiplin biasanya ....",
              pilihan: ["Suka terlambat", "Menepati waktu", "Lupa tugas"],
              jawaban: 1,
              penjelasan: "Anak disiplin terbiasa menepati waktu dan melakukan tugasnya sendiri."
            }
          ],

          // ---------- SET 3 ----------
          [
            {
              soal: "Aturan dibuat agar hidup kita menjadi ....",
              pilihan: ["Teratur", "Berantakan", "Susah"],
              jawaban: 0,
              penjelasan: "Aturan dibuat supaya hidup lebih teratur dan nyaman."
            },
            {
              soal: "Sebelum tidur malam, sebaiknya kita ....",
              pilihan: ["Nonton sampai larut", "Merapikan mainan & menggosok gigi", "Makan banyak permen"],
              jawaban: 1,
              penjelasan: "Merapikan mainan dan menggosok gigi adalah kebiasaan baik sebelum tidur."
            },
            {
              soal: "Kalau kita tidak merapikan kamar, kamar akan ....",
              pilihan: ["Berantakan", "Rapi sendiri", "Bersih"],
              jawaban: 0,
              penjelasan: "Kamar yang tidak dirapikan akan berantakan dan barang sulit dicari."
            },
            {
              soal: "Memberi salam saat masuk rumah termasuk sikap ....",
              pilihan: ["Sopan", "Nakal", "Malas"],
              jawaban: 0,
              penjelasan: "Memberi salam adalah sikap sopan kepada anggota keluarga."
            },
            {
              soal: "Membantu ibu menyapu lantai termasuk ....",
              pilihan: ["Perbuatan baik", "Perbuatan buruk", "Hal yang dilarang"],
              jawaban: 0,
              penjelasan: "Membantu orang tua adalah perbuatan baik dan meringankan pekerjaan mereka."
            },
            {
              soal: "Kita boleh menonton televisi ....",
              pilihan: ["Kapan saja sepuasnya", "Sesuai waktu yang diizinkan", "Sampai pagi"],
              jawaban: 1,
              penjelasan: "Menonton televisi sebaiknya sesuai aturan waktu dari orang tua."
            },
            {
              soal: "Rumah adalah tempat kita tinggal bersama ....",
              pilihan: ["Keluarga", "Orang asing", "Sendiri"],
              jawaban: 0,
              penjelasan: "Rumah adalah tempat tinggal bersama keluarga yang harus saling menghargai."
            },
            {
              soal: "Jika berbuat salah kepada adik, sebaiknya kita ....",
              pilihan: ["Pura-pura lupa", "Minta maaf", "Marah"],
              jawaban: 1,
              penjelasan: "Meminta maaf membuat keluarga tetap rukun."
            },
            {
              soal: "Mencuci tangan sebelum makan membuat kita ....",
              pilihan: ["Sakit", "Sehat", "Lapar terus"],
              jawaban: 1,
              penjelasan: "Mencuci tangan menjaga kebersihan agar kita tetap sehat."
            },
            {
              soal: "Saat ayah sedang beristirahat, sebaiknya kita ....",
              pilihan: ["Berteriak keras", "Bermain dengan tenang", "Menyalakan musik keras"],
              jawaban: 1,
              penjelasan: "Menghormati orang lain yang beristirahat adalah bagian dari hidup rukun."
            },
            {
              soal: "Aturan yang baik membuat anggota keluarga menjadi ....",
              pilihan: ["Bahagia", "Sedih", "Takut"],
              jawaban: 0,
              penjelasan: "Mematuhi aturan membuat anggota keluarga nyaman dan bahagia."
            },
            {
              soal: "Baju kotor sebaiknya diletakkan di ....",
              pilihan: ["Keranjang cucian", "Atas kasur", "Lantai ruang tamu"],
              jawaban: 0,
              penjelasan: "Menaruh baju kotor di keranjang cucian menjaga rumah tetap rapi."
            },
            {
              soal: "Berpamitan kepada orang tua menunjukkan sikap ....",
              pilihan: ["Sopan dan bertanggung jawab", "Sombong", "Pemalas"],
              jawaban: 0,
              penjelasan: "Berpamitan menunjukkan sikap sopan dan bertanggung jawab."
            },
            {
              soal: "Jika kakak sedang belajar, sebaiknya kita tidak ....",
              pilihan: ["Mengganggunya", "Ikut belajar", "Diam"],
              jawaban: 0,
              penjelasan: "Tidak mengganggu orang yang sedang belajar adalah sikap menghargai."
            },
            {
              soal: "Hidup rukun dengan keluarga membuat rumah terasa ....",
              pilihan: ["Damai", "Ribut", "Menyeramkan"],
              jawaban: 0,
              penjelasan: "Hidup rukun membuat rumah terasa damai dan menyenangkan."
            }
          ],

          // ---------- SET 4 : Lebih luas (aturan makan, belajar, sekolah, Pancasila) ----------
          [
            {
              soal: "Sebelum makan, sebaiknya kita ....",
              pilihan: ["Mencuci tangan", "Bermain dulu", "Tidur"],
              jawaban: 0,
              penjelasan: "Mencuci tangan sebelum makan menjaga kebersihan agar kita sehat."
            },
            {
              soal: "Saat makan bersama keluarga, kita sebaiknya ....",
              pilihan: ["Berbicara penuh mulut", "Makan dengan sopan", "Berebut makanan"],
              jawaban: 1,
              penjelasan: "Makan dengan sopan adalah salah satu aturan makan di keluarga."
            },
            {
              soal: "Aturan belajar di rumah misalnya ....",
              pilihan: ["Belajar sambil main gawai", "Belajar pada waktu yang sudah ditentukan", "Tidak pernah belajar"],
              jawaban: 1,
              penjelasan: "Belajar pada waktu yang ditentukan membuat kita lebih disiplin."
            },
            {
              soal: "Mengerjakan PR tepat waktu termasuk aturan tentang ....",
              pilihan: ["Bermain", "Belajar", "Tidur"],
              jawaban: 1,
              penjelasan: "Mengerjakan PR adalah bagian dari aturan belajar."
            },
            {
              soal: "Aturan menjaga kebersihan di keluarga contohnya ....",
              pilihan: ["Membuang sampah di tempatnya", "Membiarkan lantai kotor", "Menumpuk piring kotor"],
              jawaban: 0,
              penjelasan: "Membuang sampah pada tempatnya menjaga rumah tetap bersih."
            },
            {
              soal: "Di sekolah, sebelum bertanya kepada guru sebaiknya kita ....",
              pilihan: ["Berteriak", "Mengangkat tangan", "Berlari"],
              jawaban: 1,
              penjelasan: "Mengangkat tangan sebelum bertanya adalah aturan sopan di sekolah."
            },
            {
              soal: "Datang ke sekolah sebaiknya ....",
              pilihan: ["Terlambat", "Tepat waktu", "Sesuka hati"],
              jawaban: 1,
              penjelasan: "Datang tepat waktu adalah aturan yang baik di sekolah."
            },
            {
              soal: "Pancasila memiliki jumlah sila sebanyak ....",
              pilihan: ["3", "5", "7"],
              jawaban: 1,
              penjelasan: "Pancasila terdiri dari 5 sila."
            },
            {
              soal: "Lambang sila pertama Pancasila adalah ....",
              pilihan: ["Bintang", "Rantai", "Padi dan kapas"],
              jawaban: 0,
              penjelasan: "Lambang sila pertama Pancasila adalah Bintang."
            },
            {
              soal: "Membersihkan kelas bersama teman termasuk ....",
              pilihan: ["Gotong royong", "Bertengkar", "Bermalas-malasan"],
              jawaban: 0,
              penjelasan: "Membersihkan kelas bersama adalah contoh gotong royong di sekolah."
            },
            {
              soal: "Apa manfaat menaati aturan?",
              pilihan: ["Hidup jadi kacau", "Hidup jadi tertib dan nyaman", "Dimarahi guru"],
              jawaban: 1,
              penjelasan: "Menaati aturan membuat hidup lebih tertib, aman, dan nyaman."
            },
            {
              soal: "Jika melanggar aturan, biasanya kita akan ....",
              pilihan: ["Mendapat pujian", "Mendapat teguran atau akibatnya", "Mendapat hadiah"],
              jawaban: 1,
              penjelasan: "Melanggar aturan dapat membuat kita ditegur dan merugikan diri sendiri."
            },
            {
              soal: "Berpamitan kepada guru saat pulang menunjukkan sikap ....",
              pilihan: ["Sopan", "Sombong", "Malas"],
              jawaban: 0,
              penjelasan: "Berpamitan dan memberi salam adalah sikap sopan."
            },
            {
              soal: "Menaruh sepatu di rak sepatu adalah aturan di ....",
              pilihan: ["Pasar", "Rumah", "Jalan raya"],
              jawaban: 1,
              penjelasan: "Menaruh sepatu di rak termasuk aturan menjaga kerapian di rumah."
            },
            {
              soal: "Agar badan sehat, sebelum tidur sebaiknya ....",
              pilihan: ["Makan permen banyak", "Menggosok gigi", "Menonton sampai larut"],
              jawaban: 1,
              penjelasan: "Menggosok gigi sebelum tidur menjaga kebersihan dan kesehatan gigi."
            }
          ]

        ],

        /* ===== 3 SET SOAL ESAI ===== */
        esaiSets: [

          // ---------- SET 1 (termasuk PR) ----------
          [
            {
              soal: "Sebutkan 2 contoh aturan yang ada di rumahmu.",
              contohJawaban: "Contoh: tidur tepat waktu, merapikan mainan setelah bermain, membuang sampah di tempatnya."
            },
            {
              soal: "Apa yang terjadi jika di rumah tidak ada aturan?",
              contohJawaban: "Rumah menjadi kotor dan berantakan, serta anggota keluarga berbuat sesuka hati."
            },
            {
              soal: "Mengapa kita harus minta izin sebelum bermain?",
              contohJawaban: "Supaya orang tua tahu kita ada di mana dan merasa tenang."
            },
            {
              soal: "Tuliskan satu manfaat jika kamu mematuhi aturan di rumah.",
              contohJawaban: "Rumah menjadi nyaman, keluarga rukun, dan orang tua merasa senang."
            },
            {
              soal: "PR 1. Jelaskan apa yang dimaksud dengan aturan di rumah!",
              contohJawaban: "Aturan di rumah adalah ketentuan atau kebiasaan baik yang dibuat ayah dan ibu, disepakati seluruh keluarga, dan harus ditaati agar rumah tertib dan nyaman."
            },
            {
              soal: "PR 2. Sebutkan 3 contoh aturan yang biasanya ada di rumahmu!",
              contohJawaban: "Contoh: tidur tepat waktu, merapikan mainan setelah bermain, dan membuang sampah di tempat sampah."
            },
            {
              soal: "PR 3. Mengapa kita harus meminta izin atau berpamitan kepada orang tua sebelum pergi bermain?",
              contohJawaban: "Supaya orang tua tahu kita ada di mana. Dengan begitu mereka tidak bingung mencari dan merasa tenang."
            },
            {
              soal: "PR 4. Apa akibatnya jika kamu tidak mau merapikan mainan setelah selesai bermain?",
              contohJawaban: "Rumah menjadi berantakan dan kotor, mainan bisa hilang atau rusak, dan kita sulit menemukannya saat ingin bermain lagi."
            },
            {
              soal: "PR 5. Bagaimana cara yang baik saat kamu ingin mematikan televisi karena sudah malam dan waktunya tidur?",
              contohJawaban: "Minta izin atau pamit dulu dengan sopan kepada yang sedang menonton, lalu matikan televisi dengan baik, dan pergi tidur tepat waktu."
            }
          ],

          // ---------- SET 2 ----------
          [
            {
              soal: "Mengapa setiap rumah perlu memiliki aturan?",
              contohJawaban: "Agar rumah tertib, bersih, dan nyaman, serta anggota keluarga hidup rukun."
            },
            {
              soal: "Apa yang kamu lakukan setelah selesai bermain?",
              contohJawaban: "Merapikan mainan dan mengembalikannya ke tempat semula supaya rumah rapi."
            },
            {
              soal: "Sebutkan 2 manfaat rumah yang bersih.",
              contohJawaban: "Rumah bersih membuat kita sehat, jauh dari kuman, dan terasa nyaman untuk ditinggali."
            },
            {
              soal: "Bagaimana sikapmu jika ingin meminjam mainan milik kakak?",
              contohJawaban: "Meminta izin terlebih dahulu dengan sopan, lalu menjaganya dan mengembalikannya setelah dipakai."
            },
            {
              soal: "Apa yang sebaiknya kamu lakukan sebelum berangkat ke sekolah?",
              contohJawaban: "Bangun tepat waktu, merapikan tempat tidur, sarapan, dan berpamitan kepada orang tua."
            },
            {
              soal: "Mengapa kita harus membantu orang tua membersihkan rumah?",
              contohJawaban: "Agar pekerjaan cepat selesai, rumah menjadi bersih, dan kita belajar bertanggung jawab."
            },
            {
              soal: "Tuliskan satu aturan tentang waktu tidur dan manfaatnya.",
              contohJawaban: "Tidur tepat waktu malam hari; manfaatnya kita bangun pagi dengan segar dan tidak terlambat sekolah."
            }
          ],

          // ---------- SET 3 ----------
          [
            {
              soal: "Apa yang kamu rasakan saat tinggal di rumah yang rapi dan bersih?",
              contohJawaban: "Merasa nyaman, senang, dan betah berada di rumah."
            },
            {
              soal: "Sebutkan satu cara menjaga kerukunan dengan adik atau kakak.",
              contohJawaban: "Saling berbagi, tidak bertengkar, dan meminta maaf bila berbuat salah."
            },
            {
              soal: "Mengapa kita tidak boleh membuang sampah sembarangan di rumah?",
              contohJawaban: "Karena membuat rumah kotor dan mengundang kuman penyakit; sampah harus dibuang di tempat sampah."
            },
            {
              soal: "Apa yang kamu lakukan jika melihat sepatu berserakan di depan pintu?",
              contohJawaban: "Merapikan sepatu dan menaruhnya di rak sepatu supaya rumah rapi."
            },
            {
              soal: "Bagaimana sikap yang baik saat anggota keluarga lain sedang beristirahat?",
              contohJawaban: "Bermain dengan tenang, tidak berteriak, dan tidak membuat suara keras agar tidak mengganggu."
            },
            {
              soal: "Mengapa kita perlu berpamitan dan memberi salam saat keluar atau masuk rumah?",
              contohJawaban: "Sebagai sikap sopan dan agar orang tua tahu keberadaan kita."
            },
            {
              soal: "Tuliskan satu kegiatan gotong royong yang bisa dilakukan di rumah.",
              contohJawaban: "Membersihkan rumah bersama di akhir pekan, seperti menyapu, mengepel, dan merapikan ruang tamu."
            }
          ],

          // ---------- SET 4 (gaya soal ulangan Kurikulum Merdeka) ----------
          [
            {
              soal: "Sebutkan aturan kebersihan di keluargamu!",
              contohJawaban: "Contoh: membuang sampah di tempat sampah, menyapu lantai, dan merapikan tempat tidur sendiri."
            },
            {
              soal: "Sebutkan aturan makan di keluargamu!",
              contohJawaban: "Contoh: mencuci tangan sebelum makan, berdoa sebelum makan, makan sambil duduk, dan tidak berbicara saat mulut penuh."
            },
            {
              soal: "Sebutkan aturan belajar di keluargamu!",
              contohJawaban: "Contoh: belajar pada waktu yang ditentukan, mengerjakan PR sebelum bermain, dan merapikan buku setelah belajar."
            },
            {
              soal: "Apa manfaat menaati aturan?",
              contohJawaban: "Hidup menjadi tertib, aman, dan nyaman. Rumah bersih, keluarga rukun, dan orang tua senang."
            },
            {
              soal: "Ceritakan pengalamanmu menaati aturan!",
              contohJawaban: "Contoh: Setiap malam aku tidur tepat waktu, jadi pagi hari aku bangun segar dan tidak terlambat ke sekolah."
            },
            {
              soal: "Sebutkan 2 contoh aturan yang ada di sekolah!",
              contohJawaban: "Contoh: datang tepat waktu, memakai seragam, mengangkat tangan sebelum bertanya, dan menjaga kebersihan kelas."
            },
            {
              soal: "Pancasila memiliki berapa sila? Sebutkan salah satu lambangnya!",
              contohJawaban: "Pancasila memiliki 5 sila. Salah satu lambangnya adalah Bintang untuk sila pertama."
            }
          ]

        ],

        /* ===== 3 SET SOAL MENCOCOKKAN JAWABAN =====
         * Anak menghubungkan gambar/kegiatan di KIRI dengan
         * pasangan yang tepat di KANAN (seperti menarik garis).
         *
         * Setiap pasangan punya:
         *   kiri  : { emoji: "🍎", teks: "Apel" }   <- yang ada gambarnya
         *   kanan : "A"                              <- pasangan yang benar
         *
         * Mau pakai gambar sungguhan (bukan emoji)? Isi "gambar"
         * dengan nama file di folder gambar, contoh:
         *   kiri: { gambar: "gambar/apel.png", teks: "Apel" }
         */
        cocokkanSets: [

          // ---------- SET 1 : Kegiatan patuh aturan & manfaatnya ----------
          {
            instruksi: "Pasangkan sikap patuh aturan dengan manfaatnya!",
            pasangan: [
              { kiri: { emoji: "🧹", teks: "Membersihkan rumah" }, kanan: "Rumah menjadi bersih" },
              { kiri: { emoji: "🌙", teks: "Tidur tepat waktu" }, kanan: "Bangun pagi lebih segar" },
              { kiri: { emoji: "🙋", teks: "Berpamitan sebelum pergi" }, kanan: "Orang tua merasa tenang" },
              { kiri: { emoji: "🤝", teks: "Bergotong royong" }, kanan: "Pekerjaan cepat selesai" },
              { kiri: { emoji: "📚", teks: "Belajar tepat waktu" }, kanan: "Siap menerima pelajaran" }
            ]
          },

          // ---------- SET 2 : Aturan diterapkan di mana? ----------
          {
            instruksi: "Pasangkan aturan dengan tempat yang tepat!",
            pasangan: [
              { kiri: { emoji: "🛏️", teks: "Merapikan tempat tidur" }, kanan: "Aturan di rumah" },
              { kiri: { emoji: "🙋‍♂️", teks: "Mengangkat tangan sebelum bertanya" }, kanan: "Aturan di sekolah" },
              { kiri: { emoji: "🍽️", teks: "Makan bersama keluarga" }, kanan: "Aturan di rumah" },
              { kiri: { emoji: "⏰", teks: "Datang tidak terlambat upacara" }, kanan: "Aturan di sekolah" },
              { kiri: { emoji: "🧺", teks: "Menaruh baju kotor di keranjang" }, kanan: "Aturan di rumah" }
            ]
          },

          // ---------- SET 3 : Lambang & bunyi sila Pancasila ----------
          {
            instruksi: "Pasangkan lambang dengan sila Pancasila yang tepat!",
            pasangan: [
              { kiri: { emoji: "⭐", teks: "Bintang" }, kanan: "Sila ke-1" },
              { kiri: { emoji: "⛓️", teks: "Rantai" }, kanan: "Sila ke-2" },
              { kiri: { emoji: "🌳", teks: "Pohon Beringin" }, kanan: "Sila ke-3" },
              { kiri: { emoji: "🐂", teks: "Kepala Banteng" }, kanan: "Sila ke-4" },
              { kiri: { emoji: "🌾", teks: "Padi dan Kapas" }, kanan: "Sila ke-5" }
            ]
          }

        ]
      },

      {
        id: "identitas-diriku",
        judul: "Identitas Diriku",
        emoji: "🪪",
        ringkasan: [
          { emoji: "🪪", teks: "Identitas adalah ciri yang membuat kita dikenali." },
          { emoji: "🧒", teks: "Identitas dapat berupa nama, hobi, bahasa, serta agama dan kepercayaan." },
          { emoji: "⚽", teks: "Hobi Lou boleh berbeda dari hobi teman. Keduanya tetap berharga." },
          { emoji: "🗣️", teks: "Di rumah dan sekolah ada teman yang memakai bahasa yang berbeda." },
          { emoji: "🤝", teks: "Kita menghargai identitas teman, tidak menertawakannya." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Nama, hobi, bahasa, dan agama adalah bagian ....", pilihan: ["identitas", "satuan tidak baku", "turus"], jawaban: 0, penjelasan: "Semuanya membantu orang mengenali kita." },
            { soal: "Teman punya hobi yang berbeda. Sikap yang tepat adalah ....", pilihan: ["menghargai", "menertawakan", "melarang hobinya"], jawaban: 0, penjelasan: "Hobi yang berbeda tetap berharga." },
            { soal: "Bahasa yang dipakai di rumah bisa ....", pilihan: ["berbeda-beda", "wajib sama untuk semua orang", "tidak boleh dipelajari"], jawaban: 0, penjelasan: "Kita menghargai bahasa teman." },
            { soal: "Identitas diri dikenali di lingkungan ....", pilihan: ["rumah dan sekolah", "hanya di dalam buku matematika", "hanya saat hujan"], jawaban: 0, penjelasan: "Keluarga, teman, dan guru mengenal kita di sana." }
          ],
          [
            { soal: "Mengejek hobi teman adalah sikap yang ....", pilihan: ["tidak menghargai", "sesuai identitas", "wajib"], jawaban: 0, penjelasan: "Menghargai berarti tidak menertawakan." },
            { soal: "Agama atau kepercayaan seseorang ....", pilihan: ["dihargai", "boleh diejek", "harus disembunyikan dengan takut"], jawaban: 0, penjelasan: "Perbedaan agama dan kepercayaan dihargai." },
            { soal: "Hobi adalah ....", pilihan: ["kegiatan yang disukai", "nama bilangan", "lambang negara"], jawaban: 0, penjelasan: "Contoh hobi: menggambar, bermain bola, atau membaca." },
            { soal: "Lou suka bola, Mira suka menggambar. Mereka ....", pilihan: ["boleh berteman", "tidak boleh sekelas", "harus berganti hobi"], jawaban: 0, penjelasan: "Hobi berbeda tidak menghalangi pertemanan." }
          ]
        ],
        esaiSets: [[
            { soal: "Sebutkan empat hal yang termasuk identitas.", contohJawaban: "Nama, hobi, bahasa, serta agama atau kepercayaan." },
            { soal: "Bagaimana sikapmu jika hobi teman berbeda?", contohJawaban: "Menghargai dan tidak menertawakannya." },
            { soal: "Di mana identitas kita dikenali?", contohJawaban: "Di rumah dan di sekolah." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan bagian identitas dengan contohnya!",
          pasangan: [
            { kiri: { emoji: "🧒", teks: "Nama" }, kanan: "Ciri panggilan kita" },
            { kiri: { emoji: "⚽", teks: "Hobi" }, kanan: "Kegiatan yang disukai" },
            { kiri: { emoji: "🗣️", teks: "Bahasa" }, kanan: "Cara kita berbicara di rumah" },
            { kiri: { emoji: "🤝", teks: "Sikap yang tepat" }, kanan: "Menghargai perbedaan" }
          ]
        }]
      },

      {
        id: "lambang-negara",
        judul: "Bendera, Lagu, dan Lambang Garuda",
        emoji: "🇮🇩",
        ringkasan: [
          { emoji: "🇮🇩", teks: "Bendera negara Indonesia adalah Merah Putih. Merah di atas, putih di bawah." },
          { emoji: "🎵", teks: "Lagu kebangsaan kita berjudul Indonesia Raya. Saat dinyanyikan, kita berdiri tegak." },
          { emoji: "🦅", teks: "Lambang negara adalah Garuda Pancasila. Di dadanya ada perisai." },
          { emoji: "⭐", teks: "Sila ke-1 Ketuhanan Yang Maha Esa, lambangnya bintang." },
          { emoji: "⛓️", teks: "Sila ke-2 Kemanusiaan yang Adil dan Beradab, lambangnya rantai." },
          { emoji: "🌳", teks: "Sila ke-3 Persatuan Indonesia, lambangnya pohon beringin." },
          { emoji: "🐂", teks: "Sila ke-4 tentang musyawarah, lambangnya kepala banteng." },
          { emoji: "🌾", teks: "Sila ke-5 Keadilan Sosial bagi Seluruh Rakyat Indonesia, lambangnya padi dan kapas." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Warna bendera yang berada di atas adalah ....", pilihan: ["merah", "putih", "biru"], jawaban: 0, penjelasan: "Merah di atas, putih di bawah." },
            { soal: "Lagu kebangsaan Indonesia berjudul ....", pilihan: ["Indonesia Raya", "Garuda Pancasila", "Hari Merdeka saja"], jawaban: 0, penjelasan: "Judul lagu kebangsaan adalah Indonesia Raya." },
            { soal: "Lambang negara Indonesia adalah ....", pilihan: ["Garuda Pancasila", "burung pipit", "bintang saja"], jawaban: 0, penjelasan: "Garuda Pancasila adalah lambang negara." },
            { soal: "Lambang sila pertama adalah ....", pilihan: ["bintang", "rantai", "padi dan kapas"], jawaban: 0, penjelasan: "Bintang untuk Ketuhanan Yang Maha Esa." }
          ],
          [
            { soal: "Saat Indonesia Raya dinyanyikan, kita ....", pilihan: ["berdiri tegak", "duduk santai", "berlari"], jawaban: 0, penjelasan: "Berdiri tegak adalah sikap menghormati lagu kebangsaan." },
            { soal: "Pohon beringin adalah lambang sila ke- ....", pilihan: ["3", "1", "5"], jawaban: 0, penjelasan: "Sila ke-3 Persatuan Indonesia." },
            { soal: "Padi dan kapas adalah lambang sila ke- ....", pilihan: ["5", "2", "4"], jawaban: 0, penjelasan: "Sila ke-5 tentang keadilan sosial." },
            { soal: "Kepala banteng adalah lambang sila yang berkaitan dengan ....", pilihan: ["musyawarah", "bendera", "lagu"], jawaban: 0, penjelasan: "Sila ke-4 tentang kerakyatan dan permusyawaratan." }
          ]
        ],
        esaiSets: [[
            { soal: "Sebutkan warna bendera Indonesia dan letaknya.", contohJawaban: "Merah di atas, putih di bawah." },
            { soal: "Apa judul lagu kebangsaan, dan apa sikap saat menyanyikannya?", contohJawaban: "Indonesia Raya. Kita berdiri tegak." },
            { soal: "Sebutkan lambang sila pertama dan sila kelima.", contohJawaban: "Bintang, serta padi dan kapas." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan sila dengan lambangnya!",
          pasangan: [
            { kiri: { emoji: "⭐", teks: "Sila ke-1" }, kanan: "Bintang" },
            { kiri: { emoji: "⛓️", teks: "Sila ke-2" }, kanan: "Rantai" },
            { kiri: { emoji: "🌳", teks: "Sila ke-3" }, kanan: "Pohon beringin" },
            { kiri: { emoji: "🌾", teks: "Sila ke-5" }, kanan: "Padi dan kapas" }
          ]
        }]
      },

      {
        id: "kerja-sama-keberagaman",
        judul: "Kerja Sama dalam Keberagaman",
        emoji: "🤝",
        ringkasan: [
          { emoji: "🤝", teks: "Di rumah dan sekolah, orang punya kebiasaan yang berbeda-beda." },
          { emoji: "🧹", teks: "Kerja sama berarti melakukan pekerjaan bersama, misalnya piket kelas." },
          { emoji: "🏫", teks: "Lingkungan sekolah adalah bagian dari wilayah Indonesia." },
          { emoji: "🌱", teks: "Menjaga kebersihan kelas adalah sikap menjaga lingkungan sekolah." },
          { emoji: "💬", teks: "Teman yang berbeda bahasa tetap dapat bekerja dalam satu kelompok." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Piket kelas adalah contoh ....", pilihan: ["kerja sama", "bekerja sendirian terus", "mengejek teman"], jawaban: 0, penjelasan: "Piket dilakukan bersama-sama." },
            { soal: "Teman yang berbeda bahasa ....", pilihan: ["tetap dapat satu kelompok", "tidak boleh masuk kelas", "harus diam saja"], jawaban: 0, penjelasan: "Perbedaan bahasa tidak menghalangi kerja sama." },
            { soal: "Menyapu kelas menunjukkan sikap ....", pilihan: ["menjaga lingkungan sekolah", "merusak kelas", "mengabaikan piket"], jawaban: 0, penjelasan: "Kebersihan kelas adalah bagian dari menjaga lingkungan." },
            { soal: "Sekolah tempat kita belajar adalah bagian dari ....", pilihan: ["wilayah Indonesia", "negara lain", "luar angkasa"], jawaban: 0, penjelasan: "Lingkungan sekolah berada di wilayah Indonesia." }
          ],
          [
            { soal: "Kerja sama membuat pekerjaan terasa ....", pilihan: ["lebih ringan", "mustahil", "hanya untuk satu orang"], jawaban: 0, penjelasan: "Beban dibagi bersama." },
            { soal: "Menghargai teman yang berbeda kebiasaan berarti ....", pilihan: ["tetap mau bekerja bersama", "menjauh terus", "memaksa semua sama"], jawaban: 0, penjelasan: "Keberagaman tidak menghapus kerja sama." },
            { soal: "Membuang sampah kelas pada tempatnya adalah ....", pilihan: ["menjaga lingkungan", "kerja sendirian yang buruk", "melanggar piket"], jawaban: 0, penjelasan: "Itu sikap menjaga lingkungan sekolah." },
            { soal: "Satu kelompok boleh berisi teman yang ....", pilihan: ["hobinya berbeda", "harus selalu sama", "tidak boleh berbicara"], jawaban: 0, penjelasan: "Perbedaan hobi masih dapat bekerja sama." }
          ]
        ],
        esaiSets: [[
            { soal: "Apa contoh kerja sama di sekolah?", contohJawaban: "Piket kelas atau membersihkan ruang bersama." },
            { soal: "Mengapa teman yang berbeda bahasa tetap bisa satu kelompok?", contohJawaban: "Karena kerja sama tidak mengharuskan semua orang sama." },
            { soal: "Mengapa menyapu kelas juga menjaga lingkungan?", contohJawaban: "Karena kelas yang bersih adalah lingkungan sekolah yang terawat." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan kegiatan dengan nilainya!",
          pasangan: [
            { kiri: { emoji: "🧹", teks: "Piket kelas" }, kanan: "Kerja sama" },
            { kiri: { emoji: "💬", teks: "Teman beda bahasa" }, kanan: "Tetap satu kelompok" },
            { kiri: { emoji: "🗑️", teks: "Sampah pada tempatnya" }, kanan: "Menjaga lingkungan sekolah" },
            { kiri: { emoji: "🏫", teks: "Sekolah" }, kanan: "Bagian wilayah Indonesia" }
          ]
        }]
      }
    ]
  },

  /* ============================================================
   *  MATA PELAJARAN: PJOK
   *  (Pendidikan Jasmani, Olahraga, dan Kesehatan)
   *  Bab 3 — Ayo, Gerak Menggunakan Benda (gerak manipulatif)
   * ============================================================ */
  {
    id: "pjok",
    nama: "PJOK",
    ikon: "⚽",
    warna: "#2a9d8f",
    deskripsi: "Belajar gerak lokomotor, gerak di tempat, hidup sehat, serta menangkap dan melempar.",
    topik: [
      {
        id: "gerak-menggunakan-benda",
        judul: "Gerak Menggunakan Benda",
        emoji: "🤾",

        ringkasan: [
          { emoji: "🏐", teks: "Gerak sambil memegang benda disebut gerak menggunakan benda atau gerak manipulatif." },
          { emoji: "🏓", teks: "Alat yang dipakai bisa berupa bola, raket, bet, atau tongkat pemukul." },
          { emoji: "🙌", teks: "Contoh gerak manipulatif: menangkap, melempar, menendang, dan memukul bola." },
          { emoji: "🧤", teks: "Menangkap adalah memegang sesuatu yang bergerak. Bisa dengan satu atau dua tangan." },
          { emoji: "🧠", teks: "Manfaat menangkap: melatih konsentrasi dan koordinasi mata, tangan, serta kaki." },
          { emoji: "➡️", teks: "Saat menangkap bola, badan menghadap sumber bola dan kedua tangan dijulurkan ke arah bola." },
          { emoji: "🥅", teks: "Kiper menangkap bola: berdiri di tengah gawang, kaki dibuka lebar, tangan dibuka di depan badan." },
          { emoji: "🎯", teks: "Melempar adalah melontarkan benda ke arah sasaran. Bisa dengan satu atau dua tangan." },
          { emoji: "💪", teks: "Manfaat melempar: memperkuat otot tangan dan melatih konsentrasi." },
          { emoji: "🧺", teks: "Melempar bisa dilakukan berpasangan, ke keranjang sasaran, atau meniru atlet bola basket." },
          { emoji: "🏏", teks: "Memukul bisa dengan alat seperti raket, bet, atau tongkat pemukul, bisa juga tanpa alat." },
          { emoji: "🤸", teks: "Sebelum berolahraga, kita melakukan pemanasan supaya tubuh siap dan tidak cedera." }
        ],

        /* ===== 3 SET SOAL PILIHAN GANDA ===== */
        pilihanGandaSets: [

          // ---------- SET 1 : Dasar gerak manipulatif ----------
          [
            {
              soal: "Gerak sambil memegang atau menggunakan benda disebut gerak ....",
              pilihan: ["Manipulatif", "Lokomotor", "Diam"],
              jawaban: 0,
              penjelasan: "Gerak menggunakan benda disebut gerak manipulatif."
            },
            {
              soal: "Berikut ini yang termasuk gerak manipulatif adalah ....",
              pilihan: ["Menangkap bola", "Duduk diam", "Tidur"],
              jawaban: 0,
              penjelasan: "Menangkap, melempar, menendang, dan memukul bola termasuk gerak manipulatif."
            },
            {
              soal: "Alat yang bisa dipakai untuk gerak manipulatif, kecuali ....",
              pilihan: ["Bola", "Raket", "Bantal tidur"],
              jawaban: 2,
              penjelasan: "Alatnya berupa bola, raket, bet, atau tongkat pemukul."
            },
            {
              soal: "Memegang sesuatu yang bergerak disebut ....",
              pilihan: ["Melempar", "Menangkap", "Memukul"],
              jawaban: 1,
              penjelasan: "Menangkap adalah memegang sesuatu yang bergerak."
            },
            {
              soal: "Menangkap bola dapat dilakukan dengan ....",
              pilihan: ["Kaki saja", "Satu atau dua tangan", "Kepala"],
              jawaban: 1,
              penjelasan: "Menangkap dapat menggunakan satu atau dua tangan."
            },
            {
              soal: "Manfaat gerak dasar menangkap adalah melatih ....",
              pilihan: ["Konsentrasi", "Rasa kantuk", "Rasa lapar"],
              jawaban: 0,
              penjelasan: "Menangkap melatih konsentrasi dan koordinasi."
            },
            {
              soal: "Saat menangkap bola, kedua tangan sebaiknya ....",
              pilihan: ["Disembunyikan", "Dijulurkan ke arah bola", "Dimasukkan ke saku"],
              jawaban: 1,
              penjelasan: "Kedua tangan dijulurkan ke arah bola agar mudah menangkap."
            },
            {
              soal: "Melontarkan benda ke arah sasaran disebut ....",
              pilihan: ["Menangkap", "Melempar", "Menendang"],
              jawaban: 1,
              penjelasan: "Melempar adalah melontarkan benda ke arah sasaran."
            },
            {
              soal: "Manfaat gerak dasar melempar adalah memperkuat otot ....",
              pilihan: ["Tangan", "Mata", "Telinga"],
              jawaban: 0,
              penjelasan: "Melempar memperkuat otot tangan dan melatih konsentrasi."
            },
            {
              soal: "Memukul bola bisa menggunakan alat berupa ....",
              pilihan: ["Raket atau bet", "Sepatu", "Topi"],
              jawaban: 0,
              penjelasan: "Memukul bisa memakai raket, bet, atau tongkat pemukul."
            },
            {
              soal: "Dalam permainan sepak bola, yang bertugas menangkap bola di gawang adalah ....",
              pilihan: ["Kiper", "Wasit", "Penonton"],
              jawaban: 0,
              penjelasan: "Kiper (penjaga gawang) bertugas menangkap bola di gawang."
            },
            {
              soal: "Saat menjadi kiper, kedua kaki sebaiknya ....",
              pilihan: ["Dirapatkan", "Dibuka lebar", "Diangkat"],
              jawaban: 1,
              penjelasan: "Kiper berdiri dengan kedua kaki dibuka lebar agar siap bergerak."
            },
            {
              soal: "Melempar bola ke keranjang melatih ketepatan atau ....",
              pilihan: ["Sasaran", "Tidur", "Makan"],
              jawaban: 0,
              penjelasan: "Melempar ke keranjang melatih ketepatan ke arah sasaran."
            },
            {
              soal: "Gerakan melempar bola ke ring adalah meniru atlet ....",
              pilihan: ["Bola basket", "Renang", "Lari"],
              jawaban: 0,
              penjelasan: "Melempar bola ke ring meniru gerakan atlet bola basket."
            },
            {
              soal: "Sebelum berolahraga, sebaiknya kita melakukan ....",
              pilihan: ["Pemanasan", "Tidur", "Makan banyak"],
              jawaban: 0,
              penjelasan: "Pemanasan membuat tubuh siap dan terhindar dari cedera."
            }
          ],

          // ---------- SET 2 : Menangkap & melempar lebih dalam ----------
          [
            {
              soal: "Saat menangkap bola yang dilempar, posisi badan menghadap ke ....",
              pilihan: ["Pelempar", "Belakang", "Samping"],
              jawaban: 0,
              penjelasan: "Posisi badan menghadap pelempar agar mudah menangkap bola."
            },
            {
              soal: "Setelah bola ditangkap, bola sebaiknya ....",
              pilihan: ["Dilempar sembarangan", "Dipegang dengan erat", "Dijatuhkan"],
              jawaban: 1,
              penjelasan: "Tangkap bola lalu pegang dengan erat agar tidak lepas."
            },
            {
              soal: "Saat menangkap bola yang ditendang, badan menghadap ke arah ....",
              pilihan: ["Penendang bola", "Tembok", "Langit"],
              jawaban: 0,
              penjelasan: "Posisi badan menghadap ke arah penendang bola."
            },
            {
              soal: "Agar bisa menangkap bola yang dipukul, kita perlu ....",
              pilihan: ["Diam saja", "Berlari ke arah datangnya bola", "Menutup mata"],
              jawaban: 1,
              penjelasan: "Berlari ke arah datangnya bola lalu tangkap dengan cepat dan tepat."
            },
            {
              soal: "Pemain kasti menangkap bola dengan kedua tangan bersiap di depan ....",
              pilihan: ["Dada", "Kaki", "Punggung"],
              jawaban: 0,
              penjelasan: "Pemain kasti bersiap dengan kedua tangan di depan dada."
            },
            {
              soal: "Melempar bola berpasangan dilakukan dengan jarak sekitar ....",
              pilihan: ["3–5 meter", "100 meter", "1 sentimeter"],
              jawaban: 0,
              penjelasan: "Jarak antarteman saat melempar berpasangan sekitar 3–5 meter."
            },
            {
              soal: "Setelah menangkap bola dari pasangan, bola sebaiknya ....",
              pilihan: ["Dibuang", "Dikembalikan ke arah pasangan", "Disimpan"],
              jawaban: 1,
              penjelasan: "Kembalikan bola yang dilempar ke arah pasangan."
            },
            {
              soal: "Melempar bola dapat dilakukan ke arah ....",
              pilihan: ["Atas, lurus, atau ke bawah", "Hanya ke bawah", "Tidak ke mana-mana"],
              jawaban: 0,
              penjelasan: "Melempar bisa ke atas, lurus, atau ke bawah."
            },
            {
              soal: "Saat meniru atlet basket, sebelum melempar bola kita melakukan awalan ....",
              pilihan: ["Meloncat", "Tidur", "Jongkok diam"],
              jawaban: 0,
              penjelasan: "Sebelum melempar ke ring, lakukan awalan dengan meloncat."
            },
            {
              soal: "Dalam permainan invasi, menggiring bola berarti ....",
              pilihan: ["Membawa bola sambil bergerak", "Melempar bola jauh", "Duduk memegang bola"],
              jawaban: 0,
              penjelasan: "Menggiring bola adalah membawa bola sambil bergerak maju."
            },
            {
              soal: "Koordinasi berarti mengatur atau ....",
              pilihan: ["Menyelaraskan aktivitas", "Menghentikan gerakan", "Melupakan gerakan"],
              jawaban: 0,
              penjelasan: "Koordinasi adalah mengatur atau menyelaraskan aktivitas."
            },
            {
              soal: "Menangkap bola yang dipukul harus dilakukan dengan cepat dan ....",
              pilihan: ["Tepat", "Lambat", "Malas"],
              jawaban: 0,
              penjelasan: "Tangkap bola dengan cepat dan tepat."
            },
            {
              soal: "Saat melempar bola ke keranjang, kita menghitung berapa kali bola ....",
              pilihan: ["Masuk keranjang", "Jatuh ke tanah", "Hilang"],
              jawaban: 0,
              penjelasan: "Hitung berapa kali bola berhasil masuk ke keranjang."
            },
            {
              soal: "Bermain melempar dan menangkap sebaiknya dilakukan di ....",
              pilihan: ["Lapangan yang luas", "Dalam lemari", "Atas meja makan"],
              jawaban: 0,
              penjelasan: "Bermain bola dilakukan di lapangan yang luas dan aman."
            },
            {
              soal: "Olahraga membuat tubuh kita menjadi ....",
              pilihan: ["Sehat dan kuat", "Lemah", "Sakit"],
              jawaban: 0,
              penjelasan: "Rajin berolahraga membuat tubuh sehat dan kuat."
            }
          ],

          // ---------- SET 3 : Memukul, alat, & kesehatan ----------
          [
            {
              soal: "Memukul bisa dilakukan dengan alat atau ....",
              pilihan: ["Tanpa alat", "Harus tidur", "Sambil makan"],
              jawaban: 0,
              penjelasan: "Memukul dapat menggunakan alat atau tanpa alat."
            },
            {
              soal: "Alat yang dipakai dalam bulu tangkis untuk memukul kok adalah ....",
              pilihan: ["Raket", "Sepatu", "Topi"],
              jawaban: 0,
              penjelasan: "Dalam bulu tangkis, kok dipukul menggunakan raket."
            },
            {
              soal: "Jika tidak ada kok, memukul raket bisa diganti dengan ....",
              pilihan: ["Bola kecil", "Batu besar", "Buku"],
              jawaban: 0,
              penjelasan: "Jika tidak ada kok, dapat diganti dengan bola kecil."
            },
            {
              soal: "Saat memukul memakai raket, raket dipegang dengan tangan ....",
              pilihan: ["Kanan", "Kaki", "Mulut"],
              jawaban: 0,
              penjelasan: "Raket dipegang dengan tangan kanan dan bola di tangan kiri."
            },
            {
              soal: "Alat pemukul dalam permainan kasti disebut ....",
              pilihan: ["Tongkat pemukul", "Payung", "Sendok"],
              jawaban: 0,
              penjelasan: "Dalam kasti, bola dipukul menggunakan tongkat pemukul."
            },
            {
              soal: "Dalam tenis meja, bola dipukul menggunakan ....",
              pilihan: ["Bet", "Raket besar", "Tangan kosong"],
              jawaban: 0,
              penjelasan: "Tenis meja (pingpong) menggunakan bet untuk memukul bola."
            },
            {
              soal: "Memukul bola melatih kekuatan ....",
              pilihan: ["Otot tangan", "Rambut", "Gigi"],
              jawaban: 0,
              penjelasan: "Gerakan memukul melatih kekuatan otot tangan."
            },
            {
              soal: "Agar tidak cedera saat berolahraga, kita perlu ....",
              pilihan: ["Pemanasan dulu", "Langsung lari kencang", "Tidak minum sama sekali"],
              jawaban: 0,
              penjelasan: "Pemanasan sebelum olahraga membantu mencegah cedera."
            },
            {
              soal: "Setelah berolahraga, badan kita biasanya berkeringat. Sebaiknya kita ....",
              pilihan: ["Minum air putih", "Minum es banyak sekali", "Tidak minum"],
              jawaban: 0,
              penjelasan: "Minum air putih mengganti cairan tubuh yang keluar."
            },
            {
              soal: "Pakaian yang baik saat berolahraga adalah ....",
              pilihan: ["Seragam olahraga", "Baju tidur", "Jas hujan tebal"],
              jawaban: 0,
              penjelasan: "Pakaian olahraga nyaman dan mudah bergerak."
            },
            {
              soal: "Bermain bola bersama teman melatih sikap ....",
              pilihan: ["Kerja sama", "Egois", "Curang"],
              jawaban: 0,
              penjelasan: "Bermain bersama melatih kerja sama dan sportivitas."
            },
            {
              soal: "Saat kalah dalam permainan, sikap yang baik adalah ....",
              pilihan: ["Menerima dengan lapang dada", "Marah-marah", "Menangis keras"],
              jawaban: 0,
              penjelasan: "Sikap sportif adalah menerima kekalahan dengan lapang dada."
            },
            {
              soal: "Memukul kok atau bola dapat diarahkan ke ....",
              pilihan: ["Berbagai arah", "Satu arah saja", "Tidak ke mana-mana"],
              jawaban: 0,
              penjelasan: "Kok atau bola bisa dipukul ke berbagai arah."
            },
            {
              soal: "Olahraga sebaiknya dilakukan secara ....",
              pilihan: ["Teratur", "Sekali seumur hidup", "Tidak pernah"],
              jawaban: 0,
              penjelasan: "Olahraga teratur membuat tubuh sehat dan bugar."
            },
            {
              soal: "Menangkap, melempar, dan memukul banyak digunakan dalam ....",
              pilihan: ["Berbagai macam olahraga", "Kegiatan tidur", "Membaca buku"],
              jawaban: 0,
              penjelasan: "Gerak manipulatif banyak digunakan dalam berbagai olahraga."
            }
          ]

        ],

        /* ===== 3 SET SOAL ESAI ===== */
        esaiSets: [

          // ---------- SET 1 ----------
          [
            {
              soal: "Apa yang dimaksud dengan gerak manipulatif?",
              contohJawaban: "Gerak manipulatif adalah gerak yang dilakukan sambil menggunakan atau memegang benda, misalnya bola atau raket."
            },
            {
              soal: "Sebutkan 3 contoh gerak manipulatif menggunakan bola.",
              contohJawaban: "Contoh: menangkap bola, melempar bola, menendang bola, dan memukul bola."
            },
            {
              soal: "Apa manfaat gerak dasar menangkap?",
              contohJawaban: "Melatih konsentrasi serta koordinasi antara mata, tangan, dan kaki."
            },
            {
              soal: "Bagaimana posisi badan dan tangan saat akan menangkap bola yang dilempar?",
              contohJawaban: "Badan menghadap pelempar, kedua tangan dijulurkan ke arah bola, lalu tangkap dan pegang dengan erat."
            },
            {
              soal: "Sebutkan alat-alat yang bisa digunakan untuk memukul.",
              contohJawaban: "Raket, bet, dan tongkat pemukul."
            },
            {
              soal: "Mengapa kita perlu melakukan pemanasan sebelum berolahraga?",
              contohJawaban: "Agar tubuh siap bergerak dan terhindar dari cedera."
            }
          ],

          // ---------- SET 2 ----------
          [
            {
              soal: "Jelaskan cara menjadi kiper saat menangkap bola.",
              contohJawaban: "Berdiri siap di tengah gawang, kedua kaki dibuka lebar, kedua tangan dibuka di depan badan, lalu tangkap bola yang datang."
            },
            {
              soal: "Apa yang dimaksud dengan melempar?",
              contohJawaban: "Melempar adalah melontarkan benda ke arah sasaran, bisa dengan satu atau dua tangan."
            },
            {
              soal: "Bagaimana cara melempar bola berpasangan?",
              contohJawaban: "Berdiri berpasangan dengan jarak 3–5 meter, lempar bola ke pasangan, pasangan menangkap lalu mengembalikannya."
            },
            {
              soal: "Sebutkan manfaat gerak dasar melempar.",
              contohJawaban: "Memperkuat otot tangan dan melatih konsentrasi."
            },
            {
              soal: "Bagaimana cara menangkap bola yang dipukul?",
              contohJawaban: "Arahkan pandangan ke pemukul, berlari ke arah datangnya bola, lalu tangkap dengan cepat dan tepat."
            },
            {
              soal: "Apa arti koordinasi dalam gerak tubuh?",
              contohJawaban: "Koordinasi adalah mengatur atau menyelaraskan aktivitas, misalnya gerakan mata, tangan, dan kaki."
            }
          ],

          // ---------- SET 3 ----------
          [
            {
              soal: "Sebutkan 3 olahraga yang menggunakan gerakan memukul.",
              contohJawaban: "Contoh: bulu tangkis (raket), tenis meja (bet), dan kasti (tongkat pemukul)."
            },
            {
              soal: "Bagaimana cara meniru atlet bola basket saat melempar?",
              contohJawaban: "Berdiri di depan ring, pegang bola dengan dua tangan, lakukan awalan meloncat, lalu lempar bola ke arah ring."
            },
            {
              soal: "Mengapa kita harus minum air putih setelah berolahraga?",
              contohJawaban: "Untuk mengganti cairan tubuh yang keluar menjadi keringat agar tidak lemas."
            },
            {
              soal: "Bagaimana sikap yang baik saat kalah dalam permainan?",
              contohJawaban: "Menerima kekalahan dengan lapang dada, tidak marah, dan tetap bersemangat berlatih (sikap sportif)."
            },
            {
              soal: "Ceritakan pengalamanmu bermain lempar tangkap bola dengan teman.",
              contohJawaban: "Contoh: Aku dan temanku berdiri berjarak beberapa meter, saling melempar dan menangkap bola sambil tertawa gembira."
            },
            {
              soal: "Apa manfaat berolahraga secara teratur bagi tubuh?",
              contohJawaban: "Tubuh menjadi sehat, kuat, dan bugar, serta pikiran lebih segar."
            }
          ]

        ],

        /* ===== 3 SET SOAL MENCOCOKKAN JAWABAN ===== */
        cocokkanSets: [

          // ---------- SET 1 : Gerak dasar & artinya ----------
          {
            instruksi: "Pasangkan gerak dasar dengan artinya!",
            pasangan: [
              { kiri: { emoji: "🧤", teks: "Menangkap" }, kanan: "Memegang benda yang bergerak" },
              { kiri: { emoji: "🎯", teks: "Melempar" }, kanan: "Melontarkan benda ke sasaran" },
              { kiri: { emoji: "🏏", teks: "Memukul" }, kanan: "Mengenai bola dengan alat" },
              { kiri: { emoji: "🦵", teks: "Menendang" }, kanan: "Menyepak bola dengan kaki" },
              { kiri: { emoji: "🏀", teks: "Menggiring" }, kanan: "Membawa bola sambil bergerak" }
            ]
          },

          // ---------- SET 2 : Olahraga & alatnya ----------
          {
            instruksi: "Pasangkan olahraga dengan alat yang digunakan!",
            pasangan: [
              { kiri: { emoji: "🏸", teks: "Bulu tangkis" }, kanan: "Raket dan kok" },
              { kiri: { emoji: "🏓", teks: "Tenis meja" }, kanan: "Bet dan bola kecil" },
              { kiri: { emoji: "🥎", teks: "Kasti" }, kanan: "Tongkat pemukul" },
              { kiri: { emoji: "🏀", teks: "Bola basket" }, kanan: "Bola dan ring" },
              { kiri: { emoji: "⚽", teks: "Sepak bola" }, kanan: "Bola dan gawang" }
            ]
          },

          // ---------- SET 3 : Gerakan & peran dalam olahraga ----------
          {
            instruksi: "Pasangkan peran pemain dengan tugasnya!",
            pasangan: [
              { kiri: { emoji: "🥅", teks: "Kiper" }, kanan: "Menangkap bola di gawang" },
              { kiri: { emoji: "🏏", teks: "Pemukul kasti" }, kanan: "Memukul bola dengan tongkat" },
              { kiri: { emoji: "🤾", teks: "Pelempar" }, kanan: "Melempar bola ke pemain lain" },
              { kiri: { emoji: "🏃", teks: "Penggiring bola" }, kanan: "Membawa bola sambil berlari" },
              { kiri: { emoji: "🤸", teks: "Sebelum olahraga" }, kanan: "Melakukan pemanasan" }
            ]
          }

        ]
      },

      {
        id: "gerak-lokomotor",
        judul: "Gerak Lokomotor",
        emoji: "🏃",
        ringkasan: [
          { emoji: "🏃", teks: "Gerak lokomotor memindahkan tubuh dari satu tempat ke tempat lain." },
          { emoji: "🚶", teks: "Berjalan adalah langkah yang tenang." },
          { emoji: "🏃", teks: "Berlari lebih cepat daripada berjalan." },
          { emoji: "🦘", teks: "Melompat memakai tolakan dua kaki." },
          { emoji: "🦵", teks: "Meloncat memakai tolakan satu kaki." },
          { emoji: "👀", teks: "Lihat ke depan dan jaga jarak supaya tidak bertabrakan." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Gerak yang memindahkan tubuh disebut gerak ....", pilihan: ["lokomotor", "diam", "duduk"], jawaban: 0, penjelasan: "Lokomotor berarti tubuh berpindah tempat." },
            { soal: "Berlari berbeda dari berjalan karena berlari ....", pilihan: ["lebih cepat", "tidak memakai kaki", "selalu di tempat"], jawaban: 0, penjelasan: "Lari lebih cepat daripada jalan." },
            { soal: "Tolakan dua kaki disebut ....", pilihan: ["melompat", "meloncat", "duduk"], jawaban: 0, penjelasan: "Melompat bertolak dengan dua kaki." },
            { soal: "Tolakan satu kaki disebut ....", pilihan: ["meloncat", "melompat", "berbaring"], jawaban: 0, penjelasan: "Meloncat bertolak dengan satu kaki." }
          ],
          [
            { soal: "Saat berlari, pandangan sebaiknya ke ....", pilihan: ["depan", "mata tertutup", "belakang terus"], jawaban: 0, penjelasan: "Melihat ke depan membantu kita tidak bertabrakan." },
            { soal: "Berjalan adalah gerak ....", pilihan: ["lokomotor", "yang tidak memakai tubuh", "hanya gerak tangan"], jawaban: 0, penjelasan: "Berjalan memindahkan tubuh." },
            { soal: "Jaga jarak saat bergerak bersama agar ....", pilihan: ["tidak bertabrakan", "semua berhenti", "tidak ada yang bergerak"], jawaban: 0, penjelasan: "Jarak membuat gerak lebih aman." },
            { soal: "Gerak di tempat tanpa pindah ....", pilihan: ["bukan lokomotor", "selalu disebut lari", "disebut melompat dua kaki"], jawaban: 0, penjelasan: "Lokomotor harus berpindah tempat." }
          ]
        ],
        esaiSets: [[
            { soal: "Apa yang dimaksud gerak lokomotor?", contohJawaban: "Gerak yang memindahkan tubuh ke tempat lain." },
            { soal: "Apa beda melompat dan meloncat?", contohJawaban: "Melompat bertolak dengan dua kaki. Meloncat bertolak dengan satu kaki." },
            { soal: "Sebutkan dua gerak lokomotor selain berlari.", contohJawaban: "Berjalan, melompat, atau meloncat." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan gerak dengan caranya!",
          pasangan: [
            { kiri: { emoji: "🚶", teks: "Berjalan" }, kanan: "Langkah yang tenang" },
            { kiri: { emoji: "🏃", teks: "Berlari" }, kanan: "Lebih cepat dari berjalan" },
            { kiri: { emoji: "🦘", teks: "Melompat" }, kanan: "Tolakan dua kaki" },
            { kiri: { emoji: "🦵", teks: "Meloncat" }, kanan: "Tolakan satu kaki" }
          ]
        }]
      },

      {
        id: "gerak-di-tempat",
        judul: "Gerak di Tempat dan Berirama",
        emoji: "🤸",
        ringkasan: [
          { emoji: "🤸", teks: "Gerak nonlokomotor dilakukan di tempat. Tubuh tidak berpindah." },
          { emoji: "🙇", teks: "Menekuk, memutar, mengayun, dan meregang adalah gerak di tempat." },
          { emoji: "🥁", teks: "Gerak berirama mengikuti tepukan, hitungan, atau lagu." },
          { emoji: "👏", teks: "Contoh: angkat tangan ke atas pada tepukan pertama, turunkan pada tepukan kedua." },
          { emoji: "👀", teks: "Tiru gerakan dengan pelan lebih dulu, baru ikuti iramanya." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Gerak yang tidak berpindah tempat disebut ....", pilihan: ["nonlokomotor", "lari cepat", "lompat jauh"], jawaban: 0, penjelasan: "Tubuh tetap di tempat." },
            { soal: "Memutar badan di tempat termasuk gerak ....", pilihan: ["nonlokomotor", "lokomotor", "renang"], jawaban: 0, penjelasan: "Badan berputar, tetapi kaki tidak pindah tempat." },
            { soal: "Gerak berirama mengikuti ....", pilihan: ["tepukan atau lagu", "arah angin saja", "jumlah turus"], jawaban: 0, penjelasan: "Irama menjadi pengaturnya." },
            { soal: "Sebelum mengikuti irama cepat, kita ....", pilihan: ["meniru gerak pelan dulu", "menutup mata dan berlari", "duduk sepanjang waktu"], jawaban: 0, penjelasan: "Gerakan pelan membantu tubuh meniru dengan benar." }
          ],
          [
            { soal: "Meregangkan tangan ke atas tanpa melangkah adalah gerak ....", pilihan: ["di tempat", "lokomotor", "meloncat"], jawaban: 0, penjelasan: "Tubuh tidak berpindah." },
            { soal: "Mengayun lengan seperti bandul dilakukan ....", pilihan: ["di tempat", "sambil wajib berlari", "hanya di air"], jawaban: 0, penjelasan: "Ayunan lengan adalah gerak nonlokomotor." },
            { soal: "Pada tepukan pertama tangan diangkat, pada tepukan kedua tangan turun. Itu gerak ....", pilihan: ["berirama", "tanpa aturan", "hanya diam"], jawaban: 0, penjelasan: "Gerak berubah sesuai tepukan." },
            { soal: "Menekuk lutut sedikit sambil berdiri termasuk ....", pilihan: ["nonlokomotor", "lari", "pindah kelas"], jawaban: 0, penjelasan: "Lutut ditekuk, tempat berdiri tetap." }
          ]
        ],
        esaiSets: [[
            { soal: "Sebutkan tiga gerak di tempat.", contohJawaban: "Menekuk, memutar, mengayun, atau meregang." },
            { soal: "Apa yang dimaksud gerak berirama?", contohJawaban: "Gerak yang mengikuti tepukan, hitungan, atau lagu." },
            { soal: "Mengapa gerak pelan dilakukan lebih dulu?", contohJawaban: "Agar tubuh dapat meniru gerakan dengan benar sebelum iramanya lebih cepat." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan gerak dengan jenisnya!",
          pasangan: [
            { kiri: { emoji: "🙇", teks: "Menekuk" }, kanan: "Gerak di tempat" },
            { kiri: { emoji: "🔄", teks: "Memutar badan" }, kanan: "Tidak berpindah tempat" },
            { kiri: { emoji: "👏", teks: "Ikut tepukan" }, kanan: "Gerak berirama" },
            { kiri: { emoji: "🤸", teks: "Meregang" }, kanan: "Tubuh tetap di tempat" }
          ]
        }]
      },

      {
        id: "tubuh-bersih-bugar",
        judul: "Tubuh Bersih dan Bugar",
        emoji: "💪",
        ringkasan: [
          { emoji: "💪", teks: "Kebugaran dijaga dengan bergerak, pemanasan, dan istirahat." },
          { emoji: "🤸", teks: "Pemanasan menyiapkan otot sebelum bermain lebih kuat." },
          { emoji: "💧", teks: "Minum air setelah bergerak. Berhenti jika tubuh terlalu lelah." },
          { emoji: "🧼", teks: "Hidup bersih: cuci tangan, sikat gigi, dan mandi." },
          { emoji: "👀", teks: "Mata, telinga, tangan, dan kaki punya tugas. Kita merawatnya." },
          { emoji: "👕", teks: "Pakai pakaian yang mudah bergerak saat berolahraga." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Sebelum bermain lebih kuat, kita melakukan ....", pilihan: ["pemanasan", "langsung tidur", "makan permen dulu"], jawaban: 0, penjelasan: "Pemanasan menyiapkan tubuh." },
            { soal: "Setelah bergerak, kita ....", pilihan: ["minum air", "menahan haus terus", "menutup hidung"], jawaban: 0, penjelasan: "Air mengganti cairan yang keluar." },
            { soal: "Cuci tangan, sikat gigi, dan mandi adalah ....", pilihan: ["pola hidup bersih", "gerak lokomotor", "soal pecahan"], jawaban: 0, penjelasan: "Kebersihan diri bagian dari hidup sehat." },
            { soal: "Jika tubuh terlalu lelah, kita ....", pilihan: ["berhenti dan istirahat", "terus berlari tanpa napas", "tidak minum sama sekali"], jawaban: 0, penjelasan: "Istirahat menjaga tubuh tetap aman." }
          ],
          [
            { soal: "Mata berguna untuk ....", pilihan: ["melihat", "mendengar", "mengunyah"], jawaban: 0, penjelasan: "Setiap anggota tubuh punya tugas." },
            { soal: "Pakaian olahraga sebaiknya ....", pilihan: ["mudah dipakai bergerak", "sangat sempit dan kaku", "basah sejak awal"], jawaban: 0, penjelasan: "Pakaian yang leluasa membantu gerak." },
            { soal: "Telinga berguna untuk ....", pilihan: ["mendengar", "melihat warna", "berlari"], jawaban: 0, penjelasan: "Kita menjaga telinga dari suara yang terlalu keras." },
            { soal: "Gerak yang teratur membantu tubuh menjadi ....", pilihan: ["lebih bugar", "tidak perlu istirahat selamanya", "tidak perlu air"], jawaban: 0, penjelasan: "Kebugaran tumbuh dari gerak, air, dan istirahat." }
          ]
        ],
        esaiSets: [[
            { soal: "Mengapa pemanasan dilakukan sebelum bermain?", contohJawaban: "Agar otot siap dan tubuh lebih aman saat bergerak lebih kuat." },
            { soal: "Sebutkan tiga kebiasaan hidup bersih.", contohJawaban: "Cuci tangan, sikat gigi, dan mandi." },
            { soal: "Apa yang dilakukan jika tubuh terlalu lelah?", contohJawaban: "Berhenti, istirahat, dan minum air." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan anggota tubuh dengan tugasnya!",
          pasangan: [
            { kiri: { emoji: "👀", teks: "Mata" }, kanan: "Melihat" },
            { kiri: { emoji: "👂", teks: "Telinga" }, kanan: "Mendengar" },
            { kiri: { emoji: "🦵", teks: "Kaki" }, kanan: "Berjalan dan berlari" },
            { kiri: { emoji: "💪", teks: "Istirahat" }, kanan: "Saat tubuh terlalu lelah" }
          ]
        }]
      }
    ]
  },

  /* ============================================================
   *  MATA PELAJARAN: AGAMA (Pendidikan Agama Kristen)
   *  Materi 1 — Menjalani Hidup Rukun dengan Tetangga
   *  (Kelas 2 Semester 1)
   *
   *  Mata pelajaran ini punya SATU bagian tambahan khusus:
   *  "ayatAlkitab" — berisi ayat-ayat Alkitab beserta maknanya
   *  yang muncul sebagai tab "📜 Ayat Alkitab" di aplikasi.
   * ============================================================ */
  {
    id: "agama",
    nama: "Agama",
    ikon: "✝️",
    warna: "#8338ec",
    deskripsi: "Belajar keluarga, teman, guru, tubuh, gereja, Alkitab, perbedaan, dan kisah para nabi.",
    topik: [
      {
        id: "hidup-rukun-dengan-tetangga",
        judul: "Menjalani Hidup Rukun dengan Tetangga",
        emoji: "🏘️",

        ringkasan: [
          { emoji: "🏠", teks: "Tetangga adalah orang yang tinggal di sekitar rumah kita. Kita hidup berdampingan dengan mereka." },
          { emoji: "😊", teks: "Hidup rukun dengan tetangga membuat suasana menjadi damai, nyaman, dan penuh kebahagiaan." },
          { emoji: "👋", teks: "Kita bisa menunjukkan sikap rukun dengan cara menyapa, membantu, dan bermain bersama." },
          { emoji: "🗣️", teks: "Menyapa dan berbicara dengan sopan kepada tetangga adalah hal baik yang sederhana tetapi penting." },
          { emoji: "🤝", teks: "Jika ada tetangga yang membutuhkan bantuan, kita mau menolongnya dengan tulus." },
          { emoji: "🌈", teks: "Kita menghargai perbedaan di lingkungan tempat tinggal, termasuk perbedaan keyakinan." },
          { emoji: "🧑‍🤝‍🧑", teks: "Manusia tidak dapat hidup sendiri. Kita bertumbuh berkat kehadiran orang tua, teman, tetangga, dan guru." },
          { emoji: "💛", teks: "Hubungan dengan orang lain menjadi baik bila ada sikap saling mengasihi dan menghargai." },
          { emoji: "⚠️", teks: "Hubungan bisa rusak jika salah satu ingin menang sendiri (egois)." },
          { emoji: "🧹", teks: "Salah satu bentuk nyata hidup rukun adalah kerja bakti membersihkan lingkungan bersama tetangga." },
          { emoji: "📖", teks: "Kitab Mazmur mengajarkan bahwa orang yang dekat dengan Tuhan adalah mereka yang jujur dan berbuat baik kepada sesama." },
          { emoji: "🙏", teks: "Sikap rukun ditunjukkan dengan perilaku jujur, adil, tidak menyakiti, dan tidak memfitnah tetangga." },
          { emoji: "😇", teks: "Dari cerita Michael kita belajar bahwa hal kecil seperti menyapa dan membantu bisa membawa kebahagiaan bagi banyak orang." }
        ],

        /* ===== BAGIAN KHUSUS: AYAT ALKITAB ===== */
        ayatAlkitab: [
          {
            referensi: "Mazmur 15:1-5",
            teks: "Tuhan, siapa yang boleh menumpang dalam kemah-Mu? Yaitu dia yang berlaku tidak bercela, yang melakukan apa yang adil dan mengatakan kebenaran dengan segenap hatinya; yang tidak menyebarkan fitnah dengan lidahnya, yang tidak berbuat jahat terhadap temannya dan yang tidak menimpakan cela kepada tetangganya. Siapa yang berlaku demikian, tidak akan goyah selama-lamanya.",
            makna: "Orang yang dekat dengan Tuhan adalah mereka yang hidup jujur, berbuat baik, berkata benar, dan tidak menyakiti sesama, termasuk tetangga."
          },
          {
            referensi: "Ibrani 13:16",
            teks: "Janganlah kamu lupa berbuat baik dan memberi bantuan, sebab korban-korban yang demikianlah yang berkenan kepada Allah.",
            makna: "Tuhan senang bila kita mau berbuat baik dan menolong orang lain, seperti menolong tetangga yang membutuhkan."
          },
          {
            referensi: "Pesan dari Cerita Michael",
            teks: "Hidup rukun dengan tetangga dapat diwujudkan melalui tindakan sederhana: menyapa dengan sopan, membantu sesama yang membutuhkan, dan menghargai perbedaan.",
            makna: "Michael menyapa Bu Lina, bermain dengan semua teman tanpa memilih-milih, dan membantu Bapak Yohanes membawa belanjaan. Hal-hal kecil itu membuat lingkungan menjadi hangat dan bahagia."
          }
        ],

        /* ===== 3 SET SOAL PILIHAN GANDA ===== */
        pilihanGandaSets: [

          // ---------- SET 1 : Dasar hidup rukun (dari buku) ----------
          [
            {
              soal: "Hidup rukun dengan tetangga membuat lingkungan menjadi ....",
              pilihan: ["Sepi", "Tidak nyaman", "Damai dan bahagia"],
              jawaban: 2,
              penjelasan: "Hidup rukun membuat lingkungan menjadi damai, nyaman, dan penuh kebahagiaan."
            },
            {
              soal: "Contoh sikap hidup rukun dengan tetangga adalah ....",
              pilihan: ["Tidak mau menyapa", "Saling membantu", "Bertengkar"],
              jawaban: 1,
              penjelasan: "Saling membantu adalah salah satu bentuk hidup rukun dengan tetangga."
            },
            {
              soal: "Saat ada teman yang merayakan hari raya keagamaan yang berbeda, sebaiknya kita mengucapkan ....",
              pilihan: ["Tidak boleh merayakan", "Ejekan kepadanya", "Selamat hari raya"],
              jawaban: 2,
              penjelasan: "Mengucapkan selamat hari raya menunjukkan sikap menghargai perbedaan keyakinan."
            },
            {
              soal: "Jika ada tetangga yang membutuhkan bantuan, kita harus ....",
              pilihan: ["Membiarkan", "Membantu", "Mengejek"],
              jawaban: 1,
              penjelasan: "Kita mau menolong tetangga yang membutuhkan dengan tulus."
            },
            {
              soal: "Mengasihi sesama berarti ....",
              pilihan: ["Membenci teman", "Peduli dan berbuat baik", "Tidak mau berbagi"],
              jawaban: 1,
              penjelasan: "Mengasihi sesama berarti peduli dan berbuat baik kepada orang lain."
            },
            {
              soal: "Orang yang tinggal di sekitar rumah kita disebut ....",
              pilihan: ["Tetangga", "Hewan peliharaan", "Tanaman"],
              jawaban: 0,
              penjelasan: "Tetangga adalah orang yang tinggal di sekitar rumah kita."
            },
            {
              soal: "Kepada tetangga, sebaiknya kita berbicara dengan ....",
              pilihan: ["Kasar", "Sopan", "Marah"],
              jawaban: 1,
              penjelasan: "Kita bisa menyapa dan berbicara dengan sopan kepada tetangga."
            },
            {
              soal: "Salah satu bentuk nyata hidup rukun di lingkungan adalah ....",
              pilihan: ["Kerja bakti bersama", "Bertengkar", "Menyendiri"],
              jawaban: 0,
              penjelasan: "Kerja bakti membersihkan lingkungan bersama adalah bentuk nyata hidup rukun."
            },
            {
              soal: "Menurut Kitab Mazmur, orang yang dekat dengan Tuhan adalah mereka yang ....",
              pilihan: ["Suka memfitnah", "Berbuat baik kepada sesama", "Menyakiti tetangga"],
              jawaban: 1,
              penjelasan: "Kitab Mazmur mengajarkan orang yang dekat dengan Tuhan adalah yang berbuat baik kepada sesama."
            },
            {
              soal: "Michael membantu Bapak Yohanes yang kesulitan membawa ....",
              pilihan: ["Belanjaan", "Sepeda", "Buku sekolah"],
              jawaban: 0,
              penjelasan: "Michael segera menolong Bapak Yohanes yang kesulitan membawa belanjaan."
            },
            {
              soal: "Michael adalah anak yang dikenal sangat ....",
              pilihan: ["Pemarah", "Ramah", "Pemalas"],
              jawaban: 1,
              penjelasan: "Michael dikenal sebagai anak yang sangat ramah dan suka menyapa."
            },
            {
              soal: "Dalam memilih teman bermain, Michael ....",
              pilihan: ["Memilih-milih teman", "Tidak pernah memilih-milih teman", "Hanya mau sendiri"],
              jawaban: 1,
              penjelasan: "Michael tidak pernah memilih-milih teman dan mengajak semua anak bermain bersama."
            }
          ],

          // ---------- SET 2 : Tetangga & sikap baik (dari kuis) ----------
          [
            {
              soal: "Di setiap tempat tinggal, pasti memiliki ....",
              pilihan: ["Tetangga", "Mobil", "Komputer"],
              jawaban: 0,
              penjelasan: "Di setiap tempat tinggal pasti ada tetangga di sekitar kita."
            },
            {
              soal: "Berikut yang BUKAN sikap menjaga kerukunan adalah ....",
              pilihan: ["Tidak bertengkar", "Saling membantu", "Saling mengejek"],
              jawaban: 2,
              penjelasan: "Saling mengejek bukan sikap menjaga kerukunan."
            },
            {
              soal: "Sikap baik kita terhadap tetangga adalah ....",
              pilihan: ["Saling membenci", "Saling menyapa", "Saling memusuhi"],
              jawaban: 1,
              penjelasan: "Saling menyapa, menghormati, dan menolong adalah sikap baik terhadap tetangga."
            },
            {
              soal: "Sikap yang TIDAK boleh kita lakukan terhadap tetangga adalah ....",
              pilihan: ["Menjaga kebersihan lingkungan", "Membantu saat kesusahan", "Membuat keributan"],
              jawaban: 2,
              penjelasan: "Membuat keributan dan tidak peduli adalah sikap yang tidak boleh dilakukan."
            },
            {
              soal: "Manusia tidak dapat hidup ....",
              pilihan: ["Bersama", "Sendiri", "Rukun"],
              jawaban: 1,
              penjelasan: "Manusia memiliki dorongan membangun hubungan karena tidak dapat hidup sendiri."
            },
            {
              soal: "Kita bertumbuh dan berkembang berkat kehadiran ....",
              pilihan: ["Orang lain", "Benda mati", "Diri sendiri saja"],
              jawaban: 0,
              penjelasan: "Setiap orang bertumbuh berkat kehadiran orang tua, teman, tetangga, dan guru."
            },
            {
              soal: "Hubungan dengan orang lain bisa rusak jika salah satu bersikap ....",
              pilihan: ["Mengasihi", "Menghargai", "Egois (ingin menang sendiri)"],
              jawaban: 2,
              penjelasan: "Hubungan menjadi rusak bila salah satu ingin menang sendiri atau egois."
            },
            {
              soal: "Saat teman sedang sakit, sikap yang baik adalah ....",
              pilihan: ["Mengejeknya", "Menjenguk dan mendoakannya", "Membiarkannya"],
              jawaban: 1,
              penjelasan: "Menjenguk teman yang sakit dan mendoakannya adalah sikap yang baik."
            },
            {
              soal: "Mengejek teman karena berbeda keyakinan adalah sikap yang ....",
              pilihan: ["Baik", "Tidak baik", "Terpuji"],
              jawaban: 1,
              penjelasan: "Mengejek teman karena berbeda keyakinan adalah sikap yang tidak baik."
            },
            {
              soal: "Teman adalah anugerah dari ....",
              pilihan: ["Allah", "Diri sendiri", "Televisi"],
              jawaban: 0,
              penjelasan: "Teman adalah anugerah dari Allah yang harus kita syukuri dan jaga."
            },
            {
              soal: "Memberi hadiah kepada teman yang berulang tahun termasuk sikap ....",
              pilihan: ["Baik", "Buruk", "Egois"],
              jawaban: 0,
              penjelasan: "Memberi hadiah kepada teman yang berulang tahun adalah sikap yang baik."
            },
            {
              soal: "Bertengkar dengan teman karena hal kecil adalah sikap yang ....",
              pilihan: ["Baik", "Tidak baik", "Terpuji"],
              jawaban: 1,
              penjelasan: "Bertengkar karena hal kecil adalah sikap yang tidak baik dan merusak kerukunan."
            }
          ],

          // ---------- SET 3 : Ayat Alkitab & nilai iman ----------
          [
            {
              soal: "Ayat 'Siapa yang boleh datang kepada Tuhan?' terdapat dalam kitab ....",
              pilihan: ["Mazmur 15:1-5", "Kejadian 1", "Wahyu 22"],
              jawaban: 0,
              penjelasan: "Pertanyaan 'Siapa yang boleh datang kepada Tuhan?' ada di Mazmur 15:1-5."
            },
            {
              soal: "Menurut Mazmur, orang yang berkenan di hadapan Tuhan tidak ... terhadap tetangganya.",
              pilihan: ["Menimpakan cela", "Berbuat baik", "Menolong"],
              jawaban: 0,
              penjelasan: "Mazmur 15 berkata orang itu tidak menimpakan cela kepada tetangganya."
            },
            {
              soal: "Ibrani 13:16 mengajak kita untuk tidak lupa ....",
              pilihan: ["Berbuat baik dan memberi bantuan", "Bermain seharian", "Menonton televisi"],
              jawaban: 0,
              penjelasan: "Ibrani 13:16: jangan lupa berbuat baik dan memberi bantuan."
            },
            {
              soal: "Perbuatan baik dan memberi bantuan menurut Ibrani 13:16 adalah korban yang ....",
              pilihan: ["Berkenan kepada Allah", "Sia-sia", "Tidak berguna"],
              jawaban: 0,
              penjelasan: "Korban berupa perbuatan baik itulah yang berkenan kepada Allah."
            },
            {
              soal: "Sikap hidup rukun ditunjukkan dengan perilaku ....",
              pilihan: ["Jujur dan adil", "Suka memfitnah", "Suka menyakiti"],
              jawaban: 0,
              penjelasan: "Sikap rukun ditunjukkan dengan jujur, adil, tidak menyakiti, dan tidak memfitnah."
            },
            {
              soal: "Orang yang berlaku jujur dan baik menurut Mazmur 15 tidak akan ....",
              pilihan: ["Goyah selama-lamanya", "Bahagia", "Dekat dengan Tuhan"],
              jawaban: 0,
              penjelasan: "Mazmur 15:5 berkata orang yang berlaku demikian tidak akan goyah selama-lamanya."
            },
            {
              soal: "Kita dipanggil Tuhan untuk selalu hidup ... dengan tetangga dan teman.",
              pilihan: ["Rukun", "Bertengkar", "Bermusuhan"],
              jawaban: 0,
              penjelasan: "Kita dipanggil untuk selalu hidup rukun dengan tetangga dan teman di sekitar."
            },
            {
              soal: "Menyebarkan fitnah dengan lidah adalah sikap yang ....",
              pilihan: ["Dilarang Tuhan", "Disukai Tuhan", "Terpuji"],
              jawaban: 0,
              penjelasan: "Mazmur 15 mengajarkan untuk tidak menyebarkan fitnah dengan lidah."
            },
            {
              soal: "Dengan hidup rukun, lingkungan menjadi damai, nyaman, dan ....",
              pilihan: ["Penuh kebahagiaan", "Menakutkan", "Sepi"],
              jawaban: 0,
              penjelasan: "Hidup rukun membuat lingkungan damai, nyaman, dan penuh kebahagiaan."
            },
            {
              soal: "Mengenal tetangga berarti kita menerima orang itu sebagai ....",
              pilihan: ["Saudara pemberian Tuhan", "Musuh", "Orang asing"],
              jawaban: 0,
              penjelasan: "Mengenal tetangga berarti menerima orang itu sebagai saudara yang diberikan Tuhan."
            }
          ]

        ],

        /* ===== 3 SET SOAL ESAI ===== */
        esaiSets: [

          // ---------- SET 1 : Pemahaman cerita Michael ----------
          [
            {
              soal: "Mengapa Michael selalu menyapa dan membantu tetangganya, termasuk Bapak Yohanes?",
              contohJawaban: "Karena Michael anak yang ramah dan peduli. Ia percaya hal kecil seperti menyapa dan membantu bisa membuat orang lain bahagia."
            },
            {
              soal: "Apa yang dirasakan Bapak Yohanes ketika Michael sering mengunjunginya dan menemaninya bercerita?",
              contohJawaban: "Bapak Yohanes merasa senang dan tidak kesepian lagi karena ada Michael yang menemaninya bercerita."
            },
            {
              soal: "Menurutmu, mengapa hidup rukun dengan tetangga bisa membuat suasana menjadi bahagia?",
              contohJawaban: "Karena saat kita saling peduli, menyapa, dan menolong, lingkungan menjadi hangat sehingga semua orang merasa senang dan damai."
            },
            {
              soal: "Hal baik apa yang bisa kamu lakukan di rumah untuk menunjukkan kepedulian kepada tetangga?",
              contohJawaban: "Contoh: menyapa tetangga dengan sopan, membantu membawa barang, menjenguk yang sakit, dan ikut kerja bakti."
            },
            {
              soal: "Siapa saja yang boleh tinggal dekat dengan Tuhan menurut bacaan Mazmur?",
              contohJawaban: "Mereka yang berlaku jujur, melakukan yang adil, berkata benar, tidak memfitnah, dan tidak menyakiti teman maupun tetangganya."
            }
          ],

          // ---------- SET 2 : Nilai & sikap (gaya soal uraian buku) ----------
          [
            {
              soal: "Mengapa manusia membutuhkan orang lain dalam proses bertumbuh dan berkembang?",
              contohJawaban: "Karena manusia tidak dapat hidup sendiri. Kita bertumbuh berkat bantuan dan kehadiran orang tua, teman, tetangga, dan guru."
            },
            {
              soal: "Mengapa setiap orang harus hidup rukun dengan tetangga di sekitarnya?",
              contohJawaban: "Supaya lingkungan menjadi damai, aman, dan nyaman, serta saat kita kesulitan, tetangga mau membantu kita."
            },
            {
              soal: "Mengapa kita tidak boleh berkata jahat atau memfitnah teman dan tetangga?",
              contohJawaban: "Karena berkata jahat dan memfitnah menyakiti orang lain, merusak kerukunan, dan tidak berkenan kepada Tuhan."
            },
            {
              soal: "Sikap baik apa yang harus kita lakukan terhadap tetangga agar hidup rukun?",
              contohJawaban: "Saling menyapa, saling menghormati, saling menolong, dan menghargai perbedaan di antara kita."
            },
            {
              soal: "Apa yang sebaiknya kita lakukan saat mengetahui teman atau tetangga terkena bencana?",
              contohJawaban: "Menolong dan memberi bantuan sesuai kemampuan, serta mendoakan mereka."
            }
          ],

          // ---------- SET 3 : Ayat Alkitab & penerapan ----------
          [
            {
              soal: "Apa yang diajarkan Ibrani 13:16 kepada kita?",
              contohJawaban: "Jangan lupa berbuat baik dan memberi bantuan, sebab perbuatan baik itulah yang berkenan kepada Allah."
            },
            {
              soal: "Tuliskan satu contoh menghargai perbedaan keyakinan dengan tetangga.",
              contohJawaban: "Contoh: mengucapkan selamat hari raya kepada tetangga yang merayakan hari besar keagamaannya."
            },
            {
              soal: "Apa arti 'mengasihi sesama'?",
              contohJawaban: "Mengasihi sesama berarti peduli dan berbuat baik kepada orang lain, termasuk tetangga dan teman."
            },
            {
              soal: "Tuliskan satu kalimat doa singkat untuk tetangga dan teman di sekitar rumahmu.",
              contohJawaban: "Contoh: 'Tuhan, terima kasih untuk tetangga dan teman yang baik. Tolong kami selalu hidup rukun. Amin.'"
            },
            {
              soal: "Menurut Mazmur 15, orang yang jujur dan berbuat baik akan mendapat apa dari Tuhan?",
              contohJawaban: "Ia akan dekat dengan Tuhan dan tidak akan goyah selama-lamanya."
            }
          ]

        ],

        /* ===== 3 SET SOAL MENCOCOKKAN JAWABAN ===== */
        cocokkanSets: [

          // ---------- SET 1 : Sikap & akibatnya ----------
          {
            instruksi: "Pasangkan sikap hidup rukun dengan hasilnya!",
            pasangan: [
              { kiri: { emoji: "👋", teks: "Menyapa tetangga" }, kanan: "Lingkungan jadi hangat" },
              { kiri: { emoji: "🤝", teks: "Membantu yang kesulitan" }, kanan: "Tetangga merasa tertolong" },
              { kiri: { emoji: "🧹", teks: "Ikut kerja bakti" }, kanan: "Lingkungan bersih" },
              { kiri: { emoji: "🌈", teks: "Menghargai perbedaan" }, kanan: "Hidup rukun dan damai" },
              { kiri: { emoji: "🙏", teks: "Mendoakan teman sakit" }, kanan: "Teman merasa dikuatkan" }
            ]
          },

          // ---------- SET 2 : Ayat Alkitab & isinya ----------
          {
            instruksi: "Pasangkan ayat Alkitab dengan pesannya!",
            pasangan: [
              { kiri: { emoji: "📖", teks: "Mazmur 15:1-5" }, kanan: "Siapa yang boleh datang kepada Tuhan" },
              { kiri: { emoji: "📜", teks: "Ibrani 13:16" }, kanan: "Jangan lupa berbuat baik" },
              { kiri: { emoji: "✝️", teks: "Mengasihi sesama" }, kanan: "Peduli dan berbuat baik" },
              { kiri: { emoji: "💛", teks: "Teman dan tetangga" }, kanan: "Anugerah dari Allah" },
              { kiri: { emoji: "🕊️", teks: "Hidup rukun" }, kanan: "Damai dan bahagia" }
            ]
          },

          // ---------- SET 3 : Sikap baik atau tidak baik ----------
          {
            instruksi: "Pasangkan perbuatan dengan jenis sikapnya!",
            pasangan: [
              { kiri: { emoji: "🧡", teks: "Menolong teman kesulitan" }, kanan: "Sikap baik" },
              { kiri: { emoji: "😠", teks: "Mengejek teman beda keyakinan" }, kanan: "Sikap tidak baik" },
              { kiri: { emoji: "🏥", teks: "Menjenguk teman yang sakit" }, kanan: "Sikap baik" },
              { kiri: { emoji: "💢", teks: "Bertengkar karena hal kecil" }, kanan: "Sikap tidak baik" },
              { kiri: { emoji: "🎁", teks: "Memberi hadiah ulang tahun" }, kanan: "Sikap baik" }
            ]
          }

        ]
      },
      {
        id: "merawat-lingkungan",
        judul: "Merawat Lingkungan Ciptaan Tuhan",
        emoji: "🌿",

        ringkasan: [
          { emoji: "🤝", teks: "Setiap orang bertanggung jawab merawat lingkungan agar semua ciptaan Tuhan dapat hidup dengan baik." },
          { emoji: "🌍", teks: "Bumi adalah rumah bersama. Kita menjaganya agar kehidupan damai dan sejahtera." },
          { emoji: "🙏", teks: "Tuhan menciptakan manusia untuk ikut merawat bumi dan seluruh ciptaan-Nya. Manusia adalah rekan Tuhan." },
          { emoji: "🗑️", teks: "Cara merawat lingkungan: membuang sampah pada tempatnya." },
          { emoji: "🏠", teks: "Kita membersihkan lingkungan rumah dan sekolah." },
          { emoji: "🌊", teks: "Kita membersihkan selokan yang tersumbat sampah." },
          { emoji: "🛍️", teks: "Kita mengurangi penggunaan plastik." },
          { emoji: "🌳", teks: "Taman Eden menggambarkan lingkungan yang sempurna, subur, indah, dan kaya akan sumber daya alam." },
          { emoji: "💛", teks: "Menjaga lingkungan dimulai dari diri sendiri, lewat tindakan sederhana setiap hari." },
          { emoji: "🌸", teks: "Kita harus bersyukur atas ciptaan Tuhan dengan menjaga kebersihan, merawat tumbuhan, dan melestarikan alam." }
        ],

        pilihanGandaSets: [
          [
            {
              soal: "Siapa yang bertanggung jawab merawat lingkungan?",
              pilihan: ["Setiap orang", "Hanya guru", "Hanya taman"],
              jawaban: 0,
              penjelasan: "Setiap orang bertanggung jawab agar ciptaan Tuhan dapat hidup dengan baik."
            },
            {
              soal: "Bumi disebut rumah bersama karena ....",
              pilihan: ["harus kita jaga bersama", "boleh dibiarkan kotor", "hanya milik satu orang"],
              jawaban: 0,
              penjelasan: "Bumi adalah rumah bersama yang dijaga agar kehidupan damai dan sejahtera."
            },
            {
              soal: "Tuhan menciptakan manusia untuk ....",
              pilihan: ["ikut merawat bumi dan ciptaan-Nya", "merusak sungai", "membiarkan sampah"],
              jawaban: 0,
              penjelasan: "Manusia adalah rekan Tuhan dalam merawat bumi dan seluruh ciptaan-Nya."
            },
            {
              soal: "Taman Eden menggambarkan lingkungan yang ....",
              pilihan: ["sempurna, subur, dan indah", "kering dan kosong", "penuh sampah"],
              jawaban: 0,
              penjelasan: "Taman Eden digambarkan sempurna, subur, indah, dan kaya sumber daya alam."
            },
            {
              soal: "Merawat lingkungan dimulai dari ....",
              pilihan: ["diri sendiri", "orang yang jauh saja", "tidak perlu dimulai"],
              jawaban: 0,
              penjelasan: "Tugas itu dimulai dari diri sendiri lewat tindakan sederhana setiap hari."
            }
          ],
          [
            {
              soal: "Membuang sampah pada tempatnya adalah cara ....",
              pilihan: ["merawat lingkungan", "merusak selokan", "menambah plastik"],
              jawaban: 0,
              penjelasan: "Membuang sampah pada tempatnya adalah salah satu cara merawat lingkungan."
            },
            {
              soal: "Selokan yang tersumbat sampah sebaiknya ....",
              pilihan: ["dibersihkan", "ditambah sampah", "dibiarkan"],
              jawaban: 0,
              penjelasan: "Membersihkan selokan yang tersumbat termasuk cara merawat lingkungan."
            },
            {
              soal: "Penggunaan plastik sebaiknya ....",
              pilihan: ["dikurangi", "diperbanyak", "dibuang ke sungai"],
              jawaban: 0,
              penjelasan: "Mengurangi plastik adalah cara merawat lingkungan."
            },
            {
              soal: "Kita bersyukur atas ciptaan Tuhan dengan ....",
              pilihan: ["menjaga kebersihan, merawat tumbuhan, dan melestarikan alam", "membiarkan rumah kotor", "memetik semua bunga"],
              jawaban: 0,
              penjelasan: "Kesimpulan catatan kelas: bersyukur berarti menjaga kebersihan, merawat tumbuhan, dan melestarikan alam."
            },
            {
              soal: "Membersihkan rumah dan sekolah membuat ciptaan Tuhan ....",
              pilihan: ["dapat hidup dengan lebih baik", "menjadi rusak", "kehilangan rumah"],
              jawaban: 0,
              penjelasan: "Lingkungan yang dirawat membantu semua ciptaan hidup dengan baik."
            }
          ]
        ],

        esaiSets: [
          [
            {
              soal: "Mengapa bumi disebut rumah bersama?",
              contohJawaban: "Karena bumi harus kita jaga bersama agar kehidupan damai dan sejahtera."
            },
            {
              soal: "Sebutkan empat cara merawat lingkungan dari catatan kelas.",
              contohJawaban: "Membuang sampah pada tempatnya, membersihkan rumah dan sekolah, membersihkan selokan yang tersumbat, dan mengurangi plastik."
            },
            {
              soal: "Apa yang digambarkan Taman Eden?",
              contohJawaban: "Lingkungan yang sempurna, subur, indah, dan kaya akan sumber daya alam."
            },
            {
              soal: "Bagaimana cara kita bersyukur atas ciptaan Tuhan?",
              contohJawaban: "Dengan menjaga kebersihan, merawat tumbuhan, dan melestarikan alam."
            }
          ]
        ],

        cocokkanSets: [
          {
            instruksi: "Pasangkan cara merawat dengan tempatnya!",
            pasangan: [
              { kiri: { emoji: "🗑️", teks: "Sampah" }, kanan: "Dibuang pada tempatnya" },
              { kiri: { emoji: "🏫", teks: "Rumah dan sekolah" }, kanan: "Dibersihkan" },
              { kiri: { emoji: "🌊", teks: "Selokan tersumbat" }, kanan: "Dibersihkan dari sampah" },
              { kiri: { emoji: "🛍️", teks: "Plastik" }, kanan: "Penggunaannya dikurangi" },
              { kiri: { emoji: "🌸", teks: "Tumbuhan" }, kanan: "Dirawat" }
            ]
          },
          {
            instruksi: "Pasangkan cara bersyukur dengan contohnya!",
            pasangan: [
              { kiri: { emoji: "🧹", teks: "Menjaga kebersihan" }, kanan: "Membuang sampah pada tempatnya" },
              { kiri: { emoji: "🌱", teks: "Merawat tumbuhan" }, kanan: "Menyiram dan menjaga tanaman" },
              { kiri: { emoji: "🌳", teks: "Melestarikan alam" }, kanan: "Menjaga alam ciptaan Tuhan tetap lestari" }
            ]
          }
        ]
      },
      {
        id: "kisah-abraham",
        judul: "Kisah Abraham",
        emoji: "⭐",

        ringkasan: [
          { emoji: "📜", teks: "Abraham pada awalnya bernama Abram. Ia berasal dari Ur Kasdim." },
          { emoji: "✨", teks: "Allah mengubah nama Abram menjadi Abraham. Nama itu berarti bapa dari banyak bangsa." },
          { emoji: "🤝", teks: "Nama baru itu menjadi tanda perjanjian yang lebih dalam antara Allah dan Abraham." },
          { emoji: "👨", teks: "Abraham adalah putra Terah. Allah memanggilnya saat berusia 75 tahun." },
          { emoji: "🚶", teks: "Abraham taat. Ia pergi ke Kanaan bersama istrinya, Sarai, dan Lot." },
          { emoji: "💛", teks: "Sarai kemudian dikenal sebagai Sarah." },
          { emoji: "🌾", teks: "Allah berjanji: Abraham menjadi bapa bangsa, memiliki tanah subur, dan selalu diberkati." },
          { emoji: "🙏", teks: "Sikap Abraham yang menjadi contoh adalah percaya dan taat pada Tuhan." },
          { emoji: "🏡", teks: "Percaya dan taat pada Tuhan dapat kita wujudkan dengan percaya dan taat pada orang tua." }
        ],

        pilihanGandaSets: [
          [
            {
              soal: "Nama Abraham pada awalnya adalah ....",
              pilihan: ["Abram", "Terah", "Lot"],
              jawaban: 0,
              penjelasan: "Abraham awalnya bernama Abram, dari Ur Kasdim."
            },
            {
              soal: "Abram berasal dari ....",
              pilihan: ["Ur Kasdim", "Kanaan", "Ararat"],
              jawaban: 0,
              penjelasan: "Abram berasal dari Ur Kasdim."
            },
            {
              soal: "Nama Abraham berarti ....",
              pilihan: ["bapa dari banyak bangsa", "pembuat bahtera", "penjaga taman"],
              jawaban: 0,
              penjelasan: "Abraham berarti bapa dari banyak bangsa, tanda perjanjian dengan Allah."
            },
            {
              soal: "Allah memanggil Abraham saat ia berusia ....",
              pilihan: ["75 tahun", "7 tahun", "40 hari"],
              jawaban: 0,
              penjelasan: "Abraham dipanggil saat berusia 75 tahun."
            },
            {
              soal: "Abraham adalah putra dari ....",
              pilihan: ["Terah", "Lot", "Nuh"],
              jawaban: 0,
              penjelasan: "Abraham adalah putra Terah."
            }
          ],
          [
            {
              soal: "Abraham pergi ke Kanaan bersama ....",
              pilihan: ["Sarai dan Lot", "hanya sendiri", "semua hewan"],
              jawaban: 0,
              penjelasan: "Ia pergi bersama istrinya Sarai, yang kemudian disebut Sarah, dan Lot."
            },
            {
              soal: "Sarai kemudian dikenal sebagai ....",
              pilihan: ["Sarah", "Lot", "Abram"],
              jawaban: 0,
              penjelasan: "Sarai kemudian dikenal sebagai Sarah."
            },
            {
              soal: "Salah satu janji Allah adalah Abraham akan memiliki ....",
              pilihan: ["tanah subur", "bahtera kayu", "kota yang tenggelam"],
              jawaban: 0,
              penjelasan: "Allah berjanji Abraham menjadi bapa bangsa, memiliki tanah subur, dan selalu diberkati."
            },
            {
              soal: "Sikap Abraham yang menjadi contoh adalah ....",
              pilihan: ["percaya dan taat", "takut lalu pulang", "marah pada Lot"],
              jawaban: 0,
              penjelasan: "Abraham percaya dan taat pada panggilan Tuhan."
            },
            {
              soal: "Taat pada Allah dapat kita wujudkan dengan taat pada ....",
              pilihan: ["orang tua", "kemarahan", "rasa malas"],
              jawaban: 0,
              penjelasan: "Catatan kelas: percaya dan taat pada Tuhan diwujudkan dengan percaya dan taat pada orang tua."
            }
          ]
        ],

        esaiSets: [
          [
            {
              soal: "Dari mana Abram berasal, dan menjadi apa namanya?",
              contohJawaban: "Abram berasal dari Ur Kasdim. Allah mengubah namanya menjadi Abraham, yang berarti bapa dari banyak bangsa."
            },
            {
              soal: "Siapa yang pergi bersama Abraham ke Kanaan?",
              contohJawaban: "Istrinya Sarai, yang kemudian disebut Sarah, dan Lot."
            },
            {
              soal: "Sebutkan tiga janji Allah kepada Abraham.",
              contohJawaban: "Abraham menjadi bapa bangsa, akan memiliki tanah subur, dan akan selalu diberkati."
            },
            {
              soal: "Sikap apa yang dapat kita contoh dari Abraham di rumah?",
              contohJawaban: "Percaya dan taat pada Tuhan. Itu dapat diwujudkan dengan percaya dan taat pada orang tua."
            }
          ]
        ],

        cocokkanSets: [
          {
            instruksi: "Pasangkan nama dengan keterangannya!",
            pasangan: [
              { kiri: { emoji: "📜", teks: "Abram" }, kanan: "Nama Abraham sebelumnya" },
              { kiri: { emoji: "📍", teks: "Ur Kasdim" }, kanan: "Asal Abraham" },
              { kiri: { emoji: "👨", teks: "Terah" }, kanan: "Ayah Abraham" },
              { kiri: { emoji: "💛", teks: "Sarah" }, kanan: "Nama baru Sarai" },
              { kiri: { emoji: "🚶", teks: "Lot" }, kanan: "Ikut pergi ke Kanaan" }
            ]
          },
          {
            instruksi: "Pasangkan janji Allah dengan artinya!",
            pasangan: [
              { kiri: { emoji: "👨‍👩‍👧‍👦", teks: "Bapa bangsa" }, kanan: "Abraham menjadi bapa dari banyak bangsa" },
              { kiri: { emoji: "🌾", teks: "Tanah subur" }, kanan: "Abraham akan memiliki tanah subur" },
              { kiri: { emoji: "🙏", teks: "Diberkati" }, kanan: "Abraham akan selalu diberkati" },
              { kiri: { emoji: "🏡", teks: "Di rumah" }, kanan: "Percaya dan taat pada orang tua" }
            ]
          }
        ]
      },
      {
        id: "ishak-membawa-damai",
        judul: "Ishak: Anak Abraham yang Membawa Damai",
        emoji: "🕊️",

        ringkasan: [
          { emoji: "💛", teks: "Damai dapat tercipta jika kita memiliki kasih dan persahabatan." },
          { emoji: "🤗", teks: "Kasih ditunjukkan dengan saling mengerti, peduli, dan menyayangi saudara serta teman." },
          { emoji: "🤝", teks: "Mengalah bukan berarti kalah. Mengalah berarti mau menjaga persahabatan dan menghindari pertengkaran." },
          { emoji: "🌱", teks: "Kasih membutuhkan pengorbanan. Orang yang menabur kasih memperoleh kedamaian dan sukacita." },
          { emoji: "👨‍👩‍👦", teks: "Ishak adalah anak Abraham dan Sara. Sara juga disebut Sarah. Ishak sangat taat kepada Tuhan dan diberkati oleh-Nya." },
          { emoji: "🏕️", teks: "Tuhan memerintahkan Ishak tinggal di tanah Gerar sebagai orang asing." },
          { emoji: "🌾", teks: "Tuhan memberkati Ishak. Hasil panennya melimpah, dan ia menjadi orang kaya." },
          { emoji: "🕊️", teks: "Ishak memilih mengalah dan menjauhi pertengkaran agar tetap hidup damai dengan orang lain." },
          { emoji: "⏳", teks: "Kesabaran dan ketaatan Ishak kepada Tuhan mendatangkan berkat yang melimpah." },
          { emoji: "🌟", teks: "Ishak menjadi teladan bagi kita untuk membawa kedamaian, kasih, dan persahabatan." },
          { emoji: "🙏", teks: "Ishak mengajarkan kita untuk selalu menaati perintah Tuhan." },
          { emoji: "✨", teks: "Tuhan berjanji memberikan keturunan kepada Ishak sebanyak bintang di langit." },
          { emoji: "👂", teks: "Saat ini kita dapat mendengarkan perintah Tuhan melalui nasihat orang tua dan pengajaran bapak atau ibu guru." }
        ],

        pilihanGandaSets: [
          [
            {
              soal: "Damai dapat tercipta jika kita memiliki ....",
              pilihan: ["kasih dan persahabatan", "pertengkaran", "rasa ingin menang sendiri"],
              jawaban: 0,
              penjelasan: "Damai tumbuh dari kasih dan persahabatan."
            },
            {
              soal: "Kasih kepada saudara dan teman ditunjukkan dengan ....",
              pilihan: ["mengejek", "saling mengerti, peduli, dan menyayangi", "berebut terus"],
              jawaban: 1,
              penjelasan: "Kasih tampak saat kita saling mengerti, peduli, dan menyayangi."
            },
            {
              soal: "Mengalah berarti ....",
              pilihan: ["kita kalah dan malu", "mau menjaga persahabatan dan menghindari pertengkaran", "tidak punya teman"],
              jawaban: 1,
              penjelasan: "Mengalah bukan berarti kalah. Kita menjaga persahabatan."
            },
            {
              soal: "Orang yang menabur kasih akan memperoleh ....",
              pilihan: ["pertengkaran", "kedamaian dan sukacita", "kesepian"],
              jawaban: 1,
              penjelasan: "Kasih membutuhkan pengorbanan, lalu mendatangkan kedamaian dan sukacita."
            },
            {
              soal: "Ishak adalah anak ....",
              pilihan: ["Nuh dan Sara", "Abraham dan Sara", "Terah dan Lot"],
              jawaban: 1,
              penjelasan: "Ishak adalah anak Abraham dan Sara. Sara juga disebut Sarah."
            }
          ],
          [
            {
              soal: "Tuhan memerintahkan Ishak tinggal di tanah ....",
              pilihan: ["Gerar", "Ararat", "Ur Kasdim"],
              jawaban: 0,
              penjelasan: "Ishak tinggal di tanah Gerar sebagai orang asing, karena Tuhan memerintahkannya."
            },
            {
              soal: "Karena berkat Tuhan, panen Ishak menjadi ....",
              pilihan: ["gagal", "melimpah, dan ia menjadi kaya", "hilang"],
              jawaban: 1,
              penjelasan: "Tuhan memberkati Ishak sehingga hasil panennya melimpah."
            },
            {
              soal: "Saat hampir bertengkar, Ishak memilih ....",
              pilihan: ["balas marah", "mengalah dan menjauhi pertengkaran", "pergi tanpa alasan"],
              jawaban: 1,
              penjelasan: "Ishak mengalah agar tetap hidup damai dengan orang lain."
            },
            {
              soal: "Tuhan berjanji keturunan Ishak sebanyak ....",
              pilihan: ["bintang di langit", "batu di jalan", "daun di satu pohon"],
              jawaban: 0,
              penjelasan: "Tuhan berjanji memberikan keturunan sebanyak bintang di langit."
            },
            {
              soal: "Sekarang, perintah Tuhan dapat kita dengarkan melalui ....",
              pilihan: ["nasihat orang tua dan pengajaran guru", "pertengkaran", "rasa malas"],
              jawaban: 0,
              penjelasan: "Nasihat orang tua dan pengajaran bapak atau ibu guru menolong kita menaati Tuhan."
            }
          ]
        ],

        esaiSets: [
          [
            {
              soal: "Siapa Ishak, dan bagaimana sikapnya kepada Tuhan?",
              contohJawaban: "Ishak adalah anak Abraham dan Sara. Ia sangat taat kepada Tuhan dan diberkati oleh-Nya."
            },
            {
              soal: "Mengapa mengalah tidak berarti kalah?",
              contohJawaban: "Karena mengalah berarti mau menjaga persahabatan dan menghindari pertengkaran."
            },
            {
              soal: "Apa yang terjadi saat Ishak tinggal di tanah Gerar?",
              contohJawaban: "Tuhan memberkati panennya sampai melimpah, dan Ishak menjadi orang kaya. Ia tetap memilih mengalah agar hidup damai."
            },
            {
              soal: "Bagaimana kita dapat menaati perintah Tuhan saat ini?",
              contohJawaban: "Dengan mendengarkan nasihat orang tua dan pengajaran bapak atau ibu guru."
            }
          ]
        ],

        cocokkanSets: [
          {
            instruksi: "Pasangkan bagian kisah Ishak dengan faktanya!",
            pasangan: [
              { kiri: { emoji: "👨‍👩‍👦", teks: "Orang tua Ishak" }, kanan: "Abraham dan Sara" },
              { kiri: { emoji: "🏕️", teks: "Tanah Gerar" }, kanan: "Tempat Ishak tinggal sebagai orang asing" },
              { kiri: { emoji: "🌾", teks: "Panen melimpah" }, kanan: "Berkat Tuhan bagi Ishak" },
              { kiri: { emoji: "✨", teks: "Keturunan sebanyak bintang" }, kanan: "Janji Tuhan kepada Ishak" }
            ]
          },
          {
            instruksi: "Pasangkan sikap Ishak dengan artinya!",
            pasangan: [
              { kiri: { emoji: "🕊️", teks: "Mengalah" }, kanan: "Menjaga persahabatan" },
              { kiri: { emoji: "💛", teks: "Menabur kasih" }, kanan: "Memperoleh kedamaian dan sukacita" },
              { kiri: { emoji: "🙏", teks: "Taati Tuhan" }, kanan: "Teladan dari Ishak" },
              { kiri: { emoji: "👂", teks: "Nasihat orang tua dan guru" }, kanan: "Cara kita mendengar perintah Tuhan" }
            ]
          }
        ]
      },
      {
        id: "kisah-nabi-nuh",
        judul: "Kisah Nabi Nuh",
        emoji: "⛵",

        ringkasan: [
          { emoji: "👨‍👦", teks: "Nabi Nuh memiliki tiga anak: Sem, Ham, dan Yafet." },
          { emoji: "⚠️", teks: "Pada zaman Nuh, banyak manusia melakukan kejahatan dan kekerasan." },
          { emoji: "🌊", teks: "Allah mendatangkan air bah karena kejahatan manusia." },
          { emoji: "🪵", teks: "Allah memerintahkan Nuh membuat bahtera dari kayu gofir." },
          { emoji: "⏳", teks: "Nuh membuat bahtera selama kurang lebih 50 tahun. Ia taat." },
          { emoji: "🐘", teks: "Nuh membawa keluarganya dan sepasang hewan ke dalam bahtera." },
          { emoji: "🌧️", teks: "Hujan turun selama 40 hari 40 malam." },
          { emoji: "🌍", teks: "Air menguasai bumi selama 150 hari." },
          { emoji: "⛰️", teks: "Bahtera Nuh akhirnya berhenti di Pegunungan Ararat." },
          { emoji: "🙏", teks: "Nuh bersyukur dengan mendirikan mezbah dan mempersembahkan kurban." },
          { emoji: "🌈", teks: "Allah berjanji tidak akan mendatangkan air bah lagi untuk membinasakan seluruh bumi." },
          { emoji: "💛", teks: "Allah juga memberkati keluarga Nuh." }
        ],

        pilihanGandaSets: [
          [
            {
              soal: "Tiga anak Nabi Nuh adalah ....",
              pilihan: ["Sem, Ham, dan Yafet", "Abram, Lot, dan Terah", "Sarai, Sarah, dan Lot"],
              jawaban: 0,
              penjelasan: "Anak-anak Nuh adalah Sem, Ham, dan Yafet."
            },
            {
              soal: "Allah mendatangkan air bah karena ....",
              pilihan: ["kejahatan dan kekerasan manusia", "Nuh lupa makan", "hewan terlalu banyak"],
              jawaban: 0,
              penjelasan: "Pada zaman Nuh banyak manusia melakukan kejahatan dan kekerasan."
            },
            {
              soal: "Bahtera dibuat dari kayu ....",
              pilihan: ["gofir", "bambu", "daun"],
              jawaban: 0,
              penjelasan: "Allah memerintahkan Nuh membuat bahtera dari kayu gofir."
            },
            {
              soal: "Nuh membuat bahtera selama kurang lebih ....",
              pilihan: ["50 tahun", "50 hari", "5 jam"],
              jawaban: 0,
              penjelasan: "Nuh taat dan membuat bahtera selama kurang lebih 50 tahun."
            },
            {
              soal: "Nuh membawa ke dalam bahtera ....",
              pilihan: ["keluarganya dan sepasang hewan", "hanya emas", "seluruh kota"],
              jawaban: 0,
              penjelasan: "Nuh membawa keluarganya dan sepasang hewan."
            }
          ],
          [
            {
              soal: "Hujan turun selama ....",
              pilihan: ["40 hari 40 malam", "7 hari", "1 malam"],
              jawaban: 0,
              penjelasan: "Hujan turun selama 40 hari 40 malam."
            },
            {
              soal: "Air menguasai bumi selama ....",
              pilihan: ["150 hari", "15 hari", "150 tahun"],
              jawaban: 0,
              penjelasan: "Air menguasai bumi selama 150 hari."
            },
            {
              soal: "Bahtera berhenti di ....",
              pilihan: ["Pegunungan Ararat", "Ur Kasdim", "Kanaan"],
              jawaban: 0,
              penjelasan: "Bahtera Nuh berhenti di Pegunungan Ararat."
            },
            {
              soal: "Nuh bersyukur dengan ....",
              pilihan: ["mendirikan mezbah dan mempersembahkan kurban", "berlari menjauh", "menyembunyikan bahtera"],
              jawaban: 0,
              penjelasan: "Nuh mendirikan mezbah dan mempersembahkan kurban sebagai ucapan syukur."
            },
            {
              soal: "Allah berjanji tidak akan ....",
              pilihan: ["mendatangkan air bah lagi untuk membinasakan seluruh bumi", "memberkati keluarga Nuh", "menjaga hewan"],
              jawaban: 0,
              penjelasan: "Allah berjanji tidak akan air bah lagi untuk membinasakan seluruh bumi, dan Ia memberkati keluarga Nuh."
            }
          ]
        ],

        esaiSets: [
          [
            {
              soal: "Sebutkan tiga anak Nabi Nuh.",
              contohJawaban: "Sem, Ham, dan Yafet."
            },
            {
              soal: "Mengapa Allah mendatangkan air bah?",
              contohJawaban: "Karena manusia banyak melakukan kejahatan dan kekerasan."
            },
            {
              soal: "Dari kayu apa bahtera dibuat, dan berapa lama Nuh membuatnya?",
              contohJawaban: "Dari kayu gofir, selama kurang lebih 50 tahun."
            },
            {
              soal: "Siapa dan apa yang Nuh bawa masuk ke bahtera?",
              contohJawaban: "Keluarganya dan sepasang hewan."
            }
          ],
          [
            {
              soal: "Berapa lama hujan turun, dan berapa lama air menguasai bumi?",
              contohJawaban: "Hujan turun 40 hari 40 malam. Air menguasai bumi selama 150 hari."
            },
            {
              soal: "Di mana bahtera berhenti?",
              contohJawaban: "Di Pegunungan Ararat."
            },
            {
              soal: "Bagaimana Nuh mengucap syukur?",
              contohJawaban: "Nuh mendirikan mezbah dan mempersembahkan kurban."
            },
            {
              soal: "Apa janji Allah setelah air bah?",
              contohJawaban: "Allah tidak akan mendatangkan air bah lagi untuk membinasakan seluruh bumi, dan Ia memberkati keluarga Nuh."
            }
          ]
        ],

        cocokkanSets: [
          {
            instruksi: "Pasangkan bagian kisah dengan faktanya!",
            pasangan: [
              { kiri: { emoji: "👨‍👦", teks: "Anak Nuh" }, kanan: "Sem, Ham, dan Yafet" },
              { kiri: { emoji: "🪵", teks: "Bahan bahtera" }, kanan: "Kayu gofir" },
              { kiri: { emoji: "⏳", teks: "Lama membuat bahtera" }, kanan: "Kurang lebih 50 tahun" },
              { kiri: { emoji: "🌧️", teks: "Lama hujan" }, kanan: "40 hari 40 malam" },
              { kiri: { emoji: "⛰️", teks: "Tempat bahtera berhenti" }, kanan: "Pegunungan Ararat" }
            ]
          }
        ]
      },

      {
        id: "keluargaku-pemberian-tuhan",
        judul: "Keluargaku Pemberian Tuhan",
        emoji: "🏡",
        ringkasan: [
          { emoji: "🏡", teks: "Keluarga adalah pemberian Tuhan." },
          { emoji: "🍲", teks: "Melalui keluarga, Tuhan memelihara kita: ada rumah, makanan, dan kasih." },
          { emoji: "🙏", teks: "Kita menghormati orang tua dengan mendengarkan dan berkata sopan." },
          { emoji: "👨‍👩‍👧", teks: "Keluarga Yesus juga merawat-Nya. Maria dan Yusuf menjaga Yesus." },
          { emoji: "💛", teks: "Kita mengucap syukur untuk keluarga, juga saat keluarga kita sederhana." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Keluarga adalah pemberian ....", pilihan: ["Tuhan", "televisi", "toko"], jawaban: 0, penjelasan: "Kita mensyukuri keluarga sebagai pemberian Tuhan." },
            { soal: "Tuhan memelihara kita melalui keluarga dengan ....", pilihan: ["rumah, makanan, dan kasih", "membiarkan kita sendirian", "melarang kita belajar"], jawaban: 0, penjelasan: "Keluarga menjadi cara Tuhan memelihara." },
            { soal: "Menghormati orang tua berarti ....", pilihan: ["mendengarkan dan berkata sopan", "membentak", "pergi tanpa pamit"], jawaban: 0, penjelasan: "Sopan dan mau mendengar adalah hormat." },
            { soal: "Maria dan Yusuf ....", pilihan: ["menjaga Yesus", "meninggalkan Yesus", "adalah teman sekolah Yesus"], jawaban: 0, penjelasan: "Mereka merawat Yesus dalam keluarga-Nya." }
          ],
          [
            { soal: "Doa syukur untuk keluarga dapat diucapkan ....", pilihan: ["setiap hari", "hanya jika dapat hadiah besar", "tidak pernah"], jawaban: 0, penjelasan: "Syukur tidak menunggu hal yang besar." },
            { soal: "Keluarga yang sederhana tetap ....", pilihan: ["patut disyukuri", "tidak boleh disayangi", "bukan pemberian Tuhan"], jawaban: 0, penjelasan: "Kasih dalam keluarga lebih penting daripada barang." },
            { soal: "Berkata sopan kepada orang tua adalah cara ....", pilihan: ["menghormati", "mengejek", "melupakan mereka"], jawaban: 0, penjelasan: "Hormat tampak dari kata-kata." },
            { soal: "Yesus bertumbuh dalam ....", pilihan: ["perawatan keluarga", "kehampaan", "tanpa ada yang menjaga"], jawaban: 0, penjelasan: "Maria dan Yusuf menjaga-Nya." }
          ]
        ],
        esaiSets: [[
            { soal: "Mengapa keluarga disebut pemberian Tuhan?", contohJawaban: "Karena melalui keluarga Tuhan memelihara kita dengan rumah, makanan, dan kasih." },
            { soal: "Bagaimana cara menghormati orang tua?", contohJawaban: "Mendengarkan dan berkata sopan." },
            { soal: "Siapa yang menjaga Yesus dalam keluarga-Nya?", contohJawaban: "Maria dan Yusuf." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan pemberian dengan cara mensyukurinya!",
          pasangan: [
            { kiri: { emoji: "🏡", teks: "Keluarga" }, kanan: "Pemberian Tuhan" },
            { kiri: { emoji: "🍲", teks: "Makanan di rumah" }, kanan: "Cara Tuhan memelihara" },
            { kiri: { emoji: "🙏", teks: "Kata yang sopan" }, kanan: "Hormat kepada orang tua" },
            { kiri: { emoji: "👨‍👩‍👧", teks: "Maria dan Yusuf" }, kanan: "Menjaga Yesus" }
          ]
        }]
      },

      {
        id: "mengasihi-teman",
        judul: "Aku Mengasihi Teman",
        emoji: "🤝",
        ringkasan: [
          { emoji: "🤝", teks: "Teman adalah pemberian Tuhan." },
          { emoji: "⚽", teks: "Bersama teman kita belajar dan bermain." },
          { emoji: "💛", teks: "Mengasihi teman berarti tidak memilih-milih dan tidak mengejek." },
          { emoji: "🦽", teks: "Dalam sebuah cerita, teman-teman membawa orang yang tidak bisa berjalan agar ditolong Yesus." },
          { emoji: "🙏", teks: "Kita bersyukur karena ada teman yang menemani." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Teman adalah pemberian ....", pilihan: ["Tuhan", "kebetulan yang tidak perlu disyukuri", "barang"], jawaban: 0, penjelasan: "Kehadiran teman patut disyukuri." },
            { soal: "Mengasihi teman berarti ....", pilihan: ["tidak mengejek", "memilih-milih", "meninggalkan yang kesepian"], jawaban: 0, penjelasan: "Kasih tidak menertawakan teman." },
            { soal: "Dalam cerita orang yang tidak bisa berjalan, teman-temannya ....", pilihan: ["membawanya agar ditolong", "meninggalkannya", "menertawakannya"], jawaban: 0, penjelasan: "Mereka menolong bersama-sama." },
            { soal: "Belajar dan bermain bersama adalah kegiatan dengan ....", pilihan: ["teman", "benda mati", "bayangan"], jawaban: 0, penjelasan: "Teman menemani kegiatan itu." }
          ],
          [
            { soal: "Saat teman kesepian, kita dapat ....", pilihan: ["mengajaknya ikut", "berpura-pura tidak melihat", "mengejeknya"], jawaban: 0, penjelasan: "Mengajak adalah tanda mengasihi." },
            { soal: "Memilih-milih teman ....", pilihan: ["bukan cara mengasihi", "wajib dilakukan", "diperintahkan cerita itu"], jawaban: 0, penjelasan: "Kasih tidak menyingkirkan teman." },
            { soal: "Kita bersyukur untuk teman dengan ....", pilihan: ["menjaga persahabatan", "melupakannya", "merebut miliknya"], jawaban: 0, penjelasan: "Persahabatan dijaga." },
            { soal: "Orang yang ditolong dalam cerita itu tidak bisa ....", pilihan: ["berjalan", "tersenyum", "punya teman"], jawaban: 0, penjelasan: "Teman-temannya membawanya." }
          ]
        ],
        esaiSets: [[
            { soal: "Mengapa teman disebut pemberian Tuhan?", contohJawaban: "Karena Tuhan memelihara kita juga melalui teman yang menemani." },
            { soal: "Apa yang dilakukan teman-teman dalam cerita orang yang tidak bisa berjalan?", contohJawaban: "Mereka membawanya agar ditolong Yesus." },
            { soal: "Sebutkan satu cara mengasihi teman di sekolah.", contohJawaban: "Tidak mengejek, atau mengajak teman yang kesepian." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan sikap dengan hasilnya!",
          pasangan: [
            { kiri: { emoji: "🤝", teks: "Tidak mengejek" }, kanan: "Cara mengasihi" },
            { kiri: { emoji: "🦽", teks: "Membawa teman yang sulit berjalan" }, kanan: "Menolong bersama" },
            { kiri: { emoji: "⚽", teks: "Bermain bersama" }, kanan: "Kegiatan dengan teman" },
            { kiri: { emoji: "🙏", teks: "Bersyukur" }, kanan: "Karena ada teman" }
          ]
        }]
      },

      {
        id: "menghormati-guru",
        judul: "Aku Menghormati Guru",
        emoji: "🧑‍🏫",
        ringkasan: [
          { emoji: "🧑‍🏫", teks: "Guru adalah pemberian Tuhan yang membantu kita belajar." },
          { emoji: "👂", teks: "Menghormati guru berarti mendengarkan saat guru menjelaskan." },
          { emoji: "🙏", teks: "Kita mengucapkan terima kasih dan tidak menertawakan guru." },
          { emoji: "📖", teks: "Tuhan Yesus juga mengajar para murid. Murid belajar dari-Nya." },
          { emoji: "💛", teks: "Kita bersyukur karena ada guru di sekolah." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Guru membantu kita ....", pilihan: ["belajar", "bolos", "mengejek teman"], jawaban: 0, penjelasan: "Guru menemani kita memahami pelajaran." },
            { soal: "Saat guru menjelaskan, kita ....", pilihan: ["mendengarkan", "berteriak", "memotong terus"], jawaban: 0, penjelasan: "Mendengarkan adalah hormat." },
            { soal: "Menertawakan guru adalah sikap yang ....", pilihan: ["tidak hormat", "wajib", "cara berterima kasih"], jawaban: 0, penjelasan: "Hormat tidak menertawakan." },
            { soal: "Yesus mengajar ....", pilihan: ["para murid", "agar murid tidak belajar", "hanya benda mati"], jawaban: 0, penjelasan: "Para murid belajar dari Yesus." }
          ],
          [
            { soal: "Ucapan terima kasih kepada guru menunjukkan ....", pilihan: ["rasa hormat", "rasa malas", "rasa ejek"], jawaban: 0, penjelasan: "Terima kasih menghargai bantuan guru." },
            { soal: "Tuhan memelihara kita melalui guru karena guru ....", pilihan: ["membimbing belajar", "meninggalkan kelas", "melarang semua pertanyaan"], jawaban: 0, penjelasan: "Bimbingan guru adalah cara pemeliharaan Tuhan." },
            { soal: "Bertanya dengan sopan ....", pilihan: ["boleh dilakukan", "dilarang selamanya", "sama dengan berteriak"], jawaban: 0, penjelasan: "Sopan saat bertanya juga menghormati." },
            { soal: "Kita bersyukur untuk guru dengan ....", pilihan: ["belajar sungguh-sungguh", "mengabaikan penjelasan", "menyembunyikan tugas"], jawaban: 0, penjelasan: "Belajar dengan sungguh adalah ucapan syukur." }
          ]
        ],
        esaiSets: [[
            { soal: "Mengapa guru disebut pemberian Tuhan?", contohJawaban: "Karena melalui guru Tuhan membantu kita belajar." },
            { soal: "Sebutkan dua cara menghormati guru.", contohJawaban: "Mendengarkan dan mengucapkan terima kasih." },
            { soal: "Apa yang dilakukan para murid Yesus?", contohJawaban: "Mereka belajar dari pengajaran-Nya." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan sikap dengan artinya!",
          pasangan: [
            { kiri: { emoji: "👂", teks: "Mendengarkan" }, kanan: "Hormat saat guru menjelaskan" },
            { kiri: { emoji: "🙏", teks: "Terima kasih" }, kanan: "Menghargai bantuan guru" },
            { kiri: { emoji: "📖", teks: "Murid Yesus" }, kanan: "Belajar dari pengajaran-Nya" },
            { kiri: { emoji: "💛", teks: "Belajar sungguh-sungguh" }, kanan: "Cara bersyukur" }
          ]
        }]
      },

      {
        id: "tubuhku-untuk-berbuat-baik",
        judul: "Tubuhku untuk Berbuat Baik",
        emoji: "🫶",
        ringkasan: [
          { emoji: "🫶", teks: "Tubuh kita adalah ciptaan Tuhan, dan setiap orang unik." },
          { emoji: "🥗", teks: "Merawat tubuh: makan secukupnya, tidur, bergerak, dan menjaga kebersihan." },
          { emoji: "🤝", teks: "Tubuh dipakai untuk menolong, bukan untuk menyakiti." },
          { emoji: "💧", teks: "Cerita Ribka mengajarkan perbuatan baik: ia memberi minum kepada orang yang membutuhkan." },
          { emoji: "🙏", teks: "Kita bersyukur atas tubuh dengan merawatnya dan memakainya untuk kebaikan." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Tubuh kita adalah ....", pilihan: ["ciptaan Tuhan", "benda yang boleh dirusak", "milik ejekan"], jawaban: 0, penjelasan: "Tubuh patut disyukuri." },
            { soal: "Setiap orang unik berarti ....", pilihan: ["ciri kita tidak harus sama", "semua harus sama persis", "perbedaan itu salah"], jawaban: 0, penjelasan: "Keunikan tidak perlu diejek." },
            { soal: "Memberi minum kepada orang yang membutuhkan mirip dengan cerita ....", pilihan: ["Ribka", "tentang batu", "tentang angka"], jawaban: 0, penjelasan: "Ribka memberi minum sebagai perbuatan baik." },
            { soal: "Tangan dipakai untuk ....", pilihan: ["menolong", "memukul teman", "merusak buku teman"], jawaban: 0, penjelasan: "Tubuh dipakai untuk kebaikan." }
          ],
          [
            { soal: "Tidur dan makan secukupnya adalah cara ....", pilihan: ["merawat tubuh", "merusak tubuh", "mengejek tubuh"], jawaban: 0, penjelasan: "Tubuh butuh istirahat dan makanan." },
            { soal: "Mengejek tubuh teman ....", pilihan: ["tidak baik", "wajib", "cara bersyukur"], jawaban: 0, penjelasan: "Keunikan teman dihargai." },
            { soal: "Perbuatan baik disukai Tuhan. Contohnya ....", pilihan: ["membantu membawa barang", "menyembunyikan sepatu teman", "berteriak di kelas"], jawaban: 0, penjelasan: "Membantu adalah pemakaian tubuh yang baik." },
            { soal: "Bersyukur atas tubuh berarti ....", pilihan: ["merawatnya", "membiarkannya sakit", "tidak pernah bergerak"], jawaban: 0, penjelasan: "Rawat tubuh, lalu pakai untuk kebaikan." }
          ]
        ],
        esaiSets: [[
            { soal: "Sebutkan dua cara merawat tubuh.", contohJawaban: "Makan secukupnya, tidur, bergerak, atau menjaga kebersihan." },
            { soal: "Apa yang diajarkan cerita Ribka?", contohJawaban: "Perbuatan baik, yaitu memberi minum kepada orang yang membutuhkan." },
            { soal: "Untuk apa tangan kita dipakai?", contohJawaban: "Untuk menolong, bukan untuk menyakiti." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan perawatan dengan tubuh!",
          pasangan: [
            { kiri: { emoji: "🥗", teks: "Makan secukupnya" }, kanan: "Merawat tubuh" },
            { kiri: { emoji: "😴", teks: "Tidur" }, kanan: "Istirahat untuk tubuh" },
            { kiri: { emoji: "💧", teks: "Memberi minum" }, kanan: "Perbuatan baik seperti Ribka" },
            { kiri: { emoji: "🤝", teks: "Menolong" }, kanan: "Tangan dipakai untuk kebaikan" }
          ]
        }]
      },

      {
        id: "rajin-ke-gereja",
        judul: "Aku Rajin ke Gereja",
        emoji: "⛪",
        ringkasan: [
          { emoji: "⛪", teks: "Gereja adalah tempat umat Kristen beribadah dan belajar firman." },
          { emoji: "⏰", teks: "Kita datang dengan sikap tenang, tidak berlari-lari di dalam ruang ibadah." },
          { emoji: "🎵", teks: "Di gereja kita berdoa, menyanyi, dan mendengarkan." },
          { emoji: "👨‍👩‍👧‍👦", teks: "Sekolah minggu adalah waktu belajar firman bersama teman dan guru." },
          { emoji: "🙏", teks: "Kita bersyukur karena ada tempat untuk beribadah." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Gereja adalah tempat ....", pilihan: ["beribadah", "berlomba lari", "membuang sampah"], jawaban: 0, penjelasan: "Umat berkumpul untuk beribadah dan belajar firman." },
            { soal: "Di dalam ruang ibadah, kita ....", pilihan: ["duduk tenang", "berlari", "berteriak"], jawaban: 0, penjelasan: "Sikap tenang menghormati ibadah." },
            { soal: "Kegiatan di gereja antara lain ....", pilihan: ["berdoa dan menyanyi", "mengejek", "merusak buku"], jawaban: 0, penjelasan: "Doa, nyanyian, dan mendengarkan adalah bagian ibadah." },
            { soal: "Sekolah minggu adalah waktu ....", pilihan: ["belajar firman bersama", "tidur di kelas sekolah", "bermain bola di dalam ruang"], jawaban: 0, penjelasan: "Teman dan guru sekolah minggu belajar bersama." }
          ],
          [
            { soal: "Datang ke gereja menunjukkan ....", pilihan: ["kerajinan beribadah", "rasa malas", "rasa marah"], jawaban: 0, penjelasan: "Rajin berarti hadir dan mengikuti dengan baik." },
            { soal: "Mendengarkan di gereja berarti ....", pilihan: ["memperhatikan firman", "berbicara terus", "berlari keliling"], jawaban: 0, penjelasan: "Telinga dipakai untuk mendengarkan." },
            { soal: "Kita bersyukur karena ....", pilihan: ["ada tempat beribadah", "gereja adalah tempat berlomba", "ibadah tidak perlu sikap"], jawaban: 0, penjelasan: "Tempat ibadah adalah pemberian yang dijaga." },
            { soal: "Sikap yang tidak sesuai di ruang ibadah adalah ....", pilihan: ["berlari-lari", "berdoa", "menyanyi bersama"], jawaban: 0, penjelasan: "Berlari mengganggu ibadah." }
          ]
        ],
        esaiSets: [[
            { soal: "Apa itu gereja?", contohJawaban: "Tempat umat Kristen beribadah dan belajar firman." },
            { soal: "Sebutkan dua sikap yang baik saat ibadah.", contohJawaban: "Duduk tenang, berdoa, menyanyi, atau mendengarkan." },
            { soal: "Apa itu sekolah minggu?", contohJawaban: "Waktu belajar firman bersama teman dan guru." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan kegiatan gereja dengan sikapnya!",
          pasangan: [
            { kiri: { emoji: "⛪", teks: "Ruang ibadah" }, kanan: "Duduk tenang" },
            { kiri: { emoji: "🙏", teks: "Berdoa" }, kanan: "Bagian ibadah" },
            { kiri: { emoji: "🎵", teks: "Menyanyi" }, kanan: "Dilakukan bersama" },
            { kiri: { emoji: "📖", teks: "Sekolah minggu" }, kanan: "Belajar firman" }
          ]
        }]
      },

      {
        id: "suka-membaca-alkitab",
        judul: "Aku Suka Membaca Alkitab",
        emoji: "📖",
        ringkasan: [
          { emoji: "📖", teks: "Alkitab adalah firman Tuhan." },
          { emoji: "🙏", teks: "Sebelum membaca, kita berdoa supaya dapat mengerti." },
          { emoji: "👦", teks: "Timotius belajar firman Tuhan sejak ia masih kecil." },
          { emoji: "📅", teks: "Rajin berarti membaca sedikit demi sedikit, tidak harus banyak sekaligus." },
          { emoji: "🪑", teks: "Bacalah di tempat yang tenang agar dapat memperhatikan." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Alkitab berisi ....", pilihan: ["firman Tuhan", "daftar belanja", "soal pengurangan"], jawaban: 0, penjelasan: "Alkitab adalah firman Tuhan." },
            { soal: "Sebelum membaca Alkitab, kita ....", pilihan: ["berdoa", "berlari", "menutupnya terus"], jawaban: 0, penjelasan: "Doa membantu kita bersiap mengerti." },
            { soal: "Timotius belajar firman Tuhan sejak ....", pilihan: ["kecil", "lupa selamanya", "tidak pernah"], jawaban: 0, penjelasan: "Ia belajar sejak masih anak-anak." },
            { soal: "Membaca sedikit demi sedikit tetap disebut ....", pilihan: ["rajin", "malas", "tidak berguna"], jawaban: 0, penjelasan: "Rajin tidak harus banyak sekaligus." }
          ],
          [
            { soal: "Tempat yang baik untuk membaca adalah tempat yang ....", pilihan: ["tenang", "sangat ramai dan gelap", "penuh ejekan"], jawaban: 0, penjelasan: "Tempat tenang membantu kita memperhatikan." },
            { soal: "Alkitab dibaca supaya kita ....", pilihan: ["mengenal firman Tuhan", "menghafal iklan", "mengukur panjang"], jawaban: 0, penjelasan: "Isinya adalah firman Tuhan." },
            { soal: "Menutup Alkitab tanpa pernah membukanya ....", pilihan: ["bukan cara rajin", "adalah cara Timotius", "sama dengan berdoa"], jawaban: 0, penjelasan: "Rajin berarti mau membacanya." },
            { soal: "Doa sebelum membaca adalah sikap ....", pilihan: ["siap mendengar", "malas", "marah"], jawaban: 0, penjelasan: "Kita meminta dapat mengerti." }
          ]
        ],
        esaiSets: [[
            { soal: "Apa itu Alkitab?", contohJawaban: "Firman Tuhan." },
            { soal: "Mengapa kita berdoa sebelum membaca Alkitab?", contohJawaban: "Supaya kita siap dan dapat mengerti." },
            { soal: "Apa yang dapat ditiru dari Timotius?", contohJawaban: "Belajar firman Tuhan sejak masih kecil, sedikit demi sedikit." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan kebiasaan dengan artinya!",
          pasangan: [
            { kiri: { emoji: "📖", teks: "Alkitab" }, kanan: "Firman Tuhan" },
            { kiri: { emoji: "🙏", teks: "Doa sebelum membaca" }, kanan: "Siap mengerti" },
            { kiri: { emoji: "👦", teks: "Timotius" }, kanan: "Belajar sejak kecil" },
            { kiri: { emoji: "📅", teks: "Sedikit demi sedikit" }, kanan: "Cara yang rajin" }
          ]
        }]
      },

      {
        id: "mengasihi-yang-berbeda",
        judul: "Mengasihi yang Berbeda",
        emoji: "🌏",
        ringkasan: [
          { emoji: "🌏", teks: "Indonesia punya banyak suku dan agama." },
          { emoji: "💛", teks: "Kasih Tuhan untuk semua orang, bukan hanya yang sama dengan kita." },
          { emoji: "👋", teks: "Kita menyapa dengan sopan teman yang berbeda suku atau agama." },
          { emoji: "🚫", teks: "Mengejek suku, bahasa, atau agama seseorang tidak menunjukkan kasih." },
          { emoji: "🤝", teks: "Keragaman dapat membuat kita belajar kebiasaan baru tanpa meninggalkan keyakinan sendiri." }
        ],
        pilihanGandaSets: [
          [
            { soal: "Indonesia memiliki suku dan agama yang ....", pilihan: ["beragam", "hanya satu dan yang lain dilarang", "tidak boleh dikenal"], jawaban: 0, penjelasan: "Keragaman ada di Indonesia." },
            { soal: "Kasih Tuhan ditujukan untuk ....", pilihan: ["semua orang", "hanya teman yang sama", "hanya satu suku"], jawaban: 0, penjelasan: "Semua orang dikasihi Tuhan." },
            { soal: "Mengejek agama teman adalah sikap yang ....", pilihan: ["tidak baik", "wajib", "cara menyapa"], jawaban: 0, penjelasan: "Kasih tidak mengejek." },
            { soal: "Menyapa dengan sopan teman yang berbeda suku berarti ....", pilihan: ["menghargai", "menjauhi", "memaksa ia berubah"], jawaban: 0, penjelasan: "Sapa yang sopan menunjukkan hormat." }
          ],
          [
            { soal: "Kita boleh belajar kebiasaan baru tanpa ....", pilihan: ["meninggalkan keyakinan sendiri", "perlu sopan", "boleh berteman"], jawaban: 0, penjelasan: "Menghargai tidak berarti mengganti iman sendiri." },
            { soal: "Bahasa daerah yang berbeda ....", pilihan: ["tetap dihargai", "harus ditertawakan", "tidak boleh didengar"], jawaban: 0, penjelasan: "Bahasa adalah bagian kekayaan suku." },
            { soal: "Hidup rukun terjadi jika perbedaan ....", pilihan: ["dihargai", "dijadikan bahan ejekan", "disembunyikan dengan takut"], jawaban: 0, penjelasan: "Hormat membuat hidup rukun." },
            { soal: "Teman yang beribadah berbeda ....", pilihan: ["tetap teman", "bukan lagi teman", "harus diusir"], jawaban: 0, penjelasan: "Perbedaan agama tidak menghapus pertemanan." }
          ]
        ],
        esaiSets: [[
            { soal: "Mengapa kita tidak boleh mengejek suku atau agama teman?", contohJawaban: "Karena kasih Tuhan untuk semua orang, dan ejekan merusak kerukunan." },
            { soal: "Bagaimana cara menyapa teman yang berbeda suku?", contohJawaban: "Dengan sopan." },
            { soal: "Apa yang tetap kita jaga saat belajar kebiasaan baru?", contohJawaban: "Keyakinan kita sendiri." }
          ]],
        cocokkanSets: [{
          instruksi: "Pasangkan perbedaan dengan sikapnya!",
          pasangan: [
            { kiri: { emoji: "🌏", teks: "Banyak suku" }, kanan: "Kekayaan Indonesia" },
            { kiri: { emoji: "🙏", teks: "Agama yang berbeda" }, kanan: "Tetap dihargai" },
            { kiri: { emoji: "👋", teks: "Sapa yang sopan" }, kanan: "Cara mengasihi" },
            { kiri: { emoji: "🚫", teks: "Mengejek" }, kanan: "Bukan kasih" }
          ]
        }]
      }
    ]
  }

  ,

  /* ============================================================
   *  MATA PELAJARAN: BAHASA INDONESIA
   *  Bab 2 — Serunya Membaca Fabel (Kelas 2)
   *  Fokus: Paragraf, Fabel, dan Antonim.
   *
   *  Catatan: mata pelajaran ini dibuat lebih kaya soal.
   *  Jumlah SET pilihan ganda dan mencocokkan DIGANDAKAN
   *  (6 set), dan soal esai ditambah agar latihan lebih banyak.
   * ============================================================ */
  BAHASA_INDONESIA_SUBJECT

  ,

  /* ============================================================
   *  MATA PELAJARAN: IPAS
   *  Modul: Cuaca (Bab 3 — Kenampakan Matahari dan Cuaca)
   * ============================================================ */
  IPAS_SUBJECT

  ,

  /* ============================================================
   *  MATA PELAJARAN: MATEMATIKA
   *  Modul: Bangun Datar dan Bangun Ruang
   * ============================================================ */
  MATEMATIKA_SUBJECT

  ,

  /* ============================================================
   *  MATA PELAJARAN: INFORMATIKA
   *  Modul: Pengenalan Perangkat TIK
   * ============================================================ */
  INFORMATIKA_SUBJECT

  ,

  /* ============================================================
   *  MATA PELAJARAN: PLH (Pendidikan Lingkungan Hidup)
   *  Modul: Memelihara Lingkungan
   * ============================================================ */
  PLH_SUBJECT

    ,
  BAHASA_MANDARIN_SUBJECT
  ,
  SBDP_SUBJECT

  // ====== TAMBAHKAN MATA PELAJARAN BARU DI SINI ======

  // ,{
  //   id: "matematika",
  //   nama: "Matematika",
  //   ikon: "➗",
  //   warna: "#2a9d8f",
  //   deskripsi: "Belajar berhitung dengan seru.",
  //   topik: [ ... ]
  // }
];
