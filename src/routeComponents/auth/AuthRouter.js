import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Home from "../Home";

function AuthRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/signup`} component={Signup} />
        <Route path={`${props.match.path}/login`} component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
