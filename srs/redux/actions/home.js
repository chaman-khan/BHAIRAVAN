import * as types from '../actions/types';
import {baseUrl} from '../../constants/constants';
import {useSelector} from 'react-redux';
import {authLoad, loginSuccess} from './auth';

export const activeScreen = params => ({
  type: types.ACTIVE_SCREEN,
  payload: params,
});

export const getAllUserRequests = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/user/getAllRequestsByUser/${data.data._id}/all`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const NGOgetAcceptedRequests = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/ngo/getAllNgoUserRequests/${data.data._id}/accepted`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const saveData = data => {
  return {
    type: types.DATA,
    payload: data,
  };
};
