let nextFlightId = 0
export const addFlight = (departureLoc, arrivalLoc, flightNum) => ({
  type: 'ADD_FLIGHT',
  id: nextFlightId++,
  departureLoc,
  arrivalLoc,
  flightNum
})

export const setFlightsVisibilityFilter = filter => ({
  type: 'SET_FLIGHTS_VISIBILITY_FILTER',
  filter
})

export const FlightsVisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PAST: 'SHOW_PAST',
  SHOW_FUTURE: 'SHOW_FUTURE'
}