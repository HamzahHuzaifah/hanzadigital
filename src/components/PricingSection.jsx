import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRICING_PACKAGES, createWhatsAppLink } from '../data/siteData';

export default function PricingSection() {
  return (
    <section
      id="paket-harga"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Korporat Lugas */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 border-l-2 border-[#0D9488] pl-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0D9488]">
              Estimasi Investasi &amp; Paket Layanan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skema Paket Transparan Sesuai Skala Kebutuhan
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Pilih paket pembuatan website profil, katalog UMKM, maupun pengembangan sistem
            informasi custom yang paling sesuai dengan kebutuhan lembaga atau usaha Anda.
          </p>
        </div>

        {/* Grid 3 Kartu Paket Harga */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl flex flex-col justify-between p-7 sm:p-8 transition-all duration-200 ${
                pkg.isPopular
                  ? 'bg-[#0F172A] text-white border-2 border-[#0F172A] shadow-xl'
                  : 'bg-white text-[#0F172A] border border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Baris Kategori Paket */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/20">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      pkg.isPopular ? 'text-teal-400' : 'text-[#0D9488]'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  {pkg.isPopular && (
                    <span className="px-2.5 py-0.5 rounded bg-[#0D9488] text-white text-[10px] font-bold uppercase">
                      Rekomendasi
                    </span>
                  )}
                </div>

                {/* Nama & Subjudul */}
                <h3
                  className={`text-xl font-extrabold ${
                    pkg.isPopular ? 'text-white' : 'text-[#0F172A]'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mt-2 min-h-[40px] ${
                    pkg.isPopular ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {pkg.subtitle}
                </p>

                {/* Harga */}
                <div
                  className={`my-6 p-4 rounded-lg border ${
                    pkg.isPopular
                      ? 'bg-slate-800/80 border-slate-700'
                      : 'bg-[#F8FAFC] border-slate-200'
                  }`}
                >
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      pkg.isPopular ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Estimasi Biaya
                  </p>
                  <p
                    className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                      pkg.isPopular ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {pkg.priceLabel}
                  </p>
                  <p
                    className={`text-xs font-medium mt-1 ${
                      pkg.isPopular ? 'text-teal-400' : 'text-[#0D9488]'
                    }`}
                  >
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Daftar Spesifikasi Fitur */}
                <div className="space-y-2.5 mb-8">
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      pkg.isPopular ? 'text-slate-400' : 'text-slate-400'
                    }`}
                  >
                    Spesifikasi &amp; Fasilitas:
                  </p>
                  <ul className="space-y-2.5 pt-1">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          pkg.isPopular ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                            pkg.isPopular ? 'bg-teal-400' : 'bg-[#2563EB]'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tombol Pesan Paket Ini */}
              <div
                className={`pt-5 border-t ${
                  pkg.isPopular ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <a
                  href={createWhatsAppLink(
                    `Halo Mas Hamzah / Haza Digital, saya tertarik untuk memesan *${pkg.name}* (${pkg.priceLabel}). Mohon informasi rincian dan langkah selanjutnya.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-bold transition-colors ${
                    pkg.isPopular
                      ? 'bg-[#0D9488] hover:bg-[#0F766E] text-white'
                      : 'bg-[#2563EB] hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>Pesan Paket Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Baris Pengadaan / RAB Resmi */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#0F172A]">
              Butuh Dokumen Penawaran Resmi (RAB / Proposal Teknis) untuk Instansi atau Yayasan?
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              Kami siap menyusun dokumen spesifikasi sistem dan rincian anggaran sesuai format
              pengadaan lembaga Anda.
            </p>
          </div>
          <a
            href={createWhatsAppLink(
              'Halo Mas Hamzah / Haza Digital, kami membutuhkan penawaran resmi / RAB pembuatan website atau sistem untuk instansi kami.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-[#2563EB] border border-slate-200 text-xs font-bold shrink-0"
          >
            <span>Minta Dokumen Penawaran</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
