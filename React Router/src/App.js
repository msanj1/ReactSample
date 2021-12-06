import { Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Welcome } from "./pages/Welcome";
import { MainHeader } from "./components/MainHeader";
import { ProductDetail } from "./pages/ProductDetail";
import { Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
