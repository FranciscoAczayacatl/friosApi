const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${env}` });
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbBase = process.env.DB_DATABASE;
const dbServer = process.env.DB_HOST;
export const config = {
    user: dbUser,
    password: dbPassword,
    server: dbServer,
    database: dbBase,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
