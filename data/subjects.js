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
  deskripsi: "Belajar paragraf, fabel, dan antonim lewat cerita hewan yang seru.",
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
  deskripsi: "Mengenal matahari, cuaca, dan alam di sekitar kita.",
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
        { emoji: "🕶️", teks: "Matahari pagi mengandung vitamin D yang baik untuk tulang. Tetapi, jangan menatap matahari secara langsung karena dapat merusak mata." }
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
        }
      ]
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
  deskripsi: "Belajar mengenal bentuk dan bangun di sekitar kita.",
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
    }

  ]
};

const SUBJECTS = [
  {
    id: "pancasila",
    nama: "Pancasila",
    ikon: "🇮🇩",
    warna: "#e63946",
    deskripsi: "Belajar tentang aturan di rumah dan hidup rukun.",
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
    deskripsi: "Belajar gerak menggunakan benda: menangkap, melempar, dan memukul.",
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
    deskripsi: "Belajar hidup rukun dengan tetangga sesuai firman Tuhan.",
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
