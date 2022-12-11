const mongoose = require("mongoose")

const coffeeschema=mongoose.Schema({

   name:{
     type:String,
     required:true,
   },

    water: {
        type:Number,
        required:true,
      },
      milk: {
        type:Number,
        required:false,
      },
      coffee: {
        type:Number,
        required:true,
      },
      cups: {
        type:Number,
        required:true,
      },
      money: {
        type:Number,
        required:true,
      }
}

)

module.exports=mongoose.model('coffeecon',coffeeschema);