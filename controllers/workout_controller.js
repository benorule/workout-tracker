const express = require('express');
const router = express.Router();
const burger = require('../models/workout.js'); // import workout.js

// routes and login within them
// route for select method
router.get("/", function(req, res) {
    workout.select(function(data) {
        var hbsObject = {
            workouts: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// route for insert method
router.post("/api/workouts", function(req, res) {
    burger.insert(["type", "name", "duration", "weight", "reps", "sets"], [req.body.type, req.body.name, req.body.duration, req.body.weight, req.body.reps, req.body.sets], function(result) {
      res.json({ id: result.insertId });
    });
  });

// route for update method
router.put("/api/workouts/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    workout.update(
      {
        devoured: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

// export routes
module.exports = router;