const express = require('express');
const router = express.Router();
const workout = require('../models/workout.js'); // import workout.js
const path = require("path");

// routes and login within them
// route for select method
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// export routes
module.exports = router;