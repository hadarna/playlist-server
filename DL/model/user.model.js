require("./playlist.model")

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String }
})

const userSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    playlists: [{
        id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "playlist",
            required: true
        },
        name: {
            type: String
        },

    }],
    lastSong: [songSchema],
    dob: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const userData = mongoose.model('user', userSchema)

module.exports = userData;
