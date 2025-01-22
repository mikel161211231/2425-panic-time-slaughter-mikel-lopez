const express = require("express");
const router = express.Router();

const playersServices = require("../controllers/playersController")

router.get("/", playersServices.getAllPlayers);

module.exports = router;