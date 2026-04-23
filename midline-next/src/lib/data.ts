export interface Company {
  name: string
  tags: string[]
  type: string
  desc: string
  link: string | null
}

export interface Sector {
  icon: string
  label: string
  title: string
  intro: string
  blurb: string
  companies: Company[]
}

export const MIDLINE_SECTORS: Record<string, Sector> = {
  aviation: {
    icon: '✈',
    label: 'Sector — Aviation',
    title: 'Aviation <em>Services</em>',
    intro: 'Flight is freedom, and efficiency is our altitude.',
    blurb: 'Private jet charter, aircraft management, MRO, and cargo services from Dubai.',
    companies: [
      {
        name: 'Midline Aviation Service',
        tags: ['Dubai South, UAE'],
        type: 'Private Aviation',
        desc: 'Deals in: Aircraft charter, aircraft management, aircraft sales, MRO, and air cargo services.',
        link: 'https://midlineaviation.com',
      },
    ],
  },
  construction: {
    icon: '🏗',
    label: 'Sector — Construction',
    title: 'Construction <em>& Contracting</em>',
    intro: 'We lay foundations for homes, cities, and legacies — building with foresight and delivering with strength.',
    blurb: 'General contracting, architecture, civil engineering, and real estate across UAE.',
    companies: [
      {
        name: 'Midline Trend Building Contracting LLC',
        tags: ['UAE'],
        type: 'General Contracting',
        desc: 'Deals in: General building contracting — residential, commercial, and infrastructure.',
        link: null,
      },
      {
        name: 'Saegon Contraction LLC',
        tags: ['UAE'],
        type: 'Construction',
        desc: 'Deals in: Building and construction projects across the UAE.',
        link: null,
      },
      {
        name: 'Handasiah Consultant Arch Civilion LLC',
        tags: ['UAE'],
        type: 'Architecture & Civil Consulting',
        desc: 'Deals in: Architecture design, civil engineering consultancy, and project planning.',
        link: null,
      },
      {
        name: 'Al Sarh Engineering Consultant',
        tags: ['UAE'],
        type: 'Engineering Consultancy',
        desc: 'Deals in: Technical engineering advisory, project management, and quality assurance.',
        link: null,
      },
      {
        name: 'Majestic Elite Properties',
        tags: ['UAE'],
        type: 'Real Estate',
        desc: 'Deals in: Real estate development and property management.',
        link: null,
      },
    ],
  },
  food: {
    icon: '🍊',
    label: 'Sector — Food Industry',
    title: 'Food <em>Industry</em>',
    intro: 'From the heart of production to the hands of families — feeding communities with quality and care.',
    blurb: 'Food trading, manufacturing, juice, dairy, pasta, and bottled water production.',
    companies: [
      {
        name: 'Flavour Food Trading LLC',
        tags: ['Dubai, UAE'],
        type: 'Food Trading & Raw Materials',
        desc: 'Deals in: Raw materials supply for juice, dairy, pasta, and canned food manufacturers — concentrates, milk powder, semolina, and oils.',
        link: 'https://www.flavorfooduae.com',
      },
      {
        name: 'Acacus Juice and Milk Factory',
        tags: ['Libya'],
        type: 'Juice & Dairy Manufacturing',
        desc: 'Deals in: Juice and dairy product manufacturing.',
        link: null,
      },
      {
        name: 'Shahd Al Madina',
        tags: ['Libya'],
        type: 'Food Production',
        desc: 'Deals in: Consumer food products production.',
        link: null,
      },
      {
        name: 'Libyan Al-Aws to Import Foodstuffs',
        tags: ['Libya'],
        type: 'Food Import & Distribution',
        desc: 'Deals in: Importing and distributing foodstuffs.',
        link: null,
      },
      {
        name: 'Elbasateen Food Industries',
        tags: ['Libya'],
        type: 'Food Manufacturing',
        desc: 'Deals in: Consumer food manufacturing.',
        link: null,
      },
      {
        name: 'Saif Pasta Factory',
        tags: ['Libya'],
        type: 'Pasta Manufacturing',
        desc: 'Deals in: Semolina-based pasta production.',
        link: null,
      },
      {
        name: 'Al-Dabousiya Mineral Water Bottling Company',
        tags: ['Libya'],
        type: 'Water Bottling',
        desc: 'Deals in: Mineral water bottling and distribution.',
        link: null,
      },
      {
        name: 'Maraina Al-Khadra for Feed Industry Co.',
        tags: ['Libya'],
        type: 'Animal Feed Manufacturing',
        desc: 'Deals in: Animal feed manufacturing for the agricultural sector.',
        link: null,
      },
    ],
  },
  oilgas: {
    icon: '⛽',
    label: 'Sector — Oil & Gas',
    title: 'Oil <em>& Gas Services</em>',
    intro: 'Oil powers progress, and we fuel that momentum — safely, sustainably, and strategically.',
    blurb: 'Petroleum services, exploration support, logistics and supply chain management.',
    companies: [
      {
        name: 'Arco Oil and Gas',
        tags: ['UAE'],
        type: 'Oil & Gas Services',
        desc: 'Deals in: Petroleum services — exploration, production support, and logistics.',
        link: 'https://www.arcooilgas.com',
      },
      {
        name: 'ANCO',
        tags: ['Oil & Gas'],
        type: 'Oil & Gas Services',
        desc: 'Deals in: Oil and gas operational support and services.',
        link: null,
      },
      {
        name: 'ABCO',
        tags: ['Oil & Gas'],
        type: 'Oil & Gas Services',
        desc: 'Deals in: Integrated oil and gas services and supply chain.',
        link: null,
      },
    ],
  },
  perfumes: {
    icon: '✨',
    label: 'Sector — Perfumes & Cosmetics',
    title: 'Perfumes <em>& Beauty</em>',
    intro: 'A fragrance is more than a scent — it is memory, presence, and identity.',
    blurb: 'Luxury Arabic and French fragrances, present in 7+ countries worldwide.',
    companies: [
      {
        name: 'Ard Al Teeb W Al Jamal Perfumes Trading LLC',
        tags: ['Dubai, UAE', 'Est. 2007'],
        type: 'Luxury Perfumes',
        desc: "Deals in: Luxury Arabic and French fragrances — Men's, Women's, and Unisex — across 7+ countries.",
        link: 'https://ardalteeb.com',
      },
      {
        name: 'Ard Alteeba & Aljamal',
        tags: ['Perfumes & Cosmetics'],
        type: 'Perfume & Cosmetics',
        desc: 'Deals in: Perfume and cosmetics rooted in Arabic heritage.',
        link: null,
      },
    ],
  },
  furniture: {
    icon: '🛋',
    label: 'Sector — Furniture',
    title: 'Al Sanidan <em>Furniture</em>',
    intro: 'Where every room tells a story — premium Turkish-crafted furniture for UAE homes.',
    blurb: 'Premium Turkish-crafted furniture for homes across Dubai and Sharjah, UAE.',
    companies: [
      {
        name: 'Al Sanidan Furniture Showroom',
        tags: ['Dubai & Sharjah, UAE'],
        type: 'Premium Furniture Retail',
        desc: 'Deals in: Premium furniture retail — bedroom, living room, dining, TV units, and coffee tables. 205+ pieces across 16 collections sourced from Turkish manufacturers.',
        link: null,
      },
    ],
  },
  spareparts: {
    icon: '🔧',
    label: 'Sector — Spare Parts',
    title: 'Auto <em>Spare Parts</em>',
    intro: 'Credibility, quality, trust, and guarantee — supplying parts across the UAE and worldwide.',
    blurb: 'Auto spare parts for Japanese, Korean, and American vehicles — ISO certified.',
    companies: [
      {
        name: 'ARC Auto Spare Parts Trading LLC',
        tags: ['Dubai, UAE'],
        type: 'Auto Spare Parts — ISO Certified',
        desc: 'Deals in: Auto spare parts for Japanese, Korean, and American vehicles — filters, brakes, suspension, electrical, lubricants, and more.',
        link: 'https://arc-autoparts.com',
      },
      {
        name: 'Almutakbal Alsheesh Ltd',
        tags: ['Spare Parts'],
        type: 'Spare Parts',
        desc: 'Deals in: Spare parts trading across vehicle types and markets.',
        link: null,
      },
    ],
  },
  pharma: {
    icon: '💊',
    label: 'Sector — Pharmaceutical',
    title: 'Pharma <em>Industry</em>',
    intro: 'Investing in health means investing in people.',
    blurb: 'Pharmaceutical manufacturing and distribution across UAE and Libya.',
    companies: [
      {
        name: 'Trivix',
        tags: ['UAE'],
        type: 'Pharmaceuticals',
        desc: 'Deals in: Pharmaceutical products and medicines across the UAE.',
        link: null,
      },
      {
        name: 'Al Shifa',
        tags: ['Libya'],
        type: 'Pharmaceuticals',
        desc: 'Deals in: Essential medicines and healthcare products for the Libyan market.',
        link: null,
      },
    ],
  },
}

export const MIDLINE_STRUCTURE: Array<{
  key: string
  name: string
  markets: string
  companies: string[]
}> = [
  { key: 'aviation', name: 'Aviation', markets: 'UAE', companies: ['Midline Aviation Service'] },
  {
    key: 'oilgas',
    name: 'Oil & Gas Service',
    markets: 'UAE',
    companies: ['Arco Oil and Gas', 'ANCO', 'ABCO'],
  },
  {
    key: 'food',
    name: 'Food Industry',
    markets: 'UAE, Libya',
    companies: [
      'Flavour Food Trading LLC',
      'Acacus Juice and Milk Factory',
      'Shahd Al Madina',
      'Libyan Al-Aws to Import Foodstuffs',
      'Elbasateen Food Industries',
      'Saif Pasta Factory',
      'Al-Dabousiya Mineral Water Bottling Company',
      'Maraina Al-Khadra for Feed Industry Co.',
    ],
  },
  {
    key: 'construction',
    name: 'Construction',
    markets: 'UAE',
    companies: [
      'Midline Trend Building Contracting LLC',
      'Saegon Contraction LLC',
      'Handasiah Consultant Arch Civilion LLC',
      'Al Sarh Engineering Consultant',
      'Majestic Elite Properties',
    ],
  },
  {
    key: 'pharma',
    name: 'Pharma Industry',
    markets: 'UAE, Libya',
    companies: ['Trivix', 'Al Shifa'],
  },
  {
    key: 'spareparts',
    name: 'Spare Parts',
    markets: 'UAE',
    companies: ['ARC Auto Spare Parts Trading LLC', 'Almutakbal Alsheesh Ltd'],
  },
  {
    key: 'perfumes',
    name: 'Perfume & Cosmetics',
    markets: 'UAE',
    companies: ['Ard Al Teeb W Al Jamal Perfumes Trading LLC', 'Ard Alteeba & Aljamal'],
  },
  {
    key: 'furniture',
    name: 'Al Sanidan Furniture',
    markets: 'UAE',
    companies: ['Al Sanidan Furniture Showroom'],
  },
]

export const GLOBAL_PRESENCE = [
  { flag: '🇦🇪', country: 'UAE', role: 'Headquarters', isHQ: true },
  { flag: '🇱🇾', country: 'Libya', role: 'Regional Hub', isHQ: false },
  { flag: '🇬🇧', country: 'UK', role: 'European Office', isHQ: false },
  { flag: '🇪🇸', country: 'Spain', role: 'European Market', isHQ: false },
  { flag: '🇹🇷', country: 'Turkey', role: 'Strategic Partner', isHQ: false },
  { flag: '🇮🇹', country: 'Italy', role: 'European Market', isHQ: false },
  { flag: '🇨🇳', country: 'China', role: 'Asia-Pacific', isHQ: false },
  { flag: '🇨🇦', country: 'Canada', role: 'North America', isHQ: false },
  { flag: '🇺🇸', country: 'USA', role: 'North America', isHQ: false },
]

export const SITE_META = {
  name: 'Midline Investment',
  tagline: 'Midline Investment LLC is a multi-sector holding group providing integrated solutions across trade, industry, energy, mobility, property, and consumer markets.',
  address: 'Burlington Tower – 410, Marasi Drive, Business Bay, Dubai, UAE',
  phone: '+971 4 548 8762',
  email: 'info@midline-investment.com',
  hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
}
