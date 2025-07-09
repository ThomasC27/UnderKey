import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">UnderKey</h3>
            <p className="text-gray-600 text-sm">
              Une application Next.js moderne pour tous vos besoins.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900">Navigation</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-900 text-sm">
                Accueil
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 text-sm">
                À propos
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900">Support</h4>
            <div className="space-y-2">
              <Link href="/help" className="block text-gray-600 hover:text-gray-900 text-sm">
                Aide
              </Link>
              <Link href="/faq" className="block text-gray-600 hover:text-gray-900 text-sm">
                FAQ
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-gray-900 text-sm">
                Confidentialité
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900">Suivez-nous</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">
                Twitter
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">
                GitHub
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © 2024 UnderKey. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 