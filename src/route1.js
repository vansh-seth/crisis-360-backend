// route1.js
const express = require("express");
const router = express.Router();
const record = require("./model1");

router.use((req, res, next) => {
  // Your middleware logic here
  console.log('Middleware executed');
  next(); // Don't forget to call next to continue processing
});

router.get('/', (req, res) => {
  res.send('Hello from routerModule');
});

router.post('/message', (req, res) => {
  const { call } = req.body;

  // Create a new record and save it to the database
  const newSchema = new record({
    callf: call === 'fire' ? 'Fire' : '',
    callp: call === 'police' ? 'Police' : '',
    calla: call === 'ambulance' ? 'Ambulance' : '',
  });

  newSchema.save()
    .then(savedRecord => {
      res.json(savedRecord); // Respond with the saved record
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

router.route("/Profile").get((req,res)=>{
    record.find().then(foundrecord => res.json(foundrecord))
})

module.exports = router;