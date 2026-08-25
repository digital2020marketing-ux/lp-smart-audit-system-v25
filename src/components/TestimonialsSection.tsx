import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import imgTesti1 from '../assets/images/testi1.png';
import imgTesti2 from '../assets/images/testi2.png';
import imgTesti3 from '../assets/images/testi3.png';
import imgTesti4 from '../assets/images/testi4.png';
import imgTesti5 from '../assets/images/testi5.png';
import imgTesti6 from '../assets/images/testi6.png';

interface TestimonialsSectionProps {
  onCheckoutClick?: () => void;
}

const TESTIMONIALS_DATA = [
  {
    id: 1,
    title: 'Testimoni 1',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi1.png',
    localFallback: imgTesti1,
  },
  {
    id: 2,
    title: 'Testimoni 2',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi2.png',
    localFallback: imgTesti2,
  },
  {
    id: 3,
    title: 'Testimoni 3',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi3.png',
    localFallback: imgTesti3,
  },
  {
    id: 4,
    title: 'Testimoni 4',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi4.png',
    localFallback: imgTesti4,
  },
  {
    id: 5,
    title: 'Testimoni 5',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi5.png',
    localFallback: imgTesti5,
  },
  {
    id: 6,
    title: 'Testimoni 6',
    remoteUrl: 'https://smartbook.id/kumpulan-gambar/testi6.png',
    localFallback: imgTesti6,
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleCtaClick = () => {
    trackCheckoutClick('social_proof_buy', 'Social Proof - Beli SMART Audit System Rp497.000');
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % TESTIMONIALS_DATA.length);
    }
  };

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-slate-100/90 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>PENGALAMAN NYATA PENGGUNA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Tanggapan Nyata dari Pengguna
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Berikut tangkapan layar percakapan asli dari rekan-rekan yang telah menggunakan SMART Audit SYSTEM.
          </p>
        </div>

        {/* Natural Screenshots Gallery: Testimoni 1-4 in 2 Columns, Testimoni 5 & 6 in 1 Column (Large) */}
        <div className="space-y-6 mb-10">
          {/* Testimoni 1 s/d 4 (2 Kolom) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {TESTIMONIALS_DATA.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(index)}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer hover:-translate-y-1 flex items-center justify-center p-2.5 sm:p-3.5"
              >
                <img
                  src={item.remoteUrl}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== item.localFallback) {
                      target.src = item.localFallback;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-xl block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Testimoni 5 & 6 (1 Kolom - Terlihat Besar & Jelas) */}
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {TESTIMONIALS_DATA.slice(4, 6).map((item, index) => {
              const realIndex = index + 4;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIdx(realIndex)}
                  className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer hover:-translate-y-1 flex items-center justify-center p-3 sm:p-5"
                >
                  <img
                    src={item.remoteUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== item.localFallback) {
                        target.src = item.localFallback;
                      }
                    }}
                    referrerPolicy="no-referrer"
                    alt={item.title}
                    className="w-full h-auto object-contain rounded-xl block shadow-xs"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA #3: After Social Proof */}
        <div className="mt-8 text-center max-w-md mx-auto">
          <a
            id="social-proof-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
          </a>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>
        </div>

      </div>

      {/* Lightbox Modal for Full Resolution Viewing */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold text-slate-200">
                {TESTIMONIALS_DATA[selectedIdx].title}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: High-Res Image */}
            <div className="flex-1 overflow-auto p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
              <img
                src={TESTIMONIALS_DATA[selectedIdx].remoteUrl}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== TESTIMONIALS_DATA[selectedIdx].localFallback) {
                    target.src = TESTIMONIALS_DATA[selectedIdx].localFallback;
                  }
                }}
                referrerPolicy="no-referrer"
                alt={`Testimoni ${selectedIdx + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer with Controls */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-white text-xs">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-slate-400 font-mono">
                {selectedIdx + 1} / {TESTIMONIALS_DATA.length}
              </span>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

