
const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String }
})

const playlistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    songs: {
        type: [songSchema],
        default: undefined
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
})



const playlistData = mongoose.model('playlist', playlistSchema)

module.exports = playlistData;
