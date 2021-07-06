require("dotenv").config();
const axios = require("axios");
const { Videogame, Gender } = require("../db");
const { API_KEY, URL_BASE } = process.env;

//obtener todos los juegos desde la api
const getGamerAll = async () => {
  let gamerSaves = [];
  for (let page = 1; page <= 5; page++) {
    const consulta = await axios.get(
      `${URL_BASE}games?${API_KEY}&page=${page}`
    );
    const datos = consulta.data.results;
    datos.map((gamer) => {
      const { id, name, background_image, released, rating, platforms } =
         gamer;
      gamerSaves.push({
        id: "API_ID:" + id,
          name,
          background_image,
          released,
          rating,
          platforms: platforms.map((consola) => consola.platform.name),
      });
    });
  }
  console.log(gamerSaves.length);
  return gamerSaves;
};
// const getGamerAll = () => {
//   for (let page = 1; page <= 5; page++) {
//     const url = `${URL_BASE}games?${API_KEY}&page=${page}`;
//     const videogames = axios.get(url).then((result) =>
//       result.data.results.map((gamer) => {
//         const { id, name, background_image, released, rating, platforms } =
//           gamer;
//         return {
//           id: "API_ID:" + id,
//           name,
//           background_image,
//           released,
//           rating,
//           platforms: platforms.map((consola) => consola.platform.name),
//         };
//       })
//     );
//     return videogames;
//   }
 

// };
//obtener por juego
const getGamer = (name) => {
  const gamer_url = axios
    .get(`${URL_BASE}games/${name}?${API_KEY}`)
    .then((gamer) => gamer.data);
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
};
