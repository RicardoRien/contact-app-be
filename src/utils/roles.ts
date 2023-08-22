export enum Role {
  OWNER = 'owner',
  ADMINISTRATOR = 'administrator',
  USER = 'user',
}

export const ROLES_KEY = 'role';

export type RoleType =
  | 'owner'
  | 'administrator'
  | 'user';
