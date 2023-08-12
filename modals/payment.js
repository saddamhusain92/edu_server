const mongoose = require('mongoose');

const studentPaySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userid: {
        required: true,
        type: String
    },
    payment: {
        required: false,
        type: Object
    },
    date:{
        type:Date,
        default:Date.now()
        }
})
module.exports = mongoose.model('payment', studentPaySchema)