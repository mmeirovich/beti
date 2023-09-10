import { Module } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';
import { CompanyModule } from 'src/company/company.module';
import { ProjectModule } from 'src/project/project.module';
import { UserModule } from 'src/user/user.module';
import { SettingsModule } from 'src/settings/settings.module';
import { OrchestratorController } from './orchestrator.controller';

@Module({
  imports: [CompanyModule, ProjectModule, UserModule, SettingsModule],
  providers: [OrchestratorService],
  controllers: [OrchestratorController],
})
export class OrchestratorModule {}
