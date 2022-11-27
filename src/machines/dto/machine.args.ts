import { IsNotEmpty, IsString } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetMachineArgs {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;
}
