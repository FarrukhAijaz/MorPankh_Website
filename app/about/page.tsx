import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hamari Kahani — Mor Pankh',
  description:
    'Mor Pankh ki kahani — Pakistani desi cuisine ki mehabbat, Karachi aur Lahore ki galiyon se aapke dastarkhaan tak.',
};

const team = [
  {
    name: 'Ustaad Rizwan Ahmed',
    role: 'Head Chef & Co-founder',
    bio: "Lahore ki Anarkali ki galiyon mein pala, Ustaad Rizwan ne khana pakaana apni dadi ammi se seekha. Teen dahaiyyon ke tajrube ke baad, unhon ne Mor Pankh ki buniyaad rakhi — taake har plate mein woh mohabbat ho jo sirf ghar mein milti thi.",
    image: '/images/about/team-antoine.jpg',
  },
  {
    name: 'Zainab Rizvi',
    role: 'Creative Director & Co-founder',
    bio: "Karachi ki DHA mein parhi likhi Zainab ne Mor Pankh ko woh rooh di jo sirf ek Pakistani ghar mein hoti hai — garmi, khushbu, aur woh jazbaa jo kehta hai: yahan aao, baitho, khaao.",
    image: '/images/about/team-elise.jpg',
  },
  {
    name: 'Hassan Butt',
    role: 'Head of Hospitality',
    bio: "Peshawar ki mishmaalaan mehmaandaari ka waaris Hassan, yaqeen rakhta hai ke har mehmaan ko ghar wali izzat milni chahiye. Uske rehte koi bhi mez par akela nahi baithta.",
    image: '/images/about/team-marc.jpg',
  },
];

const values = [
  {
    title: 'Asl (اصل) — Authenticity',
    description:
      'We source our spices from the same bazaars of Karachi, Lahore, and Multan that generations of Pakistani cooks have trusted. No shortcuts. No substitutions.',
  },
  {
    title: 'Hunar (ہنر) — Craft',
    description:
      'Every karahi is cooked fresh to order in iron. Every naan is hand-slapped into the tandoor. Every biryani is sealed in clay. The old ways are the right ways.',
  },
  {
    title: 'Mehmaandaari (مہمان نوازی) — Hospitality',
    description:
      'In Pakistani culture, a guest is a gift from God. At Mor Pankh, every diner is treated with the same warmth you would receive in the finest Lahori home.',
  },
  {
    title: 'Yaadein (یادیں) — Memory',
    description:
      'Great food tastes like a memory. Every dish on our menu was designed to transport you — to a dhaba in Karachi, a family table in Lahore, a roadside stall in Peshawar.',
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[500px] flex items-end">
        <Image
          src="/images/download/mandi.png"
          alt="Mor Pankh"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
        <div className="relative z-10 px-8 lg:px-20 pb-16 lg:pb-24 max-w-4xl">
          <p className="text-cream text-xs tracking-[0.3em] uppercase mb-4">Est. 2019 — Karachi</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-white leading-tight">
            Pyaar, Zaiqah
            <br />
            aur Taareekh
          </h1>
        </div>
      </section>

      {/* ── Our Origin (white) ───────────────────────────────── */}
      <section className="bg-sky py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-5">
              01 — Shuruat
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Kahan Se Aayi Ye Mehfil
            </h2>
            <p className="text-gray-mid leading-relaxed mb-6">
              Mor Pankh 2019 mein Karachi ke ek chhote se kamre mein shuru hui — chaar mezen, ek tandoor, aur Ustaad Rizwan ka woh khwaab ke asli Pakistani khana, apni poori taareekh aur tehzeeb ke saath, kisi ek jagah par mile.
            </p>
            <p className="text-gray-mid leading-relaxed">
              &ldquo;Mehfil&rdquo; — ek Urdu lafz jo sirf ek jagah ko nahi, ek jazbaat ko bayan karta hai. Yeh woh lamha hai jab log saath baithte hain, khaana khaate hain, aur ek doosre ki baatein sunте hain. Hamara restaurant isi jazbaat ka ghar hai.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/download/chicken_karahi.jpg"
                alt="Karahi on the fire"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Atmosphere (fawn) ────────────────────────────────── */}
      <section className="bg-fawn-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.15} className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/download/halwa_puri.jpg"
                alt="Mor Pankh atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-orange mb-5">
              02 — Maahaul
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Dastarkhaan Ka Jazbaa
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Pakistani khane ki asli rooh dastarkhaan mein hai — woh dastarkhan jahan rishtedar jama hote hain, jahan chai ki pyaali kabhi khaali nahi hoti, jahan awaazein oonchi hoti hain aur hansna zaroori hota hai.
            </p>
            <p className="text-white/70 leading-relaxed"> Tandoor ki garmi, masalon ki khushbu, aur sizzler plate ki awaaz — yeh sab milakar ek aisa maahaul banate hain jo sirf ghar aur dhabe mein milta tha.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission (white) ──────────────────────────────────── */}
      <section className="bg-sky py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-8 lg:px-20 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-5">
              03 — Mission
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-10 leading-tight">
              Asli Zaiqay, Adab Ke Saath
            </h2>
            <p className="text-gray-mid leading-relaxed text-lg mb-8">
              Hamara mission hai ke Pakistani cuisine ko woh izzat mile jo use hamesha milni chahiye thi. Har recipe mein hum apne sheher ki taareekh, apne baap daada ka hunar, aur apni mitti ki khushbu shamil karte hain.
            </p>
            <p className="text-gray-mid leading-relaxed text-lg">
              We are committed to using authentic spice blends, traditional techniques — clay tandoor, iron karahi, sealed handi — and ingredients sourced with the same care your naani used when she cooked for the mehfil.
            </p>
          </ScrollReveal>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 text-left">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="border-t border-gray-light pt-6">
                  <h3 className="font-serif text-xl text-white mb-3">{v.title}</h3>
                  <p className="text-gray-mid text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team (fawn) ──────────────────────────────────────── */}
      <section className="bg-fawn py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-5">
              04 — Log
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white">Unke Haath Se Bana</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-serif text-xl text-white mb-3">{member.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom strip ────────────────────────────────────── */}
      <section className="relative h-64 lg:h-96">
        <Image
          src="/images/menu/biryani-1.jpg"
          alt="Mor Pankh kitchen"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
          <p className="font-serif text-3xl lg:text-5xl text-white text-center px-8">
            &ldquo;Khaana woh ibaadat hai jis mein pakaanay waale ki rooh shamil hoti hai.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
