import { setRequestLocale } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'

export default async function GlobalNotFound() {
  const locale = await getLocale()
  setRequestLocale(locale)

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Página não encontrada</p>
        <Link
          href={`/${locale}`}
          className="inline-block px-6 py-2 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}

