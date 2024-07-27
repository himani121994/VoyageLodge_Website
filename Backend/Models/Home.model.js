const mongoose = require('mongoose');

const CarouselsSchema = mongoose.Schema({
    hadding : String,
    description: String,
    img: String
})

module.exports = mongoose.model("Carousels",CarouselsSchema)