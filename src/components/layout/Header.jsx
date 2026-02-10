import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { products } from '../../data/products'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="bg-navy text-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start logo-lockup">
          <span className="font-heading text-2xl font-bold tracking-[0.15em] text-cream logo-haven">
            HAVEN
          </span>
          <span className="font-body text-[10px] text-gold uppercase -mt-1 logo-habitats">
            HABITATS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="font-body text-sm font-medium text-cream/80 hover:text-cream flex items-center gap-1 transition-colors">
              Products <ChevronDown className="w-3 h-3" />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy-dark border border-cream/10 rounded-lg shadow-xl py-2">
                {products.map(product => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="block px-4 py-2 font-body text-sm text-cream/70 hover:text-cream hover:bg-cream/5 transition-colors"
                    onClick={() => setProductsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/design" className="font-body text-sm font-medium text-cream/80 hover:text-cream transition-colors">
            Design Your Habitat
          </Link>
          <Link to="/our-story" className="font-body text-sm font-medium text-cream/80 hover:text-cream transition-colors">
            Our Story
          </Link>
          <Link to="/gallery" className="font-body text-sm font-medium text-cream/80 hover:text-cream transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="font-body text-sm font-medium text-cream/80 hover:text-cream transition-colors">
            Contact
          </Link>

          {/* Phone */}
          <a href="tel:+12185042836" className="flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors">
            <Phone className="w-3.5 h-3.5" />
            1-218-50-HAVEN
          </a>

          {/* CTA */}
          <Link
            to="/design"
            className="bg-gold hover:bg-gold-dark text-navy font-body text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Design Yours
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-cream/10 px-6 py-6 space-y-4">
          <p className="font-body text-xs text-cream/40 uppercase tracking-wider">Products</p>
          {products.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="block font-body text-sm text-cream/70 hover:text-cream pl-4 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {product.name}
            </Link>
          ))}
          <hr className="border-cream/10" />
          <Link to="/design" className="block font-body text-sm text-cream hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
            Design Your Habitat
          </Link>
          <Link to="/our-story" className="block font-body text-sm text-cream/70 hover:text-cream transition-colors" onClick={() => setMobileOpen(false)}>
            Our Story
          </Link>
          <Link to="/build-process" className="block font-body text-sm text-cream/70 hover:text-cream transition-colors" onClick={() => setMobileOpen(false)}>
            Build Process
          </Link>
          <Link to="/gallery" className="block font-body text-sm text-cream/70 hover:text-cream transition-colors" onClick={() => setMobileOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className="block font-body text-sm text-cream/70 hover:text-cream transition-colors" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <hr className="border-cream/10" />
          <a href="tel:+12185042836" className="flex items-center gap-2 font-body text-sm text-gold">
            <Phone className="w-3.5 h-3.5" />
            1-218-50-HAVEN
          </a>
          <Link
            to="/design"
            className="block text-center bg-gold hover:bg-gold-dark text-navy font-body text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Design Your Habitat
          </Link>
        </div>
      )}
    </header>
  )
}
