const  express  = require("express");
const { route } = require("./routes/inded");
const router = require("./routes/inded");
const { conConfig } = require("./configration/index");
const dotenv = require('dotenv').config()
var cors = require('cors')
const app = express()
app.use(express.json())
const port = process.env.APP_PORT||5000
conConfig()
app.use(cors())
app.use("/api/v3",router)

app.listen(port,()=>{
    console.log("\x1b[35m",`server 🔥 ` +'\x1b[32m',"running........");
})