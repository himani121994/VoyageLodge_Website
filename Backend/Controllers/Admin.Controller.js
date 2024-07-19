const RoomModel = require("../Models/Room.model");

//=======Room Upload Method========
const UploadRoom = async(req,res)=>{
  let {roomtype,location,ac,} = req.body;
   try{
    const room = new RoomModel({roomtype:roomtype,location:location,ac:ac});
     const saveroom = await room.save();
      res.status(201).json(saveroom)
   }
   catch (error) {
   console.error('Error saving technology data:', error)
   }
   

}

module.exports = {
    UploadRoom
}