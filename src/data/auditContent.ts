import { WorksheetItem, PlorCase, FaqItem } from '../types';

export const WORKSHEETS: WorksheetItem[] = [
  {
    id: 'ws-1',
    category: 'PERSIAPAN',
    name: 'Program Audit Tahunan',
    description: 'Template pemetaan audit internal berkala untuk seluruh divisi dalam 1 tahun kalender.',
    format: 'Word & Excel',
    clauses: ['Klausul 9.2.2 (Audit Programme)']
  },
  {
    id: 'ws-2',
    category: 'PERSIAPAN',
    name: 'Jadwal & Rencana Audit (Audit Plan)',
    description: 'Rincian jadwal per jam, auditor penanggung jawab, auditee, ruang lingkup, dan lokasi audit.',
    format: 'Word & Excel',
    clauses: ['Klausul 9.2.2']
  },
  {
    id: 'ws-3',
    category: 'PERSIAPAN',
    name: 'Surat Pemberitahuan Audit (Audit Notification)',
    description: 'Format surat resmi pemberitahuan pelaksanaan audit mutu internal ke kepala divisi/auditee.',
    format: 'Word (.docx)',
    clauses: ['Tata Kelola Audit']
  },
  {
    id: 'ws-4',
    category: 'PELAKSANAAN',
    name: 'Checklist Audit Mutu Internal',
    description: 'Formulir checklist pertanyaan audit per klausul dan per proses (Purchasing, HRD, Produksi, QA, dll).',
    format: 'Excel & Word',
    clauses: ['Klausul 4 s/d 10']
  },
  {
    id: 'ws-5',
    category: 'PELAKSANAAN',
    name: 'Daftar Hadir Opening & Closing Meeting',
    description: 'Rekaman presensi resmi pembukaan dan penutupan audit sebagai bukti objektif pelaksanaan.',
    format: 'Word & PDF',
    clauses: ['Bukti Audit']
  },
  {
    id: 'ws-6',
    category: 'TEMUAN & PELAPORAN',
    name: 'Formulir PTKP (Permintaan Tindakan Koreksi & Pencegahan)',
    description: 'Lembar kerja standar pencatatan ketidaksesuaian (NC), analisis akar masalah, dan verifikasi CAPA.',
    format: 'Word & Excel',
    clauses: ['Klausul 10.2 (Nonconformity and Corrective Action)']
  },
  {
    id: 'ws-7',
    category: 'TEMUAN & PELAPORAN',
    name: 'Laporan Ringkasan Hasil Audit (Audit Summary Report)',
    description: 'Format komprehensif laporan akhir audit internal untuk diserahkan ke Top Management & Rapat Tinjauan Manajemen (RTM).',
    format: 'Word (.docx)',
    clauses: ['Klausul 9.3 (Management Review)']
  }
];

export const PLOR_EXAMPLES: PlorCase[] = [
  {
    id: 'case-1',
    title: 'Evaluasi Supplier Tahunan Belum Dilakukan',
    department: 'Purchasing / Pengadaan',
    clause: '8.4.1 — Pengendalian Proses, Produk dan Jasa yang Disediakan Eksternal',
    rawFinding: 'Bagian Purchasing tidak dapat menunjukkan rekaman evaluasi supplier tahunan untuk PT ABC.',
    problem: 'Tidak tersedianya bukti rekaman evaluasi kinerja penyedia eksternal secara berkala sesuai prosedur yang telah ditetapkan.',
    location: 'Departemen Purchasing / Procurement (Ruang Arsip Dokumen Pengadaan)',
    objectiveEvidence: 'Daftar Rekanan Terpilih (Vendor List 2025/2026) mencatat transaksi aktif dengan PT ABC, namun formulir Rekaman Evaluasi Kinerja Supplier (Form FM-PUR-04) tahun 2025 tidak dapat ditunjukkan saat proses audit.',
    requirement: 'ISO 9001:2015 Klausul 8.4.1: Organisasi harus menetapkan dan menerapkan kriteria untuk evaluasi, pemilihan, pemantauan kinerja, dan evaluasi ulang penyedia eksternal, serta menyimpan informasi terdokumentasi dari kegiatan ini.',
    capaSuggestion: {
      rootCause: 'PIC Purchasing tidak memiliki jadwal reminder otomatis untuk siklus evaluasi vendor tahunan dan tidak ada PIC pengganti saat PIC utama cuti.',
      correction: 'Segera lakukan evaluasi kinerja khusus untuk PT ABC dan seluruh vendor aktif kuartal ini.',
      correctiveAction: 'Buat kalender pemantauan otomatis berbasis spreadsheet/ERP dan revisi SOP Pengadaan untuk menetapkan batas waktu evaluasi maksimal bulan Desember tiap tahun.',
      preventiveAction: 'Lakukan audit berkala 6 bulan sekali untuk memastikan seluruh vendor aktif telah melalui evaluasi terdokumentasi.'
    }
  },
  {
    id: 'case-2',
    title: 'Alat Ukur Kalibrasi Kedaluwarsa di Jalur Produksi',
    department: 'Produksi / Quality Control',
    clause: '7.1.5.2 — Mampu Telusur Pengukuran (Measurement Traceability)',
    rawFinding: 'Ditemukan jangka sorong (caliper digital) merk Mitutoyo ID QC-CAL-09 di meja inspeksi line 2 stiker kalibrasinya habis per 15 Januari 2026.',
    problem: 'Penggunaan peralatan pemantauan dan pengukuran yang masa kalibrasinya telah melampaui batas waktu validitas.',
    location: 'Area Produksi Line 2 - Meja QC Final Inspection',
    objectiveEvidence: 'Digital Caliper ID QC-CAL-09 yang sedang digunakan untuk inspeksi dimensi produk part #A-402 memiliki label kalibrasi berkode CAL-EXPIRED (valid sampai 15 Jan 2026, tanggal audit 20 Feb 2026).',
    requirement: 'ISO 9001:2015 Klausul 7.1.5.2: Bila ketertelusuran pengukuran dipersyaratkan, peralatan ukur harus dikalibrasi atau diverifikasi pada selang waktu tertentu, serta diidentifikasi status kalibrasinya.',
    capaSuggestion: {
      rootCause: 'Petugas QC harian tidak melakukan pengecekan visual status stiker kalibrasi sebelum mulai shift kerja.',
      correction: 'Karantina alat ukur QC-CAL-09 segera dan kirim ke laboratorium kalibrasi terakreditasi; verifikasi ulang sampel produk yang diukur hari ini.',
      correctiveAction: 'Implementasikan logbook harian verifikasi alat ukur (pre-flight checklist) sebelum operator menyalakan line produksi.',
      preventiveAction: 'Berikan tagging visual warna (merah/kuning/hijau) per kuartal pada seluruh instrumen ukur pabrik.'
    }
  },
  {
    id: 'case-3',
    title: 'Dokumen IK (Instruksi Kerja) Tidak Terkendali / Revisi Lama',
    department: 'Document Control / Gudang',
    clause: '7.5.3 — Pengendalian Informasi Terdokumentasi',
    rawFinding: 'Di gudang bahan baku terpasang IK Penerimaan Barang Rev 01, padahal di Master List sudah Rev 03.',
    problem: 'Penggunaan informasi terdokumentasi yang sudah tidak mutakhir (obsolete document) di area operasional.',
    location: 'Area Loading Dock - Gudang Bahan Baku',
    objectiveEvidence: 'Instruksi Kerja Penerimaan Barang yang tertempel di dinding gudang berkode IK-LOG-02 Rev. 01 (tertanggal 2022), sedangkan Daftar Induk Dokumen menunjukkan versi terkini adalah Rev. 03 (tertanggal 2025).',
    requirement: 'ISO 9001:2015 Klausul 7.5.3.2: Organisasi harus mengendalikan informasi terdokumentasi, memastikan ketersediaan versi yang tepat pada tempat dan waktu yang dibutuhkan, serta mencegah penggunaan dokumen kedaluwarsa.',
    capaSuggestion: {
      rootCause: 'Distribusi dokumen hardcopy tidak ditarik kembali saat terbit revisi baru karena belum ada tanda terima penarikan dokumen lama.',
      correction: 'Tarik segera IK Rev 01 dan pasang IK Rev 03 berstempel DOKUMEN TERKENDALI.',
      correctiveAction: 'Wajibkan form Bukti Penarikan dan Pemusnahan Dokumen Kedaluwarsa (Form DC-OBS-01) untuk setiap perilisan dokumen revisi baru.',
      preventiveAction: 'Lakukan sweep check bulanan oleh Document Controller ke seluruh display dokumen di area kerja.'
    }
  }
];

export const MODULES_LIST = [
  {
    number: '01',
    title: 'Pengantar & Prinsip Audit Mutu Internal (ISO 19011 & ISO 9001)',
    desc: 'Memahami filosofi audit, kode etik auditor, independensi, dan nilai tambah audit bagi organisasi.'
  },
  {
    number: '02',
    title: 'Pemahaman Klausul ISO 9001:2015 & Outlook ISO 9001:2026',
    desc: 'Bedah tuntas klausul 4 hingga 10 dari sudut pandang auditor, serta poin-poin update standar 2026.'
  },
  {
    number: '03',
    title: 'Perencanaan & Penyusunan Program Audit Tahunan',
    desc: 'Menentukan frekuensi audit berbasis risiko proses, alokasi auditor, dan pembuatan jadwal (Audit Plan).'
  },
  {
    number: '04',
    title: 'Teknik Menyusun Checklist & Pertanyaan Audit Efektif',
    desc: 'Membuat pertanyaan terbuka (5W+1H), teknik observasi lapangan, dan penelusuran alur proses (Turtle Diagram).'
  },
  {
    number: '05',
    title: 'Pelaksanaan Audit Lapangan (Opening, Interview & Sampling)',
    desc: 'Seni wawancara auditee tanpa intimidasi, teknik sampling bukti objektif, dan verifikasi silang (cross-check).'
  },
  {
    number: '06',
    title: 'Teknik Penulisan Temuan Audit: Metode PLOR Standar Internasional',
    desc: 'Merumuskan temuan yang objektif, tidak multitafsir, tepat klausul, dan tidak menimbulkan debat kusir.'
  },
  {
    number: '07',
    title: 'Kategorisasi Temuan: Major, Minor, & Opportunity for Improvement (OFI)',
    desc: 'Menilai dampak risiko temuan terhadap Sistem Manajemen Mutu secara akurat.'
  },
  {
    number: '08',
    title: 'Penyusunan Laporan Audit & Closing Meeting',
    desc: 'Menyajikan ringkasan eksekutif yang bernilai untuk Direksi / Top Management.'
  },
  {
    number: '09',
    title: 'Tindak Lanjut Perbaikan (CAPA) & Verifikasi Efektivitas',
    desc: 'Memandu auditee menganalisis akar penyebab (Root Cause) dan memverifikasi tindakan perbaikan sebelum closed.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '1. Apakah cocok untuk auditor pemula?',
    answer: 'Sangat cocok. SMART Audit SYSTEM dirancang khusus untuk membantu auditor yang baru pertama atau beberapa kali ditunjuk. Anda mendapatkan alur kerja terpandu, modul dasar ISO 19011/9001, worksheet siap pakai, dan AI yang memberikan starting point pertanyaan sehingga tidak perlu bingung memulai dari file kosong.'
  },
  {
    question: '2. Apakah saya harus hafal seluruh isi klausul ISO 9001?',
    answer: 'Tidak harus hafal. AI Checklist dan modul di dalamnya telah menyederhanakan persyaratan klausul 4 sampai 10 menjadi poin-poin pertanyaan audit praktis dan panduan bukti objektif yang relevan dengan masing-masing divisi.'
  },
  {
    question: '3. Apakah AI yang menentukan hasil dan keputusan audit?',
    answer: 'Tidak. AI adalah alat bantu (co-pilot) untuk merancang draf pertanyaan, merapikan struktur temuan PLOR, dan mengeksplorasi akar masalah 5-Why. Keputusan audit, verifikasi bukti di lapangan, dan penetapan status ketidaksesuaian sepenuhnya tetap berada pada wewenang auditor.'
  },
  {
    question: '4. Apakah output AI tetap harus direview oleh auditor?',
    answer: 'Ya. Sebagai auditor profesional, setiap output AI harus Anda review dan sesuaikan dengan bukti objektif nyata yang ditemukan selama audit. AI membantu mempercepat perumusan kata-kata awal agar Anda tidak menghabiskan waktu merangkai kalimat dari nol.'
  },
  {
    question: '5. Apakah worksheet Word dan Excel bisa diedit?',
    answer: 'Ya, 100% editable. Seluruh 7 worksheet (program audit, audit plan, checklist, formulir PTKP/CAPA, form temuan, laporan, dll.) disediakan dalam format Microsoft Word (.docx) dan Excel (.xlsx) tanpa proteksi atau password, sehingga Anda bebas memasukkan logo dan identitas instansi Anda.'
  },
  {
    question: '6. Apakah bisa digunakan dari HP, tablet, atau laptop?',
    answer: 'Bisa di semua perangkat. Dashboard SMART Audit SYSTEM berbasis web responsive dan dapat diakses langsung melalui browser di laptop, PC kantor, tablet, maupun smartphone kapan saja.'
  },
  {
    question: '7. Apakah perlu menginstall software atau aplikasi khusus?',
    answer: 'Tidak perlu instalasi software atau konfigurasi coding apapun. Cukup buka link dashboard melalui web browser (Google Chrome, Safari, Edge, Mozilla Firefox, dll.) dan langsung gunakan.'
  },
  {
    question: '8. Apakah ada biaya bulanan atau sistem langganan (subscription)?',
    answer: 'Tidak ada. Pembayaran promo Rp497.000 saat ini adalah SEKALI BAYAR UNTUK AKSES SEUMUR HIDUP (Lifetime Access). Anda tidak akan dikenakan biaya perpanjangan, biaya bulanan, atau biaya tahunan. Catatan: Harga promo Rp497.000 berlaku terbatas sebelum naik bertahap ke Fase 1 (Rp797.000), Fase 2 (Rp997.000), hingga harga normal (Rp1.297.000).'
  },
  {
    question: '9. Bagaimana akses diberikan setelah pembayaran?',
    answer: 'Setelah konfirmasi pembayaran, Anda akan langsung menerima link akses instan ke Dashboard SMART Audit SYSTEM via email, beserta link download seluruh modul, worksheet Word/Excel, podcast audio, dan AI Tools.'
  },
  {
    question: '10. Apakah ini sertifikasi auditor resmi?',
    answer: 'Bukan. SMART Audit SYSTEM adalah sistem kerja, toolkit praktis, dan materi pembelajaran mandiri untuk membantu pelaksanaan audit internal di organisasi Anda, bukan sertifikat kualifikasi auditor personil (seperti IRCA/Lead Auditor).'
  },
  {
    question: '11. Apakah SMART Audit SYSTEM menggantikan kompetensi auditor?',
    answer: 'Tidak. Sistem ini dirancang untuk MEMPERKUAT kompetensi dan efisiensi kerja auditor internal, bukan menggantikannya. Sistem ini mengeliminasi beban administratif dari file kosong agar auditor bisa lebih fokus pada observasi, wawancara, dan analisis bukti objektif.'
  },
  {
    question: '12. Kenapa tidak menggunakan AI atau chatbot umum (seperti ChatGPT biasa) saja?',
    answer: 'ChatGPT umum memerlukan keahlian prompt engineering yang rumit, belum memiliki konteks klausul audit ISO 19011 yang terstruktur, dan tidak terintegrasi langsung dengan worksheet Word/Excel serta workflow audit siap pakai. SMART Audit SYSTEM telah merancang prompt, format output, dan alur kerja khusus audit tanpa perlu Anda repot merangkai prompt dari nol.'
  },
  {
    question: '13. Apa bedanya AI Checklist, AI PLOR, dan AI CAPA?',
    answer: 'Ketiganya menangani fase audit yang berbeda: AI Checklist membantu merumuskan pertanyaan 5W+1H dan bukti yang perlu dicari sebelum/saat audit; AI PLOR merapikan catatan temuan lapangan menjadi format standar internasional (Problem, Location, Objective Evidence, Requirement); sedangkan AI CAPA memandu eksplorasi akar masalah 5-Why serta rencana tindakan korektif dan monitoring.'
  },
  {
    question: '14. Apakah tools dan sistem ini bisa digunakan berulang kali?',
    answer: 'Ya, tentu saja. Anda dapat menggunakannya kembali pada setiap siklus audit internal berkala di kantor atau organisasi Anda untuk berbagai divisi tanpa batasan frekuensi penggunaan.'
  },
  {
    question: '15. Apa saja yang saya peroleh lengkap setelah membeli?',
    answer: 'Anda memperoleh 4 pilar lengkap: (1) Core Value: 3 AI Productivity Tools + 1 ISO 19011 Co-Pilot; (2) Implementation Tools: 7 Worksheet Word & Excel Editable; (3) Knowledge System: 9 Modul Pembelajaran Internal Audit didampingi AI Asisten AMI; (4) Supporting Assets: Podcast audio ulasan, slide materi, mind map, dan simulasi pre-test/post-test.'
  }
];

export { CHECKOUT_WHATSAPP_NUMBER, DEFAULT_PREFILLED_MESSAGE } from '../constants';
