const { getGamerAll } = require("../../controllers/getGamerAll");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let gamers = await getGamerAll();
  res.json({
    msg: "GET Gamer Api",
    gamers,
  });
});

router.get("/:name", (req, res) => {
  res.json({
    msg: "GET gamer por name de la api",
  });
});
router.get("/videogame/:id", (req, res) => {
  res.json({
    msg: "GET gamer por ID",
  });
});
router.get("/:gender", (req, res) => {
  res.json({
    msg: "GET gamer por genero",
  });
});

module.exports = router;
