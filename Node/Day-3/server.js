const express = require("express");

const bodyParser=require("body-parser");
const PORT=3000;
const app=express();

app.use(bodyParser.json());

let items=[
    {id:1,name:"item 1"},
    {id:2,name:"item 2"}
];
app.post("/items",(req,res) =>{
    const newItem=req.body;
    if(!newItem.id || !newItem.name){
        return res.status(500).send("item must have an id and name");
    }
    items.push(newItem);
    res.status(201).send(`Item added with id:${newItem.id}`);
});
app.get("/getItem",(req,res) =>{
    res.json(items)
});







app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
 });