export const serviceCategories = [
  {
    id: 'routine-maintenance',
    name: 'Routine Maintenance',
    icon: 'Wrench',
    description: 'Keep your vehicle running smoothly with regular maintenance services',
    services: [
      {
        id: 'oil-change',
        name: 'Oil Changes & Lube Services',
        description: 'Professional oil change service for all vehicle types using premium oils',
        benefits: [
          'Extends engine life',
          'Improves fuel efficiency',
          'Protects against wear and tear',
          'Multi-point inspection included'
        ],
        estimatedTime: '30-45 minutes'
      },
      {
        id: 'nc-inspection',
        name: 'NC State Safety Inspections',
        description: 'Certified NC state safety inspection station',
        benefits: [
          'Official NC inspection certificate',
          'Comprehensive safety check',
          'Fast, friendly service',
          'Same-day service available'
        ],
        estimatedTime: '30 minutes'
      },
      {
        id: 'tire-rotation',
        name: 'Tire Rotation & Balancing',
        description: 'Extend tire life and ensure even wear',
        benefits: [
          'Longer tire life',
          'Better fuel economy',
          'Smoother ride',
          'Prevents uneven wear'
        ],
        estimatedTime: '45 minutes'
      },
      {
        id: 'multi-point-inspection',
        name: 'Multi-Point Vehicle Inspections',
        description: 'Comprehensive 50-point vehicle inspection',
        benefits: [
          'Catch problems early',
          'Detailed written report',
          'Photos of issues',
          'No-pressure recommendations'
        ],
        estimatedTime: '30 minutes'
      },
      {
        id: 'fluid-services',
        name: 'Fluid Services',
        description: 'Transmission, coolant, brake, power steering fluid services',
        benefits: [
          'Prevents costly repairs',
          'Extends component life',
          'Improves performance',
          'Maintains warranty'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'air-filter',
        name: 'Air Filter Replacement',
        description: 'Engine and cabin air filter replacement',
        benefits: [
          'Better fuel economy',
          'Improved air quality',
          'Extended engine life',
          'Better performance'
        ],
        estimatedTime: '15-30 minutes'
      },
      {
        id: 'battery-service',
        name: 'Battery Testing & Replacement',
        description: 'Free battery testing and premium battery installation',
        benefits: [
          'Avoid breakdowns',
          'Free testing',
          'Quality batteries',
          'Warranty included'
        ],
        estimatedTime: '30 minutes'
      },
      {
        id: 'wiper-blades',
        name: 'Wiper Blade Replacement',
        description: 'Premium wiper blade installation for clear visibility',
        benefits: [
          'Improved visibility',
          'Streak-free performance',
          'Safety in rain',
          'Quick installation'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'tire-services',
    name: 'Tire Services',
    icon: 'Disc',
    description: 'Authorized Michelin®, BFGoodrich®, and Uniroyal® dealer',
    services: [
      {
        id: 'tire-sales',
        name: 'Tire Sales',
        description: 'Premium tires from trusted brands',
        benefits: [
          'Authorized Michelin® dealer',
          'BFGoodrich® & Uniroyal®',
          'Competitive pricing',
          'Expert recommendations'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'tire-installation',
        name: 'Tire Installation & Mounting',
        description: 'Professional tire installation and balancing',
        benefits: [
          'Precision mounting',
          'Computer balancing',
          'New valve stems',
          'Proper torque specs'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'tire-repair',
        name: 'Tire Repair & Patching',
        description: 'Professional tire repair services',
        benefits: [
          'Save money vs replacement',
          'Industry-standard repair',
          'Safety inspection',
          'Quick turnaround'
        ],
        estimatedTime: '30-60 minutes'
      },
      {
        id: 'wheel-alignment',
        name: 'Wheel Alignment',
        description: 'Computerized 4-wheel alignment service',
        benefits: [
          'Better fuel economy',
          'Longer tire life',
          'Improved handling',
          'Prevents uneven wear'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'tpms-service',
        name: 'TPMS Service',
        description: 'Tire Pressure Monitoring System service and repair',
        benefits: [
          'Resolve warning lights',
          'Proper tire pressure',
          'Safety compliance',
          'Sensor replacement'
        ],
        estimatedTime: '1 hour'
      }
    ]
  },
  {
    id: 'brake-services',
    name: 'Brake Services',
    icon: 'CircleStop',
    description: 'Complete brake system inspection, repair, and replacement',
    services: [
      {
        id: 'brake-inspection',
        name: 'Brake Inspection & Diagnostics',
        description: 'Comprehensive brake system inspection',
        benefits: [
          'Free inspection',
          'Detailed assessment',
          'Photo documentation',
          'Honest recommendations'
        ],
        estimatedTime: '30 minutes'
      },
      {
        id: 'brake-pads',
        name: 'Brake Pad/Shoe Replacement',
        description: 'Quality brake pad and shoe replacement',
        benefits: [
          'Premium brake pads',
          'Warranty included',
          'Proper break-in',
          'Safety guaranteed'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'rotor-service',
        name: 'Rotor Resurfacing & Replacement',
        description: 'Brake rotor machining and replacement',
        benefits: [
          'Smooth braking',
          'Eliminates vibration',
          'Quality rotors',
          'Professional installation'
        ],
        estimatedTime: '2-3 hours'
      },
      {
        id: 'brake-fluid',
        name: 'Brake Fluid Flush',
        description: 'Complete brake fluid replacement',
        benefits: [
          'Prevents corrosion',
          'Maintains braking power',
          'Extends component life',
          'DOT-spec fluid'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'abs-service',
        name: 'ABS Diagnostics & Repair',
        description: 'Anti-lock brake system diagnostics and repair',
        benefits: [
          'Advanced diagnostics',
          'Safety critical',
          'Expert technicians',
          'Proper repairs'
        ],
        estimatedTime: '2-4 hours'
      }
    ]
  },
  {
    id: 'engine-performance',
    name: 'Engine & Performance',
    icon: 'Gauge',
    description: 'Engine diagnostics, repair, and performance services',
    services: [
      {
        id: 'engine-diagnostics',
        name: 'Engine Diagnostics',
        description: 'Computer diagnostics and check engine light diagnosis',
        benefits: [
          'Advanced scan tools',
          'Accurate diagnosis',
          'Clear explanations',
          'Honest pricing'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'tune-up',
        name: 'Tune-Up Services',
        description: 'Complete engine tune-up service',
        benefits: [
          'Improved performance',
          'Better fuel economy',
          'Smoother running',
          'Preventive maintenance'
        ],
        estimatedTime: '2-3 hours'
      },
      {
        id: 'fuel-system',
        name: 'Fuel System Cleaning',
        description: 'Professional fuel system cleaning service',
        benefits: [
          'Restores performance',
          'Improves fuel economy',
          'Cleans injectors',
          'Reduces emissions'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'timing-belt',
        name: 'Timing Belt Replacement',
        description: 'Timing belt and chain replacement',
        benefits: [
          'Prevents engine damage',
          'Maintains timing',
          'Quality parts',
          'Expert installation'
        ],
        estimatedTime: '3-5 hours'
      }
    ]
  },
  {
    id: 'cooling-heating',
    name: 'Cooling & Heating',
    icon: 'Thermometer',
    description: 'AC, heating, and cooling system services',
    services: [
      {
        id: 'ac-service',
        name: 'Air Conditioning Repair & Recharge',
        description: 'Complete AC system service and repair',
        benefits: [
          'Stay cool in summer',
          'System diagnostics',
          'Leak detection',
          'Proper refrigerant'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'heating-repair',
        name: 'Heating System Repair',
        description: 'Heater core, blower, and thermostat repair',
        benefits: [
          'Warm in winter',
          'Defrost performance',
          'Comfort guaranteed',
          'Expert diagnosis'
        ],
        estimatedTime: '1-3 hours'
      },
      {
        id: 'radiator-service',
        name: 'Radiator Service & Replacement',
        description: 'Radiator repair and replacement',
        benefits: [
          'Prevent overheating',
          'Quality radiators',
          'Pressure tested',
          'Warranty included'
        ],
        estimatedTime: '2-4 hours'
      },
      {
        id: 'coolant-flush',
        name: 'Cooling System Flush',
        description: 'Complete coolant system flush and fill',
        benefits: [
          'Prevents corrosion',
          'Optimal cooling',
          'Extends life',
          'Proper coolant mix'
        ],
        estimatedTime: '1 hour'
      }
    ]
  },
  {
    id: 'transmission-driveline',
    name: 'Transmission & Driveline',
    icon: 'Cog',
    description: 'Transmission and driveline diagnostics and repair',
    services: [
      {
        id: 'transmission-diagnostics',
        name: 'Transmission Diagnostics',
        description: 'Computer diagnostics for transmission issues',
        benefits: [
          'Accurate diagnosis',
          'Prevent major repairs',
          'Expert analysis',
          'Clear recommendations'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'transmission-service',
        name: 'Transmission Fluid Service',
        description: 'Transmission fluid exchange and filter replacement',
        benefits: [
          'Smooth shifting',
          'Extended transmission life',
          'Prevents problems',
          'OEM-spec fluid'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'differential-service',
        name: 'Differential Service',
        description: 'Differential fluid service and repair',
        benefits: [
          'Smooth power transfer',
          'Prevents wear',
          'Proper lubrication',
          'AWD/4WD maintenance'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'cv-joint',
        name: 'CV Joint/Axle Replacement',
        description: 'CV joint and axle shaft replacement',
        benefits: [
          'Eliminates clicking',
          'Restore drivability',
          'Quality parts',
          'Professional installation'
        ],
        estimatedTime: '2-3 hours'
      }
    ]
  },
  {
    id: 'suspension-steering',
    name: 'Suspension & Steering',
    icon: 'Navigation',
    description: 'Suspension and steering system repair and maintenance',
    services: [
      {
        id: 'suspension-inspection',
        name: 'Suspension Inspection',
        description: 'Complete suspension system inspection',
        benefits: [
          'Identify worn parts',
          'Safety check',
          'Ride quality',
          'Detailed report'
        ],
        estimatedTime: '30-60 minutes'
      },
      {
        id: 'shocks-struts',
        name: 'Shock & Strut Replacement',
        description: 'Shock absorber and strut replacement',
        benefits: [
          'Improved ride quality',
          'Better handling',
          'Safer braking',
          'Quality parts'
        ],
        estimatedTime: '2-4 hours'
      },
      {
        id: 'steering-repair',
        name: 'Steering System Repair',
        description: 'Power steering and steering linkage repair',
        benefits: [
          'Easy steering',
          'Eliminates noise',
          'Proper alignment',
          'Safe operation'
        ],
        estimatedTime: '2-4 hours'
      },
      {
        id: 'ball-joint',
        name: 'Ball Joint Replacement',
        description: 'Ball joint and tie rod end replacement',
        benefits: [
          'Restores handling',
          'Proper alignment',
          'Safety critical',
          'Quality parts'
        ],
        estimatedTime: '2-3 hours'
      }
    ]
  },
  {
    id: 'electrical-diagnostics',
    name: 'Electrical & Diagnostics',
    icon: 'Zap',
    description: 'Electrical system diagnostics and repair',
    services: [
      {
        id: 'computer-diagnostics',
        name: 'Computer Diagnostics',
        description: 'OBD-II computer diagnostics and code reading',
        benefits: [
          'Accurate diagnosis',
          'Latest scan tools',
          'Clear explanations',
          'Quick service'
        ],
        estimatedTime: '1 hour'
      },
      {
        id: 'electrical-repair',
        name: 'Electrical System Repair',
        description: 'Wiring, sensor, and electrical component repair',
        benefits: [
          'Expert diagnosis',
          'Quality repairs',
          'Prevents problems',
          'Warranty included'
        ],
        estimatedTime: '1-4 hours'
      },
      {
        id: 'alternator-service',
        name: 'Alternator Service',
        description: 'Alternator testing and replacement',
        benefits: [
          'Reliable charging',
          'Prevent breakdowns',
          'Quality alternators',
          'Professional installation'
        ],
        estimatedTime: '1-2 hours'
      },
      {
        id: 'starter-replacement',
        name: 'Starter Replacement',
        description: 'Starter motor testing and replacement',
        benefits: [
          'Reliable starting',
          'Quality starters',
          'Quick service',
          'Warranty included'
        ],
        estimatedTime: '1-2 hours'
      }
    ]
  }
]

export const featuredServices = [
  {
    id: 'oil-change',
    name: 'Oil Changes',
    description: 'Quick, professional oil changes with multi-point inspection',
    icon: 'Droplet',
    price: 'from $39.95',
    time: '30-45 min'
  },
  {
    id: 'nc-inspection',
    name: 'NC State Inspections',
    description: 'Certified NC safety inspections, same-day service',
    icon: 'ClipboardCheck',
    price: '$13.60',
    time: '30 min'
  },
  {
    id: 'tire-sales',
    name: 'Premium Tires',
    description: 'Authorized Michelin®, BFGoodrich®, Uniroyal® dealer',
    icon: 'Disc',
    price: 'Competitive',
    time: '1-2 hours'
  },
  {
    id: 'brake-service',
    name: 'Brake Service',
    description: 'Complete brake inspection, repair, and replacement',
    icon: 'CircleStop',
    price: 'from $129.95',
    time: '1-2 hours'
  },
  {
    id: 'ac-service',
    name: 'AC Service',
    description: 'Stay cool with professional AC repair and recharge',
    icon: 'Snowflake',
    price: 'from $89.95',
    time: '1-2 hours'
  },
  {
    id: 'diagnostics',
    name: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics and check engine light',
    icon: 'Gauge',
    price: 'from $89.95',
    time: '1 hour'
  }
]

export default { serviceCategories, featuredServices }
