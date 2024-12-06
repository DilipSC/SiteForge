import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  { id: 1, name: "Personal Blog", lastUpdated: "2 days ago" },
  { id: 2, name: "Portfolio Site", lastUpdated: "1 week ago" },
  { id: 3, name: "E-commerce Landing", lastUpdated: "3 weeks ago" },
  { id: 4, name: "Documentation Site", lastUpdated: "1 month ago" },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Last updated: {project.lastUpdated}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" className="text-foreground hover:text-foreground hover:bg-secondary">Edit</Button>
            <Button variant="outline" size="sm" className="text-foreground hover:text-foreground hover:bg-secondary">Preview</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

