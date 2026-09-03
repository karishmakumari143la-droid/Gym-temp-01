import { GymFullConfig } from '../types';

/**
 * CRITICAL IMAGE ASSET ARCHITECTURE:
 * Local image assets stored in public/assets/images/gym/
 *
 * Kommodo Reference Metadata (retained for source tracking only):
 * - hero: 'https://kommodo.ai/i/pR6CMVxrB7rcOkcSRbEc'
 * - interior: 'https://kommodo.ai/i/QgTohxg065Azc6lo2zXN'
 * - strengthTraining: 'https://kommodo.ai/i/rlsKoJriDT3CflND43N1'
 * - maleTrainer: 'https://kommodo.ai/i/uObel4PQ15YYkfrH4ZvV'
 * - femaleTrainer: 'https://kommodo.ai/i/FxwzNj2FAtstwJaZJYgC'
 * - functionalTraining: 'https://kommodo.ai/i/eJA3xki4auvL5f3LXIoZ'
 * - transformation: 'https://kommodo.ai/i/EYtwoFlQVRzLSCgQEe11'
 */
/**
 * Resolves local image assets with the active Vite base URL.
 * Ensures assets load correctly on standard roots (/) and GitHub Pages subpaths (/Gym-temp-01/).
 */
export const getAssetUrl = (assetPath: string): string => {
  if (!assetPath) return '';
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://') || assetPath.startsWith('data:')) {
    return assetPath;
  }
  const base = import.meta.env.BASE_URL || '/';
  // If already prefixed with non-root base, return unchanged
  if (base !== '/' && assetPath.startsWith(base)) {
    return assetPath;
  }
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${cleanBase}${cleanPath}`;
};

export const APPROVED_IMAGE_ASSETS = {
  hero: getAssetUrl('/assets/images/gym/hero-gym.webp'),
  interior: getAssetUrl('/assets/images/gym/gym-interior.webp'),
  strengthTraining: getAssetUrl('/assets/images/gym/strength-training.webp'),
  maleTrainer: getAssetUrl('/assets/images/gym/trainer-male.webp'),
  femaleTrainer: getAssetUrl('/assets/images/gym/trainer-female.webp'),
  functionalTraining: getAssetUrl('/assets/images/gym/functional-training.webp'),
  transformation: getAssetUrl('/assets/images/gym/transformation.webp'),
};

export const imageAssets = APPROVED_IMAGE_ASSETS;

export const defaultGymConfig: GymFullConfig = {
  business: {
    name: 'IRONVAULT FITNESS',
    tagline: 'TRAIN HARD. LIVE STRONG.',
    logoText: 'IRONVAULT',
    logoAccent: 'FITNESS',
    city: 'Mumbai',
    locality: 'Bandra West',
    serviceAreas: ['Bandra West', 'Khar West', 'Pali Hill', 'Santacruz West', 'BKC & Kurla'],
    fullAddress: 'Plot 42, Waterfield Road, Opp. National College, Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 98200 12345',
    displayPhone: '+91 98200 12345',
    whatsappNumber: '919820012345',
    email: 'enquire@ironvaultfitness.in',
    openingHours: {
      weekday: '05:30 AM – 11:00 PM',
      saturday: '06:00 AM – 10:00 PM',
      sunday: '07:00 AM – 08:00 PM',
    },
    startingPrice: 6999,
    googleMapsUrl: 'https://maps.google.com/?q=Bandra+West+Mumbai',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30164.71714418659!2d72.8197072!3d19.0596357!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3be7c91d8e1215b3%3A0xb30d32f57a3e7428!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin',
    instagramUrl: 'https://instagram.com',
    facebookUrl: 'https://facebook.com',
    googleReviewsUrl: 'https://search.google.com/local/reviews',
  },

  whatsapp: {
    trialMessage: 'Hi, I would like to book a free trial at IRONVAULT FITNESS.',
    membershipMessage: 'Hi, I would like to know the membership plans at IRONVAULT FITNESS.',
    trainerMessage: 'Hi, I would like to enquire about personal training at IRONVAULT FITNESS.',
    defaultMessage: 'Hi, I would like to enquire about IRONVAULT FITNESS.',
  },

  announcement: {
    text: 'NEW MEMBERS — BOOK YOUR FREE TRIAL',
    ctaText: 'BOOK NOW',
    active: true,
  },

  imageAssets: {
    hero: APPROVED_IMAGE_ASSETS.hero,
    interior: APPROVED_IMAGE_ASSETS.interior,
    strengthTraining: APPROVED_IMAGE_ASSETS.strengthTraining,
    maleTrainer: APPROVED_IMAGE_ASSETS.maleTrainer,
    femaleTrainer: APPROVED_IMAGE_ASSETS.femaleTrainer,
    functionalTraining: APPROVED_IMAGE_ASSETS.functionalTraining,
    transformation: APPROVED_IMAGE_ASSETS.transformation,
  },

  imageAlt: {
    hero: 'IRONVAULT FITNESS premium fitness centre in Mumbai',
    interior: 'Modern gym interior at IRONVAULT FITNESS',
    strengthTraining: 'Strength training at IRONVAULT FITNESS',
    maleTrainer: 'Personal trainer at IRONVAULT FITNESS',
    femaleTrainer: 'Fitness trainer at IRONVAULT FITNESS',
    functionalTraining: 'Functional training session at IRONVAULT FITNESS',
    transformation: 'Member transformation result at IRONVAULT FITNESS',
  },

  trustStats: [
    {
      id: 'stat-1',
      value: '10+',
      label: 'Years Experience',
      sublabel: 'Dedicated Strength Coaching',
      note: 'Replace with verified client data.',
    },
    {
      id: 'stat-2',
      value: '2,500+',
      label: 'Members',
      sublabel: 'Active Training Community',
      note: 'Replace with verified client data.',
    },
    {
      id: 'stat-3',
      value: '15+',
      label: 'Expert Trainers',
      sublabel: 'Gold-Standard Certified',
      note: 'Replace with verified client data.',
    },
    {
      id: 'stat-4',
      value: '4.9★',
      label: 'Google Rating',
      sublabel: 'Based on Verified Visits',
      note: 'Replace with verified client data.',
    },
  ],

  whyChooseUs: [
    {
      id: 'why-1',
      number: '01',
      title: 'EXPERT COACHING',
      description: 'Personalized guidance from experienced trainers.',
    },
    {
      id: 'why-2',
      number: '02',
      title: 'PREMIUM EQUIPMENT',
      description: 'Modern equipment for strength, cardio and functional training.',
    },
    {
      id: 'why-3',
      number: '03',
      title: 'GOAL-BASED TRAINING',
      description: 'Training designed around individual fitness goals.',
    },
    {
      id: 'why-4',
      number: '04',
      title: 'SUPPORTIVE COMMUNITY',
      description: 'A motivating environment that keeps members consistent.',
    },
  ],

  trainingGoals: [
    {
      id: 'goal-1',
      number: '01',
      title: 'MUSCLE BUILDING',
      description: 'Hypertrophy protocols, compound barbell lifts, and calibrated progressive overload.',
      imageUrl: APPROVED_IMAGE_ASSETS.strengthTraining,
    },
    {
      id: 'goal-2',
      number: '02',
      title: 'FUNCTIONAL TRAINING',
      description: 'Athletic agility, kettlebell complexes, sled tracks, and injury-resilient movement.',
      imageUrl: APPROVED_IMAGE_ASSETS.functionalTraining,
    },
    {
      id: 'goal-3',
      number: '03',
      title: 'FAT LOSS & CONDITIONING',
      description: 'Metabolic conditioning, high-calorie burn intervals, and cardiovascular endurance.',
      imageUrl: APPROVED_IMAGE_ASSETS.transformation,
    },
    {
      id: 'goal-4',
      number: '04',
      title: 'PERSONAL COACHING',
      description: 'Bespoke one-on-one performance mentorship, tailored technique analysis, and accountability.',
      imageUrl: APPROVED_IMAGE_ASSETS.maleTrainer,
    },
  ],

  programs: [
    {
      id: 'prog-1',
      title: 'Strength Training',
      description: 'Heavy compound lifts, Olympic platforms, and hypertrophy splits for raw muscular development.',
      targetFocus: 'Power & Hypertrophy',
      intensity: 'High',
      iconName: 'Dumbbell',
      imageUrl: APPROVED_IMAGE_ASSETS.strengthTraining,
    },
    {
      id: 'prog-2',
      title: 'Functional Training',
      description: 'Agility drills, kettlebell complexes, sled pushes, and battle ropes to improve real-world athleticism.',
      targetFocus: 'Athletic Mobility',
      intensity: 'Medium',
      iconName: 'Activity',
      imageUrl: APPROVED_IMAGE_ASSETS.functionalTraining,
    },
    {
      id: 'prog-3',
      title: 'Weight Training',
      description: 'Structured resistance protocols using calibrated free weights, selectorized stacks, and specialized cable stations.',
      targetFocus: 'Body Sculpting',
      intensity: 'High',
      iconName: 'Shield',
    },
    {
      id: 'prog-4',
      title: 'HIIT',
      description: 'High-intensity interval bursts that elevate cardiovascular endurance, accelerate fat loss, and boost VO2 max.',
      targetFocus: 'Stamina & Endurance',
      intensity: 'Advanced',
      iconName: 'Zap',
    },
    {
      id: 'prog-5',
      title: 'Personal Training',
      description: 'Bespoke 1-on-1 mentorship with dedicated trainer monitoring, nutrition guidance, and biometric progress tracking.',
      targetFocus: 'Customised Results',
      intensity: 'All Levels',
      iconName: 'UserCheck',
    },
    {
      id: 'prog-6',
      title: 'Group Training',
      description: 'Coach-led small-group sessions fostering team camaraderie, friendly competition, and high energy workouts.',
      targetFocus: 'Motivation & Community',
      intensity: 'Medium',
      iconName: 'Users',
    },
  ],

  membershipPlans: [
    {
      id: 'plan-starter',
      name: 'STARTER',
      duration: '1 Month',
      monthsCount: 1,
      priceDisplay: '₹6,999',
      rawPrice: 6999,
      badge: 'FLEXIBLE',
      isPopular: false,
      features: [
        'Full Gym & Floor Access',
        'Locker & Shower Facility',
        'Complimentary Fitness Assessment',
        'Standard Floor Trainer Guidance',
        'Free Drinking Water & Wi-Fi',
      ],
    },
    {
      id: 'plan-transform',
      name: 'TRANSFORM',
      duration: '3 Months',
      monthsCount: 3,
      priceDisplay: '₹16,999',
      rawPrice: 16999,
      badge: 'MOST POPULAR',
      isPopular: true,
      features: [
        'Full Gym Floor & Strength Zone',
        'Locker & Shower Facility',
        '2 One-on-One PT Induction Sessions',
        'Personalised Workout Chart & Split',
        'Diet & Nutrition Consultation Guide',
        'Free 15-Day Membership Freeze Option',
      ],
    },
    {
      id: 'plan-commit',
      name: 'COMMIT',
      duration: '6 Months',
      monthsCount: 6,
      priceDisplay: '₹28,999',
      rawPrice: 28999,
      badge: 'BEST VALUE',
      isPopular: false,
      features: [
        'All Transform Plan Inclusions',
        'Priority Locker Allocation',
        '4 One-on-One PT Coaching Sessions',
        'Monthly Body Composition Analysis (InBody)',
        'Nutrition & Macro Tracking Support',
        'Free 30-Day Membership Freeze Option',
      ],
    },
    {
      id: 'plan-annual',
      name: 'ANNUAL ELITE',
      duration: '12 Months',
      monthsCount: 12,
      priceDisplay: '₹48,999',
      rawPrice: 48999,
      badge: 'VIP ACCESS',
      isPopular: false,
      features: [
        'Unrestricted 365-Day Access',
        'Dedicated Locker & Laundry Service',
        '8 PT Strategy & Progression Sessions',
        'Quarterly Biometric Health Audits',
        'Guest Passes (2 per month)',
        'Free 60-Day Membership Freeze Option',
      ],
    },
  ],

  trainers: [
    {
      id: 'trainer-1',
      name: 'Rahul Sharma',
      specialization: 'Strength & Conditioning Coach',
      experience: '[8+ Years Experience — Replace with verified client data]',
      certification: '[CSCS® / K11 Certified — Replace with verified client data]',
      shortBio: 'Specializes in powerlifting mechanics, hypertrophy periodization, and athletic performance conditioning for competitive & beginner lifters.',
      imageUrl: APPROVED_IMAGE_ASSETS.maleTrainer,
    },
    {
      id: 'trainer-2',
      name: 'Priya Verma',
      specialization: 'Fitness & Transformation Coach',
      experience: '[6+ Years Experience — Replace with verified client data]',
      certification: '[ACE Certified / PN-1 — Replace with verified client data]',
      shortBio: 'Expert in female strength conditioning, metabolic fat loss protocols, postural alignment, and sustainable nutrition coaching.',
      imageUrl: APPROVED_IMAGE_ASSETS.femaleTrainer,
    },
  ],

  gallery: [
    {
      id: 'gal-1',
      category: 'Gym Floor',
      title: 'Interior Training Environment',
      imageUrl: APPROVED_IMAGE_ASSETS.interior,
      alt: 'Modern gym interior at IRONVAULT FITNESS',
      caption: 'A focused training environment built for consistency, performance and progress.',
    },
    {
      id: 'gal-2',
      category: 'Strength Zone',
      title: 'Olympic Lifting & Strength Zone',
      imageUrl: APPROVED_IMAGE_ASSETS.strengthTraining,
      alt: 'Strength training at IRONVAULT FITNESS',
      caption: 'Heavy free-weight and barbell training floor with calibrated plates and squat platforms.',
    },
    {
      id: 'gal-3',
      category: 'Functional Training',
      title: 'Functional Turf & Movement Area',
      imageUrl: APPROVED_IMAGE_ASSETS.functionalTraining,
      alt: 'Functional training session at IRONVAULT FITNESS',
      caption: 'Purposeful functional movement, conditioning, agility, and joint resilience zone.',
    },
    {
      id: 'gal-4',
      category: 'Trainers',
      title: 'Head Strength Coach',
      imageUrl: APPROVED_IMAGE_ASSETS.maleTrainer,
      alt: 'Personal trainer at IRONVAULT FITNESS',
      caption: 'Certified strength and conditioning mentorship tailored to individual mechanics.',
    },
    {
      id: 'gal-5',
      category: 'Trainers',
      title: 'Transformation Specialist',
      imageUrl: APPROVED_IMAGE_ASSETS.femaleTrainer,
      alt: 'Fitness trainer at IRONVAULT FITNESS',
      caption: 'Technique-driven coaching for fat loss, hypertrophy, and lifestyle transformation.',
    },
    {
      id: 'gal-6',
      category: 'Members',
      title: 'Member Transformation Result',
      imageUrl: APPROVED_IMAGE_ASSETS.transformation,
      alt: 'Member transformation result at IRONVAULT FITNESS',
      caption: 'Documented member progress tracking showing sustainable body recomposition.',
    },
  ],

  transformations: [
    {
      id: 'trans-1',
      memberName: '[Member Name — Demo Placeholder]',
      goal: 'Fat Loss & Athletic Conditioning',
      duration: '12 Week Transformation',
      result: '[Verified Result — 9.5 kg Fat Loss, 2.8 kg Lean Mass]',
      testimonial: 'The structured hypertrophy routine and coach accountability completely altered my training mindset. No fad diets, just consistent work.',
      isPlaceholder: true,
    },
    {
      id: 'trans-2',
      memberName: '[Member Name — Demo Placeholder]',
      goal: 'Strength & Hypertrophy',
      duration: '16 Week Transformation',
      result: '[Verified Result — +40kg Deadlift, Noticeable Muscle Gain]',
      testimonial: 'The barbell coaching helped me break past plateaus that had stuck with me for 2 years. Top-tier equipment and serious gym vibe.',
      isPlaceholder: true,
    },
    {
      id: 'trans-3',
      memberName: '[Member Name — Demo Placeholder]',
      goal: 'Postural Rehabilitation & Mobility',
      duration: '24 Week Transformation',
      result: '[Verified Result — Chronic Back Pain Eliminated, Core Power Rebuilt]',
      testimonial: 'Personal training was worth every rupee. My coach corrected my desk-job posture imbalances before progressing heavy lifts.',
      isPlaceholder: true,
    },
  ],

  testimonials: [
    {
      id: 'test-1',
      name: '[MEMBER NAME]',
      rating: 5,
      membershipType: 'Strength Member (Bandra West)',
      text: '[REAL CUSTOMER TESTIMONIAL] Best training facility in the area. Equipment is properly maintained, dumbbells go up to serious weights, and the trainers are genuinely hands-on rather than sitting on their phones.',
      isPlaceholder: true,
      date: 'March 2026',
    },
    {
      id: 'test-2',
      name: '[MEMBER NAME]',
      rating: 5,
      membershipType: 'Annual Elite Member',
      text: '[REAL CUSTOMER TESTIMONIAL] A truly serious gym without the annoying influencer clutter. Clean changing rooms, powerful air conditioning, and top-tier coaches who respect your time.',
      isPlaceholder: true,
      date: 'February 2026',
    },
    {
      id: 'test-3',
      name: '[MEMBER NAME]',
      rating: 5,
      membershipType: 'Personal Training Client',
      text: '[REAL CUSTOMER TESTIMONIAL] Signed up for the 3-month transform plan after taking their free trial. The initial workout assessment gave me a clear blueprint, and the results have been undeniable.',
      isPlaceholder: true,
      date: 'January 2026',
    },
  ],

  amenities: [
    {
      id: 'amenity-1',
      title: 'Commercial Equipment',
      description: 'Heavy-gauge steel racks, calibrated Olympic plates, and biomechanically aligned selectorized pin machines.',
      iconName: 'Dumbbell',
    },
    {
      id: 'amenity-2',
      title: 'Air Conditioning',
      description: 'Industrial high-flow HVAC ventilation maintaining optimal workout temperature even during peak summer workouts.',
      iconName: 'Wind',
    },
    {
      id: 'amenity-3',
      title: 'Changing Rooms',
      description: 'Pristine locker facilities, secure keypads, rain showers, and grooming amenities maintained continuously.',
      iconName: 'Lock',
    },
    {
      id: 'amenity-4',
      title: 'Parking',
      description: 'Convenient on-site two-wheeler and valet four-wheeler parking slots for members during workout hours.',
      iconName: 'Car',
    },
    {
      id: 'amenity-5',
      title: 'Personal Training',
      description: 'Certified 1-on-1 coaching with progressive overload tracking, biometric analysis, and custom diet programming.',
      iconName: 'UserCheck',
    },
    {
      id: 'amenity-6',
      title: 'Functional Zone',
      description: 'High-density sprint turf track for sled pushes, battle rope intervals, plyometrics, and kettlebell circuits.',
      iconName: 'Flame',
    },
    {
      id: 'amenity-7',
      title: 'Cardio Zone',
      description: 'Commercial treadmills, stair climbers, concept rowing machines, and assault air bikes with interval tracking.',
      iconName: 'HeartPulse',
    },
    {
      id: 'amenity-8',
      title: 'Free Wi-Fi',
      description: 'Reliable fiber connection across all workout zones to stream your personal workout playlists without buffering.',
      iconName: 'Wifi',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What are your gym membership prices?',
      answer: 'Our memberships start from ₹6,999 for 1-month starter access. We offer value-driven quarterly (3-month Transform), half-yearly (6-month Commit), and annual packages that include trainer induction sessions, workout programming, and locker access. You can request our detailed rate card via WhatsApp or book a free trial visit.',
    },
    {
      id: 'faq-2',
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a complimentary 1-day free trial workout for prospective members. This allows you to experience the gym floor, inspect the equipment, and meet our coaching team with zero obligation.',
    },
    {
      id: 'faq-3',
      question: 'Is personal training available?',
      answer: 'Yes, personal training is available with our certified coaches. Packages range from 12 to 36 sessions with tailored strength routines, nutritional guidance, and regular biometric tracking.',
    },
    {
      id: 'faq-4',
      question: 'What are your gym timings?',
      answer: 'We are open Monday to Friday from 05:30 AM to 11:00 PM, Saturday from 06:00 AM to 10:00 PM, and Sunday from 07:00 AM to 08:00 PM to accommodate both early morning and late night workout routines.',
    },
    {
      id: 'faq-5',
      question: 'What equipment do you have?',
      answer: 'We house commercial-grade heavy-duty equipment including Olympic barbell platforms, dumbbells up to 50kg+, multi-grip cable stations, smith machines, power cages, and commercial cardio units.',
    },
    {
      id: 'faq-6',
      question: 'Do you offer fitness guidance?',
      answer: 'Yes. Every new member receives a complimentary baseline fitness assessment, body composition analysis, and a structured workout split. Floor trainers are always available during operating hours to assist with form.',
    },
    {
      id: 'faq-7',
      question: 'Is parking available?',
      answer: 'Yes, we have designated parking space for two-wheelers and four-wheelers with security surveillance during gym hours.',
    },
    {
      id: 'faq-8',
      question: 'Can beginners join?',
      answer: 'Absolutely. A significant portion of our members began as complete beginners. Our certified trainers provide clear exercise demonstrations, safe loading protocols, and patient guidance.',
    },
    {
      id: 'faq-9',
      question: 'Where is the gym located?',
      answer: 'We are located at Plot 42, Waterfield Road, Opp. National College, Bandra West, Mumbai. Our facility easily serves residents from Bandra West, Khar West, Pali Hill, Santacruz West, and surrounding localities.',
    },
    {
      id: 'faq-10',
      question: 'Do you offer functional training?',
      answer: 'Yes. We feature a dedicated functional turf zone equipped with battle ropes, sled tracks, kettlebells, medicine balls, and plyo boxes designed to build real-world strength, athletic conditioning, and joint mobility.',
    },
  ],
};

/**
 * Builds a valid WhatsApp click-to-chat URL with phone and encoded message
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

/**
 * Builds a tel: link
 */
export function buildTelUrl(phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/\s+/g, '')}`;
}
