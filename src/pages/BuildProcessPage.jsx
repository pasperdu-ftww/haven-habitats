import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Clock,
  CreditCard,
  Ruler,
  FileText,
  Banknote,
  Hammer,
  BadgeDollarSign,
  Smile,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Talk to Haven or use the configurator',
    description:
      'Start a conversation with us or use our online configurator to tell us about your space, your animals, and what you are looking for.',
    icon: MessageCircle,
  },
  {
    number: 2,
    title: 'Receive preliminary estimate within 48 hours',
    description:
      'We will review your details and send you a ballpark estimate so you know what to expect before moving forward.',
    icon: Clock,
  },
  {
    number: 3,
    title: 'Pay deposit ($500 – $1,000)',
    description:
      'A deposit secures your spot in our build queue and covers initial design and planning work.',
    icon: CreditCard,
  },
  {
    number: 4,
    title: 'Builder visits for measurement',
    description:
      'We come to your home to take precise measurements, assess the site, and discuss any customizations in person.',
    icon: Ruler,
  },
  {
    number: 5,
    title: 'Receive final quote',
    description:
      'Based on the site visit, we send a detailed final quote with exact specifications, materials, and timeline.',
    icon: FileText,
  },
  {
    number: 6,
    title: 'Pay 50% of remaining balance',
    description:
      'Half of the remaining balance is due before construction begins. This covers materials and shop fabrication.',
    icon: Banknote,
  },
  {
    number: 7,
    title: 'Construction (1–3 weeks)',
    description:
      'We build your habitat — partly in our shop, partly on site. Most builds take one to three weeks depending on complexity.',
    icon: Hammer,
  },
  {
    number: 8,
    title: 'Final payment on installation day',
    description:
      'The remaining balance is due on the day we install and complete your habitat. We walk you through everything before we leave.',
    icon: BadgeDollarSign,
  },
  {
    number: 9,
    title: 'Enjoy your haven',
    description:
      'Your animals are safe, your space is beautiful, and you have a structure built to last. Welcome to Haven.',
    icon: Smile,
  },
]

export default function BuildProcessPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-navy text-cream px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
            The Build Process
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-2xl mx-auto">
            From first conversation to finished habitat — here is exactly how it works,
            step by step. No surprises.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex gap-6">
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-navy/15" />
                  )}

                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-12">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-sm font-semibold text-gold-dark tracking-wide uppercase">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl text-navy mb-2">{step.title}</h3>
                    <p className="font-body text-charcoal-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">
            Ready to start?
          </h2>
          <p className="font-body text-cream/70 mb-10 leading-relaxed">
            The first step is easy — use our configurator to tell us what you are thinking,
            or reach out directly. We will take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/design"
              className="bg-gold hover:bg-gold-dark text-navy font-body font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Design Your Habitat
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-navy font-body font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
