const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter the type of workout"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of workout"
  },
  duration: {
    type: Number,
    required: "Enter workout time"
  },
  weight: {
    type: Number,
    required: "Enter weight used"
  },
  reps: {
    type: Number,
    required: "Enter amount of reps done"
  },
  sets: {
    type: Number,
    required: "Enter amount of sets done"
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
