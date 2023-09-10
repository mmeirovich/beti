import { Injectable } from '@nestjs/common';
import { ProjectDto } from 'src/dto/project.dto';

@Injectable()
export class ProjectService {
    async getAllProjectsForCompany(companyId: number): ProjectDto[] {
        try {
            const projects: ProjectDto[];
            // the best here is to call another service that gets all projects from the database
            // if we want to develop quickly, we can query the projects database itself from here
      
            return projects;
          } catch (error) {}
}
