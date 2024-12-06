import { Bell, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-background border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Input
          type="search"
          placeholder="Search projects..."
          className="w-64 bg-secondary text-foreground border-input"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" className="text-foreground hover:text-foreground hover:bg-secondary">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="text-foreground hover:text-foreground">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>
    </header>
  )
}

