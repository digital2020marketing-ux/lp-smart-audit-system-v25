import React from 'react';
import { HelpCircle, CheckCircle2, ShieldCheck, FileCheck, Laptop, Zap, Award, Sparkles } from 'lucide-react';

export const ObjectionHandling: React.FC = () => {
  const objections = [
    {
      q: '“Saya masih auditor pemula, apakah sistem ini bisa saya ikuti?”',
      a: 'Sangat bisa. Sistem ini dirancang memberikan starting point pertanyaan dan alur langkah demi langkah yang jelas, sehingga Anda tidak lagi bingung saat pertama kali ditunjuk menjadi auditor internal.',
      icon: Sparkles
    },
    {
      q: '“Saya belum hafal seluruh klausul ISO 9001, bagaimana?”',
      a: 'Anda tidak perlu menghafal seluruh kalimat klausul. AI Checklist dan modul kami telah memetakan klausul 4 sampai 10 menjadi poin-poin pertanyaan praktis dan panduan bukti objektif yang relevan per departemen.',
      icon: FileCheck
    },
    {
      q: '“Apakah AI yang menentukan hasil dan keputusan audit?”',
      a: 'Tidak. AI adalah alat bantu (co-pilot) untuk merancang draf kalimat dan mengeksplorasi ide. Tanggung jawab verifikasi bukti objektif di lapangan serta penetapan keputusan audit final tetap sepenuhnya pada Anda.',
      icon: ShieldCheck
    },
    {
      q: '“Apakah output dari AI tetap harus dicek kembali?”',
      a: 'Ya, tentu. Sebagai auditor profesional, Anda mereview draf hasil AI dan menyesuaikannya dengan fakta konkret lapangan. AI memangkas waktu merangkai kata dari nol sehingga Anda bisa fokus pada substansi.',
      icon: CheckCircle2
    },
    {
      q: '“Apakah format worksheet Word & Excel bisa diedit bebas?”',
      a: 'Ya, 100% editable. Seluruh 7 worksheet (program audit, audit plan, checklist, formulir PTKP/CAPA, laporan) disediakan dalam format Microsoft Word dan Excel tanpa proteksi password.',
      icon: FileCheck
    },
    {
      q: '“Harus install aplikasi atau software khusus?”',
      a: 'Tidak perlu instalasi apapun. Dashboard berbasis web digital yang dapat diakses langsung melalui browser di laptop kantor, PC, tablet, maupun smartphone Anda.',
      icon: Laptop
    },
    {
      q: '“Apakah ada biaya langganan bulanan atau tahunan?”',
      a: 'Tidak ada biaya bulanan. Pembayaran promo Rp497.000 adalah SEKALI BAYAR UNTUK AKSES SEUMUR HIDUP. Tidak ada tagihan tersembunyi.',
      icon: Zap
    },
    {
      q: '“Apakah ini sertifikasi kualifikasi auditor resmi?”',
      a: 'Bukan. SMART Audit SYSTEM adalah toolkit panduan kerja terpadu (modul pembelajaran + 7 worksheet + AI asisten) untuk mendukung operasional audit internal Anda, bukan sertifikat kualifikasi auditor personil.',
      icon: Award
    }
  ];

  return (
    <section id="keraguan" className="py-14 sm:py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>JAWABAN TERBUKA & TRANSPARAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            “Tapi Saya Masih Ragu…”
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
            Berikut jawaban langsung dan terbuka untuk pertanyaan umum yang sering ditanyakan calon pengguna:
          </p>
        </div>

        {/* 8 Objections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {objections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {item.q}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pl-11">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
