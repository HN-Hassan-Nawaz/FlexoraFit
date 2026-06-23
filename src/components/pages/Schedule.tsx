import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import ScheduleTable from '../schedule/ScheduleTable';
import { Info, HelpCircle } from 'lucide-react';

export default function Schedule() {
  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Weekly Class Timetable."
        description="Filter our 60+ weekly group studio classes. Book your spot dynamically to train in high-energy, elite coached groups."
        tagline="Active studio timetable"
      />

      {/* Roster Section with Table */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Book Your Class Spot"
            subtitle="Choose a day of the week below to explore open sessions. Track slots and register for spots in under 2 seconds."
            tagline="Class Schedules"
          />

          <div className="max-w-5xl mx-auto">
            <ScheduleTable />
          </div>
        </Container>
      </section>

      {/* Class policies FAQ */}
      <section className="py-16 bg-slate-50 dark:bg-stone-950 transition-colors duration-300 border-b border-slate-250 dark:border-stone-850">
        <Container className="max-w-4xl">
          <SectionHeading
            title="Studio Attendance Policies"
            subtitle="Got questions regarding class timings or cancellation buffers? We believe in clean rules."
            tagline="Attendance guidelines"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-xs sm:text-sm font-medium">
            <div className="flex gap-3">
              <HelpCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white capitalize mb-1.5">What is the check-in cut-off time?</h4>
                <p className="text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  We seal class gates exactly 3 minutes after the scheduled start hour to prevent skeletal injuries from bypassed visual warm-up loops. Plan on arriving 5-10 minutes early.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <HelpCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white capitalize mb-1.5">How does the waitlist work?</h4>
                <p className="text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  If a session is fully booked, enlisting places you in a queue. If an active attendee drops out up to 1 hour before start, you receive an automated notification.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <HelpCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white capitalize mb-1.5">What is the cancellation threshold?</h4>
                <p className="text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  Please cancel your slot at least 2 hours before the hour so waitlisted high performers have adequate transit notices. Late cancel defaults are monitored.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <HelpCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white capitalize mb-1.5">Are guest passes permitted for classes?</h4>
                <p className="text-slate-500 dark:text-stone-400 leading-relaxed font-semibold">
                  Yes! Pro and Elite tiers include monthly guest credits. Guests must complete our standard digital liability releases on arrival before moving onto training turf.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
