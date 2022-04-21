import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePurchaseinput{
  @Field()
  productId: string;
}