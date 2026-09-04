const mongoose = require("mongoose");

const CafeSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  vibe: String 
});

module.exports = mongoose.model("Cafe", CafeSchema);