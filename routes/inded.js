const  express  = require("express");
const router = express.Router();
const { studentadd,studenAttend, studenList, studentUpdate,studenPayment,studenPay,PaymentList } = require("../controllers/");
router.get("",(req,res)=>{
    res.send("api working")
})
router.post('/admission',studentadd)
router.post('/payment/:_id',studenPayment)
router.get('/paystudent',PaymentList)
router.post('/pay/:_id',studenPay)
router.post('/admission/:_id',studentUpdate)
router.post('/attend/:_id',studenAttend)
router.get('/students',studenList)


module.exports = router;

