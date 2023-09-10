import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  async getAllUsersForCompany(companyId: number): UserDto[] {
    try {
      const users: UserDto[];
      // the best here is to call another service that gets all users from the database
      // if we want to develop quickly, we can query the database itself from here

      return users;
    } catch (error) {}
  }

  async saveUserProjects(userId: number, projectIds: number[]) {
    try {
      // save in Redis: key - user, value - projectIds
      // also save in redis the opposite: key - project, value - add user ID to the list of users that require that project
    } catch (error) {}
  }
}
