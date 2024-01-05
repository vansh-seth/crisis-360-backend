//model.js
const mongoose = require('mongoose');

const schema = {
    name: String,
    password: String,
    repass: String,
    phone: Number,
    location: String,
    id:Number,
    photo: String,
    type: String,
}

const record = mongoose.model("record",schema);

module.exports = record;