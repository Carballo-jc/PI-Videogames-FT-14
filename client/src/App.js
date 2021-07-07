import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";
//Components
import PageHome from "./views/PageHome";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container mt-5">
          <PageHome />
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
