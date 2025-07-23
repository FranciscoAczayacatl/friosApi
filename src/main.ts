// src/main.ts

import { createServer } from './infrastructure/webserver/server';
import express from 'express';
const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const port = process.env.PORT;


const app = createServer();
app.get('/api/test', (req, res) => {
  res.send('API funcionando');
});

app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});