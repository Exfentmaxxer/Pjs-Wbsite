export const businessInfo = {
  name: "PJ's Auto Care & Gourmet Coffee",
  tagline: "Where Quality Auto Care Meets Premium Coffee",

  address: {
    street: '185 Partner Circle',
    city: 'Southern Pines',
    state: 'NC',
    zip: '28387',
    full: '185 Partner Circle, Southern Pines, NC 28387',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d-79.3928!3d35.1738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzI1LjciTiA3OcKwMjMnMzQuMSJX!5e0!3m2!1sen!2sus!4v1234567890',
    googleMapsLink: 'https://maps.google.com/?q=185+Partner+Circle+Southern+Pines+NC+28387'
  },

  contact: {
    mainPhone: '(910) 692-3944',
    mainPhoneRaw: '+19106923944',
    servicePhone: '(910) 692-0744',
    servicePhoneRaw: '+19106920744',
    fax: '(910) 692-3362',
    email: 'info@pjsautocare.net',
    website: 'www.pjsautocare.net'
  },

  hours: {
    monday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
    tuesday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
    wednesday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
    thursday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
    friday: { open: '7:30 AM', close: '5:00 PM', isOpen: true },
    saturday: { open: '7:30 AM', close: '4:00 PM', isOpen: true },
    sunday: { open: 'Closed', close: 'Closed', isOpen: false }
  },

  hoursFormatted: {
    weekday: 'Monday - Friday: 7:30 AM - 5:00 PM',
    saturday: 'Saturday: 7:30 AM - 4:00 PM',
    sunday: 'Sunday: Closed'
  },

  social: {
    facebook: 'https://www.facebook.com/pjsautocare',
    google: 'https://www.google.com/maps/place/pjsautocare',
    yelp: 'https://www.yelp.com/biz/pjs-auto-care',
    carfax: 'https://www.carfax.com/repair/pjs-auto-care'
  },

  stats: {
    established: 2003,
    establishedDate: 'November 19, 2003',
    yearsInBusiness: new Date().getFullYear() - 2003,
    reviewCount: 468,
    rating: 4.8,
    bbbRating: 'A+',
    bbbAccredited: true
  },

  owners: {
    president: {
      name: 'Jerry S. Ullman',
      title: 'President',
      bio: 'With over 21 years of experience, Jerry has built PJ\'s Auto Care on the foundation of honest service and customer trust.'
    },
    secretary: {
      name: 'Paula D. Ullman',
      title: 'Secretary',
      bio: 'Paula ensures every customer experience is exceptional, from our gourmet coffee bar to our premium auto services.'
    }
  },

  certifications: [
    {
      name: 'BBB Accredited Business',
      rating: 'A+',
      logo: 'https://placehold.co/150x150/1E3A8A/FFFFFF?text=BBB+A%2B',
      link: 'https://www.bbb.org/us/nc/southern-pines/profile/auto-repair/pjs-auto-care-0593-90041519'
    },
    {
      name: 'Michelin® Authorized Dealer',
      logo: 'https://placehold.co/150x100/FFFFFF/000000?text=Michelin',
      link: 'https://www.michelinman.com/'
    },
    {
      name: 'BFGoodrich® Dealer',
      logo: 'https://placehold.co/150x100/FFFFFF/000000?text=BFGoodrich',
      link: 'https://www.bfgoodrichtires.com/'
    },
    {
      name: 'Uniroyal® Dealer',
      logo: 'https://placehold.co/150x100/FFFFFF/000000?text=Uniroyal',
      link: 'https://www.uniroyaltires.com/'
    }
  ],

  serviceArea: [
    'Southern Pines',
    'Pinehurst',
    'Aberdeen',
    'Pinebluff',
    'Moore County, NC'
  ],

  amenities: [
    {
      name: 'Gourmet Coffee Bar',
      description: 'Premium coffee better than Starbucks, crafted fresh daily',
      icon: 'Coffee'
    },
    {
      name: 'Comfortable Waiting Lounge',
      description: 'Relax in our recliners while we care for your vehicle',
      icon: 'Armchair'
    },
    {
      name: 'Free High-Speed WiFi',
      description: 'Stay connected while you wait',
      icon: 'Wifi'
    },
    {
      name: 'Outdoor Seating Area',
      description: 'Enjoy fresh air at our bistro tables',
      icon: 'TreeDeciduous'
    },
    {
      name: 'Free Car Wash',
      description: 'Complimentary car wash with every service',
      icon: 'Droplets'
    },
    {
      name: 'Clean Restrooms',
      description: 'Immaculate facilities cleaner than most coffee shops',
      icon: 'DoorOpen'
    },
    {
      name: 'TV Entertainment',
      description: 'Stay entertained with cable TV',
      icon: 'Tv'
    },
    {
      name: 'Wheelchair Accessible',
      description: 'Fully accessible facility',
      icon: 'Accessibility'
    }
  ],

  whyChooseUs: [
    {
      title: 'Gourmet Coffee Experience',
      description: 'The ONLY auto shop in Moore County with a premium coffee bar. Enjoy gourmet coffee while we service your vehicle.',
      icon: 'Coffee'
    },
    {
      title: '21+ Years of Trust',
      description: 'Family-owned and operated since 2003. BBB A+ rated with 4.8/5 stars from 468+ reviews.',
      icon: 'Award'
    },
    {
      title: 'Honest Recommendations',
      description: 'No pressure upselling. We only recommend what your vehicle actually needs.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Premium Amenities',
      description: 'Comfortable recliners, free WiFi, outdoor seating, and spotless facilities. Wait in comfort.',
      icon: 'Sparkles'
    },
    {
      title: 'Free Car Wash',
      description: 'Every service includes a complimentary car wash. Drive away clean and running smooth.',
      icon: 'Droplets'
    },
    {
      title: 'Certified Experts',
      description: 'Authorized Michelin®, BFGoodrich®, and Uniroyal® dealer. Expert technicians you can trust.',
      icon: 'Wrench'
    }
  ],

  seo: {
    keywords: [
      'auto repair southern pines nc',
      'car service moore county',
      'oil change pinehurst',
      'tire shop southern pines',
      'auto repair with coffee',
      'family auto care',
      'bbb rated mechanic',
      'honest auto repair',
      'premium car service',
      'nc state inspection'
    ],
    description: 'Premium auto service with a gourmet coffee bar in Southern Pines, NC. BBB A+, 21+ years, 4.8/5 stars. Experience the difference where quality auto care meets premium coffee.'
  }
}

export default businessInfo
