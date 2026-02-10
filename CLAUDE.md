# Haven — Project Context

## Overview
Haven is the parent brand for a female-founded, female-built construction company based in the Twin Cities, Minnesota. Founded by Desta Marée (business/technology) and Sarah (licensed contractor/builder).

### Brand Architecture
- **Haven Habitats** (Phase 1 — NOW) — Pet habitats: catios, screened rooms, gazebos, tunnel systems, foster kits
- **Haven Houses** (Phase 2 — FUTURE) — Accessory dwelling units (ADUs) for aging baby boomers

### Domains
- haven-habitats.com / .org / .net
- haven-houses.com / .org / .net

## Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Deployment:** Netlify (target)
- **Workflows:** n8n (desta-nation.app.n8n.cloud)
- **Voice Agent:** Vapi + Claude API + ElevenLabs
- **CRM:** Google Sheets (via n8n)

## Brand Guidelines

### Colors
```
Primary (Navy):     #1B365D
Accent (Gold):      #C5A572
Background (Cream): #FAF8F5
Text (Charcoal):    #2D2D2D
Light Navy:         #E8EDF4
```

### Typography
- **Headers:** Cormorant Garamond (bold) — `font-heading`
- **Body:** Montserrat (regular) — `font-body`

### Design Rules
- Clean, minimal, premium
- No cutesy cat graphics or paw prints
- Photography-forward (real builds, real cats, real Minnesota)
- Gold accent for dividers, highlights, CTAs
- Navy for headers and primary buttons
- NOT a cutesy cat company — this is a construction business

### Tagline
- Primary: "Every animal deserves a haven."
- Secondary: "Safe space. Fresh air. Built by hand."
- Identity: "Female-Founded. Female-Built. Minnesota-Made."

## Contact
- **Phone:** 1-218-50-HAVEN (1-218-504-2836)
- **Email:** hello@haven-habitats.com
- **Owner:** Desta Marée / Desta-Nation AI Agency (creator@desta-nation.com)

## Haven Agent
- **Name:** Haven
- **Platform:** Vapi
- **Model:** Claude API (claude-sonnet-4-20250514)
- **Voice:** ElevenLabs (voice ID: wIFOplCh3zfRb4NoonDc)
- **Phone:** 1-218-50-HAVEN
- **Role:** Intake and design consultant — guides clients through habitat design interview

## Products (Haven Habitats)

| Product | Base Rate | Price Range |
|---------|-----------|-------------|
| Window Float | $40/sq ft | $1,500 – $3,000 |
| The Attachment | $55/sq ft | $5,000 – $15,000 |
| The Conversion | $45/sq ft | $5,000 – $15,000 |
| The Gazebo | $65/sq ft | $8,000 – $25,000 |
| The Tunnel | $125/linear ft | $75 – $150/ft |
| The Foster Kit | $50/sq ft | $2,500 – $5,000 |

### Materials
- Pressure-Treated Lumber: 1.0x (standard)
- Cedar: 1.3x (most popular)
- Redwood: 1.6x (premium)

### Seasonality
- Three-Season: no upcharge
- Four-Season: +25% (insulated for Minnesota winters)

## Project Structure
```
haven/
├── index.html
├── package.json
├── vite.config.js
├── CLAUDE.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css               # Tailwind + theme variables
│   ├── data/
│   │   └── products.js         # Products, materials, seasons, add-ons, calculator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── configurator/
│   │       ├── Configurator.jsx    # Main 6-step orchestrator
│   │       └── steps/
│   │           ├── SelectProduct.jsx
│   │           ├── Dimensions.jsx
│   │           ├── Materials.jsx
│   │           ├── Seasonality.jsx
│   │           ├── AddOns.jsx
│   │           └── Summary.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── ProductPage.jsx
│       ├── ConfiguratorPage.jsx
│       ├── OurStoryPage.jsx
│       ├── BuildProcessPage.jsx
│       ├── GalleryPage.jsx
│       └── ContactPage.jsx
```

## Routes
| Path | Page |
|------|------|
| `/` | Home |
| `/products/:productId` | Product detail |
| `/design` | Configurator |
| `/design/:productId` | Configurator (pre-selected) |
| `/our-story` | Our Story |
| `/build-process` | Build Process |
| `/gallery` | Gallery |
| `/contact` | Contact |

## n8n Webhooks (to configure)
1. **Configurator Submission** — receives design config + contact info
2. **Contact Form** — receives name, email, phone, message
3. **Haven Agent End-of-Call** — receives Vapi call transcript/summary

## Payment Model
1. Deposit: $500 – $1,000 (secures site visit)
2. 50% of remaining balance (before construction)
3. Final payment on installation day

## What's Complete
- [x] Full React site with 8 routes
- [x] 6-step design configurator with real pricing logic
- [x] All 6 product pages
- [x] Navy/gold/cream brand theme via Tailwind
- [x] Responsive header with mobile menu
- [x] Footer with contact info
- [x] Build process walkthrough
- [x] Gallery placeholder (ready for photos)
- [x] Contact page with form

## Pending / Next
- [ ] Connect configurator submit to n8n webhook
- [ ] Connect contact form to n8n webhook
- [ ] Add Haven chat widget (Vapi)
- [ ] Real photography (Spring 2026 builds)
- [ ] Deploy to Netlify on haven-habitats.com
- [ ] Haven Houses product line (Phase 2)

## Useful Commands
```bash
cd ~/Downloads/haven
npm run dev       # Start dev server on :5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## About Haven Habitats
Haven Habitats builds outdoor structures that give animals safe access to the outdoors — from simple window-mounted enclosures to freestanding climate-controlled gazebos connected by tunnel systems. Every product in the line exists on Desta's own property. Supporters of the Humane Society since 2007.

We solve real problems: fostering capacity for rescue organizations, allergen separation for households, landlord-friendly pet solutions for renters, and safe outdoor access in a climate that demands weather-hardened construction.

This is NOT a cutesy cat company. This is a construction business that builds premium outdoor living structures for pets.
