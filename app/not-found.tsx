import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — LUMIÈRE',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center text-center px-8 pt-20">
      <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-6">404</p>
      <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6">
        Page Not Found
      </h1>
      <p className="text-gray-mid mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Perhaps you were looking for
        one of our dishes?
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="text-xs tracking-[0.18em] uppercase border border-white/30 text-white px-8 py-3 hover:bg-white hover:text-navy transition-all duration-300"
        >
          Go Home
        </Link>
        <Link
          href="/menu"
          className="text-xs tracking-[0.18em] uppercase bg-spice-red text-white px-8 py-3 hover:bg-crimson transition-colors duration-300"
        >
          Browse Menu
        </Link>
      </div>
    </div>
  );
}
