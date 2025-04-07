// importing express 
var express = require(`express`);
require('./db')
var emp= require(`./model/employee`);
var app = express();

var port = 3999;
// middleware
app.use(express.json());
app.post('/',(req,res)=>{
    try {
        emp(req.body).save();
        res.send("data added to db") 
    } catch (error) {
        res.send(error)
        
    }
})
// get
app.get(`/`,async(req,res)=>{
    try {
        var data = await emp.find();
        res.send(data)  
    } catch (error) {
        res.send(error)    
    }
})
// delete
app.delete(`/:id`,async(req,res)=>{
    try {
        console.log(req.params.id)
        await emp.findByIdAndDelete(req.params.id);
        res.send("data delected")
        // res.send(id)
    } catch (error) {
        res.send(error)
        
    }
})
app.put('/:id',async(req,res)=>{
    try {
        await emp.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        res.send(error)
        
    }
})
// to get data
app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
    
})
