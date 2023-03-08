
const User = require('../models/user')

exports.uploadImg = async (req, res) => {
    try {

        if (req.files) {
            res.send({ message: 'file uploaded successfully' })
        } else {
            res.status(400).send({ message: 'file is not an image !' })
        }
    } catch (error) {
        res.status(500).json({ message: 'error server' })
    }
}
