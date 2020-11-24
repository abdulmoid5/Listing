import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/routing/Route';
import store from './src/utils/ListingStore';
import BaseApi from './src/api/BaseApi';

export default class App extends React.Component {
  constructor() {
    super();
    BaseApi.setDefaults();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}