const { getGamerAll } = require("../controllers/getGamerAll");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamers = await getGamerAll();
  res.json({
    msg: "GET Gamer Api",
    gamers,
  });
});

module.exports = router;
