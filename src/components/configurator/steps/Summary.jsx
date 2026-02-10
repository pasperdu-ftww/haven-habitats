import { useState } from 'react'
import { products, materials, seasonOptions, addOns, calculateEstimate } from '../../../data/products'

export default function Summary({ config, setConfig, onSubmit }) {
  const [errors, setErrors] = useState({})

  const product = products.find(p => p.id === config.productId)
  const material = materials.find(m => m.id === config.materialId)
  const season = seasonOptions.find(s => s.id === config.seasonId)
  const estimate = calculateEstimate(config)

  const updateContact = (field, value) => {
    setConfig(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }))
  }

  const validate = () => {
    const errs = {}
    if (!config.contact.name.trim()) errs.name = 'Required'
    if (!config.contact.email.trim()) errs.email = 'Required'
    if (!config.contact.phone.trim()) errs.phone = 'Required'
    if (!config.contact.address.trim()) errs.address = 'Required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) onSubmit()
  }

  if (!estimate || !product) return null

  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-1">Your Haven Habitat</h2>
      <div className="w-16 h-0.5 bg-gold mb-8" />

      {/* Summary Card */}
      <div className="bg-white border border-cream-dark rounded-xl p-6 mb-8">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <span className="font-body text-xs text-charcoal-muted uppercase tracking-wider">Product</span>
            <p className="font-heading text-lg text-navy font-bold">{product.name}</p>
          </div>
          <div>
            <span className="font-body text-xs text-charcoal-muted uppercase tracking-wider">Material</span>
            <p className="font-heading text-lg text-navy font-bold">{material?.name}</p>
          </div>
          <div>
            <span className="font-body text-xs text-charcoal-muted uppercase tracking-wider">
              {product.isTunnel ? 'Length' : 'Dimensions'}
            </span>
            <p className="font-heading text-lg text-navy font-bold">
              {product.isTunnel
                ? `${estimate.length} linear ft`
                : `${config.width || product.defaultDimensions.width}' × ${config.depth || product.defaultDimensions.depth}' × ${config.height || product.defaultDimensions.height}' (${estimate.sqft} sq ft)`
              }
            </p>
          </div>
          <div>
            <span className="font-body text-xs text-charcoal-muted uppercase tracking-wider">Season</span>
            <p className="font-heading text-lg text-navy font-bold">{season?.name}</p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="border-t border-cream-dark pt-4 space-y-2">
          <div className="flex justify-between font-body text-sm">
            <span className="text-charcoal-light">
              Base structure ({product.isTunnel ? `${estimate.length} ft` : `${estimate.sqft} sq ft`} × ${estimate.baseRate}/{product.isTunnel ? 'ft' : 'sq ft'})
            </span>
            <span className="text-charcoal font-semibold">${estimate.baseCost.toLocaleString()}</span>
          </div>
          {estimate.materialMultiplier > 1 && (
            <div className="flex justify-between font-body text-sm">
              <span className="text-charcoal-light">{estimate.material} upgrade (×{estimate.materialMultiplier})</span>
              <span className="text-charcoal font-semibold">${estimate.materialCost.toLocaleString()}</span>
            </div>
          )}
          {estimate.seasonUpcharge > 0 && (
            <div className="flex justify-between font-body text-sm">
              <span className="text-charcoal-light">Four-season upgrade (+25%)</span>
              <span className="text-charcoal font-semibold">+${estimate.seasonUpcharge.toLocaleString()}</span>
            </div>
          )}
          {estimate.addOnBreakdown.map((item, i) => (
            <div key={i} className="flex justify-between font-body text-sm">
              <span className="text-charcoal-light">
                {item.name} {item.qty > 1 ? `× ${item.qty}` : ''}
              </span>
              <span className="text-charcoal font-semibold">+${item.lineTotal.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-baseline pt-3 border-t border-cream-dark">
            <span className="font-body text-sm font-semibold text-charcoal">Preliminary Estimate</span>
            <span className="font-heading text-3xl text-gold-dark font-bold">
              ${estimate.total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="font-body text-xs text-charcoal-muted bg-cream-dark rounded-lg px-4 py-3 mb-8">
        This estimate is preliminary and based on standard configurations. Final pricing is confirmed after an on-site measurement by our builder.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-heading text-xl text-navy font-bold">How can we reach you?</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm font-semibold text-charcoal mb-1">Full Name *</label>
            <input
              type="text"
              value={config.contact.name}
              onChange={e => updateContact('name', e.target.value)}
              className={`w-full font-body px-4 py-3 rounded-lg border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 ${errors.name ? 'border-red-400' : 'border-cream-dark'}`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-charcoal mb-1">Email *</label>
            <input
              type="email"
              value={config.contact.email}
              onChange={e => updateContact('email', e.target.value)}
              className={`w-full font-body px-4 py-3 rounded-lg border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 ${errors.email ? 'border-red-400' : 'border-cream-dark'}`}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-charcoal mb-1">Phone *</label>
            <input
              type="tel"
              value={config.contact.phone}
              onChange={e => updateContact('phone', e.target.value)}
              className={`w-full font-body px-4 py-3 rounded-lg border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 ${errors.phone ? 'border-red-400' : 'border-cream-dark'}`}
              placeholder="(612) 555-0100"
            />
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-charcoal mb-1">Property Address *</label>
            <input
              type="text"
              value={config.contact.address}
              onChange={e => updateContact('address', e.target.value)}
              className={`w-full font-body px-4 py-3 rounded-lg border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 ${errors.address ? 'border-red-400' : 'border-cream-dark'}`}
              placeholder="123 Main St, Minneapolis, MN"
            />
          </div>
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-charcoal mb-1">Anything else we should know?</label>
          <textarea
            value={config.contact.notes}
            onChange={e => updateContact('notes', e.target.value)}
            rows={3}
            className="w-full font-body px-4 py-3 rounded-lg border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 resize-vertical"
            placeholder="Number of cats, timeline, special requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold hover:bg-gold-dark text-navy font-body text-lg font-bold py-4 rounded-xl transition-colors duration-200 mt-4"
        >
          Submit Your Design
        </button>
      </form>
    </div>
  )
}
