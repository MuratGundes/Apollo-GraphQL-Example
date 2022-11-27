import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineSchema } from './schemas/machine.schema';
import { SensorDataPointSchema } from './schemas/sensor-data-point.schema';
import { MachineMongoRepository } from './repositories/machine-mongo.repository';
import { SensorDataPointMongoRepository } from './repositories/sensor-data-point-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Machine',
        useFactory: () => MachineSchema,
      },
      {
        name: 'SensorDataPoint',
        useFactory: () => SensorDataPointSchema,
      },
    ]),
  ],
  providers: [MachineMongoRepository, SensorDataPointMongoRepository],
  exports: [MachineMongoRepository, SensorDataPointMongoRepository],
})
export class DbModule {}
