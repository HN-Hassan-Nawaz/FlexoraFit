import { ClassSchedule } from '../types';

export const classSchedules: ClassSchedule[] = [
  // Monday
  { id: 'sch-1', day: 'Monday', className: 'HIIT Burn', time: '07:00 AM', trainer: 'Elena Rostova', duration: '45 mins', slots: { total: 20, available: 4 } },
  { id: 'sch-2', day: 'Monday', className: 'Strength Foundations', time: '09:00 AM', trainer: 'Marcus Vance', duration: '60 mins', slots: { total: 15, available: 2 } },
  { id: 'sch-3', day: 'Monday', className: 'Hypertrophy Power', time: '05:30 PM', trainer: 'Viktor Steel', duration: '50 mins', slots: { total: 18, available: 0 } },
  
  // Tuesday
  { id: 'sch-4', day: 'Tuesday', className: 'Metabolic Conditioning', time: '08:00 AM', trainer: 'Coach Sofia K.', duration: '45 mins', slots: { total: 25, available: 12 } },
  { id: 'sch-5', day: 'Tuesday', className: 'Cardio Tempo Run', time: '04:00 PM', trainer: 'Elena Rostova', duration: '50 mins', slots: { total: 20, available: 8 } },
  { id: 'sch-6', day: 'Tuesday', className: 'Core Blast & Abs', time: '06:30 PM', trainer: 'Marcus Vance', duration: '30 mins', slots: { total: 20, available: 1 } },
  
  // Wednesday
  { id: 'sch-7', day: 'Wednesday', className: 'Mobility & Stretching', time: '09:00 AM', trainer: 'David Mercer', duration: '45 mins', slots: { total: 15, available: 6 } },
  { id: 'sch-8', day: 'Wednesday', className: 'Strength Foundations', time: '11:00 AM', trainer: 'Marcus Vance', duration: '60 mins', slots: { total: 15, available: 5 } },
  { id: 'sch-9', day: 'Wednesday', className: 'Heavy Squat Masterclass', time: '06:00 PM', trainer: 'Viktor Steel', duration: '60 mins', slots: { total: 12, available: 0 } },
  
  // Thursday
  { id: 'sch-10', day: 'Thursday', className: 'HIIT Speed Loop', time: '07:00 AM', trainer: 'Elena Rostova', duration: '45 mins', slots: { total: 20, available: 11 } },
  { id: 'sch-11', day: 'Thursday', className: 'Yoga Vinyasa Flow', time: '10:00 AM', trainer: 'David Mercer', duration: '60 mins', slots: { total: 15, available: 3 } },
  { id: 'sch-12', day: 'Thursday', className: 'Core Blast & Abs', time: '05:30 PM', trainer: 'Coach Sofia K.', duration: '30 mins', slots: { total: 20, available: 7 } },
  
  // Friday
  { id: 'sch-13', day: 'Friday', className: 'Full Body HIIT Blast', time: '08:00 AM', trainer: 'Elena Rostova', duration: '45 mins', slots: { total: 25, available: 2 } },
  { id: 'sch-14', day: 'Friday', className: 'Hypertrophy Power', time: '04:30 PM', trainer: 'Viktor Steel', duration: '50 mins', slots: { total: 18, available: 4 } },
  { id: 'sch-15', day: 'Friday', className: 'Olympic Lifting Intro', time: '06:00 PM', trainer: 'Sarah Chen', duration: '60 mins', slots: { total: 10, available: 1 } },
  
  // Saturday
  { id: 'sch-16', day: 'Saturday', className: 'Cross Training Challenge', time: '09:00 AM', trainer: 'Sarah Chen', duration: '60 mins', slots: { total: 15, available: 0 } },
  { id: 'sch-17', day: 'Saturday', className: 'Yoga Stretch & Restore', time: '11:00 AM', trainer: 'David Mercer', duration: '60 mins', slots: { total: 25, available: 14 } },
  { id: 'sch-18', day: 'Saturday', className: 'Weekend Fat Burner', time: '03:00 PM', trainer: 'Coach Sofia K.', duration: '45 mins', slots: { total: 20, available: 9 } },
  
  // Sunday
  { id: 'sch-19', day: 'Sunday', className: 'Full-Body Deep Restore', time: '10:00 AM', trainer: 'David Mercer', duration: '45 mins', slots: { total: 30, available: 15 } },
  { id: 'sch-20', day: 'Sunday', className: 'Outdoor Run Club', time: '04:00 PM', trainer: 'Elena Rostova', duration: '60 mins', slots: { total: 40, available: 29 } }
];
