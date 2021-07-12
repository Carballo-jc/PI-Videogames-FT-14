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
      const { id, name, background_image, released, rating, platforms, slug } =
        gamer;

      return {
        id,
        name,
        background_image,
        released,
        rating,
        slug,
        platforms: platforms.map((consola) => consola.platform.name),
      };
    });
    console.log("total de juegos", gamerSaves.length);
    gamerSaves = [...gamerSaves, ...data];
  }
  return gamerSaves;
};
//por id
const getGamerById = (id) => {
  const gamer_id = axios.get(`${URL_BASE}games/${id}?${API_KEY}`)
  .then(gamer => gamer.data);
  return gamer_id;
}
//obtener por juego
const getGamer = (name) => {
  const gamer_url = axios
    .get(`${URL_BASE}games?${API_KEY}&search=${name}`)
    .then((gamer) => gamer.data.results);
  return gamer_url;
};
//desde la base de datos
const getGamerFromDB = async () => {
  const gamerDB = await Videogame.findAll({
    include: {
      model: Gender,
      attributes: ["name"],
    },
  });

  const videogamersFromDB = gamerDB.map((result) => {
    return {
      ...result.dataValues,
      id: "DB_ID:" + result.dataValues.id,
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
