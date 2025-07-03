import express from 'express';

import routes from '../../routes/index'


export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl}`);
    next();
  });




  app.use('/', routes);

  

  return app;
};