import { useState } from 'react'
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'
import { submitContact } from '../services/webhooks'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submitContact(form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-navy text-cream px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">Contact</h1>
          <p className="font-body text-cream/70 text-lg">
            Have a question or ready to get started? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Details */}
          <div>
            <h2 className="font-heading text-3xl text-navy mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Phone</p>
                  <a
                    href="tel:+12185042836"
                    className="font-body text-navy hover:text-gold-dark transition-colors duration-200"
                  >
                    1-218-50-HAVEN
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Email</p>
                  <a
                    href="mailto:hello@haven-habitats.com"
                    className="font-body text-navy hover:text-gold-dark transition-colors duration-200"
                  >
                    hello@haven-habitats.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Service Area</p>
                  <p className="font-body text-charcoal-light">
                    Twin Cities metro and surrounding suburbs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal mb-1">Haven Chat</p>
                  <p className="font-body text-charcoal-light">
                    Chat widget coming soon — talk to Haven directly from our site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="font-heading text-3xl text-navy mb-8">Send a Message</h2>
            {submitted ? (
              <div className="bg-navy/5 rounded-xl p-8 text-center">
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-navy mb-2">Thank you!</h3>
                <p className="font-body text-charcoal-light">We'll be in touch soon.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm font-semibold text-charcoal mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full font-body px-4 py-3 rounded-lg border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-semibold text-charcoal mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full font-body px-4 py-3 rounded-lg border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-sm font-semibold text-charcoal mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full font-body px-4 py-3 rounded-lg border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors duration-200"
                  placeholder="(optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-semibold text-charcoal mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full font-body px-4 py-3 rounded-lg border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors duration-200 resize-vertical"
                  placeholder="Tell us about your space, your animals, or what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-dark text-cream font-body font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
