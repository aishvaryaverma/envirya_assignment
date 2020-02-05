import {
    GET_TIMELIST
} from '../actions/types';

const initialState = {
    loading: true,
    data: []
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_TIMELIST:
            return {
                ...state,
                loading: false,
                data: payload
            }
        default:
            return state;
    }
};