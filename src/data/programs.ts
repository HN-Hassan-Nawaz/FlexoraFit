import { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'prog-strength',
    name: 'Strength Training Foundation',
    description: 'Master core compound movements, optimize lifting mechanics, and build a powerful physical foundation with structured progressive overload.',
    category: 'strength',
    difficulty: 'Intermediate',
    duration: '8 Weeks',
    targetGoal: 'Build Power & Muscle',
    trainerName: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-weight-loss',
    name: 'Metabolic Weight Loss',
    description: 'A dynamic combination of resistance exercises and aerobic intervals engineered to supercharge local fat metabolic rate and drop weight.',
    category: 'weight-loss',
    difficulty: 'Beginner',
    duration: '12 Weeks',
    targetGoal: 'Drop Fat & Lean Out',
    trainerName: 'Coach Sofia K.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-muscle',
    name: 'Hypertrophy Muscle Builder',
    description: 'Focus exclusively on targeted volume, optimal repetition ranges, and structural muscle hypertrophy to sculpt clean, dense, aesthetic muscle mass.',
    category: 'muscle-gain',
    difficulty: 'Advanced',
    duration: '10 Weeks',
    targetGoal: 'Max Muscle Mass',
    trainerName: 'Viktor Steel',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-hiit',
    name: 'HIIT Burn Catalyst',
    description: 'High-intensity athletic intervals and functional moves that target extreme cardiovascular conditioning and post-workout afterburn.',
    category: 'cardio',
    difficulty: 'Intermediate',
    duration: '6 Weeks',
    targetGoal: 'High-Calorie Burn',
    trainerName: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-cardio',
    name: 'Cardio Conditioning',
    description: 'Enhance your endurance, lung capacity, and heart health using a mixture of steady-state tempo sessions and aerobic stamina routines.',
    category: 'cardio',
    difficulty: 'Intermediate',
    duration: '8 Weeks',
    targetGoal: 'Peak Aerobic V02 Max',
    trainerName: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1502904585520-2c700ff39de4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-beginner',
    name: 'Beginner Fitness Jumpstart',
    description: 'A safe, encouraging introduction to fitness. Learn basic mechanics, form, structural safety, and develop an enjoyable workout routine.',
    category: 'beginner',
    difficulty: 'Beginner',
    duration: '4 Weeks',
    targetGoal: 'Active Routine Habit',
    trainerName: 'Coach Sofia K.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-core',
    name: 'Core & Abdominal Sculpter',
    description: 'Strengthen your core foundation, improve lower-back stability, and sculpt powerful obliques with isolated and isometric exercises.',
    category: 'strength',
    difficulty: 'Beginner',
    duration: '6 Weeks',
    targetGoal: 'Midsection Core Power',
    trainerName: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'prog-mobility',
    name: 'Mobility & Stretching Flow',
    description: 'Unlock tight joints, restore flexibility, decrease muscle soreness, and maximize your body’s natural functional range of motion.',
    category: 'beginner',
    difficulty: 'Beginner',
    duration: 'Continuous',
    targetGoal: 'Recover & Restore Range',
    trainerName: 'David Mercer',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  }
];
