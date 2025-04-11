import {getStopsByCoordinates} from '../models/buss-stop-model.js';

export const fetchStops = async (req, res) => {
  try {
    console.log('Request received in fetchStops:', req.params);

    const {lon, lat, dis} = req.params;

    // Validate input
    if (!lon || !lat || !dis) {
      console.error('Missing parameters:', {lon, lat, dis});
      return res
        .status(400)
        .json({error: 'Longitude, latitude, and distance are required'});
    }

    console.log('Fetching stops with:', {lon, lat, dis});

    // Call the model function to fetch stops
    const stops = await getStopsByCoordinates(
      {latitude: parseFloat(lat), longitude: parseFloat(lon)},
      parseInt(dis, 10)
    );

    console.log('Stops fetched successfully:', stops);

    // Send the stops as a response
    res.status(200).json(stops);
  } catch (error) {
    console.error('Error in fetchStops:', error.message);
    res.status(500).json({error: 'Failed to fetch bus stops'});
  }
};
