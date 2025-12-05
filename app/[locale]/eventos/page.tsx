import { fetchWithFallback } from '@/lib/sanity/client'
import { eventsQuery } from '@/lib/sanity/queries'
import { mockEvents } from '@/lib/sanity/mock-data'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import { urlFor } from '@/lib/image-url'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function EventosPage({ params }: { params: { locale: string } }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()
  
  const events = await fetchWithFallback(eventsQuery, mockEvents)

  return (
    <section className="min-h-screen py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center text-primary-500">
          {t('eventos.title')}
        </h1>

        {events.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            {t('eventos.noEvents')}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event: any) => {
              const imageUrl = event.image ? urlFor(event.image)?.width(600)?.height(400)?.url() || null : null
              return (
                <div
                  key={event._id}
                  className="bg-dark-800 rounded-lg overflow-hidden"
                >
                  {imageUrl && (
                    <div className="relative w-full h-48 bg-dark-700">
                      <Image
                        src={imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">
                      {event.title}
                    </h3>
                    {event.date && (
                      <p className="text-sm text-gray-400 mb-2">
                        {formatDate(event.date)}
                      </p>
                    )}
                    {event.location && (
                      <p className="text-sm text-gray-400 mb-4">
                        {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-gray-300">{event.description}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

