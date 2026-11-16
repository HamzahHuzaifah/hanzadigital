# Haza Digital — Landing Page Agensi Website & Sistem Digital

Landing page modern, responsif, dan profesional untuk **Haza Digital** menggunakan **React (Vite)**, **Tailwind CSS**, dan **Lucide React**. Dirancang dengan mengintegrasikan portofolio sistem produksi nyata (**SPMB MJIC**, **SIKMA MJIC**, **SIGAP MJIC**, **Web KKN Vidya Vardhana UNUSIA**, **Portal Lembaga Pendidikan JIC**, dan **LAZIS DMI DKI Jakarta**) serta profil profesional **Hamzah Huzaifah** (`linkedin.com/in/hamzah-huzaifah`).

---

## Fitur Utama

1. **Layer Pop-up Live Preview (In-Page Iframe Modal)**:
   - Saat pengunjung mengklik tombol **Lihat Live Demo** pada kartu portofolio di [`src/components/PortfolioSection.jsx`](src/components/PortfolioSection.jsx), halaman **tidak berpindah tab** dan **URL browser tidak berubah**, melainkan membuka **layer pop-up baru di atas halaman** yang menampilkan langsung website link tersebut (`spmb.mjic.sch.id`, `sikma.mjic.sch.id`, `sigap.mjic.sch.id`, `vidyavardhana.my.id`, `lembagapendidikan.islamic-center.or.id`, dan `lazisdmidkijakarta.vercel.app`) lengkap dengan tombol pengatur tampilan **Desktop / Smartphone**.
2. **Siap Deploy Otomatis ke GitHub Pages**:
   - Dilengkapi konfigurasi `base: './'` di [`vite.config.js`](vite.config.js) dan workflow otomatis GitHub Actions di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Cara Deploy ke GitHub Pages (Untuk Tugas Kuliah)

Anda tidak perlu menyewa hosting atau cPanel. Cukup gunakan **GitHub Pages** gratis dengan langkah berikut:

1. **Buat Repository Baru di GitHub** (misalnya `haza-digital`).
2. **Push Kode ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit Haza Digital landing page"
   git branch -M main
   git remote add origin https://github.com/HamzahHuzaifah/haza-digital.git
   git push -u origin main
   ```
3. **Aktifkan GitHub Pages via GitHub Actions**:
   - Buka repository Anda di GitHub -> klik menu **Settings** -> **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment** > **Source**, ubah pilihan dari *Deploy from a branch* menjadi **GitHub Actions**.
   - Workflow di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) akan otomatis mem-build proyek React (Vite) di cloud GitHub dan mempublikasikan website Anda di alamat `https://hamzahhuzaifah.github.io/haza-digital/`.
