import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '101',
    database: 'school_management_system',
    synchronize: true,
    autoLoadEntities: true
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
