const { getGamerAll, getGamer,getGamerFromDB } = require("../controllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamerAll;
   const { name } = req.query;
   if (name) {
     const gamerDB = await getGamerFromDB();
     const gamerApi = await getGamer(name);
     //  gamerAll = await getGamer(name);
     gamerAll = [...gamerApi, ...gamerDB];
   } else {
     const gamerFromDB = await getGamerFromDB();
     const gamerFromApi = await getGamerAll();
     gamerAll = [...gamerFromDB, ...gamerFromApi];
   }
  res.json({
    msg: "GET Gamer Api and DB",
    gamerAll,
  });
});

module.exports = router;
