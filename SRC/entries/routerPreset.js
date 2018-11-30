import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeLayout from '../pages/containers/homeContainer';
import ContactosContainer from '../pages/containers/contactosContainer.js';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Loan MainPage</Link>
          </li>
          <li>
            <Link to="/Contactos">Contactos</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomeLayout} />
        <Route path="/Contactos" component={ContactosContainer} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;