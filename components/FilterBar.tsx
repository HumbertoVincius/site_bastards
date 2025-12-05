'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  const t = useTranslations('rotulos')

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter
              ? 'bg-primary-500 text-white'
              : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
          }`}
        >
          {filter === 'all' ? t('filterAll') : filter}
        </motion.button>
      ))}
    </div>
  )
}

