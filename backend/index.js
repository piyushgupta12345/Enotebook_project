import express from 'express';
const app = express();

const PORT = 4000;

app.get('/', (req, res)=>{
    res.json({
        success:true,
        msg:  "run successfully !!"
    })
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})