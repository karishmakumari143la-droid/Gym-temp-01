export interface GymBusinessConfig {
  name: string;
  tagline: string;
  logoText: string;
  logoAccent: string;
  city: string;
  locality: string;
  serviceAreas: string[];
  fullAddress: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  openingHours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  startingPrice: number;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  instagramUrl: string;
  facebookUrl?: string;
  googleReviewsUrl: string;
}

export interface WhatsAppTemplates {
  trialMessage: string;
  membershipMessage: string;
  trainerMessage: string;
  defaultMessage: string;
}

export interface AnnouncementConfig {
  text: string;
  ctaText: string;
  active: boolean;
}

export interface TrustStat {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  note: string;
}

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ImageAssetsConfig {
  hero: string;
  interior: string;
  strengthTraining: string;
  maleTrainer: string;
  femaleTrainer: string;
  functionalTraining: string;
  transformation: string;
}

export interface ImageAltConfig {
  hero: string;
  interior: string;
  strengthTraining: string;
  maleTrainer: string;
  femaleTrainer: string;
  functionalTraining: string;
  transformation: string;
}

export interface TrainingGoalItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  targetFocus: string;
  intensity: 'Medium' | 'High' | 'Advanced' | 'All Levels';
  iconName: string;
  imageUrl?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  monthsCount: number;
  priceDisplay: string;
  rawPrice: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export interface TrainerItem {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  certification: string;
  shortBio: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  category: 'Gym Floor' | 'Strength Zone' | 'Cardio' | 'Functional Training' | 'Trainers' | 'Members';
  title: string;
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface TransformationItem {
  id: string;
  memberName: string;
  goal: string;
  duration: string;
  result: string;
  testimonial: string;
  isPlaceholder: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  membershipType: string;
  text: string;
  isPlaceholder: boolean;
  date: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GymFullConfig {
  business: GymBusinessConfig;
  whatsapp: WhatsAppTemplates;
  announcement: AnnouncementConfig;
  trustStats: TrustStat[];
  whyChooseUs: WhyChooseItem[];
  trainingGoals: TrainingGoalItem[];
  programs: ProgramItem[];
  membershipPlans: MembershipPlan[];
  trainers: TrainerItem[];
  gallery: GalleryItem[];
  transformations: TransformationItem[];
  testimonials: TestimonialItem[];
  amenities: AmenityItem[];
  faqs: FAQItem[];
  imageAssets: ImageAssetsConfig;
  imageAlt: ImageAltConfig;
}

export interface LeadFormData {
  name: string;
  phone: string;
  whatsapp: string;
  fitnessGoal: string;
  preferredTime: string;
  message: string;
  planOrProgram?: string;
}
