import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Shield, Eye, Database, Lock, UserCheck, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Your Privacy Matters"
        description="We are committed to protecting your personal information and maintaining transparency about how we use your data."
        tagline="Privacy Policy"
      />

      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="max-w-4xl">
          <Badge variant="primary" className="mb-4">
            <Shield size={11} className="mr-1 inline-block" />
            <span>LAST UPDATED: JANUARY 2024</span>
          </Badge>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Introduction
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium">
                FlexoraFit ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our gym, use our mobile applications, or engage with our services. Please read this policy carefully.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Database size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Personal Identification Information</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Full name, date of birth, and contact details (email, phone, address)</li>
                    <li>Emergency contact information</li>
                    <li>Photographs for membership identification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Health & Fitness Information</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Health history, medical conditions, and physical limitations</li>
                    <li>Fitness goals, workout progress, and performance metrics</li>
                    <li>Body composition measurements and weight tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Financial Information</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Payment method details (processed securely through third-party providers)</li>
                    <li>Billing address and transaction history</li>
                    <li>Membership tier and payment schedule</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Eye size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  How We Use Your Information
                </h2>
              </div>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>To provide personalized fitness programs and coaching services</li>
                <li>To process membership registrations and payments</li>
                <li>To communicate about schedule changes, promotions, and facility updates</li>
                <li>To track workout progress and generate performance reports</li>
                <li>To ensure facility safety and access control</li>
                <li>To comply with legal obligations and industry regulations</li>
                <li>To improve our services and develop new offerings</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Lock size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Data Security Measures
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>Secure socket layer (SSL) encryption for data transmission</li>
                <li>Restricted access to personal data on a need-to-know basis</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure payment processing through PCI-compliant providers</li>
                <li>Physical security controls at our facilities</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <UserCheck size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Information Sharing & Disclosure
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>With service providers who perform services on our behalf (payment processors, IT services)</li>
                <li>When required by law or to comply with legal processes</li>
                <li>To protect our rights, property, or safety, and that of our members</li>
                <li>With your explicit consent for specific purposes</li>
                <li>In connection with a business transfer or merger (with notice)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Globe size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Your Privacy Rights
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>Access to your personal data and information about its use</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability to transfer your information to another service</li>
                <li>Object to or restrict processing of your personal data</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Contact Us
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="text-sm text-slate-700 dark:text-stone-300 font-medium space-y-1">
                <p><strong>Email:</strong> privacy@flexorafit.com</p>
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
