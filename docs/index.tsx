// import { render } from "react-dom";
// import React from "react";
// import App from "./components/App";

// import "./index.css";
// import "../scss/main.scss";
// // import "./prism-okaidia.css";

// render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { theme } from "./materialui/theme";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </MuiThemeProvider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from "./containers/Home";
import App from "./App";

function Hello() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => history.push("/hello/react-router?message=hooks#test")}
      >
        Next
      </button>
    </div>
  );
}

function HelloSomeone() {
  const history = useHistory();
  const location = useLocation();
  const { name } = useParams();
  return (
    <div>
      <h1>Hello {name} !</h1>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
