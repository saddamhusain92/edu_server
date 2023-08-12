const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    class: {
        required: true,
        type: String
    },
    father: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: String
    },
    attend: {
        required: false,
        type: Object
    },
    date:{
        type:Date,
        default:Date.now()
        }
})
module.exports = mongoose.model('student', studentSchema)