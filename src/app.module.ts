import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todoModule';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TodoModule, CommonModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: 'tpnest',
        autoLoadEntities: true,
        synchronize: true,
      }
    ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
