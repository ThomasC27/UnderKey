import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-purple-200 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">UnderKey</h3>
            <p className="text-purple-700 text-sm">
              Une application Next.js moderne pour tous vos besoins.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-purple-900">Navigation</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-purple-900">Support</h4>
            <div className="space-y-2">
              <Link href="/help" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                Aide
              </Link>
              <Link href="/faq" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium text-purple-900">Suivez-nous</h4>
            <div className="space-y-2">
              <a href="#" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                GitHub
              </a>
              <a href="#" className="block text-purple-600 hover:text-purple-900 text-sm transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-200">
          <p className="text-center text-purple-700 text-sm">
            © 2024 UnderKey. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 