const mongoose = require('mongoose');

const studentPaySchema = new mongoose.Schema({
  
    userid: {
        required: true,
        type: String
    },
    name: {
        required: false,
        type: String
    },
    payments: {
        required: false,
        type: Object
    },
    date:{
        type:Date,
        default:Date.now()
        }
})
module.exports = mongoose.model('payment', studentPaySchema)