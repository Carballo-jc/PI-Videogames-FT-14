import { GET_GAMERS, SEARCH_GAMER, GET_GAMER_ID } from "../types";

const initialState = {
  videogames: [],
  onegamer: {},
};

const videoGames = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMERS:
      return {
        ...state,
        videogames: action.payload,
      };
    case SEARCH_GAMER:
      return {
        ...state,
        onegamer: action.payload,
      };
    case GET_GAMER_ID:
      return {
        ...state,
        onegamer: action.payload,
      };
    default:
      return state;
  }
};
export default videoGames;
