import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class SendService {
  @OnEvent('report.arrived', { async: true })
  handleOrderCreatedEvent(payload: ReportDto) {
    // TODO:
    // 1. Get all users that required this project report from Redis
    // 2. Add this report to a "big report" for each of these users
    // 3. Store the big report in an external storage or Redis or something like that
    // 4. Add this report ID to a list of reports that are ready, for each user
    // 5. If one of these users has all the reports he needs, send him an email & delete the user from Redis
  }
}
