import HeroCarousel from '@/components/HeroCarousel';
import DailySpecial from '@/components/DailySpecial';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems, type MenuCategory } from '@/data/menu';

const FEATURED_CATEGORIES = [
  {
    label: "Morpankh's Signatures",
    slug: 'signatures',
    image: '/images/menu/Morpankh%27s-Signatures/Butter-Chicken.png',
  },
  {
    label: 'Flame Junction',
    slug: 'flame-junction',
    image: '/images/menu/Flame-Junction/Chicken-Tikka.png',
  },
  {
    label: 'Roadside Bites',
    slug: 'roadside-bites',
    image: '/images/menu/Roadside-Bites/Garlic-Mayo-Fries.png',
  },
];

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

const ALL_CATEGORIES: MenuCategory[] = [
  'roadside-bites', 'signatures', 'flame-junction', 'tandoor-express',
  'thaali-deals', 'weekend-breakfast', 'weekend-thaali', 'heritage-sweets',
  'drinks', 'brainy-bites',
];

function getDailySelections() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  const signatures = menuItems.filter((i) => i.category === 'signatures');
  const dailyDish = signatures[seed % signatures.length];

  const chefSelections = ALL_CATEGORIES.flatMap((cat) => {
    const items = menuItems.filter((i) => i.category === cat);
    if (items.length === 0) return [];
    const start = seed % items.length;
    return [...items.slice(start), ...items.slice(0, start)].slice(0, 2);
  });

  return { dailyDish, chefSelections };
}

export default function HomePage() {
  const { dailyDish, chefSelections } = getDailySelections();

  return (
    <>
      <HeroCarousel />

      <DailySpecial dish={dailyDish} />

      {/* Explore by Category */}
      <section className="bg-fawn py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-3">Explore</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white">Browse by Category</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURED_CATEGORIES.map(({ label, slug, image }, i) => (
              <ScrollReveal key={slug} delay={i * 0.12}>
                <Link href={`/menu?cat=${slug}`} className="group relative block overflow-hidden aspect-[4/5]">
                  <Image src={image} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-navy/10 group-hover:from-navy/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-serif text-3xl text-white mb-2">{label}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore →</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Selection */}
      <section className="bg-sky py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-3">Chef&apos;s Selection</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-white">Today&apos;s Picks</h2>
            </div>
            <Link href="/menu" className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-gray-mid hover:text-white border-b border-gray-mid/40 pb-0.5 transition-colors duration-300">View all →</Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chefSelections.map((item, i) => (
              <ScrollReveal key={item.id} delay={(i % 4) * 0.08}>
                <Link href={`/menu/${item.id}`} className="group relative flex gap-5 bg-fawn p-5 hover:shadow-md transition-shadow duration-400">
                  <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="112px" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-orange mb-1">{CATEGORY_LABELS[item.category] ?? item.category}</p>
                    <h3 className="font-serif text-xl text-white mb-2">{item.name}</h3>
                    <p className="text-gray-mid text-xs leading-relaxed line-clamp-2">{item.shortDescription}</p>
                    <p className="font-serif text-lg text-white mt-2">{item.price}</p>
                  </div>
                  <span className="absolute bottom-5 right-5 text-xs tracking-widest uppercase text-gray-light group-hover:text-orange transition-colors duration-300">View →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image src="/images/menu/Main%20Menu/chicken%20mandi.jpg" alt="Mor Pankh kitchen" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center z-10">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-yellow mb-6">Hamari Kahani</p>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-8 leading-tight">Dil se paka, haath se bana, mohabbat se parosa</h2>
            <p className="text-white/60 leading-relaxed font-light mb-10 text-lg">Mor Pankh ki buniyaad ek khwaab tha — ke asli Pakistani zaiqay, unki poori taareekh aur tehzeeb k saath, ek aisi jagah milein jahaan har koi apna mehsoos kare.</p>
            <Link href="/about" className="inline-flex items-center gap-3 border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-rose hover:text-white transition-all duration-500">Our Story →</Link>
          </ScrollReveal>
        </div>
      </section>
      */}
    </>
  );
}
