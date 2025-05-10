const env = process.env.NODE_ENV || 'development';
require('dotenv').config();


export const config = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  server: process.env.DB_HOST as string,
  database: process.env.DB_DATABASE as string,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
  }
