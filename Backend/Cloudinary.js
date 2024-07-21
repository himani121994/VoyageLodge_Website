const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dctquzaur',
  api_key: '974455467272462',
  api_secret: 'IRcre-9Fa5YRc_P8fvmdNg2xJxU'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'VoyageLodge_images',
    format: async (req, file) => 'jpg',
    public_id: (req, file) => Date.now() + '-' + file.originalname,
  },
});

module.exports = {
  cloudinary,
  storage,
};



