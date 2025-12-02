const express = require("express");
const dotenv = require("dotenv");
const cors = require ("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors())


// running the server
app.listen(process.env.PORT||5000,()=>{console.log(`>>server started at: http://localhost:${process.env.PORT||5000}`)});