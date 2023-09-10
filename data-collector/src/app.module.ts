import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    CompanyModule,
    ProjectModule,
    UserModule,
    OrchestratorModule,
    SettingsModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
