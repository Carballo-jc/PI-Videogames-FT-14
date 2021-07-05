const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;

const getGamer = (id) => {
  const gamer_url = axios
    .get(`${URL_BASE}games/${id}?${API_KEY}`)
    .then((gamer) => gamer.data);
  return gamer_url;
};
module.exports = {
  getGamer,
};
