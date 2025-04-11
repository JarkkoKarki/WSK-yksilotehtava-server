import authRouter from './routes/auth-router.js';
import express from 'express';
import userRouter from './routes/user-router.js';
import apiRouter from './routes/api-router.js';

const router = express.Router();

router.use('/users', userRouter);

router.use('/auth', authRouter);

router.use('/api', apiRouter);

export default router;
