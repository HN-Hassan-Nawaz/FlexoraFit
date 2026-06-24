import Container from '../common/Container';
import PageHero from '../common/PageHero';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { FileText, AlertCircle, CheckCircle, Clock, CreditCard, Users } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="flex flex-col text-left">
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using FlexoraFit facilities and services. Your use constitutes acceptance of these terms."
        tagline="Terms & Conditions"
      />

      <section className="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
        <Container className="max-w-4xl">
          <Badge variant="primary" className="mb-4">
            <FileText size={11} className="mr-1 inline-block" />
            <span>LAST UPDATED: JANUARY 2024</span>
          </Badge>

          <div className="space-y-8">
            {/* Agreement to Terms */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Agreement to Terms
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium">
                By accessing or using FlexoraFit facilities, mobile applications, or any services provided by FlexoraFit ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </div>

            {/* Membership Terms */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Users size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Membership Terms
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Membership Eligibility</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Must be at least 18 years of age, or 16 with parental/guardian consent</li>
                    <li>Must provide valid government-issued identification</li>
                    <li>Must complete health questionnaire and liability waiver</li>
                    <li>Must be in good physical condition or have medical clearance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Membership Types</h3>
                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium">
                    We offer various membership tiers including monthly, annual, and drop-in options. Each tier has specific access rights, pricing, and cancellation policies as outlined in your membership agreement.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Membership Transfer</h3>
                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium">
                    Memberships are non-transferable unless expressly authorized by FlexoraFit management. Transfer requests may incur administrative fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <CreditCard size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Payment & Billing
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Payment Schedule</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Monthly memberships are billed on the same date each month</li>
                    <li>Annual memberships require full payment upfront or installment plan</li>
                    <li>Auto-renewal applies unless cancelled in writing 30 days prior</li>
                    <li>Failed payments may result in membership suspension</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Refund Policy</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Pro-rated refunds available for medical emergencies with documentation</li>
                    <li>Relocation refunds require proof of address change &gt;50 miles</li>
                    <li>No refunds for unused portions of monthly memberships</li>
                    <li>Processing fees may apply to all refunds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Price Changes</h3>
                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium">
                    FlexoraFit reserves the right to modify membership fees with 30 days written notice. Existing members will be grandfathered at current rates for the remainder of their commitment period.
                  </p>
                </div>
              </div>
            </div>

            {/* Facility Rules */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Facility Rules & Conduct
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">General Conduct</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Respect staff, trainers, and fellow members at all times</li>
                    <li>Use equipment properly and return weights to designated areas</li>
                    <li>Wipe down equipment after use with provided sanitization supplies</li>
                    <li>Appropriate athletic attire and closed-toe athletic footwear required</li>
                    <li>No food in workout areas; water in sealed containers permitted</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Prohibited Items & Behavior</h3>
                  <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-1">
                    <li>Illegal substances, alcohol, or tobacco products</li>
                    <li>Weapons of any kind</li>
                    <li>Harassment, discrimination, or threatening behavior</li>
                    <li>Unauthorized personal training or solicitation</li>
                    <li>Photography/videography of other members without consent</li>
                    <li>Use of equipment while under the influence of drugs or alcohol</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="p-6 bg-slate-50 dark:bg-stone-950 border border-slate-200 dark:border-stone-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Cancellation & Termination
                </h2>
              </div>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>30-day written notice required for membership cancellation</li>
                <li>Early termination fees may apply for annual commitments</li>
                <li>FlexoraFit may terminate membership for rule violations or non-payment</li>
                <li>Refunds processed within 30 days of cancellation approval</li>
                <li>Access privileges cease immediately upon termination</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
                  <AlertCircle size={18} />
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                To the maximum extent permitted by law, FlexoraFit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium list-disc list-inside space-y-2">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access to or use of our servers and/or any personal information</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                Contact Us
              </h2>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed font-medium mb-4">
                For questions about these Terms of Service, please contact us:
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
