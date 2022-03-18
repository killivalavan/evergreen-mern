import Header from "./Components/Header";
import GlobalStyle from "./Components/GlobalStyle";
import LandingPage from "./Pages/LandingPage";
import ProductView from "./Components/ProductView";
import Cart from "./Components/Cart";
import { Switch, Route } from "react-router";
import LoginScreen from "./Components/LoginScreen";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/Product/:id">
          <ProductView />
        </Route>
        <Route path="/cart/:id?">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
