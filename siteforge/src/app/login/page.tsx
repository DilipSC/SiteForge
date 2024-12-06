'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChromeIcon as Google } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt', { email, password })
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic
    console.log('Google login attempt')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-400">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 rounded-xl">
              Sign in
            </Button>
          </div>
          <div className="mt-4">
            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center rounded-xl"
            >
              <Google className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Link href="/" className="mt-8 flex items-center text-sm text-gray-400 hover:text-white">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
    </div>
  )
}

