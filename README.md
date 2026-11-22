# Belajar Yuk!

Website latihan belajar untuk anak kelas 2 SD. Berisi ringkasan, kuis pilihan
ganda, soal esai, dan permainan mencocokkan untuk beberapa mata pelajaran
(Pancasila, PJOK, Agama, Bahasa Indonesia, IPAS, Matematika, Informatika, dan PLH). Setiap mata pelajaran
dibagi menjadi beberapa modul.

Dibuat dari file statis (HTML, CSS, JavaScript) tanpa server khusus.

## Cara menambah atau mengubah materi

Semua materi ada di `data/subjects.js`. Buka file itu, ikuti petunjuk di
bagian atasnya, lalu simpan. Website akan otomatis menampilkan perubahannya.

Setelah mengubah materi, ganti juga angka `?v=` di `index.html` (misalnya
menjadi tanggal hari ini) agar browser langsung memuat versi terbaru.

## Menjalankan secara lokal

Buka `index.html` langsung di browser, atau jalankan server statis sederhana
dari folder ini.

## Online

Situs ini dihosting dengan GitHub Pages.

## ASAS (3 latihan)

Setiap mata pelajaran punya modul ASAS dengan Latihan 1, 2, dan 3 (masing-masing
50 pilihan ganda + 10 esai, tanpa soal yang berulang antar-latihan). Soal tambahan
untuk Latihan 2 dan 3 ada di `data/asas-latihan.js`. File cetak `.docx` ada di
`cetak/` (`asas-<mapel>.docx`, `asas-<mapel>-2.docx`, `asas-<mapel>-3.docx`);
buat ulang dengan `sh tools/asas-docx/buat.sh` setelah soal berubah.
