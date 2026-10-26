'use client'

const techColors: Record<string, string> = {
  'Farmasi Klinis': 'bg-emerald-600',
  PTO: 'bg-blue-600',
  'Keselamatan Pasien': 'bg-rose-600',
  'Skrining Resep': 'bg-indigo-600',
  Dispensing: 'bg-cyan-600',
  'Konseling Pasien': 'bg-purple-600',
  PIO: 'bg-amber-600',
  'Patient Education': 'bg-teal-600',
  'Unit Dose': 'bg-green-700',
  'Distribusi Obat': 'bg-blue-700',
  'Farmasi RS': 'bg-sky-600',
  'PRB BPJS': 'bg-emerald-700',
  'Farmasi Komunitas': 'bg-indigo-700',
  Swamedikasi: 'bg-violet-600',
  'Pengelolaan Obat': 'bg-orange-600',
  'Stok Opname': 'bg-amber-700',
  Puskesmas: 'bg-teal-700',
  'Industri Farmasi': 'bg-rose-700',
  GMP: 'bg-purple-700',
  'In-Process Control': 'bg-cyan-700',
  'Quality Control': 'bg-blue-600',
  'Disolusi & LOD': 'bg-indigo-600',
  'Analisis Farmasi': 'bg-emerald-600',
  'Regulatory Affairs': 'bg-red-600',
  'Kemenkes RI': 'bg-sky-700',
  'Izin Edar': 'bg-purple-600',
  Praktikum: 'bg-green-600',
  'Asisten Dosen': 'bg-amber-600',
  Farmakologi: 'bg-teal-600',
  Budgeting: 'bg-blue-600',
  'Financial Control': 'bg-emerald-600',
  'BEM UI': 'bg-yellow-600',
  'Bendahara HMJ': 'bg-purple-600',
  Cashflow: 'bg-cyan-600',
  Akuntabilitas: 'bg-rose-600',
}

const projects = [
  {
    number: '01',
    title: 'Pemantauan Terapi Obat (PTO) Pasien Stroke Iskemik & Hemoragik',
    description: 'Mengkaji ketepatan indikasi, dosis, respons terapi, potensi medication error, serta Drug Related Problems (DRP) pada pasien stroke di bawah supervisi apoteker RSUP Dr. Kariadi.',
    framework: 'FARMASI KLINIS — RSUP DR. KARIADI SEMARANG',
    techStack: ['Farmasi Klinis', 'PTO', 'Keselamatan Pasien'],
    link: '#',
  },
  {
    number: '02',
    title: 'Skrining Resep, Dispensing & Evaluasi Rasionalitas Terapi',
    description: 'Pelayanan obat mulai dari penerimaan resep, skrining administratif, farmasetik, dan klinis, penyiapan, peracikan, pemeriksaan ulang, hingga penyerahan obat pulang.',
    framework: 'PELAYANAN KEFARMASIAN — RSUP DR. KARIADI',
    techStack: ['Skrining Resep', 'Dispensing', 'Farmasi Klinis'],
    link: '#',
  },
  {
    number: '03',
    title: 'Konseling Pasien Terapi ARV & Edukasi Kepatuhan Obat',
    description: 'Berpartisipasi aktif dalam konseling pasien ARV di instalasi rawat jalan, memberikan edukasi jadwal konsumsi, efek samping, dan pentingnya kepatuhan minum obat.',
    framework: 'KONSELING & EDUKASI — RSUP DR. KARIADI',
    techStack: ['Konseling Pasien', 'PIO', 'Patient Education'],
    link: '#',
  },
  {
    number: '04',
    title: 'Penerapan Sistem Distribusi Unit Dose 1 × 24 Jam Rawat Inap',
    description: 'Memperoleh pengalaman operasional dalam distribusi obat unit dose rawat inap dan pengelolaan perbekalan farmasi untuk tindakan operasi terjadwal serta emergensi.',
    framework: 'DISTRIBUSI OBAT — RSUP DR. KARIADI',
    techStack: ['Unit Dose', 'Distribusi Obat', 'Farmasi RS'],
    link: '#',
  },
  {
    number: '05',
    title: 'Pelayanan Program Rujuk Balik (PRB) BPJS & Swamedikasi',
    description: 'Mendukung pelayanan PRB BPJS melalui verifikasi administrasi dan penyiapan obat kronis serta memberikan informasi swamedikasi rasional kepada masyarakat.',
    framework: 'FARMASI KOMUNITAS — APOTEK KIMIA FARMA CIKOKOL',
    techStack: ['PRB BPJS', 'Farmasi Komunitas', 'Swamedikasi'],
    link: '#',
  },
  {
    number: '06',
    title: 'Pengelolaan Sediaan Farmasi & Stok Opname Fasilitas Primer',
    description: 'Mendukung siklus perencanaan, pengadaan, penyimpanan, hingga pemusnahan sediaan farmasi serta melakukan stok opname untuk mencegah obat kedaluwarsa.',
    framework: 'PELAYANAN PRIMER — PUSKESMAS CENGKARENG',
    techStack: ['Pengelolaan Obat', 'Stok Opname', 'Puskesmas'],
    link: '#',
  },
  {
    number: '07',
    title: 'Produksi Sediaan Solid, Line Clearance & In-Process Control (IPC)',
    description: 'Terlibat dalam alur penimbangan, granulasi basah, pencetakan tablet sediaan padat, pelaksanaan Line Clearance, dan verifikasi In-Process Control sesuai standar CPOB.',
    framework: 'MANUFAKTUR FARMASI — PT BIO FARMA (PERSERO)',
    techStack: ['Industri Farmasi', 'GMP', 'In-Process Control'],
    link: '#',
  },
  {
    number: '08',
    title: 'Pengujian Mutu Quality Control (QC) Fisik & Kimiawi Sediaan',
    description: 'Mendukung pengujian mutu laboratorium QC mencakup penetapan kadar, disolusi, keseragaman bobot, kekerasan, friabilitas, pH, dan Loss on Drying (LOD).',
    framework: 'QUALITY CONTROL — PT BIO FARMA (PERSERO)',
    techStack: ['Quality Control', 'Disolusi & LOD', 'Analisis Farmasi'],
    link: '#',
  },
  {
    number: '09',
    title: 'Regulasi Peredaran & Alur Registrasi Alat Kesehatan Nasional',
    description: 'Mempelajari dan mengevaluasi regulasi tata kelola peredaran alat kesehatan di Indonesia, tahapan registrasi izin edar baru, registrasi ulang, dan berkas teknis pendukung.',
    framework: 'REGULATORY AFFAIRS — KEMENTERIAN KESEHATAN RI',
    techStack: ['Regulatory Affairs', 'Kemenkes RI', 'Izin Edar'],
    link: '#',
  },
  {
    number: '10',
    title: 'Asistensi & Bimbingan Praktikum Farmakologi 6 Kelas Reguler',
    description: 'Membimbing mahasiswa farmasi, menyiapkan instrumen uji laboratorium, menyelenggarakan pre-test, dan mengevaluasi hasil laporan praktikum farmakologi.',
    framework: 'PENDIDIKAN AKADEMIK — UNIVERSITAS INDONESIA',
    techStack: ['Praktikum', 'Asisten Dosen', 'Farmakologi'],
    link: '#',
  },
  {
    number: '11',
    title: 'Budgeting & Financial Controlling Organisasi Kemahasiswaan BEM UI',
    description: 'Menjalankan fungsi penganggaran dan kontrol keuangan organisasi, menyusun laporan pembukuan berkala yang transparan dan akuntabel.',
    framework: 'ORGANISASI MAHASISWA — BEM UNIVERSITAS INDONESIA',
    techStack: ['Budgeting', 'Financial Control', 'BEM UI'],
    link: '#',
  },
  {
    number: '12',
    title: 'Pengelolaan Arus Kas & Laporan Pertanggungjawaban HMJ Farmasi',
    description: 'Merencanakan belanja operasional satu periode kepengurusan dan menyusun laporan pertanggungjawaban (LPJ) keuangan organisasi secara tertib.',
    framework: 'KEUANGAN ORGANISASI — HMJ FARMASI UI',
    techStack: ['Bendahara HMJ', 'Cashflow', 'Akuntabilitas'],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PORTOFOLIO KEFARMASIAN & PENGALAMAN</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Klinis, Industri & Organisasi</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Dokumentasi rekam jejak praktik farmasi klinis rumah sakit, pelayanan komunitas, pengujian mutu industri farmasi, regulasi alat kesehatan Kemenkes, dan kepemimpinan kemahasiswaan.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColors[tech] || 'bg-gray-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
