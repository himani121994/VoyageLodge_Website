const HomeModel = require("../Models/Home.model");

const Get_Carousels_Img =async(req,res)=>{
    let homeCarouselImage =  await HomeModel.find();
    res.status(200).json(homeCarouselImage);
  }

  module.exports={
    Get_Carousels_Img
  }