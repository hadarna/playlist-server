
const mongoose = require('mongoose');

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
        select: false
    },
    dob: {
        type: Date
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const userData = mongoose.model('user', userSchema)

module.exports = userData;
