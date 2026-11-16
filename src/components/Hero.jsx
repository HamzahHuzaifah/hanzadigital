import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  ShieldCheck,
  Headphones,
  ExternalLink,
} from 'lucide-react';
import { createWhatsAppLink } from '../data/siteData';

const PRODUCTION_SYSTEMS = [
  {
    code: 'SPMB',
    domain: 'spmb.mjic.sch.id',
    url: 'https://spmb.mjic.sch.id',
    role: 'Penerimaan Murid Baru & Skrining Fuzzy Matching',
    stack: 'Express • MySQL2 • EJS',
  },
  {
    code: 'SIKMA',
    domain: 'sikma.mjic.sch.id',
    url: 'https://sikma.mjic.sch.id',
    role: 'Keuangan Multi-Lembaga, Auto-Billing SPP & SSO',
    stack: 'Node.js • Sequelize • MySQL',
  },
  {
    code: 'SIGAP',
    domain: 'sigap.mjic.sch.id',
    url: 'https://sigap.mjic.sch.id',
    role: 'Administrasi Guru, Presensi & Cetak Rapor PDF',
    stack: 'React 19 • TypeScript • API',
  },
  {
    code: 'VIDYA',
    domain: 'vidyavardhana.my.id',
    url: 'https://vidyavardhana.my.id',
    role: 'Portal Publikasi Google Scholar & Modul UMKM',
    stack: 'React • Express • GSC',
  },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-[#F8FAFC] pt-12 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Kolom Kiri: Tipografi Korporat Lugas & CTA */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            {/* Eyebrow Korporat (Tanpa Sparkles / Efek Kedip AI) */}
            <div className="inline-flex items-center gap-3 border-l-2 border-[#0D9488] pl-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0D9488]">
                Agensi Pengembangan Web &amp; Sistem Informasi
              </span>
            </div>

            {/* Headline Utama */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
              Transformasi Digital untuk Bisnis, UMKM, dan Instansi Anda
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Kami merancang dan membangun website profesional, sistem informasi, hingga platform
              pemesanan yang cepat, aman, dan siap meningkatkan kredibilitas lembaga maupun usaha
              Anda.
            </p>

            {/* Dua Tombol CTA Tegas */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-bold transition-colors"
              >
                <span>Lihat Portofolio Kami</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink(
                  'Halo Mas Hamzah / Tim Haza Digital, saya ingin berkonsultasi mengenai pembuatan website / sistem digital.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-bold transition-colors"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Rekam Jejak Fungsional dalam Angka */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-extrabold text-[#0F172A] tracking-tight">4+ Tahun</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Pengalaman Sistem &amp; IT Lembaga
                </p>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <p className="text-2xl font-extrabold text-[#2563EB] tracking-tight">Production</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  SPMB, SIKMA, SIGAP &amp; KKN
                </p>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <p className="text-2xl font-extrabold text-[#0D9488] tracking-tight">End-to-End</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Arsitektur, UI/UX &amp; Deploy cPanel
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Panel Arsitektur Sistem Produksi Riil (Tanpa Progress Bar Kosmetik) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Top Header Bar */}
              <div className="bg-[#0F172A] px-5 py-3.5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Arsitektur Sistem Produksi Aktif
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Ekosistem Web &amp; Sistem Informasi yang Telah Berjalan
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0D9488] text-white text-[11px] font-bold tracking-wide">
                  LIVE SERVER
                </span>
              </div>

              {/* Daftar Sistem Produksi Nyata */}
              <div className="divide-y divide-slate-200/80">
                {PRODUCTION_SYSTEMS.map((sys) => (
                  <div
                    key={sys.code}
                    className="p-4 sm:px-5 hover:bg-slate-50/80 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-extrabold flex items-center justify-center shrink-0">
                        {sys.code}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <a
                            href={sys.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-[#0F172A] hover:text-[#2563EB] truncate inline-flex items-center gap-1"
                          >
                            <span>{sys.domain}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        </div>
                        <p className="text-xs text-slate-600 truncate mt-0.5">{sys.role}</p>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end shrink-0">
                      <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                        {sys.stack}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catatan Integrasi Sistem */}
              <div className="bg-[#F8FAFC] px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">
                  Terintegrasi via REST API, Single Sign-On (SSO) &amp; cPanel Reverse Proxy
                </span>
                <a
                  href="#portofolio"
                  className="font-bold text-[#2563EB] hover:underline shrink-0 ml-2"
                >
                  Detail Teknis &rarr;
                </a>
              </div>
            </div>

            {/* 3 Kartu Statistik Singkat (Sesuai Spesifikasi Hero Section, Desain Editorial Bersih) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <Smartphone className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">100% Responsif Mobile</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Optimal di HP &amp; Desktop</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">Gratis Domain &amp; SSL</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Keamanan HTTPS Resmi</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <Headphones className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">Dukungan Teknis Penuh</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Dokumentasi &amp; Garansi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
