import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/siteData';

const MENU_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio Web', href: '#portofolio' },
  { label: 'Alur Kerja', href: '#alur-kerja' },
  { label: 'Paket Harga', href: '#paket-harga' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
          : 'bg-white border-b border-slate-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand dengan Ikon Geometris Tegas */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Haza Digital Beranda"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0F172A] text-white group-hover:bg-[#2563EB] transition-colors duration-200">
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
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#0F172A] leading-none">
                HAZA <span className="text-[#2563EB]">DIGITAL</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-[0.14em] uppercase mt-1">
                Web &amp; System Engineering
              </span>
            </div>
          </a>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Tombol CTA Kanan (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-semibold transition-colors duration-150"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 focus:outline-none"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Navigasi Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-1">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-semibold"
            >
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
