import { GET_GAMERS } from "../types";

const initialState = {
  videogames: [],
};

const videoGames = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMERS:
      return {
        ...state,
        videoGames: action.payload,
      };
    default:
      return state;
  }
};
export default videoGames;
