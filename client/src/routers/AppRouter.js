import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import GamerDetails from "../components/games/gamesdetails/GamerDetails";
import { VideoGames } from "../components/games/videogames/VideoGames";
import HomeScreen from "../views/HomeScreen";
import Navbar from "../components/navbar/Navbar";
import CreateGamer from "../components/games/creategamer/CreateGamer";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
        <Route  path="/videogames" component={Navbar} />
        {/* <Route  path="/videogame" component={Navbar} /> */}
      <Switch>
        <Route exact path="/videogames" component={VideoGames} />
        <Route  path="/videogame/:id" component={GamerDetails} />
        <Route exact path="/create" component={CreateGamer} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
