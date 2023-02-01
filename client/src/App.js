import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="font-roboto noselect">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mining-eyes-analytics" component={Parent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
