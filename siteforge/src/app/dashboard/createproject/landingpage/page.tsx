'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function EnhancedLandingPageGenerator() {
  const [formData, setFormData] = useState({
    hero: {
      title: '',
      subtitle: '',
      description: '',
      ctaText: '',
    },
    features: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
    ],
    about: {
      title: '',
      content: '',
    },
    footer: {
      companyName: '',
      year: new Date().getFullYear(),
    },
  })

  const handleInputChange = (section: string, index: number | null = null) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => {
      if (index !== null) {
        return {
          ...prevState,
          [section]: prevState[section].map((item, i) => 
            i === index ? { ...item, [name]: value } : item
          )
        }
      }
      return {
        ...prevState,
        [section]: { ...prevState[section], [name]: value }
      }
    })
  }

  const generateCode = () => {
    // TODO: Implement code generation logic
    console.log('Generating code with:', formData)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">SiteForge--Makes Backend Devs Life Jingalala</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  name="title"
                  value={formData.hero.title}
                  onChange={handleInputChange('hero')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="hero-subtitle">Subtitle</Label>
                <Input
                  id="hero-subtitle"
                  name="subtitle"
                  value={formData.hero.subtitle}
                  onChange={handleInputChange('hero')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  name="description"
                  value={formData.hero.description}
                  onChange={handleInputChange('hero')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="hero-ctaText">CTA Button Text</Label>
                <Input
                  id="hero-ctaText"
                  name="ctaText"
                  value={formData.hero.ctaText}
                  onChange={handleInputChange('hero')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Features Section</h2>
            {formData.features.map((feature, index) => (
              <div key={index} className="space-y-4 mb-4">
                <div>
                  <Label htmlFor={`feature-title-${index}`}>Feature {index + 1} Title</Label>
                  <Input
                    id={`feature-title-${index}`}
                    name="title"
                    value={feature.title}
                    onChange={handleInputChange('features', index)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
                <div>
                  <Label htmlFor={`feature-description-${index}`}>Feature {index + 1} Description</Label>
                  <Textarea
                    id={`feature-description-${index}`}
                    name="description"
                    value={feature.description}
                    onChange={handleInputChange('features', index)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">About Section</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="about-title">About Title</Label>
                <Input
                  id="about-title"
                  name="title"
                  value={formData.about.title}
                  onChange={handleInputChange('about')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="about-content">About Content</Label>
                <Textarea
                  id="about-content"
                  name="content"
                  value={formData.about.content}
                  onChange={handleInputChange('about')}
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Footer Section</h2>
            <div>
              <Label htmlFor="footer-companyName">Company Name</Label>
              <Input
                id="footer-companyName"
                name="companyName"
                value={formData.footer.companyName}
                onChange={handleInputChange('footer')}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
          </div>

          <Button onClick={generateCode} className="w-full">Generate Code</Button>
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border border-gray-700 p-6 rounded-lg overflow-y-auto max-h-[800px]">
            <header className="mb-6">
              <nav className="flex justify-between items-center">
                <div className="text-xl font-bold">Logo</div>
                <ul className="flex space-x-4">
                  <li>Home</li>
                  <li>Features</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </header>

            <main>
              {/* Hero Section */}
              <section className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{formData.hero.title || 'Your Awesome Title'}</h1>
                <h2 className="text-2xl mb-4">{formData.hero.subtitle || 'Your Catchy Subtitle'}</h2>
                <p className="mb-6">{formData.hero.description || 'Your compelling description goes here. Explain what makes your product or service unique and why visitors should care.'}</p>
                <Button>{formData.hero.ctaText || 'Call to Action'}</Button>
              </section>

              {/* Features Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {formData.features.map((feature, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle>{feature.title || `Feature ${index + 1}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description || 'Description of this amazing feature.'}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* About Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{formData.about.title || 'About Us'}</h2>
                <p>{formData.about.content || 'Learn more about our company and our mission. We are dedicated to providing the best service to our customers.'}</p>
              </section>
            </main>

            {/* Footer */}
            <footer className="mt-12 text-center text-sm text-gray-500">
              © {formData.footer.year} {formData.footer.companyName || 'Your Company'}. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

