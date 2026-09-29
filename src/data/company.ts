// Company data - Centralized for DATC Flagship Experience
export const company = {
  name: 'Diamond Assam Tea Company',
  shortName: 'DATC',
  phone: '+918555062835',
  phoneDisplay: '85550 62835',
  whatsappNumber: '918555062835',
  email: 'diamondassamteacompany@gmail.com',
  location: 'Mahbubnagar District, Telangana',
  tagline: 'Awaken Your Senses',
  subtitle: 'Handpicked Assam teas from India\'s finest tea gardens',
  about: 'Diamond Assam Tea Company (DATC) brings you the finest Assam CTC teas directly from premier tea gardens. Based in Mahbubnagar, Telangana, with over 25 years of service excellence crafting the best tea powder and kadak chai blends.',
  founded: 2000,
  yearsOfService: '25+',
  districts: '5+',
  googleMapUrl: 'https://maps.app.goo.gl/NLrYzwxVEsbgeesc7',
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5958!2d77.9836853!3d16.7470061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca27f4785dd5e3%3A0x8bf704f662f403c!2sDIAMOND%20ASSAM%20TEA%20CO!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin',
  socialMedia: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },
};

export interface FlagshipProduct {
  id: string;
  name: string;
  shortName: string;
  watermarkWord: string;
  tagline: string;
  subtitle: string;
  description: string;
  gradientInner: string;
  gradientOuter: string;
  accentColor: string;
  highlightColor: string;
  image: string;
  sizes: string[];
  notes: string[];
  aromaStrength: number;
  richness: number;
  body: string;
  pairing: string;
}

export const flagshipProducts: FlagshipProduct[] = [
  {
    id: 'mahek',
    name: 'Mahek Elachi',
    shortName: 'Mahek',
    watermarkWord: 'MAHEK',
    tagline: 'Cup Chai Ho Jaye',
    subtitle: 'Cardamom Infused Assam CTC Chai Blend',
    description: 'Rich cardamom tea blended with handpicked elachi seeds for an invigorating aromatic chai experience. A master blend crafted in Mahbubnagar balancing bold Assam leaves with the calming sweetness of real cardamom.',
    gradientInner: '#0B2B1B',
    gradientOuter: '#164E33',
    accentColor: '#22C55E',
    highlightColor: '#4ADE80',
    image: '/mahek.png',
    sizes: ['250g', '500g', '1kg'],
    notes: ['Real Cardamom Infused', 'Invigorating Freshness', 'Sweet & Spicy Aroma'],
    aromaStrength: 96,
    richness: 90,
    body: 'Medium-Full Body',
    pairing: 'Ideal with evening snacks, biscuits & samosas',
  },
  {
    id: 'star-goodluck',
    name: 'Star GoodLuck',
    shortName: 'Star Goodluck',
    watermarkWord: 'GOODLUCK',
    tagline: 'Har Dil Yahi Chahe, Asli Taste Ke Liye',
    subtitle: 'Signature Golden Malted Tea Blend',
    description: 'Our iconic daily blend crafted for richness, malty strength, and good fortune. Selected from premier Assam estates, Star GoodLuck Tea is celebrated across Mahbubnagar as the best tea powder for rich, energizing morning kadak chai.',
    gradientInner: '#2A1805',
    gradientOuter: '#784408',
    accentColor: '#F59E0B',
    highlightColor: '#FBBF24',
    image: '/star-goodluck-tea-big.png',
    sizes: ['250g', '500g', '1kg'],
    notes: ['100% Pure Assam CTC', 'Deep Golden Liquor', 'Strong Morning Kick'],
    aromaStrength: 88,
    richness: 98,
    body: 'Robust & Full-Bodied',
    pairing: 'Perfect morning milk chai with ginger or plain',
  },
  {
    id: 'diamond-mixture',
    name: 'Diamond Mix',
    shortName: 'Diamond Mix',
    watermarkWord: 'DIAMOND',
    tagline: 'Kadak Chai Ka Asli Mazaa',
    subtitle: 'Strong Kadak Assam Tea Mixture Blend',
    description: 'Our iconic robust mixture crafted for milk-tea lovers and Irani chai stalls seeking strong kadak flavor, deep rich color, and brisk aroma in every sip. Renowned across Mahbubnagar as the trusted choice for hotel chai and tea powder wholesale.',
    gradientInner: '#1A120B',
    gradientOuter: '#442716',
    accentColor: '#C4975D',
    highlightColor: '#F59E0B',
    image: '/dmt-cutout.png',
    sizes: ['250g', '500g', '1kg'],
    notes: ['High Strength CTC Blend', 'Kadak & Rich Flavor', 'Ideal for Irani & Hotel Chai'],
    aromaStrength: 90,
    richness: 95,
    body: 'Bold & Full-Bodied',
    pairing: 'Best enjoyed piping hot with milk and sugar for morning and evening vitality',
  },
];

export const timeline = [
  { year: 2000, title: 'Founded', description: 'Established in Mahbubnagar with a commitment to pure, unadulterated Assam tea' },
  { year: 2008, title: 'Regional Expansion', description: 'Grew across Mahbubnagar, Vikarabad, and surrounding districts' },
  { year: 2016, title: 'Master Blend Selection', description: 'Perfected our signature cardamom formulation for Mahek Elachi' },
  { year: 2021, title: 'Two Decades of Trust', description: 'Trusted by thousands of tea-lovers and households across Telangana' },
  { year: 2025, title: 'Flagship Excellence', description: 'Dedicated modern packaging and production for our two premier blends' },
];

export const features = [
  {
    icon: 'Award',
    title: 'Estate Direct Assam',
    description: 'Sourced directly from verified tea gardens in Assam for unmatched leaf freshness.',
  },
  {
    icon: 'ShieldCheck',
    title: '25+ Years of Purity',
    description: 'Quarter century of uncompromising quality, hygienic packing, and authentic taste.',
  },
  {
    icon: 'Sparkles',
    title: 'Signature Blends',
    description: 'Formulated specifically for the regional palate with natural spices and rich liquor.',
  },
  {
    icon: 'MapPin',
    title: 'Local Heritage',
    description: 'Rooted in Mahbubnagar, Telangana, serving our communities with dedication.',
  },
];
