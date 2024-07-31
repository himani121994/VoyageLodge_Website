const HomeModel = require("../Models/Home.model");
const RoomModel = require("../Models/Room.model");
const VehicleModel = require("../Models/Vehicle.model")
const Get_Carousels_Img =async(req,res)=>{
    let homeCarouselImage =  await HomeModel.find();
    res.status(200).json(homeCarouselImage);
  }

  // Display Room Metode
  const Get_Room =async(req,res)=>{
    let homeRoom =  await RoomModel.find();
    res.status(200).json(homeRoom);
  }
  
  const Get_Vehicle = async(req,res)=>{
    let Vehicle =  await VehicleModel.find();
    res.status(200).json(Vehicle);
  }
  module.exports={
    Get_Carousels_Img,Get_Room,Get_Vehicle
  }