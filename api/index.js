//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require("./src/app.js");
const { conn, Gender, Videogame } = require("./src/db.js");
const { getGenderAll } = require("../api/src/controllers");
const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;

const PORT = process.env.PORT || 3001;



// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(PORT, async () => {
    console.log(`servidor listening at:${PORT}`); // eslint-disable-line no-console

    
    const gamerOne = await Videogame.create({
      name: "frefire",
      description: "juego movil",
      platforms: "xbox",
      background_image:
        "https://phantom-marca.unidadeditorial.es/cdecffb1a8da6f48222d54dd97cb3c40/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/27/16168527358201.jpg",
    });
    const gamerTwo = await Videogame.create({
      name: "frefire2",
      description: "juego movil apuebas",
      platforms: "play",
      background_image:
        "https://depor.com/resizer/jEVIIBcmHSfe-vlAU-m-uzxQycM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EL4BGOSECFBUHKIEVLBMAZJS4M.jpg",
    });
    const gender1 = await Gender.create({
      name: "a",
    });
    const gender2 = await Gender.create({
      name: "b",
    });
    gamerOne.setGenders(gender1);
    gamerOne.setGenders(gender2);
    gamerTwo.setGenders(gender2);
    // precargar generos a la BD
    const allGenres = await getGenderAll();
    allGenres.forEach(async (genre) => {
      await Gender.create({
        name: genre.name,
      });
    });
  });


});
