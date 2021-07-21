const { getGamerAll, getGamer,getGamerFromDB } = require("../controllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamerAll;
   const { name } = req.query;
   if (!name) {
     const gamerDB = await getGamerFromDB();
     const gamerApi = await getGamerAll();
     //  gamerAll = await getGamer(name);
     gamerAll = [...gamerDB,...gamerApi];
   } else {
     const gamerFromDB = await getGamerFromDB();
     const gamerFromApi = await getGamer(name);
     gamerAll = [...gamerFromApi,...gamerFromDB,];
   }
  res.json({
    msg: "GET Gamer Api and DB",
    gamerAll,
  });
});

module.exports = router;
