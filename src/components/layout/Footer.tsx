import Container from '../common/Container';
import { Link } from 'react-router-dom';
import { Dumbbell, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  id?: string;
}

export default function Footer({ onNavigate, id }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Gym Story & Values', hash: '/about' },
    { label: 'Workout Programs', hash: '/programs' },
    { label: 'Timetable Schedule', hash: '/schedule' },
    { label: 'Membership Plans', hash: '/membership' },
    { label: 'Advice Articles', hash: '/blog' },
  ];

  const programLinks = [
    { label: 'Strength foundations', hash: '/programs' },
    { label: 'Metabolic Weight Loss', hash: '/programs' },
    { label: 'Hypertrophy Mass Builder', hash: '/programs' },
    { label: 'HIIT Burn Catalyst', hash: '/programs' },
  ];

  return (
    <footer
      id={id}
      className="bg-stone-100 dark:bg-stone-950 border-t border-slate-200 dark:border-stone-900 transition-colors duration-300 pt-16 pb-8"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
          {/* Brand Col */}
          <div className="flex flex-col gap-5">
            <Link
              to="/home"
              onClick={() => handleLinkClick('/home')}
              className="flex items-center gap-2 text-slate-900 dark:text-white select-none cursor-pointer"
            >
              <div className="flex items-center justify-center w-56 h-16 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="FlexoraFit Logo"
                  className="w-full h-full object-contain"
                />
              </div>

            </Link>
            <p className="text-xs lg:text-sm text-slate-600 dark:text-stone-400 font-medium leading-relaxed">
              Train Daily. Transform Stronger. FlexoraFit is a premium physical fitness platform engineered around science-backed daily workouts, expert coaches, and custom macro nutrition models.
            </p>
            {/* Socials */}
            <div className="flex gap-3 text-slate-500 dark:text-stone-400 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 border border-slate-200 dark:border-stone-850 transition-colors duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 border border-slate-200 dark:border-stone-850 transition-colors duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 border border-slate-200 dark:border-stone-850 transition-colors duration-200 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 border border-slate-200 dark:border-stone-850 transition-colors duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Learn More
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm font-semibold">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.hash}
                    onClick={() => handleLinkClick(link.hash)}
                    className="text-slate-650 hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-450 transition-colors duration-200 outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs preview Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm font-semibold">
              {programLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.hash}
                    onClick={() => handleLinkClick(link.hash)}
                    className="text-slate-650 hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-450 transition-colors duration-200 outline-none capitalize"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">
              Contact & Hours
            </h4>
            <ul className="space-y-3.5 text-xs lg:text-sm font-semibold text-slate-650 dark:text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>804 Vanguard Boulevard, Suite 100, West Hollywood, CA 90069</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <span>+1 (800) 555-FLEX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <span>performance@flexorafit.com</span>
              </li>
              <li className="border-t border-slate-200 dark:border-stone-900 pt-3 flex flex-col gap-1 text-[11px] font-bold text-slate-500 dark:text-stone-500">
                <span>Mon - Fri: 5:00 AM - 10:00 PM</span>
                <span>Sat - Sun: 7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Copyright footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-200 dark:border-stone-900 pt-8 mt-8 text-xs font-bold text-slate-500 dark:text-stone-500">
          <div className="flex items-center gap-1.5">
            <Sparkles size={12} className="text-emerald-500" />
            <span>&copy; {currentYear} FlexoraFit. All performance rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" onClick={() => handleLinkClick('/privacy-policy')} className="hover:text-emerald-500 font-medium cursor-pointer">Privacy Policy</Link>
            <Link to="/terms-of-service" onClick={() => handleLinkClick('/terms-of-service')} className="hover:text-emerald-500 font-medium cursor-pointer">Terms of Service</Link>
            <Link to="/liability-waiver" onClick={() => handleLinkClick('/liability-waiver')} className="hover:text-emerald-500 font-medium cursor-pointer">Liability Waiver</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
