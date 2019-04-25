import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { reducer } from "./reducer/reducer.js"
import {createStore} from "redux"
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)
console.log(getStore);
console.log(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.register();
