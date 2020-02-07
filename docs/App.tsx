import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from "./containers/Home";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
