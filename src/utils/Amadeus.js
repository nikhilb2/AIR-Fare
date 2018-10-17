//import SearchBar from '../components/SearchBar/SearchBar'
const api = "1OdmJZRfKHQZGKsfNYw2zUNlGIkzEqMG";
const url =
  "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=";
const autoUrl = "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete/?apikey="
const hotelUrl= "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport/?apikey="
let serachWithReturn;
export const Amadeus = {
  async search(origin, destination, date, returnOrOneWay,returnDate,currency,directFlight,adults,childs,infants) {
    try {
      if (returnOrOneWay) {
        serachWithReturn=""
      } else {
        serachWithReturn="&return_date="+returnDate
      }
      const response = await fetch(
        `${url}${api}&origin=${origin}&destination=${destination}&departure_date=${date}${serachWithReturn}&currency=${currency}&nonstop=${directFlight}&adults=${adults}&children=${childs}&infants=${infants}`
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
  },
  async SearchHotels(location, checkin, checkout) {
    try {
      const response = await fetch (`${hotelUrl}${api}&location=${location}&check_in=${checkin}&check_out=${checkout}`);
      if (response.ok) {
        const jsonResponse =await response.json();
        console.log(jsonResponse);
        if (jsonResponse.results) {
        return jsonResponse.results;
      } else {
        return [];
      }
      }else{
        throw new Error(`Something went wrong`)
      }

    }catch (error) {
      console.log(error)
    }
  },
/*  async iata(code) {
    try {
      const response = await fetch (`https://iatacodes.org/api/v7/airlines?iata_code=${code}`,{
          headers:{Authorization:`Bearer d251a93e-be22-4f8b-be46-5dce573211fd`},
        origin:'http://localhost:3000/',
      mode:'no-cors'});
      if (response.ok) {
        const jsonResponse =await response.json();
        console.log(jsonResponse);
        if (jsonResponse) {
        return jsonResponse;
      } else {
        return [];
      }
      }else{
        throw new Error(`Something went wrong`)
      }

    }catch (error) {
      console.log(error)
    }
  },*/
};
