import type { ClientInquiry } from '../types';

const INQUIRIES_KEY = 'mzai_inquiries_v1';
const OPERATOR_LOGS_KEY = 'mzai_operator_logs_v1';

export const storage = {
  getInquiries(): ClientInquiry[] {
    try {
      const data = localStorage.getItem(INQUIRIES_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    // Return sample starter inquiry to show functionality
    return [
      {
        id: 'INQ-7821',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        fullName: 'Alexander Vance',
        company: 'Vance Logistics & Robotics Corp',
        email: 'a.vance@vancelogistics.com',
        phone: '+1 (555) 389-9921',
        projectType: 'Security & Surveillance / Sentinel AI',
        budgetRange: '$50,000 - $100,000',
        expectedTimeline: '3 - 6 Months',
        requirements: 'Looking to integrate MZ Sentinel AI across 4 automated fulfillment distribution centers with computer vision line-crossing and thermal hazard monitoring.',
        ndaRequired: true,
        estimatedCostMin: 65000,
        estimatedCostMax: 90000,
        status: 'In Review'
      },
      {
        id: 'INQ-7820',
        createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
        fullName: 'Elena Rostova',
        company: 'Apex Financial Intelligence',
        email: 'e.rostova@apexfin.io',
        phone: '+44 20 7946 0912',
        projectType: 'AI Business Automation Platform',
        budgetRange: '$25,000 - $50,000',
        expectedTimeline: '1 - 3 Months',
        requirements: 'Need intelligent document parsing for 12,000 monthly loan applications with human-in-the-loop review queues and audit trail generation.',
        ndaRequired: false,
        estimatedCostMin: 35000,
        estimatedCostMax: 48000,
        status: 'Contacted'
      }
    ];
  },

  saveInquiry(inquiry: ClientInquiry): void {
    const list = this.getInquiries();
    list.unshift(inquiry);
    try {
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to store inquiry', e);
    }
  },

  getOperatorLogs(): { id: string; timestamp: string; action: string; operator: string; details: string }[] {
    try {
      const data = localStorage.getItem(OPERATOR_LOGS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'LOG-441',
        timestamp: new Date(Date.now() - 1000 * 60 * 12).toLocaleTimeString(),
        operator: 'OP-04 (Lead Tech)',
        action: 'Zone 3 Armed',
        details: 'Executive Suite armed after scheduled security check.'
      },
      {
        id: 'LOG-440',
        timestamp: new Date(Date.now() - 1000 * 60 * 48).toLocaleTimeString(),
        operator: 'OP-02 (Surveillance)',
        action: 'Alarm Acknowledged',
        details: 'ALM-9021 motion event verified as authorized maintenance team.'
      }
    ];
  },

  logOperatorAction(action: string, operator: string, details: string): void {
    const logs = this.getOperatorLogs();
    logs.unshift({
      id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toLocaleTimeString(),
      operator,
      action,
      details
    });
    try {
      localStorage.setItem(OPERATOR_LOGS_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch (e) {
      console.error('Failed to log operator action', e);
    }
  }
};
