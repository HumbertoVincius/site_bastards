'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/image-url'
import { motion } from 'framer-motion'

interface BeerCardProps {
  name: string
  type: string
  image?: any
  slug?: { current: string }
  onClick?: () => void
}

export default function BeerCard({ name, type, image, slug, onClick }: BeerCardProps) {
  const imageUrl = image ? urlFor(image).width(400).height(400).url() : null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-dark-800 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative w-full h-64 bg-dark-700">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400 capitalize">{type}</p>
      </div>
    </motion.div>
  )
}

