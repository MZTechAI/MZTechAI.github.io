export type PageId = 
  | 'home'
  | 'about'
  | 'software'
  | 'ai-dev'
  | 'ai-automation'
  | 'security'
  | 'sentinel-ai'
  | 'projects'
  | 'industries'
  | 'tech-stack'
  | 'insights'
  | 'contact';

export type ProjectStatus = 'Live Demo' | 'Prototype' | 'In Development' | 'Concept Project';

export type ProjectCategory = 
  | 'All'
  | 'AI & ML'
  | 'Automation'
  | 'Security & Surveillance'
  | 'Enterprise Software'
  | 'Cloud & IoT';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  demoAvailable: boolean;
  businessProblem: string;
  proposedSolution: string;
  keyFeatures: string[];
  techStack: string[];
  businessBenefits: string[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  demoType?: 'interactive-doc' | 'interactive-workflow' | 'interactive-vision' | 'sentinel-ai' | 'calculator';
}

export type AlarmSeverity = 'critical' | 'warning' | 'info';

export type AlarmStatus = 'active' | 'acknowledged' | 'investigating' | 'resolved';

export interface AlarmEvent {
  id: string;
  timestamp: string;
  sourceDevice: string;
  zone: string;
  type: string;
  severity: AlarmSeverity;
  status: AlarmStatus;
  description: string;
  confidence?: number;
  assignedOperator?: string;
  resolutionNotes?: string;
  resolvedAt?: string;
}

export interface SecurityDevice {
  id: string;
  name: string;
  type: 'camera' | 'pir-motion' | 'door-contact' | 'smoke-heat' | 'glass-break' | 'water-leak' | 'access-control' | 'gateway';
  zone: string;
  status: 'online' | 'offline' | 'alert' | 'maintenance';
  battery?: number;
  signalStrength: number; // 0 - 100
  lastPing: string;
  ipAddress?: string;
}

export interface SecurityCamera {
  id: string;
  name: string;
  zone: string;
  status: 'active' | 'offline' | 'motion-detected' | 'alarm';
  streamType: 'simulated-rtsp';
  resolution: string;
  fps: number;
  aiAnalytics: {
    personDetection: boolean;
    vehicleDetection: boolean;
    intrusionZone: boolean;
    lineCrossing: boolean;
    loitering: boolean;
    confidenceThreshold: number; // e.g. 85%
  };
  currentDetections: {
    label: string;
    confidence: number;
    bbox: [number, number, number, number]; // [top%, left%, width%, height%]
    color: string;
  }[];
}

export interface ClientInquiry {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  expectedTimeline: string;
  requirements: string;
  ndaRequired: boolean;
  estimatedCostMin?: number;
  estimatedCostMax?: number;
  status: 'New' | 'In Review' | 'Contacted' | 'Quoted';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  tags: string[];
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
}

export interface IndustrySolution {
  id: string;
  title: string;
  badge: string;
  summary: string;
  challenges: string[];
  mzSolutions: string[];
  keyTechnologies: string[];
  impactMetrics: { label: string; value: string }[];
}
