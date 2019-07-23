let nextFlightId = 0
export const addFlight = (departureLoc, arrivalLoc, flightNum) => ({
  type: 'ADD_FLIGHT',
  id: nextFlightId++,
  departureLoc,
  arrivalLoc,
  flightNum
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PAST: 'SHOW_PAST',
  SHOW_FUTURE: 'SHOW_ACTIVE'
}