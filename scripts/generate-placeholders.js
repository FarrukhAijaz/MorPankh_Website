'use strict';
/**
 * generate-placeholders.js
 * Creates placeholder JPEG files for every image slot in the project.
 * Run once with:  node scripts/generate-placeholders.js
 *
 * Replace any file with your own image, keeping the exact same filename.
 */

const fs   = require('fs');
const path = require('path');

// ── Minimal valid 1×1 white JPEG (no external deps required) ─────────────────
const JPEG_B64 =
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw' +
  '8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAED' +
  'ASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwD' +
  'AQACEQMRAD8AJQAB/9k=';

const PLACEHOLDER = Buffer.from(JPEG_B64, 'base64');

// ── All image slots ─────────────────────────────────────────────────────────
const FILES = [
  // ── Menu tile images (square thumbnails, recommended ≥ 800×800 px) ──────
  'public/images/menu/brioche-french-toast.jpg',
  'public/images/menu/avocado-morning.jpg',
  'public/images/menu/eggs-royale.jpg',
  'public/images/menu/stone-fruit-granola.jpg',
  'public/images/menu/truffle-bruschetta.jpg',
  'public/images/menu/oysters-champagne.jpg',
  'public/images/menu/charcuterie-garden.jpg',
  'public/images/menu/tuna-tartare.jpg',
  'public/images/menu/caesar-royale.jpg',
  'public/images/menu/maine-lobster-bisque.jpg',
  'public/images/menu/wagyu-burger.jpg',
  'public/images/menu/harvest-bowl.jpg',
  'public/images/menu/biryani-1.jpg',
  'public/images/menu/truffle-risotto.jpg',
  'public/images/menu/atlantic-salmon.jpg',
  'public/images/menu/herb-crusted-lamb.jpg',
  'public/images/menu/tiramisu-classico.jpg',
  'public/images/menu/dark-chocolate-sphere.jpg',
  'public/images/menu/creme-brulee-trio.jpg',
  'public/images/menu/summer-berry-pavlova.jpg',

  // ── Hero / full-screen images (recommended ≥ 1920×1080 px) ─────────────
  'public/images/hero/brioche-french-toast.jpg',
  'public/images/hero/avocado-morning.jpg',
  'public/images/hero/eggs-royale.jpg',
  'public/images/hero/stone-fruit-granola.jpg',
  'public/images/hero/truffle-bruschetta.jpg',
  'public/images/hero/oysters-champagne.jpg',
  'public/images/hero/charcuterie-garden.jpg',
  'public/images/hero/tuna-tartare.jpg',
  'public/images/hero/caesar-royale.jpg',
  'public/images/hero/maine-lobster-bisque.jpg',
  'public/images/hero/wagyu-burger.jpg',
  'public/images/hero/harvest-bowl.jpg',
  'public/images/hero/biryani-1.jpg',
  'public/images/hero/truffle-risotto.jpg',
  'public/images/hero/atlantic-salmon.jpg',
  'public/images/hero/herb-crusted-lamb.jpg',
  'public/images/hero/tiramisu-classico.jpg',
  'public/images/hero/dark-chocolate-sphere.jpg',
  'public/images/hero/creme-brulee-trio.jpg',
  'public/images/hero/summer-berry-pavlova.jpg',

  // ── About page (recommended ≥ 1920×1080 or portrait 900×1200 px) ────────
  'public/images/about/hero.jpg',               // Dining room — full-width hero
  'public/images/about/chef-kitchen.jpg',       // Chef at work — portrait 3:4
  'public/images/about/interior.jpg',           // Interior atmosphere — landscape 4:3
  'public/images/about/kitchen-strip.jpg',      // Kitchen wide — full-width banner
  'public/images/about/team-antoine.jpg',       // Chef Antoine — portrait 3:4
  'public/images/about/team-elise.jpg',         // Élise Laurent — portrait 3:4
  'public/images/about/team-marc.jpg',          // Marc Delacroix — portrait 3:4

  // ── Miscellaneous (home page etc.) ───────────────────────────────────────
  'public/images/misc/student-special.jpg',     // Daily Special card — landscape
  'public/images/misc/cat-breakfast.jpg',       // "Browse by Category" — portrait 4:5
  'public/images/misc/cat-dinner.jpg',          // "Browse by Category" — portrait 4:5
  'public/images/misc/cat-sweets.jpg',          // "Browse by Category" — portrait 4:5
  'public/images/misc/about-teaser.jpg',        // Home page about-teaser — full-width
];

// ── Write files ──────────────────────────────────────────────────────────────
let created = 0;
for (const file of FILES) {
  const abs = path.join(__dirname, '..', file);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  if (!fs.existsSync(abs)) {
    fs.writeFileSync(abs, PLACEHOLDER);
    console.log('  created  ', file);
    created++;
  } else {
    console.log('  exists   ', file, '(skipped)');
  }
}
console.log(`\nDone. ${created} placeholder(s) created, ${FILES.length - created} already present.\n`);
