import React from "react";
import "./App.scss";
import NavbarHeader from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavbarHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
