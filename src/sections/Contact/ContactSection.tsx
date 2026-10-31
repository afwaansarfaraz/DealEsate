import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SectionContainer } from '../../components/ui/SectionContainer';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { siteConfig, hasWhatsAppContact } from '../../data/siteConfig';
import { submitContactForm, isContactFormConfigured, ContactFormData } from '../../lib/contact';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    leadRequirement: 'Rental',
    preferredLocation: '',
    additionalRequirements: '',
    consent: true,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!formData.businessName.trim()) {
      errors.businessName = 'Business or Agency Name is required.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
      if (cleanPhone.length < 10) {
        errors.phone = 'Please enter a valid phone number (at least 10 digits).';
      }
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.preferredLocation.trim()) {
      errors.preferredLocation = 'Preferred city or micro-market location is required.';
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to the contact consent terms.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

    // Clear error for field on change
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      setStatusMessage('Please fix the highlighted errors before submitting.');
      return;
    }

    // Check if integration is configured
    if (!isContactFormConfigured()) {
      setStatus('unconfigured');
      setStatusMessage(
        'The form submission endpoint has not yet been connected. To activate live form submissions, configure VITE_FORM_ENDPOINT or VITE_WEB3FORMS_ACCESS_KEY in your environment configuration.'
      );
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      setStatusMessage(result.message);
    } else if (!result.isConfigured) {
      setStatus('unconfigured');
      setStatusMessage(result.message);
    } else {
      setStatus('error');
      setStatusMessage(result.message);
    }
  };

  const whatsAppAvailable = hasWhatsAppContact(siteConfig);

  return (
    <section id="contact" className="bg-navy py-20 sm:py-28 text-white relative overflow-hidden border-t border-navy-800">
      {/* Background radial highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-navy-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <SectionContainer className="relative z-10">
        <SectionHeading
          eyebrow="Get Started"
          title="Ready to Grow Your Real Estate Business?"
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
                  <span>Zero shared leads — exclusive single-broker allocation lock.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-light flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>Dedicated human sales support aligned with your operating desk.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-light flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>Primary focus markets: Lucknow &amp; selected key Indian metro corridors.</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Box */}
            <div className="p-5 rounded-2xl bg-navy-900 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <h4 className="text-sm font-semibold text-white">Prefer WhatsApp?</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3.5 leading-relaxed">
                {whatsAppAvailable
                  ? 'Connect directly with our onboarding coordinator via verified WhatsApp.'
                  : 'Official business WhatsApp channel will be activated upon launch. Please submit the inquiry form.'}
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
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {statusMessage ||
                      `Thank you, ${formData.fullName}. Our team has received your requirement for ${formData.preferredLocation}. An onboarding specialist will connect with you shortly.`}
                  </p>
                  <Button
                    onClick={() => {
                      setStatus('idle');
                      setStatusMessage('');
                      setFormData({
                        fullName: '',
                        businessName: '',
                        phone: '',
                        email: '',
                        leadRequirement: 'Rental',
                        preferredLocation: '',
                        additionalRequirements: '',
                        consent: true,
                      });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-semibold text-white">
                      Submit Your Growth Inquiry
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      * Required fields
                    </span>
                  </div>

                  {status === 'unconfigured' && (
                    <div className="p-3.5 rounded-xl bg-amber-950/70 border border-amber-600/50 text-xs text-amber-200 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5 text-amber-300">
                          Integration Pending Configuration:
                        </strong>
                        <span>{statusMessage}</span>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-800/60 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Business Name */}
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
                        aria-invalid={Boolean(formErrors.fullName)}
                        aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-1 ${
                          formErrors.fullName
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-white/15 focus-visible:border-gold focus-visible:ring-gold'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p id="fullName-error" className="text-[11px] text-red-400 mt-1">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business / Agency Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        name="businessName"
                        autoComplete="organization"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        aria-invalid={Boolean(formErrors.businessName)}
                        aria-describedby={formErrors.businessName ? 'businessName-error' : undefined}
                        placeholder="e.g. Apex Realty Consultants"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-1 ${
                          formErrors.businessName
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-white/15 focus-visible:border-gold focus-visible:ring-gold'
                        }`}
                      />
                      {formErrors.businessName && (
                        <p id="businessName-error" className="text-[11px] text-red-400 mt-1">
                          {formErrors.businessName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        aria-invalid={Boolean(formErrors.phone)}
                        aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-1 ${
                          formErrors.phone
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-white/15 focus-visible:border-gold focus-visible:ring-gold'
                        }`}
                      />
                      {formErrors.phone && (
                        <p id="phone-error" className="text-[11px] text-red-400 mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        placeholder="broker@domain.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-1 ${
                          formErrors.email
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-white/15 focus-visible:border-gold focus-visible:ring-gold'
                        }`}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-[11px] text-red-400 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Lead Requirement & Preferred Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="leadRequirement" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Lead Requirement <span className="text-gold">*</span>
                      </label>
                      <select
                        id="leadRequirement"
                        name="leadRequirement"
                        value={formData.leadRequirement}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold"
                      >
                        <option value="Rental">Rental Owner Leads</option>
                        <option value="Resale">Resale Owner Leads</option>
                        <option value="Commercial">Commercial Owner Leads</option>
                        <option value="Combined">Multiple / Combined Streams</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredLocation" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Preferred Location / Pin Codes <span className="text-gold">*</span>
                      </label>
                      <input
                        id="preferredLocation"
                        type="text"
                        name="preferredLocation"
                        autoComplete="address-level2"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        required
                        aria-invalid={Boolean(formErrors.preferredLocation)}
                        aria-describedby={formErrors.preferredLocation ? 'location-error' : undefined}
                        placeholder="e.g. Lucknow, Gomti Nagar / Indira Nagar"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-1 ${
                          formErrors.preferredLocation
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : 'border-white/15 focus-visible:border-gold focus-visible:ring-gold'
                        }`}
                      />
                      {formErrors.preferredLocation && (
                        <p id="location-error" className="text-[11px] text-red-400 mt-1">
                          {formErrors.preferredLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Additional Requirements <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows={3}
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Share target property brackets, required monthly lead volume, or preferred human sales support workflows..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950/80 border border-white/15 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
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
                      I agree to receive verified property-owner lead details and communications from Dealestate.
                    </label>
                  </div>
                  {formErrors.consent && (
                    <p className="text-[11px] text-red-400 -mt-2">
                      {formErrors.consent}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={status === 'submitting'}
                    iconRight={<Send className="w-4 h-4" />}
                    className="mt-3"
                  >
                    {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Growth Inquiry'}
                  </Button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Confidential inquiry • Strict 1 Client : 1 Lead exclusivity</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
