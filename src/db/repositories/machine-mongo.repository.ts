import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMachineRepository } from '../../common/machine-repository.interface';
import { MachineDocument } from '../../common/machine-document.interface';

@Injectable()
export class MachineMongoRepository implements IMachineRepository {
  constructor(
    @InjectModel('MachineDocument')
    private readonly machineDocument: Model<MachineDocument>,
  ) {}

  public async findAll(): Promise<Array<MachineDocument>> {
    try {
      return await this.machineDocument.find();
    } catch (error) {
      throw error;
    }
  }

  public async findOne(name: string): Promise<MachineDocument> {
    try {
      return await this.machineDocument.findOne({
        name: {
          $eq: name,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
