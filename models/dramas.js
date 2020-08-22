const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const dramaSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    watched: Boolean
}) 

//  Create Model from our Schema
const Drama = mongoose.model('Drama', dramaSchema);


module.exports = Drama;