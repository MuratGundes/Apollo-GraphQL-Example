import { Module } from '@nestjs/common';
import { SensorDataPointResolver } from './sensor-data-point.resolver';
import { SensorDataPointService } from './sensor-data-point.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SensorDataPoint,
  SensorDataPointSchema,
} from './models/sensor-data-point.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SensorDataPoint.name,
        schema: SensorDataPointSchema,
      },
    ]),
  ],
  providers: [SensorDataPointResolver, SensorDataPointService],
})
export class SensorDataPointModule {}
