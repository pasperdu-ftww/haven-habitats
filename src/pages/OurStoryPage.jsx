import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-navy text-cream px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="font-body text-cream/70 text-lg">
            How two women, a handful of cats, and a tiny home started a company.
          </p>
        </div>
      </section>

      {/* Origin Narrative */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-navy mb-8">Where It Started</h2>
          <div className="space-y-6 font-body text-charcoal leading-relaxed">
            <p>
              It started the way most good things do — out of love and necessity. Desta built
              catios for her cats because she wanted them to experience the outdoors safely.
              Not some off-the-shelf kit from the internet, but real structures — built with
              real materials, designed for real Minnesota weather.
            </p>
            <p>
              Sarah built a tiny home for Desta's mother. Not a concept or a Pinterest board,
              but an actual livable structure — warm in winter, cool in summer, and built with
              the kind of care that only comes from knowing exactly who will live in it.
            </p>
            <p>
              We looked around one day and realized: every product we could ever sell already
              exists on Desta's property. The catios. The tunnels. The shelters. The tiny home.
              All of it was built because we needed it, tested because we used it, and refined
              because we lived with it.
            </p>
            <p>
              That is Haven Habitats. Not a business plan that went looking for a product — but
              products that proved themselves and became a business.
            </p>
          </div>
        </div>
      </section>

      {/* Female-Founded Section */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-navy mb-6">
                Female-Founded. Female-Built.
              </h2>
              <div className="space-y-4 font-body text-charcoal leading-relaxed">
                <p>
                  Haven is owned and operated by two women. We are the ones on the phone, at
                  your house measuring, drawing the plans, and swinging the hammers.
                </p>
                <p>
                  We built this company because we saw a gap: beautifully designed animal
                  enclosures that are also structurally sound, weather-rated, and built to last
                  decades — not seasons.
                </p>
                <p>
                  We are supporters of the Humane Society since 2007, and animal welfare is not
                  our marketing angle — it is our reason for existing.
                </p>
              </div>
            </div>
            <div className="bg-navy/5 rounded-2xl flex items-center justify-center h-72 border border-cream-dark">
              <div className="text-center px-8">
                <Heart className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-charcoal-muted font-body">
                  Photo of Desta &amp; Sarah coming Spring 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-navy mb-10 text-center">Our Timeline</h2>
          <div className="space-y-8">
            {[
              { year: '2007', text: 'Began supporting the Humane Society — a commitment that continues today.' },
              { year: '2019', text: 'Desta builds her first catio for her indoor cats in Minnesota.' },
              { year: '2021', text: 'Sarah constructs a tiny home for Desta\'s mother.' },
              { year: '2023', text: 'Tunnel systems, shelters, and freestanding enclosures added to the property.' },
              { year: '2025', text: 'Haven Habitats officially launches — making our builds available to everyone.' },
              { year: '2026', text: 'First full season of custom builds for Twin Cities pet owners.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-heading text-xl text-gold-dark font-bold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-navy/20 self-stretch" />
                <p className="font-body text-charcoal leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Placeholders */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-navy mb-10 text-center">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-navy/5 rounded-xl h-56 flex items-center justify-center border border-cream-dark"
              >
                <p className="text-charcoal-muted font-body text-sm">
                  Photo coming Spring 2026
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">
            Want to work with us?
          </h2>
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
