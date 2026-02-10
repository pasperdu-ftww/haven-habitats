import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Snowflake, Heart, ArrowRight, Play } from 'lucide-react'
import { products } from '../data/products'

const HAVEN_IMAGE = '/Haven.png'  // TODO: swap to R2 CDN URL after upload
const HAVEN_VIDEO = 'https://pub-1948b1b1579d47bc8925ba58d337f804.r2.dev/Haven.mp4'

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  function handleVideoEnded() {
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section — Split-screen portrait + text */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label">A Desta-Nation Company</p>
          <h1>Haven</h1>
          <p className="hero-tagline">Every animal deserves a haven.</p>
          <p className="hero-description">
            Custom outdoor habitats for pets. Built by hand in Minnesota.
            For apartments and houses. Designed to handle our weather.
            Woman-owned, woman-operated.
          </p>
          <div className="hero-cta">
            <Link to="/design" className="hero-btn-primary">
              Design Your Habitat
            </Link>
            <a href="#products" className="hero-btn-secondary">
              Explore Products
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div
            className={`hero-media-container${isPlaying ? ' playing' : ''}`}
            onClick={toggleVideo}
          >
            <img
              src={HAVEN_IMAGE}
              alt="Haven — Your habitat design consultant"
            />
            <video
              ref={videoRef}
              src={HAVEN_VIDEO}
              playsInline
              preload="metadata"
              onEnded={handleVideoEnded}
            />
            {!isPlaying && (
              <div className="play-btn">
                <Play className="w-6 h-6 text-gold fill-gold ml-1 opacity-80" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl text-navy text-center mb-16">
            Why Haven?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">Protection Without Captivity</h3>
              <p className="font-body text-charcoal-light leading-relaxed">
                Your animals get the outdoors they crave with the safety they need. Fresh air, sunshine,
                and stimulation — without the risks of roaming free.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 rounded-full mb-6">
                <Snowflake className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">Built for Minnesota</h3>
              <p className="font-body text-charcoal-light leading-relaxed">
                Every habitat is engineered for our climate — heavy snow loads, sub-zero winds, and
                summer storms. Year-round use, no compromises.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">Solving Real Problems</h3>
              <p className="font-body text-charcoal-light leading-relaxed">
                Born from real need — not a business plan. Every product exists because we built it
                for our own animals first, then made it available to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tiles */}
      <section id="products" className="bg-cream-dark px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl text-navy text-center mb-4">
            Our Products
          </h2>
          <p className="font-body text-charcoal-light text-center mb-14 max-w-2xl mx-auto">
            From window perches to fully custom enclosures — there is a Haven for every home.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-cream rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-cream-dark"
              >
                <div className="bg-navy/5 rounded-lg h-40 flex items-center justify-center mb-5">
                  <p className="text-charcoal-muted font-body text-sm">Product image</p>
                </div>
                <h3 className="font-heading text-xl text-navy mb-2">{product.name}</h3>
                <p className="font-body text-charcoal-light text-sm mb-3 leading-relaxed">
                  {product.tagline}
                </p>
                <p className="font-body text-gold-dark font-semibold text-sm mb-4">
                  {product.priceRange}
                </p>
                <Link
                  to={'/products/' + product.id}
                  className="inline-flex items-center gap-2 text-navy font-body font-semibold text-sm hover:text-gold-dark transition-colors duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-navy mb-6">Our Story</h2>
          <p className="font-body text-charcoal-light leading-relaxed mb-4">
            Haven Habitats started with Desta building catios for her own cats, and Sarah
            building a tiny home for Desta's mother. We realized every product we make exists
            because we needed it first — and built it ourselves.
          </p>
          <p className="font-body text-charcoal-light leading-relaxed mb-8">
            We are two women who believe animals deserve better outdoor spaces, and that those
            spaces should be built by people who actually care.
          </p>
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 text-navy font-body font-semibold hover:text-gold-dark transition-colors duration-200"
          >
            Read Our Full Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-cream mb-6">
            Ready to design your habitat?
          </h2>
          <p className="font-body text-cream/70 mb-10 leading-relaxed">
            Use our configurator to explore options, get a preliminary estimate, and start the
            conversation. No pressure, no obligation.
          </p>
          <Link
            to="/design"
            className="bg-gold hover:bg-gold-dark text-navy font-body font-semibold px-10 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Start Designing
          </Link>
        </div>
      </section>
    </div>
  )
}
