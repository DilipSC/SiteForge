import { Home, FileText, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r border-border p-6 flex flex-col">
      <div className="text-2xl font-bold mb-8 text-foreground">SiteForge</div>
      <nav className="space-y-2 flex-1">
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-foreground hover:bg-secondary">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-foreground hover:bg-secondary">
          <FileText className="mr-2 h-4 w-4" />
          Projects
        </Button>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-foreground hover:bg-secondary">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
      <Button variant="ghost" className="w-full justify-start mt-auto text-muted-foreground hover:text-foreground hover:bg-secondary">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </aside>
  )
}

