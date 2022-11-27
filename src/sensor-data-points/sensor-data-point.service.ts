import { Injectable } from '@nestjs/common';
import { SensorDataPoint } from './models/sensor-data-point.model';
import { GetSensorDataArgs } from './dto/sensor-data.args';

@Injectable()
export class SensorDataPointService {
  //TODO: Implement repository and fetch the data based on parameters

  async findAll(sensorArgs: GetSensorDataArgs): Promise<SensorDataPoint[]> {
    return [] as SensorDataPoint[];
  }
}
