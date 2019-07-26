const combinedReducer = combineReducers({
    a: sliceReducerA,
    b: sliceReducerB
  })
  
  function crossSliceReducer(state, action) {
    switch (action.type) {
      case 'SOME_SPECIAL_ACTION': {
        return {
          // specifically pass state.b as an additional argument
          a: handleSpecialCaseForA(state.a, action, state.b),
          b: sliceReducerB(state.b, action)
        }
      }
      default:
        return state
    }
  }
  
  function rootReducer(state, action) {
    const intermediateState = combinedReducer(state, action)
    const finalState = crossSliceReducer(intermediateState, action)
    return finalState
  }