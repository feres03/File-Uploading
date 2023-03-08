const express = require("express");
const router = express.Router();
const { uploadImg } = require("../controllers/uploadApi")
const upload = require('../middlewares/multer')

router.post('/upload', upload.array('photo', 3), uploadImg)
// router.post('/upload', upload.single('photo'), uploadImg) : one image



module.exports = router;