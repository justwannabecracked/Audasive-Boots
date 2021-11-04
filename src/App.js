import "./App.css";
import "react-bootstrap";
import SideNav from "./components/SideNav";
import LandingPage from "./components/LandingPage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductState from "./context/product/ProductState";

function App() {
  return (
    <ProductState>
      <Router>
        <div className="App">
          <div className="container">
            <SideNav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/shop" component={Shop} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductState>
  );
}

export default App;
