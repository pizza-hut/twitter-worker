// index.js
const cron = require("node-cron");
const express = require("express");
const https = require("https");
const fs = require("fs");

app = express();

// Public test route
app.get('/api/test', (req, res)=>{
    let testRes = [
      {
          test: 'successful'
      }
    ];
    console.log(testRes);
    res.json(testRes);
  })

app.post('/api/oauth_token', (req, res)=> {

        res.json("success");
    }    
)

app.listen(3001);
console.log("server is listening at 3001");

// schedule tasks to be run on the server
cron.schedule("*/1 * * * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  var datetime = new Date();
  console.log(datetime.toLocaleTimeString());
  console.log("---------------------");

  /*
  fs.unlink("./error.log", err => {
    if (err) throw err;)
    console.log("Error file succesfully deleted");
  });
  */
});



app.listen("3128");
