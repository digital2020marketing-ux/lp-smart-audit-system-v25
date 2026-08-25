import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Zap, Globe, ShoppingBag, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';
import imgDashboard from '../assets/images/gambar-dashbord-SAS.jpg';

interface HeroProps {
  onCheckoutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleHeroBuyClick = () => {
    trackCheckoutClick('hero_buy', 'Hero - Ambil SMART Audit System Rp497.000');
  };

  const handleHeroAskClick = () => {
    trackWhatsAppClick('hero_ask', 'Hero - Tanya Tim via WA');
  };

  return (
    <header className="relative pt-20 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 hero-pattern border-b border-gray-200/70 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-blue-100/40 rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-xs text-left">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>AI-Assisted Workflow untuk Auditor Internal ISO 9001 & ISO 19011</span>
        </div>

        {/* 1. Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 sm:mb-5 leading-tight">
          Audit Sudah Dekat, Tapi Checklist & Pertanyaan Belum Siap?
        </h1>

        {/* 2. Subheadline */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4 font-bold leading-relaxed max-w-3xl mx-auto">
          SMART Audit SYSTEM membantu Anda menyiapkan <span className="text-blue-950 underline decoration-blue-400 decoration-2">starting point pertanyaan audit, formulasi temuan PLOR, analisis CAPA hingga administrasi audit</span> dalam satu workflow terintegrasi — sehingga Anda tidak perlu memulai semuanya dari file kosong.
        </p>

        {/* 3. Explanatory sentence */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 font-normal leading-relaxed max-w-2xl mx-auto">
          Fokuskan waktu Anda pada observasi, wawancara, bukti objektif, dan analisis mutu — bukan berjam-jam membuat format dan merangkai dokumen dari nol.
        </p>

        {/* 4. 3 Benefit Utama */}
        <div className="bg-white/95 backdrop-blur-xs border border-gray-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs max-w-2xl mx-auto text-left">
          <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-800 font-semibold">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>AI membantu menyusun starting point pertanyaan audit 5W+1H</strong> dan rekomendasi bukti objektif yang perlu diverifikasi.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>AI membantu merapikan catatan lapangan</strong> menjadi struktur temuan PLOR (Problem, Location, Objective Evidence, Requirement).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>AI membantu mengeksplorasi root cause 5-Why dan CAPA</strong> terstruktur beserta 7 worksheet Word & Excel editable.</span>
            </li>
          </ul>
        </div>

        {/* 5. Direct CTA Section */}
        <div className="space-y-3 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {/* Primary CTA */}
            <a
              id="hero-buy-cta"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeroBuyClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
            </a>
          </div>

          {/* High-Impact Guarantee Banner in Hero */}
          <div className="mt-3.5 max-w-md mx-auto p-2.5 sm:p-3 bg-emerald-50 border border-emerald-300/80 rounded-xl flex items-center justify-center gap-2 text-left shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-[11.5px] sm:text-xs font-bold text-emerald-950 leading-tight">
              <span className="text-emerald-700 font-extrabold uppercase">Jaminan Kepuasan:</span> Garansi uang kembali jika produk SMART Audit SYSTEM ini tidak bermanfaat bagi aktifitas audit anda.
            </p>
          </div>

          {/* Microcopy */}
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-600 font-medium">
            <span className="font-semibold text-emerald-700">✓ Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href={getWhatsAppUrl('hero_ask')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeroAskClick}
              className="text-blue-900 hover:text-blue-950 font-bold underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Tanya Tim via WhatsApp
            </a>
          </div>
        </div>

        {/* Real Product Dashboard Screenshot UI */}
        <div className="mb-8 relative max-w-3xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300 shadow-2xl overflow-hidden">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900 border-b border-slate-800 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-tight truncate max-w-[200px] sm:max-w-none">
                  app.smartauditsystem.com/dashboard
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                  LIVE WORKFLOW
                </span>
              </div>

              {/* Dashboard image display */}
              <div className="relative group bg-slate-950">
                <a 
                  href="https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <img 
                    src={imgDashboard} 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg";
                    }}
                    alt="Antarmuka Dashboard SMART Audit SYSTEM" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.005] transition-transform duration-200"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-2.5 font-medium">
            Tampilan antarmuka nyata Dashboard SMART Audit SYSTEM — rapi, terintegrasi, dan siap langsung digunakan.
          </p>
        </div>

        {/* Micro Trust Points */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-gray-500 font-semibold mt-4 pt-4 border-t border-gray-200/60 max-w-lg mx-auto">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            Akses Digital Instan
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            Tanpa Biaya Bulanan
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            Tanpa Perlu Instalasi
          </span>
        </div>

      </div>
    </header>
  );
};
