// Google Analytics 4 Setup
// This file initializes GA4 tracking for your website

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics
export function initAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA Measurement ID not configured');
    return;
  }

  // Add GA4 script to head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

// Track page views
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
}

// Track custom events (like form submissions)
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
}

// Track form submissions
export function trackFormSubmission(formType: string) {
  trackEvent('form_submission', {
    form_type: formType,
    timestamp: new Date().toISOString(),
  });
}
