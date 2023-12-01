export default async function fetchFromApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error(`Request failed with status code ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
}
