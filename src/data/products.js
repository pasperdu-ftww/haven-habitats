// Haven Habitats — Product Data & Pricing Calculator
// Founded by Desta Marée and Sarah | Twin Cities, Minnesota

export const products = [
  {
    id: 'window-float',
    name: 'Window Float',
    tagline: 'Mounts to any window. Your simplest path to outdoor access.',
    description: 'The Window Float is a secure, weather-resistant enclosure that mounts directly to your window frame, giving your cat safe outdoor access without any structural modifications to your home. Perfect for apartments, condos, and renters.',
    priceRange: '$1,500 – $3,000',
    baseRate: 40,
    defaultDimensions: { width: 4, depth: 2, height: 3 },
    minDimensions: { width: 2, depth: 1, height: 2 },
    maxDimensions: { width: 8, depth: 4, height: 5 },
    hasAddOns: false,
    features: [
      'Mounts to standard window frames',
      'No permanent structural changes',
      'Heavy-gauge steel mesh',
      'Weather-resistant roof panel',
      'Renter-friendly installation',
      'Removable for cleaning',
    ],
    icon: 'Maximize2',
  },
  {
    id: 'the-attachment',
    name: 'The Attachment',
    tagline: 'A screened room built onto your house. Fully customizable.',
    description: 'The Attachment is a fully enclosed outdoor room that connects directly to your home through a door, window, or dedicated cat door. Custom-built to your specifications with premium materials rated for Minnesota weather.',
    priceRange: '$5,000 – $15,000',
    baseRate: 55,
    defaultDimensions: { width: 8, depth: 6, height: 8 },
    minDimensions: { width: 4, depth: 4, height: 6 },
    maxDimensions: { width: 20, depth: 16, height: 12 },
    hasAddOns: true,
    features: [
      'Connects directly to your home',
      'Custom dimensions to fit your space',
      'Full-height screened walls',
      'Solid roof with drainage',
      'Lockable human-sized door',
      'Optional cat door integration',
    ],
    icon: 'Home',
  },
  {
    id: 'the-conversion',
    name: 'The Conversion',
    tagline: 'Transform your existing porch, deck, or patio.',
    description: 'Already have a great outdoor space? The Conversion transforms your existing porch, deck, or patio into a fully enclosed pet habitat. We work with your existing structure to add screening, roofing, and all the features your animals need.',
    priceRange: '$5,000 – $15,000',
    baseRate: 45,
    defaultDimensions: { width: 12, depth: 8, height: 8 },
    minDimensions: { width: 6, depth: 4, height: 6 },
    maxDimensions: { width: 30, depth: 20, height: 12 },
    hasAddOns: true,
    features: [
      'Uses your existing structure',
      'Preserves your outdoor living space',
      'Full screening and weatherproofing',
      'Maintains home aesthetics',
      'Often faster to build',
      'Cost-effective premium option',
    ],
    icon: 'RefreshCw',
  },
  {
    id: 'the-gazebo',
    name: 'The Gazebo',
    tagline: 'Freestanding habitat. Connected by tunnel. Our premium build.',
    description: 'The Gazebo is our flagship product — a freestanding, climate-ready structure placed anywhere in your yard and connected to your home by an enclosed tunnel system. Maximum space, maximum features, maximum freedom for your animals.',
    priceRange: '$8,000 – $25,000',
    baseRate: 65,
    defaultDimensions: { width: 10, depth: 10, height: 9 },
    minDimensions: { width: 6, depth: 6, height: 7 },
    maxDimensions: { width: 20, depth: 20, height: 14 },
    hasAddOns: true,
    features: [
      'Freestanding — place anywhere in your yard',
      'Connected via enclosed tunnel',
      'Maximum interior space',
      'Four-season capable',
      'Premium construction',
      'Full customization options',
    ],
    icon: 'Hexagon',
  },
  {
    id: 'the-tunnel',
    name: 'The Tunnel',
    tagline: 'Connect any structure to your house or to each other.',
    description: 'The Tunnel is the connective tissue of the Haven system. Enclosed, weather-resistant passageways that connect your home to any habitat — or connect multiple habitats together. Priced per linear foot.',
    priceRange: '$75 – $150 / linear ft',
    baseRate: 125,
    isTunnel: true,
    defaultLength: 10,
    minLength: 4,
    maxLength: 100,
    defaultDimensions: { width: 2, depth: 2, height: 2 },
    minDimensions: { width: 2, depth: 2, height: 2 },
    maxDimensions: { width: 2, depth: 2, height: 2 },
    hasAddOns: false,
    features: [
      'Enclosed weather-resistant design',
      'Connects home to habitat',
      'Link multiple structures together',
      'Heavy-gauge mesh for visibility',
      'Modular — extend anytime',
      'Elevated or ground-level options',
    ],
    icon: 'ArrowRightLeft',
  },
  {
    id: 'the-foster-kit',
    name: 'The Foster Kit',
    tagline: 'Standalone unit designed for rescue and fostering.',
    description: 'Purpose-built for rescue organizations, foster families, and multi-animal households that need dedicated, separate outdoor space. The Foster Kit is a self-contained habitat with everything an animal needs — designed for easy cleaning and safe containment.',
    priceRange: '$2,500 – $5,000',
    baseRate: 50,
    defaultDimensions: { width: 6, depth: 4, height: 7 },
    minDimensions: { width: 4, depth: 3, height: 5 },
    maxDimensions: { width: 12, depth: 8, height: 9 },
    hasAddOns: true,
    features: [
      'Self-contained design',
      'Easy-clean surfaces',
      'Secure containment',
      'Isolation-capable for new fosters',
      'Humane Society partnership pricing',
      'Stackable / modular options',
    ],
    icon: 'Heart',
  },
]

export const materials = [
  {
    id: 'pressure-treated',
    name: 'Pressure-Treated Lumber',
    description: 'Budget-friendly. Durable. Weather-resistant.',
    multiplier: 1.0,
    color: '#8B7355',
    label: 'Standard',
  },
  {
    id: 'cedar',
    name: 'Cedar',
    description: 'Our most popular. Naturally rot and insect resistant. Weathers to a beautiful silver-gray.',
    multiplier: 1.3,
    color: '#B5651D',
    label: '+30%',
    popular: true,
  },
  {
    id: 'redwood',
    name: 'Redwood',
    description: 'Premium. Rich color. Maximum longevity.',
    multiplier: 1.6,
    color: '#8B2500',
    label: '+60%',
  },
]

export const seasonOptions = [
  {
    id: 'three-season',
    name: 'Three-Season',
    description: 'Spring through fall. Mesh screening, weather-treated roof.',
    multiplier: 1.0,
    priceNote: 'No additional cost',
  },
  {
    id: 'four-season',
    name: 'Four-Season',
    description: 'Year-round Minnesota. Insulated panels, sealed construction, optional heated elements.',
    multiplier: 1.25,
    priceNote: '+25%',
  },
]

export const addOns = [
  { id: 'shelf', name: 'Shelving / Perch', price: 75, hasQuantity: true, maxQty: 10 },
  { id: 'ramp', name: 'Ramp / Climbing Feature', price: 150, hasQuantity: true, maxQty: 5 },
  { id: 'rope-bridge', name: 'Rope Bridge', price: 175, hasQuantity: true, maxQty: 4 },
  { id: 'hammock', name: 'Hammock / Bed Platform', price: 100, hasQuantity: true, maxQty: 6 },
  { id: 'litter-box', name: 'Litter Box Station', price: 250, hasQuantity: false },
  { id: 'heated-pad', name: 'Heated Pad', price: 175, hasQuantity: true, maxQty: 4 },
  { id: 'cat-door', name: 'Cat Door with Frame', price: 350, hasQuantity: false },
  { id: 'tunnel-connection', name: 'Tunnel Connection Point', price: 200, hasQuantity: true, maxQty: 4 },
  { id: 'viewing-window', name: 'Viewing Window / Clear Panel', price: 275, hasQuantity: true, maxQty: 6 },
  { id: 'planting-shelf', name: 'Non-Toxic Planting Shelf', price: 125, hasQuantity: false },
]

export function calculateEstimate(config) {
  const product = products.find(p => p.id === config.productId)
  if (!product) return null

  const material = materials.find(m => m.id === config.materialId) || materials[0]
  const season = seasonOptions.find(s => s.id === config.seasonId) || seasonOptions[0]

  let baseCost, sqft, length
  if (product.isTunnel) {
    length = config.length || product.defaultLength
    baseCost = product.baseRate * length
    sqft = null
  } else {
    const w = config.width || product.defaultDimensions.width
    const d = config.depth || product.defaultDimensions.depth
    sqft = w * d
    baseCost = sqft * product.baseRate
  }

  const materialCost = baseCost * material.multiplier
  const seasonCost = materialCost * season.multiplier
  const seasonUpcharge = seasonCost - materialCost

  let addOnTotal = 0
  const addOnBreakdown = []
  if (config.selectedAddOns) {
    config.selectedAddOns.forEach(({ id, quantity }) => {
      const addOn = addOns.find(a => a.id === id)
      if (addOn) {
        const qty = quantity || 1
        const lineTotal = addOn.price * qty
        addOnTotal += lineTotal
        addOnBreakdown.push({ name: addOn.name, qty, unitPrice: addOn.price, lineTotal })
      }
    })
  }

  const total = seasonCost + addOnTotal

  return {
    product: product.name,
    sqft,
    length,
    baseRate: product.baseRate,
    baseCost: Math.round(baseCost),
    material: material.name,
    materialMultiplier: material.multiplier,
    materialCost: Math.round(materialCost),
    season: season.name,
    seasonUpcharge: Math.round(seasonUpcharge),
    addOnBreakdown,
    addOnTotal: Math.round(addOnTotal),
    total: Math.round(total),
  }
}
