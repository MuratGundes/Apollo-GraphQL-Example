import { IsDate } from 'class-validator';
import { Field, ArgsType, ID } from '@nestjs/graphql';

@ArgsType()
export class GetSensorDataArgs {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  @IsDate()
  from: Date;

  @Field(() => Date)
  @IsDate()
  to: Date;
}
