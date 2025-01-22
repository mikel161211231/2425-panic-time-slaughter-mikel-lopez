const express = require("express");
const router = express.Router();

const timeController = require("../controllers/timeController")

router.get("/", timeController.getTimeHistory);
router.post("/", timeController.executeDayActions);

module.exports = router;