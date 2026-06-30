"use client"

import type React from "react"

import Link from "next/link"
import { cormorant, montserrat } from "@/app/font"

export default function Footer() {

  return (
    <footer className={`${montserrat.className} w-full`}>
      <div className="bg-[#1a1a1a] rounded-3xl mx-auto max-w-7xl my-8 px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <h2 className={`${cormorant.className} text-white text-3xl font-bold`}>Co-Labs</h2>
            <div className="space-y-6 max-w-sm">
              <p className="text-gray-300 leading-relaxed">
                Empowering your work environment with flexible, modern coworking spaces. Whether you're an independent freelancer or a growing team, we have the perfect spot for you to thrive and collaborate.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-200 transition-colors inline-block">
                  Contact Us
                </Link>
              </div>
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
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  {/* <Link href="/blog" className="text-gray-300 hover:text-white transition-colors"> */}
                  <div className="text-gray-300 hover:text-white transition-colors hover:cursor-not-allowed">
                    Blog (coming soon)
                  </div>
                  {/* </Link> */}
                </li>
                <li>
                  <div className="text-gray-300 hover:text-white transition-colors hover:cursor-not-allowed">
                    Events (coming soon)
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Co-Labs. All rights reserved.</p>
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

