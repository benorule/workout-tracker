const express = require('express');
const router = express.Router();
const workout = require('../models/workout.js'); // import workout.js

// route for insert method
router.post("/api/workouts", function(req, res) {
    workout.insert(["type", "name", "duration", "weight", "reps", "sets"], [req.body.type, req.body.name, req.body.duration, req.body.weight, req.body.reps, req.body.sets], function(result) {
      res.json({ id: result.insertId });
    });
  });

router.get("/api/workouts", function(req, res) {
    workout.find().then(function(response){
      res.json(response)
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

//GET -> Get data
//POST -> Create new object
//PUT -> Modify
//DELETE -> Delete