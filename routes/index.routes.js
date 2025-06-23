const express = require('express');
const upload = require('../config/multer.config');
const router = express.Router();
const filesModel = require('../models/files.model');
const authMiddleware = require('../middleware/auth');
const cloudinary = require('../config/cloudinary.config');

// GET: Home page - list all user files
router.get('/home', authMiddleware, async (req, res) => {
  const userFiles = await filesModel.find({ user: req.user.userId });
  res.render('home', { files: userFiles });
});

// POST: Upload a file
router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
  const newFile = await filesModel.create({
    path: req.file.filename, // Cloudinary public ID
    originalname: req.file.originalname,
    user: req.user.userId
  });

  res.redirect('/home');
});

// GET: Download file securely
router.get('/download/:id', authMiddleware, async (req, res) => {
  try {
    const file = await filesModel.findOne({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!file) {
      return res.status(404).json({ message: 'Unauthorized or file not found' });
    }

    const cloudinaryPublicId = file.path;

    const downloadUrl = cloudinary.url(cloudinaryPublicId, {
      secure: true,
      resource_type: 'raw', 
      flags: 'attachment',
      attachment: file.originalname
    });

    res.redirect(downloadUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Download failed', error: err.message });
  }
});

// GET: Delete a file
router.get('/delete/:id', authMiddleware, async (req, res) => {
  try {
    const file = await filesModel.findOne({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!file) {
      return res.status(404).send('File not found');
    }

    await cloudinary.uploader.destroy(`drive-clone/${file.path}`, {
      resource_type: 'raw' // PDF & other raw file types
    });

    await filesModel.deleteOne({ _id: file._id });

    res.redirect('/home');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong while deleting the file');
  }
});

module.exports = router;
