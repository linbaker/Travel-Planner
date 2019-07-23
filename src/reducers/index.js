import { combineReducers } from 'redux'
import flights from './flights'
import flightsVisibilityFilter from './flightsVisibilityFilter'

export default combineReducers({
  flights,
  flightsVisibilityFilter
})