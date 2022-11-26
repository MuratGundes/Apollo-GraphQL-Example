import { Injectable } from '@nestjs/common';
import { Machine } from './models/machine.model';

@Injectable()
export class MachineService {
  async findAll(): Promise<Machine[]> {
    return [] as Machine[];
  }

  async findOneById(id: string): Promise<Machine> {
    return {} as Machine;
  }
}
