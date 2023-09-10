import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import { CompanyDto } from 'src/dto/company.dto';
import { ProjectDto } from 'src/dto/project.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserSettingsDto } from 'src/dto/user.settings.dto';
import { ProjectService } from 'src/project/project.service';
import { SettingsService } from 'src/settings/settings.service';
import { UserService } from 'src/user/user.service';

import * as _ from 'lodash';

@Injectable()
export class OrchestratorService {
  constructor(
    private readonly companyService: CompanyService,
    private readonly projectService: ProjectService,
    private readonly userService: UserService,
    private readonly settingsService: SettingsService,
    private readonly reportService: ReportService,
  ) {}
  async sendAllReports() {
    try {
      // get all companies
      const companies = this.getCompanies();
      if (!companies || companies.length === 0) {
        return;
      }
      // get all projects for each company
      //const projects: Map<number, ProjectDto> = this.getProjects(companies);
      // get all users for each company
      const users: UserDto[] = this.getUsers(companies);

      const projectIds: Set<number> = this.saveUserProjects(users);
      const projects: ProjectDto[] = this.getProjects(companies);

      const filteredProjects: ProjectDto[] = projects.filter((project) =>
        projectIds.has(project.id),
      );

      // TODO:
      // send projects from filteredProjects via RabbitMQ to the report service that creates reports
    } catch (error) {}
  }

  //private getSettings(users)

  private getCompanies(): CompanyDto[] {
    return this.companyService.getAllCompanies();
  }

  private getProjects(companies: CompanyDto[]): ProjectDto[] {
    let projects: ProjectDto[] = [];

    companies.forEach((company) => {
      const projectsForCompany = this.projectService.getAllProjectsForCompany(
        company.id,
      );
      if (!projectsForCompany || projectsForCompany.length === 0) {
        return;
      }
      projects = projects.concat(projectsForCompany);
    });
    return projects;
  }

  private getUsers(companies: CompanyDto[]): UserDto[] {
    let users: UserDto[] = [];

    companies.forEach((company) => {
      const usersForCompany = this.userService.getAllUsersForCompany(
        company.id,
      );
      if (!usersForCompany || usersForCompany.length === 0) {
        return;
      }
      users = users.concat(usersForCompany);
    });
    return users;
  }

  private saveUserProjects(users: UserDto[]): Set<number> {
    const allProjectIds = new Set<number>();
    users.forEach((user) => {
      const userSettings = this.getUserSettings(user.id);
      if (!userSettings || !userSettings.projects) {
        return;
      }
      const userProjectIds: number[] = [];
      userSettings.projects.forEach((value, key) => {
        if (value) {
          userProjectIds.push(key);
          allProjectIds.add(key);
        }
      });
      this.userService.saveUserProjects(user.id, userProjectIds);
    });
    return allProjectIds;
  }

  private getUserSettings(userId: number): UserSettingsDto {
    return this.settingsService.getUserSettings(userId);
  }
}
