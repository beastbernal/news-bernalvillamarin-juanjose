import React from "react";
import Search from "../containers/Search";
import Repos from "../containers/Repos";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Search user={moment().utcOffset(0, true).format("yyyy-MM-DD")} />
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/politica">Política</Link>
            </li>
            <li>
              <Link to="/internacionales">Internacionales</Link>
            </li>
            <li>
              <Link to="/tecnologia">Tecnología</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/politica">
            <Repos category="1"/>
          </Route>
          <Route path="/internacionales">
            <div>hola</div>
            <Repos category="2"/>
          </Route>
          <Route path="/tecnologia">
            <Repos category="3"/>
          </Route>
        </Switch>
      </div>
    </Router>
    
    
  </div>
);

export default App;
