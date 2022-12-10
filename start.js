// Loads the configuration from config.env to process.env
require('dotenv').config({ path: '.env' });

var express = require('express');
var app = express();
const dbo = require('./db');

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(require('./routes'));

app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

dbo.connectToServer( (err)=> {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});