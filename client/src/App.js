import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";
//Components
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container mt-5">
          <h1>listo</h1>
          <Home />
          {/* <Switch>
            <Route exact path="/productos" component={Products} />
            <Route exact path="/productos/nuevo" component={NewProduct} />
            <Route exact path="/productos/editar/:id" component={EditProduct} />
          </Switch> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
