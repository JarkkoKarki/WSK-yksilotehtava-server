/* eslint-disable no-undef */
import {fetchData} from '../../utils/fetchData.js';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.DIGITRANSIT_SUBSCRIPTION_KEY;
const apiAddress = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';

export async function getStopsByCoordinates(crd, dist) {
  try {
    const GQLQuery = `{
      stopsByRadius(lat:${crd.latitude}, lon:${crd.longitude}, radius:${dist}) {
        edges {
          node {
            stop {
              name
              desc
              lat
              lon
              routes {
                shortName
              }
            }
          }
        }
      }
    }`;

    console.log('GraphQL Query:', GQLQuery);

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': apiKey,
      },
      body: JSON.stringify({query: GQLQuery}),
    };

    console.log('Fetch options:', fetchOptions);

    // Fetch data from the API
    const response = await fetchData(apiAddress, fetchOptions);

    console.log('Raw Response:', response);

    if (!response.data || !response.data.stopsByRadius) {
      throw new Error('No stops found for the given coordinates');
    }

    // Map the response to a simpler format
    return response.data.stopsByRadius.edges.map((edge) => ({
      name: edge.node.stop.name,
      description: edge.node.stop.desc,
      latitude: edge.node.stop.lat,
      longitude: edge.node.stop.lon,
      routes: edge.node.stop.routes.map((route) => route.shortName).join(', '),
    }));
  } catch (error) {
    console.error('Error fetching stops:', error.message);
    throw error;
  }
}
