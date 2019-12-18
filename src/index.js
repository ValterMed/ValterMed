import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux"; //ya no lo usaria con la refactorizacion
import { Provider } from "react-redux";
// import reducers from './redux/reducers'; //esta importacion espera un archivo llamado index en esa ruta
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

//const store = createStore(reducers, {}, applyMiddleware(promise,reduxThunk,logger)) //ya no se usaria

import store from "./redux/store/createStore"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
