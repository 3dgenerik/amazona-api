import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {} from 'class-validator';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;
}
