import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sensor } from './sensor.model';

@ObjectType({ description: 'Machine' })
export class Machine {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [Sensor])
  sensors: Sensor[];

  @Field(() => GPSPosition)
  lastKnownPosition: GPSPosition;
}

@ObjectType({ description: 'GPSPosition' })
export class GPSPosition {
  @Field(() => String)
  lat: string;

  @Field(() => String)
  long: string;
}
