import { useState } from 'react';
import { pricingPlans } from '../../data/pricing';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import PricingCard from '../cards/PricingCard';
import SectionHeading from '../common/SectionHeading';
import CTASection from '../sections/CTASection';
import { Check, X, ChevronDown, ChevronUp, Clock, HelpCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function Membership() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Is there a contract and how do I cancel?',
      answer: 'No standard locks! All our plans are charged month-to-month and can be terminated at any point up to 5 business days preceding your upcoming monthly rollover date via a simple click inside your digital console.'
    },
    {
      question: 'Do you charge sign-up or initiation fees?',
      answer: 'Zero. We reject the deceptive corporate gym models that add "initiation fees", "maintenance surcharges", or random "key fob fees" on checkout. What you see is exactly what you pay.'
    },
    {
      question: 'Are class bookings included in all memberships?',
      answer: 'Basic Access members can pay on-the-spot drop-in rates of $15 per session. The Pro Athlete and Elite Performance tiers feature unlimited, unrestricted access to all sixty weekly classes'
    },
    {
      question: 'Can I freeze my membership for travels?',
      answer: 'Yes. If you travel or sustain a recovery break, you can freeze billing for up to 3 calendar months per year with zero cost. Simply designate the pause details through client support.'
    },
    {
      question: 'What is the liability waiver requirement?',
      answer: 'All new entrants must complete a digital physical safety & liability release prior to utilizing barbell floors or functional turfs. This can copy-sign easily during sign-ups.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const comparisonFeatures = [
    { name: 'Gym Floor & Amenities Access', basic: true, pro: true, elite: true },
    { name: 'Standard Workout Plan Templates', basic: true, pro: true, elite: true },
    { name: 'Secure Lockers, Showers & Towels', basic: true, pro: true, elite: true },
    { name: 'Unlimited Group Studio Classes', basic: false, pro: true, elite: true },
    { name: 'Daily Fully Interactive App Workouts', basic: false, pro: true, elite: true },
    { name: 'Body Composition Muscle Mapping', basic: false, pro: true, elite: true },
    { name: '1-on-1 Certified Personal Training', basic: false, pro: false, elite: '2x / month' },
    { name: 'Custom Nutrition Meal Plannings', basic: false, pro: false, elite: true },
    { name: '24/7 Priority Support Chat', basic: false, pro: false, elite: true },
    { name: 'Fuel Bar Discounts Satiety', basic: false, pro: '10%', elite: '20%' },
    { name: 'Monthly Guest Pass Credits', basic: false, pro: '2 Passes', elite: 'Unlimited' }
  ];

  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Uncompromised Access Tiers."
        description="Choose the membership model designed to match your dedication level. Absolutely transparent billing with zero sneaky enrollment costs."
        tagline="Straightforward plans"
      />

      {/* Pricing Cards Core */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={() => window.open('#contact', '_self')}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Grid Comparison Matrix Table */}
      <section className="py-20 bg-slate-50 dark:bg-stone-950 transition-colors duration-300">
        <Container>
          <SectionHeading
            title="Symmetrical Feature Audit"
            subtitle="Understand every metric, accessory and coach accessibility parameter of our plans laid out side-by-side."
            tagline="Transparent Compare"
          />

          <div className="hidden md:block max-w-5xl mx-auto overflow-hidden bg-white dark:bg-stone-900 border border-slate-200/80 dark:border-stone-800/85 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-stone-950 border-b border-slate-200 dark:border-stone-850 font-black">
                  <th className="p-4 lg:p-5 text-xs text-slate-500 uppercase tracking-widest">AUSTERE PARAMETERS</th>
                  <th className="p-4 lg:p-5 text-xs text-slate-900 dark:text-white uppercase tracking-widest text-center w-40">BASIC ACCESS</th>
                  <th className="p-4 lg:p-5 text-xs text-emerald-600 dark:text-emerald-450 uppercase tracking-widest text-center w-40">PRO ATHLETE</th>
                  <th className="p-4 lg:p-5 text-xs text-slate-905 dark:text-white uppercase tracking-widest text-center w-40 font-extrabold">ELITE PERF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-stone-800/60 font-semibold text-xs sm:text-sm">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 dark:hover:bg-stone-800/15">
                    <td className="p-4 lg:p-5 font-bold text-slate-800 dark:text-stone-300">{feat.name}</td>
                    
                    {/* Basic cell */}
                    <td className="p-4 lg:p-5 text-center">
                      {feat.basic === true ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : feat.basic === false ? (
                        <X size={15} className="text-slate-300 dark:text-stone-700 mx-auto" />
                      ) : (
                        <span className="text-slate-500 text-xs">{feat.basic}</span>
                      )}
                    </td>

                    {/* Pro cell */}
                    <td className="p-4 lg:p-5 text-center bg-slate-50/20 dark:bg-stone-800/10 font-bold text-emerald-600 dark:text-emerald-450">
                      {feat.pro === true ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : feat.pro === false ? (
                        <X size={15} className="text-slate-300 dark:text-stone-700 mx-auto" />
                      ) : (
                        <span className="text-xs">{feat.pro}</span>
                      )}
                    </td>

                    {/* Elite cell */}
                    <td className="p-4 lg:p-5 text-center font-bold text-slate-900 dark:text-white">
                      {feat.elite === true ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : feat.elite === false ? (
                        <X size={15} className="text-slate-300 dark:text-stone-700 mx-auto" />
                      ) : (
                        <span className="text-xs">{feat.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="md:hidden text-center text-xs font-semibold text-slate-500 dark:text-stone-550 border border-dashed border-slate-200 dark:border-stone-800 p-4 rounded-xl mt-4">
            * Complete tabular comparative grid is fully accessible in desktop display layouts.
          </p>
        </Container>
      </section>

      {/* FAQs list accordion */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Membership Answers"
            subtitle="Discover answers to standard billing queries, liability terms and pausing options."
            tagline="Frequently asked questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpened = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-4 lg:p-5 flex items-center justify-between text-left font-black text-xs sm:text-sm text-slate-900 dark:text-white cursor-pointer outline-none focus:text-emerald-500 focus:bg-slate-100/30 dark:focus:bg-stone-900/10"
                  >
                    <span>{faq.question}</span>
                    {isOpened ? (
                      <ChevronUp size={16} className="text-emerald-500 shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-slate-400 dark:text-stone-600 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-100 dark:border-stone-900/60"
                      >
                        <p className="p-4 lg:p-5 text-xs sm:text-sm text-slate-600 dark:text-stone-400 font-medium leading-relaxed bg-white dark:bg-stone-950/40">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* final banner CTA */}
      <CTASection
        title="Ready to transform your physical boundaries?"
        primaryText="Select My Plan Now"
        secondaryText="Submit Consult Query"
        onPrimaryClick={() => window.open('#contact', '_self')}
        onSecondaryClick={() => window.open('#contact', '_self')}
      />
    </div>
  );
}
