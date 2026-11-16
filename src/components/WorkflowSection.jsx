import React from 'react';
import {
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { WORKFLOW_STEPS, FOUNDER_PROFILE } from '../data/siteData';

export default function WorkflowSection() {
  return (
    <section id="alur-kerja" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section — Lugas & Korporat */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 border-l-2 border-[#2563EB] pl-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB]">
              Tahapan Kerja Sama &amp; Kredibilitas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Alur Pengerjaan Transparan dari Analisis hingga Produksi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Setiap proyek dikerjakan melalui empat tahapan terukur agar sistem berjalan stabil,
            tepat waktu, dan mudah dioperasikan oleh tim Anda.
          </p>
        </div>

        {/* 4 Langkah Kerja Sama — Horizontal Architectural Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Langkah */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <span className="text-xs font-extrabold tracking-wider text-[#2563EB]">
                    TAHAP {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {step.duration.replace(/^Tahap \d+ • /, '')}
                  </span>
                </div>

                {/* Judul & Penjelasan */}
                <h3 className="text-base font-extrabold text-[#0F172A] mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverable */}
              <div className="pt-3.5 border-t border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Hasil Tahap Ini
                </span>
                <span className="text-xs font-bold text-[#0D9488] mt-0.5 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dossier Kredibilitas Praktisi (Berdasarkan Profil LinkedIn Hamzah Huzaifah) */}
        <div className="mt-16 rounded-xl border border-slate-200 overflow-hidden bg-white">
          <div className="bg-[#0F172A] text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-400">
                REKAM JEJAK PRAKTISI • LINKEDIN VERIFIED
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {FOUNDER_PROFILE.name} — {FOUNDER_PROFILE.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {FOUNDER_PROFILE.summary}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={FOUNDER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Profil LinkedIn Resmi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Tabel Grid Pengalaman Institusi Nyata */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-[#F8FAFC]">
            {FOUNDER_PROFILE.highlights.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0D9488] block mb-1.5">
                    {item.period}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#0F172A] leading-snug">
                    {item.role}
                  </h4>
                  <p className="text-xs font-bold text-[#2563EB] mt-0.5 mb-3">{item.org}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
