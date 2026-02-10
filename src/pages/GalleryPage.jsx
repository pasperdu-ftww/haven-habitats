import { useState } from 'react'
import { Camera } from 'lucide-react'

const categories = [
  'All',
  'Window Float',
  'The Attachment',
  'The Conversion',
  'The Gazebo',
  'The Tunnel',
  'The Foster Kit',
]

const placeholderCards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % (categories.length - 1))],
}))

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? placeholderCards
      : placeholderCards.filter((card) => card.category === activeFilter)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-navy text-cream px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
          <p className="font-body text-cream/70 text-lg">
            See what we have built — and what we are building next.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 py-10 border-b border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={
                  'font-body text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 ' +
                  (activeFilter === cat
                    ? 'bg-navy text-cream'
                    : 'bg-cream-dark text-charcoal hover:bg-navy/10')
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="font-body text-charcoal-muted text-center py-20">
              No images in this category yet. Check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((card) => (
                <div
                  key={card.id}
                  className="bg-cream-dark rounded-xl overflow-hidden border border-cream-dark hover:shadow-md transition-shadow duration-200"
                >
                  <div className="h-56 bg-navy/5 flex flex-col items-center justify-center gap-3">
                    <Camera className="w-8 h-8 text-charcoal-muted/50" />
                    <p className="text-charcoal-muted font-body text-sm">
                      Coming Spring 2026
                    </p>
                  </div>
                  <div className="p-4">
                    <span className="inline-block font-body text-xs font-semibold text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                      {card.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
