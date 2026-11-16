import React, { useState } from 'react';
import {
  ExternalLink,
  X,
  MessageCircle,
  Monitor,
  Smartphone,
  RotateCw,
  FileText,
  Globe,
} from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  createWhatsAppLink,
} from '../data/siteData';

/**
 * Komponen Preview Antarmuka Sistem Riil pada Kartu Portofolio
 * Menggunakan 100% tipografi Plus Jakarta Sans yang konsisten (tanpa font-mono kaku).
 */
function SystemUiPreview({ project }) {
  if (project.customImage) {
    return (
      <img
        src={project.customImage}
        alt={project.title}
        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
      />
    );
  }

  switch (project.id) {
    case 'spmb-mjic':
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between text-white select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                Portal Admisi &amp; Seleksi
              </span>
              <span className="text-xs font-bold text-white">SPMB Madrasah JIC</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold">
              Fuzzy Match Aktif
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
              <span className="text-[9px] text-slate-400 block">Unit PAUDQu</span>
              <span className="text-xs font-extrabold text-white">Aktif</span>
              <span className="text-[9px] text-teal-400 font-medium block mt-0.5">Santri &amp; DU</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
              <span className="text-[9px] text-slate-400 block">Unit TPQ</span>
              <span className="text-xs font-extrabold text-white">Aktif</span>
              <span className="text-[9px] text-blue-400 font-medium block mt-0.5">Real-Time</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
              <span className="text-[9px] text-slate-400 block">Unit MDT</span>
              <span className="text-xs font-extrabold text-white">Aktif</span>
              <span className="text-[9px] text-teal-400 font-medium block mt-0.5">Auto Kwitansi</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between text-[11px]">
            <span className="text-slate-300 font-medium">Sinkronisasi API ke SIKMA</span>
            <span className="text-teal-400 font-bold">Terhubung</span>
          </div>
        </div>
      );

    case 'sikma-mjic':
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between text-white select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                Manajemen Keuangan Multi-Lembaga
              </span>
              <span className="text-xs font-bold text-white">SIKMA — 4 Unit Lembaga</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-semibold">
              Auto-Billing SPP
            </span>
          </div>

          <div className="space-y-1.5 my-2">
            <div className="flex items-center justify-between bg-slate-800/90 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-[11px]">
              <span className="text-slate-300 font-medium">Tagihan SPP &amp; Tunggakan</span>
              <span className="text-teal-400 font-bold">Terintegrasi</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/90 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-[11px]">
              <span className="text-slate-300 font-medium">Tabungan Massal &amp; Infak</span>
              <span className="text-blue-400 font-bold">Accordion UI</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/90 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-[11px]">
              <span className="text-slate-300 font-medium">Kwitansi TTD Kasir &amp; Rollover</span>
              <span className="text-emerald-400 font-bold">Otomatis</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-800">
            <span>Sequelize + MySQL2</span>
            <span className="text-white font-semibold">sikma.mjic.sch.id</span>
          </div>
        </div>
      );

    case 'sigap-mjic':
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between text-white select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                Portal Akademik &amp; Guru
              </span>
              <span className="text-xs font-bold text-white">SIGAP MJIC (React 19 SPA)</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-semibold">
              TypeScript
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2.5">
              <span className="text-[9px] text-slate-400 uppercase font-semibold block">
                Presensi &amp; Nilai
              </span>
              <span className="text-xs font-bold text-white mt-0.5 block">
                Filter Kelas &amp; Unit
              </span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2.5">
              <span className="text-[9px] text-slate-400 uppercase font-semibold block">
                Output Akademik
              </span>
              <span className="text-xs font-bold text-teal-400 mt-0.5 block">
                Cetak Rapor PDF
              </span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between text-[11px]">
            <span className="text-slate-300 font-medium">Tarik Data Santri Baru SPMB</span>
            <span className="text-blue-400 font-bold">One-Click Sync</span>
          </div>
        </div>
      );

    case 'kkn-vidya-vardhana':
      return (
        <div className="w-full h-full bg-[#FEFCE8] p-4 flex flex-col justify-between text-[#0F172A] select-none border-b border-slate-200">
          <div className="flex items-center justify-between border-b-2 border-[#0F172A] pb-2">
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#2563EB] block">
                Portal Publikasi &amp; Riset Desa
              </span>
              <span className="text-xs font-extrabold text-[#0F172A]">
                KKN 07 Vidya Vardhana UNUSIA
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#0F172A] text-white text-[9px] font-bold">
              Google Scholar
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-white border-2 border-[#0F172A] rounded-md p-2 shadow-[2px_2px_0px_#0F172A]">
              <span className="text-[9px] font-bold text-slate-500 block">MODUL UMKM DESA</span>
              <span className="text-[11px] font-extrabold text-[#0F172A]">
                Fullscreen Viewer
              </span>
            </div>
            <div className="bg-white border-2 border-[#0F172A] rounded-md p-2 shadow-[2px_2px_0px_#0F172A]">
              <span className="text-[9px] font-bold text-slate-500 block">OPTIMASI MEDIA</span>
              <span className="text-[11px] font-extrabold text-[#0D9488]">
                Auto .HEIC ke .JPG
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-[#0F172A]">
            <span>Desa Ciasihan</span>
            <span>vidyavardhana.my.id</span>
          </div>
        </div>
      );

    case 'web-madrasah-jic':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 flex flex-col justify-between text-white select-none">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                Portal Profil Institusi
              </span>
              <span className="text-xs font-bold text-white">
                Lembaga Pendidikan Madrasah JIC
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white text-[10px] font-semibold">
              WordPress CMS
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="rounded-lg bg-slate-800/90 border border-teal-500/30 p-2 text-center">
              <span className="text-[10px] font-bold text-teal-300 block">PAUDQu</span>
              <span className="text-[9px] text-slate-400">Al-Qur&apos;an</span>
            </div>
            <div className="rounded-lg bg-slate-800/90 border border-teal-500/30 p-2 text-center">
              <span className="text-[10px] font-bold text-teal-300 block">TPQ</span>
              <span className="text-[9px] text-slate-400">Tahsin &amp; Tajwid</span>
            </div>
            <div className="rounded-lg bg-slate-800/90 border border-teal-500/30 p-2 text-center">
              <span className="text-[10px] font-bold text-teal-300 block">MDT</span>
              <span className="text-[9px] text-slate-400">Diniyah Takmiliyah</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-medium text-slate-300">
            <span>lembagapendidikan.islamic-center.or.id</span>
            <span className="text-teal-400 font-bold">Portal Aktif</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between text-white select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                Konsultasi IT &amp; Web Inisial
              </span>
              <span className="text-xs font-bold text-white">LAZIS DMI DKI Jakarta</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-semibold">
              Consultant &amp; Intern Web
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2.5">
              <span className="text-[9px] text-slate-400 uppercase font-semibold block">
                Peran Utama
              </span>
              <span className="text-xs font-bold text-white mt-0.5 block">
                IT Consultant &amp; Liaison
              </span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2.5">
              <span className="text-[9px] text-slate-400 uppercase font-semibold block">
                Web Fase Magang
              </span>
              <span className="text-xs font-bold text-teal-400 mt-0.5 block">
                Deployed on Vercel
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
            <span>lazisdmidkijakarta.vercel.app</span>
            <span className="text-white font-semibold">DMI DKI Jakarta</span>
          </div>
        </div>
      );
  }
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('live');
  const [viewportMode, setViewportMode] = useState('desktop');
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const openProjectModal = (project, initialTab = 'live') => {
    setSelectedProject(project);
    setModalTab(project.isLiveProduction ? initialTab : 'detail');
    setViewportMode('desktop');
    setIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const filteredProjects =
    activeCategory === 'Semua'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Editorial Korporat Bersih */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border-l-2 border-[#2563EB] pl-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB]">
                Portofolio Sistem &amp; Produk Digital
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Karya &amp; Sistem yang Telah Kami Bangun
            </h2>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
              Dipercaya berbagai sektor untuk menghadirkan solusi web yang fungsional dan mudah
              dikelola. Klik <strong>Lihat Live Demo</strong> untuk mencoba langsung pratinjau
              website di halaman ini.
            </p>
          </div>

          {/* Segmented Control Filter Kategori */}
          <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 self-start lg:self-auto">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid 3 Kolom Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-[#2563EB] transition-all duration-200 flex flex-col overflow-hidden shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
            >
              {/* Top Domain & Status Bar (Tipografi Sans Modern, Tidak Kaku) */}
              <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-700 truncate">
                  {project.domainDisplay}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-[#0D9488] border border-[#0D9488]/20 shrink-0">
                  {project.statusBadge}
                </span>
              </div>

              {/* Preview Sistem Riil (Klik membuka Live Preview Popup) */}
              <div
                onClick={() => openProjectModal(project, 'live')}
                className="relative h-48 w-full cursor-pointer overflow-hidden border-b border-slate-200"
              >
                <SystemUiPreview project={project} />
              </div>

              {/* Konten Kartu Proyek */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3
                    onClick={() => openProjectModal(project, 'detail')}
                    className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500">
                    {project.client}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-100">
                  {/* Teknologi yang Digunakan (Tipografi Plus Jakarta Sans Halus) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-slate-200/90 text-[11px] font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi: Keduanya membuka Pop-up di halaman yang sama */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => openProjectModal(project, 'detail')}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-[#0F172A] border border-slate-200 text-xs font-bold transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>Detail Proyek</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openProjectModal(project, 'live')}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Lihat Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Pop-up Interaktif (Live Web Iframe Preview & Detail Sistem di Halaman yang Sama) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-[#0F172A]/80 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh] flex flex-col bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Modal: Navigasi Tab Live Preview vs Detail + Kontrol Layar */}
            <div className="bg-[#0F172A] text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
              {/* Kiri: Judul & URL */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0D9488] text-white text-[10px] font-bold uppercase shrink-0">
                  {selectedProject.statusBadge}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 truncate">
                    {selectedProject.demoUrl}
                  </p>
                </div>
              </div>

              {/* Tengah: Switcher Tab "Live Web Preview" vs "Spesifikasi Sistem" */}
              <div className="flex items-center gap-1.5 bg-slate-800/90 p-1 rounded-lg border border-slate-700">
                {selectedProject.isLiveProduction && (
                  <button
                    type="button"
                    onClick={() => setModalTab('live')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                      modalTab === 'live'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Preview Web</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setModalTab('detail')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                    modalTab === 'detail'
                      ? 'bg-[#2563EB] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Spesifikasi &amp; Fitur</span>
                </button>
              </div>

              {/* Kanan: Kontrol Viewport (Desktop/Mobile), Reload, & Tutup */}
              <div className="flex items-center gap-2">
                {modalTab === 'live' && selectedProject.isLiveProduction && (
                  <>
                    <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                      <button
                        type="button"
                        onClick={() => setViewportMode('desktop')}
                        title="Tampilan Desktop"
                        className={`p-1.5 rounded-md transition-colors ${
                          viewportMode === 'desktop'
                            ? 'bg-slate-700 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Monitor className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewportMode('mobile')}
                        title="Tampilan Smartphone"
                        className={`p-1.5 rounded-md transition-colors ${
                          viewportMode === 'mobile'
                            ? 'bg-slate-700 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Smartphone className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIframeLoading(true);
                        setIframeKey((prev) => prev + 1);
                      }}
                      title="Muat Ulang Preview"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
                  aria-label="Tutup Preview"
                >
                  <span>Tutup</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body Modal: Iframe Live Website atau Rincian Spesifikasi */}
            {modalTab === 'live' && selectedProject.isLiveProduction ? (
              <div className="relative flex-1 bg-slate-100 flex flex-col items-center justify-center overflow-hidden">
                {/* Indikator Loading saat Iframe sedang memuat web produksi */}
                {iframeLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/90 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-full border-3 border-slate-300 border-t-[#2563EB] animate-spin mb-3" />
                    <p className="text-xs font-bold text-[#0F172A]">
                      Memuat Live Preview {selectedProject.domainDisplay}...
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Menampilkan website produksi secara langsung di dalam jendela pop-up ini
                    </p>
                  </div>
                )}

                {/* Container Viewport (Full Desktop atau Simulasi Layar HP 390px) */}
                <div
                  className={`h-full transition-all duration-300 bg-white shadow-inner ${
                    viewportMode === 'mobile'
                      ? 'w-[390px] max-w-full my-3 rounded-2xl border-4 border-[#0F172A] shadow-2xl overflow-hidden'
                      : 'w-full'
                  }`}
                >
                  <iframe
                    key={`${selectedProject.id}-${iframeKey}`}
                    src={selectedProject.demoUrl}
                    title={`Live Preview ${selectedProject.title}`}
                    className="w-full h-full border-0 bg-white"
                    onLoad={() => setIframeLoading(false)}
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-white">
                {/* Baris Informasi Klien & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase block">
                      Institusi / Klien
                    </span>
                    <span className="text-[#0F172A] font-bold mt-0.5 block text-sm">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase block">
                      Status Implementasi
                    </span>
                    <span className="text-[#0D9488] font-bold mt-0.5 block text-sm">
                      {selectedProject.metrics}
                    </span>
                  </div>
                </div>

                {/* Deskripsi Lengkap */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Ringkasan Arsitektur &amp; Solusi
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Fitur Utama */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Modul &amp; Fitur Utama
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm font-semibold text-[#0F172A] flex items-start gap-2.5"
                      >
                        <span className="text-[#2563EB] font-extrabold">
                          0{index + 1}.
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Teknologi */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Stack Teknologi
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-slate-100 text-[#0F172A] text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Footer Bar Modal: Opsi Konsultasi & Tautan */}
            <div className="bg-[#F8FAFC] px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="font-medium">
                  Domain: <strong className="text-[#0F172A]">{selectedProject.domainDisplay}</strong>
                </span>
                {selectedProject.isLiveProduction && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2563EB] hover:underline font-semibold"
                  >
                    <span>Buka di Tab Penuh</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={createWhatsAppLink(
                    `Halo Mas Hamzah / Haza Digital, saya baru saja melihat Live Preview "${selectedProject.title}" (${selectedProject.domainDisplay}) dan tertarik berdiskusi untuk kebutuhan lembaga/usaha kami.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Konsultasikan Sistem Serupa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
