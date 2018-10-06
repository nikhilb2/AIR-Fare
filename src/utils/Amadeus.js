//import SearchBar from '../components/SearchBar/SearchBar'
const api = "1OdmJZRfKHQZGKsfNYw2zUNlGIkzEqMG";
const url =
  "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=";
export const Amadeus = {
  async search(origin, destination, date) {
    try {
      const response = await fetch(
        `${url}${api}&origin=${origin}&destination=${destination}&departure_date=${date}`
      );
      console.log(response);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.results) {
          return jsonResponse.results;
        } else {
          return [];
        }
      } else {
        throw new Error(`Something went wrong, please try again.`);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
