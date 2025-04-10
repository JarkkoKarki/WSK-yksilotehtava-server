/* eslint-disable no-undef */
import express from 'express';
import api from './api/index.js';
const app = express();
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import {errorHandler, notFoundHandler} from './middlewares.js';

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use('/public', express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api/v1', api);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
