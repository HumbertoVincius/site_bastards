'use client'

import { Link, usePathname } from '@/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/manifesto', label: t('manifesto') },
    { href: '/rotulos', label: t('rotulos') },
    { href: '/tour', label: t('tour') },
    { href: '/eventos', label: t('eventos') },
    { href: '/contato', label: t('contato') },
    { href: '/store', label: t('store') },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === '/' || pathname === `/${locale}/`
    }
    return pathname.includes(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-500">
            BASTARDS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-500'
                    : 'text-gray-300 hover:text-primary-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              locale={locale === 'pt' ? 'en' : 'pt'}
              className="text-sm font-medium text-gray-300 hover:text-primary-500"
            >
              {locale === 'pt' ? 'English' : 'Português'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-500'
                    : 'text-gray-300 hover:text-primary-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              locale={locale === 'pt' ? 'en' : 'pt'}
              className="block text-sm font-medium text-gray-300 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {locale === 'pt' ? 'English' : 'Português'}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

