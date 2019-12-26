import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import "./styles/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListPage from "./pages/ItemListPage";

function App() {
  return (
    <Router history={history}>
        <Switch>
          <Route exact strict path="/" component={ItemListPage} />
        </Switch>
    </Router>
  );
}

export default App;
