import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Machine } from './machine.model';

@ObjectType({ description: 'Sensor' })
export class Sensor {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Machine)
  machine: Machine;
}
