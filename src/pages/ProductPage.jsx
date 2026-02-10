import { useParams, Link } from 'react-router-dom'
import { Check, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-navy mb-4">Product Not Found</h1>
          <p className="font-body text-charcoal-light mb-8">
            We could not find the product you are looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-navy text-cream font-body font-semibold px-6 py-3 rounded-lg hover:bg-navy-dark transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-navy text-cream px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-cream font-body text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="font-body text-cream/80 text-lg mb-4 leading-relaxed">
                {product.tagline}
              </p>
              <p className="font-body text-cream/60 mb-6 leading-relaxed">
                {product.description}
              </p>
              <p className="font-body text-gold text-2xl font-semibold">
                {product.priceRange}
              </p>
            </div>
            <div className="bg-navy-dark rounded-2xl flex items-center justify-center h-72 lg:h-80 border border-cream/20">
              <p className="text-cream/50 font-body text-lg text-center px-8">
                Photography coming Spring 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-navy mb-10">Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-cream-dark rounded-lg p-4"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <Check className="w-5 h-5 text-gold-dark" />
                </div>
                <p className="font-body text-charcoal leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-cream-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-navy mb-4">
            Ready to design yours?
          </h2>
          <p className="font-body text-charcoal-light mb-8 leading-relaxed">
            Use our configurator to customize your {product.name} and get a preliminary estimate.
          </p>
          <Link
            to={'/design/' + product.id}
            className="bg-gold hover:bg-gold-dark text-navy font-body font-semibold px-10 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Design Yours
          </Link>
        </div>
      </section>
    </div>
  )
}
