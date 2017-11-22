import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

import Reducers from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

let store = createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let Root = () =>(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(<Root/>,document.querySelector("#root"))
