import { GET_GAMERS, SEARCH_GAMER } from "../types";


const initialState = {
  videogames: [],
  onegamer:{}
};

const videoGames = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMERS:
      return {
        ...state,
        videogames: action.payload,
      };
      case SEARCH_GAMER:
        return{
          ...state,
          onegamer: action.payload
        }
    default:
      return state;
  }
};
export default videoGames;
