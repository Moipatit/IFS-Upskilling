// The Base URL for the Pokémon API.
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export default async function fetchData(character) {
  try {
    const endpoint = `${API_URL}/${character}`;

    // Send a GET request to the API using Fetch
    const response = await fetch(endpoint);

    // Parse the response as JSON.
    const data = await response.json();

    // Extract & Return the name of the first ability from the response data.
    const ability = data['abilities'][0]['ability']['name'];
    return ability;
  } catch (error) {
    // Log an error message if the API request fails.
    console.error(`Error fetching data for ${character}: `, error.message);

    // Throw error to propagate it to the caller.
    throw error;
  }
}
