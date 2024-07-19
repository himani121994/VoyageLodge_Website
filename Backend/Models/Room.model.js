const mongoose = require("mongoose")

const RoomSchema = mongoose.Schema({
    roomtype:String,
    location:String,
    ac:String,
    images: [String], 
    defaultImage: String 
})

module.exports = mongoose.model("room",RoomSchema);