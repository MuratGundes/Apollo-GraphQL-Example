import { Injectable } from '@nestjs/common';
import { Machine } from './models/machine.model';
import { GetMachineArgs } from './dto/machine.args';

@Injectable()
export class MachineService {
  async findAll(): Promise<Machine[]> {
    return [] as Machine[];
  }

  async findOne(machineArgs: GetMachineArgs): Promise<Machine> {
    return {} as Machine;
  }
}
