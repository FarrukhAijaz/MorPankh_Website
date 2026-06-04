'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import type { MenuItem } from '@/data/menu';

const CATEGORY_LABELS: Record<string, string> = {
  'roadside-bites':   'Roadside Bites',
  'signatures':       "Morpankh's Signatures",
  'flame-junction':   'Flame Junction',
  'tandoor-express':  'Tandoor Express',
  'thaali-deals':     'Special Thaali Deals',
  'weekend-breakfast':'Weekend Breakfast',
  'weekend-thaali':   'Weekend Thaali',
  'heritage-sweets':  'Heritage Sweets',
  'drinks':           'Drinks',
  'brainy-bites':     'Brainy Bites',
};

interface DishDetailClientProps {
  item: MenuItem;
}

export default function DishDetailClient({ item }: DishDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const hasSections = !!item.sections;

  // Fade out near end, restart, fade back in
  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    const overlay = videoOverlayRef.current;
    if (!vid || !overlay || !vid.duration) return;
    if (vid.duration - vid.currentTime < 0.15) {
      overlay.style.opacity = '1';
    }
  };

  const handleEnded = () => {
    const vid = videoRef.current;
    const overlay = videoOverlayRef.current;
    if (!vid) return;
    vid.currentTime = 0;
    vid.play();
    // Brief pause at black before fading back in
    setTimeout(() => {
      if (overlay) overlay.style.opacity = '0';
    }, 80);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Drive section changes from scroll — one section in the DOM at a time
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!hasSections) return;
    const next = v < 0.38 ? 0 : v < 0.72 ? 1 : 2;
    setActiveSection((prev) => (prev !== next ? next : prev));
  });

  const sectionData = hasSections ? [
    item.sections!.nature,
    item.sections!.creation,
    item.sections!.facilities,
  ] : [];

  return (
    <>
      {/* Sticky scroll container */}
      <div ref={containerRef} style={{ height: hasSections ? '480vh' : '100dvh' }} className="relative">
        <div className="sticky top-0 overflow-hidden" style={{ height: '100dvh' }}>

          {/* Background — video or image */}
          {item.heroVideo ? (
            <>
              <video
                ref={videoRef}
                src={item.heroVideo}
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) translateZ(0)',
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  willChange: 'transform',
                }}
              />
              {/* Black overlay for smooth loop transition */}
              <div
                ref={videoOverlayRef}
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: 0, transition: 'opacity 0.1s ease' }}
              />
            </>
          ) : (
            <Image
              src={item.heroImage}
              alt={item.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />

          {/* Top metadata bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 lg:px-20 pt-24 lg:pt-28 z-20">
            <div>
              <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-1">
                {CATEGORY_LABELS[item.category] ?? item.category}
              </p>
              <h1 className="font-serif text-3xl lg:text-5xl text-white">{item.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Price</p>
              <p className="font-serif text-3xl text-yellow">{item.price}</p>
            </div>
          </div>

          {/* Section content — scroll-driven when sections exist, static otherwise */}
          <div className="absolute inset-0 flex items-center justify-center px-8 lg:px-20 z-10 pointer-events-none">
            {hasSections ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl w-full text-center"
                >
                  <p className="text-yellow text-[10px] tracking-[0.35em] uppercase mb-4">
                    {String(activeSection + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">
                    {sectionData[activeSection].title}
                  </h2>
                  <p className="text-white/75 text-base lg:text-lg leading-relaxed font-light">
                    {sectionData[activeSection].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl w-full text-center"
              >
                <p className="text-white/80 text-base lg:text-xl leading-relaxed font-light mb-8">
                  {item.shortDescription}
                </p>
                <p className="font-serif text-lg lg:text-2xl text-yellow/80 italic">
                  &ldquo;{item.tagline}&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          {/* Right-side progress indicator — only when sections exist */}
          {hasSections && (
            <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
              {sectionData.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: 5,
                    height: activeSection === i ? 24 : 5,
                    backgroundColor:
                      activeSection === i
                        ? 'rgba(212, 146, 12, 0.9)'
                        : 'rgba(240, 168, 40, 0.35)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Below-fold detail cards — only when sections exist */}
      <section className="bg-cream py-20 lg:py-28 px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {hasSections && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {sectionData.map((data, i) => (
                <div key={i}>
                  <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-xl text-navy mb-4">{data.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{data.content}</p>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-gray-light pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-gray-mid tracking-widest uppercase mb-2">The Dish</p>
              <p className="font-serif text-2xl text-navy max-w-xl">
                &ldquo;{item.tagline}&rdquo;
              </p>
            </div>
<Link
              href="/menu"
              className="group inline-flex items-center gap-3 bg-orange text-white text-xs tracking-[0.18em] uppercase px-8 py-4 hover:bg-magenta transition-colors duration-500 flex-shrink-0"
            >
              Explore More
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
