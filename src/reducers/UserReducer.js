import {ActionTypes} from '../utils/ActionTypes';

const {SET_ALL_USERS, SET_SELECTED_USER} = ActionTypes;
const INITIAL_STATE = {
  usersList: [],
  selectedUser: null,
};

export default (state = INITIAL_STATE, action) => {
  const {payload} = action;
  switch (action.type) {
    case SET_ALL_USERS:
      return {...state, usersList: payload};
    case SET_SELECTED_USER:
      return {...state, selectedUser: payload};

    default:
      return state;
  }
};
