import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProjectGrid } from "@/components/project-grid"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background text-foreground text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Your Projects</h1>
          <ProjectGrid />
        </main>
      </div>
    </div>
  )
}

