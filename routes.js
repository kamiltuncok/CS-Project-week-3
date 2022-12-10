const express = require('express');
const coffees = require('./coffee');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const coffeeRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./db');

// This section will help you get a list of all the records.
coffeeRoutes.route('/buy/:_type/:_amount').get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  const stock= await dbConnect
    .collection('supplies')
    .findOne({})
    const coffeType = _req.params._type;
    const amount = _req.params._amount;
    const cost = coffees[coffeType];

    if (!cost) {
      res.status(404);
      return res.json({
        message: 'Coffee not found',
      });
    }



    if(stock.water < cost.water*amount || stock.coffee < cost.coffee*amount ||  stock.milk < cost.milk*amount || stock.cups < cost.cups*amount) 
    {
        res.status(404)
        return res.json({error: "Not enough stock"})
    }

    await dbConnect.collection('supplies').update({
        _id: stock._id
        },
        {
          $set: {
            'water': stock.water - cost.water*amount,
            'coffee': stock.coffee - cost.coffee*amount,
           'milk': stock.milk - cost.milk*amount,
            'cups': stock.cups - cost.cups*amount,
            "money": stock.money + cost.money*amount

        }},{});
    
        return res.json({ 
        'water': stock.water - cost.water*amount,
        'coffee': stock.coffee - cost.coffee*amount,
       'milk': stock.milk - cost.milk*amount,
        'cups': stock.cups - cost.cups*amount,
        "money": stock.money + cost.money*amount
    })

});



module.exports = coffeeRoutes;