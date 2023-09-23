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
app.put("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
  
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) {
      return res.status(404).send("Item not found!");
    }
  
    if (!updatedItem.name) {
      return res.status(500).send("Item must have a name!");
    }
  
    items[index].name = updatedItem.name;
    res.status(201).send(`Item updated with ID: ${itemId}!`);
  });
  
  app.delete("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
  
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) {
      return res.status(404).send("Item not found!");
    }
  
    items.splice(index, 1);
    res.status(201).send(`Item deleted with ID: ${itemId}!`);
  });







app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
 });