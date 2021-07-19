import axios from "axios";
import { API_URL, API_URL_GAMER, API_ID_URL, API_GENDER_URL } from "../utils";

//types
import {
  GET_GAMERS,
  SEARCH_GAMER,
  GET_GAMER_ID,
  CREATE_GAME,
  GAMER_ORDER,
  GAMER_GENDER,
  GAMER_ORIGIN
} from "../types";

export const  getGamers =() =>async(dispatch)=>{
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
  
}
export const  postGamer=(values) => async(dispatch)=>{
   try {
    const gamer = await axios.post(API_ID_URL, values);
    console.log('Juego Creado:',gamer.data);
    dispatch({
      type: CREATE_GAME,
      payload: gamer,
    });
   } catch (error) {
     console.log(error);
     console.log('Hubo un error al crear el videoguego')
   }
}
export const getGamerDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_ID_URL}/${id}`);
    dispatch({ type: GET_GAMER_ID, payload: res.data.gamer });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_GAMER_ID, payload: [] });
  }
};
export function getGamerName(name) {
  return async (dispatch) => {
    const resp = await axios.get(`${API_URL_GAMER}${name}`);
    dispatch({
      type: SEARCH_GAMER,
      payload: resp.data.gamerAll,
    });
  };
}
export function getOrder(filter) {
  return (dispatch) => {
    dispatch({
      type: GAMER_ORDER,
      payload: filter,
    });
  };
}

export function getGendersGamer() {
  return async (dispatch) => {
    const genderGamer = await axios.get(`${API_GENDER_URL}`);
    dispatch({
      type: GAMER_GENDER,
      payload: genderGamer.data.GamerGenderAll,
    });
  };
}

export function setGamerOrigin(origin){
    return (dispatch) =>{
      dispatch({
        type:GAMER_ORIGIN,
        payload:origin
      })
    }
}

