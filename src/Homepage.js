import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PriceTicker from './PriceTicker';
import About from './About';

export default function Homepage() {
    return (
        <Router>
         <div>
           <ul>
             <li>
              <Link to="/">Home</Link>
             </li>
             <li>
              <Link to="/about">About</Link>
             </li>             
             <li>
              <Link to="/ticker">Ticker Feed</Link>
             </li>
          </ul>
          <hr />
          <Switch>
            <Route path = '/About'>
              <About/>
            </Route>
            <Route path = "/ticker">
              <PriceTicker/>
            </Route>
          </Switch>

        </div>
         

        </Router>
    );
}