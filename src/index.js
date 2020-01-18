import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RealTime from './RealTime';
import PriceTicker from './PriceTicker';
import Homepage from './Homepage'

const rootElement = document.getElementById("root");
ReactDOM.render(<Homepage />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
