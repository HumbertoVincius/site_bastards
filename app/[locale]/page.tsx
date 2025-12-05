import Hero from '@/components/Hero'
import { Link } from '@/navigation'
import { fetchWithFallback } from '@/lib/sanity/client'
import { beersQuery } from '@/lib/sanity/queries'
import { mockBeers } from '@/lib/sanity/mock-data'
import BeerCard from '@/components/BeerCard'
import { getTranslations } from 'next-intl/server'

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params
  const t = await getTranslations()
  
  // Fetch featured beers (limit to 6) com fallback para dados mock
  const allBeers = await fetchWithFallback(beersQuery, mockBeers)
  const beers = allBeers.slice(0, 6)

  return (
    <>
      <Hero />
      
      {/* Manifesto Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary-500">
            {t('home.manifestoTitle')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              {t('home.manifestoText')}
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary-500 text-center italic">
              {t('home.manifestoEnd')}
            </p>
            <div className="text-center mt-8">
              <Link
                href="/manifesto"
                className="inline-block px-6 py-2 border-2 border-primary-500 text-primary-500 font-bold rounded hover:bg-primary-500 hover:text-white transition-colors"
              >
                {t('home.readMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brewery Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary-500">
            {t('home.breweryTitle')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              {t('home.breweryText')}
            </p>
            <p className="text-lg text-gray-400 mb-8">
              {t('home.breweryLocation')}
            </p>
            <div className="text-center">
              <Link
                href="/rotulos"
                className="inline-block px-6 py-2 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
              >
                {t('home.knowBeers')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beers */}
      {beers.length > 0 && (
        <section className="py-20 bg-dark-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-500">
              {t('rotulos.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beers.map((beer: any) => (
                <BeerCard
                  key={beer._id}
                  name={beer.name}
                  type={beer.type}
                  image={beer.image}
                  slug={beer.slug}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/rotulos"
                className="inline-block px-6 py-2 border-2 border-primary-500 text-primary-500 font-bold rounded hover:bg-primary-500 hover:text-white transition-colors"
              >
                Ver todos os rótulos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Pubs Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-500">
            Nossos Pubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link
              href="/pub/we-are-bastards"
              className="bg-dark-800 rounded-lg p-8 hover:bg-dark-700 transition-colors"
            >
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                We Are Bastards Pub
              </h3>
              <p className="text-gray-300 mb-4">
                Av. Iguaçu, 2300 – Água Verde, Curitiba – PR
              </p>
              <p className="text-gray-400">
                Localizado na Av. Iguaçu conta com um cardápio extenso focado em rangos com carne de porco, drinks pra meter o louco e claro, um taplist com 32 torneiras de beras de linha Bastards e convidadas.
              </p>
            </Link>
            <Link
              href="/pub/bar-da-fabrica"
              className="bg-dark-800 rounded-lg p-8 hover:bg-dark-700 transition-colors"
            >
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Bar da Fábrica
              </h3>
              <p className="text-gray-300 mb-4">
                Rua Comendador Lustoza de Andrade, 69 – Bom Retiro, Curitiba/PR
              </p>
              <p className="text-gray-400">
                Um bar dentro da fábrica bastarda, que proporciona aos clientes uma experiência completa e a visualização da produção de cervejas de dentro do bar.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

