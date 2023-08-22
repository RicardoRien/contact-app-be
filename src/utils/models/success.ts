import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SuccessReponse {
  @Field(() => String)
  status: string;

  @Field(() => String, { nullable: true })
  message?: string;
}
