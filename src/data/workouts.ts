import { DailyWorkout } from '../types';

export const dailyWorkouts: DailyWorkout[] = [
  {
    id: 'work-mon',
    day: 'Monday',
    focus: 'Chest + Triceps Focus',
    duration: '45 mins',
    difficulty: 'Intermediate',
    estimatedCalories: 480,
    exercises: [
      { id: 'ex-mon-1', name: 'Barbell Flat Bench Press', sets: 4, reps: '8-10 reps', restTime: '90s', targetMuscle: 'Chest (Pectorals)', difficulty: 'Medium' },
      { id: 'ex-mon-2', name: 'Incline Dumbbell Press', sets: 3, reps: '10-12 reps', restTime: '75s', targetMuscle: 'Upper Chest', difficulty: 'Medium' },
      { id: 'ex-mon-3', name: 'Weighted Chest Dips', sets: 3, reps: '8-12 reps', restTime: '60s', targetMuscle: 'Lower Chest & Triceps', difficulty: 'Hard' },
      { id: 'ex-mon-4', name: 'Cable Chest Flyes', sets: 3, reps: '12-15 reps', restTime: '60s', targetMuscle: 'Chest (Inner/Outer)', difficulty: 'Easy' },
      { id: 'ex-mon-5', name: 'Overhead Dumbbell Tricep Extension', sets: 3, reps: '12 reps', restTime: '60s', targetMuscle: 'Triceps Long Head', difficulty: 'Easy' },
      { id: 'ex-mon-6', name: 'Tricep Rope Pushdowns', sets: 3, reps: '15 reps', restTime: '45s', targetMuscle: 'Triceps Lateral Head', difficulty: 'Easy' }
    ]
  },
  {
    id: 'work-tue',
    day: 'Tuesday',
    focus: 'Back + Biceps Focus',
    duration: '50 mins',
    difficulty: 'Intermediate',
    estimatedCalories: 510,
    exercises: [
      { id: 'ex-tue-1', name: 'Conventional Deadlifts', sets: 4, reps: '5-6 reps', restTime: '120s', targetMuscle: 'Posterior Chain (Lat/Lower Back)', difficulty: 'Hard' },
      { id: 'ex-tue-2', name: 'Wide-Grip Pull-Ups', sets: 3, reps: '8-10 reps (or Bodyweight)', restTime: '90s', targetMuscle: 'Lats (Lattissimus Dorsi)', difficulty: 'Hard' },
      { id: 'ex-tue-3', name: 'Bent-Over Barbell Rows', sets: 3, reps: '8-10 reps', restTime: '75s', targetMuscle: 'Mid-Back (Rhomboids)', difficulty: 'Medium' },
      { id: 'ex-tue-4', name: 'Single-Arm Dumbbell Row', sets: 3, reps: '12 reps each', restTime: '60s', targetMuscle: 'Middle Lats', difficulty: 'Medium' },
      { id: 'ex-tue-5', name: 'Incline Dumbbell Bicep Curl', sets: 3, reps: '12 reps', restTime: '60s', targetMuscle: 'Biceps Brachii', difficulty: 'Easy' },
      { id: 'ex-tue-6', name: 'Barbell Hammer Curl', sets: 3, reps: '12-15 reps', restTime: '60s', targetMuscle: 'Brachialis & Forearm', difficulty: 'Easy' }
    ]
  },
  {
    id: 'work-wed',
    day: 'Wednesday',
    focus: 'Leg Day (Quads & Hamstrings)',
    duration: '60 mins',
    difficulty: 'Advanced',
    estimatedCalories: 620,
    exercises: [
      { id: 'ex-wed-1', name: 'Barbell Back Squats', sets: 4, reps: '6-8 reps', restTime: '120s', targetMuscle: 'Quadriceps & Glutes', difficulty: 'Hard' },
      { id: 'ex-wed-2', name: 'Romanian Deadlifts', sets: 3, reps: '10 reps', restTime: '90s', targetMuscle: 'Hamstrings & Glutes', difficulty: 'Hard' },
      { id: 'ex-wed-3', name: 'Bulgarian Split Squats', sets: 3, reps: '10 reps per leg', restTime: '75s', targetMuscle: 'Quads & Unilateral Balance', difficulty: 'Hard' },
      { id: 'ex-wed-4', name: 'Leg Press (Wide Stance)', sets: 3, reps: '12-15 reps', restTime: '75s', targetMuscle: 'Quads & Adductors', difficulty: 'Medium' },
      { id: 'ex-wed-5', name: 'Lying Leg Curls', sets: 3, reps: '15 reps', restTime: '60s', targetMuscle: 'Hamstrings Lower', difficulty: 'Easy' },
      { id: 'ex-wed-6', name: 'Standing Calf Raises', sets: 4, reps: '20 reps', restTime: '45s', targetMuscle: 'Calves (Gastrocnemius)', difficulty: 'Easy' }
    ]
  },
  {
    id: 'work-thu',
    day: 'Thursday',
    focus: 'Shoulders + Core Power',
    duration: '45 mins',
    difficulty: 'Intermediate',
    estimatedCalories: 430,
    exercises: [
      { id: 'ex-thu-1', name: 'Overhead Standing Barbell Press', sets: 4, reps: '6-8 reps', restTime: '90s', targetMuscle: 'Front Deltoids', difficulty: 'Hard' },
      { id: 'ex-thu-2', name: 'Dumbbell Lateral Raises', sets: 4, reps: '15 reps', restTime: '60s', targetMuscle: 'Lateral Deltoids (Side)', difficulty: 'Easy' },
      { id: 'ex-thu-3', name: 'Dumbbell Rear Delt Flyes', sets: 3, reps: '15 reps', restTime: '60s', targetMuscle: 'Rear Deltoids', difficulty: 'Easy' },
      { id: 'ex-thu-4', name: 'Hanging Leg Raises', sets: 3, reps: '15 reps', restTime: '60s', targetMuscle: 'Lower Abdominals', difficulty: 'Medium' },
      { id: 'ex-thu-5', name: 'Active Plank-to-Pushup', sets: 3, reps: '1 min continuous', restTime: '45s', targetMuscle: 'Core & Transverse Abdominis', difficulty: 'Medium' },
      { id: 'ex-thu-6', name: 'Cable Russian Twists', sets: 3, reps: '20 reps per side', restTime: '45s', targetMuscle: 'Obliques', difficulty: 'Medium' }
    ]
  },
  {
    id: 'work-fri',
    day: 'Friday',
    focus: 'Full Body HIIT Conditioning',
    duration: '40 mins',
    difficulty: 'Advanced',
    estimatedCalories: 580,
    exercises: [
      { id: 'ex-fri-1', name: 'Dumbbell Thrusters', sets: 4, reps: '45s Work / 15s Rest', restTime: '60s', targetMuscle: 'Full Body (Legs & Shoulders)', difficulty: 'Hard' },
      { id: 'ex-fri-2', name: 'Kettlebell Swings (Heavy)', sets: 4, reps: '45s Work / 15s Rest', restTime: '60s', targetMuscle: 'Glutes, Hips & Hamstrings', difficulty: 'Medium' },
      { id: 'ex-fri-3', name: 'Dumbbell Renegade Rows', sets: 3, reps: '45s Work / 15s Rest', restTime: '60s', targetMuscle: 'Core, Back & Chest', difficulty: 'Hard' },
      { id: 'ex-fri-4', name: 'Explosive Box Jumps', sets: 3, reps: '12 reps', restTime: '45s', targetMuscle: 'Plometrics (Fast Twitch Fiber)', difficulty: 'Medium' },
      { id: 'ex-fri-5', name: 'Medicine Ball Slams', sets: 3, reps: '20 reps', restTime: '45s', targetMuscle: 'Shoulders, Lats & Abs', difficulty: 'Easy' },
      { id: 'ex-fri-6', name: 'Chest-to-Floor Burpees', sets: 4, reps: 'Last Set Max-out', restTime: '60s', targetMuscle: 'Cardiovascular Burn', difficulty: 'Hard' }
    ]
  },
  {
    id: 'work-sat',
    day: 'Saturday',
    focus: 'Cardio + Active Mobility',
    duration: '50 mins',
    difficulty: 'Beginner',
    estimatedCalories: 380,
    exercises: [
      { id: 'ex-sat-1', name: 'LISS (Steady-State Cardio Treadmill or Cycle)', sets: 1, reps: '30 mins zone 2', restTime: '0s', targetMuscle: 'Heart Endurance & Aerobic Health', difficulty: 'Easy' },
      { id: 'ex-sat-2', name: '90/90 Hip Opener Flow', sets: 3, reps: '1 min each side', restTime: '30s', targetMuscle: 'Hip Joints & Pelvic Stability', difficulty: 'Easy' },
      { id: 'ex-sat-3', name: 'World’s Greatest Stretch', sets: 3, reps: '6 reps per side', restTime: '30s', targetMuscle: 'Full Body Mobility & Torso Rotation', difficulty: 'Easy' },
      { id: 'ex-sat-4', name: 'Scapular Wall Slides', sets: 3, reps: '12 reps', restTime: '30s', targetMuscle: 'Shoulder Impingement Prevention', difficulty: 'Easy' },
      { id: 'ex-sat-5', name: 'Deep Goblet Squat Hold', sets: 3, reps: '45s active hold', restTime: '45s', targetMuscle: 'Ankle Mobility & Spine Decompression', difficulty: 'Medium' }
    ]
  },
  {
    id: 'work-sun',
    day: 'Sunday',
    focus: 'Rest & Full-Body Recovery',
    duration: '30 mins',
    difficulty: 'Beginner',
    estimatedCalories: 150,
    exercises: [
      { id: 'ex-sun-1', name: 'Guided Meditation & Breathwork', sets: 1, reps: '15 mins diaphragmatic loop', restTime: '0s', targetMuscle: 'Parasympathetic Nervous Activation', difficulty: 'Easy' },
      { id: 'ex-sun-2', name: 'Full Static Hamstring & Calf Release', sets: 2, reps: '90 seconds hold', restTime: '30s', targetMuscle: 'Hamstring & Calf Tension', difficulty: 'Easy' },
      { id: 'ex-sun-3', name: 'Cobra-to-Child’s Pose Transition', sets: 3, reps: '10 dynamic cycles', restTime: '30s', targetMuscle: 'Spinal Decompression & Upper Back', difficulty: 'Easy' },
      { id: 'ex-sun-4', name: 'Foam Rolling Quadriceps & IT Band', sets: 1, reps: '5 mins total sweep', restTime: '0s', targetMuscle: 'Myofascial Trigger Point Demolition', difficulty: 'Easy' }
    ]
  }
];
