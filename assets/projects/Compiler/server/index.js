const express = require("express");
var request = require('request');
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.post("/compile", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    var data = {
      script :data,
      language: language,
      versionIndex: "1",
      clientId: "57ef80f16f110c77cf83cfa7da9eceb8",
      clientSecret:"6a88c9e5ffd9dfd6cb9d95f6d212d5d26e80efd6b8510ca4d5ad4c462b78696b"
  };
  let config={
      url: 'https://api.jdoodle.com/v1/execute',
      method: "POST",
      json: data
  };
 //calling the code compilation API
 Axios(config)
 .then((body)=>{
     res.send(body.output)
     console.log(body.output)
 }).catch((error)=>{
     console.log(error);
 });
  
  
  })
 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
 