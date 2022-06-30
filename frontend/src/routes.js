import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Event } from "./pages/Event";
import { SignUp } from "./pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/event" component={Event} />
      <Route path="/cadastro" component={SignUp} />
    </Switch>
  );
};

export default Routes;
