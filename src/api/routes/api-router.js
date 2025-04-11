import express from 'express';
import {getAddress} from '../controllers/api-controller.js';

const apiRouter = express.Router();

apiRouter.get('/location/:lon/:lat', getAddress);

export default apiRouter;
