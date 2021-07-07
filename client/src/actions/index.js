import axios from "axios";
import { API_URL } from "../utils";

//types
import { GET_GAMERS } from "../types";

export function getGamers() {
  return async (dispatch) => {
    try {
      const resp = await axios.get(API_URL);
      dispatch({
        type: GET_GAMERS,
        payload: resp.data,
      });
    } catch (error) {
      console.log("Hubo un Error al Hacer la peticion");
      console.log(error);
    }
  };
}
