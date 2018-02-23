import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDygX2ZyX0kx-S8ZMdeGF5xRTK9WE0uN0I",
      authDomain: "signin-bb3fd.firebaseapp.com",
      databaseURL: "https://signin-bb3fd.firebaseio.com",
      projectId: "signin-bb3fd",
      storageBucket: "signin-bb3fd.appspot.com",
      messagingSenderId: "828773676350"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
