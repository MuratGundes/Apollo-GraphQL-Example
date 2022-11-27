import { Injectable } from '@nestjs/common';
import { GetSensorDataArgs } from './dto/sensor-data.args';
import { SensorDataPointMongoRepository } from '../db/repositories/sensor-data-point-mongo.repository';
import { SensorDataPoint } from './models/sensor-data-point.model';

@Injectable()
export class SensorDataPointService {
  constructor(
    private readonly sensorDataPointRepository: SensorDataPointMongoRepository,
  ) {}

  async findAll(sensorArgs: GetSensorDataArgs): Promise<SensorDataPoint[]> {
    const result = await this.sensorDataPointRepository.findAll(
      sensorArgs.id,
      sensorArgs.from,
      sensorArgs.to,
    );
    return result as unknown as SensorDataPoint[];
  }
}
