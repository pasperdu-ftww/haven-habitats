import { Snowflake, Sun } from 'lucide-react'
import { seasonOptions } from '../../../data/products'

export default function Seasonality({ config, setConfig }) {
  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-2">Three-season or four-season?</h2>
      <p className="font-body text-charcoal-light mb-8">
        Minnesota demands weather-hardened construction. We build for the climate you choose.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {seasonOptions.map(option => {
          const isSelected = config.seasonId === option.id
          const isFourSeason = option.id === 'four-season'
          return (
            <button
              key={option.id}
              onClick={() => setConfig(prev => ({ ...prev, seasonId: option.id }))}
              className={`text-left p-8 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-gold bg-white shadow-lg'
                  : 'border-cream-dark bg-white hover:border-gold/50'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                isFourSeason ? 'bg-navy/10' : 'bg-gold/10'
              }`}>
                {isFourSeason
                  ? <Snowflake className="w-7 h-7 text-navy" />
                  : <Sun className="w-7 h-7 text-gold-dark" />
                }
              </div>
              <h3 className="font-heading text-2xl text-navy font-bold mb-2">
                {option.name}
              </h3>
              <p className="font-body text-sm text-charcoal-light mb-4 leading-relaxed">
                {option.description}
              </p>
              <span className={`font-body text-sm font-bold ${
                isFourSeason ? 'text-gold-dark' : 'text-charcoal'
              }`}>
                {option.priceNote}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
