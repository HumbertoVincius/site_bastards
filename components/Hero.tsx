'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/navigation'

export default function Hero() {
  const t = useTranslations('home')

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary-500">
            {t('title')}
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-8">
            {t('subtitle')}
          </p>
          <Link
            href="/manifesto"
            className="inline-block px-8 py-3 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
          >
            {t('readMore')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

