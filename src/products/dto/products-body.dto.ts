import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IProduct } from '../../interfaces/interfaces';

export class ProductsBodyDto {
  // @IsNotEmpty()
  // @IsString()
  // username: string;

  // @IsString()
  // @IsEmail()
  // email:string

  data: IProduct[];
}
