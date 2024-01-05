//server1.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./route1');
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://sethvansh2004:vanshseth2004@cluster0.cpobkly.mongodb.net/rescue?retryWrites=true&w=majority&appName=AtlasApp")

app.use("/",router);


app.listen(5000,function(){
    console.log("express server is running on port 5000");
})