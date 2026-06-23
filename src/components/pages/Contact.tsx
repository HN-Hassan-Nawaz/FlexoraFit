import React, { useState } from 'react';
import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Phone, Mail, MapPin, Check, Send, PhoneCall, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'muscle',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        goal: 'muscle',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Coordinate Your Free Trial."
        description="Book your complimentary guest pass, schedule a physical movement consult, or send us general facility questions."
        tagline="Commit to the split"
      />

      {/* Main double column form/info layout */}
      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-stone-950 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-stone-850/80 text-left">
              <div className="border-b border-slate-200/50 dark:border-stone-900 pb-4 mb-6">
                <Badge variant="primary" className="mb-2">COMPLIMENTARY PASS</Badge>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
                  Enlist Your Spot Online
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success Notification State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <Check size={26} strokeWidth={3} />
                    </div>
                    <h4 className="text-lg font-black uppercase text-slate-900 dark:text-white tracking-widest mt-2">
                      Trial Registrations Logged
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-stone-400 font-semibold max-w-sm leading-relaxed">
                      Thank you! Our head coordinator is assessing your biomechanical fitness splits. A complimentary trial code has been mapped to your email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 py-2.5 px-5 rounded-lg border border-slate-350 dark:border-stone-800 text-xs font-bold text-slate-700 dark:text-stone-400 hover:bg-slate-100 dark:hover:bg-stone-900 cursor-pointer outline-none"
                    >
                      Resubmit another query
                    </button>
                  </motion.div>
                ) : (
                  /* Form Fields state */
                  <motion.form
                    key="fields"
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Your Full Name</label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Johnathan Doe"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Email Address</label>
                        <input
                          id="email-input"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="j.doe@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone-input" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Phone Number</label>
                        <input
                          id="phone-input"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="goal-select" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5">Core Fitness Objective</label>
                      <select
                        id="goal-select"
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="strength">Barbell Strength & Lifting Mechanics</option>
                        <option value="weight-loss">Weight Loss & Fat Melt Interval</option>
                        <option value="muscle">Target Volume muscle Hypertrophy</option>
                        <option value="cardio">VO2 Max Cardio Endurance</option>
                        <option value="beginner">Beginner Form Safe Kickstart</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message-textarea" className="block text-xs font-black uppercase text-slate-650 dark:text-stone-400 mb-1.5 font-sans">Skeletal Limits or Remarks (Optional)</label>
                      <textarea
                        id="message-textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full py-3 px-4 rounded-lg bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                        placeholder="Detail any previous lumbar breaks, shoulder impingements, or desired schedule targets..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer outline-none select-none"
                      >
                        {isSubmitting ? (
                          <span>Filing Query Logs...</span>
                        ) : (
                          <>
                            <Send size={13} />
                            <span>Submit My Registration Request</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Contact Details Cards & Mock map */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full text-left">
              
              {/* Direct WhatsApp trigger */}
              <div className="p-6 rounded-2xl bg-teal-950 text-white border border-teal-900 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare size={22} className="stroke-[2.5]" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">Instantly Book on WhatsApp</h4>
                  <p className="text-[11px] text-teal-200 font-bold mb-0 leading-tight">Skip forms. Ping our desk team directly at +1 (800) 555-FLEX.</p>
                </div>
              </div>

              {/* info directory cards */}
              <div className="p-6 bg-slate-50/50 dark:bg-stone-950/20 border border-slate-200/80 dark:border-stone-850/80 rounded-2xl flex flex-col gap-5 text-xs sm:text-sm font-semibold">
                <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-widest border-b border-slate-100 dark:border-stone-900 pb-2">
                  Direct Directory Channels
                </h4>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-slate-805 dark:text-white leading-none mb-1">Our Vault Headquarters</h5>
                    <p className="text-xs text-slate-500 dark:text-stone-400 font-bold">
                      804 Vanguard Boulevard, Suite 100, West Hollywood, CA 90069
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 dark:border-stone-900 pt-3">
                  <Mail size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-slate-805 dark:text-white leading-none mb-1">E-Mail Performance Support</h5>
                    <p className="text-xs text-slate-500 dark:text-stone-400 font-bold">
                      performance@flexorafit.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 dark:border-stone-900 pt-3">
                  <PhoneCall size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-extrabold text-slate-805 dark:text-white leading-none mb-1">Interactive Voice Hotline</h5>
                    <p className="text-xs text-slate-505 dark:text-stone-450 font-bold">
                      +1 (800) 555-FLEX (9 AM - 6 PM PST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Mockup graphic */}
              <div className="relative rounded-2xl overflow-hidden h-52 border border-slate-200 dark:border-stone-850 shadow-sm flex flex-col items-center justify-center p-6 text-center select-none bg-stone-100 dark:bg-stone-950">
                {/* Simulated Grid Background */}
                <div className="absolute inset-x-0 inset-y-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10">
                  <MapPin size={32} className="text-emerald-500 mx-auto mb-2 animate-bounce" />
                  <span className="font-sans font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white">GOOGLE MAP PLACEHOLDER</span>
                  <p className="text-[10px] text-slate-400 dark:text-stone-500 font-bold max-w-xs mt-1.5 mx-auto leading-relaxed">
                    Visual vector maps is loaded. Located opposite West Hollywood Park with secure subterranean public parking.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
