import { Switch, Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import NotFoundPage from "./pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/events" component={Event} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="*" exact={true} component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
