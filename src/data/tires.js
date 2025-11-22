export const tireBrands = [
  {
    id: 'michelin',
    name: 'Michelin®',
    logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Michelin',
    description: 'Premium performance and longevity. The gold standard in tire quality.',
    authorized: true,
    features: [
      'Exceptional tread life',
      'Superior handling',
      'All-season performance',
      'Quiet, comfortable ride'
    ],
    popular: ['Defender T+H', 'Pilot Sport', 'Premier LTX', 'CrossClimate2']
  },
  {
    id: 'bfgoodrich',
    name: 'BFGoodrich®',
    logo: 'https://placehold.co/200x100/FFFFFF/000000?text=BFGoodrich',
    description: 'Rugged performance for trucks, SUVs, and performance vehicles.',
    authorized: true,
    features: [
      'Off-road capability',
      'Durability',
      'Performance handling',
      'All-terrain versatility'
    ],
    popular: ['All-Terrain T/A KO2', 'Advantage T/A Sport', 'Trail-Terrain T/A', 'g-Force COMP-2']
  },
  {
    id: 'uniroyal',
    name: 'Uniroyal®',
    logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Uniroyal',
    description: 'Reliable, affordable tires with excellent wet traction.',
    authorized: true,
    features: [
      'Outstanding wet grip',
      'Value pricing',
      'Long tread life',
      'All-season reliability'
    ],
    popular: ['Tiger Paw Touring', 'Laredo Cross Country', 'Tiger Paw GTZ All Season']
  }
]

export const tiresByVehicle = [
  {
    type: 'Sedan',
    icon: 'Car',
    description: 'Comfortable, quiet tires for daily driving',
    recommended: ['Michelin Defender T+H', 'BFGoodrich Advantage T/A Sport', 'Uniroyal Tiger Paw Touring'],
    features: ['Long tread life', 'Fuel efficiency', 'Quiet ride', 'All-season traction']
  },
  {
    type: 'SUV',
    icon: 'Truck',
    description: 'Versatile tires for on-road and light off-road use',
    recommended: ['Michelin Premier LTX', 'BFGoodrich Trail-Terrain T/A', 'Uniroyal Laredo Cross Country'],
    features: ['Durability', 'Comfort', 'All-terrain capability', 'Load capacity']
  },
  {
    type: 'Truck',
    icon: 'TruckIcon',
    description: 'Heavy-duty tires for work and adventure',
    recommended: ['Michelin LTX A/T2', 'BFGoodrich All-Terrain T/A KO2', 'Uniroyal Laredo HD/T'],
    features: ['Rugged construction', 'Off-road traction', 'Heavy load rating', 'Long-lasting']
  },
  {
    type: 'Performance',
    icon: 'Gauge',
    description: 'High-performance tires for sporty driving',
    recommended: ['Michelin Pilot Sport 4S', 'BFGoodrich g-Force COMP-2', 'Uniroyal Tiger Paw GTZ'],
    features: ['Superior handling', 'High-speed stability', 'Responsive steering', 'Cornering grip']
  }
]

export const seasonalRecommendations = [
  {
    season: 'All-Season',
    description: 'Year-round performance in most conditions',
    icon: 'Calendar',
    bestFor: ['Daily driving', 'Moderate climates', 'Convenience'],
    topPicks: ['Michelin CrossClimate2', 'Michelin Defender T+H', 'BFGoodrich Advantage T/A Sport']
  },
  {
    season: 'Summer',
    description: 'Maximum grip in dry and wet warm weather',
    icon: 'Sun',
    bestFor: ['Performance vehicles', 'Warm climates', 'Spirited driving'],
    topPicks: ['Michelin Pilot Sport 4S', 'BFGoodrich g-Force COMP-2', 'Uniroyal Tiger Paw GTZ']
  },
  {
    season: 'All-Terrain',
    description: 'On-road comfort with off-road capability',
    icon: 'Mountain',
    bestFor: ['Trucks', 'SUVs', 'Adventure', 'Light off-roading'],
    topPicks: ['BFGoodrich All-Terrain T/A KO2', 'Michelin LTX A/T2', 'BFGoodrich Trail-Terrain T/A']
  }
]

export const tireServices = [
  {
    id: 'tire-installation',
    name: 'Tire Installation',
    description: 'Professional mounting, balancing, and installation',
    included: [
      'Tire mounting',
      'Computer wheel balancing',
      'New valve stems',
      'Proper torque to spec',
      'TPMS service',
      'Disposal of old tires'
    ],
    time: '1-2 hours'
  },
  {
    id: 'tire-rotation',
    name: 'Tire Rotation',
    description: 'Extend tire life with regular rotation',
    included: [
      'Tire rotation per manufacturer specs',
      'Tire pressure check and adjustment',
      'Visual inspection',
      'Torque verification'
    ],
    time: '30-45 minutes'
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel Alignment',
    description: 'Computerized 4-wheel alignment',
    included: [
      'Computerized alignment check',
      '4-wheel alignment adjustment',
      'Steering and suspension inspection',
      'Before and after printout',
      'Test drive'
    ],
    time: '1 hour'
  },
  {
    id: 'tire-repair',
    name: 'Tire Repair',
    description: 'Professional puncture repair',
    included: [
      'Puncture location',
      'Tire dismount',
      'Interior patch and plug',
      'Remount and balance',
      'Safety inspection'
    ],
    time: '30-60 minutes'
  }
]

export const tireSelectorOptions = {
  width: ['175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275', '285', '295', '305'],
  aspectRatio: ['35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85'],
  diameter: ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24'],
  vehicleType: ['Sedan', 'SUV', 'Truck', 'Performance', 'Van'],
  season: ['All-Season', 'Summer', 'All-Terrain']
}

export default {
  tireBrands,
  tiresByVehicle,
  seasonalRecommendations,
  tireServices,
  tireSelectorOptions
}
