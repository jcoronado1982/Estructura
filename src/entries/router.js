import React , {Fragment} from "react";
import { Route , Switch, Redirect} from "react-router-dom";
import HandleError from '../error/containers/handle-error';
import Home from '../pages/containers/home';
import HelpContainer from '../pages/containers/helpContainer.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Register from '../register/components/register';
import '../styles/styles.css';
import NotFound from '../components/not-found';
import Loading from '..//loading/components/loading';

import Info from '../info/components/info';
import Login from '../login/components/login';

import Borrow from '../borrow/components/borrow';
import InAuction from '../auction/components/auction';
import Exchange from '../exchange/components/exchange';
import FeesComm from '../fees and commissions/components/feescommissions';
import LoanSimulator from '../simulator/components/simulator';
import Chat from '../chat/components/chat';
import Contact from '../contact/components/contact';
import About from '../about/components/about';
import Risks from '../risks/components/risks';

function routes() {
  return (
      <section className="container">
        <HandleError>
          <Loading/>
          <Header/>
          <div className="item contenido">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Help" component={HelpContainer} />
              <Route exact path="/Info" component={Info} />

              <Route exact path="/Borrow" component={Borrow} />
              <Route exact path="/Auction" component={InAuction} />
              <Route exact path="/Exchange" component={Exchange} />
              <Route exact path="/Fees_and_commissions" component={FeesComm} />
              <Route exact path="/Simulator" component={LoanSimulator} />
              <Route exact path="/Chat" component={Chat} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Risks" component={Risks} />

              {/* <Route exact path="/Login" component={Login} /> */}

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