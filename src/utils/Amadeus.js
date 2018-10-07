//import SearchBar from '../components/SearchBar/SearchBar'
const api = "1OdmJZRfKHQZGKsfNYw2zUNlGIkzEqMG";
const url =
  "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=";
const autoUrl = "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete/?apikey="
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
  },
  async autocomplete(term) {
    try {
      const response = await fetch(`${autoUrl}${api}&term=${term}&all_airports=true`);
      if (response.ok) {
        const jsonResponse =await response.json();
        console.log(jsonResponse);
        console.log(`${autoUrl}${api}&term=${term}&all_airports=true`)
        if (jsonResponse) {
          return jsonResponse.map(values=>
          values)
        }
      }else{
        throw new Error(`Something went wrong`)
      }
    } catch (error) {
      console.log(error)
    }
  }
};
