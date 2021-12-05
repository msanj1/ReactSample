import { Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Welcome } from "./pages/Welcome";
import { MainHeader } from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
      </main>
    </div>
  );
}

export default App;
