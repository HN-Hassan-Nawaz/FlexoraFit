export interface Program {
  id: string;
  name: string;
  description: string;
  category: 'strength' | 'weight-loss' | 'muscle-gain' | 'cardio' | 'beginner';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  targetGoal: string;
  trainerName: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  certifications: string[];
  availableDays: string[];
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime: string;
  targetMuscle: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface DailyWorkout {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  focus: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: Exercise[];
  estimatedCalories: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: 'Workout' | 'Diet' | 'Motivation' | 'Beginners';
  date: string;
  image: string;
  readTime: string;
}

export interface ClassSchedule {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  className: string;
  time: string;
  trainer: string;
  duration: string;
  slots: {
    total: number;
    available: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  achievement: string; // before-after success story hook
}

export interface MealPlan {
  id: string;
  title: string;
  goal: string;
  description: string;
  meals: {
    breakfast: string;
    lunch: string;
    snack: string;
    dinner: string;
  };
  macros: {
    protein: string;
    carbs: string;
    fats: string;
    calories: string;
  };
}

export interface NutritionTip {
  id: string;
  title: string;
  description: string;
  category: 'Protein' | 'Hydration' | 'Recovery' | 'Fat Loss';
}
