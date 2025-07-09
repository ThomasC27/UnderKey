import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            Bienvenue sur UnderKey ! 🚀
          </h1>
          <p className="text-center text-xl text-purple-700 max-w-2xl mx-auto">
            Votre projet Next.js est prêt à être développé avec un magnifique thème violet et bleu
          </p>
        </div>
        
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <a
            href="https://nextjs.org/docs"
            className="group rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm px-6 py-8 transition-all hover:border-purple-300 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-purple-900">
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm text-purple-600 opacity-80">
              Trouvez des informations détaillées sur les fonctionnalités et l&apos;API de Next.js.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="group rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm px-6 py-8 transition-all hover:border-purple-300 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-purple-900">
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm text-purple-600 opacity-80">
              Apprenez Next.js dans un cours interactif avec des quiz !
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js"
            className="group rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm px-6 py-8 transition-all hover:border-purple-300 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-purple-900">
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm text-purple-600 opacity-80">
              Explorez la galerie de templates Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm px-6 py-8 transition-all hover:border-purple-300 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-purple-900">
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm text-purple-600 opacity-80">
              Déployez instantanément votre app Next.js sur Vercel.
            </p>
          </a>
        </div>
      </div>
    </main>
  )
} 