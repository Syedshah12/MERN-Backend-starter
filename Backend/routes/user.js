const express=require('express');
const router=express.Router();



router.get('/',async (req,res)=>{
res.send('checking router [test(1)]');

})


module.exports=router;