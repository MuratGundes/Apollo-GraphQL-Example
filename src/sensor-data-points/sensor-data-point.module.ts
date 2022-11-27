import { Module } from '@nestjs/common';
import { SensorDataPointResolver } from './sensor-data-point.resolver';
import { SensorDataPointService } from './sensor-data-point.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [SensorDataPointResolver, SensorDataPointService],
})
export class SensorDataPointModule {}
