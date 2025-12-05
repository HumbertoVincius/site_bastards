import { client } from '@/lib/sanity/client'
import { pubBySlugQuery, pubsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/image-url'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const pubs = await client.fetch(pubsQuery).catch(() => [])
  return pubs.map((pub: any) => ({
    slug: pub.slug.current,
  }))
}

export default async function PubPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const pub = await client.fetch(pubBySlugQuery, { slug }).catch(() => null)

  if (!pub) {
    notFound()
  }

  const mainImage = pub.images?.[0]
  const imageUrl = mainImage ? urlFor(mainImage).width(1200).height(600).url() : null

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

          {pub.images && pub.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {pub.images.slice(1).map((image: any, index: number) => {
                const imgUrl = urlFor(image).width(600).height(400).url()
                return (
                  <div
                    key={index}
                    className="relative w-full h-48 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${pub.name} - Imagem ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

