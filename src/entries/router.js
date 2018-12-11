import React , {Fragment} from "react";
import { Route , Switch, Redirect} from "react-router-dom";
import HandleError from '../error/containers/handle-error';
import Home from '../pages/containers/home';
import Help from '../pages/containers/helpContainer.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Register from '../register/components/register';
import '../styles/styles.css';
import NotFound from '../components/not-found';
import Loading from '../components/loading';
function routes() {
  return (
      <section className="container">
        <HandleError>
          <Loading/>
          <Header/>
          <div className="item contenido">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Help" component={Help} />
              <Route exact path="/Register" component={Register} />
              <Redirect from="/registrar" to="Register" />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer/>
        </HandleError>
       </section>
  );
}
export default routes;