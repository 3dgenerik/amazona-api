import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export interface IProduct {
    name: string;
    slug: string;
    category: string;
    image: string;
    price: number;
    countInStock: number;
    brand: string;
    rating: number;
    numReviews: number;
    description: string;
  }
  

export class ProductsBodyDto{
    // @IsNotEmpty()
    // @IsString()
    // username: string;

    // @IsString()
    // @IsEmail()
    // email:string

    data: IProduct[]
}