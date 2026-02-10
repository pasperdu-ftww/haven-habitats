// Haven Habitats — n8n Webhook Integration
// Webhooks: desta-nation.app.n8n.cloud

const N8N_BASE = 'https://desta-nation.app.n8n.cloud/webhook'

// Configurator design submission
const CONFIGURATOR_WEBHOOK = `${N8N_BASE}/haven-configurator`

// Contact form submission
const CONTACT_WEBHOOK = `${N8N_BASE}/haven-contact`

export async function submitDesign(config, estimate) {
  const payload = {
    // Contact
    name: config.contact.name,
    email: config.contact.email,
    phone: config.contact.phone,
    address: config.contact.address,
    notes: config.contact.notes,

    // Design selections
    product: estimate.product,
    product_id: config.productId,
    dimensions: config.productId === 'the-tunnel'
      ? { length: config.length }
      : { width: config.width, depth: config.depth, height: config.height },
    material: estimate.material,
    material_id: config.materialId,
    season: estimate.season,
    season_id: config.seasonId,
    add_ons: estimate.addOnBreakdown || [],

    // Estimate
    sqft: estimate.sqft,
    base_cost: estimate.baseCost,
    material_cost: estimate.materialCost,
    season_upcharge: estimate.seasonUpcharge,
    add_on_total: estimate.addOnTotal,
    preliminary_estimate: estimate.total,

    // Meta
    submitted_at: new Date().toISOString(),
    source: 'haven-habitats.com/design',
  }

  try {
    const response = await fetch(CONFIGURATOR_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`Webhook error: ${response.status}`)
    return { success: true }
  } catch (error) {
    console.error('Configurator webhook failed:', error)
    // Still return success to the user — we log the submission locally
    console.log('HAVEN DESIGN SUBMISSION (webhook failed, logged locally):', payload)
    return { success: true, webhookFailed: true }
  }
}

export async function submitContact(formData) {
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    submitted_at: new Date().toISOString(),
    source: 'haven-habitats.com/contact',
  }

  try {
    const response = await fetch(CONTACT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`Webhook error: ${response.status}`)
    return { success: true }
  } catch (error) {
    console.error('Contact webhook failed:', error)
    console.log('HAVEN CONTACT SUBMISSION (webhook failed, logged locally):', payload)
    return { success: true, webhookFailed: true }
  }
}
