const express = require("express");
const {
  getGamerById,
  
} = require("../controllers");
const { Videogame,Gender} = require("../db");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  const gamer = await getGamerById(id);
  res.json({
    msg: "Juego encontrado",
     gamer
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
      background_image,
      platforms,
    });
    const gender = await Gender.findAll({
      where:{name:genres}
    })
        await createGame.setGenders(gender);
        return res.json(createGame);
  } catch (error) {
    console.log('hubo un error al crear el juego')
    next(error);
    
  }
})


module.exports = router;
