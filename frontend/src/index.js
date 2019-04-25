import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { reducer } from "./reducers/campaginReducer.js"
import {createStore} from "redux"
import { Provider } from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.register();
