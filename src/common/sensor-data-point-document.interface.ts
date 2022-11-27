import { Document } from 'mongoose';

export interface SensorDataPoint {
  uuid: string;
  value: number;
  timestamp: number;
}

export interface SensorDataPointDocument extends SensorDataPoint, Document {}
