import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
  POSTGRES_URL: env.get('POSTGRES_URL').required().asString(),
  PORT: env.get('PORT').required().asPortNumber(),
  PUBLIC_PATH: env.get('PUBLIC_PATH').required().asString()
};