'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { MenuItem } from '@/data/menu';

const CATEGORY_LABELS: Record<string, string> = {
  'roadside-bites':    'Roadside Bites',
  'signatures':        "Morpankh's Signatures",
  'flame-junction':    'Flame Junction',
  'tandoor-express':   'Tandoor Express',
  'thaali-deals':      'Thaali Deals',
  'weekend-breakfast': 'Weekend Breakfast',
  'weekend-thaali':    'Weekend Thaali',
  'heritage-sweets':   'Heritage Sweets',
  'drinks':            'Drinks',
  'brainy-bites':      'Brainy Bites',
};

interface MenuTileProps {
  item: MenuItem;
}

export default function MenuTile({ item }: MenuTileProps) {
  return (
    <Link href={`/menu/${item.id}`} className="block">
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="group relative aspect-square overflow-hidden bg-secondary cursor-pointer"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </motion.div>

      {/* Base gradient (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Always-visible name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <p className="text-white font-serif text-sm lg:text-base leading-snug">{item.name}</p>
        <p className="text-yellow text-xs mt-0.5">{item.price}</p>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center p-5 text-center z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-2">
            {CATEGORY_LABELS[item.category] ?? item.category}
          </p>
          <h3 className="font-serif text-white text-lg lg:text-xl mb-3 leading-tight">
            {item.name}
          </h3>
          <p className="text-white/60 text-xs leading-relaxed mb-6 max-w-[200px]">
            {item.shortDescription}
          </p>
          <Link
            href={`/menu/${item.id}`}
            className="inline-flex items-center gap-2 border border-orange/70 text-cream text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-orange hover:border-orange hover:text-white transition-all duration-300"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            Deep Dive →
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
    </Link>
  );
}
