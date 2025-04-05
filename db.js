var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ronythessery:ronny@cluster0.fx1tiil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 .then(()=>{
    console.log("CONNECTED TO DB")
 })   
 .catch((err)=>(console.log(err)))   

    
    