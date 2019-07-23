const flights = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FLIGHT':
        return [
          ...state,
          {
            id: action.id,
            departureLoc: action.departureLoc,
            arrivalLoc: action.arrivalLoc,
            flightNum: action.flightNum,
            past: false
          }
        ]
      default:
        return state
    }
  }
  
  export default flights