// packing-list.ts — Hawaii-specific packing config
import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const HAWAII_ESSENTIALS: PackingItem[] = [
  { id: 'hi-sunscreen', name: 'Reef-Safe Mineral Sunscreen', category: 'destination', description: 'Hawaii law bans chemical sunscreen (oxybenzone/octinoxate) — you can be turned away from snorkel tours. Zinc oxide only. Buy before you go — it\'s expensive on-island.', essential: true, amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc+oxide', affiliatePrice: '$12–22' },
  { id: 'hi-watershoes', name: 'Water Shoes', category: 'destination', description: 'Lava rock tide pools, black sand beaches, and entry points for snorkeling are razor-sharp. Beach sandals won\'t protect you. Water shoes are essential on the Big Island especially.', essential: true, amazonSearchFallback: 'water+shoes+lava+rock+snorkeling', affiliatePrice: '$20–40' },
  { id: 'hi-jacket', name: 'Light Fleece or Windbreaker', category: 'destination', description: 'Mauna Kea summit is 40°F. Haleakala sunrise is 30°F. Even sea-level Kauai gets cool evenings. One packable layer transforms your trip.', essential: true, amazonSearchFallback: 'packable+fleece+jacket+travel', affiliatePrice: '$35–60' },
  { id: 'hi-waterbottle', name: 'Reusable Water Bottle', category: 'destination', description: 'Hawaii is serious about plastic. Many parks, beaches, and trails have refill stations. Single-use plastic water bottles are increasingly hard to find on Kauai especially.', essential: true, amazonSearchFallback: 'reusable+water+bottle+insulated', affiliatePrice: '$20–35' },
  { id: 'hi-hikeshoes', name: 'Hiking Shoes / Trail Runners', category: 'destination', description: 'Kalalau Trail, Diamond Head, Waimea Canyon — Hawaii\'s trails are volcanic, muddy, and uneven. Flip-flops get people helicoptered out. Trail runners are minimum; waterproof boots preferred.', essential: false, amazonSearchFallback: 'waterproof+trail+running+shoes+hiking', affiliatePrice: '$80–150' },
];

export const HAWAII_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-hi-sunscreen', name: 'Reef-Safe Mineral Sunscreen', reason: 'It\'s the law. Chemical sunscreen is banned in Hawaii marine areas. Zinc oxide protects you and the coral — and coral here is worth protecting.', amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc', affiliatePrice: '~$16' },
  { id: 'gr-hi-watershoes', name: 'Water Shoes', reason: 'Lava rock is razor-sharp and wet. The entry at Two Step on the Big Island, tide pools on Maui — water shoes mean you explore instead of bleed.', amazonSearchFallback: 'water+shoes+snorkeling+lava+rock', affiliatePrice: '~$30' },
  { id: 'gr-hi-poles', name: 'Collapsible Trekking Poles', reason: 'Kalalau Trail on Kauai drops 2,500 feet on loose volcanic mud. Poles turn a dangerous descent into a controlled one. Worth every ounce.', amazonSearchFallback: 'collapsible+trekking+poles+lightweight', affiliatePrice: '~$40' },
  { id: 'gr-hi-sunglasses', name: 'Polarized Sunglasses', reason: 'You\'re surrounded by ocean reflection from dawn to dusk. Polarized lenses reduce glare dramatically — you\'ll see the fish below the surface instead of just the sky above it.', amazonSearchFallback: 'polarized+sunglasses+uv+protection', affiliatePrice: '~$25' },
  { id: 'gr-hi-snorkel', name: 'Snorkel Mask (own, not rental)', reason: 'Renting a mask that\'s been in 50 other people\'s faces is unpleasant. Your own mask fits, seals, and you\'ll use it on every snorkel trip without hesitation.', amazonSearchFallback: 'snorkel+mask+anti+fog+adult', affiliatePrice: '~$30' },
];

export const HAWAII_CONFIG: PackingConfig = {
  sitePrefix: 'dhi',
  destination: 'Hawaii',
  climate: ['tropical', 'coastal'],
  currency: 'USD',
  plugType: 'Type A/B',
  plugVoltage: '120V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: HAWAII_ESSENTIALS,
  gearRecommendations: HAWAII_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = HAWAII_CONFIG;

export const HAWAII_PACKING_FAQS = [
  { question: 'What should I pack for Hawaii?', answer: 'The non-negotiables are reef-safe mineral sunscreen (it\'s the law in marine areas), water shoes for lava rock, a light fleece for mountain summits and cool evenings, and a reusable water bottle. Our interactive checklist covers 60+ items customized for Hawaii\'s tropical and volcanic terrain across all four main islands.' },
  { question: 'Is bug spray necessary in Hawaii?', answer: 'Minimal compared to other tropical destinations. Hawaii has mosquitoes in rainforest valleys and near standing water — Kauai\'s Kalalau Trail and Big Island\'s Hilo side can be buggy. DEET-based spray is worth having for any forest hike. On beach resort areas, you\'ll rarely need it.' },
  { question: 'What power adapter do I need for Hawaii?', answer: 'No adapter needed. Hawaii uses US standard Type A/B outlets at 120V — the same as the mainland. All American devices work without any adapter or converter.' },
  { question: 'Can I buy toiletries in Hawaii?', answer: 'Yes, but expect to pay more. Target, Costco, and Walmart are on most islands. However, reef-safe sunscreen is widely available in Hawaii. The exception: if you have a specific brand preference, bring it from home — selection and prices vary.' },
  { question: 'How many outfits should I pack for Hawaii?', answer: 'Pack for 5 days. Laundromats are widely available ($3–5/load) and most vacation rentals have washers and dryers. For inter-island flights on budget carriers, a lighter bag saves on checked baggage fees. Pack 2 swimsuits so one can dry.' },
  { question: 'What should I NOT bring to Hawaii?', answer: 'Chemical sunscreen (oxybenzone-based — it\'s banned in Hawaii marine environments), heavy hiking boots for beach days (overkill), overpacking (inter-island flights have strict baggage limits), and don\'t bring any plants, fresh fruits, or agricultural products — Hawaii has strict biosecurity rules.' },
];
