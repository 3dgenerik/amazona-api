import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'milesoda-postgres-02',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'amazona',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
