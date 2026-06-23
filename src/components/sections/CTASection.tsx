import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { Sparkles, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  id?: string;
}

export default function CTASection({
  title = "Your strongest version starts today.",
  description = "Join FlexoraFit and commit to daily workouts, elite guidance, and a community of active high achievers.",
  primaryText = "Join FlexoraFit",
  secondaryText = "Book Free Trial",
  onPrimaryClick,
  onSecondaryClick,
  id
}: CTASectionProps) {
  return (
    <section id={id} className="relative py-20 overflow-hidden bg-neutral-950 text-white select-none">
      {/* Visual Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles size={11} className="fill-emerald-400 text-emerald-400 animate-pulse" />
            <span>Limited Time Intake</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            {title}
          </h2>

          <p className="text-base md:text-lg text-stone-400 font-medium mb-10 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <PrimaryButton
              onClick={onPrimaryClick}
              className="w-full sm:w-auto px-8"
              icon={<Sparkles size={14} />}
            >
              {primaryText}
            </PrimaryButton>
            
            <SecondaryButton
              onClick={onSecondaryClick}
              className="w-full sm:w-auto px-8 border-stone-800 text-white hover:bg-stone-900"
              icon={<Calendar size={14} className="text-emerald-500" />}
            >
              {secondaryText}
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
