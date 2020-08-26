const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const horrorSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    synopsis: {type: String, required: true},
    trailer: {type: String, required: false},
    watched: Boolean
}) 

//  Create Model from our Schema
const Horror = mongoose.model('Horror', horrorSchema);


module.exports = Horror;