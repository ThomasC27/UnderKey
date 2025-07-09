import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          </div>
          
          <nav className="flex-1 p-6 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              🏠 Accueil
            </Link>
            <Link 
              href="/dashboard" 
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              📊 Dashboard
            </Link>
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              👤 Profil
            </Link>
            <Link 
              href="/settings" 
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              ⚙️ Paramètres
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="/help" 
                className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                ❓ Aide
              </Link>
              <Link 
                href="/logout" 
                className="block px-4 py-2 text-red-600 rounded-md hover:bg-red-50 transition-colors"
              >
                🚪 Déconnexion
              </Link>
            </div>
          </nav>
        </div>
        
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 lg:hidden"
        >
          ✕
        </button>
      </div>
    </>
  )
} 