export async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  // Log the raw response text
  const responseText = await response.text();
  console.log('Raw Response Text:', responseText);

  // Check if the response is JSON
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error(`Unexpected response: ${responseText}`);
  }

  return JSON.parse(responseText);
}
