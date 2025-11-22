export const coupons = [
  {
    id: 'coup-001',
    title: '$10 Off Oil Change',
    description: 'Save $10 on any full-service oil change. Includes multi-point inspection and complimentary car wash.',
    discount: '$10 OFF',
    code: 'OIL10',
    validUntil: '2025-03-31',
    terms: [
      'Valid on full-service oil changes only',
      'Cannot be combined with other offers',
      'One coupon per visit',
      'Must present coupon at time of service'
    ],
    image: 'https://placehold.co/400x250/F59E0B/FFFFFF?text=$10+Off+Oil+Change',
    featured: true
  },
  {
    id: 'coup-002',
    title: 'Free Tire Rotation',
    description: 'Complimentary tire rotation with any service over $100. Extend your tire life!',
    discount: 'FREE',
    code: 'ROTATE',
    validUntil: '2025-03-31',
    terms: [
      'Valid with service purchase of $100 or more',
      'Tire rotation valued at $24.95',
      'Cannot be combined with other offers',
      'Must present coupon at time of service'
    ],
    image: 'https://placehold.co/400x250/1E3A8A/FFFFFF?text=Free+Tire+Rotation',
    featured: true
  },
  {
    id: 'coup-003',
    title: '$25 Off Brake Service',
    description: 'Save $25 on any brake pad or rotor replacement service.',
    discount: '$25 OFF',
    code: 'BRAKE25',
    validUntil: '2025-03-31',
    terms: [
      'Valid on brake pad or rotor replacement',
      'Minimum service purchase $150',
      'Cannot be combined with other offers',
      'One coupon per visit',
      'Must present coupon at time of service'
    ],
    image: 'https://placehold.co/400x250/EF4444/FFFFFF?text=$25+Off+Brakes',
    featured: true
  },
  {
    id: 'coup-004',
    title: '10% Off First Visit',
    description: 'New customers save 10% on first service. Welcome to the PJ\'s family!',
    discount: '10% OFF',
    code: 'WELCOME10',
    validUntil: '2025-03-31',
    terms: [
      'New customers only',
      'Maximum discount $50',
      'Valid on labor and parts',
      'Cannot be combined with other offers',
      'Must present coupon at time of service'
    ],
    image: 'https://placehold.co/400x250/10B981/FFFFFF?text=10%+Off+First+Visit',
    featured: true
  },
  {
    id: 'coup-005',
    title: 'Free Multi-Point Inspection',
    description: 'Complimentary 50-point vehicle inspection. Know exactly what your car needs.',
    discount: 'FREE',
    code: 'INSPECT',
    validUntil: '2025-03-31',
    terms: [
      'Comprehensive 50-point inspection',
      'No purchase necessary',
      'Includes detailed report with photos',
      'One free inspection per customer',
      'Call to schedule appointment'
    ],
    image: 'https://placehold.co/400x250/78350F/FFFFFF?text=Free+Inspection',
    featured: false
  },
  {
    id: 'coup-006',
    title: '$50 Off AC Service',
    description: 'Save $50 on AC repair or recharge. Stay cool this summer!',
    discount: '$50 OFF',
    code: 'AC50',
    validUntil: '2025-06-30',
    terms: [
      'Valid on AC repair or recharge service',
      'Minimum service purchase $150',
      'Seasonal offer - summer months',
      'Cannot be combined with other offers',
      'Must present coupon at time of service'
    ],
    image: 'https://placehold.co/400x250/3B82F6/FFFFFF?text=$50+Off+AC+Service',
    featured: false
  },
  {
    id: 'coup-007',
    title: '$100 Off Tire Purchase',
    description: 'Save $100 on purchase of 4 premium tires. Michelin®, BFGoodrich®, or Uniroyal®.',
    discount: '$100 OFF',
    code: 'TIRES100',
    validUntil: '2025-03-31',
    terms: [
      'Valid on purchase of 4 qualifying tires',
      'Michelin®, BFGoodrich®, or Uniroyal® only',
      'Includes free installation',
      'Cannot be combined with manufacturer rebates',
      'Must present coupon at time of purchase'
    ],
    image: 'https://placehold.co/400x250/9333EA/FFFFFF?text=$100+Off+4+Tires',
    featured: false
  },
  {
    id: 'coup-008',
    title: 'Refer a Friend - Both Save $20',
    description: 'Refer a friend and you both save $20 on your next service. Share the PJ\'s experience!',
    discount: '$20 OFF',
    code: 'REFER20',
    validUntil: '2025-12-31',
    terms: [
      'Referrer and referee each save $20',
      'Valid on services $75 or more',
      'No limit on referrals',
      'New customers only for referee',
      'Discount applied at time of service'
    ],
    image: 'https://placehold.co/400x250/F59E0B/FFFFFF?text=Refer+&+Save+$20',
    featured: false
  }
]

export const seasonalPromotions = [
  {
    season: 'Spring',
    title: 'Spring Into Savings',
    description: 'Get your vehicle ready for road trips with our spring maintenance special.',
    services: ['Oil Change', 'Tire Rotation', 'Multi-Point Inspection', 'AC Check'],
    discount: '15% off package',
    active: false
  },
  {
    season: 'Summer',
    title: 'Summer Road Trip Ready',
    description: 'Beat the heat with discounted AC service and cooling system checks.',
    services: ['AC Service', 'Coolant Flush', 'Battery Test', 'Tire Inspection'],
    discount: '$75 off package',
    active: false
  },
  {
    season: 'Fall',
    title: 'Fall Maintenance Special',
    description: 'Prepare for winter with our comprehensive fall check-up.',
    services: ['Oil Change', 'Brake Inspection', 'Battery Test', 'Wiper Blades'],
    discount: '20% off package',
    active: false
  },
  {
    season: 'Winter',
    title: 'Winter Weather Prep',
    description: 'Stay safe all winter with our cold weather prep package.',
    services: ['Heating System Check', 'Battery Service', 'Tire Pressure Check', 'Fluid Top-Off'],
    discount: '$50 off package',
    active: false
  }
]

export const loyaltyProgram = {
  name: 'PJ\'s Rewards',
  description: 'Earn rewards with every visit. The more you come, the more you save!',
  benefits: [
    'Earn 1 point per $1 spent',
    '100 points = $10 reward',
    'Exclusive members-only specials',
    'Birthday month bonus points',
    'Priority appointment scheduling',
    'Early access to seasonal sales'
  ],
  howToJoin: 'Sign up for our newsletter or ask at your next visit. It\'s free to join!'
}

export default {
  coupons,
  seasonalPromotions,
  loyaltyProgram
}
