const express = require("express");
const fs = require("fs");
const path = require("path");
const outputFolder="./output";
if(!fs.existsSync(outputFolder)){
   fs.mkdirSync(outputFolder);
}

const app=express();
 const PORT=3000;
 app.get('/home',(req,res)=>{
   res.send("hello");
 });
  
 app.get('/createfile',(req,res) =>{
   const currentTime= new Date();
   const year=currentTime.getFullYear().toString();
   const month=(currentTime.getMonth()+1).toString();
   const date=currentTime.getDate().toString();
   const hours=currentTime.getHours().toString();
   const mins=currentTime.getMinutes().toString();
   const secs=currentTime.getSeconds().toString();

   const dateTimeForFileName=`${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`;
   const filePath=path.join(outputFolder,dateTimeForFileName);

   fs.writeFileSync(filePath,currentTime.toISOString(),(err) =>{
      if(err){
         res.status(500).send(`error create:${err}`);
      }
      res.send(`file create successfully at :${filePath}`);
   });

});
 app.get("/getFiles", (req, res) => {
   fs.readdir(outputFolder, (err, files) => {
     if (err) {
       res.status(500).send(`Error reading directory: ${err}`);
       return;
     }
     console.log("files", files);
     const textFiles = files.filter((file) => path.extname(file) === ".txt");
 
     res.json(textFiles);
   });
});

 app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
 });