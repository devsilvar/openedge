const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

function generateSessionId(): string {
  const stored = sessionStorage.getItem('visitor_session_id');
  if (stored) return stored;
  
  const newId = 'v_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
  sessionStorage.setItem('visitor_session_id', newId);
  return newId;
}

function getDeviceType(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipod|blackberry|windows phone/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
}

function getBrowser(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari')) return 'Safari';
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('edge')) return 'Edge';
  if (ua.includes('opera')) return 'Opera';
  return 'Other';
}

function getReferrer(): string {
  const ref = document.referrer;
  if (!ref) return 'Direct';
  
  try {
    const url = new URL(ref);
    if (url.hostname.includes('google')) return 'Google';
    if (url.hostname.includes('bing')) return 'Bing';
    if (url.hostname.includes('yahoo')) return 'Yahoo';
    if (url.hostname.includes('facebook') || url.hostname.includes('instagram')) return 'Social';
    if (url.hostname.includes('linkedin')) return 'LinkedIn';
    if (url.hostname.includes('twitter') || url.hostname.includes('x.com')) return 'Twitter';
    return url.hostname;
  } catch {
    return 'Direct';
  }
}

export interface VisitData {
  pageURL: string;
  referrer: string;
  deviceType: string;
  browser: string;
  sessionID: string;
  timestamp: string;
}

export async function logPageVisit(pageUrl: string): Promise<void> {
  if (!API_URL) {
    console.log('[Visitor Tracker] API not configured, skipping log');
    return;
  }

  const visitData: VisitData = {
    pageURL: pageUrl,
    referrer: getReferrer(),
    deviceType: getDeviceType(),
    browser: getBrowser(),
    sessionID: generateSessionId(),
    timestamp: new Date().toISOString(),
  };

  try {
    const url = `${API_URL}?action=logVisitor`;
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        payload: JSON.stringify(visitData),
      }).toString(),
    });
  } catch (error) {
    console.error('[Visitor Tracker] Failed to log visit:', error);
  }
}

export function getSessionId(): string {
  return generateSessionId();
}
