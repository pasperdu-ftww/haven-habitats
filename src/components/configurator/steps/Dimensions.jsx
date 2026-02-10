export default function Dimensions({ config, setConfig, product }) {
  if (!product) return null

  const isTunnel = product.isTunnel

  const handleChange = (field, value) => {
    const num = parseFloat(value) || 0
    setConfig(prev => ({ ...prev, [field]: num }))
  }

  const w = config.width || product.defaultDimensions.width
  const d = config.depth || product.defaultDimensions.depth
  const h = config.height || product.defaultDimensions.height
  const len = config.length || product.defaultLength || 10
  const sqft = isTunnel ? null : w * d

  const DimensionInput = ({ label, field, value, min, max, unit = 'ft' }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="font-body text-sm font-semibold text-charcoal">{label}</label>
        <span className="font-body text-sm text-navy font-bold">{value} {unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(e) => handleChange(field, e.target.value)}
        className="w-full h-2 bg-cream-dark rounded-lg appearance-none cursor-pointer accent-navy"
      />
      <div className="flex justify-between font-body text-xs text-charcoal-muted">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  )

  return (
    <div>
      <h2 className="font-heading text-3xl text-navy mb-2">How big are we thinking?</h2>
      <p className="font-body text-charcoal-light mb-8">
        Adjust dimensions for your <span className="font-semibold text-charcoal">{product.name}</span>. Even rough estimates help — we verify everything on site.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-6">
          {isTunnel ? (
            <DimensionInput
              label="Length"
              field="length"
              value={len}
              min={product.minLength}
              max={product.maxLength}
            />
          ) : (
            <>
              <DimensionInput
                label="Width"
                field="width"
                value={w}
                min={product.minDimensions.width}
                max={product.maxDimensions.width}
              />
              <DimensionInput
                label="Depth"
                field="depth"
                value={d}
                min={product.minDimensions.depth}
                max={product.maxDimensions.depth}
              />
              <DimensionInput
                label="Height"
                field="height"
                value={h}
                min={product.minDimensions.height}
                max={product.maxDimensions.height}
              />
            </>
          )}
        </div>

        {/* Visual Preview */}
        <div className="flex flex-col items-center justify-center">
          {isTunnel ? (
            <div className="relative">
              <div
                className="bg-navy/5 border-2 border-navy/20 rounded-lg flex items-center justify-center"
                style={{ width: `${Math.min(len * 4, 320)}px`, height: '60px' }}
              >
                <span className="font-body text-sm text-navy font-semibold">{len} ft</span>
              </div>
              <p className="font-body text-xs text-charcoal-muted mt-2 text-center">
                {len} linear feet
              </p>
            </div>
          ) : (
            <div className="relative">
              <div
                className="bg-navy/5 border-2 border-navy/20 rounded-lg transition-all duration-300 flex items-center justify-center"
                style={{
                  width: `${Math.min(w * 20, 320)}px`,
                  height: `${Math.min(h * 20, 240)}px`,
                }}
              >
                <div className="text-center">
                  <span className="font-heading text-2xl text-navy font-bold">{sqft}</span>
                  <span className="font-body text-sm text-charcoal-muted block">sq ft</span>
                </div>
              </div>
              <p className="font-body text-xs text-charcoal-muted mt-2 text-center">
                {w}' W &times; {d}' D &times; {h}' H
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
