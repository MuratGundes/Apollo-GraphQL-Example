import { Field, ObjectType } from '@nestjs/graphql';
import { Machine } from './machine.model';

@ObjectType({ description: 'Sensor' })
export class Sensor {
  @Field(() => String)
  name: string;

  @Field(() => Machine)
  machine: Machine;
}
