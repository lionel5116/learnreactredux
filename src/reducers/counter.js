import * as myActionTypes from '../actionTypes/actionTypes';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case myActionTypes.INCREMENT:
          return state + action.payload
        case myActionTypes.DECREMENT:
            return state  - action.payload
          default:
          return state
      }
}


export default counterReducer