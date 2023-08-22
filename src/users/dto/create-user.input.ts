import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Role, RoleType } from '../../utils/roles';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field(() => String, { description: 'First name' })
  firstname: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Last name' })
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { description: 'E-mail' })
  email: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Password' })
  password: string;

  @IsOptional()
  @Field(() => String, { 
    description: 'Phone number', 
    nullable: true
  })
  phone: string;

  @IsNotEmpty()
  @IsEnum(Role)
  @Field(() => String, { description: 'Role' })
  role: RoleType;

  @IsNotEmpty()
  @Field(() => String, { description: 'Created By' })
  createdBy: string;
}
