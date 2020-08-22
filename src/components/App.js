import React from "react";
import Repos from "../containers/Repos";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const setActive = (event) => {
    Array.from(document.getElementsByClassName('active')).map(function(el) { 
        el.classList.remove('active');
        el.classList.remove('show');
        return null;
    });
    document.getElementById(event.currentTarget.id).classList.add("active");
  }
  return (
    <>
      <Router>
        <div>
          <nav fixed="top">
            <ul>
              <li id="li-ultimas" onClick={(event) => setActive(event)} className="active">
                <Link to="/">Home</Link>
              </li>
              <li id="li-politica" onClick={(event) => setActive(event)}>
                <Link to="/politica">Política</Link>
              </li>
              <li id="li-internacionales" onClick={(event) => setActive(event)}>
                <Link to="/internacionales">Internacionales</Link>
              </li>
              <li id="li-tecnologia" onClick={(event) => setActive(event)}>
                <Link to="/tecnologia">Tecnología</Link>
              </li>
              <li id="li-espectaculos" onClick={(event) => setActive(event)}>
                <Link to="/espectaculos">Espectáculos</Link>
              </li>
              <li id="li-deportes" onClick={(event) => setActive(event)}>
                <Link to="/deportes">Deportes</Link>
              </li>
              <li id="li-diseno" onClick={(event) => setActive(event)}>
                <Link to="/diseno">Diseño</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/diseno">
              <h1>Diseño</h1>
              <Repos category="6" />
            </Route>
            <Route path="/deportes">
              <h1>Deportes</h1>
              <Repos category="5" />
            </Route>
            <Route path="/espectaculos">
              <h1>Espectáculos</h1>
              <Repos category="4" />
            </Route>
            <Route path="/tecnologia">
              <h1>Tecnología</h1>
              <Repos category="3" />
            </Route>
            <Route path="/internacionales">
              <h1>Internacionales</h1>
              <Repos category="2" />
            </Route>
            <Route path="/politica">
              <h1>Política</h1>
              <Repos category="1" />
            </Route>
            <Route path="/">
              <h1>Home</h1>
              <Repos category="0" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
