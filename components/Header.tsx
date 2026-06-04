'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Shop All', href: '#products' },
    { label: 'Kitchen', href: '#products' },
    { label: 'Home', href: '#products' },
    { label: 'Decor', href: '#products' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-kasaoli-cream border-b border-gray-200">
      <div className="container-main">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-kasaoli-green rounded-full flex items-center justify-center">
              <span className="text-kasaoli-gold font-bold text-lg">◉</span>
            </div>
            <span className="text-2xl font-serif font-bold text-kasaoli-charcoal">KasaOli</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-kasaoli-charcoal uppercase letter-spacing tracking-wide hover:text-kasaoli-gold transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-kasaoli-charcoal hover:text-kasaoli-gold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-kasaoli-charcoal hover:text-kasaoli-gold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 10m10 0l2-10m-2 10h4" />
              </svg>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-kasaoli-rust text-white text-xs flex items-center justify-center rounded-full">0</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-kasaoli-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-kasaoli-charcoal uppercase hover:text-kasaoli-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
