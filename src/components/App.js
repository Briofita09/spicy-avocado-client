import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";

import { AuthContextComponent } from "../contexts/authContext";
import Home2 from "../routeComponents/Home2";
import Movies from "../routeComponents/Movies";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/auth" component={AuthRouter} />
          <ProtectedRoute exact path="/home" component={Home2} />
          <ProtectedRoute exact path="/movies" component={Movies} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
