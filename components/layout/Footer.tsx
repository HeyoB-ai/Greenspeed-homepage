import Link from "next/link";
import { navItems } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gs-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="/images/logo.svg" alt="Greenspeed" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/70 font-dm text-sm leading-relaxed mb-6">
              Duurzame medicijnbezorging voor apotheken. CO₂-neutraal, betrouwbaar en persoonlijk.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gs-navy-light hover:bg-gs-teal flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gs-navy-light hover:bg-gs-teal flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-widest text-gs-teal mb-4">
              Navigatie
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white font-dm text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-widest text-gs-teal mb-4">
              Diensten
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/airoute-planner" className="text-white/70 hover:text-white font-dm text-sm transition-colors">
                  AIroute Planner
                </Link>
              </li>
              <li>
                <Link href="/overstappen" className="text-white/70 hover:text-white font-dm text-sm transition-colors">
                  Overstappen
                </Link>
              </li>
              <li>
                <Link href="/klantcases" className="text-white/70 hover:text-white font-dm text-sm transition-colors">
                  Klantcases
                </Link>
              </li>
              <li>
                <Link href="/handboek" className="text-white/70 hover:text-white font-dm text-sm transition-colors">
                  Handboek
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-widest text-gs-teal mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-white/70 font-dm text-sm">
                Greenspeed B.V.
              </p>
              <p className="text-white/70 font-dm text-sm">
                Utrechtseweg 26-42
                <br />
                1213 TT Hilversum
              </p>
              <p className="text-white/70 font-dm text-sm">
                <a
                  href="tel:+31356228975"
                  className="hover:text-white transition-colors"
                >
                  035 – 622 89 75
                </a>
              </p>
              <p className="text-white/70 font-dm text-sm">
                <a
                  href="mailto:info@greenspeed.nl"
                  className="hover:text-white transition-colors"
                >
                  info@greenspeed.nl
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-dm text-sm">
            © {year} Greenspeed B.V. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white font-dm text-sm transition-colors"
            >
              Privacybeleid
            </Link>
            <Link
              href="/algemene-voorwaarden"
              className="text-white/40 hover:text-white font-dm text-sm transition-colors"
            >
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
