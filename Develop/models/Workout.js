const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day:{
        type:Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [
        {
    type: {
        type:String,
        allownull: false
    },
    name: {
        type:String,
        allownull: false
    },
    duration: {
        type: Number
    },
    weight:{
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }}],

    totalDuration:{
        type:Number
    }
});
const Workout = mongoose.model("Workout", WorkoutSchema)
module.exports = Workout;