import { materials } from '../../../data/products'

export default function Materials({ config, setConfig }) {
  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-2">Choose your material</h2>
      <p className="font-body text-charcoal-light mb-8">
        All materials are rated for Minnesota weather. The difference is in the look, the feel, and the longevity.
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {materials.map(material => {
          const isSelected = config.materialId === material.id
          return (
            <button
              key={material.id}
              onClick={() => setConfig(prev => ({ ...prev, materialId: material.id }))}
              className={`text-left p-6 rounded-xl border-2 transition-all duration-200 relative ${
                isSelected
                  ? 'border-gold bg-white shadow-lg'
                  : 'border-cream-dark bg-white hover:border-gold/50'
              }`}
            >
              {material.popular && (
                <span className="absolute -top-3 left-4 bg-gold text-navy font-body text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div
                className="w-12 h-12 rounded-full mb-4 border-2 border-cream-dark"
                style={{ backgroundColor: material.color }}
              />
              <h3 className="font-heading text-xl text-navy font-bold mb-1">
                {material.name}
              </h3>
              <p className="font-body text-sm text-charcoal-light mb-3 leading-relaxed">
                {material.description}
              </p>
              <span className={`font-body text-sm font-bold ${
                material.multiplier === 1.0 ? 'text-charcoal' : 'text-gold-dark'
              }`}>
                {material.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
