/**
 * Contact and Lead Form Integration Module
 *
 * Isolated service for handling broker inquiries. Supports FormSubmit,
 * Formspree, Web3Forms, or custom webhook endpoints via environment variables.
 *
 * Security & Reliability Rules:
 * 1. Credentials and endpoint URLs managed via environment variables.
 * 2. Uses verified production fallback (FormSubmit AJAX to codnexa@gmail.com).
 * 3. Never shows raw activation or unconfirmed messages to customers.
 * 4. Accurate loading, success, and error states with zero fake simulation.
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

const DEFAULT_FORM_ENDPOINT = 'https://formsubmit.co/ajax/codnexa@gmail.com';

/**
 * Checks whether an endpoint or access key has been configured or defaulted.
 */
export function isContactFormConfigured(): boolean {
  const endpoint =
    import.meta.env.VITE_FORM_ENDPOINT ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    DEFAULT_FORM_ENDPOINT;
  return Boolean(endpoint && endpoint.trim().length > 0);
}

/**
 * Submits the lead inquiry form to the active service endpoint.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  const configuredEndpoint =
    import.meta.env.VITE_FORM_ENDPOINT ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    DEFAULT_FORM_ENDPOINT;

  if (!configuredEndpoint || configuredEndpoint.trim().length === 0) {
    return {
      success: false,
      isConfigured: false,
      message:
        'The inquiry submission endpoint is currently awaiting configuration. Please reach out directly via phone or WhatsApp.',
    };
  }

  try {
    const isFullUrl =
      configuredEndpoint.startsWith('http://') || configuredEndpoint.startsWith('https://');
    const targetUrl = isFullUrl ? configuredEndpoint : 'https://api.web3forms.com/submit';

    const payload = isFullUrl
      ? {
          name: data.fullName,
          business_name: data.businessName,
          phone: data.phone,
          email: data.email,
          lead_requirement: data.leadRequirement,
          preferred_location: data.preferredLocation,
          additional_requirements: data.additionalRequirements || 'None specified',
          _subject: `New Dealestate Growth Inquiry: ${data.leadRequirement} - ${data.fullName}`,
          _template: 'table',
          _captcha: 'false',
        }
      : {
          access_key: configuredEndpoint,
          name: data.fullName,
          business_name: data.businessName,
          phone: data.phone,
          email: data.email,
          lead_requirement: data.leadRequirement,
          preferred_location: data.preferredLocation,
          additional_requirements: data.additionalRequirements || 'None specified',
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
      const responseData = (await response.json().catch(() => null)) as {
        message?: string;
        success?: boolean | string;
      } | null;

      // FormSubmit returns { success: "true", message: "..." } when activated and accepted.
      // If the endpoint is unactivated, FormSubmit returns { success: "false", message: "This form needs Activation..." }.
      const isActivationNotice = Boolean(
        responseData?.message && responseData.message.toLowerCase().includes('activation')
      );

      const isExplicitFailure =
        responseData &&
        (responseData.success === false ||
          responseData.success === 'false' ||
          isActivationNotice);

      if (isExplicitFailure) {
        if (isActivationNotice) {
          console.warn(
            '[Dealestate FormSubmit] The form endpoint requires email confirmation. Click the activation link sent to codnexa@gmail.com to enable direct mailbox delivery.'
          );
        }

        return {
          success: false,
          isConfigured: true,
          message:
            'Your enquiry could not be submitted at this time. Please connect with our team directly via phone or WhatsApp.',
        };
      }

      return {
        success: true,
        isConfigured: true,
        message: 'Your enquiry has been submitted successfully! Our team will get back to you soon.',
      };
    }

    const errorJson = (await response.json().catch(() => null)) as { message?: string } | null;
    return {
      success: false,
      isConfigured: true,
      message:
        errorJson?.message ||
        `Submission service responded with status ${response.status}. Please call or WhatsApp us directly.`,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Network connection error';
    return {
      success: false,
      isConfigured: true,
      message: `Unable to submit enquiry at this time (${errorMsg}). Please check your connection or connect directly via WhatsApp.`,
    };
  }
}
