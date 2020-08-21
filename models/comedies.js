const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const comedySchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    watched: Boolean
}) 

//  Create Model from our Schema
const Comedy = mongoose.model('Comedy', comedySchema);


module.exports = Comedy;