import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sensor } from './sensor.model';
import { GPSPosition } from './gps-position.model';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType({ description: 'MachineModel' })
export class Machine {
  @Prop()
  id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  name: string;

  @Prop()
  @Field(() => [Sensor], { nullable: true })
  sensors: Sensor[];

  @Prop()
  @Field(() => GPSPosition, { nullable: true })
  lastKnownPosition: GPSPosition;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);
