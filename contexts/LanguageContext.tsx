'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── COMPLETE BILINGUAL TRANSLATION DICTIONARY FOR apt. HAFIZAH NURFADILLAH ───
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': 'TENTANG SAYA',
    'nav.education': 'PENDIDIKAN',
    'nav.work': 'MAGANG',
    'nav.org': 'ORGANISASI',
    'nav.achievements': "PRESTASI",
    'nav.awards': 'SERTIFIKASI',
    'nav.skills': 'KEAHLIAN',
    'nav.contact': 'HUBUNGI SAYA',
    'ui.changePhoto': "Ganti foto",
    'ui.viewPhoto': "Lihat foto",
    'ui.photo': "foto",
    'ui.bemClick': "Klik untuk berganti foto BEM UI",
    'ui.bemDocs': "Dokumentasi BEM UI (3 Foto):",
    'ui.bemView': "Lihat Foto BEM UI",

    // ── Hero
    'hero.scroll': 'GULIR KE BAWAH',
    'hero.hey': 'Hai, saya',
    'hero.tagline': 'Pelayanan farmasi klinis yang teliti, aman, dan berpusat pada pasien.',
    'hero.based1': 'LULUSAN PROFESI APOTEKER',
    'hero.based2': 'UNIVERSITAS INDONESIA',
    'hero.role1': 'Apoteker',
    'hero.role2': 'Lulusan Terbaik 1 Profesi Apoteker',
    'hero.cta': 'LIHAT PENGALAMAN',
    'hero.badge.major': 'Profesi Apoteker UI',
    'hero.badge.medal': 'IPK 4.00 & STR',
    'hero.badge.event': 'Konsil Kesehatan RI',

    // ── About Section
    'about.label': 'TENTANG SAYA',
    'about.title': "Apoteker Klinis. Pelayanan Berpusat pada Pasien.",
    'about.ipk': 'IPK Profesi',
    'about.toefl': 'IPK S1',
    'about.year': 'Apoteker',
    'about.bio1': 'Lulusan Profesi Apoteker dari Universitas Indonesia dengan pengalaman praktik dalam pelayanan farmasi klinis di rumah sakit, apotek, dan puskesmas. Memiliki kompetensi dalam pengkajian dan skrining resep, dispensing, Pelayanan Informasi Obat (PIO), konseling, serta edukasi obat. Didukung oleh pengalaman tambahan di sektor industri dan regulasi farmasi, sehingga memiliki pemahaman mengenai siklus obat dari produksi hingga pelayanan ke pasien. Berorientasi pada pelayanan kefarmasian yang berpusat pada pasien (patient-oriented care) dengan mengutamakan ketepatan terapi, patient safety, dan kualitas pelayanan.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Farmasi Klinis',
    'about.current.1.sub': 'Visite & Skrining Resep RS',
    'about.current.2.title': "Keselamatan Pasien",
    'about.current.2.sub': 'PTO & Konseling Obat',
    'about.current.3.title': 'Regulasi & Mutu',
    'about.current.3.sub': 'GMP & Siklus Hidup Obat',

    // ── Trait Deck
    'trait.card.label': 'KARAKTER KERJA',
    'trait.change': 'Ganti',
    'trait.hint': 'Klik untuk melihat karakter kerja lainnya',
    'trait.1.title': 'Teliti',
    'trait.1.sub': "Ketelitian & Keselamatan Pasien",
    'trait.1.tag': "Fokus Tanpa Kesalahan",
    'trait.1.desc': 'Memastikan akurasi tinggi dalam skrining resep, penyiapan dosis, dispensing, dan evaluasi rasionalitas terapi obat pasien.',
    'trait.2.title': 'Empati',
    'trait.2.sub': "Pelayanan Berpusat pada Pasien",
    'trait.2.tag': 'Edukasi Pasien',
    'trait.2.desc': 'Memberikan pelayanan konseling dan edukasi informasi obat dengan pendekatan ramah, sabar, dan berpusat pada kebutuhan pasien.',
    'trait.3.title': 'Komunikatif',
    'trait.3.sub': "Tim Interprofesional",
    'trait.3.tag': 'Kolaboratif',
    'trait.3.desc': 'Mampu berkomunikasi efektif serta berkolaborasi bersama dokter, perawat, dan tenaga medis dalam visite dan pemantauan terapi.',
    'trait.4.title': 'Adaptif',
    'trait.4.sub': "Gesit & Cepat Belajar",
    'trait.4.tag': 'Cepat Belajar',
    'trait.4.desc': 'Cepat beradaptasi di berbagai setting kefarmasian, mulai dari bangsal rumah sakit, apotek komunitas, hingga industri dan regulasi.',

    // ── Quote
    'about.quote': '“Mengutamakan keselamatan pasien, ketepatan terapi, dan pelayanan kefarmasian yang berintegritas.”',

    // ── Metrics
    'metric.ipk': 'IPK PROFESI',
    'metric.ipk.sub': 'Universitas Indonesia (4.00 / 4.00)',
    'metric.medal': 'IPK SARJANA',
    'metric.medal.sub': 'Sarjana Farmasi UI (3.94 / 4.00)',
    'metric.org': 'ROTASI PRAKTIK',
    'metric.org.sub': 'RS, Apotek, Puskesmas, Industri, Kemenkes',
    'metric.toefl': 'LISENSI RESMI',
    'metric.toefl.sub': 'STR Apoteker & Sertifikat Kompetensi',

    // ── Education Section
    'education.label': 'RIWAYAT AKADEMIK',
    'education.title': 'Pendidikan',
    'education.degreeLabel': 'Gelar',
    'education.highlights.label': 'Kompetensi & Aktivitas Utama',
    
    'education.1.institution': 'Universitas Indonesia',
    'education.1.program': 'Profesi Apoteker',
    'education.1.degree': 'Apoteker (apt.)',
    'education.1.period': '2025 — 2026',
    'education.1.gpa': '4.00 / 4.00',
    'education.1.status': 'Lulus',
    'education.1.desc': 'Program Profesi Apoteker dengan pendalaman praktik kerja farmasi komprehensif di rumah sakit (RSUP Dr. Kariadi), apotek komunitas (Kimia Farma Cikokol), pelayanan primer (Puskesmas Cengkareng), regulasi kefarmasian (Kemenkes RI), dan industri farmasi (PT Bio Farma). Lulus dengan IPK sempurna 4.00/4.00.',
    'education.1.tag': 'Pendidikan Profesi',
    'education.1.caption': 'Pelantikan & Sumpah Apoteker Universitas Indonesia',
    'education.1.h1': 'Pemantauan Terapi Obat (PTO) pada pasien stroke iskemik & hemoragik di RSUP Dr. Kariadi',
    'education.1.h2': 'Skrining resep, rekonsiliasi obat, visite rawat inap, dan konseling pasien ARV serta obat pulang',
    'education.1.h3': 'Pelayanan Program Rujuk Balik (PRB) BPJS di Kimia Farma dan pengelolaan sediaan di Puskesmas',
    'education.1.h4': 'Pemahaman produksi sediaan solid, QC testing (GMP) di Bio Farma dan regulasi alkes di Kemenkes RI',

    'education.2.institution': 'Universitas Indonesia',
    'education.2.program': 'Sarjana Farmasi',
    'education.2.degree': 'Sarjana Farmasi (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.94 / 4.00',
    'education.2.status': 'Lulus',
    'education.2.desc': 'Menempuh pendidikan sarjana farmasi dengan fokus pada farmakologi, farmakoterapi, teknologi formulasi sediaan farmasi, kimia farmasi, dan farmasi klinis komunitas. Lulus dengan predikat Cum Laude (IPK 3.94/4.00) dan aktif sebagai asisten praktikum serta pengurus organisasi mahasiswa.',
    'education.2.tag': 'Pendidikan Sarjana',
    'education.2.caption': 'Wisuda Sarjana Farmasi Universitas Indonesia',
    'education.2.h1': 'Asisten Dosen Praktikum Farmakologi membimbing dan mengevaluasi 6 kelas reguler mahasiswa',
    'education.2.h2': 'Penguasaan dasar formulasi sediaan farmasi, analisis farmasi, farmakokinetika, dan farmakoterapi',
    'education.2.h3': 'Pengurus BEM UI (Staf Kementerian Keuangan) dan Bendahara HMJ Farmasi UI',
    'education.2.h4': 'Meraih predikat kelulusan dengan pujian (Cum Laude) dengan IPK 3.94/4.00',

    // ── Work Section
    'work.label': 'PENGALAMAN KERJA & KLINIS',
    'work.title': 'Pengalaman Magang',
    'work.subtitle': 'Rotasi komprehensif di berbagai sektor kefarmasian: rumah sakit, apotek, fasilitas primer, industri, dan regulasi pemerintah.',
    'work.cta': 'Lihat Semua Pengalaman',

    'work.1.role': "Magang Farmasi Klinis",
    'work.1.inst': 'RSUP DR. KARIADI',
    'work.1.loc': 'Semarang, Jawa Tengah',
    'work.1.period': 'Mei — Juli 2026',
    'work.1.sub': 'Pelayanan Farmasi Klinis & Pemantauan Terapi Obat',
    'work.1.desc': 'Melaksanakan rotasi di depo rawat jalan, rawat inap, IGD, kamar operasi, dan gudang farmasi untuk memahami alur pelayanan serta perbekalan farmasi. Terlibat dalam penerimaan resep, skrining resep, dispensing, penyerahan obat pulang, rekonsiliasi obat, visite pasien, dan Pemantauan Terapi Obat (PTO) pada pasien stroke iskemik dan hemoragik di bawah supervisi apoteker. Mengkaji ketepatan indikasi, dosis, respons terapi, medication error, masalah terkait obat (MTO), serta berpartisipasi dalam konseling pasien ARV dan sistem distribusi unit dose.',

    'work.2.role': "Magang Farmasi Komunitas",
    'work.2.inst': 'APOTEK KIMIA FARMA CIKOKOL',
    'work.2.loc': 'Tangerang, Banten',
    'work.2.period': 'Oktober — November 2025',
    'work.2.sub': 'Pelayanan Farmasi Komunitas & Program Rujuk Balik BPJS',
    'work.2.desc': 'Melaksanakan skrining resep, dispensing, penyiapan dan peracikan obat, pelayanan swamedikasi, serta Pemberian Informasi Obat (PIO) kepada pasien. Mendukung pelayanan Program Rujuk Balik (PRB) BPJS Kesehatan melalui verifikasi kelengkapan administrasi dan penyiapan obat kronis rutin.',

    'work.3.role': "Magang Farmasi Pelayanan Primer",
    'work.3.inst': 'PUSKESMAS CENGKARENG',
    'work.3.loc': 'Jakarta Barat, DKI Jakarta',
    'work.3.period': 'September — Oktober 2025',
    'work.3.sub': 'Pelayanan Farmasi Primer & Pengelolaan Sediaan',
    'work.3.desc': 'Melakukan skrining resep, konseling edukasi obat, dan pemantauan terapi obat pada pasien puskesmas. Mendukung pengelolaan sediaan farmasi meliputi perencanaan, pengadaan, penyimpanan, hingga pemusnahan serta melaksanakan stok opname untuk pengendalian persediaan dan pemantauan obat kedaluwarsa.',

    'work.4.role': "Magang Industri Farmasi",
    'work.4.inst': 'PT BIO FARMA (PERSERO)',
    'work.4.loc': 'Bandung, Jawa Barat',
    'work.4.period': 'Desember 2025 — Januari 2026',
    'work.4.sub': "Produksi Sediaan Padat & Pengujian Pengendalian Mutu (CPOB)",
    'work.4.desc': 'Terlibat dalam alur produksi sediaan solid (penimbangan, granulasi basah, pencetakan tablet), pembebasan lini (Line Clearance), dan pengendalian selama proses (In-Process Control/IPC). Mendukung pengujian pengendalian mutu (QC) meliputi kadar, disolusi, keseragaman bobot, kekerasan, friabilitas, pH, dan susut pengeringan (LOD). Mempelajari preformulasi, optimasi R&D, serta sistem penunjang kritis industri meliputi HVAC, sistem air, dan ruang bersih (cleanroom).',

    'work.5.role': "Magang Regulasi Kefarmasian (Regulatory Affairs)",
    'work.5.inst': 'KEMENTERIAN KESEHATAN RI (DITJEN FARMALKES)',
    'work.5.loc': 'Jakarta, DKI Jakarta',
    'work.5.period': 'April — Mei 2026',
    'work.5.sub': 'Regulasi Peredaran & Registrasi Alat Kesehatan',
    'work.5.desc': 'Mempelajari dan menganalisis regulasi peredaran alat kesehatan di Indonesia, termasuk tata alur perizinan, registrasi baru, registrasi ulang, dan evaluasi kelayakan dokumen pendukung teknis kefarmasian.',

    'work.6.role': 'Asisten Dosen Praktikum Farmakologi',
    'work.6.inst': 'UNIVERSITAS INDONESIA',
    'work.6.loc': 'Depok, Jawa Barat',
    'work.6.period': '2024 — 2025',
    'work.6.sub': 'Bimbingan Praktikum & Evaluasi Akademik',
    'work.6.desc': 'Membimbing dan menjelaskan prosedur kegiatan praktikum farmakologi kepada mahasiswa dari 6 kelas reguler. Menyiapkan bahan dan peralatan praktikum serta melaksanakan pre-test dan evaluasi hasil praktikum mahasiswa sebagai bagian dari proses pembelajaran.',

    // ── Organizations Section
    'trainings.label': 'PENGALAMAN ORGANISASI',
    'trainings.title': 'Organisasi & Kepemimpinan',
    'trainings.campus': 'UNIVERSITAS INDONESIA',
    
    'org.1.role': 'Staf Kementerian Keuangan',
    'org.1.inst': 'BEM Universitas Indonesia',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Depok, Jawa Barat',
    'org.1.desc': 'Menjalankan fungsi budgeting dan controlling dalam pengelolaan keuangan organisasi. Menyusun pelaporan keuangan secara transparan dan akuntabel untuk mendukung pertanggungjawaban organisasi.',
    
    'org.2.role': 'Bendahara',
    'org.2.inst': 'Himpunan Mahasiswa Jurusan Farmasi',
    'org.2.period': '2022 — 2023',
    'org.2.loc': 'Depok, Jawa Barat',
    'org.2.desc': 'Menyusun rencana pengeluaran dan mengelola perputaran dana organisasi selama satu periode kepengurusan. Menyusun laporan pertanggungjawaban keuangan sebagai bentuk akuntabilitas pengelolaan dana organisasi.',

    // ── Prestasi & Pencapaian
    'achv.label': "PRESTASI & PENCAPAIAN",
    'achv.title': "Prestasi & Pencapaian",
    'achv.1.badge': "LULUSAN TERBAIK 1",
    'achv.1.title': "Lulusan Terbaik 1 Program Studi Pendidikan Profesi Apoteker",
    'achv.1.inst': "Fakultas Farmasi Universitas Indonesia",
    'achv.1.period': "2025 — 2026",

    // ── Awards Section
    'awards.label': 'LISENSI & SERTIFIKASI',
    'awards.title': 'Sertifikasi & Lisensi Resmi',
    'awards.sub': 'Lisensi profesi dan sertifikasi kompetensi nasional yang mendukung praktik kefarmasian profesional.',
    'awards.openDoc': 'Buka Sertifikat',
    'awards.issuer': 'Penerbit Lisensi',
    'awards.viewOriginal': 'Lihat Dokumen Asli →',

    'award.1.title': 'Surat Tanda Registrasi (STR) Apoteker',
    'award.1.issuer': 'Konsil Kesehatan Indonesia',
    'award.1.cat': 'LISENSI PROFESI',
    'award.1.desc': 'Surat Tanda Registrasi resmi sebagai tenaga kesehatan Apoteker yang berwenang menjalankan praktik kefarmasian di seluruh fasilitas pelayanan kesehatan Republik Indonesia.',

    'award.2.title': 'Sertifikat Kompetensi Apoteker',
    'award.2.issuer': 'Kolegium Farmasi Indonesia',
    'award.2.cat': 'SERTIFIKASI PROFESI',
    'award.2.desc': 'Sertifikat pengakuan standar kompetensi profesi apoteker yang mencakup pelayanan farmasi klinis, dispensing, farmasi komunitas, dan penjaminan mutu sediaan.',

    'award.3.title': 'Certificate in Customer Feedback Management',
    'award.3.issuer': 'Badan Nasional Sertifikasi Profesi (BNSP)',
    'award.3.cat': 'SERTIFIKASI BNSP',
    'award.3.desc': 'Sertifikasi kompetensi nasional BNSP dalam pengelolaan umpan balik pelanggan/pasien, komunikasi interaktif, dan penanganan keluhan dalam pelayanan prima.',

    // ── Skills Section
    'skills.label': 'KOMPETENSI KLINIS & TEKNIS',
    'skills.title': 'Kemampuan Teknis',
    'skills.desc': 'Menggabungkan kompetensi farmasi klinis, dispensing, pemantauan terapi obat, dan pemahaman mutu sediaan untuk pelayanan yang aman dan berpusat pada pasien.',
    'skills.card1.tag': 'FARMASI KLINIS & PELAYANAN PASIEN',
    'skills.card1.desc': 'Melakukan pemantauan terapi obat (PTO), skrining resep, dispensing, rekonsiliasi obat, konseling pasien, identifikasi Drug Related Problems (DRP), monitoring efek samping obat (MESO), dan pelayanan informasi obat (PIO) di berbagai setting layanan.',
    'skills.card2.tag': 'INDUSTRI, REGULASI & MANAJEMEN',
    'skills.card2.desc': 'Memahami alur produksi sediaan farmasi (CPOB/GMP), pengujian pengendalian mutu (QC), pengendalian selama proses (IPC), pengelolaan sediaan farmasi di puskesmas/apotek, serta regulasi dan perizinan edar alat kesehatan di Kemenkes RI.',

    // ── Personal Skills Section
    'personal.label': 'KEMAMPUAN PERSONAL & SOFTWARE',
    'personal.title': 'Karakter & Software Kerja',
    'personal.sub': 'Karakter personal pendukung pelayanan prima dan penguasaan perangkat lunak untuk administrasi, pelaporan, dan edukasi.',
    'personal.soft.label': "KEMAMPUAN INTERPERSONAL",
    'personal.soft.title': 'Kemampuan Personal',
    'personal.hard.label': "PERANGKAT LUNAK",
    'personal.hard.title': 'Kemampuan Software',
    'personal.orientation': 'Karakter Pelayanan:',
    'personal.quality': "Keselamatan Pasien & Pelayanan Prima",
    'personal.app': 'Aplikasi Kerja:',
    'personal.ready': 'Administrasi & Desain Edukasi',

    'personal.soft.1.t': 'Disiplin & Tanggung Jawab',
    'personal.soft.1.d': 'Komitmen tinggi terhadap ketepatan waktu pelayanan resep dan ketelitian administrasi obat.',
    'personal.soft.2.t': 'Ramah, Sopan & Empati',
    'personal.soft.2.d': 'Pendekatan penuh perhatian dan keramahan dalam konseling serta penanganan keluhan pasien.',
    'personal.soft.3.t': "Teliti & Minim Kesalahan",
    'personal.soft.3.d': 'Pemeriksaan berulang (double check) pada skrining resep, dosis obat, dan potensi medication error.',
    'personal.soft.4.t': 'Komunikatif & Kolaboratif',
    'personal.soft.4.d': 'Mampu berkoordinasi efektif dengan dokter, perawat, dan rekan sejawat dalam tim interprofesional.',
    'personal.soft.5.t': 'Kerja Tim & Kepemimpinan',
    'personal.soft.5.d': 'Pengalaman memimpin anggaran organisasi dan bekerja sinergis dalam tim farmasi yang padat.',
    'personal.soft.6.t': 'Adaptif & Cepat Belajar',
    'personal.soft.6.d': 'Cepat menguasai pedoman terapi baru, regulasi kesehatan, serta sistem operasional depo farmasi.',

    // ── Contact Section
    'contact.label': 'KONTAK & KONSULTASI',
    'contact.title': 'Hubungi Saya',
    'contact.tagline': "Apoteker yang berorientasi pada pelayanan kefarmasian berpusat pada pasien.",
    'contact.subtitle': 'Terbuka untuk peluang karir di bidang farmasi klinis rumah sakit, apotek, regulasi, dan industri farmasi.',
    'contact.chatNow': 'Hubungi Sekarang',
    'contact.direct': 'Saluran Komunikasi Langsung',
    'contact.directSub': 'Hubungi melalui kontak berikut:',
    'contact.openHours': 'Jam Respons:',
    'contact.openVal': 'Senin — Sabtu (08.00 — 17.00 WIB)',
    'contact.location': 'LOKASI',
    'contact.phone': 'TELEPON / WHATSAPP',
  },

  en: {
    // ── Navbar
    'nav.about': 'ABOUT ME',
    'nav.education': 'EDUCATION',
    'nav.work': 'INTERNSHIP',
    'nav.org': 'ORGANIZATION',
    'nav.achievements': "ACHIEVEMENTS",
    'nav.awards': 'CERTIFICATIONS',
    'nav.skills': 'COMPETENCIES',
    'nav.contact': 'CONTACT ME',
    'ui.changePhoto': "Change photo",
    'ui.viewPhoto': "View photo",
    'ui.photo': "photo",
    'ui.bemClick': "Click to change the BEM UI photo",
    'ui.bemDocs': "BEM UI Documentation (3 Photos):",
    'ui.bemView': "View BEM UI Photo",

    // ── Hero
    'hero.scroll': 'SCROLL DOWN',
    'hero.hey': "Hey, I'm",
    'hero.tagline': 'Careful, safe, patient-centered clinical pharmacy care.',
    'hero.based1': 'PHARMACIST PROFESSION GRADUATE',
    'hero.based2': 'UNIVERSITAS INDONESIA',
    'hero.role1': 'Pharmacist',
    'hero.role2': 'Top Graduate 1 of the Pharmacist Program',
    'hero.cta': 'VIEW EXPERIENCE',
    'hero.badge.major': 'Pharmacist Grad UI',
    'hero.badge.medal': 'GPA 4.00 & STR',
    'hero.badge.event': 'Indonesian Health Council',

    // ── About Section
    'about.label': 'ABOUT ME',
    'about.title': 'Clinical Pharmacist. Patient-Centered Care.',
    'about.ipk': 'Profession GPA',
    'about.toefl': 'Bachelor GPA',
    'about.year': 'Licensed',
    'about.bio1': 'Licensed Pharmacist graduate from Universitas Indonesia with practical experience in clinical pharmacy services across hospital, community pharmacy, and primary healthcare settings. Competent in prescription assessment & screening, dispensing, Drug Information Services (PIO), counseling, and patient education. Supported by additional experience in pharmaceutical industry and regulatory affairs, providing a comprehensive understanding of the drug life cycle from manufacturing to patient care. Dedicated to patient-centered care with high emphasis on therapeutic precision, patient safety, and service excellence.',
    'about.cv.prompt': 'Want to learn more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Clinical Pharmacy',
    'about.current.1.sub': 'Visite & Prescription Screening',
    'about.current.2.title': 'Patient Safety',
    'about.current.2.sub': 'TDM & Medication Counseling',
    'about.current.3.title': 'Regulatory & Quality',
    'about.current.3.sub': 'GMP & Drug Lifecycle',

    // ── Trait Deck
    'trait.card.label': 'WORK TRAITS',
    'trait.change': 'Switch',
    'trait.hint': 'Click to view more work traits',
    'trait.1.title': 'Precise',
    'trait.1.sub': 'Precision & Patient Safety',
    'trait.1.tag': 'Zero Error Focus',
    'trait.1.desc': 'Ensuring high accuracy in prescription screening, dosage verification, dispensing, and drug therapy rationality evaluations.',
    'trait.2.title': 'Empathetic',
    'trait.2.sub': 'Patient-Centered Care',
    'trait.2.tag': 'Patient Education',
    'trait.2.desc': 'Providing counseling and drug information services with warm, patient, and patient-centered communication.',
    'trait.3.title': 'Communicative',
    'trait.3.sub': 'Interprofessional Team',
    'trait.3.tag': 'Collaborative',
    'trait.3.desc': 'Able to communicate effectively and collaborate with physicians, nurses, and medical staff in ward rounds and therapy monitoring.',
    'trait.4.title': 'Adaptive',
    'trait.4.sub': 'Agile & Fast Learner',
    'trait.4.tag': 'Fast Learner',
    'trait.4.desc': 'Rapidly adapting across various pharmacy settings, from hospital wards to community pharmacies, industry, and regulation.',

    // ── Quote
    'about.quote': '“Prioritizing patient safety, therapeutic precision, and pharmacy services with uncompromising integrity.”',

    // ── Metrics
    'metric.ipk': 'PROFESSION GPA',
    'metric.ipk.sub': 'Universitas Indonesia (4.00 / 4.00)',
    'metric.medal': 'BACHELOR GPA',
    'metric.medal.sub': 'B.Pharm Universitas Indonesia (3.94 / 4.00)',
    'metric.org': 'CLINICAL ROTATIONS',
    'metric.org.sub': 'Hospital, Community, Primary Care, Industry, MoH',
    'metric.toefl': 'OFFICIAL LICENSE',
    'metric.toefl.sub': 'Pharmacist License (STR) & Competency Certificate',

    // ── Education Section
    'education.label': 'ACADEMIC BACKGROUND',
    'education.title': 'Education',
    'education.degreeLabel': 'Degree',
    'education.highlights.label': 'Key Competencies & Activities',

    'education.1.institution': 'Universitas Indonesia',
    'education.1.program': 'Pharmacist Profession Program',
    'education.1.degree': 'Apoteker (apt.)',
    'education.1.period': '2025 — 2026',
    'education.1.gpa': '4.00 / 4.00',
    'education.1.status': 'Graduated',
    'education.1.desc': 'Comprehensive Pharmacist Professional Program with intensive rotations at general hospital (RSUP Dr. Kariadi), community pharmacy (Kimia Farma Cikokol), primary healthcare (Puskesmas Cengkareng), pharmaceutical regulation (Ministry of Health RI), and pharmaceutical manufacturing (PT Bio Farma). Graduated with a perfect 4.00/4.00 GPA.',
    'education.1.tag': 'Professional Education',
    'education.1.caption': 'Pharmacist Oath & Graduation Ceremony, Universitas Indonesia',
    'education.1.h1': 'Therapeutic Drug Monitoring (TDM) on ischemic & hemorrhagic stroke patients at RSUP Dr. Kariadi',
    'education.1.h2': 'Prescription screening, medication reconciliation, inpatient ward rounds, and ARV patient counseling',
    'education.1.h3': 'BPJS Chronic Referral Program (PRB) at Kimia Farma and medical supply management at Puskesmas',
    'education.1.h4': 'Solid dosage manufacturing & QC testing (GMP) at Bio Farma and medical device regulation at MoH RI',

    'education.2.institution': 'Universitas Indonesia',
    'education.2.program': 'Bachelor of Pharmacy',
    'education.2.degree': 'Bachelor of Pharmacy (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.94 / 4.00',
    'education.2.status': 'Graduated',
    'education.2.desc': 'Undergraduate pharmacy studies focusing on pharmacology, pharmacotherapy, pharmaceutical formulation technology, pharmaceutical chemistry, and clinical community pharmacy. Graduated Cum Laude with a 3.94/4.00 GPA, active as laboratory teaching assistant and student organization executive.',
    'education.2.tag': 'Undergraduate Degree',
    'education.2.caption': 'Bachelor of Pharmacy Graduation, Universitas Indonesia',
    'education.2.h1': 'Teaching Assistant for Pharmacology Laboratory, guiding and evaluating 6 regular classes',
    'education.2.h2': 'Mastery of formulation technology, pharmaceutical analysis, pharmacokinetics, and pharmacotherapy',
    'education.2.h3': 'Student Executive Board (BEM UI - Ministry of Finance Staff) & Pharmacy Student Association Treasurer',
    'education.2.h4': 'Graduated with honors (Cum Laude) with a cumulative GPA of 3.94/4.00',

    // ── Work Section
    'work.label': 'WORK & CLINICAL EXPERIENCE',
    'work.title': 'Internship Experience',
    'work.subtitle': 'Comprehensive clinical and professional rotations across hospital, community pharmacy, primary care, industry, and government regulation.',
    'work.cta': 'View All Experiences',

    'work.1.role': 'Clinical Pharmacy Intern',
    'work.1.inst': 'RSUP DR. KARIADI',
    'work.1.loc': 'Semarang, Central Java',
    'work.1.period': 'May — July 2026',
    'work.1.sub': 'Clinical Pharmacy Services & Therapeutic Drug Monitoring',
    'work.1.desc': 'Completed rotations across outpatient, inpatient, emergency room (IGD), operating room, and central pharmacy warehouse. Involved in prescription screening, dispensing, discharge counseling, medication reconciliation, ward rounds with medical team, and Therapeutic Drug Monitoring (TDM) for ischemic and hemorrhagic stroke patients. Evaluated indication appropriateness, dosage, therapeutic response, medication errors, and Drug-Related Problems (DRPs), alongside ARV counseling and 24-hour unit dose distribution systems.',

    'work.2.role': 'Community Pharmacy Intern',
    'work.2.inst': 'KIMIA FARMA CIKOKOL PHARMACY',
    'work.2.loc': 'Tangerang, Banten',
    'work.2.period': 'October — November 2025',
    'work.2.sub': 'Community Pharmacy Services & BPJS Referral Program',
    'work.2.desc': 'Performed prescription screening, compounding and dispensing, self-medication consultation, and Drug Information Services (PIO) for patients. Supported BPJS Chronic Disease Referral Program (PRB) through administrative verification and chronic medication preparation.',

    'work.3.role': 'Primary Care Pharmacy Intern',
    'work.3.inst': 'PUSKESMAS CENGKARENG',
    'work.3.loc': 'West Jakarta, DKI Jakarta',
    'work.3.period': 'September — October 2025',
    'work.3.sub': 'Primary Healthcare Pharmacy & Supply Management',
    'work.3.desc': 'Conducted prescription screening, medication counseling, and drug therapy monitoring for primary healthcare patients. Managed pharmaceutical inventory covering procurement, storage, stock taking, inventory control, and expired drug monitoring.',

    'work.4.role': 'Pharmaceutical Industry Intern',
    'work.4.inst': 'PT BIO FARMA (PERSERO)',
    'work.4.loc': 'Bandung, West Java',
    'work.4.period': 'December 2025 — January 2026',
    'work.4.sub': 'Solid Dosage Production & Quality Control Testing (GMP)',
    'work.4.desc': 'Participated in solid dosage production lines (weighing, wet granulation, compression), Line Clearance, and In-Process Control (IPC). Supported Quality Control (QC) assays including content assay, dissolution, weight variation, hardness, friability, pH, and Loss on Drying (LOD). Studied preformulation, R&D optimization, and critical utilities (HVAC, purified water systems, cleanrooms).',

    'work.5.role': 'Regulatory Affairs Intern',
    'work.5.inst': 'MINISTRY OF HEALTH RI (DITJEN FARMALKES)',
    'work.5.loc': 'Jakarta, DKI Jakarta',
    'work.5.period': 'April — May 2026',
    'work.5.sub': 'Medical Device Regulations & Product Registration',
    'work.5.desc': 'Studied medical device circulation regulations in Indonesia, distribution licensing workflows, new registrations, renewals, and technical document dossier evaluations.',

    'work.6.role': 'Pharmacology Teaching Assistant',
    'work.6.inst': 'UNIVERSITAS INDONESIA',
    'work.6.loc': 'Depok, West Java',
    'work.6.period': '2024 — 2025',
    'work.6.sub': 'Laboratory Instruction & Academic Assessment',
    'work.6.desc': 'Supervised and guided pharmacology laboratory experiments for undergraduate students across 6 regular classes. Prepared reagents, lab equipment, administered pre-tests, and evaluated student lab reports.',

    // ── Organizations Section
    'trainings.label': 'ORGANIZATIONAL EXPERIENCE',
    'trainings.title': 'Leadership & Organizations',
    'trainings.campus': 'UNIVERSITAS INDONESIA',

    'org.1.role': 'Ministry of Finance Staff',
    'org.1.inst': 'BEM Universitas Indonesia',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Depok, West Java',
    'org.1.desc': 'Carried out budgeting and financial controlling for the central student executive board. Prepared transparent and accountable financial reports for organization accountability.',

    'org.2.role': 'Treasurer',
    'org.2.inst': 'Pharmacy Student Association (HMJ Farmasi UI)',
    'org.2.period': '2022 — 2023',
    'org.2.loc': 'Depok, West Java',
    'org.2.desc': 'Formulated expenditure budgets and managed cash flow throughout the term. Prepared financial accountability reports for student governance.',

    // ── Prestasi & Pencapaian
    'achv.label': "ACHIEVEMENTS",
    'achv.title': "Achievements",
    'achv.1.badge': "TOP GRADUATE 1",
    'achv.1.title': "Top Graduate 1 of the Pharmacist Professional Education Study Program",
    'achv.1.inst': "Faculty of Pharmacy, Universitas Indonesia",
    'achv.1.period': "2025 — 2026",

    // ── Awards Section
    'awards.label': 'LICENSES & CERTIFICATIONS',
    'awards.title': 'Official Licenses & Certifications',
    'awards.sub': 'Professional practice licenses and national competency certificates supporting professional healthcare practice.',
    'awards.openDoc': 'Open Document',
    'awards.issuer': 'Issuing Body',
    'awards.viewOriginal': 'View Original Document →',

    'award.1.title': 'Pharmacist Registration Certificate (STR)',
    'award.1.issuer': 'Indonesian Health Council (KKI)',
    'award.1.cat': 'PROFESSIONAL LICENSE',
    'award.1.desc': 'Official professional registration certificate authorizing legal clinical pharmacy practice across healthcare facilities in the Republic of Indonesia.',

    'award.2.title': 'Pharmacist Competency Certificate',
    'award.2.issuer': 'Indonesian Pharmacy Collegium (KFI)',
    'award.2.cat': 'COMPETENCY CERTIFICATE',
    'award.2.desc': 'National competency credential certifying professional mastery in clinical pharmacy services, dispensing, and pharmaceutical quality management.',

    'award.3.title': 'Certificate in Customer Feedback Management',
    'award.3.issuer': 'National Board for Professional Certification (BNSP)',
    'award.3.cat': 'BNSP CERTIFICATION',
    'award.3.desc': 'Certified competency in customer and patient feedback handling, empathetic communication, and quality healthcare service delivery.',

    // ── Skills Section
    'skills.label': 'CLINICAL & TECHNICAL SKILLS',
    'skills.title': 'Technical Competencies',
    'skills.desc': 'Combining clinical pharmacy acumen, dispensing precision, therapeutic monitoring, and pharmaceutical quality standards for patient-centered safety.',
    'skills.card1.tag': 'CLINICAL PHARMACY & PATIENT CARE',
    'skills.card1.desc': 'Proficient in Therapeutic Drug Monitoring (TDM), prescription screening, dispensing, medication reconciliation, patient counseling, Drug-Related Problems (DRP) identification, adverse drug reaction monitoring (MESO), and Drug Information Services (PIO).',
    'skills.card2.tag': 'INDUSTRY, REGULATION & MANAGEMENT',
    'skills.card2.desc': 'Understanding pharmaceutical manufacturing processes (GMP/CPOB), Quality Control (QC) assays, In-Process Control (IPC), healthcare facility inventory management, and MoH medical device regulations.',

    // ── Personal Skills Section
    'personal.label': 'PERSONAL & SOFTWARE SKILLS',
    'personal.title': 'Character & Software Tools',
    'personal.sub': 'Personal service mindset and software proficiency for clinical documentation, inventory reporting, and patient education design.',
    'personal.soft.label': 'SOFT SKILLS',
    'personal.soft.title': 'Personal Traits',
    'personal.hard.label': 'SOFTWARE TOOLS',
    'personal.hard.title': 'Software Competencies',
    'personal.orientation': 'Service Ethos:',
    'personal.quality': 'Patient Safety & Service Excellence',
    'personal.app': 'Productivity Tools:',
    'personal.ready': 'Administration & Educational Visuals',

    'personal.soft.1.t': 'Discipline & Responsibility',
    'personal.soft.1.d': 'High commitment to timely prescription fulfillment and meticulous drug recordkeeping.',
    'personal.soft.2.t': 'Warm, Courteous & Empathetic',
    'personal.soft.2.d': 'Thoughtful and caring communication in patient counseling and health consultations.',
    'personal.soft.3.t': 'Detail-Oriented & Zero Defect',
    'personal.soft.3.d': 'Rigorous double-checking in prescription screening, dosage calculation, and medication error prevention.',
    'personal.soft.4.t': 'Communicative & Collaborative',
    'personal.soft.4.d': 'Effective interprofessional coordination with doctors, nurses, and allied healthcare staff.',
    'personal.soft.5.t': 'Teamwork & Leadership',
    'personal.soft.5.d': 'Proven track record in managing organizational finances and thriving in collaborative pharmacy environments.',
    'personal.soft.6.t': 'Adaptive & Fast Learner',
    'personal.soft.6.d': 'Quickly mastering new clinical guidelines, drug formularies, and hospital pharmacy workflows.',

    // ── Contact Section
    'contact.label': 'CONTACT & INQUIRIES',
    'contact.title': 'Get in Touch',
    'contact.tagline': "A pharmacist oriented toward patient-centered pharmaceutical care.",
    'contact.subtitle': 'Open to professional career opportunities in hospital clinical pharmacy, community pharmacy, regulation, and pharmaceutical manufacturing.',
    'contact.chatNow': 'Contact Now',
    'contact.direct': 'Direct Communication Channels',
    'contact.directSub': 'Reach out via the channels below:',
    'contact.openHours': 'Response Hours:',
    'contact.openVal': 'Monday — Saturday (08:00 — 17:00 WIB)',
    'contact.location': 'LOCATION',
    'contact.phone': 'PHONE / WHATSAPP',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
