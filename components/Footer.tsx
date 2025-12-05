'use client'

import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const tContact = useTranslations('contato')

  return (
    <footer className="bg-dark-900 text-gray-300 border-t border-dark-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Factory Info */}
          <div>
            <h3 className="text-primary-500 font-bold mb-4">{tContact('factory')}</h3>
            <p className="text-sm mb-2">{tContact('address')}</p>
            <p className="text-sm">{tContact('phone')}</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-primary-500 font-bold mb-4">#wearebastards</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/bastardsbrewery"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://instagram.com/bardafabricabastards"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
                aria-label="Bar da Fábrica Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://instagram.com/wearebastardspub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
                aria-label="We Are Bastards Pub Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-primary-500 font-bold mb-4">Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/manifesto" className="block hover:text-primary-500 transition-colors">
                Manifesto
              </Link>
              <Link href="/rotulos" className="block hover:text-primary-500 transition-colors">
                Rótulos
              </Link>
              <Link href="/contato" className="block hover:text-primary-500 transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800 text-center text-sm">
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}

