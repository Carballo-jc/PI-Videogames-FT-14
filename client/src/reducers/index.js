import { GET_GAMERS, SEARCH_GAMER, GET_GAMER_ID ,CREATE_GAME,GAMER_ORDER,GAMER_GENDER} from "../types";
import { getGamerGenders } from '../selectores/getGamerGenders';
import { getMoviesOrder } from '../selectores/getMoviesOrder';


const initialState = {
  onegamer: [],
  gamerViews:[]
};

const videoGames = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMERS:
      return {
        ...state,
        gamerViews: action.payload,
        // gamerViews:action.payload,
        };
      
    case SEARCH_GAMER:
      return {
        ...state,
        gamerViews: action.payload,
      };
    case GET_GAMER_ID:
      return {
        ...state,
        onegamer: action.payload,
      };
      case CREATE_GAME:
        return {
          ...state,
          gamerViews: [...state.gamerViews, action.payload],
        };
        case GAMER_ORDER:
          return {
            ...state,
            gamerViews:[...getMoviesOrder(action.payload, state.gamerViews)]
          };
          case GAMER_GENDER:
            return {
              ...state,
              gamerViews: [
                ...getGamerGenders(action.payload, state.gamerViews),
              ],
            };
    default:
      return state;
  }
};
export default videoGames;
