import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import Router from './Router';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class opHealthMobile extends Component {
  render() {
    console.log("Store",store.getState());
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});