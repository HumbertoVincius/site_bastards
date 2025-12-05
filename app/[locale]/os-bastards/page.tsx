import { mockFounders } from '@/lib/sanity/mock-data'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function OsBastardsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  
  // Usa dados mock diretamente
  const founders = mockFounders

  return (
    <section className="min-h-screen py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center text-primary-500">
          {t('bastards.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder: any) => {
            // Usa apenas imagem local
            const imageUrl = founder.localImage || null
            
            return (
              <div
                key={founder._id}
                className="bg-dark-800 rounded-lg overflow-hidden text-center"
              >
                {imageUrl && (
                  <div className="relative w-full h-64 bg-dark-700">
                    <Image
                      src={imageUrl}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized={founder.localImage ? true : false}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-500 mb-2">
                    {founder.name}
                  </h3>
                  {founder.bio && (
                    <p className="text-gray-300">{founder.bio}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

