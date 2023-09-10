import { Injectable } from '@nestjs/common';
import { UserSettingsDto } from 'src/dto/user.settings.dto';

@Injectable()
export class SettingsService {
  async getUserSettings(userId: number): UserSettingsDto {
    try {
      const userSettings: UserSettingsDto;
      // the best here is to call another service that gets all users from the database
      // if we want to develop quickly, we can query the database itself from here

      return userSettings;
    } catch (error) {}
  }
}
