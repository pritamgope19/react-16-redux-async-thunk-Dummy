import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/Counter';
import Counter from './containers/Counter/Counter';
import Navbar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Popular from './components/popular/Popular';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* MiddleWare: logger */
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[middleWare]: dispatching', action);
      const result = next(action);
      console.log('[middleWare]: nextState', store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  /**/ counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Banner />
        <Popular />
      </div>
    );
  }
}
/**/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
