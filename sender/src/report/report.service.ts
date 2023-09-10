import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ReportDto } from './report.dto';

@Injectable()
export class ReportService {
  /**
   *
   */
  constructor(private readonly eventEmitter: EventEmitter2) {}

  handleReportCreatedEvent(data: Record<string, unknown>) {
    this.eventEmitter.emit(
      'report.arrived',
      new ReportDto(data.projectId.toString(), data.htmlReport.toString()),
    );
  }
}
