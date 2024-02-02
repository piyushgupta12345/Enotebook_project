import express from 'express';
import connectToDb from './database/db.js';
import 'dotenv/config';
import authRoute from './routes/authRoute.js';
// import notesRoute from './routes/notesRoute.js';

const app = express();

const PORT = process.env.PORT || 7000;

// database call
connectToDb();

// middleware
app.use(express.json())

// define routes
app.use('/api/auth', authRoute)
// app.use('/api/notes', notesRoute)


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