require("dotenv").config();
const axios = require("axios");
const { Videogame, Gender } = require("../db");
const { API_KEY, URL_BASE } = process.env;

//obtener todos los juegos desde la api

const getGamerAll = async () => {
  let gamerSaves = [];
  let next, getFromApi, data;
  for (let page = 1; page <= 5; page++) {
    if (page === 1) {
      getFromApi = await axios.get(`${URL_BASE}games?${API_KEY}`);
      next = getFromApi.data.next;
    } else {
      getFromApi = await axios.get(next);
      next = getFromApi.data.next;
    };
    data = getFromApi.data.results.map((gamer) => {
      const {
        id,
        name,
        background_image,
        released,
        rating,
        platforms,
        slug,
        genres,
      } = gamer;

      return {
        id,
        name,
        background_image,
        released,
        rating,
        slug,
        genres: genres?.map((genre) => genre.name),
        platforms: platforms?.map((consola) => consola.platform.name),
      };
    });
    console.log("total de juegos", gamerSaves.length);
    gamerSaves = [...gamerSaves, ...data];
  }
  return gamerSaves;
};
//por id
// const getGamerById = async (id) => {
//   let gamer_id;
//   if( id === "string"){
//  gamer_id = await Videogame.findOne({
//   where:{id:id},
//   include:[Gender]
// })
//   }else{
//    gamer_id =  axios.get(`${URL_BASE}games/${id}?${API_KEY}`)
//    .then(gamer => gamer.data);
//   // console.log(gamer_id)
//   }
//   return gamer_id;
// }

const getGamerById = async(id) =>{
  console.log(id)
  let gamer_id;
  try {
    gamer_id = await axios.get(`${URL_BASE}games/${id}?${API_KEY}`);
    gamer_id= gamer_id.data;
  } catch (error) {
    console.log(id)
    gamer_id = await Videogame.findOne({
        where:{id:id},
        include:[Gender]
      });
      gamer_id = gamer_id.dataValues;
    }
    return gamer_id;
}
//obtener por juego
const getGamer = async (name) => {
  let gamerAllSearch = [];
  let gamer_url, next;
  for (let page = 1; page <= 5; page++) {
    if (page === 1) {
      gamer_url = await axios.get(`${URL_BASE}games?${API_KEY}&search=${name}`);
      next = gamer_url.data.next;
    } else {
      gamer_url = await axios.get(`${next}`);
      next = gamer_url.data.next;
    }
    let gamerApi = gamer_url.data.results.map((gamer) => {
      const {
        id,
        name,
        background_image,
        released,
        rating,
        platforms,
        slug,
        genres,
      } = gamer;
      return {
        id,
        name,
        background_image,
        released,
        rating,
        slug,
        genres: genres?.map((genre) => genre.name),
        platforms: platforms?.map((consola) => consola.platform.name),
      };
    });
    gamerAllSearch = gamerAllSearch.concat(gamerApi);
  }
  return gamerAllSearch;
};
//desde la base de datos
const getGamerFromDB = async () => {
  const gamerDB = await Videogame.findAll({
    include: {
      model: Gender,
      attributes: ["name"],
      // attributes: ["gender"],
    },
  });

  const videogamersFromDB = gamerDB.map((result) => {

    const { name, id, background_image, released, rating, platforms, genders } =
      result.dataValues;
    return {
      id,
      name,
      background_image,
      released,
      rating,
      platforms,
      genders,
    };
  });
  return videogamersFromDB;
};
//obtener por genero
const getGenderAll = () => {
  const url = `${URL_BASE}genres?${API_KEY}`;
  const genderGames = axios.get(url).then((result) => result.data.results);
  return genderGames;
};

module.exports = {
  getGamerAll,
  getGenderAll,
  getGamer,
  getGamerFromDB,
  getGamerById,
};
