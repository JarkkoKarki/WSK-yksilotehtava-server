import express from 'express';
import {fetchStops} from '../controllers/buss-controller.js';

const bussRouter = express.Router();

bussRouter.get('/stops/:lon/:lat/:dis', fetchStops);

export default bussRouter;
