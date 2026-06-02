export interface CameraBagPreset {
  id: string;
  name: string;
  weight: number; // in kg
  icon: string;
  description: string;
  gearList: string[];
}

export type SimulationState = 'IDLE' | 'FALLING' | 'IMPACT' | 'COMPLETED';

export interface MechanicalResult {
  weight: number;
  height: number;
  thickness: number;
  impactForce: number; // Newtons
  impactEnergy: number; // Joules
  decelerationG: number; // G-force
  equivalentMass: number; // kg
  impactVelocity: number; // m/s
  impactDuration: number; // ms
  isDestroyed: boolean;
}
