


// const getGamerAll = () => {
//   const url = `${URL_BASE}games?${API_KEY}&page=${page}`;
//   const videogames = axios.get(url).then((result) =>
//     result.data.results.map((gamer) => {
//       const { id, name, background_image, released, rating, platforms } = gamer;
//       return {
//         id: "API_ID:" + id,
//         name,
//         background_image,
//         released,
//         rating,
//         platforms: platforms.map((consola) => consola.platform.name),
//       };
//     })
//   );
//   return videogames;
// };
// const getGamerAll = async () => {
//   try {
//     let gamerSaves = [];
//       let getFromApi = await axios.get(`${URL_BASE}games?${API_KEY}`);
//       for (let page = 0; page < 5; page++) {
//         let next = getFromApi.data.next;
//         getFromApi = await axios.get(next);
//         let data = getFromApi.data.results;
//         data.map((gamer) => {
//           const { id, name, background_image, released, rating, platforms } =

//             gamer;
//           gamerSaves.push({
//             id: "API_ID:" + id,
//             name,
//             background_image,
//             released,
//             rating,
//             platforms: platforms.map((consola) => consola.platform.name),
//           });
//         });
//       }
//       console.log("total de juegos", gamerSaves.length);
//       return gamerSaves;
//   } catch (error) {
//     console.log('Hubo un error al hacer la consulta')
//     console.log(error);
//   }

// };

 // const gamerDB = await Videogame.findAll({
  //   include: {
  //     model: Gender,
  //     attributes: ["name"],
  //   },
  // });

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