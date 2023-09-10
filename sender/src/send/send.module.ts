import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SendService } from './send.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [SendService],
})
export class SendModule {}
