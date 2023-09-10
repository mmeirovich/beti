import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ReportModule } from './report/report.module';
import { SendService } from './send/send.service';
import { SendModule } from './send/send.module';

@Module({
  imports: [ReportModule, EventEmitterModule.forRoot(), SendModule],
  controllers: [AppController],
  providers: [AppService, SendService],
})
export class AppModule {}
