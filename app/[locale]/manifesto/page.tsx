import { client } from '@/lib/sanity/client'
import { manifestoQuery } from '@/lib/sanity/queries'
import { getTranslations } from 'next-intl/server'

export default async function ManifestoPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations()
  
  const manifesto = await client.fetch(manifestoQuery).catch(() => null)
  const content = manifesto?.content || t('home.manifestoText')

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center text-primary-500">
            {t('home.manifestoTitle')}
          </h1>
          <div className="bg-dark-800/50 rounded-lg p-8 md:p-12 backdrop-blur-sm border border-dark-700">
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
              {content}
            </p>
            <p className="text-3xl md:text-4xl font-bold text-primary-500 text-center italic mt-12">
              {t('home.manifestoEnd')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

