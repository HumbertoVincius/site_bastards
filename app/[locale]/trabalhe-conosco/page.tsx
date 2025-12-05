'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Building2, Factory } from 'lucide-react'

type LocationType = 'pub' | 'fabrica' | null

export default function TrabalheConoscoPage() {
  const t = useTranslations('trabalheConosco')
  const [selectedLocation, setSelectedLocation] = useState<LocationType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    resume: null as File | null,
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedLocation) {
      alert(t('selectLocationError'))
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('location', formData.location)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('message', formData.message || '')
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        alert(t('successMessage'))
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          position: '',
          experience: '',
          resume: null,
          message: '',
        })
        setSelectedLocation(null)
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement
        if (fileInput) {
          fileInput.value = ''
        }
      } else {
        alert(t('errorMessage') || 'Erro ao enviar candidatura. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert(t('errorMessage') || 'Erro ao enviar candidatura. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  const handleLocationSelect = (location: 'pub' | 'fabrica') => {
    setSelectedLocation(location)
    setFormData({
      ...formData,
      location: location === 'pub' ? t('pub') : t('fabrica'),
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

        {/* Location Selection */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-primary-500 mb-6 text-center">
            {t('selectLocation')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              type="button"
              onClick={() => handleLocationSelect('pub')}
              className={`p-8 rounded-lg border-2 transition-all ${
                selectedLocation === 'pub'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-dark-700 bg-dark-800 hover:border-primary-500/50'
              }`}
            >
              <Building2 
                className={`mx-auto mb-4 ${
                  selectedLocation === 'pub' ? 'text-primary-500' : 'text-gray-400'
                }`} 
                size={48} 
              />
              <h3 className={`text-xl font-bold mb-2 ${
                selectedLocation === 'pub' ? 'text-primary-500' : 'text-gray-300'
              }`}>
                {t('pub')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('pubDescription')}
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleLocationSelect('fabrica')}
              className={`p-8 rounded-lg border-2 transition-all ${
                selectedLocation === 'fabrica'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-dark-700 bg-dark-800 hover:border-primary-500/50'
              }`}
            >
              <Factory 
                className={`mx-auto mb-4 ${
                  selectedLocation === 'fabrica' ? 'text-primary-500' : 'text-gray-400'
                }`} 
                size={48} 
              />
              <h3 className={`text-xl font-bold mb-2 ${
                selectedLocation === 'fabrica' ? 'text-primary-500' : 'text-gray-300'
              }`}>
                {t('fabrica')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('fabricaDescription')}
              </p>
            </button>
          </div>
        </div>

        {/* Application Form */}
        {selectedLocation && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">
                {t('formTitle')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {t('name')} *
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
                    {t('email')} *
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
                    {t('phone')} *
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
                  <label htmlFor="position" className="block text-gray-300 mb-2">
                    {t('position')} *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    placeholder={t('positionPlaceholder')}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-gray-300 mb-2">
                    {t('experience')} *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder={t('experiencePlaceholder')}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-gray-300 mb-2">
                    {t('resume')} *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    {t('resumeHint')}
                  </p>
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
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded text-white focus:outline-none focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? t('submitting') || 'Enviando...' : t('submit')}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

