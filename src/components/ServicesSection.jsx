import React from 'react';
import {
  Building2,
  Database,
  ShoppingBag,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_LIST, createWhatsAppLink } from '../data/siteData';

const ICON_MAP = {
  Building2: Building2,
  Database: Database,
  ShoppingBag: ShoppingBag,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section
      id="layanan"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Struktur Editorial Korporat */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 border-l-2 border-[#0D9488] pl-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0D9488]">
              Layanan Utama &amp; Solusi Digital
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Solusi Digital yang Dirancang Sesuai Kebutuhan Operasional
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Setiap organisasi memiliki alur kerja yang unik. Kami menghadirkan empat pilar layanan
            utama yang menggabungkan rekayasa perangkat lunak, desain visual, dan keandalan
            infrastruktur.
          </p>
        </div>

        {/* Matriks 2x2 Editorial (Tanpa Kotak Gradien / Daftar Centang Monoton) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200 bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
          {SERVICES_LIST.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Building2;
            return (
              <div
                key={service.id}
                className="p-7 sm:p-9 border-r border-b border-slate-200 flex flex-col justify-between hover:bg-slate-50/50 transition-colors"
              >
                <div>
                  {/* Baris Atas: Nomor Indeks & Kategori */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#0F172A] text-white">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                        {service.badge}
                      </span>
                    </div>
                    <IconComponent className="w-5 h-5 text-[#2563EB]" />
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Cakupan Teknis (Berbentuk Baris Spesifikasi dengan Aksen Garis Kiri) */}
                  <div className="space-y-2.5 border-t border-slate-200/80 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Cakupan Implementasi:
                    </p>
                    <div className="space-y-2">
                      {service.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="pl-3 border-l-2 border-slate-300 hover:border-[#2563EB] text-xs sm:text-sm text-slate-700 font-medium transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tautan Diskusi Layanan */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Disesuaikan skala lembaga / bisnis
                  </span>
                  <a
                    href={createWhatsAppLink(
                      `Halo Mas Hamzah / Haza Digital, saya ingin berkonsultasi mengenai layanan "${service.title}".`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#0F172A] transition-colors"
                  >
                    <span>Konsultasikan Layanan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
