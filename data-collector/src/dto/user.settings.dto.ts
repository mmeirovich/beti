export class UserSettingsDto {
  readonly id: number;
  readonly user_id: number;

  /// Projects settings
  /// key: project id
  /// value: true if the user wants to receive reports for this project
  readonly projects: Map<number, boolean>;
}
