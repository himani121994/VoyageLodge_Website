const RoomModel = require("../Models/Room.model");
const VehicleModel = require("../Models/Vehicle.model");
const HomeModel = require("../Models/Home.model");
const { cloudinary, storage,storageVehicle } = require('../Cloudinary');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// Multer setup for file upload
const storagehome = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadHome = multer({ storage: storagehome });

const addCarousel = async (req, res) => {
  try {
    let { hadding, description } = req.body;
    let image = req.file ? req.file.path : null;
    console.log(hadding, description, image);
    const home = new HomeModel({ hadding, description, img: image });
    const savehome = await home.save();
    res.status(201).json(savehome);
  } catch (error) {
    console.error("Error saving data: ", error);
    res.status(500).send("Error saving data: " + error.message);
  }
};





//=======Room Upload Method========
const upload = multer({ storage: storage }).array('roomImages', 10);
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
// ============Vehicle Images================
const uploadVehicle = multer({ storage: storageVehicle }).array('vehicleImages', 10);

const UploadVehicle = async (req, res) => {
  uploadVehicle(req, res, async (err) => {
    if (err) {
      console.error("Error uploading vehicle files: ", err);
      return res.status(500).send("Error uploading vehicle files: " + err.message);
    }
    try {
      const { price, brand, vehicletype } = req.body;
      const imgUrls = req.files.map(file => file.path);
      const vehicle = new VehicleModel({ price, brand, vehicletype, images: imgUrls, defaultImage: imgUrls[0] });
      const savevehicle = await vehicle.save();
      res.status(201).json(savevehicle);
    } catch (error) {
      console.error("Error saving data vehicle: ", error);
      res.status(500).send("Error saving data vehicle: " + error.message);
    }
  });
};
// ===========Display All Room============
const Allrooms =async(req,res)=>{
    let rooms = await RoomModel.find();
    res.status(200).json(rooms);
}

const AllVehicle  = async(req,res)=>{
  let vehicle =  await VehicleModel.find();
  res.status(200).json(vehicle);

}

const DeleteeVhicle = async(req,res)=>{
  let id = req.body.id;
  console.log(id);
  let vehicle =  await VehicleModel.findByIdAndDelete(id).then((data)=>{
    res.json("delete succesfully");
    
  })
}

module.exports = {
  UploadRoom,UploadVehicle,Allrooms,AllVehicle,DeleteeVhicle,addCarousel,uploadHome
}
