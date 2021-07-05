require("dotenv").config();
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const url = `${URL_BASE}genres?${API_KEY}`;
const getGenderAll = () => {
  const genderGames = axios.get(url).then((result) => result.data);
  return genderGames;
};
getGenderAll();

module.exports = { getGenderAll };
