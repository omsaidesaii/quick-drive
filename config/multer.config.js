const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary.config');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'drive-clone',
    resource_type: 'raw',
    public_id: (req, file) => `${Date.now()}-${file.originalname}`
  }
});

module.exports = multer({ storage });
