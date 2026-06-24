import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { AlertTriangle, Heart, Activity, FileCheck, User, ClipboardCheck } from 'lucide-react';

export default function LiabilityWaiver() {
  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Liability Waiver & Release"
        description="Please read and understand this waiver carefully before participating in any fitness activities at FlexoraFit."
        tagline="Assumption of Risk"
      />

      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="max-w-4xl">
          <Badge variant="primary" className="mb-4">
            <AlertTriangle size={11} className="mr-1 inline-block" />
            <span>LEGAL DOCUMENT - READ CAREFULLY</span>
          </Badge>

          <div className="space-y-8">
            {/* Warning Notice */}
            <div className="p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Important Notice
                  </h2>
                  <p className="text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-medium">
                    This is a legally binding agreement. By signing this waiver, you assume all risks associated with physical exercise and fitness activities. If you do not understand any portion of this document, please consult with an attorney before signing.
                  </p>
                </div>
              </div>
            </div>

            {/* Assumption of Risk */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Activity size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Assumption of Risk
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                I acknowledge that participation in fitness activities, exercise programs, and use of exercise equipment involves inherent risks, including but not limited to:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li><strong>Physical Injury:</strong> Musculoskeletal injuries, sprains, strains, fractures, concussions, and other bodily harm</li>
                <li><strong>Cardiovascular Events:</strong> Heart attacks, strokes, elevated blood pressure, and other cardiovascular complications</li>
                <li><strong>Accidents:</strong> Slips, falls, equipment malfunction, and collisions with other persons or objects</li>
                <li><strong>Illness:</strong> Exposure to bacteria, viruses, or other pathogens in shared facilities</li>
                <li><strong>Exhaustion:</strong> Dehydration, heat exhaustion, fainting, and overexertion</li>
                <li><strong>Pre-existing Conditions:</strong> Aggravation of pre-existing medical conditions or injuries</li>
              </ul>
            </div>

            {/* Health Disclosure */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Heart size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Health Disclosure & Certification
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                I certify that:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>I am in good physical condition and have no medical conditions that would prevent my participation in fitness activities</li>
                <li>I have not been advised by a physician to avoid exercise or physical activity</li>
                <li>I am not currently experiencing any pain, injury, or illness that could be aggravated by exercise</li>
                <li>I will inform FlexoraFit staff immediately of any changes in my health status</li>
                <li>I will consult with a physician before beginning any exercise program if I have any concerns</li>
              </ul>
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                  <strong>Special Note:</strong> If you have a history of heart disease, high blood pressure, diabetes, asthma, or any other chronic condition, please obtain medical clearance before participating.
                </p>
              </div>
            </div>

            {/* Release of Liability */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <FileCheck size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Release of Liability & Waiver
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                In consideration of being permitted to use FlexoraFit facilities and participate in fitness activities, I hereby:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li><strong>Release, waive, discharge,</strong> and covenant not to sue FlexoraFit, its owners, officers, employees, trainers, agents, and affiliates from any and all liability, claims, demands, actions, and causes of action whatsoever arising out of or related to any loss, damage, or injury, including death, that may be sustained by me</li>
                <li><strong>Assume full responsibility</strong> for any risks, injuries, or damages known or unknown which I might incur as a result of participating in any activities or using any equipment at FlexoraFit</li>
                <li><strong>Waive all claims</strong> against FlexoraFit for any injury, death, or property damage that may result from my participation in fitness activities</li>
                <li><strong>Indemnify and hold harmless</strong> FlexoraFit from any and all claims, demands, actions, or causes of action arising out of my conduct or participation</li>
              </ul>
            </div>

            {/* Emergency Medical Treatment */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <User size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Emergency Medical Treatment Authorization
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                In the event of an emergency or injury, I authorize FlexoraFit staff to:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>Administer basic first aid and emergency care</li>
                <li>Contact emergency medical services (911) on my behalf</li>
                <li>Arrange for transportation to a medical facility if deemed necessary</li>
                <li>Release my medical information to emergency responders</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mt-4">
                I understand that FlexoraFit staff are not medical professionals and that any emergency treatment provided is based on their best judgment in the circumstances.
              </p>
            </div>

            {/* Photo & Video Release */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <ClipboardCheck size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Photo & Video Release
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                I grant FlexoraFit the irrevocable right and permission to use photographs, videos, or images of me taken at the facility or during events for:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>Marketing and promotional materials</li>
                <li>Social media content and website use</li>
                <li>Advertising and publicity purposes</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mt-4">
                I understand that I will not receive compensation for such use and waive any right to inspect or approve the finished product.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Acknowledgment of Understanding
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                I have read this Liability Waiver and Release of Liability agreement, fully understand its terms, and understand that I have given up substantial rights by signing it. I sign it voluntarily and without inducement.
              </p>
              <div className="text-sm text-slate-700 dark:text-stone-300 font-medium space-y-1">
                <p><strong>By using FlexoraFit facilities, I acknowledge that I have read, understood, and agree to be bound by this waiver.</strong></p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Questions?
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                If you have questions about this liability waiver, please contact us:
              </p>
              <div className="text-sm text-slate-700 dark:text-stone-300 font-medium space-y-1">
                <p><strong>Email:</strong> legal@flexorafit.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Fitness Boulevard, Suite 100, Metro City, ST 12345</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
