import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-[0.15em]">HAVEN</span>
              <br />
              <span className="font-body text-[10px] tracking-[0.3em] text-gold uppercase">HABITATS</span>
            </Link>
            <p className="font-heading text-lg text-cream/70 italic mb-2">
              Every animal deserves a haven.
            </p>
            <p className="font-body text-xs text-gold tracking-wider uppercase">
              Female-Founded. Female-Built. Minnesota-Made.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Products', to: '/products/the-attachment' },
                { label: 'Design Your Habitat', to: '/design' },
                { label: 'Our Story', to: '/our-story' },
                { label: 'Build Process', to: '/build-process' },
                { label: 'Gallery', to: '/gallery' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold tracking-wider uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {[
                'Window Float',
                'The Attachment',
                'The Conversion',
                'The Gazebo',
                'The Tunnel',
                'The Foster Kit',
              ].map(name => (
                <li key={name}>
                  <span className="font-body text-sm text-cream/60">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+12185042836" className="flex items-center gap-2 font-body text-sm text-cream/60 hover:text-cream transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                  1-218-50-HAVEN
                </a>
              </li>
              <li>
                <a href="mailto:hello@haven-habitats.com" className="flex items-center gap-2 font-body text-sm text-cream/60 hover:text-cream transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                  hello@haven-habitats.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 font-body text-sm text-cream/60">
                  <MapPin className="w-4 h-4 text-gold" />
                  Twin Cities, Minnesota
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            &copy; 2026 Haven Habitats. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/40">
            A Desta-Nation company.
          </p>
        </div>
      </div>
    </footer>
  )
}
