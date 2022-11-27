import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'GPSPosition' })
export class GPSPosition {
  @Field(() => String)
  lat: string;

  @Field(() => String)
  long: string;
}
