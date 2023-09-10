import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @EventPattern('report-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
    this.reportService.handleReportCreatedEvent(data);
  }
}
