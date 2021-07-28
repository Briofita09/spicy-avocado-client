import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";

import { AuthContextComponent } from "../contexts/authContext";
import ContentTypeSelector from "../routeComponents/ContentTypeSelector";
import PopularContent from "../routeComponents/PopularContent";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/contentTypeSelector"
            component={ContentTypeSelector}
          />
          <Route exact path="/:contentType" component={PopularContent} />
          <Route path="/auth" component={AuthRouter} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
