const mongoose = require("mongoose")

const idolSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model("Idol", idolSchema)