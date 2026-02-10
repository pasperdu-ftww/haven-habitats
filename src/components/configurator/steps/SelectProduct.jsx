import { products } from '../../../data/products'
import {
  Maximize2, Home, RefreshCw, Hexagon, ArrowRightLeft, Heart,
} from 'lucide-react'

const iconMap = {
  Maximize2, Home, RefreshCw, Hexagon, ArrowRightLeft, Heart,
}

export default function SelectProduct({ config, setConfig }) {
  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-2">What are we building?</h2>
      <p className="font-body text-charcoal-light mb-8">
        Select the type of habitat that fits your situation.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => {
          const Icon = iconMap[product.icon] || Maximize2
          const isSelected = config.productId === product.id
          return (
            <button
              key={product.id}
              onClick={() => setConfig(prev => ({ ...prev, productId: product.id }))}
              className={`text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-gold bg-navy text-cream shadow-lg'
                  : 'border-cream-dark bg-white hover:border-gold/50 hover:shadow-md'
              }`}
            >
              <Icon className={`w-8 h-8 mb-3 ${isSelected ? 'text-gold' : 'text-navy'}`} />
              <h3 className={`font-heading text-xl font-bold mb-1 ${isSelected ? 'text-cream' : 'text-navy'}`}>
                {product.name}
              </h3>
              <p className={`font-body text-sm mb-3 leading-relaxed ${isSelected ? 'text-cream/70' : 'text-charcoal-light'}`}>
                {product.tagline}
              </p>
              <span className={`font-body text-xs font-semibold ${isSelected ? 'text-gold' : 'text-gold-dark'}`}>
                {product.priceRange}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
