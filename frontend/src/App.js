import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import {Provider as AlertProvider} from 'react-alert';
import Alerts from "./components/layout/Alerts";
import routes from "./routes";

import AlertTemplate from 'react-alert-template-basic';

import withTracker from "./withTracker";
import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from "./actions/auth";



import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const alertOptions = {
  timeout: 3000,
  position: 'top center',
  containerStyle: {
    zIndex: 9999
  }
};

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router basename={process.env.REACT_APP_BASENAME || ""}>
              <Switch>
                {routes.map((route, index) => {
                  return (
                    <PrivateRoute
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={withTracker(props => {
                        return (
                          <route.layout {...props}>
                            <Alerts/>
                            <route.component {...props} />
                          </route.layout>
                        );
                      })}
                    />
                  );
                })}
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
              </Switch>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
