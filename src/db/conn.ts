import { getConnectionOptions, ConnectionOptions, createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const getOptions = async () => {
  let connectionOptions: ConnectionOptions;
  connectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    extra: {
      ssl: true,
    },
    entities: ['dist/entity/*.*'],
  };
  if (process.env.DATABASE_URL) {
    Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  } else {
    connectionOptions = await getConnectionOptions(); 
  }

  return connectionOptions;
};

let typeormconfig
async () => {
    typeormconfig = await getOptions()
}
const connection = createConnection(typeormconfig);

export default connection