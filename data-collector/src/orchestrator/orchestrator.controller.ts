import { Controller } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OrchestratorService } from './orchestrator.service';

@Controller('orchestrator')
export class OrchestratorController {
  constructor(private readonly orchestratorService: OrchestratorService) {}
  @Cron('0 8 * * *')
  handleCron() {
    this.orchestratorService.prepareData();
  }
}
