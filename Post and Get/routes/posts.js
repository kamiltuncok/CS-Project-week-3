const express=require('express');
const Post =require('../modules/Post.js');

const router=express.Router();


router.post('/', (req,res) =>{
  const post = new Post({
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
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})


module.exports=router;