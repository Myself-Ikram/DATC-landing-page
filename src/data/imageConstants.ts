// ⭐ ALL IMAGES IN ONE FILE - EASY TO UPDATE! ⭐
// Simply replace URLs below with your actual image URLs
// No code changes needed - just update the URLs!

export const IMAGES = {
  // ========== HERO SECTION ==========
  hero: {
    background: '',  // Add URL if needed, otherwise white bg
    womanTeaCup: 'https://images.unsplash.com/photo-15447872193-a0980143f2b?w=800&h=800&fit=crop',
    teaCup: 'https://images.unsplash.com/photo-1576092734374-7b946997c61b?w=400&h=400&fit=crop',
    main: '/all-products.png',  // ⭐ MAIN PAGE IMAGE - UPDATE IF NEEDED ⭐
  },

  // ========== PRODUCTS (6 products shown in design) ==========
  products: [
    {
      id: 1,
      name: 'Mavco Leaf',
      price: 50,
      image: 'https://images.unsplash.com/photo-15974880176572-b9a7dc3cd2e8?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 2,
      name: 'Green Tea',
      price: 45,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca916d8b?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 3,
      name: 'Dark Tea',
      price: 44,
      image: 'https://images.unsplash.com/photo-1556679383-a962554f7d2?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 4,
      name: 'Mavco Green',
      price: 49,
      image: 'https://images.unsplash.com/photo-1594631222968-8688a138d233?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 5,
      name: 'Loose Leaf',
      price: 55,
      image: 'https://images.unsplash.com/photo-1571934891357-9e5a3d5ec8e?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 6,
      name: 'Bullet Tea',
      price: 65,
      image: 'https://images.unsplash.com/photo-1563826878428-0dd23f0f7e3?w=800&h=800&fit=crop', // ⭐ UPDATE THIS URL ⭐
    },
  ],

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      id: 1,
      name: 'Asad Hossain',
      avatar: 'https://i.pravatar.cc/150?img=1', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 2,
      name: 'Asad Hossain',
      avatar: 'https://i.pravatar.cc/150?img=2', // ⭐ UPDATE THIS URL ⭐
    },
    {
      id: 3,
      name: 'Asad Hossain',
      avatar: 'https://i.pravatar.cc/150?img=3', // ⭐ UPDATE THIS URL ⭐
    },
  ],

  // ========== PROMOTION BANNER ==========
  promotion: {
    background: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=1920&h=400&fit=crop', // ⭐ UPDATE THIS URL ⭐
  },

  // ========== ABOUT SECTION ==========
  about: {
    teaPreparation: 'https://images.unsplash.com/photo-1563826878428-0dd23f0f7e3?w=800&h=600&fit=crop', // ⭐ UPDATE THIS URL ⭐
  },

  // ========== BRANDS SECTION ==========
  brands: {
    productGroup: '/prodcut-group.png', // ⭐ BRANDS IMAGE - UPDATE IF NEEDED ⭐
    mahek: '/mahek.png', 
    starGoodluckTea:'/star-goodluck-tea-big.png',
    starGoodluckTeaGroup:'/star-goodluck-tea-group-full.png',
    daimondAssamTea:'/dmt.png',
    daimondAssamTeaGroup:'/dmt-group.png',
    starTea:'/star.png',

  },

  // ========== NEWSLETTER / FOOTER ==========
  footer: {
    logo: '/main.png', // Company logo
  },
};

// ========== TYPES FOR USE IN COMPONENTS ==========
export type ProductImage = typeof IMAGES.products[number];
export type TestimonialImage = typeof IMAGES.testimonials[number];
