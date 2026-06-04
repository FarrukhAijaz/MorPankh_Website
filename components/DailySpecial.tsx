'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { MenuItem } from '@/data/menu';

interface DailySpecialProps {
  dish: MenuItem;
}

export default function DailySpecial({ dish }: DailySpecialProps) {
  return (
    <section className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-3">Today&apos;s Feature</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white">Morpankh&apos;s Signature Special Dish</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-1 lg:grid-cols-2 bg-sky overflow-hidden shadow-lg"
        >
          {/* Image */}
          <div className="relative h-72 lg:h-auto min-h-[360px]">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>

          {/* Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-orange text-white text-[10px] tracking-[0.25em] uppercase px-4 py-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                Signature Dish
              </span>
            </div>

            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-6">{dish.name}</h3>
            <p className="text-gray-mid leading-relaxed mb-10 max-w-md">{dish.shortDescription}</p>

            <div className="flex items-center gap-8">
              <div>
                <span className="text-xs tracking-widest uppercase text-gray-mid block mb-1">Price</span>
                <span className="font-serif text-4xl text-white">{dish.price}</span>
              </div>
              <Link
                href={`/menu/${dish.id}`}
                className="group inline-flex items-center gap-3 bg-orange text-white text-xs tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-magenta transition-colors duration-500"
              >
                View Dish
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Accent line */}
          <span className="absolute top-0 left-0 right-0 h-1 bg-orange lg:left-0 lg:top-0 lg:bottom-0 lg:right-auto lg:w-1 lg:h-auto" />
        </motion.div>
      </div>
    </section>
  );
}
