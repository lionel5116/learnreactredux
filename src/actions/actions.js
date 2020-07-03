import * as myActionTypes from '../actionTypes/actionTypes';

export const increment = (seed) => {
    return {
        type: myActionTypes.INCREMENT,
        payload: seed
    };
}

export const decrement = (seed) => {
    return {
        type: myActionTypes.DECREMENT,
        payload: seed
    };
}