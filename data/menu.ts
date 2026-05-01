export type MenuCategory =
  | 'appetizers'
  | 'deals'
  | 'drinks'
  | 'hot-tandoor'
  | 'main-menu'
  | 'sizzling-bbq';

export interface MenuSection {
  title: string;
  content: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: string;
  shortDescription: string;
  tagline: string;
  image: string;
  heroImage: string;
  heroVideo?: string;
  sections: {
    nature: MenuSection;
    creation: MenuSection;
    facilities: MenuSection;
  };
  isHero?: boolean;
}

export const menuItems: MenuItem[] = [

  // ── APPETIZERS ─────────────────────────────────────────────────────────────
  {
    id: 'garlic-mayo-fries',
    name: 'Garlic Mayo Fries',
    category: 'appetizers',
    price: '₺180',
    shortDescription: 'Golden double-fried fries smothered in house garlic mayo and a chilli drizzle',
    tagline: 'Simple hai, lekin yaad rehti hai',
    image: '/images/menu/Appetizers/Garlic%20mayo%20fries.avif',
    heroImage: '/images/menu/Appetizers/Garlic%20mayo%20fries.avif',
    sections: {
      nature: {
        title: 'The Craving — ذائقہ',
        content: 'Garlic mayo fries are the universal language of street snacking — no cuisine, no border, no age group immune to their pull. At Mor Pankh we took the classic and pushed it into desi territory: our garlic mayo is spiked with a whisper of roasted cumin and green chilli, making it unmistakably ours.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Fries are blanched at 140°C then flash-fried at 195°C for maximum crisp. The mayo is whipped in-house daily: roasted garlic blended smooth, folded into full-fat mayo with a pinch of chilli flakes, black pepper, and a squeeze of fresh lemon. Drizzled generously over the hot fries so the sauce warms into every crevice.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a paper-lined wire basket with a pot of extra garlic mayo on the side. Sprinkled with fresh chives and a shake of paprika. Best consumed immediately — the window between perfect and cold is exactly four minutes.',
      },
    },
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    category: 'appetizers',
    price: '₺200',
    shortDescription: 'Crushed samosas under spiced chickpeas, cool dahi, imli and hari chutney',
    tagline: 'Lahore ki galiyon ka sab se famous meetup',
    image: '/images/menu/Appetizers/Samosa%20Chaat.jpg',
    heroImage: '/images/menu/Appetizers/Samosa%20Chaat.jpg',
    sections: {
      nature: {
        title: 'The Craving — ذائقہ',
        content: 'Samosa chaat is where two of Pakistan\'s greatest street foods collide — the crispy samosa and the explosive world of chaat. Born on the food carts of Lahore\'s Anarkali and Karachi\'s Burns Road, this dish is an exercise in controlled chaos: hot, cold, sweet, sour, crunchy, and soft all in one spoonful.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Hot samosas are crushed lightly to expose their filling, then loaded with chickpea chaat (chana cooked with tamarind, pomegranate seeds, and cumin), beaten dahi seasoned with kala namak, a generous pour of aged imli chutney, and our vivid hari chutney. Finished with a blizzard of chaat masala, sev, and fresh coriander.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served immediately in a wide shallow bowl — this dish cannot wait. Eat from the outside in, working through the crispy edges before they surrender to the dahi. Every bite is different. Every bite is correct.',
      },
    },
  },
  {
    id: 'samose',
    name: 'Samose',
    category: 'appetizers',
    price: '₺160',
    shortDescription: 'Hand-folded crispy pastry with spiced aloo-matar, two chutneys',
    tagline: 'Saat sau saal ki kahani, ek kaatay mein',
    image: '/images/menu/Appetizers/Samose.jpg',
    heroImage: '/images/menu/Appetizers/Samose.jpg',
    sections: {
      nature: {
        title: 'The Craving — ذائقہ',
        content: 'The samosa arrived in the subcontinent via Persian and Central Asian traders in the 13th century. Over 700 years, the narrow lanes of Lahore, Karachi, and Hyderabad transformed it from an aristocratic court snack into the most democratic street food in all of South Asia.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Our pastry is hand-rolled to exactly 2mm — thin enough to shatter on the bite, thick enough to contain the filling. The aloo-matar masala is cooked with whole coriander, crushed black pepper, and our house chaat masala blend, then cooled completely before stuffing. Each samosa is sealed with flour paste and fried at 165°C to a deep bronze.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served hot in pairs with house imli chutney and a vivid green coriander-mint chutney, both made fresh every morning. Finished tableside with a pinch of chaat masala and a squeeze of lime. The samosa must be eaten within three minutes. This is an instruction, not a suggestion.',
      },
    },
  },
  {
    id: 'masala-fries',
    name: 'Masala Fries',
    category: 'appetizers',
    price: '₺170',
    shortDescription: 'Double-fried fries tossed in chaat masala, red chilli and dried mango powder',
    tagline: 'Firangi snack, desi rooh',
    image: '/images/menu/Appetizers/masalafries-720x720.webp',
    heroImage: '/images/menu/Appetizers/masalafries-720x720.webp',
    sections: {
      nature: {
        title: 'The Craving — ذائقہ',
        content: 'Masala fries were born at the street carts of Karachi\'s Do Darya and Lahore\'s MM Alam Road — the irresistible collision of Western fast food with desi chaat culture. Within a generation they became the default snack of every food street from Islamabad to Multan.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Double-fried Belgian-style: blanched at 135°C, rested, then crisped at 190°C until deeply golden. Drained and tossed immediately while steam-hot in our dry masala blend of chaat masala, kashmiri red chilli, dried mango powder (amchur), and cumin — so the spices fuse into the crust.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a paper cone with imli chutney, hari chutney, and our house masala mayo. Spice levels: Halka (mild), Teekha (medium), or Lahori (maximum — waiver implied). We recommend Lahori.',
      },
    },
  },
  {
    id: 'pani-poori-shots',
    name: 'Pani Poori Shots',
    category: 'appetizers',
    price: '₺190',
    shortDescription: 'Crispy hollow pooris filled with spiced aloo, dunked in chilled imli-pudina water',
    tagline: 'Ek kaata, ek dhoka, ek muskurahat',
    image: '/images/menu/Appetizers/pani%20poori%20shots.jpg',
    heroImage: '/images/menu/Appetizers/pani%20poori%20shots.jpg',
    sections: {
      nature: {
        title: 'The Craving — ذائقہ',
        content: 'Pani poori — golgappa, puchka, call it what you will — is South Asia\'s most joyful bite. The hollow crispy shell, the spiced filling, and above all the explosion of ice-cold flavoured water: it is an experience that cannot be replicated by any other food in any other cuisine anywhere on earth.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Semolina pooris are puffed in oil at 190°C until perfectly hollow and golden. Filled with a mixture of spiced mashed potato, boiled chickpeas, and raw onion. Our pani is blended from fresh pudina, coriander, green chilli, black salt, roasted cumin, and tamarind — strained cold and served ice-chilled.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served assembled and ready to dunk in a bowl of our signature pani. Six pooris per portion — eat in one bite. Repeat. There is no dignified way to eat pani poori and that is precisely the point.',
      },
    },
  },

  // ── DEALS ──────────────────────────────────────────────────────────────────
  {
    id: 'deal-1',
    name: 'Deal 1',
    category: 'deals',
    price: '₺599',
    shortDescription: 'A complete meal for one — main course, side, bread and a drink at one great price',
    tagline: 'Ek deal, poora khaana',
    image: '/images/menu/Deals/deal%201.png',
    heroImage: '/images/menu/Deals/deal%201.png',
    sections: {
      nature: {
        title: 'The Value — قدر',
        content: 'Deal 1 is Mor Pankh\'s entry-level feast — designed for the solo diner who wants the full experience without compromise. Everything is included: a main, a side, fresh bread, and a cold drink. No hidden extras. No regrets.',
      },
      creation: {
        title: 'The Contents — مواد',
        content: 'Curated daily by our kitchen: a rotating main from our grill or karahi station, a side of boondi raita or masala fries, two freshly baked naans, and a chilled drink from our house selection. Quality identical to à la carte — the deal is the price.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served together on a tray with everything arranged for immediate enjoyment. Available all day from opening. Best consumed with company, though perfectly suited for the determined solo diner.',
      },
    },
  },
  {
    id: 'deal-2',
    name: 'Deal 2',
    category: 'deals',
    price: '₺999',
    shortDescription: 'The family table — two mains, sides, a full bread basket and two drinks',
    tagline: 'Do log, ek dastarkhaan, hazaar khushiyaan',
    image: '/images/menu/Deals/deal%202.png',
    heroImage: '/images/menu/Deals/deal%202.png',
    sections: {
      nature: {
        title: 'The Value — قدر',
        content: 'Deal 2 is built for sharing. Two mains, two sides, a full basket of fresh tandoor bread, and two drinks — the complete Mor Pankh experience for two people at a price that makes the decision easy.',
      },
      creation: {
        title: 'The Contents — مواد',
        content: 'Choose any two mains from our menu, paired with your choice of sides (boondi raita, masala fries, or garden salad). A full bread basket with naan, roti, and paratha fresh from the tandoor. Two chilled drinks of your choice to complete the spread.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served family-style across the table — the way Pakistani food is meant to be eaten. Shared plates, shared bread, shared conversation. Deal 2 is our most popular order and the one most likely to result in plans for a second visit.',
      },
    },
    isHero: true,
  },
  {
    id: 'deal-3',
    name: 'Deal 3',
    category: 'deals',
    price: '₺1599',
    shortDescription: 'The full spread — three mains, BBQ platter, bread basket and four drinks for the whole table',
    tagline: 'Poori mehfil, ek hi bill',
    image: '/images/menu/Deals/deal%203.png',
    heroImage: '/images/menu/Deals/deal%203.png',
    sections: {
      nature: {
        title: 'The Value — قدر',
        content: 'Deal 3 is for when the whole group is gathered and no one wants to decide. Three mains, a full BBQ platter from our sizzling grill, a bread basket, and four drinks. This is the Mor Pankh grand spread, assembled for the table that means business.',
      },
      creation: {
        title: 'The Contents — مواد',
        content: 'Three mains of your choice from any category, a mixed BBQ platter with chicken tikka, malai boti, and reshmi kebab, a full bread basket with assorted tandoor breads, and four chilled drinks. Accompanied by a house salad and dipping chutneys.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Arrives in a procession — the BBQ platter first, sizzling and fragrant, followed by mains and bread. Four drinks arrive chilled. This deal requires a minimum of four people and a maximum appetite. We will not judge you for ordering more bread.',
      },
    },
    isHero: true,
  },
  {
    id: 'deal-4',
    name: 'Deal 4',
    category: 'deals',
    price: '₺2499',
    shortDescription: 'The banquet — full menu selection for 6-8 people, every category represented',
    tagline: 'Mor Pankh ka poora rang, ek dastarkhaan pe',
    image: '/images/menu/Deals/deal%204.png',
    heroImage: '/images/menu/Deals/deal%204.png',
    sections: {
      nature: {
        title: 'The Value — قدر',
        content: 'Deal 4 is the Mor Pankh banquet — curated for large gatherings where everyone should taste everything. A selection from every category: appetisers, karahi, biryani, BBQ, tandoor breads, drinks, and dessert. The complete rainbow of what we do, served for a full table.',
      },
      creation: {
        title: 'The Contents — مواد',
        content: 'A chef-curated selection from all six menu categories: a full appetiser spread, two karahis, a full biryani handi, a BBQ mixed grill, a complete bread basket, six drinks, and a dessert platter. Every dish prepared to the same standard as individual orders.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Requires advance booking — 24 hours preferred. The full spread arrives in waves across the table: appetisers first, then mains, then BBQ, then dessert. For 6-8 people. For any occasion that deserves a proper mehfil.',
      },
    },
  },

  // ── DRINKS ─────────────────────────────────────────────────────────────────
  {
    id: 'banana-milkshake',
    name: 'Banana Milkshake',
    category: 'drinks',
    price: '₺190',
    shortDescription: 'Thick ripe banana blended with whole milk, vanilla and a crown of whipped cream',
    tagline: 'Pehli sip pe muskurahat, poori glass pe sukoon',
    image: '/images/menu/Drinks/Banana-Milkshake-5-1.jpg',
    heroImage: '/images/menu/Drinks/Banana-Milkshake-5-1.jpg',
    sections: {
      nature: {
        title: 'The Comfort — سکون',
        content: 'The banana milkshake holds a special place in Pakistani café culture — it is the drink of after-school snack stalls, roadside dhabas, and every ice cream parlour from Lahore to Quetta. Ours is made the way it should always be made: with real bananas, real milk, and no shortcuts.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Overripe Pakistani bananas, chosen for their sweetness, blended with chilled whole milk, a scoop of vanilla ice cream, and a pinch of green cardamom. Blended thick — we do not serve a banana-flavoured water. Poured into a chilled tall glass, topped with whipped cream and a single banana chip.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served so thick it requires a wide straw or a long spoon — both are provided. Available plain or with a chocolate drizzle. Pairs exceptionally well with anything from our BBQ section, cutting through the smoke and spice with effortless sweetness.',
      },
    },
    isHero: true,
  },
  {
    id: 'chai',
    name: 'Doodh Patti Chai',
    category: 'drinks',
    price: '₺120',
    shortDescription: 'Full-milk chai simmered with cardamom, black pepper and cinnamon',
    tagline: 'Roz ki subah, dil ki zaroorat',
    image: '/images/menu/Drinks/Chai.avif',
    heroImage: '/images/menu/Drinks/Chai.avif',
    sections: {
      nature: {
        title: 'The Ritual — رسم',
        content: 'Doodh patti — a full-milk brew simmered directly on the flame — is both a ceremonial greeting and a daily ritual observed from Khyber to Karachi, in every dhaba, every drawing room, and every kitchen without exception. To refuse a cup is almost impolite.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Loose-leaf Assam tea added to whole milk at a rolling boil. Cardamom pods, cracked black pepper, a sliver of cinnamon, and a pinch of fennel steep together for twelve minutes. Strained through a fine jali and poured in one confident motion — the mark of a true chai waala.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a clay kulhar in cooler months, a frosted steel glass in summer. Each cup arrives with a small square of jaggery on the saucer — the traditional sweetener of the Punjab plains. No sugar added in the cup.',
      },
    },
  },
  {
    id: 'ice-tea',
    name: 'Ice Tea',
    category: 'drinks',
    price: '₺160',
    shortDescription: 'House-brewed black tea, chilled and sweetened with honey and fresh lemon',
    tagline: 'Thandak mein bhi khushboo',
    image: '/images/menu/Drinks/ice%20tea.jpg',
    heroImage: '/images/menu/Drinks/ice%20tea.jpg',
    sections: {
      nature: {
        title: 'The Refreshment — تازگی',
        content: 'Ice tea at Mor Pankh is not from a bottle. We brew our own from premium loose-leaf black tea, chill it over ice, and balance it with raw honey and fresh lemon — a ritual that takes four hours each morning and results in a glass that no commercially produced ice tea can rival.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Ceylon black tea brewed strong, chilled rapidly over ice, then sweetened with Pakistani raw honey (not syrup) and a squeeze of fresh lemon. A mint sprig is added during chilling. Available in three variants: original, peach (with fresh peach purée), and spiced (with cinnamon and cardamom).',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a tall glass with extra ice, a lemon wheel, and a sprig of fresh pudina. A slice of lemon on the rim is not decoration — squeeze it in. The spiced variant is our chef\'s personal recommendation for pairing with the BBQ section.',
      },
    },
  },
  {
    id: 'mint-margarita',
    name: 'Mint Margarita',
    category: 'drinks',
    price: '₺170',
    shortDescription: 'Blended mint, lime, sugar and soda — a Pakistani street favourite turned elegant',
    tagline: 'Hari bhali, thand bhari',
    image: '/images/menu/Drinks/mint%20margerita.jpg',
    heroImage: '/images/menu/Drinks/mint%20margerita.jpg',
    sections: {
      nature: {
        title: 'The Refreshment — تازگی',
        content: 'The mint margarita is a creation of Pakistan\'s café culture — specifically the outdoor dining terraces of Lahore\'s Gulberg and Karachi\'s Zamzama, where it appeared in the early 2000s and spread to every restaurant in the country within five years. It has no foreign precedent; this drink is entirely Pakistani.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Fresh pudina blended with lime juice, sugar syrup, and a pinch of black salt until brilliantly green and smooth. Poured over crushed ice and topped with chilled soda water. Each batch uses fresh mint picked within 24 hours — the colour and flavour degrade rapidly with age.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a wide glass with a salted rim (optional) and a full sprig of mint as garnish. The black salt on the rim amplifies every flavour — we strongly recommend keeping it. Best paired with anything from our Appetizers section.',
      },
    },
  },
  {
    id: 'season-special-drink',
    name: 'Season Special',
    category: 'drinks',
    price: '₺180',
    shortDescription: 'Chef\'s rotating seasonal drink — changes weekly with fresh local produce',
    tagline: 'Har hafte nayi khushboo, nayi tazgi',
    image: '/images/menu/Drinks/season%20special%20drink.webp',
    heroImage: '/images/menu/Drinks/season%20special%20drink.webp',
    sections: {
      nature: {
        title: 'The Season — موسم',
        content: 'Mor Pankh\'s Season Special changes every week based on what the market brings in. In summer: fresh mango lassi, watermelon mint, or rooh afza sharbat. In winter: kesar doodh, thandai, or warm apple cider with spices. The season special is our chef\'s love letter to the Pakistani calendar.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Prepared fresh each week using peak-season fruit and produce. No concentrates, no off-season produce, no approximations. When mangoes are at their best, we use mangoes. When guavas arrive, we celebrate guavas. The seasonal availability is honest — when it runs out, it runs out.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Ask your server what is currently on — the season special changes and is not always updated on the menu. Available in limited quantities each day. If you are unsure, order it: our track record on seasonal drinks is perfect.',
      },
    },
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    category: 'drinks',
    price: '₺150',
    shortDescription: 'Churned buffalo-milk dahi with sugar, cardamom and a crown of fresh malai',
    tagline: 'Punjab ki sab se meeti mohabbat',
    image: '/images/menu/Drinks/sweet-lassi3.webp',
    heroImage: '/images/menu/Drinks/sweet-lassi3.webp',
    sections: {
      nature: {
        title: 'The Ritual — رسم',
        content: 'Lassi predates recorded history in the Punjab plains. Ancient texts from the Indus Valley region mention fermented dairy drinks as both medicine and sustenance. The sweet dahi lassi of Lahore, poured from clay pots by street vendors, is considered among the finest cold beverages in all of South Asia.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Buffalo milk dahi, set for 18 hours in clay matkas, is churned with ice, sugar, and a pinch of green cardamom until perfectly smooth and slightly frothy. Finished with a generous spoonful of fresh malai (cream skimmed from the top of buffalo milk) floated on the surface.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Poured into a tall frosted glass, crowned with malai, and finished with a dried rose petal — the traditional mark of a Lahori lassi house. Served with a long steel spoon. The malai is to be stirred in gradually, not all at once.',
      },
    },
    isHero: true,
  },

  // ── HOT TANDOOR ────────────────────────────────────────────────────────────
  {
    id: 'aloo-paratha',
    name: 'Aloo ka Paratha',
    category: 'hot-tandoor',
    price: '₺195',
    shortDescription: 'Whole-wheat flatbread stuffed with spiced mashed potato and green chilli',
    tagline: 'Punjab ki khushboo, haath ka kaam',
    image: '/images/menu/Hot%20Tandoor/aloo%20ka%20paratha.png',
    heroImage: '/images/menu/Hot%20Tandoor/aloo%20ka%20paratha.png',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Aloo paratha is the most beloved breakfast in all of Punjab — eaten from Lahore to Amritsar, from truck drivers to university professors, its universality is total. It is the dish most likely to appear in every Pakistani\'s memory of childhood, glistening with white butter on a cold morning.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Whole wheat atta kneaded with desi ghee. Filling: mashed potato, finely chopped green chilli, fresh coriander, ajwain seeds, and a pinch of amchur for tartness. Stuffed generously, sealed, and pressed flat. Cooked on a hot tawa in desi ghee — both sides, pressing gently to ensure even contact.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served straight from the tawa with dahi, mango achar, and a pat of white butter on top. The butter is not optional. Tear it, dip it, fold it — there are no rules for eating aloo paratha except to eat it hot.',
      },
    },
  },
  {
    id: 'chicken-cheese-paratha',
    name: 'Chicken Cheese Paratha',
    category: 'hot-tandoor',
    price: '₺260',
    shortDescription: 'Paratha stuffed with spiced minced chicken and melted cheddar cheese',
    tagline: 'Lahori fusion at its finest',
    image: '/images/menu/Hot%20Tandoor/chicken%20cheese%20paratha.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/chicken%20cheese%20paratha.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The chicken cheese paratha is a creation of Lahore\'s Food Street — where the traditional paratha met the city\'s enthusiasm for bold, indulgent flavours. It is unapologetically modern, unapologetically generous, and has become a staple of Pakistani café breakfast culture in under a decade.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Minced chicken dry-cooked with green chillies, cumin, and coriander, mixed warm with grated cheddar cheese. The filling is sealed inside whole-wheat dough and pressed flat, cooked slowly in desi ghee so the cheese melts completely through the layers. Every bite pulls.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Sliced into triangles, served with a raita whipped with black salt, imli chutney, and a pat of butter. Recommended with a glass of Sweet Lassi — the contrast between spiced chicken, melted cheese, and cold lassi is the entire point.',
      },
    },
  },
  {
    id: 'garlic-cheese-naan',
    name: 'Garlic Cheese Naan',
    category: 'hot-tandoor',
    price: '₺200',
    shortDescription: 'Tandoor naan loaded with roasted garlic, melted cheese and green herbs',
    tagline: 'Naan ka naya andaaz',
    image: '/images/menu/Hot%20Tandoor/garlic%20cheese%20naan.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/garlic%20cheese%20naan.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The garlic cheese naan is the intersection of Pakistan\'s ancient tandoor tradition and its contemporary appetite for bold, crowd-pleasing flavours. It began as a restaurant experiment and became, within years, one of the most-ordered breads in every Pakistani dhaba with a tandoor.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Leavened naan dough brushed with house garlic butter (roasted garlic blended with desi ghee and fresh coriander), topped with grated mozzarella, and slapped into the tandoor at 400°C. The cheese melts and slightly chars at the edges in the 90 seconds it takes to cook — that char is the best part.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Pulled from the tandoor and served immediately, still pulling cheese. Available as a side to any karahi or as a stand-alone snack with house dips. Best consumed in the first two minutes before the cheese sets.',
      },
    },
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    category: 'hot-tandoor',
    price: '₺150',
    shortDescription: 'Classic tandoor naan brushed with roasted garlic butter and fresh coriander',
    tagline: 'Haath ka kaam, aatish ka karishma',
    image: '/images/menu/Hot%20Tandoor/garlic-naan-1.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/garlic-naan-1.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Garlic naan sits at the crossroads of the Persian naan tradition and the Punjabi love for roasted garlic. It is the bread of choice across every karahi house and BBQ restaurant in Pakistan — the one that always runs out first at any shared table.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Leavened dough enriched with yoghurt is slapped by hand onto the inner wall of a 400°C tandoor. As it cooks, roasted garlic butter — made fresh each morning with three whole heads of garlic, desi ghee, and a pinch of salt — is brushed on the moment it emerges.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served hot from the tandoor on a wooden peel, fragrant and glistening. Sprinkled with fresh coriander. Order one extra — there has never been a table at Mor Pankh that ordered too much garlic naan.',
      },
    },
  },
  {
    id: 'lachha-paratha',
    name: 'Lachha Paratha',
    category: 'hot-tandoor',
    price: '₺185',
    shortDescription: 'Multi-layered flaky whole-wheat flatbread cooked in desi ghee',
    tagline: 'Mughal kitchens se aapke dastarkhaan tak',
    image: '/images/menu/Hot%20Tandoor/lacchaa%20paratha.png',
    heroImage: '/images/menu/Hot%20Tandoor/lacchaa%20paratha.png',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The lachha paratha\'s layered flakiness was perfected in the Mughal royal kitchens. From court it travelled to the common table — and found its most beloved home at the Punjabi breakfast spread, glistening with white butter in the morning light.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Whole wheat atta kneaded with desi ghee, rested 30 minutes. Rolled thin, layered with ghee, folded accordion-style, coiled, rolled out again — this double technique creates 24 visible flaky layers that no machine can replicate.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served straight off the tawa, glistening with ghee, alongside mango achar, smoked green chutney, and fresh dahi. The paratha is torn, never cut.',
      },
    },
  },
  {
    id: 'phulka-roti',
    name: 'Phulka Roti',
    category: 'hot-tandoor',
    price: '₺80',
    shortDescription: 'Thin whole-wheat rotis puffed directly on the flame — light and smoke-kissed',
    tagline: 'Sab se pehle, sab se zaroori',
    image: '/images/menu/Hot%20Tandoor/phulka-roti-chappati-recipe.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/phulka-roti-chappati-recipe.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The phulka is Pakistan\'s most fundamental bread — eaten at every meal, in every home, in every province. It predates the tandoor by centuries, cooked directly over flame since the time of the Indus Valley Civilisation. No other bread is as important, as frequent, or as consistently underrated.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Whole wheat atta kneaded smooth and rested. Rolled paper-thin and placed on a hot tawa for 30 seconds each side, then lifted directly onto the open flame for 3-5 seconds — the phulka puffs into a balloon of steam, cooking from the inside. Served immediately.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served hot in a cloth-lined basket, plain or brushed with desi ghee. Served in pairs — order more freely. Phulka is the companion of every karahi, every dal, every curry. It is never the main event but always the most missed when absent.',
      },
    },
  },
  {
    id: 'plain-naan',
    name: 'Plain Naan',
    category: 'hot-tandoor',
    price: '₺120',
    shortDescription: 'Classic tandoor-baked leavened flatbread, soft inside, charred outside',
    tagline: 'Saada naan, asli zaiqay ka saathi',
    image: '/images/menu/Hot%20Tandoor/plain%20naan.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/plain%20naan.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The word naan comes from the Persian for "bread" — a reminder of the Central Asian origins of the tandoor tradition. For five centuries, naan has been the inseparable companion of Mughal cuisine, present at the royal dastarkhaan and at every humble dhaba in equal measure.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Leavened dough enriched with yoghurt is rested two hours, stretched by hand, then slapped directly onto the inner wall of a 400°C clay tandoor by our naan-maker — a technique passed from generation to generation without written instruction.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served hot from the tandoor on a wooden peel, brushed with desi ghee. Plain naan is the foundation on which everything else at Mor Pankh is properly experienced. Order generously.',
      },
    },
  },
  {
    id: 'plain-paratha',
    name: 'Plain Paratha',
    category: 'hot-tandoor',
    price: '₺140',
    shortDescription: 'Layered whole-wheat flatbread cooked in desi ghee on the tawa',
    tagline: 'Saadgi mein azmat',
    image: '/images/menu/Hot%20Tandoor/plain%20paratha.jpg',
    heroImage: '/images/menu/Hot%20Tandoor/plain%20paratha.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'The plain paratha is the workhorse of the Pakistani breakfast table — eaten with dahi, with halwa, with pickles, with eggs, with whatever is available. Its simplicity is its genius. In a cuisine of bold flavours, the plain paratha provides the perfect neutral counterpoint.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Whole wheat dough layered twice with desi ghee, folded, and cooked on a medium-hot tawa until both sides are evenly golden and the layers have separated into visible, flaky strata. Takes exactly 4 minutes from dough ball to plate.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served with dahi and achar. The foundation of the Mor Pankh breakfast table. Add a fried egg for a complete meal. Add chai for a perfect morning.',
      },
    },
  },

  // ── MAIN MENU ──────────────────────────────────────────────────────────────
  {
    id: 'beef-lacha-paratha-burger',
    name: 'Beef Lacha Paratha Burger',
    category: 'main-menu',
    price: '₺390',
    shortDescription: 'Juicy beef patty in a crispy lachha paratha bun with house sauce and pickles',
    tagline: 'Jab do worlds milte hain',
    image: '/images/menu/Main%20Menu/beef%20lacha%20paratha%20burger.jpg',
    heroImage: '/images/menu/Main%20Menu/beef%20lacha%20paratha%20burger.jpg',
    sections: {
      nature: {
        title: 'The Fusion — ملاپ',
        content: 'The paratha burger is Pakistan\'s greatest contribution to fusion food — and the most delicious argument that local ingredients always beat imported ones. Replacing the bun with a crispy lachha paratha is not a novelty act; the flaky layers hold the sauce, absorb the juices, and add a texture dimension no bread bun can match.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'A house beef patty of 180g, seasoned with garam masala, black pepper, and onion, grilled over charcoal. Placed in a freshly made lachha paratha with house sauce (a blend of imli, mayo, and green chutney), pickled onions, tomato, and iceberg. The paratha is toasted in ghee before assembly.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served with masala fries and our house dip. Held together with a skewer — remove it before eating or embrace the controlled chaos. Either way, eat it before the paratha absorbs the sauce fully. That is your four-minute window again.',
      },
    },
  },
  {
    id: 'beef-karahi',
    name: 'Beef Karahi',
    category: 'main-menu',
    price: '₺480',
    shortDescription: 'Tender beef cooked in iron karahi with fresh tomatoes, ginger and green chillies',
    tagline: 'KPK ki aag, Mor Pankh ke dastarkhaan pe',
    image: '/images/menu/Main%20Menu/beef-karahi-step7.jpg',
    heroImage: '/images/menu/Main%20Menu/beef-karahi-step7.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Beef karahi is the Pashtun claim on Pakistani BBQ and karahi culture — richer and more intense than its chicken counterpart, carrying the deep notes of slow-rendered fat and charred iron that define the frontier kitchen. It is the dish ordered by those who know exactly what they want.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Tender cuts of beef go into a scorching iron karahi with minimal oil, cooking in their own rendered fat first. Fresh tomatoes, julienne ginger, and whole green chillies are added in three intervals — each building a different depth in the sauce. No pre-made masala. Every adjustment made by instinct and heat.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Brought to the table in the cooking karahi, still sizzling. Finished tableside with fresh coriander, lemon, and extra ginger julienne. Accompanied by four fresh rotis. Beef karahi does not wait — neither should you.',
      },
    },
    isHero: true,
  },
  {
    id: 'biryani',
    name: 'Biryani',
    category: 'main-menu',
    price: '₺360',
    shortDescription: 'Dum-sealed Basmati biryani with marinated chicken, saffron and crispy onions',
    tagline: 'Mughal dastarkhaan ki shaan, aaj bhi zinda',
    image: '/images/menu/Main%20Menu/biriyani.jpg',
    heroImage: '/images/menu/Main%20Menu/biriyani.jpg',
    heroVideo: '/images/Videos/Biryani.mp4',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Biryani derives from the Persian "birian" — to fry before cooking. It arrived in the subcontinent with the Mughal Emperor Humayun in the 16th century and was refined over 200 years of royal patronage into one of the world\'s most complex rice dishes. Every Pakistani city guards its own version with fierce civic pride.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Chicken marinated overnight in yoghurt, ginger-garlic, raw papaya, and a 16-spice masala. Aged Basmati parboiled to 70% doneness. Layered with caramelised onions, fresh mint, and saffron milk in a wide handi, sealed with dough and placed over a tawa on low flame for 40 minutes of dum.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'The handi is broken open at the table — a ritual moment when sealed steam escapes carrying the full aroma of saffron and slow-cooked chicken. Served with boondi raita, a wedge of lime, and kachumber salad. Biryani at Mor Pankh is ordered for the table.',
      },
    },
    isHero: true,
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'main-menu',
    price: '₺400',
    shortDescription: 'Tandoor-charred chicken in a velvety tomato-cream-ghee makhani sauce',
    tagline: 'Taqseem ke baad bhi, dono taraf ka dil',
    image: '/images/menu/Main%20Menu/butter-chicken-ac2ff98.jpg',
    heroImage: '/images/menu/Main%20Menu/butter-chicken-ac2ff98.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Created at Moti Mahal Delhi in the 1950s, murg makhani crossed the Partition Line sewn into the memory of Punjabi cooks who carried it to Lahore, Rawalpindi, and Karachi — where it found a new home and became as Pakistani as it is Indian.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Chicken thighs marinated overnight in full-fat dahi and kashmiri red chilli, roasted in the tandoor for authentic char. The makhani sauce: charred tomatoes, fresh cream, and desi ghee in a copper kadhai — simmered two full hours until silken, finished with crushed kasuri methi.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served in a copper karahi with a ribbon of cream on the surface. Accompanied by butter naan and a side of kachumber salad. This dish connects us to a shared history that no border has been able to erase.',
      },
    },
    isHero: true,
  },
  {
    id: 'chef-specials',
    name: 'Chef\'s Specials',
    category: 'main-menu',
    price: '₺550',
    shortDescription: 'Rotating weekly creation by our head chef — ask your server for today\'s feature',
    tagline: 'Aaj ka andaaz, kal ki yaad',
    image: '/images/menu/Main%20Menu/chef%20specials.webp',
    heroImage: '/images/menu/Main%20Menu/chef%20specials.webp',
    sections: {
      nature: {
        title: 'The Creation — تخلیق',
        content: 'The Chef\'s Special is the most honest dish at Mor Pankh — an unscripted expression of whatever the kitchen is most excited about this week. It changes without warning, without apology, and without compromise. It has also never disappointed.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Decided each Monday morning based on the best available seasonal produce and the chef\'s current inspiration. Could be a new fusion concept, a forgotten regional classic, or a perfected version of a street food favourite. Always made with the same care as our signature dishes — often more.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Ask your server what it is today. They will describe it enthusiastically. Order it. You have our word it is worth trusting.',
      },
    },
  },
  {
    id: 'chicken-lacha-paratha',
    name: 'Chicken Lacha Paratha',
    category: 'main-menu',
    price: '₺350',
    shortDescription: 'Spiced chicken filling wrapped in a freshly made lachha paratha roll',
    tagline: 'Street style, restaurant soul',
    image: '/images/menu/Main%20Menu/chicken%20lacha%20paratha.jpg',
    heroImage: '/images/menu/Main%20Menu/chicken%20lacha%20paratha.jpg',
    sections: {
      nature: {
        title: 'The Fusion — ملاپ',
        content: 'The chicken lacha paratha roll is the Pakistani answer to the wrap — but the paratha is not just a vessel, it is the star. The flaky, layered bread absorbs the spiced chicken juices, carries the chutney, and provides a textural richness no tortilla or flatbread from any other cuisine can offer.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Strips of chicken tikka mixed with sliced pyaz, fresh coriander, green chilli, and a spoonful of our house hari chutney, wrapped inside a freshly made lachha paratha while it is still warm from the tawa. Pressed lightly on the tawa once wrapped to seal the flavours inside.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served sliced in half, wrapped in paper to hold it together. With a side of extra hari chutney and a small bowl of raita. Best eaten with both hands, leaning slightly forward. This is acknowledged by the entire staff as correct form.',
      },
    },
  },
  {
    id: 'chicken-mandi',
    name: 'Chicken Mandi',
    category: 'main-menu',
    price: '₺540',
    shortDescription: 'Whole slow-roasted chicken over smouldering wood, rested on saffron rice',
    tagline: 'Arabia se Karachi, Karachi se aapki mez',
    image: '/images/menu/Main%20Menu/chicken%20mandi.jpg',
    heroImage: '/images/menu/Main%20Menu/chicken%20mandi.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Mandi originates in Yemen\'s Hadhramaut region and arrived in Pakistan through the port cities of Karachi and Gwadar along Arabian Sea trade routes. It found an instant, devoted audience in a country that already understood slow-cooked magnificence.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'A whole chicken dry-rubbed with mandi spices — black lime, cardamom, cumin, cinnamon, and saffron — slow-roasted in our sealed taboon-inspired oven over smouldering fruitwood for 3-4 hours until the skin is amber and the meat falls from the bone without persuasion.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'The whole roasted chicken placed on a shared platter of saffron long-grain rice, with house tomato salsa, boondi raita, and mandi shorba. A communal dish — ordered for the table, eaten together, remembered collectively.',
      },
    },
  },

  // ── SIZZLING BBQ ───────────────────────────────────────────────────────────
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    category: 'sizzling-bbq',
    price: '₺380',
    shortDescription: 'Overnight-marinated chicken pieces cooked at 400°C in a clay tandoor',
    tagline: 'Panj hazaar saal puraani aag, aaj bhi wohi zaiqah',
    image: '/images/menu/Sizzling%20BBQ/chicken%20tikka.avif',
    heroImage: '/images/menu/Sizzling%20BBQ/chicken%20tikka.avif',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Tikka comes from the Pashto for "chunk." Evidence of clay tandoor cooking has been found at Indus Valley sites dating back 5,000 years. The Mughals elevated the technique to art; the streets of Peshawar and Lahore\'s Gawalmandi brought it back to the people.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Chicken marinated 24 hours in fresh dahi, tandoori masala, ginger-garlic paste, mustard oil, and four dried chillies. Skewered on flat iron seekh and lowered into a 400°C clay tandoor for 8 minutes. The char is not an accident — it is where the flavour lives.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served on a cast iron sizzler plate over sliced onions and green chillies, with fresh lime and three house chutneys. The sizzle on arrival is part of the dish. We designed Mor Pankh so every table hears every sizzle.',
      },
    },
    isHero: true,
  },
  {
    id: 'chicken-malai-boti',
    name: 'Chicken Malai Boti',
    category: 'sizzling-bbq',
    price: '₺420',
    shortDescription: 'Cream-marinated chicken cooked in the tandoor — pale ivory outside, melting within',
    tagline: 'BBQ ka khamosh shahzada',
    image: '/images/menu/Sizzling%20BBQ/chicken-malai-boti-1024x683.jpg',
    heroImage: '/images/menu/Sizzling%20BBQ/chicken-malai-boti-1024x683.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Malai boti is the aristocrat of Pakistani BBQ — pale, creamy, mild in colour but devastating in tenderness. On every Pakistani BBQ spread, malai boti is the dish that runs out first.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Chicken marinated 12 hours in fresh cream, hung curd, white pepper, green cardamom, and a whisper of chaat masala. Tandoor temperature deliberately lower — 300°C for 6-7 minutes. The goal: snow-white surface, meltingly juicy interior.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served on a wooden platter with a swirl of fresh cream, hari chutney, naan, and raita. The garnish — a single green chilli placed across the cream — is the universal signal that this dish speaks in whispers. Listen carefully.',
      },
    },
  },
  {
    id: 'reshmi-kebab',
    name: 'Reshmi Kebab',
    category: 'sizzling-bbq',
    price: '₺360',
    shortDescription: 'Silky minced chicken seekh kebabs with cream, cheese and aromatic herbs',
    tagline: 'Resham jaisa, pyar jaisa',
    image: '/images/menu/Sizzling%20BBQ/reshmi%20kebab.jpg',
    heroImage: '/images/menu/Sizzling%20BBQ/reshmi%20kebab.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: '"Reshmi" means silky in Urdu — and the reshmi kebab earns its name completely. A cousin of the seekh kebab but in a different league of tenderness, it was refined in the Mughal courts for the express purpose of producing the softest, most yielding kebab possible.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Minced chicken processed to a paste with raw papaya as a tenderiser, blended with fresh cream, processed cheese, green chilli, coriander, and cardamom. Moulded onto flat seekh and cooked in the tandoor at 280°C — lower than tikka, longer than malai boti — for a texture that barely holds together.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served on a sizzler with sliced onions, a squeeze of lemon, and hari chutney. Eaten with naan — essential to capture the juices. Order one extra seekh per person: they always underestimate how many they will eat.',
      },
    },
  },
  {
    id: 'tikka-boti',
    name: 'Tikka Boti',
    category: 'sizzling-bbq',
    price: '₺400',
    shortDescription: 'Cubed chicken pieces double-marinated for an intensely charred, deeply flavoured boti',
    tagline: 'BBQ ka dil, dastarkhaan ki jaan',
    image: '/images/menu/Sizzling%20BBQ/tikka%20boti.jpg',
    heroImage: '/images/menu/Sizzling%20BBQ/tikka%20boti.jpg',
    sections: {
      nature: {
        title: 'The Origin — اصل',
        content: 'Tikka boti is the lovechild of tikka and boti — cubed chicken with the intense marination of tikka but the concentrated, charred-edged texture of boti. It is the most intensely flavoured item on our BBQ menu and the one most likely to inspire a return visit.',
      },
      creation: {
        title: 'The Craft — ہنر',
        content: 'Chicken cubed generously and double-marinated: first in raw papaya paste for 4 hours to tenderise, then in a full tikka marinade of dahi, mustard oil, and 12 spices overnight. Cooked on seekh at 420°C — slightly hotter than standard tikka — for extra char on the outside while remaining juicy inside.',
      },
      facilities: {
        title: 'The Table — دسترخوان',
        content: 'Served on a sizzler with sliced pyaz, hari mirch, fresh lime, and three chutneys. The portions are generous. The refill rate is the highest of any dish on our menu. We consider this confirmation of quality.',
      },
    },
  },
];

export const heroItems = menuItems.filter((item) => item.isHero);

export const studentSpecial = {
  id: 'mor-pankh-thali',
  name: 'Mor Pankh Thali',
  tagline: 'Ek price, poora rang — Mor Pankh ka sab se rangeen khaana.',
  description:
    'A rotating daily thali curated by our head chef — featuring a generous main course, boondi raita, freshly baked naan, and a chilled house drink. Full Mor Pankh quality, priced with students and regulars in mind.',
  price: '₺320',
  availability: 'Monday – Friday  ·  11:00 – 15:00',
  badge: 'Daily Special',
  image: '/images/menu/Main%20Menu/biriyani.jpg',
  includes: [
    'Rotating main course',
    'Boondi raita',
    'Freshly baked naan',
    'Chilled house drink',
  ],
};
