const HomeModel = require("../Models/Home.model");
const RoomModel = require("../Models/Room.model");

const Get_Carousels_Img =async(req,res)=>{
    let homeCarouselImage =  await HomeModel.find();
    res.status(200).json(homeCarouselImage);
  }

  // Display Room Metode
  const Get_Room =async(req,res)=>{
    let homeRoom =  await RoomModel.find();
    res.status(200).json(homeRoom);
  }
  module.exports={
    Get_Carousels_Img,Get_Room
  }