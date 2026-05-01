import { Suspense } from 'react';
import MenuGrid from '@/components/MenuGrid';

export const metadata = {
  title: 'Menu — Mor Pankh',
  description: 'Explore our full menu: Breakfast, Appetizers, Lunch, Dinner, and Sweets.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Page Header */}
      <div className="bg-secondary pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-4">
            Our Offerings
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl text-white mb-4">The Menu</h1>
          <p className="text-gray-mid max-w-lg leading-relaxed">
            Each dish is crafted from seasonal ingredients sourced from our network of
            trusted farmers, foragers, and artisan producers.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <Suspense
          fallback={
            <div className="text-center py-24 text-gray-mid tracking-widest uppercase text-sm">
              Loading menu…
            </div>
          }
        >
          <MenuGrid />
        </Suspense>
      </div>
    </div>
  );
}
