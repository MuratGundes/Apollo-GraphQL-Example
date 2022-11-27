import { Field, ObjectType } from '@nestjs/graphql';
import { Sensor } from './sensor.model';
import { GPSPosition } from './gps-position.model';

@ObjectType({ description: 'Machine' })
export class Machine {
  @Field(() => String)
  name: string;

  @Field(() => [Sensor], { nullable: true })
  sensors: Sensor[];

  @Field(() => GPSPosition, { nullable: true })
  lastKnownPosition: GPSPosition;
}
