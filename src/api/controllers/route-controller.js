import {fetchRouteData} from '../models/route-model.js';

export const getRouteController = async (req, res) => {
  const {olat, olng, lat, lng} = req.params;

  if (!olat || !olng || !lat || !lng) {
    return res
      .status(400)
      .json({error: 'All coordinates (olat, olng, lat, lng) are required'});
  }

  try {
    const routeData = await fetchRouteData(olat, olng, lat, lng);
    res.status(200).json(routeData);
  } catch (error) {
    console.error('Error in getRouteController:', error);
    res.status(500).json({error: 'Failed to fetch route data'});
  }
};
