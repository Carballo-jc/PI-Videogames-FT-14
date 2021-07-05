const express = require("express");
const { getGamer } = require("../controllers");
const { Videogame } = require("../db");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const gamer = await getGamer(req.params.id);
  const {
    id,
    name,
    description,
    released,
    rating,
    background_image,
    platforms,
  } = gamer;
  res.json({
    msg: "Juego encontrado",
    id,
    name,
    description,
    released,
    rating,
    background_image,
    platforms: platforms.map((consola) => consola.platform.name),
  });
});

router.post("/", async (req, res) => {
  const { name, description, released, rating, platforms, genres } = req.body;
  if (!name || !description || !platforms) {
    return res.status(400).json({
      msg: "Error: name, description and platforms son requeridos",
    });
  }
  const createGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
  });
  await createGame.setGenders(genres);
  return res.json(createGame);
});

module.exports = router;
