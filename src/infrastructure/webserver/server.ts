import express from 'express';
import cors from 'cors';

import routes from '../../routes/index'


export const createServer = () => {
  const app = express();

   app.use(cors({
    origin: 'http://localhost:5173', // o usa '*' si es solo para pruebas
    credentials: true, // si usas cookies, headers personalizados, etc.
  }));
  
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '100mb' }));
  app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl}`);
    next();
  });




  app.use('/', routes);

  

  return app;
};