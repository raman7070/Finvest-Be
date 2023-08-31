const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  image: String,
  category: String,
  label: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Item', itemSchema);
