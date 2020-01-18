import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PriceTicker from '../PriceTicker/PriceTickerPage';
import About from '../About/AboutPage';
import LogPage from '../LogPage/LogPage';

export default function Homepage() {
    return (
        <Router>
         <div>
           <ul>
             <li>
              <Link to="/">Home</Link>
             </li>
             <li>
              <Link to="/logs">Logs</Link>
             </li>             
             <li>
              <Link to="/ticker">Ticker Feed</Link>
             </li>
          </ul>
          <hr />
          <Switch>
            <Route path = '/logs'>
              <LogPage/>
            </Route>
            <Route path = "/ticker">
              <PriceTicker/>
            </Route>
          </Switch>

        </div>
         

        </Router>
    );
}