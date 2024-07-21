const RoomModel = require("../Models/Room.model");
const { cloudinary, storage } = require('../Cloudinary');
const multer = require('multer');
const upload = multer({ storage: storage }).array('roomImages', 10);

//=======Room Upload Method========
const UploadRoom = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading files: ", err);
      return res.status(500).send("Error uploading files: " + err.message);
    }
    try {
      let { roomtype, location, ac } = req.body;
      const imgUrls = req.files.map(file => file.path);
      const room = new RoomModel({ roomtype, location, ac, images: imgUrls, defaultImage: imgUrls[0] });
      const saveroom = await room.save();
      res.status(201).json(saveroom);
    } catch (error) {
      console.error("Error saving data: ", error);
      res.status(500).send("Error saving data: " + error.message);
    }
  });
}

module.exports = {
  UploadRoom
}
