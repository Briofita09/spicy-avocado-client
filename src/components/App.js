import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";

import { AuthContextComponent } from "../contexts/authContext";
import ContentTypeSelector from "../routeComponents/ContentTypeSelector";
import PopularContent from "../routeComponents/PopularContent";
import ContentForum from "../routeComponents/contentForum";
import ContentDescription from "../routeComponents/ContentDescription";
import Profile from "../routeComponents/Profile";
import Watchlist from "../routeComponents/Watchlist";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/contentTypeSelector"
            component={ContentTypeSelector}
          />
          <ProtectedRoute
            exact
            path="/:contentType"
            component={PopularContent}
          />
          <ProtectedRoute
            exact
            path="/:contentType/pop"
            component={PopularContent}
          />
          <ProtectedRoute
            exact
            path="/:contentType/:contentId"
            component={ContentDescription}
          />
          <ProtectedRoute
            exact
            path="/:contentType/:contentId/comments"
            component={ContentForum}
          />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/watchlist" component={Watchlist} />
          <ProtectedRoute path="/auth" component={AuthRouter} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
