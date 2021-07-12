const { getGamerAll, getGamer,getGamerFromDB } = require("../controllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamerAll;
  
  const { name } = req.query;
  console.log(name);
  if (name !== undefined) {
    console.log("entro");
    gamerAll = await getGamer(name);
  } else {
    const gamerFromDB = await getGamerFromDB();
    const gamerFromApi = await getGamerAll();
    gamerAll = [...gamerFromDB,  ...gamerFromApi];
  }
  console.log(gamerAll.length);
  res.json({
    msg: "GET Gamer Api and DB",
    gamerAll,
  });
});

module.exports = router;
