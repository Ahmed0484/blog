import express from 'express';
import subjects from './data/subjects.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.get('/',(req,res)=>{
    res.send('API is running...')
});
app.get('/api/subjects',(req,res)=>{
    res.json(subjects)
});
app.get('/api/subjects/:id',(req,res)=>{
    const subject = subjects.find((p)=>p._id === req.params.id);
    res.json(subject)
});
app.listen(port,()=>console.log(`Server running on port ${port}`));