import axios from "axios";
import { API_URL, API_URL_GAMER, API_ID_URL } from "../utils";

//types
import { GET_GAMERS, SEARCH_GAMER, GET_GAMER_ID } from "../types";

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
export const getGamerDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_ID_URL}/${id}`);
    dispatch({ type: GET_GAMER_ID, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_GAMER_ID, payload: [] });
  }
};
export function getGamerName(name) {
  return async (dispatch) => {
    const resp = await axios.get(`${API_URL_GAMER}&${name}`);
    console.log(resp);;
    dispatch({
      type: SEARCH_GAMER,
      payload: resp,
    });
  };
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
