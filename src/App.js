import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/home/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScrollToTopBtn from "./components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <ScrollToTopBtn />
      </Router>
    </Provider>
  );
}

export default App;
