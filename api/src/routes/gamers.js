const { getGamerAll, getGamer,getGamerFromDB } = require("../controllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamerAll;
  
  const { name } = req.query;
  console.log(name);
  if (name !== undefined) {
    console.log('entro')
    gamerAll = await getGamer(name);
  } else {
    const gamerFromApi = await getGamerAll();
    const gamerFromDB = await getGamerFromDB();
    gamerAll = [...gamerFromApi, ...gamerFromDB];
  }
  console.log(gamerAll.length);
  res.json({
    msg: "GET Gamer Api and DB",
    gamerAll,
  });
});

module.exports = router;
