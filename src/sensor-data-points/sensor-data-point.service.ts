import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SensorDataPoint } from './models/sensor-data-point.model';
import { GetSensorDataArgs } from './dto/sensor-data.args';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SensorDataPointService {
  constructor(
    @InjectModel(SensorDataPoint.name)
    private sensorDataModel: Model<SensorDataPoint>,
  ) {}

  async findAll(sensorArgs: GetSensorDataArgs): Promise<SensorDataPoint[]> {
    return this.sensorDataModel.find(sensorArgs);
  }
}
