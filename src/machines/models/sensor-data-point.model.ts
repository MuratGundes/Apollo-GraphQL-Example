import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'SensorDataPoint' })
export class SensorDataPoint {
  @Field(() => Date, { nullable: false })
  timestamp: Date;

  @Field(() => Number, { nullable: false })
  value: number;
}
