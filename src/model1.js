//model1.js
const mongoose = require('mongoose');

const schema = {
    callf: String,
    callp: String,
    calla: String,
}

const record = mongoose.model("record",schema);

module.exports = record;