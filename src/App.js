import React from "react";
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";

import { store } from "./app/store";
import Home from "./manage/pages/home";
import NoMatch from "./manage/pages/noMatch";
import Pupils from "./manage/pages/roles/pupils";
import Professors from "./manage/pages/roles/professors";
import Admin from "./manage/pages/roles/admin";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />

          <Route exact path="/professors" component={ Professors } />
          <Route exact path="/admin" component={ Admin } />

          <Route exact path="/pupils" component={ Pupils } />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;