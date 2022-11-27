import { Module } from '@nestjs/common';
import { SensorDataPointResolver } from './sensor-data-point.resolver';
import { SensorDataPointService } from './sensor-data-point.service';

@Module({
  providers: [SensorDataPointResolver, SensorDataPointService],
})
export class SensorDataPointModule {}
