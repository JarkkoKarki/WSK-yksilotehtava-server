/* eslint-disable no-undef */
import {fetchData} from '../../utils/fetchData.js';
import dotenv from 'dotenv';
dotenv.config();

async function returnAddress(lat, lon) {
  try {
    const apiKey = process.env.DIGITRANSIT_SUBSCRIPTION_KEY;
    const url = `https://api.digitransit.fi/geocoding/v1/reverse?point.lat=${lat}&point.lon=${lon}&layers=address`;

    const headers = {
      'digitransit-subscription-key': apiKey,
      'Content-Type': 'application/json',
    };

    const response = await fetchData(url, {headers});

    if (!response.features || response.features.length === 0) {
      throw new Error('No address found for the given coordinates');
    }

    const address = response.features[0].properties.label;
    return address;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default returnAddress;
