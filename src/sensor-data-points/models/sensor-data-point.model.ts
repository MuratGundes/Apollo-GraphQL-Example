import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'SensorDataPoint' })
export class SensorDataPoint {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  timestamp: Date;

  @Field(() => Float)
  value: number;
}
