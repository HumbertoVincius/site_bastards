'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { fetchWithFallback, isSanityConfigured } from '@/lib/sanity/client'
import { beersQuery } from '@/lib/sanity/queries'
import { mockBeers } from '@/lib/sanity/mock-data'
import BeerCard from '@/components/BeerCard'
import FilterBar from '@/components/FilterBar'

export default function RotulosPage() {
  const t = useTranslations('rotulos')
  const [beers, setBeers] = useState<any[]>([])
  const [filteredBeers, setFilteredBeers] = useState<any[]>([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBeers() {
      const data = await fetchWithFallback(beersQuery, mockBeers)
      setBeers(data)
      setFilteredBeers(data)
      setLoading(false)
    }
    fetchBeers()
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredBeers(beers)
    } else {
      setFilteredBeers(beers.filter((beer) => beer.type === activeFilter))
    }
  }, [activeFilter, beers])

  const filters = [
    'all',
    'american india pale ale',
    'american pale ale',
    'gin',
    'imperial india pale lager',
    'new england indian pale ale',
    'oatmeal stout',
    'premium lager',
    'witbier',
    'várias',
  ]

  if (loading) {
    return (
      <section className="min-h-screen py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">Carregando...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-primary-500">
          {t('title')}
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {filteredBeers.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            {t('noBeers')}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBeers.map((beer) => (
              <BeerCard
                key={beer._id}
                name={beer.name}
                type={beer.type}
                image={beer.image}
                slug={beer.slug}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

