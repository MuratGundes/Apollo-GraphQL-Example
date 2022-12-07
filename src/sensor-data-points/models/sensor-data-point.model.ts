import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType({ description: 'SensorDataPoint' })
export class SensorDataPoint {
  @Prop()
  id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => Date)
  timestamp: Date;

  @Prop()
  @Field(() => Float)
  value: number;
}

export const SensorDataPointSchema =
  SchemaFactory.createForClass(SensorDataPoint);
