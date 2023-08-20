import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    jwt: {
      secret: process.env.ACCESS_TOKEN_SECRET,
      expiration: process.env.ACCESS_TOKEN_EXPIRATION,
      refreshSecret: process.env.REFRESH_TOKEN_SECRET,
      refreshExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
    },
    frontend: { 
      url: process.env.FRONTEND_URL,
    },
  };
});
