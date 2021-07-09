import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";
//Components
import AppRouter from "./routers/AppRouter";

function GamerApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default GamerApp;
