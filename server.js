import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/' , (req , res)=>{
    res.status(200).send('server is running');
})
app.get('/hello' , (req , res)=>{
    res.status(200).json('hello from the EC2 instance');
})
app.listen(PORT , ()=>{
    console.log(`server is running on PORT : ${PORT}`);
})