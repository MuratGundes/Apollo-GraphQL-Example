import { Document } from 'mongoose';

export interface GPSPosition {
  lat: string;
  long: string;
}

export interface Sensor {
  name: string;
  machine: Machine;
}

export interface Machine {
  uuid: string;
  name: string;
  sensors: Array<Sensor>;
  lastKnownPosition?: GPSPosition;
}

export interface MachineDocument extends Machine, Document {}
