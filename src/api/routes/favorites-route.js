import express from 'express';
import {
  addFavoriteController,
  getFavoritesController,
  deleteFavoriteController,
} from '../controllers/favorites-controller.js';

const router = express.Router();

router.post('/', addFavoriteController);
router.get('/:user_id', getFavoritesController);
router.delete('/', deleteFavoriteController);

export default router;
