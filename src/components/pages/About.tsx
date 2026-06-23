import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Target, Heart, Eye, Milestone, Clock, Smile, Sparkles, Building, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      title: 'Evidence-Based Training',
      description: 'We ignore fads. Every program, calorie guide, and mobility flow we suggest is backed by proven sports science and kinesiology theory.',
      icon: <Target size={20} className="text-emerald-500" />
    },
    {
      title: 'Transparent Culture',
      description: 'No hidden cancel fees, no high-pressure sales pitches. We treat our active community as intelligent, high-achieving adults.',
      icon: <Milestone size={20} className="text-emerald-500" />
    },
    {
      title: 'Comprehensive Well-Being',
      description: 'True athletic performance balances high intensity work load with proper myofascial release, nutrient density, and nervous system recovery.',
      icon: <Heart size={20} className="text-emerald-500" />
    },
    {
      title: 'Inclusivity in Practice',
      description: 'Beginners of any scale receive identical respectful encouragement and access to mechanics instruction as our competitive lifters.',
      icon: <Smile size={20} className="text-emerald-500" />
    }
  ];

  const facilities = [
    {
      name: 'Functional Strength Vault',
      desc: 'Equipped with custom Rogue Fitness squat decks, competition barbell platforms, Eleiko plates, and full dumbbell configurations up to 130 lbs.',
      img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Conditioning & Cardio Arena',
      desc: 'Our high-performance deck holding Woodway treadmills, Assault bikes, Concept2 rowers, SkiErgs, and a custom 20m synthetic prowler turf track.',
      img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Myofascial Recovery Base',
      desc: 'Dedicated soft-tissue zone featuring localized foam roll arrays, deep infrared saunas, cryotherapy cold contrast tubs, and custom yoga stretch guides.',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="More Than Just A Gym."
        description="Discover the architectural legacy, science-backed fitness values, and community of high achievers driving FlexoraFit."
        tagline="Our Legacy"
      />

      {/* Origin Story Section */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Gallery image overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
                alt="Gym Interior Overview"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            
            {/* Overlay trust box */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 bg-stone-950 text-white rounded-xl border border-stone-800 shadow-xl max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black uppercase text-emerald-400">Est. 2018</h4>
                <p className="text-[10px] text-stone-400 font-bold mb-0 leading-tight">Founded on physical therapy & performance science principles</p>
              </div>
            </div>
          </div>

          {/* Historical text */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start">
            <Badge variant="primary" className="mb-4">
              <span>HOW WE BEGAN</span>
            </Badge>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-5">
              Redefining Active Consistency
            </h2>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-semibold mb-4">
              FlexoraFit was established in 2018 with a simple, potent conviction: that traditional warehouse gyms fail their members by selling cheap access keys but offering zero active daily guidance. We saw countless individuals drift without progress, leading to fatigue and eventual dropouts.
            </p>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-semibold mb-6">
              Our founders—a sports physical therapist and a competitive lifting coach—teamed up to build an experience prioritizing scientific programming. By wrapping dynamic daily workouts, credentialed coaches, and balanced macros in a premium modern design, we create a habit-forming platform where you build measurable physical power.
            </p>
            
            <div className="border-l-4 border-emerald-500 pl-4 py-1 italic text-slate-800 dark:text-stone-300 font-medium text-xs sm:text-sm bg-slate-50 dark:bg-stone-950 w-full rounded-r-lg">
              "FlexoraFit isn't built to sell fake dreams. We provide realistic, progressive loading systems that reward your daily effort of consistency."
              <span className="block mt-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 not-italic uppercase tracking-widest">— MARCUS VANCE, CO-FOUNDER</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section (Double Columns) */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box Mission */}
            <div className="flex gap-4 p-8 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl shadow-sm hover:border-emerald-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-inner">
                <Target size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Our Mission</h3>
                <p className="text-xs lg:text-sm text-slate-500 dark:text-stone-400 leading-relaxed font-medium">
                  To supply every active individual with science-guided, highly efficient compound routines, elite tier coaches, and practical nutrition models that make physical strength and stamina an integrated, automatic, and rewarding daily life habit.
                </p>
              </div>
            </div>

            {/* Box Vision */}
            <div className="flex gap-4 p-8 bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl shadow-sm hover:border-emerald-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-inner">
                <Eye size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Our Vision</h3>
                <p className="text-xs lg:text-sm text-slate-500 dark:text-stone-400 leading-relaxed font-medium">
                  To set a global industry benchmark for physical fitness spaces—moving far away from unguided, high-turnover membership structures toward a high-performance model that values physical longevity, absolute transparency, and measurable client results.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="The Principles We Code By"
            subtitle="We maintain an uncompromising dedication to high performance, clear metrics, and absolute transparency."
            tagline="Our Core Values"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 bg-slate-50/50 dark:bg-stone-950/30 border border-slate-200/80 dark:border-stone-850/80 rounded-xl flex flex-col items-start hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-sm lg:text-base text-slate-950 dark:text-white mb-2 uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-stone-400 leading-relaxed font-medium">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facility / Infrastructure showcase */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Pristine Training Amenities"
            subtitle="Explore our meticulously kept spaces, curated with premium industrial gear for safety, efficiency and functional longevity."
            tagline="Our Vault Facilities"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 text-left"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={fac.img}
                    alt={fac.name}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-base text-slate-950 dark:text-white uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Building size={16} className="text-emerald-500" />
                    <span>{fac.name}</span>
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-stone-400 leading-relaxed font-medium">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Opening hours & trust factors */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300 border-b border-slate-250 dark:border-stone-850">
        <Container className="max-w-4xl text-center">
          <Badge variant="primary" className="mb-4">
            <Clock size={11} className="mr-1 inline-block" />
            <span>OPERATING TIME RANGE</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white uppercase tracking-tight mb-4">
            No Shortcuts. We open daily.
          </h2>
          <p className="text-sm text-slate-500 dark:text-stone-400 font-medium mb-10 max-w-2xl mx-auto">
            Train at your convenience. We keep extensive hours, allowing both early-morning conditioning and late-night hypertrophy sessions after corporate workloads.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-dashed border-slate-200 dark:border-stone-800 pt-8">
            <div className="p-4 bg-slate-50 dark:bg-stone-950 rounded-xl border border-slate-200/50 dark:border-stone-900 flex justify-between items-center">
              <div>
                <h4 className="text-xs font-black uppercase text-slate-800 dark:text-stone-400">Regular Work Days</h4>
                <p className="text-xs font-bold text-slate-500 mt-1">Monday - Friday</p>
              </div>
              <span className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">5:00 AM - 10:00 PM</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-stone-950 rounded-xl border border-slate-200/50 dark:border-stone-900 flex justify-between items-center">
              <div>
                <h4 className="text-xs font-black uppercase text-slate-800 dark:text-stone-400">Weekend Breaks</h4>
                <p className="text-xs font-bold text-slate-500 mt-1">Saturday - Sunday</p>
              </div>
              <span className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
