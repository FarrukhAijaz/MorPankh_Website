import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Explore: [
    { label: 'Menu',     href: '/menu' },
    { label: 'Contact',  href: '/contact' },
  ],
  Menu: [
    { label: 'Roadside Bites',              href: '/menu?cat=roadside-bites' },
    { label: "Morpankh's Signatures",       href: '/menu?cat=signatures' },
    { label: 'Flame Junction',              href: '/menu?cat=flame-junction' },
    { label: 'Tandoor Express',             href: '/menu?cat=tandoor-express' },
    { label: 'Thaali Deals',                href: '/menu?cat=thaali-deals' },
    { label: 'Weekend Special Breakfast',   href: '/menu?cat=weekend-breakfast' },
    { label: 'Weekend Special Thaali',      href: '/menu?cat=weekend-thaali' },
    { label: 'Heritage Sweets',             href: '/menu?cat=heritage-sweets' },
    { label: 'Brainy Bites',                href: '/menu?cat=brainy-bites' },
    { label: 'Drinks',                      href: '/menu?cat=drinks' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Image
                src="/images/logo/MorPankh/logo5-transparent.png"
                alt="Mor Pankh"
                width={1800}
                height={1694}
                className="h-40 w-auto object-contain"
              />
            </div>
            <p className="font-accent text-lg text-yellow mb-6">مور پنکھ — Asli Swad, Rangeen Mehfil</p>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Asli Pakistani street food and BBQ — where every colour of flavour
              comes alive and every table becomes a mehfil.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs tracking-[0.2em] uppercase text-yellow mb-5">{group}</p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Mor Pankh. All rights reserved.</span>
          <span>Asli swad, rangeen mehfil.</span>
        </div>
      </div>
    </footer>
  );
}
