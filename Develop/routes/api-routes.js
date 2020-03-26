const db = require('../models')
var mongojs = require('mongojs')
let aggregate;
module.exports = app => {
  aggregate=0;
app.post('/api/workouts',({body}, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
    .catch(({message}) => {
      console.log(message);
    });
})

app.put('/api/workouts/:id',(req, res) => {
    let id = mongojs.ObjectId(req.params.id);
    let data = req.body;
    aggregate += data.duration;
    db.Workout.findOneAndUpdate(
      {
        _id: id
      },
      { 
      $push: {exercises: data},
      totalDuration: aggregate
      },
      {
        new: true
      }
    ).then(dbUpdate => {
        res.send(dbUpdate)
    });
});

app.get("/api/workouts/", (req,res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
});

app.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data)
    })
    });
}