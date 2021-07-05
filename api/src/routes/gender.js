const express = require("express");
const { getGenderAll } = require("../controllers");
const { Gender } = require("../db");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const GamerGenderAll = await getGenderAll();
  res.json({
    msg: "Gender Games",
    GamerGenderAll,
  });
});
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      msg: "Error: nombre y plataforma son requeridos",
    });
  }
  const createGender = await Gender.create({ name });
  res.json(createGender);
});

module.exports = router;
