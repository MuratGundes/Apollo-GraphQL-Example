import { Args, Query, Resolver } from '@nestjs/graphql';
import { SensorDataPoint } from './models/sensor-data-point.model';
import { SensorDataPointService } from './sensor-data-point.service';
import { GetSensorDataArgs } from './dto/sensor-data.args';

@Resolver(() => SensorDataPoint)
export class SensorDataPointResolver {
  constructor(
    private readonly sensorDataPointService: SensorDataPointService,
  ) {}

  @Query(() => [SensorDataPoint])
  sensorData(@Args() args: GetSensorDataArgs): Promise<SensorDataPoint[]> {
    return this.sensorDataPointService.findAll(args);
  }
}
