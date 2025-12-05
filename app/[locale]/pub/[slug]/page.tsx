import { mockPubs } from '@/lib/sanity/mock-data'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  // Usa dados mock diretamente
  return mockPubs.map((pub: any) => ({
    slug: pub.slug.current,
  }))
}

export default async function PubPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  
  // Busca pub nos dados mock
  const pub = mockPubs.find((p: any) => p.slug.current === slug) || null

  if (!pub) {
    notFound()
  }

  // Usa apenas imagens locais
  const imageUrl = pub.localImage || null

  return (
    <section className="min-h-screen py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-primary-500">
          {pub.name}
        </h1>

        {imageUrl && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={pub.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 rounded-lg p-8">
            {pub.description && (
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {pub.description}
              </p>
            )}
            {pub.address && (
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-500 mb-2">Endereço</h3>
                <p className="text-gray-300">{pub.address}</p>
              </div>
            )}
            {pub.hours && (
              <div>
                <h3 className="text-xl font-bold text-primary-500 mb-2">Horários</h3>
                <p className="text-gray-300">{pub.hours}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

