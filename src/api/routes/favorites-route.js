import express from 'express';
import {
  addFavoriteController,
  getFavoritesController,
} from '../controllers/favorites-controller.js';

const router = express.Router();

router.post('/', addFavoriteController);
router.get('/:user_id', getFavoritesController);

export default router;
