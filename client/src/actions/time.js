import axios from 'axios';
import { GET_TIMELIST, AUTH_ERROR, REMOVE_ALL_ALERT } from './types';
import { setAlert } from '../actions/alert';
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

export const createTimeEntry = formData => async dispatch => {
    if(localStorage.token) {
        try {
            const config = {
                headers: {
                  'Content-type': 'application/json'
                }
            };
            const body = JSON.stringify(formData);
            const res = await axios.post('/api/time-entry', body, config);
    
            // Showing alerts msg to user
            dispatch(setAlert(res.data.msg, 'success'));
        } catch (err) {
            dispatch({ type: REMOVE_ALL_ALERT });
            if(err.response.status === 400) {

                const errors = err.response.data.errors;
                if(errors) {
                    errors.forEach(error => dispatch(setAlert(error.msg, 'danger') ))
                }
            }
        }
    } else {
        console.log('Case 2: No Token in storage');
        dispatch({
            type: AUTH_ERROR
        });
    }
};