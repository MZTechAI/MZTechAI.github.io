import type { AlarmEvent, SecurityCamera, SecurityDevice } from '../types';

export const initialCameras: SecurityCamera[] = [
  {
    id: 'CAM-01',
    name: 'Server Room Primary High-Res',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'active',
    streamType: 'simulated-rtsp',
    resolution: '4K @ 30fps (H.265)',
    fps: 30,
    aiAnalytics: {
      personDetection: true,
      vehicleDetection: false,
      intrusionZone: true,
      lineCrossing: true,
      loitering: true,
      confidenceThreshold: 88
    },
    currentDetections: [
      {
        label: 'Authorized Tech (Badge #402)',
        confidence: 96.4,
        bbox: [28, 38, 24, 52],
        color: '#10b981'
      }
    ]
  },
  {
    id: 'CAM-02',
    name: 'Perimeter Fence North Corridor',
    zone: 'Zone 2: Warehouse Perimeter',
    status: 'motion-detected',
    streamType: 'simulated-rtsp',
    resolution: '1440p @ 25fps',
    fps: 25,
    aiAnalytics: {
      personDetection: true,
      vehicleDetection: true,
      intrusionZone: true,
      lineCrossing: true,
      loitering: true,
      confidenceThreshold: 82
    },
    currentDetections: [
      {
        label: 'Perimeter Intrusion Alert',
        confidence: 91.8,
        bbox: [35, 62, 18, 44],
        color: '#f43f5e'
      },
      {
        label: 'Commercial Van (Unregistered)',
        confidence: 94.2,
        bbox: [50, 12, 38, 35],
        color: '#f59e0b'
      }
    ]
  },
  {
    id: 'CAM-03',
    name: 'Executive Suite Entrance Lobby',
    zone: 'Zone 3: Executive Suite',
    status: 'active',
    streamType: 'simulated-rtsp',
    resolution: '1080p @ 30fps',
    fps: 30,
    aiAnalytics: {
      personDetection: true,
      vehicleDetection: false,
      intrusionZone: false,
      lineCrossing: true,
      loitering: true,
      confidenceThreshold: 85
    },
    currentDetections: []
  },
  {
    id: 'CAM-04',
    name: 'Logistics Loading Dock East',
    zone: 'Zone 4: Main Gate & Docks',
    status: 'active',
    streamType: 'simulated-rtsp',
    resolution: '4K @ 30fps (WDR)',
    fps: 30,
    aiAnalytics: {
      personDetection: true,
      vehicleDetection: true,
      intrusionZone: true,
      lineCrossing: true,
      loitering: false,
      confidenceThreshold: 80
    },
    currentDetections: [
      {
        label: 'Forklift Active',
        confidence: 97.1,
        bbox: [42, 45, 32, 40],
        color: '#00f2fe'
      }
    ]
  }
];

export const initialDevices: SecurityDevice[] = [
  {
    id: 'DEV-PIR-101',
    name: 'Dual-Tech PIR Motion Sensor 1',
    type: 'pir-motion',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'online',
    battery: 94,
    signalStrength: 98,
    lastPing: '12s ago',
    ipAddress: '10.240.1.14'
  },
  {
    id: 'DEV-DOR-102',
    name: 'Magnetic Heavy Vault Door Contact',
    type: 'door-contact',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'online',
    signalStrength: 100,
    lastPing: '4s ago',
    ipAddress: '10.240.1.15'
  },
  {
    id: 'DEV-SMK-201',
    name: 'Optical Smoke & Thermal Rate Sensor',
    type: 'smoke-heat',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'online',
    battery: 89,
    signalStrength: 95,
    lastPing: '18s ago',
    ipAddress: '10.240.1.19'
  },
  {
    id: 'DEV-WTR-202',
    name: 'Sub-Floor Water Ingress Detector',
    type: 'water-leak',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'online',
    battery: 92,
    signalStrength: 92,
    lastPing: '35s ago',
    ipAddress: '10.240.1.22'
  },
  {
    id: 'DEV-PIR-301',
    name: 'Perimeter Outdoor Microwave/PIR Beam',
    type: 'pir-motion',
    zone: 'Zone 2: Warehouse Perimeter',
    status: 'alert',
    battery: 78,
    signalStrength: 86,
    lastPing: 'Just now',
    ipAddress: '10.240.2.11'
  },
  {
    id: 'DEV-GLS-302',
    name: 'Acoustic Glass-Break Sensor East',
    type: 'glass-break',
    zone: 'Zone 2: Warehouse Perimeter',
    status: 'online',
    battery: 85,
    signalStrength: 88,
    lastPing: '50s ago',
    ipAddress: '10.240.2.18'
  },
  {
    id: 'DEV-ACS-401',
    name: 'Biometric Access Controller & RFID',
    type: 'access-control',
    zone: 'Zone 3: Executive Suite',
    status: 'online',
    signalStrength: 99,
    lastPing: '2s ago',
    ipAddress: '10.240.3.02'
  },
  {
    id: 'DEV-GW-001',
    name: 'Sentinel Secure Edge Gateway Hub A',
    type: 'gateway',
    zone: 'Zone 1: Datacenter & Vault',
    status: 'online',
    signalStrength: 100,
    lastPing: '1s ago',
    ipAddress: '10.240.0.1'
  }
];

export const initialAlarms: AlarmEvent[] = [
  {
    id: 'ALM-8891',
    timestamp: '2 mins ago',
    sourceDevice: 'CAM-02 (Perimeter North)',
    zone: 'Zone 2: Warehouse Perimeter',
    type: 'Restricted-Zone Line Crossing',
    severity: 'critical',
    status: 'active',
    description: 'AI vision model confirmed human bounding box crossing outer yellow fence line after operating hours.',
    confidence: 91.8,
    assignedOperator: 'Unassigned (Awaiting Review)'
  },
  {
    id: 'ALM-8890',
    timestamp: '14 mins ago',
    sourceDevice: 'DEV-PIR-301 (Perimeter Beam)',
    zone: 'Zone 2: Warehouse Perimeter',
    type: 'PIR Motion Trigger',
    severity: 'warning',
    status: 'investigating',
    description: 'Microwave/PIR beam interrupted. Correlated with CAM-02 detection.',
    confidence: 88.0,
    assignedOperator: 'OP-03 (Marcus Sterling)'
  },
  {
    id: 'ALM-8889',
    timestamp: '38 mins ago',
    sourceDevice: 'DEV-ACS-401 (Executive)',
    zone: 'Zone 3: Executive Suite',
    type: 'Repeated Badge Rejection',
    severity: 'warning',
    status: 'acknowledged',
    description: '3 consecutive unassigned NFC badge attempts within 45 seconds.',
    confidence: 100.0,
    assignedOperator: 'OP-02 (Elena R.)'
  },
  {
    id: 'ALM-8888',
    timestamp: '1 hr 12 mins ago',
    sourceDevice: 'DEV-SMK-201 (Datacenter)',
    zone: 'Zone 1: Datacenter & Vault',
    type: 'Sensor Periodic Diagnostics',
    severity: 'info',
    status: 'resolved',
    description: 'Automatic self-test routine passed. Chamber obscuration 0.02%/ft (Clean).',
    confidence: 99.9,
    assignedOperator: 'System Auto-Rule',
    resolutionNotes: 'Self-test verified with zero chamber degradation.',
    resolvedAt: '1 hr 10 mins ago'
  }
];

export const securityZones = [
  { id: 'zone-1', name: 'Zone 1: Datacenter & Vault', status: 'Armed - High Security', devicesCount: 5, activeAlarms: 0 },
  { id: 'zone-2', name: 'Zone 2: Warehouse Perimeter', status: 'Armed - Perimeter Active', devicesCount: 4, activeAlarms: 2 },
  { id: 'zone-3', name: 'Zone 3: Executive Suite', status: 'Armed - Night Mode', devicesCount: 2, activeAlarms: 0 },
  { id: 'zone-4', name: 'Zone 4: Main Gate & Docks', status: 'Disarmed - Shift Active', devicesCount: 3, activeAlarms: 0 }
];

export const simulatedEventPool: Omit<AlarmEvent, 'id' | 'timestamp' | 'status'>[] = [
  {
    sourceDevice: 'CAM-02 (Perimeter North)',
    zone: 'Zone 2: Warehouse Perimeter',
    type: 'Unauthorized Human Loitering',
    severity: 'critical',
    description: 'Subject identified lingering beside secure transformer enclosure for > 60 seconds.',
    confidence: 93.4
  },
  {
    sourceDevice: 'DEV-GLS-302 (East Glass)',
    zone: 'Zone 2: Warehouse Perimeter',
    type: 'Acoustic Glass-Break Frequency',
    severity: 'critical',
    description: 'Dual-frequency shock wave and high-frequency flex resonance registered.',
    confidence: 97.2
  },
  {
    sourceDevice: 'DEV-SMK-201 (Datacenter)',
    zone: 'Zone 1: Datacenter & Vault',
    type: 'Thermal Rate-of-Rise Spike',
    severity: 'critical',
    description: 'Temperature velocity exceeded +3.8°C/min threshold in Rack Bay C.',
    confidence: 95.0
  },
  {
    sourceDevice: 'DEV-WTR-202 (Sub-Floor)',
    zone: 'Zone 1: Datacenter & Vault',
    type: 'Sub-Floor Liquid Ingress',
    severity: 'warning',
    description: 'Conductivity probe tripped beneath CRAC Unit 2. Possible chiller condensation.',
    confidence: 99.0
  },
  {
    sourceDevice: 'CAM-01 (Server Room)',
    zone: 'Zone 1: Datacenter & Vault',
    type: 'Camera Lens Obscuration',
    severity: 'warning',
    description: 'Sudden optical contrast degradation (>85% dark). Potential lens tamper or cover.',
    confidence: 89.6
  },
  {
    sourceDevice: 'DEV-DOR-102 (Vault)',
    zone: 'Zone 1: Datacenter & Vault',
    type: 'Door Forced Open (DFO)',
    severity: 'critical',
    description: 'Magnetic contact broken without prior authorized card swipe transaction.',
    confidence: 100.0
  }
];
