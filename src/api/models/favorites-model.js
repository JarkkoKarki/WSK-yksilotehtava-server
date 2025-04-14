import promisePool from '../../utils/database.js';

const addFavorite = async (user_id, restaurant_id) => {
  const sql = `INSERT INTO favorites (user_id, restaurant_id) VALUES (?, ?)`;
  const [result] = await promisePool.execute(sql, [user_id, restaurant_id]);
  return result.affectedRows > 0;
};

const getFavoritesByUserId = async (user_id) => {
  const sql = `SELECT * FROM favorites WHERE user_id = ?`;
  const [rows] = await promisePool.execute(sql, [user_id]);
  return rows;
};

export {addFavorite, getFavoritesByUserId};
