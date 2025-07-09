import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              UnderKey
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              Connexion
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 