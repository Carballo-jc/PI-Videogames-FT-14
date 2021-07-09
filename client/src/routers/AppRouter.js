import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import GamerDetails from "../components/games/videogamesdetails/GamerDetails";
import { VideoGames } from "../components/games/videogames/VideoGames";
import HomeScreen from "../views/HomeScreen";
import Navbar from "../components/navbar/Navbar";

function AppRouter() {
  return (
    <Router>
      <div className="container mt-5">
          <Route exact path="/" component={HomeScreen} />
        <Route exact path="/videogames" component={Navbar} />
        <Switch>
          <Route exact path="/videogames" component={VideoGames} />
          <Route exact path="/videogame/:id" component={GamerDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
