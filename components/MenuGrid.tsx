'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { menuItems, type MenuCategory } from '@/data/menu';
import MenuTile from './MenuTile';

type FilterCat = MenuCategory;

const CATEGORIES: { value: FilterCat; label: string }[] = [
  { value: 'appetizers',   label: 'Palate Teasers' },
  { value: 'main-menu',    label: 'Heart of the Feast' },
  { value: 'hot-tandoor',  label: 'Ancient Flames' },
  { value: 'sizzling-bbq', label: 'The Sizzling Grate' },
  { value: 'drinks',       label: 'Liquid Alchemy' },
  { value: 'deals',        label: 'Shared Journeys' },
];

export default function MenuGrid() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get('cat') as FilterCat) ?? 'appetizers';
  const [active, setActive] = useState<FilterCat>(initialCat);

  useEffect(() => {
    const cat = searchParams.get('cat') as FilterCat;
    if (cat && CATEGORIES.find((c) => c.value === cat)) setActive(cat);
  }, [searchParams]);

  const filtered = menuItems.filter((i) => i.category === active);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`relative text-xs tracking-[0.18em] uppercase px-5 py-2.5 transition-all duration-350 ${
              active === value
                ? 'text-white'
                : 'text-gray-mid hover:text-white'
            }`}
          >
            {label}
            {active === value && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 bg-orange/15 border border-orange -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <MenuTile key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-mid py-24 tracking-widest uppercase text-sm">
          No items found.
        </p>
      )}
    </div>
  );
}
