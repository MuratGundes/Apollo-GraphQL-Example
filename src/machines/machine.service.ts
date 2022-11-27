import { Injectable } from '@nestjs/common';
import { Machine } from './models/machine.model';
import { GetMachineArgs } from './dto/machine.args';
import { MachineMongoRepository } from '../db/repositories/machine-mongo.repository';

@Injectable()
export class MachineService {
  constructor(private readonly machineRepository: MachineMongoRepository) {}
  async findAll(): Promise<Machine[]> {
    const result = await this.machineRepository.findAll();
    return result as Machine[];
  }

  async findOne(machineArgs: GetMachineArgs): Promise<Machine> {
    const result = await this.machineRepository.findOne(machineArgs.name);
    return result as Machine;
  }
}
