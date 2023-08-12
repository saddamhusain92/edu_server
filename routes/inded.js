const  express  = require("express");
const router = express.Router();
const { studentadd,studenAttend, studenList, studentUpdate,studenPayment } = require("../controllers/");
router.get("",(req,res)=>{
    res.send("api working")
})
router.post('/admission',studentadd)
router.post('/payment/:_id',studenPayment)
router.post('/admission/:_id',studentUpdate)
router.post('/attend/:_id',studenAttend)
router.get('/students',studenList)


module.exports = router;

