function combinedReducer(state, action) {
    switch (action.type) {
      case 'A_TYPICAL_ACTION': {
        return {
          a: sliceReducerA(state.a, action),
          b: sliceReducerB(state.b, action)
        }
      }
      case 'SOME_SPECIAL_ACTION': {
        return {
          // specifically pass state.b as an additional argument
          a: sliceReducerA(state.a, action, state.b),
          b: sliceReducerB(state.b, action)
        }
      }
      case 'ANOTHER_SPECIAL_ACTION': {
        return {
          a: sliceReducerA(state.a, action),
          // specifically pass the entire state as an additional argument
          b: sliceReducerB(state.b, action, state)
        }
      }
      default:
        return state
    }
  }