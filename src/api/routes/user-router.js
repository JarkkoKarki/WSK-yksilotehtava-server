import express from 'express';
import {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';
import {
  authenticateToken,
  checkUserOwnership,
  upload,
} from '../../middlewares.js';

const userRouter = express.Router();

userRouter.route('/').get(getUser).post(postUser);

userRouter
  .route('/:id')
  .get(getUserById)
  .put(authenticateToken, upload.single('file'), checkUserOwnership, putUser)

  .delete(authenticateToken, checkUserOwnership, deleteUser);

export default userRouter;
