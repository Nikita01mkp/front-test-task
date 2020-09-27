import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css';
import {Router} from "react-router-dom"
import {createBrowserHistory} from 'history'
import './index.scss'

import App from './App'

const history = createBrowserHistory()

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('root')
);