import {addFavorite, getFavoritesByUserId} from '../models/favorites-model.js';

export const addFavoriteController = async (req, res) => {
  const {user_id, restaurant_id} = req.body;

  if (!user_id || !restaurant_id) {
    return res
      .status(400)
      .json({error: 'user_id and restaurant_id are required'});
  }

  try {
    const result = await addFavorite(user_id, restaurant_id);
    if (result) {
      res.status(201).json({message: 'Favorite added successfully'});
    } else {
      res.status(500).json({error: 'Failed to add favorite'});
    }
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({error: 'Internal server error'});
  }
};

export const getFavoritesController = async (req, res) => {
  const {user_id} = req.params;

  try {
    const favorites = await getFavoritesByUserId(user_id);
    res.status(200).json(favorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({error: 'Internal server error'});
  }
};
