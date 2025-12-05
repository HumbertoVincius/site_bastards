import { Link } from '@/navigation'

export default function StorePage() {
  return (
    <section className="min-h-screen py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center text-primary-500">
          Store
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            Em breve, nossa loja online estará disponível!
          </p>
          <p className="text-gray-400 mb-8">
            Enquanto isso, entre em contato conosco para adquirir nossos produtos.
          </p>
          <Link
            href="/contato"
            className="inline-block px-6 py-2 bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  )
}

