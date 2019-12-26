import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import "./styles/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListPage from "./pages/ItemListPage";

function App() {
  return (
    <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact strict path="/home" component={ItemListPage} />
        </Switch>
    </Router>
  );
}

export default App;
