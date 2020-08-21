const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const comedySchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Comedy = mongoose.model('Comedy', comedySchema);

// Export Fruit Model
module.exports = Comedy;