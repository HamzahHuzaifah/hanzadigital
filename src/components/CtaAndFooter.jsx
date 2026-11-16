import React from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
} from 'lucide-react';
import { SITE_CONFIG, createWhatsAppLink } from '../data/siteData';

export default function CtaAndFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Section Call to Action (Banner Penutup Navy Tegas — Tanpa Efek Blur/Ping Kosmetik) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0F172A] border border-slate-800 px-6 py-12 sm:px-12 sm:py-14 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 border-l-2 border-[#0D9488] pl-3">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-400">
                    Diskusi &amp; Pemetaan Kebutuhan Sistem
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Siap Membangun Website atau Sistem Informasi untuk Lembaga &amp; Usaha Anda?
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Diskusikan rencana pembuatan website profil, portal pendidikan, aplikasi SPMB,
                  sistem keuangan, maupun katalog produk UMKM Anda secara langsung.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  href={createWhatsAppLink(
                    'Halo Mas Hamzah / Tim Haza Digital, saya ingin berkonsultasi mengenai rencana pembuatan website / sistem digital kami.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-bold transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Hamzah Huzaifah</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Lengkap */}
      <footer className="bg-[#0F172A] text-slate-300 pt-14 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Kolom 1: Profil Singkat Haza Digital */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-[#0F172A]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5H9V10.5H15V5H20V19H15V13.5H9V19H4V5Z"
                      fill="currentColor"
                    />
                    <rect x="15" y="5" width="5" height="3.5" fill="#0D9488" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-extrabold text-white tracking-tight">
                    HAZA <span className="text-blue-400">DIGITAL</span>
                  </span>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-[0.14em] uppercase">
                    Web &amp; System Engineering
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Agensi pengembangan website korporat, sistem informasi institusi (SPMB, SIKMA,
                SIGAP), portal publikasi riset, dan katalog digital UMKM yang dipimpin oleh{' '}
                <strong className="text-slate-200">{SITE_CONFIG.founderName}</strong>.
              </p>
            </div>

            {/* Kolom 2: Navigasi */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                Navigasi
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#beranda" className="text-slate-400 hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-slate-400 hover:text-white transition-colors">
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    href="#portofolio"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Portofolio Web
                  </a>
                </li>
                <li>
                  <a
                    href="#alur-kerja"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Alur Kerja &amp; Profil
                  </a>
                </li>
                <li>
                  <a
                    href="#paket-harga"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Paket Harga
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Sistem Produksi */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                Portofolio Produksi
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="https://spmb.mjic.sch.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    spmb.mjic.sch.id (SPMB JIC)
                  </a>
                </li>
                <li>
                  <a
                    href="https://sikma.mjic.sch.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    sikma.mjic.sch.id (SIKMA Keuangan)
                  </a>
                </li>
                <li>
                  <a
                    href="https://sigap.mjic.sch.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    sigap.mjic.sch.id (SIGAP Akademik)
                  </a>
                </li>
                <li>
                  <a
                    href="https://vidyavardhana.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    vidyavardhana.my.id (KKN UNUSIA)
                  </a>
                </li>
                <li>
                  <a
                    href="https://lembagapendidikan.islamic-center.or.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    lembagapendidikan.islamic-center.or.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 4: Kontak Resmi */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                Kontak Resmi
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span className="font-semibold text-white">{SITE_CONFIG.whatsappDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="font-semibold text-white">{SITE_CONFIG.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-semibold text-white">{SITE_CONFIG.linkedinDisplay}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{SITE_CONFIG.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Baris Hak Cipta Bawah */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {currentYear} <strong className="text-white">Haza Digital</strong> —{' '}
              {SITE_CONFIG.founderName}. Seluruh Hak Cipta Dilindungi.
            </p>
            <p className="text-slate-500">
              Engineering, Sistem Informasi &amp; Solusi Web Terintegrasi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
