const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const GamersRouter = require("./gamers");
const GamerRouter = require("./gamer");
const GenderRouter = require("./gender");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", GamersRouter);
router.use("/videogame", GamerRouter);
router.use("/genres", GenderRouter);







module.exports = router;
