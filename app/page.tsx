import HeroCarousel from '@/components/HeroCarousel';
import DailySpecial from '@/components/DailySpecial';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/data/menu';

const FEATURED_CATEGORIES = [
  {
    label: 'Ancient Flames',
    slug: 'hot-tandoor',
    image: '/images/menu/Hot%20Tandoor/chicken%20cheese%20paratha.jpg',
  },
  {
    label: 'Heart of the Feast',
    slug: 'main-menu',
    image: '/images/menu/Main%20Menu/beef-karahi-step7.jpg',
  },
  {
    label: 'The Sizzling Grate',
    slug: 'sizzling-bbq',
    image: '/images/menu/Sizzling%20BBQ/chicken%20tikka.avif',
  },
];

export default function HomePage() {
  const featuredItems = menuItems.filter((i) => i.isHero);

  return (
    <>
      <HeroCarousel />

      {/* Philosophy strip */}
      <section className="bg-navy py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-serif text-2xl lg:text-3xl text-white leading-relaxed">
            &ldquo;Khaana sirf pet bharney k liye nahi hota — yeh ek zubaan hai,
            ek yaad hai, ek mohabbat ki wirasat hai jo dastarkhaan se dastarkhaan
            safar karti hai.&rdquo;
          </p>
          <p className="mt-4 text-xs tracking-[0.3em] uppercase text-yellow/70">
            — Ustaad Rizwan, Head Chef, Mor Pankh
          </p>
        </div>
      </section>

      <DailySpecial />

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

      {/* Signature Dishes */}
      <section className="bg-sky py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-3">Chef&apos;s Selection</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-white">Signature Dishes</h2>
            </div>
            <Link href="/menu" className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-gray-mid hover:text-white border-b border-gray-mid/40 pb-0.5 transition-colors duration-300">View all →</Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <Link href={`/menu/${item.id}`} className="group relative flex gap-5 bg-fawn p-5 hover:shadow-md transition-shadow duration-400">
                  <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="112px" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-orange mb-1">{item.category.replace('-', ' ')}</p>
                    <h3 className="font-serif text-xl text-white mb-2">{item.name}</h3>
                    <p className="text-gray-mid text-xs leading-relaxed line-clamp-2">{item.shortDescription}</p>
                    <p className="font-serif text-lg text-white mt-2">{item.price}</p>
                  </div>
                  <span className="absolute bottom-5 right-5 text-xs tracking-widest uppercase text-gray-light group-hover:text-orange transition-colors duration-300">Deep Dive →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
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
    </>
  );
}
