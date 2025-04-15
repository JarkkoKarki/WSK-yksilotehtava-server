import authRouter from './routes/auth-router.js';
import express from 'express';
import userRouter from './routes/user-router.js';
import apiRouter from './routes/api-router.js';
import bussRouter from './routes/buss-router.js';
import favoritesRoute from './routes/favorites-route.js';
import routeRouter from './routes/route-router.js';

const router = express.Router();

router.use('/users', userRouter);

router.use('/auth', authRouter);

router.use('/api', apiRouter);

router.use('/buss', bussRouter);
router.use('/favorites', favoritesRoute);
router.use('/route', routeRouter);

export default router;
