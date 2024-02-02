import express from 'express';
import connectToDb from './database/db.js';
import 'dotenv/config'
const app = express();

const PORT = process.env.PORT || 7000;

// database call
connectToDb();

// api
app.get('/', (req, res)=>{
    res.json({
        success:true,
        msg:  "run successfully !!"
    })
})

// port listening
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})