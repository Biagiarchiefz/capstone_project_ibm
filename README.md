# GranitChat

GranitChat adalah aplikasi percakapan berbasis kecerdasan buatan yang memanfaatkan model **IBM Granite** untuk memberikan pengalaman chatting yang cerdas dan responsif.

Aplikasi ini dibangun dengan:

* **Frontend:** React dan Tailwind CSS untuk antarmuka modern dan responsif
* **Backend:** Node.js dan Express.js untuk menangani logika server dan integrasi dengan model AI

---

## Fitur Utama

* **Percakapan Berbasis AI:** Menggunakan model IBM Granite untuk menghasilkan respons yang alami dan kontekstual
* **Antarmuka Pengguna Modern:** Dibangun dengan React dan Tailwind CSS untuk tampilan yang menarik dan responsif
* **Backend yang Scalable:** Menggunakan Node.js dan Express.js untuk performa yang cepat dan andal

---

## Teknologi yang Digunakan

* **Frontend:** React, Tailwind CSS
* **Backend:** Node.js, Express.js
* **AI Model:** IBM Granite

---

## Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

* Node.js (versi 18 atau lebih baru)
* npm atau yarn
* Akses ke model IBM Granite melalui replicate (konfigurasi API atau deployment lokal)

---

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan GranitChat secara lokal:

### 1. Clone Repository

```bash
git clone https://github.com/Biagiarchiefz/capstone_project_ibm.git
cd capstone-project
```

### 2. Instal Dependensi Frontend

```bash
cd fe-client
npm install
```

### 3. Instal Dependensi Backend

```bash
cd ../server
npm install
```

### 4. Konfigurasi Environment

Buat file `.env` di folder `server` dan tambahkan konfigurasi berikut:

```
REPLICATE_API_TOKEN=[Masukkan token dari replicate]
```

### 5. Jalankan Backend

```bash
cd server
npm run start
```

### 6. Jalankan Frontend

```bash
cd ../fe-client
npm run dev
```

### 7. Akses Aplikasi

Buka browser dan akses: [http://localhost:5173](http://localhost:5173)

---

## Struktur Proyek

```
CAPSTONE-PROJECT
├── fe-client
│   ├── node_modules         # Folder dependensi frontend
│   ├── public               # File statis (HTML, gambar, aset)
│   ├── src
│   │   ├── assets           # Gambar, font, atau file lain
│   │   ├── App.jsx          # Komponen utama aplikasi React
│   │   ├── index.css        # Styling global
│   │   └── main.jsx         # Titik masuk utama aplikasi React
│   ├── .gitignore           # File untuk mengabaikan file/folder Git
│   ├── eslint.config.js     # Konfigurasi ESLint
│   ├── index.html           # File HTML utama
│   ├── package-lock.json    # File kunci versi dependensi
│   ├── package.json         # Metadata proyek, dependensi, dan skrip
│   └── vite.config.js       # Konfigurasi Vite
├── server
│   ├── node_modules         # Folder dependensi server
│   ├── .env                 # Variabel lingkungan (API keys, port)
│   ├── .gitignore           # File ignore Git untuk server
│   ├── index.js             # File utama logika server
│   ├── package-lock.json    # File kunci versi dependensi server
│   └── package.json         # Metadata server, dependensi, dan skrip
└── versel.json              # Konfigurasi deployment ke Vercel
```

---

## Cara Menggunakan

1. Buka aplikasi di browser
2. Masukkan pesan di kolom chat
3. Model IBM Granite akan memproses dan memberikan respons secara real-time

