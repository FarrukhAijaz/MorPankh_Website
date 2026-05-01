'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',    href: '/' },
  { label: 'Menu',    href: '/menu' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className="relative shadow-md">

        {/* ── Logo Banner — full-width, covers panel, warm overlay ── */}
        <div className="w-full relative overflow-hidden border-b-2 border-orange/50 bg-[#100E0C]">
          <Link href="/" className="block w-full">
            <Image
              src="/images/logo/MorPankh/logo-cropped.png"
              alt="Mor Pankh"
              width={1553}
              height={290}
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mx-auto block"
              priority
            />
            {/* Dark vignette — kills stark white edges, blends into dark theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#100E0C]/60 via-transparent to-[#100E0C]/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#100E0C]/30 pointer-events-none" />
          </Link>
        </div>

        {/* ── Nav Strip — below logo ── */}
        <nav className="w-full bg-navy">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between h-10 lg:h-12">

            {/* Desktop links — centred */}
            <ul className="hidden md:flex items-center gap-8 mx-auto">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                        isActive ? 'text-orange' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-orange"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile: brand text left + hamburger right */}
            <span className="md:hidden text-white font-serif tracking-widest text-sm">MOR PANKH</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}   className="block w-5 h-px bg-white origin-center" />
              <motion.span animate={mobileOpen ? { opacity: 0 }       : { opacity: 1 }}          className="block w-5 h-px bg-white" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}  className="block w-5 h-px bg-white origin-center" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy/97 backdrop-blur-xl flex flex-col items-center justify-center gap-9 md:hidden"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={href}
                  className={`font-serif text-4xl tracking-widest ${
                    pathname === href ? 'text-orange' : 'text-white/70'
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
