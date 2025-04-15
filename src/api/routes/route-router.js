import express from 'express';
import {getRouteController} from '../controllers/route-controller.js';

const router = express.Router();

router.get('/:olat/:olng/:lat/:lng', getRouteController);

export default router;
