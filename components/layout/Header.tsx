import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-purple-900 hover:text-purple-700 transition-colors">
              UnderKey
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-purple-600 hover:text-purple-900 transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/about" className="text-purple-600 hover:text-purple-900 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-purple-600 hover:text-purple-900 transition-colors font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-900 hover:bg-purple-50 rounded-md transition-colors">
              Connexion
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 