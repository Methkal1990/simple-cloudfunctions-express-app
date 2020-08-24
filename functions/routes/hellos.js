const express = require("express");
const router = express.Router();
const { getHellos } = require("../controllers/hellos");

router.get("/", getHellos);

module.exports = router