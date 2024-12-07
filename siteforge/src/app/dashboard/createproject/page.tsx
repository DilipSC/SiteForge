import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const components = [
  { name: 'Header', description: 'Top section of the website, often contains logo and main navigation' },
  { name: 'Footer', description: 'Bottom section of the website, often contains secondary links and copyright info' },
  { name: 'Navigation Menu', description: 'Main menu for website navigation' },
  { name: 'Hero Section', description: 'Large, prominent area at the top of a homepage' },
  { name: 'About Section', description: 'Area dedicated to describing the website owner or company' },
  { name: 'Services/Features Section', description: 'Highlights key services or features offered' },
  { name: 'Testimonials', description: 'Displays customer reviews or testimonials' },
  { name: 'Contact Form', description: 'Allows visitors to send messages or inquiries' },
  { name: 'Blog Post', description: 'Individual blog article template' },
  { name: 'Image Gallery', description: 'Displays a collection of images' },
  { name: 'Call to Action (CTA)', description: 'Prompts visitors to take a specific action' },
  { name: 'Pricing Table', description: 'Displays pricing information for products or services' },
]

export default function ComponentSelector() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Choose a Component</h1>
          <Link href="/dashboard">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((component) => (
            <Card key={component.name} className="bg-black border-white">
              <CardHeader>
                <CardTitle className="text-white">{component.name}</CardTitle>
                <CardDescription className="text-white">{component.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Build {component.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

