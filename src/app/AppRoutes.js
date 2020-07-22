import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const SavedProjectContainer = lazy(() =>
  import("./saved-projects/SavedProjectContainer")
);
const Dropdowns = lazy(() => import("./saved-projects/Dropdowns"));
const Typography = lazy(() => import("./saved-projects/Typography"));
const AccountDetails = lazy(() =>
  import("./accountsManagement/AccountDetails")
);

const SavedSpecifiersContainer = lazy(() =>
  import("./save-specifiers/SavedSpecifiersContainer.js")
);

const BasicTable = lazy(() => import("./tables/BasicTable"));

const FontAwesome = lazy(() => import("./icons/FontAwesome"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./user/Error404"));
const Error500 = lazy(() => import("./user/Error500"));

const BlankPage = lazy(() => import("./user/BlankPage"));

const Login = lazy(() => import("./user/Login"));
const Register1 = lazy(() => import("./user/Register"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={Spinner}>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <PrivateRoute
            path="/saved-projects"
            component={SavedProjectContainer}
          />
          <PrivateRoute path="/basic-ui/dropdowns" component={Dropdowns} />
          <PrivateRoute path="/basic-ui/typography" component={Typography} />
          <PrivateRoute path="/account-details" component={AccountDetails} />

          <PrivateRoute
            path="/saved-specifiers"
            component={SavedSpecifiersContainer}
          />

          <PrivateRoute path="/tables/basic-table" component={BasicTable} />

          <PrivateRoute path="/icons/font-awesome" component={FontAwesome} />

          <PrivateRoute path="/charts/chart-js" component={ChartJs} />
          <PrivateRoute path="/user-pages/error-404" component={Error404} />
          <PrivateRoute path="/user-pages/error-500" component={Error500} />

          <PrivateRoute path="/user-pages/blank-page" component={BlankPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register1} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
