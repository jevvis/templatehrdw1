import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'
import DigitalProjects from '@/components/DigitalProjects'

export const metadata = {
  title: 'Pengalaman & Portofolio | apt. Hafizah Nurfadillah, S.Farm',
  description: 'Pengalaman Farmasi Klinis, Komunitas, Industri, dan Regulasi',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      <DigitalProjects />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} apt. Hafizah Nurfadillah, S.Farm. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
