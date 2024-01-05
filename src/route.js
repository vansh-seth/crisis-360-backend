// route.js
const express = require("express");
const router = express.Router();
const record = require("./model");

router.use((req, res, next) => {
  // Your middleware logic here
  console.log('Middleware executed');
  next(); // Don't forget to call next to continue processing
});

router.get('/', (req, res) => {
  res.send('Hello from routerModule');
});

router.post('/create', (req, res) => {
  const { name, password, repass, phone, location, id, photo, type } = req.body;

  // Create a new record and save it to the database
  const newSchema = new record({
    name,
    password,
    repass,
    phone,
    location,
    id,
    photo,
    type
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

router.route("/Helpline").get((req,res)=>{
    record.find().then(foundrecord => res.json(foundrecord))
})

router.post("/",async(req,res)=>{
  const{id,password}=req.body
  try{
      const user = await record.findOne({id})
      if(user && user.password === password ){
          res.json('exist')
      }
      else{
          res.json("notexist")
      }
  }
  catch(e){
      res.json("notexist")
  }

})

router.post("/Signup", async (req, res) => {
  const { name,password,repass,phone,location,id,photo,type } = req.body;

  const data = {
    name:name,
    password:password,
    repass:repass,
    phone:phone,
    location:location,
    id:id,
    photo:photo,
    type:type
  };
  try {
    const check = await record.findOne({ id });
    if (check) {
      res.json('exist');
    } else {
      await record.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.json("notexist");
  }
});
module.exports = router;