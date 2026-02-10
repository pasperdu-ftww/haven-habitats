import { Plus, Minus } from 'lucide-react'
import { addOns } from '../../../data/products'

export default function AddOns({ config, setConfig }) {
  const selectedMap = {}
  config.selectedAddOns.forEach(a => { selectedMap[a.id] = a.quantity || 1 })

  const toggleAddOn = (addOnId) => {
    setConfig(prev => {
      const exists = prev.selectedAddOns.find(a => a.id === addOnId)
      if (exists) {
        return { ...prev, selectedAddOns: prev.selectedAddOns.filter(a => a.id !== addOnId) }
      }
      return { ...prev, selectedAddOns: [...prev.selectedAddOns, { id: addOnId, quantity: 1 }] }
    })
  }

  const updateQty = (addOnId, delta) => {
    setConfig(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.map(a => {
        if (a.id !== addOnId) return a
        const addOn = addOns.find(ao => ao.id === addOnId)
        const maxQty = addOn?.maxQty || 10
        const newQty = Math.max(1, Math.min(maxQty, (a.quantity || 1) + delta))
        return { ...a, quantity: newQty }
      }),
    }))
  }

  const runningTotal = config.selectedAddOns.reduce((sum, sel) => {
    const addOn = addOns.find(a => a.id === sel.id)
    return sum + (addOn ? addOn.price * (sel.quantity || 1) : 0)
  }, 0)

  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-2">Customize your habitat</h2>
      <p className="font-body text-charcoal-light mb-8">
        Add features to make it perfect. All add-ons are optional.
      </p>

      <div className="space-y-3">
        {addOns.map(addOn => {
          const selected = config.selectedAddOns.find(a => a.id === addOn.id)
          const isSelected = !!selected
          const qty = selected?.quantity || 1

          return (
            <div
              key={addOn.id}
              className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                isSelected ? 'border-gold bg-white' : 'border-cream-dark bg-white'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleAddOn(addOn.id)}
                  className="w-5 h-5 rounded accent-navy cursor-pointer"
                />
                <div className="flex-1">
                  <span className="font-body text-sm font-semibold text-charcoal">
                    {addOn.name}
                  </span>
                  <span className="font-body text-sm text-gold-dark ml-2">
                    ${addOn.price}
                    {addOn.hasQuantity ? ' each' : ''}
                  </span>
                </div>
              </div>

              {isSelected && addOn.hasQuantity && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(addOn.id, -1)}
                    className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center hover:bg-navy/10 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-body text-sm font-bold w-6 text-center">{qty}</span>
                  <button
                    onClick={() => updateQty(addOn.id, 1)}
                    className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center hover:bg-navy/10 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              )}

              {isSelected && (
                <span className="font-body text-sm font-bold text-navy ml-4 w-16 text-right">
                  ${addOn.price * qty}
                </span>
              )}
            </div>
          )
        })}
      </div>

      {runningTotal > 0 && (
        <div className="mt-6 p-4 bg-navy/5 rounded-xl flex justify-between items-center">
          <span className="font-body text-sm text-charcoal">Add-ons total</span>
          <span className="font-heading text-xl text-navy font-bold">
            ${runningTotal.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  )
}
