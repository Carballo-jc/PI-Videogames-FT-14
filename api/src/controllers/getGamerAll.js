require("dotenv").config();
const axios = require("axios");
const { Videogame, Gender } = require("../db");
const { API_KEY, URL_BASE } = process.env;

const url = `${URL_BASE}games?${API_KEY}`;
const getGamerAll = () => {
  const videogames = axios.get(url).then((result) =>
    result.data.results.map((gamer) => {
      const { id, name, background_image, released, rating, platforms } = gamer;
      return {
        id,
        name,
        background_image,
        released,
        rating,
        platforms: platforms.map((consola) => consola.platform.name),
      };
    })
  );

  return videogames;
};

const getGamerFromDB = () => {
  const gamerDB = Videogame.findAll({
    include: {
      model: Gender,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = {
  getGamerAll,
  getGamerFromDB,
};
