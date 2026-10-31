/**
 * Contact and Lead Form Integration Module
 *
 * Isolated service for handling broker inquiries. Supports Web3Forms,
 * Formspree, or custom webhook endpoints via environment variables.
 *
 * Non-negotiable rules:
 * 1. Zero hardcoded secrets or API tokens.
 * 2. No simulated/fake submission success when unconfigured.
 * 3. Returns actionable status indicating whether the integration is configured.
 */

export interface ContactFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  leadRequirement: 'Rental' | 'Resale' | 'Commercial' | string;
  preferredLocation: string;
  additionalRequirements?: string;
  consent: boolean;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  isConfigured: boolean;
  details?: Record<string, unknown>;
}

/**
 * Checks whether an endpoint or access key has been configured in the environment.
 */
export function isContactFormConfigured(): boolean {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  return Boolean(endpoint && endpoint.trim().length > 0);
}

/**
 * Submits the lead inquiry form to the configured service.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Rule: Do not pretend that submission succeeded without a working integration
  if (!endpoint || endpoint.trim().length === 0) {
    return {
      success: false,
      isConfigured: false,
      message:
        'The inquiry submission endpoint is currently awaiting configuration. Please set VITE_FORM_ENDPOINT or VITE_WEB3FORMS_ACCESS_KEY in your environment to enable automated submissions.',
    };
  }

  try {
    const isFullUrl = endpoint.startsWith('http://') || endpoint.startsWith('https://');
    const targetUrl = isFullUrl ? endpoint : 'https://api.web3forms.com/submit';

    const payload = isFullUrl
      ? {
          name: data.fullName,
          business_name: data.businessName,
          phone: data.phone,
          email: data.email,
          lead_requirement: data.leadRequirement,
          preferred_location: data.preferredLocation,
          additional_requirements: data.additionalRequirements || '',
        }
      : {
          access_key: endpoint,
          name: data.fullName,
          business_name: data.businessName,
          phone: data.phone,
          email: data.email,
          lead_requirement: data.leadRequirement,
          preferred_location: data.preferredLocation,
          additional_requirements: data.additionalRequirements || '',
          subject: `New Dealestate Lead Inquiry: ${data.leadRequirement} - ${data.fullName}`,
          from_name: 'Dealestate Website Lead Form',
        };

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return {
        success: true,
        isConfigured: true,
        message:
          'Thank you. Your inquiry has been received. Our team will review your requirements and reach out to discuss verified owner lead allocation.',
      };
    }

    const errorJson = (await response.json().catch(() => null)) as { message?: string } | null;
    return {
      success: false,
      isConfigured: true,
      message:
        errorJson?.message ||
        `Submission service responded with status ${response.status}. Please try again shortly.`,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Network connection error';
    return {
      success: false,
      isConfigured: true,
      message: `Unable to submit inquiry at this time (${errorMsg}). Please check your connection and retry.`,
    };
  }
}
