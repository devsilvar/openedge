// Google Sheets API Utility
// This handles all communication with your Google Apps Script Web App

const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export interface Submission {
  id: number;
  Timestamp?: string;
  FormType?: string;
  Status?: string;
  Starred?: string;
  [key: string]: string | number | undefined;
}

interface ApiResponse {
  status: 'success' | 'error';
  data?: Submission[];
  message?: string;
}

// Submit form data to Google Sheets
export async function submitToGoogleSheets(
  formType: string,
  formData: Record<string, unknown>
): Promise<{ success: boolean; message: string }> {
  if (!API_URL) {
    console.error('Google Script URL not configured');
    return { success: false, message: 'Form submission not configured' };
  }

  try {
    const url = `${API_URL}?action=post`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        payload: JSON.stringify({
          formType,
          ...formData,
        }),
      }).toString(),
    });

    const result: ApiResponse = await response.json();

    if (result.status === 'success') {
      return { success: true, message: 'Form submitted successfully!' };
    } else {
      return { success: false, message: result.message || 'Submission failed' };
    }
  } catch (error) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { 
      success: false, 
      message: `Network error: ${errorMessage}. Please check your internet connection and try again.` 
    };
  }
}

// Fetch all submissions from Google Sheets
export async function getSubmissions(): Promise<Submission[]> {
  if (!API_URL) {
    console.error('Google Script URL not configured');
    // Return sample data for testing when API is not configured
    const { sampleSubmissions } = await import('./sampleData');
    return sampleSubmissions;
  }

  try {
    const url = `${API_URL}?action=get`;
    const response = await fetch(url);
    const result: ApiResponse = await response.json();

    if (result.status === 'success' && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching submissions:', error);
    // Return sample data on error for testing
    const { sampleSubmissions } = await import('./sampleData');
    return sampleSubmissions;
  }
}

// Delete a submission by row ID
export async function deleteSubmission(id: number): Promise<boolean> {
  if (!API_URL) {
    console.error('Google Script URL not configured');
    return false;
  }

  try {
    const url = `${API_URL}?action=delete&id=${id}`;
    const response = await fetch(url, { method: 'POST' });
    const result: ApiResponse = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
}

export interface VisitorData {
  id?: number;
  Timestamp?: string;
  PageURL?: string;
  Referrer?: string;
  DeviceType?: string;
  Browser?: string;
  SessionID?: string;
}

interface VisitorApiResponse {
  status: 'success' | 'error';
  data?: VisitorData[];
  message?: string;
}

export async function getVisitorStats(): Promise<VisitorData[]> {
  if (!API_URL) {
    console.error('Google Script URL not configured');
    return [];
  }

  try {
    const url = `${API_URL}?action=getVisitors`;
    const response = await fetch(url);
    const result: VisitorApiResponse = await response.json();
    
    if (result.status === 'success' && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    return [];
  }
}

type PipelineStatus = 'new' | 'contacted' | 'in_progress' | 'converted' | 'lost';

export async function updateSubmissionStatus(
  id: number,
  status?: PipelineStatus,
  starred?: boolean
): Promise<boolean> {
  if (!API_URL) {
    console.error('Google Script URL not configured');
    return false;
  }

  try {
    const url = `${API_URL}?action=updateStatus`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        payload: JSON.stringify({ id, status, starred }),
      }).toString(),
    });

    const result: ApiResponse = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error('Error updating status:', error);
    return false;
  }
}
