const express=require('express');
const Coffee =require('../modules/coffee');


const router=express.Router();

router.post('/', (req,res) =>{
    const post= new Coffee({
      name:req.body.name,
      water: req.body.water,
      milk: req.body.milk,
      coffee:req.body.coffee,
      cups:req.body.cups,
      money:req.body.money
  
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
      const coffees = await Coffee.find();
      res.json(coffees);
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  })
  
  module.exports=router;