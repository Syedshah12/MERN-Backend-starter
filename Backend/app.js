const express = require('express');
require('./db/connect.js')
const app=express();
const PORT=process.env.PORT || 5000;
require('dotenv').config()
const userRoutes=require('./routes/user.js');
const morgan=require('morgan');
const cors=require('cors');




//middlewares
app.use(cors());
app.options('*',cors());
app.use(morgan('tiny'));
app.use(express.json());




//Routes
app.use('/api/v1',userRoutes);




//Server running on PORT 5000
// http://localhost:5000
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})