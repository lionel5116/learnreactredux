import * as myActionTypes from '../actionTypes/actionTypes';

const loggedReducer = (state = false,action) => {
    switch(action.type) {
        case myActionTypes.SIGN_IN:
          return !state
        default:
          return state
      }
}

export default loggedReducer