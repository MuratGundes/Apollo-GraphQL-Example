import { MachineDocument } from './machine-document.interface';

export interface IMachineRepository {
  findAll(): Promise<Array<MachineDocument>>;
  findOne(name: string): Promise<MachineDocument>;
}
