import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Machine } from './models/machine.model';
import { GetMachineArgs } from './dto/machine.args';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine.name)
    private machineModel: Model<Machine>,
  ) {}

  async findAll(): Promise<Machine[]> {
    return this.machineModel.find();
  }

  async findOne(machineArgs: GetMachineArgs): Promise<Machine> {
    return this.machineModel.findOne(machineArgs);
  }
}
