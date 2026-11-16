// ============================================================================
// PUSAT DATA WEBSITE HAZA DIGITAL
// Diselaraskan dengan profil profesional Hamzah Huzaifah (linkedin.com/in/hamzah-huzaifah)
// serta portofolio proyek produksi nyata (SPMB, SIKMA, SIGAP, KKN Vidya Vardhana,
// Web Madrasah JIC, dan LAZIS DMI DKI Jakarta).
// ============================================================================

export const SITE_CONFIG = {
  brandName: 'Haza Digital',
  tagline: 'Partner Transformasi Web, Sistem Informasi & Branding Digital',
  founderName: 'Hamzah Huzaifah',
  founderRole: 'Founder & Lead Software Engineer',
  linkedinUrl: 'https://www.linkedin.com/in/hamzah-huzaifah',
  linkedinDisplay: 'linkedin.com/in/hamzah-huzaifah',
  whatsappNumber: '6281284460237',
  whatsappDisplay: '+62 812-8446-0237',
  email: 'hamzahhuzaifahh@gmail.com',
  address: 'Jakarta Timur, DKI Jakarta, Indonesia',
  workingHours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  defaultWhatsappMessage:
    'Halo Mas Hamzah / Tim Haza Digital, saya tertarik untuk berkonsultasi mengenai pembuatan website / sistem informasi digital untuk lembaga/usaha kami.',
};

// Profil Kredibilitas Praktisi (Selaras dengan LinkedIn & CV Hamzah Huzaifah)
export const FOUNDER_PROFILE = {
  name: 'Hamzah Huzaifah',
  title: 'Software Engineer • IT & Web Consultant • Visual & Multimedia Designer',
  linkedinUrl: 'https://www.linkedin.com/in/hamzah-huzaifah',
  summary:
    'Praktisi Software Engineering, Konsultan Web Institusi, dan Administrasi Sistem Pendidikan dengan pengalaman lebih dari 4 tahun dalam mendorong transformasi digital, arsitektur aplikasi web produksi (SPMB, SIKMA, SIGAP), manajemen data EMIS 4.0, serta komunikasi visual di lingkungan Pusat Pengkajian dan Pengembangan Islam Jakarta (Jakarta Islamic Centre) dan Dewan Masjid Indonesia (DMI) DKI Jakarta.',
  highlights: [
    {
      role: 'Software Engineer',
      org: 'Madrasah Jakarta Islamic Centre (PPPIJ)',
      period: '2026 – Sekarang',
      desc: 'Memimpin perancangan, pengembangan fullstack, dan deployment cPanel untuk ekosistem aplikasi web kritikal: SPMB, SIKMA, dan SIGAP.',
    },
    {
      role: 'IT Support & Web Project Associate',
      org: 'LAZIS DMI DKI Jakarta',
      period: '2026 – Sekarang',
      desc: 'Mengembangkan website awal organisasi, mengelola infrastruktur IT/jaringan, serta menjadi konsultan teknis internal & penghubung vendor (Kurma Media) untuk pengembangan platform ZISWAF.',
    },
    {
      role: 'Graphic Designer, Social Media & Event Operator',
      org: 'DMI DKI Jakarta & Madrasah JIC',
      period: '2022 – Sekarang',
      desc: 'Menangani identitas visual resmi, desain media sosial institusi, motion graphics acara formal, serta administrasi program pendidikan & EMIS 4.0.',
    },
    {
      role: 'Sistem Informasi (GPA 3.69/4.00)',
      org: 'Universitas Nahdlatul Ulama Indonesia (UNUSIA)',
      period: '2023 – Sekarang',
      desc: 'Fokus pada Management Information Systems, rekayasa perangkat lunak, arsitektur database, serta publikasi digital KKN Vidya Vardhana.',
    },
  ],
};

// Helper untuk membuat link WhatsApp otomatis dengan pesan kustom
export const createWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || SITE_CONFIG.defaultWhatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
};

// Navigasi Utama
export const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio Web', href: '#portofolio' },
  { label: 'Alur Kerja', href: '#alur-kerja' },
  { label: 'Paket Harga', href: '#paket-harga' },
];

// Kategori Filter Portofolio
export const PORTFOLIO_CATEGORIES = [
  'Semua',
  'Instansi & Pendidikan',
  'Sistem Informasi',
  'UMKM & Perusahaan',
];

// 6 Proyek Portofolio Riil Haza Digital (Berdasarkan Proyek Nyata & Live Production)
export const PORTFOLIO_PROJECTS = [
  {
    id: 'spmb-mjic',
    title: 'SPMB Online — Sistem Penerimaan Murid Baru Madrasah JIC',
    client: 'Madrasah Jakarta Islamic Centre (PAUDQu, TPQ, MDT)',
    category: 'Instansi & Pendidikan',
    statusBadge: 'Live Production',
    year: '2026',
    domainDisplay: 'spmb.mjic.sch.id',
    demoUrl: 'https://spmb.mjic.sch.id',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Platform penerimaan santri baru & daftar ulang multi-jenjang (PAUDQu, TPQ, MDT) dengan skrining kandidat otomatis, pencegahan data ganda (Fuzzy Matching), dan dashboard keuangan real-time.',
    fullDescription:
      'Sistem Penerimaan Murid Baru (SPMB) fullstack yang berjalan di lingkungan produksi cPanel (spmb.mjic.sch.id). Mengelola pendaftaran digital Santri Baru dan Daftar Ulang untuk unit PAUDQu, TPQ, dan MDT lengkap dengan unggah berkas, pelacakan tunggakan per unit, otomatisasi cetak kwitansi, hingga integrasi API langsung ke sistem keuangan SIKMA.',
    features: [
      'Validasi Anti-Duplikasi Pendaftar dengan Algoritma Fuzzy Matching (Levenshtein Distance)',
      'Dashboard Analitik Realisasi vs Tunggakan per Unit (PAUDQu, TPQ, MDT) & Ziswaf',
      'Manajemen Santri Mundur & Batal Mundur dengan Kalkulasi Refund Presisi',
      'Cetak Kwitansi Resmi Otomatis & Integrasi API dua arah dengan SIKMA',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL2', 'EJS', 'Tailwind CSS', 'Puppeteer & XLSX'],
    metrics: 'Berjalan aktif di produksi (https://spmb.mjic.sch.id) melayani 3 unit pendidikan JIC',
  },
  {
    id: 'sikma-mjic',
    title: 'SIKMA — Sistem Informasi Keuangan & Manajemen Administrasi',
    client: 'Madrasah Jakarta Islamic Centre (Multi-Lembaga)',
    category: 'Sistem Informasi',
    statusBadge: 'Live Production',
    year: '2026',
    domainDisplay: 'sikma.mjic.sch.id',
    demoUrl: 'https://sikma.mjic.sch.id',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Sistem manajemen keuangan & administrasi multi-lembaga (MJIC, PAUDQu, TPQ, MDT) dengan Auto-Billing SPP tahun ajaran, tabungan santri, arus kas, dan integrasi SSO SPMB.',
    fullDescription:
      'Aplikasi web manajemen keuangan institusi terpusat di sikma.mjic.sch.id untuk melacak transaksi, mengotomatisasi pencatatan tagihan SPP, mengelola pelaporan arus kas, serta mendukung pengambilan keputusan keuangan. Dilengkapi Single Sign-On (SSO) dengan SPMB, Tutup Buku Paripurna anti-duplikasi (idempotent), serta Roll-over kenaikan kelas massal.',
    features: [
      'Arsitektur Multi-Lembaga (Dashboard Gabungan MJIC, PAUDQu, TPQ & MDT)',
      'Auto-Billing SPP Tahun Ajaran Penuh & Kustomisasi Tagihan Manual Santri',
      'Manajemen Tabungan Santri (Setoran Massal Accordion), Infak & Tunggakan',
      'Cetak Kwitansi Dinamis dengan TTD Kasir Otomatis, Roll-over Kelas & Audit Trail',
    ],
    techStack: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL2', 'EJS', 'Tailwind CSS'],
    metrics: 'Live Production (https://sikma.mjic.sch.id) terintegrasi penuh dengan ekosistem SPMB',
  },
  {
    id: 'sigap-mjic',
    title: 'SIGAP — Sistem Informasi Guru, Administrasi & Pembelajaran',
    client: 'Dewan Guru & Akademik Madrasah Jakarta Islamic Centre',
    category: 'Sistem Informasi',
    statusBadge: 'Live Production',
    year: '2026',
    domainDisplay: 'sigap.mjic.sch.id',
    demoUrl: 'https://sigap.mjic.sch.id',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Sistem manajemen sekolah terintegrasi yang menghubungkan administrasi guru, rekam akademik siswa, presensi kehadiran, dan cetak rapor dalam satu portal.',
    fullDescription:
      'Portal akademik berbasis React 19 & TypeScript (sigap.mjic.sch.id) yang menyatukan alur pembelajaran dan administrasi guru. Mendukung penarikan data santri baru satu klik (One-Click Sync) dari portal SPMB lengkap dengan arsip cadangan lokal, pengelolaan master kelas, input nilai, rekap absensi, hingga pencetakan rapor semester.',
    features: [
      'One-Click Sync Data Santri Baru langsung dari API Produksi spmb.mjic.sch.id',
      'Modul Presensi Kehadiran (AttendanceForm) & Penilaian Siswa (GradeForm) per Kelas',
      'Cetak Rapor Siswa Dinamis (Pilihan Semester Ganjil/Genap & Tahun Ajaran)',
      'Impor/Ekspor Master Data Siswa via Excel & Autentikasi Keamanan JWT',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Express.js', 'MySQL2'],
    metrics: 'Live Production (https://sigap.mjic.sch.id) dengan arsitektur Single-Domain cepat',
  },
  {
    id: 'kkn-vidya-vardhana',
    title: 'Portal Web KKN Vidya Vardhana, Sitasi Riset & Modul UMKM Desa',
    client: 'KKN Kelompok 07 Vidya Vardhana UNUSIA — Desa Ciasihan',
    category: 'UMKM & Perusahaan',
    statusBadge: 'Live Production',
    year: '2026',
    domainDisplay: 'vidyavardhana.my.id',
    demoUrl: 'https://vidyavardhana.my.id',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Portal publikasi digital, modul pemberdayaan UMKM desa, dan repositori naskah riset yang terindeks Google Scholar & Google Search Console.',
    fullDescription:
      'Platform publikasi digital dan dokumentasi pengabdian masyarakat di Desa Ciasihan (vidyavardhana.my.id) dengan gaya visual modern. Dilengkapi Scribd-Style Document Viewer untuk membaca modul UMKM secara fullscreen di web, konversi otomatis foto dokumentasi iPhone (.HEIC) ke .JPG/.WebP terkompresi, serta integrasi metadata sitasi akademik Google Scholar.',
    features: [
      'Integrasi Metadata Sitasi Akademik Google Scholar & Optimasi Google Search Console',
      'Scribd-Style Fullscreen Document Viewer untuk Modul UMKM & Laporan Pengabdian',
      'Konversi & Kompresi Gambar Otomatis (.HEIC ke .JPG/.WebP HD di bawah 250 KB)',
      'Dynamic Open Graph (Preview Link WhatsApp/Medsos) & Dashboard CMS Admin Lengkap',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    metrics: 'Live Production (https://vidyavardhana.my.id) & terindeks di Google Scholar',
  },
  {
    id: 'web-madrasah-jic',
    title: 'Portal Web Profil Resmi Lembaga Pendidikan Madrasah JIC',
    client: 'Lembaga Pendidikan Jakarta Islamic Centre (PAUDQu, TPQ, MDT)',
    category: 'Instansi & Pendidikan',
    statusBadge: 'Live Production',
    year: '2025',
    domainDisplay: 'lembagapendidikan.islamic-center.or.id',
    demoUrl: 'https://lembagapendidikan.islamic-center.or.id',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Website profil resmi lembaga pendidikan berbasis WordPress yang memuat informasi program PAUDQu, TPQ, dan MDT, berita kegiatan, serta akses menuju portal SPMB.',
    fullDescription:
      'Pengelolaan dan pengembangan portal informasi resmi Lembaga Pendidikan Jakarta Islamic Centre (lembagapendidikan.islamic-center.or.id) menggunakan CMS WordPress. Menyajikan profil sejarah, visi-misi, kurikulum 3 jenjang pendidikan (PAUDQu, TPQ, MDT), publikasi kabar kegiatan madrasah, galeri dokumentasi, serta integrasi tautan pendaftaran santri baru ke spmb.mjic.sch.id.',
    features: [
      'Manajemen Konten Berbasis CMS WordPress yang Mudah Dikelola Tim Humas',
      'Halaman Profil, Sejarah, Visi-Misi & Kurikulum 3 Jenjang (PAUDQu, TPQ, MDT)',
      'Publikasi Kabar Berita Kegiatan, Pengumuman Akademik & Galeri Dokumentasi',
      'Integrasi Navigasi Pendaftaran Langsung ke Portal SPMB Resmi (spmb.mjic.sch.id)',
    ],
    techStack: ['WordPress CMS', 'PHP', 'MySQL', 'Custom Theme & Layout', 'SEO On-Page'],
    metrics: 'Portal resmi aktif di https://lembagapendidikan.islamic-center.or.id',
  },
  {
    id: 'lazis-dmi-dki',
    title: 'Web Inisial (Magang) & Konsultasi Teknis IT — LAZIS DMI DKI Jakarta',
    client: 'LAZIS Dewan Masjid Indonesia (DMI) Provinsi DKI Jakarta',
    category: 'UMKM & Perusahaan',
    statusBadge: 'IT Consultant & Web',
    year: '2026',
    domainDisplay: 'lazisdmidkijakarta.vercel.app',
    demoUrl: 'https://lazisdmidkijakarta.vercel.app',
    isLiveProduction: true,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    shortDescription:
      'Konsultan teknis internal (Technical Liaison) untuk pengembangan web resmi organisasi, administrasi infrastruktur IT kantor, serta pembuatan web inisial saat fase magang.',
    fullDescription:
      'Berperan sebagai IT Consultant & Technical Liaison internal di LAZIS DMI DKI Jakarta yang menjembatani kebutuhan operasional organisasi ke dalam spesifikasi teknis bersama vendor eksternal (Kurma Media), mengelola infrastruktur PC workstation & jaringan WiFi kantor, serta merancang bangun website awal organisasi pada masa magang yang di-deploy di lazisdmidkijakarta.vercel.app.',
    features: [
      'Technical Consultancy & Vendor Liaison dalam Pengembangan Website Resmi LAZIS DMI',
      'Penerjemahan Alur Kerja Operasional ZISWAF menjadi Spesifikasi & Review Arsitektur Web',
      'Pengembangan Website Awal (Fase Magang) yang Di-deploy di lazisdmidkijakarta.vercel.app',
      'Administrasi Infrastruktur Hardware Workstation PC & Jaringan Lokal Kantor',
    ],
    techStack: ['Technical Consultancy', 'Web Architecture Review', 'IT Infrastructure', 'Vercel'],
    metrics: 'Konsultan Teknis Internal & Web Inisial Magang (lazisdmidkijakarta.vercel.app)',
  },
];

// 4 Layanan Utama (Solusi Digital — Selaras dengan Keahlian Software, IT & Visual Branding)
export const SERVICES_LIST = [
  {
    id: 'company-profile',
    iconName: 'Building2',
    badge: 'Instansi, Kampus & Organisasi',
    title: 'Website Company Profile, Lembaga & Identitas Visual',
    description:
      'Pembuatan website profil resmi lembaga pendidikan, yayasan, organisasi publik (seperti Madrasah JIC, DMI DKI Jakarta, & KKN UNUSIA) lengkap dengan penataan visual branding yang kredibel dan SEO-friendly.',
    highlights: [
      'Desain UI/UX korporat & identitas visual profesional yang meningkatkan kepercayaan publik',
      'Optimasi SEO On-Page, Google Search Console & Dynamic Open Graph WhatsApp',
      'CMS Admin mandiri lengkap dengan kompresi gambar otomatis (.HEIC ke .JPG/.WebP)',
    ],
  },
  {
    id: 'sistem-informasi',
    iconName: 'Database',
    badge: 'Spesialis Sistem Produksi',
    title: 'Sistem Informasi Akademik, Keuangan & Administrasi',
    description:
      'Pengembangan sistem informasi custom berstandar produksi seperti SPMB Online, Sistem Keuangan & Administrasi (SIKMA), serta Sistem Guru & Pembelajaran (SIGAP) yang saling terintegrasi melalui API & SSO.',
    highlights: [
      'Arsitektur Multi-Lembaga, Single Sign-On (SSO) & Sinkronisasi API Antar-Sistem',
      'Otomatisasi Tagihan (Auto-Billing), Cetak Kwitansi TTD Dinamis & Rapor PDF',
      'Validasi Anti-Duplikasi Data (Fuzzy Matching), Roll-over Kelas & Audit Trail',
    ],
  },
  {
    id: 'katalog-umkm',
    iconName: 'ShoppingBag',
    badge: 'Pemberdayaan Bisnis & UMKM',
    title: 'Website Katalog UMKM, Modul Digital & Portal Publikasi',
    description:
      'Solusi web interaktif untuk menampilkan katalog produk UMKM, dokumen modul pemberdayaan (Scribd-Style Viewer), hingga integrasi pemesanan langsung ke WhatsApp Admin.',
    highlights: [
      'Katalog produk & dokumen interaktif yang ringan dibuka di semua smartphone',
      'Integrasi tombol pemesanan & konsultasi langsung ke WhatsApp CS',
      'Pengelolaan produk, artikel, dan materi visual promosi yang mudah dari HP/Laptop',
    ],
  },
  {
    id: 'maintenance-hosting',
    iconName: 'ShieldCheck',
    badge: 'cPanel, DNS & IT Consultancy',
    title: 'Deployment cPanel, Konsultasi IT & Maintenance Server',
    description:
      'Layanan end-to-end mulai dari konfigurasi domain/DNS, deployment Node.js & React di cPanel Shared Hosting, konsultasi teknis vendor IT, hingga perawatan keamanan SSL dan backup berkala.',
    highlights: [
      'Arsitektur Pre-built & Pure JS (MySQL2/Sequelize) bebas kendala limitasi memori cPanel',
      'Konsultasi teknis penerjemahan alur kerja operasional menjadi arsitektur sistem yang tepat',
      'Perawatan berkala, keamanan SSL HTTPS, kompresi Gzip/Brotli & dokumentasi sistem',
    ],
  },
];

// 4 Langkah Alur Kerja Transparan
export const WORKFLOW_STEPS = [
  {
    stepNumber: '01',
    iconName: 'MessageSquareText',
    title: 'Konsultasi & Analisis Kebutuhan',
    duration: 'Tahap 1 • Pemetaan Operasional',
    description:
      'Berbekal pengalaman langsung mengelola administrasi lembaga dan konsultasi teknis IT, kami menerjemahkan kebutuhan operasional Anda menjadi spesifikasi sistem yang tepat guna.',
    deliverable: 'Dokumen Arsitektur Fitur & Estimasi Biaya Transparan',
  },
  {
    stepNumber: '02',
    iconName: 'LayoutTemplate',
    title: 'Perancangan Desain & Sistem',
    duration: 'Tahap 2 • Web & Visual Engineering',
    description:
      'Perancangan antarmuka modern (React / Next.js / Tailwind CSS), penataan visual branding yang rapi, serta pembangunan database MySQL dan endpoint REST API yang aman.',
    deliverable: 'Aplikasi Terstruktur & Preview Progres Berkala',
  },
  {
    stepNumber: '03',
    iconName: 'CheckCircle2',
    title: 'Uji Coba & Revisi',
    duration: 'Tahap 3 • Quality Assurance',
    description:
      'Pengujian menyeluruh pada alur transaksi, cetak kwitansi/rapor PDF, validasi anti-duplikasi data, serta uji responsivitas di smartphone dan desktop bersama tim Anda.',
    deliverable: 'Sistem Teruji Stabil & Penyesuaian Revisi',
  },
  {
    stepNumber: '04',
    iconName: 'Rocket',
    title: 'Peluncuran (Live) & Serah Terima Akses',
    duration: 'Tahap 4 • Live Production',
    description:
      'Deployment ke domain resmi & server cPanel Anda lengkap dengan konfigurasi DNS/SSL, indeks Google Search Console, dokumentasi playbook, serta pendampingan penuh.',
    deliverable: 'Website Live Production, Akses Penuh & Garansi Support',
  },
];

// 3 Pilihan Paket Layanan (Pricing)
export const PRICING_PACKAGES = [
  {
    id: 'umkm-starter',
    name: 'Paket UMKM Starter',
    subtitle: 'Cocok untuk katalog produk UMKM, usaha jasa, dan portal publikasi program/komunitas.',
    priceLabel: 'Mulai Rp 1,5 Jt',
    priceNote: 'Investasi hemat • Siap langsung online',
    badge: 'Hemat & Cepat Live',
    isPopular: false,
    ctaText: 'Pesan Paket Ini',
    features: [
      'Website Responsif Modern (Mobile & Desktop Friendly)',
      'Gratis Domain (.com / .my.id / .id) & Hosting cPanel 1 Tahun',
      'Sertifikat Keamanan SSL (HTTPS Aktif)',
      'Katalog Produk / Artikel + Tombol Order WhatsApp Otomatis',
      'Fitur Kompresi Gambar Otomatis & Dynamic Open Graph WA',
      'Pendaftaran Indeks Google Search Console',
      'Gratis Revisi & Garansi Pendampingan Teknis 3 Bulan',
    ],
  },
  {
    id: 'bisnis-instansi',
    name: 'Paket Bisnis & Instansi',
    subtitle:
      'Ideal untuk sekolah/madrasah, yayasan, lembaga publik, KKN/kampus, dan perusahaan swasta.',
    priceLabel: 'Mulai Rp 3,5 Jt',
    priceNote: 'Desain eksklusif • Dilengkapi CMS Admin lengkap',
    badge: 'Paling Banyak Dipilih',
    isPopular: true,
    ctaText: 'Pesan Paket Ini',
    features: [
      'Desain UI/UX Eksklusif sesuai Identitas Visual Lembaga / Korporat',
      'Gratis Domain Resmi (.sch.id / .or.id / .co.id / .com) & Hosting',
      'Dashboard CMS Admin (Kelola Berita, Kurikulum, Program & Galeri)',
      'Penampil Dokumen Interaktif (Full-Screen Viewer) & Unduhan PDF',
      'Integrasi Metadata Google Scholar / SEO Google Search Console',
      'Optimasi Performa PageSpeed & Konfigurasi DNS/Server cPanel',
      'Pelatihan Operator, Dokumentasi Panduan & Garansi 6 Bulan',
    ],
  },
  {
    id: 'sistem-custom',
    name: 'Paket Sistem Custom',
    subtitle:
      'Untuk aplikasi web produksi seperti SPMB Online, Sistem Keuangan (SIKMA), atau Guru & Rapor (SIGAP).',
    priceLabel: 'Custom sesuai Modul',
    priceNote: 'Disesuaikan kompleksitas fitur & integrasi sistem',
    badge: 'Skala Sistem Informasi',
    isPopular: false,
    ctaText: 'Pesan Paket Ini',
    features: [
      'Perancangan Sistem Informasi Custom (SPMB / Keuangan / Akademik / ZISWAF)',
      'Arsitektur Multi-Lembaga / Multi-Role dengan Hak Akses Berjenjang',
      'Integrasi API Antar-Sistem & Single Sign-On (SSO) Terpusat',
      'Cetak Otomatis Kwitansi Resmi (TTD Dinamis), Rapor PDF & Ekspor Excel',
      'Deployment Handal di cPanel (Reverse Proxy / Pre-built) tanpa Kendala RAM',
      'Fitur Audit Trail (Log Aktivitas), Roll-over Data & Pencegahan Duplikasi',
      'Serah Terima Source Code, Dokumentasi Sistem & Dukungan Prioritas',
    ],
  },
];
