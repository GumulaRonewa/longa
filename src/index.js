import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideDrawer from './pages/SideDrawer';
import Linked from './pages/home/Linked'
import Welcome from './pages/home/Welcome'
import * as serviceWorker from './serviceWorker';
import FinalRun from './pages/sidebar/FinalRun'
ReactDOM.render(
  <React.StrictMode>
  
    <FinalRun />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
