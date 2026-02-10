import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products, calculateEstimate } from '../../data/products'
import { submitDesign } from '../../services/webhooks'
import SelectProduct from './steps/SelectProduct'
import Dimensions from './steps/Dimensions'
import Materials from './steps/Materials'
import Seasonality from './steps/Seasonality'
import AddOns from './steps/AddOns'
import Summary from './steps/Summary'

const STEP_LABELS = ['Product', 'Dimensions', 'Material', 'Season', 'Add-Ons', 'Summary']

export default function Configurator() {
  const { productId: urlProductId } = useParams()

  const [step, setStep] = useState(1)
  const [config, setConfig] = useState({
    productId: urlProductId || '',
    width: null,
    depth: null,
    height: null,
    length: null,
    materialId: 'cedar',
    seasonId: 'three-season',
    selectedAddOns: [],
    contact: { name: '', email: '', phone: '', address: '', notes: '' },
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (urlProductId && products.find(p => p.id === urlProductId)) {
      setConfig(prev => ({ ...prev, productId: urlProductId }))
      setStep(2)
    }
  }, [urlProductId])

  const product = products.find(p => p.id === config.productId)

  const totalSteps = product?.hasAddOns ? 6 : 5
  const getStepLabels = () => {
    if (product?.hasAddOns) return STEP_LABELS
    return STEP_LABELS.filter(l => l !== 'Add-Ons')
  }

  // Map displayed step to actual step (skip add-ons if no add-ons)
  const getActualStep = (displayStep) => {
    if (product?.hasAddOns || displayStep <= 4) return displayStep
    return displayStep + 1 // skip step 5 (add-ons)
  }

  const actualStep = product?.hasAddOns ? step : (step <= 4 ? step : step + 1)

  const canAdvance = () => {
    if (step === 1) return !!config.productId
    return true
  }

  const next = () => {
    if (step < totalSteps && canAdvance()) setStep(step + 1)
  }
  const back = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    const estimate = calculateEstimate(config)
    await submitDesign(config, estimate)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl text-navy mb-4">Thank you!</h2>
          <p className="font-body text-charcoal-light mb-2">
            Your design has been submitted.
          </p>
          <p className="font-body text-charcoal-light">
            You'll hear from us within 48 hours.
          </p>
        </div>
      </div>
    )
  }

  const stepLabels = getStepLabels()

  const renderStep = () => {
    const actualStep = product?.hasAddOns ? step : (step <= 4 ? step : step + 1)
    switch (actualStep) {
      case 1: return <SelectProduct config={config} setConfig={setConfig} />
      case 2: return <Dimensions config={config} setConfig={setConfig} product={product} />
      case 3: return <Materials config={config} setConfig={setConfig} />
      case 4: return <Seasonality config={config} setConfig={setConfig} />
      case 5: return <AddOns config={config} setConfig={setConfig} product={product} />
      case 6: return <Summary config={config} setConfig={setConfig} onSubmit={handleSubmit} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy text-cream px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-3">
            Design Your Habitat
          </h1>
          <p className="font-body text-cream/60">
            Build your perfect outdoor space in just a few steps.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-cream-dark border-b border-cream-dark px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {stepLabels.map((label, i) => {
              const stepNum = i + 1
              const isActive = step === stepNum
              const isComplete = step > stepNum
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-colors ${
                        isActive
                          ? 'bg-navy text-cream'
                          : isComplete
                          ? 'bg-gold text-navy'
                          : 'bg-cream text-charcoal-muted border border-cream-dark'
                      }`}
                    >
                      {isComplete ? '✓' : stepNum}
                    </div>
                    <span className={`font-body text-xs mt-1 hidden sm:block ${
                      isActive ? 'text-navy font-semibold' : 'text-charcoal-muted'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div className={`flex-1 h-px mx-3 ${
                      step > stepNum ? 'bg-gold' : 'bg-cream-dark'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex justify-between items-center">
          <button
            onClick={back}
            disabled={step === 1}
            className={`font-body text-sm font-semibold px-6 py-3 rounded-lg transition-colors ${
              step === 1
                ? 'text-charcoal-muted cursor-not-allowed'
                : 'text-navy hover:bg-navy/5'
            }`}
          >
            Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={next}
              disabled={!canAdvance()}
              className={`font-body text-sm font-semibold px-8 py-3 rounded-lg transition-colors ${
                canAdvance()
                  ? 'bg-navy text-cream hover:bg-navy-dark'
                  : 'bg-charcoal-muted text-cream cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
