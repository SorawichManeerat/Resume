var express = require("express");
var app = express();
var router = express.Router();
const PORT = process.env.PORT || 8080

app.use("/assets", express.static('./assets/'));

// เรียกไฟล์ index.html
router.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.use("/",router);

app.listen(PORT ,function(){
  console.log('Live at Port ' + PORT);
});