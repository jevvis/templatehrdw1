'use client'

const pharmacyTools = [
  {
    number: '01',
    title: 'Sistem Informasi Rumah Sakit (SIMRS / EHR) & E-Prescribing',
    description: 'Pemanfaatan sistem rekam medis elektronik dan modul peresepan digital untuk verifikasi alur skrining resep, pelacakan dispensing, dan rekonsiliasi obat rawat inap.',
  },
  {
    number: '02',
    title: 'Pengolahan Data Inventori & Monitoring Stok (MS Excel)',
    description: 'Penyusunan spreadsheet rekapitulasi perbekalan farmasi, pemantauan tanggal kedaluwarsa (FEFO/FIFO), analisis stok minimum, dan kontrol persediaan depo obat.',
  },
  {
    number: '03',
    title: 'Penyusunan Standard Operating Procedure (SOP) & Dokumen Mutu',
    description: 'Penyusunan dokumen SOP pelayanan resep, dispensing sediaan steril/non-steril, tata kelola penyimpanan obat LASA (Look-Alike Sound-Alike), dan High Alert.',
  },
  {
    number: '04',
    title: 'Desain Media Infografis Edukasi Obat Pasien (Canva)',
    description: 'Pembuatan materi komunikasi visual, leaflet informasi penggunaan antibiotik bijak, tata cara penggunaan sediaan khusus (inhaler, tetes mata), dan edukasi swamedikasi.',
  },
  {
    number: '05',
    title: 'Verifikasi Administrasi & Rekapitulasi Pelayanan PRB BPJS',
    description: 'Tata kelola pendataan pasien penyakit kronis dalam Program Rujuk Balik BPJS Kesehatan, mencakup verifikasi berkas rujukan dan pencatatan obat rutin 30 hari.',
  },
]

export default function DigitalProjects() {
  return (
    <section id="digital" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">SISTEM INFORMASI & DOKUMENTASI KEFARMASIAN</p>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-3">Tools Digital & Manajemen Pelayanan</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Pemanfaatan perangkat lunak sistem kesehatan, administrasi berbasis spreadsheet, penyusunan SOP mutu, dan media edukasi visual untuk pelayanan berorientasi pasien.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pharmacyTools.map((project) => (
            <div
              key={project.number}
              className="relative group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden p-6 min-h-[280px] flex flex-col justify-end hover:border-[var(--muted)] transition-colors"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-[120px] font-black text-[var(--foreground)] opacity-[0.03] leading-none select-none">
                {project.number}
              </span>

              {/* Placeholder icon area */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[var(--card-border)] to-transparent flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--muted)] opacity-40">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <span className="text-[10px] tracking-widest text-emerald-500 font-semibold uppercase mb-1 block">
                  DIGITAL PHARMACY #{project.number}
                </span>
                <h3 className="font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
