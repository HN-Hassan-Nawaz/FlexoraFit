import { trainers } from '../../data/trainers';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import TrainerCard from '../cards/TrainerCard';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Award, UserCheck, ShieldCheck, Dumbbell } from 'lucide-react';

interface TrainersProps {
  onNavigate: (hash: string) => void;
  id?: string;
}

export default function Trainers({ onNavigate, id }: TrainersProps) {
  return (
    <div id={id} className="flex flex-col text-left">
      <PageHero
        title="Our Elite Coaching Core."
        description="Connect with internationally accredited trainers, national-level weightlifters, and sports biomechanics experts."
        tagline="Uncompromising Standards"
      />

      {/* Trust credentials row */}
      <section className="py-10 bg-slate-50 dark:bg-stone-950 border-b border-slate-200/60 dark:border-stone-900 transition-colors duration-300 text-xs sm:text-sm font-semibold">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-700 dark:text-stone-300">
          <div className="flex items-center gap-3 justify-center">
            <UserCheck size={18} className="text-emerald-500 shrink-0" />
            <span>100% Certified (NASM, ISSA, CSCS)</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Award size={18} className="text-emerald-500 shrink-0" />
            <span>Average 8+ Years Coaching Experience</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
            <span>First Aid & CPR Certified Structures</span>
          </div>
        </Container>
      </section>

      {/* Trainers grid list */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Choose Your Athletic Partner"
            subtitle="Explore our trainers' credentials, specialties, and active schedule ranges. Find the perfect coach to refine your lifting mechanics."
            tagline="Coaching Excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((tr) => (
              <TrainerCard
                key={tr.id}
                trainer={tr}
                onBook={() => onNavigate('#contact')}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Booking banner section */}
      <section className="py-16 bg-slate-50 dark:bg-stone-950 transition-colors duration-300 border-b border-slate-250 dark:border-stone-850">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-4">
            <Dumbbell size={22} className="stroke-[2.5]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white uppercase tracking-tight mb-4">
            Unsure which trainer fits your goal?
          </h2>
          <p className="text-sm text-slate-500 dark:text-stone-400 font-medium mb-8 max-w-xl mx-auto">
            Book a complimentary, obligation-free 20-minute movement consult. We assess your joint mechanics, current splits, and historical sports limits to coordinate the perfect alignment.
          </p>
          <button
            onClick={() => onNavigate('#contact')}
            className="py-3.5 px-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-750 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-emerald-500/10 cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Arrange Free Coach Consult
          </button>
        </Container>
      </section>
    </div>
  );
}
