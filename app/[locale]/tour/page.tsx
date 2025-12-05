'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function TourPage() {
  const t = useTranslations('tour')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Formulário enviado! Entraremos em contato em breve.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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

        <div className="max-w-2xl mx-auto">
          <div className="bg-dark-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">
              {t('formTitle')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-300 mb-2">
                  {t('date')}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

