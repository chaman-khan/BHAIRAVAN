import * as types from '../actions/types';
import {useSelector} from 'react-redux';
import {authLoad, loginSuccess} from './auth';
import {baseUrl} from '../../constants/constant';

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

export const saveData = data => {
  return {
    type: types.DATA,
    payload: data,
  };
};

export const addOwner = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-and-owner-name`, requestOptions)
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
export const addPictures = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-and-owner-image`, requestOptions)
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
export const addAge = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-age`, requestOptions)
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
export const addgender = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-gender`, requestOptions)
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
export const addBreed = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-breed`, requestOptions)
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
export const addPreference = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}store-dog-preference`, requestOptions)
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
export const updateProfile = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token.token}`);
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}update-profile`, requestOptions)
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
