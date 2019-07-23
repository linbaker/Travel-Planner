import { FlightsVisibilityFilters } from '../actions'

const flightsVisibilityFilter = (state = FlightsVisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default flightsVisibilityFilter