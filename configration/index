const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
// star tmongoose db connection
exports.conConfig=()=>{
    const mongoString = process.env.DATABASE_URL
    mongoose.connect(mongoString);
    const database = mongoose.connection
    
    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('database Connected');
    })
}
