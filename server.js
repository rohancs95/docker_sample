const express=require('express');
const app=express();
const cors=require('cors');
const os=require('os');
app.use(cors());




app.get('/',(req,res)=>{
    const hostname=os.hostname();
    res.send(`Hi, This is ${hostname}`);
})

app.listen(8082,()=>{
    console.log("listening at 8082")
})