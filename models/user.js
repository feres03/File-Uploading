const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    photo: [Buffer]
    // photo: Buffer ==> One image
}, {
    timestamps: true, versionKey: false,
})

module.exports = mongoose.model('user', userSchema)