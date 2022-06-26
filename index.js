import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Popular from './components/popular/Popular';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataReducer } from './store/reducers/Reducer';

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
const middleware = [thunk];
const rootReducer = combineReducers({
  /**/ apiData: dataReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

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
