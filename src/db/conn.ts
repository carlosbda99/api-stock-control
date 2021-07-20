import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const connection = createConnection( {
    type: 'postgres',
    synchronize: false,
    logging: false,
    extra: {
      ssl: true,
    },
    entities: ['"build/**/entity.ts"'],
    url: process.env.DATABASE_URL
  });

export default connection