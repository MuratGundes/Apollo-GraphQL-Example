import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sensor } from './sensor.model';

@ObjectType({ description: 'Machine' })
export class Machine {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [Sensor], { nullable: false })
  sensors: Sensor[];

  @Field(() => GPSPosition)
  lastKnownPosition: GPSPosition;
}

@ObjectType({ description: 'GPSPosition' })
export class GPSPosition {
  @Field(() => String, { nullable: false })
  lat: string;

  @Field(() => String, { nullable: false })
  long: string;
}
