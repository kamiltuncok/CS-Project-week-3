const mongoose = require("mongoose")

const coffeeschema=mongoose.Schema({

   name:{
     type:String,
    
   },

    water: {
        type:Number,
       
      },
      milk: {
        type:Number,
       
      },
      coffee: {
        type:Number,
        
      },
      cups: {
        type:Number,
        
      },
      money: {
        type:Number,
        
      }
}

)

module.exports=mongoose.model('coffeecon',coffeeschema);