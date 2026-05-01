'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { heroItems } from '@/data/menu';

const slides = heroItems.slice(0, 6);

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden bg-charcoal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured dishes carousel"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((item, i) =>
          i === current ? (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={item.heroImage}
                alt={item.name}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Layered gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        {slides.map((item, i) =>
          i === current ? (
            <motion.div
              key={`text-${item.id}`}
              className="absolute inset-0 flex flex-col justify-end pb-20 lg:pb-28 px-8 lg:px-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category pill */}
              <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-yellow border border-orange/60 px-4 py-1.5 mb-4 w-fit">
                {item.category === 'appetizers' ? 'Palate Teasers' : item.category === 'main-menu' ? 'Heart of the Feast' : item.category === 'hot-tandoor' ? 'Ancient Flames' : item.category === 'sizzling-bbq' ? 'The Sizzling Grate' : item.category === 'drinks' ? 'Liquid Alchemy' : item.category === 'deals' ? 'Shared Journeys' : item.category}
              </span>

              {/* Title */}
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-3 max-w-2xl">
                {item.name}
              </h1>

              {/* Tagline */}
              <p className="text-white/70 text-base lg:text-lg font-light mb-8 max-w-md tracking-wide">
                {item.tagline}
              </p>

              {/* Price + CTA row */}
              <div className="flex items-center gap-6">
                <span className="text-yellow font-serif text-2xl">{item.price}</span>
                <Link
                  href={`/menu/${item.id}`}
                  className="group flex items-center gap-3 text-white text-sm tracking-[0.15em] uppercase border border-orange/70 bg-orange/20 px-6 py-3 hover:bg-orange hover:border-orange hover:text-white transition-all duration-500"
                >
                  Discover
                  <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Arrow Buttons */}
      <button
        onClick={prev}
        aria-label="Previous dish"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/30 text-white/70 hover:bg-white/20 transition-all duration-300 z-20"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next dish"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/30 text-white/70 hover:bg-white/20 transition-all duration-300 z-20"
      >
        →
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-px overflow-hidden transition-all duration-400"
            style={{ width: i === current ? 32 : 16 }}
          >
            <span className="block absolute inset-0 bg-white/30" />
            {i === current && (
              <motion.span
                key={`bar-${i}`}
                className="block absolute inset-0 bg-orange origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3.5, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 text-white/40 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-px h-6 bg-white/30 block" />
      </motion.div>
    </section>
  );
}
