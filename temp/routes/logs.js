const express=require('express');
const Log =require('../modules/log.js');


const router=express.Router();

router.post('/', (req,res) =>{
    const post= new Log({
      action:req.body.action,
      type:req.body.type,
      amount:req.body.amount,
      date:req.body.date
  
    });
  
    post.save()
        .then(data => {
           res.json(data);
        })
        .catch(err => {
          res.json({message:err});
       });
  });

  router.get('/getall', async (req,res) => {
    try {
      const logs = await Log.find();
      res.json(logs);
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  })
  
  module.exports=router;
  
  module.exports=router;