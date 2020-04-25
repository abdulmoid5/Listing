import {ActionTypes} from '../utils/ActionTypes';
import {config} from '../api/config';
import BaseApi from '../api/BaseApi';

const {REST_APIs} = config;
const {SET_SELECTED_USER, SET_ALL_USERS} = ActionTypes;

export const setSelectedUser = userObj => {
  return {
    type: SET_SELECTED_USER,
    payload: userObj,
  };
};

export const getUsers = () => dispatch => {
  const getUsersAPI = `${REST_APIs.User.Get}`;
  BaseApi.get(getUsersAPI, null, response => {
    const {data} = response;
    dispatch({
      type: SET_ALL_USERS,
      payload: data,
    });
  });
};
