const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('MongoDB Connected!'))
.catch(err=>console.error('MongoDB Connection Error:', err));

// Sample API
app.get('/', (req,res)=>{
    res.send('Backend running and MongoDB connected');
});

module.exports = app; // Vercel compatible
