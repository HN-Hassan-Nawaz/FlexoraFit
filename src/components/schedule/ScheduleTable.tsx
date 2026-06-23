import { useState } from 'react';
import { classSchedules } from '../../data/schedule';
import { ClassSchedule } from '../../types';
import Badge from '../common/Badge';
import { Clock, User, Heart, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScheduleTable() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [bookedSessions, setBookedSessions] = useState<string[]>([]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter schedules based on selection
  const filteredClasses = classSchedules.filter((item) => item.day === selectedDay);

  const handleBookSession = (id: string) => {
    if (bookedSessions.includes(id)) {
      setBookedSessions(bookedSessions.filter((sessionId) => sessionId !== id));
    } else {
      setBookedSessions([...bookedSessions, id]);
    }
  };

  return (
    <div className="w-full">
      {/* Day Selector Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-2.5 px-5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer outline-none ${
              selectedDay === day
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/10'
                : 'bg-white dark:bg-stone-900 text-slate-700 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-800 border border-slate-200 dark:border-stone-800'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Desktop Timetable View */}
      <div className="hidden md:block overflow-hidden bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-stone-950 border-b border-slate-200 dark:border-stone-850">
              <th className="p-4 lg:p-5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Class Name</th>
              <th className="p-4 lg:p-5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Time Window</th>
              <th className="p-4 lg:p-5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Head Trainer</th>
              <th className="p-4 lg:p-5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Session Duration</th>
              <th className="p-4 lg:p-5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Open Slots</th>
              <th className="p-4 lg:p-5 text-center text-xs font-black uppercase tracking-wider text-slate-500 dark:text-stone-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-stone-800/60 font-medium">
            <AnimatePresence mode="popLayout">
              {filteredClasses.map((item) => {
                const isBooked = bookedSessions.includes(item.id);
                const isFull = item.slots.available === 0 && !isBooked;

                return (
                  <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-stone-800/20 transition-colors duration-250">
                    <td className="p-4 lg:p-5">
                      <div className="font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                        <Heart size={14} className="text-emerald-500" />
                        <span>{item.className}</span>
                      </div>
                    </td>
                    <td className="p-4 lg:p-5 text-sm text-slate-700 dark:text-stone-300">
                      <div className="flex items-center gap-1">
                        <Clock size={13} className="text-emerald-500" />
                        <span>{item.time}</span>
                      </div>
                    </td>
                    <td className="p-4 lg:p-5 text-sm text-slate-700 dark:text-stone-300">
                      <div className="flex items-center gap-1">
                        <User size={13} className="text-emerald-500" />
                        <span>{item.trainer}</span>
                      </div>
                    </td>
                    <td className="p-4 lg:p-5 text-xs text-slate-600 dark:text-stone-400">
                      <span>{item.duration}</span>
                    </td>
                    <td className="p-4 lg:p-5 text-xs">
                      {isFull ? (
                        <Badge variant="error">Full Capacity</Badge>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className={`${isBooked ? 'text-emerald-500' : 'text-slate-700 dark:text-stone-300'} font-semibold`}>
                            {isBooked ? item.slots.available : item.slots.available} / {item.slots.total} spots left
                          </span>
                          <div className="w-24 h-1 bg-slate-100 dark:bg-stone-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${isBooked ? 'bg-emerald-500' : 'bg-emerald-500'}`}
                              style={{ width: `${(item.slots.available / item.slots.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-4 lg:p-5 text-center">
                      <button
                        onClick={() => handleBookSession(item.id)}
                        disabled={isFull}
                        className={`py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none select-none ${
                          isBooked
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : isFull
                            ? 'bg-slate-100 dark:bg-stone-950 text-slate-400 dark:text-stone-605 border border-slate-250 dark:border-stone-800 cursor-not-allowed'
                            : 'bg-stone-900 border border-transparent hover:bg-emerald-500 hover:text-white text-white dark:bg-stone-950 dark:hover:bg-emerald-500'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-1">
                          {isBooked ? (
                            <>
                              <Check size={13} strokeWidth={3} />
                              <span>Booked</span>
                            </>
                          ) : isFull ? (
                            <span>Sold Out</span>
                          ) : (
                            <span>Book Spot</span>
                          )}
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Mobile Card-Based View */}
      <div className="block md:hidden space-y-4">
        {filteredClasses.map((item) => {
          const isBooked = bookedSessions.includes(item.id);
          const isFull = item.slots.available === 0 && !isBooked;

          return (
            <div
              key={item.id}
              className="p-5 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-xl shadow-sm flex flex-col gap-4 text-left"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {item.className}
                  </h4>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-semibold text-slate-500 dark:text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-emerald-500 shrink-0" />
                      <span>{item.time}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} className="text-emerald-500 shrink-0" />
                      <span>{item.trainer}</span>
                    </span>
                  </div>
                </div>
                {isBooked && <Badge variant="success">Registered</Badge>}
              </div>

              <div className="flex justify-between items-center text-xs font-semibold border-t border-dashed border-slate-100 dark:border-stone-800/80 pt-3">
                <span className="text-slate-500 dark:text-stone-500">Duration: {item.duration}</span>
                {isFull ? (
                  <span className="text-rose-500">Capacity Full</span>
                ) : (
                  <span className="text-slate-700 dark:text-stone-300">
                    {item.slots.available} / {item.slots.total} spots available
                  </span>
                )}
              </div>

              <button
                onClick={() => handleBookSession(item.id)}
                disabled={isFull}
                className={`w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isBooked
                    ? 'bg-emerald-600 text-white'
                    : isFull
                    ? 'bg-slate-100 dark:bg-stone-950 text-slate-400 dark:text-stone-600 border border-slate-200 dark:border-stone-800 cursor-not-allowed'
                    : 'bg-stone-900 border border-transparent hover:bg-emerald-500 text-white dark:bg-stone-950 dark:hover:bg-emerald-500'
                }`}
              >
                <span className="flex items-center justify-center gap-1">
                  {isBooked ? (
                    <>
                      <Check size={13} strokeWidth={3} />
                      <span>Spot Registered</span>
                    </>
                  ) : isFull ? (
                    <span>No Slots Available</span>
                  ) : (
                    <span>Book Spot (Free)</span>
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center items-center gap-2 text-xs font-semibold text-slate-500 dark:text-stone-400">
        <Info size={14} className="text-emerald-500" />
        <span>Booking a trial spot is active frontend-only. Changes persist in local session.</span>
      </div>
    </div>
  );
}
