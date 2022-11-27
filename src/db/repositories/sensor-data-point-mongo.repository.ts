import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SensorDataPointDocument } from '../../common/sensor-data-point-document.interface';
import { ISensorDataPointRepository } from '../../common/sensor-data-point-repository.interface';

@Injectable()
export class SensorDataPointMongoRepository
  implements ISensorDataPointRepository
{
  constructor(
    @InjectModel('SensorDataPointDocument')
    private readonly sensorDataPointDocument: Model<SensorDataPointDocument>,
  ) {}

  public async findAll(
    id: string,
    from: Date,
    to: Date,
  ): Promise<Array<SensorDataPointDocument>> {
    try {
      return await this.sensorDataPointDocument.find({
        id: id,
        timestamp: {
          $gte: from,
          $lt: to,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
