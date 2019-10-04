import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCOtlUwOAMjOMsD4gWVmmelgsXV20ZBvfw',
      authDomain: 'authentication-b6f94.firebaseapp.com',
      databaseURL: 'https://authentication-b6f94.firebaseio.com',
      projectId: 'authentication-b6f94',
      storageBucket: 'authentication-b6f94.appspot.com',
      messagingSenderId: '537181890611',
      appId: '1:537181890611:web:97b9dcc96cc516f8'
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
