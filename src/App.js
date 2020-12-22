import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Navbar from "./components/Navbar";
import "./App.css";
import "./assets/css/bootstrap.min.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const Redirectx = ({ history }) => {
    history.push("/customize");
    return <Customize />;
  };
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Redirectx} />
          <Route path="/customize" component={Customize} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/thankyou" component={Thankyou} />
        </Switch>
      </Fragment>
    </Provider>
  );
};

export default withRouter(App);
