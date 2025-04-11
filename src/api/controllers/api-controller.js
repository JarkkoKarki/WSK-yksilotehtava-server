import returnAddress from '../models/api-model.js';

const getAddress = async (req, res, next) => {
  try {
    const {lon, lat} = req.params;

    if (!lon || !lat) {
      const error = new Error('Longitude and latitude are required');
      error.status = 400;
      return next(error);
    }

    const address = await returnAddress(lat, lon);
    res.json({address});
  } catch (error) {
    console.error('Error in getAddress:', error);
    res.status(404).json({error: error.message});
  }
};

export {getAddress};
