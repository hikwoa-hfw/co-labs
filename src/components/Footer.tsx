"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { cormorant, montserrat } from "@/app/font"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className={`${montserrat.className} w-full`}>
      <div className="bg-[#1a1a1a] rounded-3xl mx-auto max-w-7xl my-8 px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <h2 className={`${cormorant.className} text-white text-3xl font-bold`}>Co-Labs</h2>
            <div className="space-y-6">
              <p className="text-gray-300">Join our newsletter to stay up to date on features and releases.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-sm">
                By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our
                company.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <h3 className="text-white font-bold uppercase tracking-wider">Explore More</h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Co-Labs. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-700 transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-gray-700 transition-colors">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  )
}

