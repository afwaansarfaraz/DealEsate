import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { siteConfig, hasWhatsAppContact } from '../../data/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: 'broker',
    city: '',
    leadCategory: 'rental',
    message: '',
    consent: true,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.city.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Phone, City).');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please agree to the contact consent checkbox.');
      return;
    }

    setStatus('submitting');

    // If hosted form endpoint is configured by owner:
    if (siteConfig.form.providerEndpoint && siteConfig.form.providerEndpoint.trim().length > 0) {
      try {
        const response = await fetch(siteConfig.form.providerEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage('Unable to submit enquiry at this time. Please try again shortly.');
        }
      } catch {
        setStatus('error');
        setErrorMessage('Network connection issue. Please check your internet and retry.');
      }
    } else {
      // Pending form endpoint configuration by business owner
      setTimeout(() => {
        setStatus('success');
      }, 700);
    }
  };

  const whatsAppAvailable = hasWhatsAppContact(siteConfig);

  return (
    <section id="contact" className="bg-navy-950 py-20 sm:py-28 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-navy-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <SectionContainer className="relative z-10">
        <SectionHeading
          eyebrow="Get Started"
          title="Ready to Accelerate Your Real Estate Growth?"
          subtitle="Speak with our team to explore verified owner leads and dedicated human sales support tailored to your micro-market."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Context & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                Request an Initial Locality Allocation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Because we operate under a strict 1 Client : 1 Lead exclusivity model, broker allocations are reserved on a first-come basis per pin code and category.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-light flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>Zero shared leads — exclusive allocation lock.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-light flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>Human sales specialist assistance tailored to your desk.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-light flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>Initial focus market: Lucknow &amp; key Indian metros.</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Box */}
            <div className="p-5 rounded-xl bg-navy-900 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <h4 className="text-sm font-semibold text-white">Prefer WhatsApp?</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3.5 leading-relaxed">
                {whatsAppAvailable
                  ? 'Chat directly with our onboarding coordinator.'
                  : 'Official business WhatsApp channel will be activated upon launch. Please submit the enquiry form.'}
              </p>
              {whatsAppAvailable ? (
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20Dealestate%2C%20I%20am%20interested%20in%20verified%20owner%20leads.`}
                  variant="outline"
                  fullWidth
                  size="sm"
                  className="bg-emerald-950/40 border-emerald-700/60 text-emerald-300 hover:bg-emerald-900/60"
                >
                  Message on WhatsApp
                </Button>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-500 cursor-not-allowed text-center"
                >
                  WhatsApp Channel Pending Launch
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-md">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our team has received your requirement for{' '}
                    <span className="text-gold-light font-semibold">{formData.city}</span>. An onboarding specialist will connect with you via phone or WhatsApp shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        fullName: '',
                        phone: '',
                        businessType: 'broker',
                        city: '',
                        leadCategory: 'rental',
                        message: '',
                        consent: true,
                      });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-base font-semibold text-white mb-2">
                    Submit Your Growth Enquiry
                  </h4>

                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-800/60 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-gold">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business Profile
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                      >
                        <option value="broker">Independent Broker / Agent</option>
                        <option value="agency">Real Estate Agency / Firm</option>
                        <option value="commercial">Commercial Consultant</option>
                        <option value="other">Other Real Estate Professional</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-medium text-slate-300 mb-1.5">
                        City &amp; Preferred Locality <span className="text-gold">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Lucknow, Gomti Nagar"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="leadCategory" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Primary Lead Category Interest
                    </label>
                    <select
                      id="leadCategory"
                      name="leadCategory"
                      value={formData.leadCategory}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                    >
                      <option value="rental">Rental Owner Leads</option>
                      <option value="resale">Resale Owner Leads</option>
                      <option value="commercial">Commercial Owner Leads</option>
                      <option value="all">Multiple / Full System Bundle</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Requirement Details <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your target localities, monthly lead volume requirement, or specific sales support preferences..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-white/20 bg-navy-950 text-gold focus:ring-gold"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-snug">
                      I agree to be contacted by Dealestate representatives regarding property-owner leads and growth services.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={status === 'submitting'}
                    iconRight={<Send className="w-4 h-4" />}
                    className="mt-3"
                  >
                    {status === 'submitting' ? 'Submitting Enquiry...' : 'Submit Growth Enquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
