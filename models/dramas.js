const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Schema

const dramaSchema = new Schema({
    name: {type: String, required: true},
    isGreen: Boolean
},
{timestamps: true}
)

const Drama = mongoose.model('Drama', dramaSchema)


//Export Vegetable Model
module.exports = Drama