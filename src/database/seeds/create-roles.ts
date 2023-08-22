import { v4 as uuidv4 } from 'uuid';

export const roles = [
  {
    value: 'owner',
    name: 'Owner',
    uuid: uuidv4(),
    status: true,
  },
  {
    value: 'administrator',
    name: 'Administrador',
    uuid: uuidv4(),
    status: true,
  },
  {
    value: 'user',
    name: 'User',
    uuid: uuidv4(),
    status: true,
  },
];
