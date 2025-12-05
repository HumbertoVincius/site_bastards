'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { MapPin, Phone } from 'lucide-react'

export default function ContatoPage() {
  const t = useTranslations('contato')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Mensagem enviada! Entraremos em contato em breve.')
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
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center text-primary-500">
          {t('title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary-500 mb-6">
              {t('factory')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary-500 mt-1" size={20} />
                <p className="text-gray-300">{t('address')}</p>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-primary-500 mt-1" size={20} />
                <p className="text-gray-300">{t('phone')}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">
              {t('sendMessage')}
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
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
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
                  required
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

