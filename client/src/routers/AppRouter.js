import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import GamerDetails from "../components/games/videogamesdetails/GamerDetails";
import { VideoGames } from "../components/games/videogames/VideoGames";
import HomeScreen from "../views/HomeScreen";

function AppRouter() {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/videogames" component={VideoGames} />
          <Route exact path="/videogames/:name" component={GamerDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
