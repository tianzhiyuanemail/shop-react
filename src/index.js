/* eslint-disable no-undef */

//common js
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter, Link, Route, Switch} from 'react-router-dom';
//css
import './index.scss';

import 'antd-mobile/dist/antd-mobile.css';
//fun
import * as serviceWorker from './serviceWorker';
//components
import RouterConfig from './router/RouterConfig';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouterConfig />
        </BrowserRouter>
    </Provider>,
// eslint-disable-next-line no-undef
    document.getElementById('root'));
serviceWorker.unregister();
