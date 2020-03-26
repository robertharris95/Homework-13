const db = require('../models')

module.exports = app => {
app.post('/api/workouts',({body}, res) => {
    db.Exercise.create({})
    .then(dbExercise => {
        res.json(dbExercise);
      })
    .catch(({message}) => {
      console.log(message);
    });
})

app.put('api/workouts/:id',(req, res) =>{
    let id = req.params.id;
    let data = req.body;
    db.Exercise.findOneAndUpdate({_id: id}, {
      type: data.type,
      name: data.name,
      weight: data.weight,
      sets: data.sets,
      reps: data.reps,
      duration: data.duration
    }).then(dbUpdate => {
        res.send(dbUpdate)
    });
});

app.get("/api/workouts", (req,res) => {
    db.Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
});

// app.get("/api/workouts/range", (req,res) => {
//     db.Exercise.find({})
//     .populate("workouts")
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
}