import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'price-basic',
    name: 'Basic Access',
    price: '$29',
    period: '/ month',
    description: 'Perfect for independent lifters seeking access to pristine, professional equipment.',
    features: [
      'Full Gym Floor & Amenities Access',
      'Standard Workout Plan Template',
      '2 Guest Passes per Month',
      'Secure Locker Room & Showers',
      'Basic Performance App Tracker'
    ],
    buttonText: 'Buy Basic Pass'
  },
  {
    id: 'price-pro',
    name: 'Pro Athlete',
    price: '$59',
    period: '/ month',
    description: 'Our most popular tier. Full-circle conditioning, class access, and personalized daily plans.',
    features: [
      'All Basic Access Benefits',
      'Unlimited Group Studio Classes',
      'Daily Fully Interactive Workouts',
      'Weekly Trainer Check-Ins (15 min)',
      'Digital Body Composition Mapping',
      '10% Discount at Fuel Bar'
    ],
    isPopular: true,
    buttonText: 'Upgrade to Pro'
  },
  {
    id: 'price-elite',
    name: 'Elite Performance',
    price: '$119',
    period: '/ month',
    description: 'An elite tier for high-achieving athletes wanting customized coaching, food plans, and deep metrics.',
    features: [
      'All Pro Athlete Benefits',
      '1-on-1 Dedicated Trainer Sessions (2x/mo)',
      'Custom Metabolic & Nutritional Meal Plans',
      'Dynamic Hypertrophy Program Builder',
      'Advanced Sleep & Readiness Metrology',
      'Unlimited Guest Passes',
      '24/7 Priority Coaching Email'
    ],
    buttonText: 'Join Elite Tier'
  }
];
