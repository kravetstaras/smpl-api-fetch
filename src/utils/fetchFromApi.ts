import axios from 'axios';

export default async function fetchFromApi() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      const result = response.data;
      return result;
    } else {
      console.error(`Request failed with status code ${response.status}`);
      return null;
    }
  } catch (error: unknown) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
}
