import React , {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/containers/home';
import HelpContainer from '../pages/containers/helpContainer.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
function routes() {
  return (
      <section className="container">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route  path="/Help" component={HelpContainer} />
        <Footer/>
       </section>
  );
}
export default routes;