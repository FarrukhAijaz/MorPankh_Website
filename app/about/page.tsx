import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story — Mor Pankh',
  description: 'Hamari kahani — coming soon.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-orange mb-6">Hamari Kahani</p>
      <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6">Coming Soon</h1>
      <p className="text-gray-mid text-sm leading-relaxed max-w-sm mb-12">
        We&apos;re crafting our story — check back soon to learn about the heart behind Mor Pankh.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-orange hover:border-orange transition-all duration-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
