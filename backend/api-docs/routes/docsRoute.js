const express = require("express");
const router = express.Router();

const swaggerDocument = require("../swagger.json");
const players = require("../players.json");

/**
 * @Routes "/api-docs"
 */

router.get("/swagger.json", (req, res) => res.json(swaggerDocument));
router.get("/players.json", (req, res) => res.json(players));

module.exports = router;
