const express = require("express");
const {
  getGamerById,
  getGamerFromDB,
  getGamerAll,
  getGamer,
} = require("../controllers");
const { Videogame } = require("../db");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const gamer = await getGamerById(req.params.id);

  res.json({
    msg: "Juego encontrado",
     gamer,
  });
});


router.post("/", async (req, res,next) => {
  try {
    const {
      name,
      description,
      released,
      rating,
      genres,
      platforms,
      background_image,
    } = req.body;
    const createGame = await Videogame.create({
      name,
      description,
      released,
      rating,
      genres,
      background_image,
      platforms,
    });
        // await createGame.setGenders(genres);
        return res.json(createGame);
  } catch (error) {
    next(error);
    
  }
})


module.exports = router;
