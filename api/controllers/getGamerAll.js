require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const url = `http://api.rawg.io/api/games?key=${API_KEY}`;
const getGamerAll = () => {
  const videogames = axios.get(url).then((results) => results.data);
  return videogames;
};

module.exports = {
  getGamerAll,
};
