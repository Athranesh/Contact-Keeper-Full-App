import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
  SET_ALERT, REMOVE_ALERT
} from '../types';
import uuid from 'uuid';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

//Set Alert

const setAlert = (msg, type, timeout = 2000) => {

  dispatch({
    type: SET_ALERT,
    payload: {msg, type}
  });

  setTimeout(() => dispatch({
    type: REMOVE_ALERT,
  }), timeout)
}

const removeAlert = () => {
  dispatch({
    type: REMOVE_ALERT
  })
}
  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert,
      removeAlert
    }}>
      {props.children}
    </AlertContext.Provider>
  )

  }
export default AlertState
