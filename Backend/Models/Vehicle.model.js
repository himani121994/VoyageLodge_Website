const mongoose = require("mongoose")

const VehicleSchema = mongoose.Schema({
    price:Number,
    brand:String,
    vehicletype:String,
    images: [String], 
    defaultImage: String 
})

module.exports = mongoose.model("vehicle",VehicleSchema);