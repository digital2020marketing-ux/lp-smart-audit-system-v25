import React from 'react';
import { Zap, HelpCircle, FileText, CheckCircle2, LayoutTemplate, Sparkles } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
      title: 'Persiapan audit lebih cepat',
      desc: 'Tidak perlu memulai checklist dari halaman kosong. Anda langsung memiliki kerangka kerja siap pakai per klausul dan per divisi.'
    },
    {
      icon: HelpCircle,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      title: 'Pertanyaan audit lebih terarah',
      desc: 'Gunakan AI Checklist sebagai starting point berdasarkan klausul dan proses yang ingin diperiksa agar wawancara mengalir tajam dan objektif.'
    },
    {
      icon: FileText,
      iconColor: 'text-purple-600 bg-purple-50 border-purple-200',
      title: 'Menulis temuan lebih terstruktur',
      desc: 'Gunakan pendekatan PLOR (Problem, Location, Objective Evidence, Requirement) untuk membantu merumuskan temuan berdasarkan bukti nyata tanpa memicu perdebatan.'
    },
    {
      icon: CheckCircle2,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      title: 'Follow-up CAPA lebih rapi',
      desc: 'Gunakan worksheet dan AI CAPA untuk membantu mengorganisasi analisis akar masalah (root cause) serta rencana tindakan perbaikan dan pencegahan.'
    },
    {
      icon: LayoutTemplate,
      iconColor: 'text-rose-600 bg-rose-50 border-rose-200',
      title: 'Administrasi audit lebih praktis',
      desc: 'Template dan formulir standar dapat digunakan sebagai dasar kerja sehingga auditor tidak perlu membuat format laporan dan surat dari awal.'
    }
  ];

  return (
    <section id="manfaat" className="py-14 sm:py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Transformasi Alur Kerja Auditor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Yang Akan Menjadi Lebih Mudah Setelah Menggunakan SMART Audit SYSTEM
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Fokuskan energi Anda pada observasi dan analisis mutu, bukan menghabiskan waktu pada urusan format dokumen yang melelahkan.
          </p>
        </div>

        {/* 5 Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            const isFullWidth = idx === benefits.length - 1;
            return (
              <div
                key={idx}
                className={`bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4 ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border ${b.iconColor}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 mb-1">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {b.desc}
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
