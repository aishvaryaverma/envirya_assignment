import axios from 'axios';
import { GET_TIMELIST, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const getTimeList = () => async dispatch => {
    if(localStorage.token) {
        // This will set HEADERS for HTTP Request
        setAuthToken(localStorage.token);
        try {
            // Getting user from database (using our backend API)
            // const res = await axios.get(`${process.env.REACT_APP_SERVER}/api/auth`);
            const res = await axios.get('/api/time-entry');

            // Dispatching action and payload to Reducer
            dispatch({
                type: GET_TIMELIST,
                payload: res.data
            });
        } catch (err) {
            // Dispatching action to Reducer
            console.log('Case 1: API Error');
            dispatch({
                type: AUTH_ERROR
            });
        }
    } else {
        console.log('Case 2: No Token in storage');
        dispatch({
            type: AUTH_ERROR
        });
    }
};