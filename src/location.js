//location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  coordinates: {
    lat: String,
    lng: String
  }
});

const record = mongoose.model('record', locationSchema);

module.exports = record;
