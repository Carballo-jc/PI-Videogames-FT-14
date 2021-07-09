import axios from "axios";
import { API_URL } from "../utils";

//types
import { GET_GAMERS, SEARCH_GAMER } from "../types";

export function getGamers() {
  return async (dispatch) => {
    try {
      const resp = await axios.get(API_URL);
      dispatch({
        type: GET_GAMERS,
        payload: resp.data.gamerAll,
      });
    } catch (error) {
      console.log("Hubo un Error al Hacer la peticion");
      console.log(error);
    }
  };
}
export function getGamerId (name){
  return async(dispatch)=>{
    const resp = await axios.get(`${API_URL}&${name}`);
    dispatch({
      type:SEARCH_GAMER,
      payload:resp
    })
  }
}

// export function getGamers() {
//   return function (dispatch) {
//     return fetch(`${API_URL}`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_GAMERS, payload: json });
//       });
//   };
// }
