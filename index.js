var express = require('express');
require(`./db`)
var app = express();
var port = 4000;


// api to add data to db
var sModel=require(`./model/sample`)
// middlewar to add to db
app.use(express.json());

app.post(`/`,(req,res)=>{
    try {
        sModel(req.body).save();
        res.send("Data added")
        
    } catch (error) {
        res.send(err)
        
        
    }
})
app.get(`/`,async(req,res)=>{
    try {
        var data = await sModel.find();
        res.send(data)  
    } catch (error) {
        res.send(error)    
    }
})
// delete
app.delete(`/:id`,async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel.findByIdAndDelete(req.params.id);
        res.send("data delected")
        // res.send(id)
    } catch (error) {
        res.send(error)
        
    }
})
app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})
