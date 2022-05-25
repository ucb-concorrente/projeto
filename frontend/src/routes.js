import { Switch, Route } from "react-router-dom";

import {Home} from "./pages/Home";
import {Login} from "./pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Routes;
