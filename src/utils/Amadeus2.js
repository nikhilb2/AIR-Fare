const apiKey = "1OdmJZRfKHQZGKsfNYw2zUNlGIkzEqMG";
export const Amadeus = {
  search(origin, destination, date) {
    return fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${apiKey}&origin=${origin}&destination=${destination}&departure_date=${date}`
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.results) {
          console.log(jsonResponse.results)
          return jsonResponse.results.map(flights => {
            //fare: flights.fare.price_per_adult.total_fare,
            const fare = flights.fare.price_per_adult.total_fare;
            return flights.itineraries.map(options =>
              options.outbound.flights.map(flightoptions => {
                //            console.log(flightoptions.aircraft)
                return {
                  aircraft: flightoptions.aircraft,
                  origin: flightoptions.origin.airport,
                  destination: flightoptions.destination.airport,
                  departure: flightoptions.departs_at,
                  arrival: flightoptions.arrives_at,
                  fare
                };
              })
            );
          });
        }
      });
  }
};
