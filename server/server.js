import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// importing routes
import healthRoute from "./routes/healthRoute.js"
import loginRoute from "./routes/loginRoute.js"
dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;


// middlewares for project
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// addding cors 
app.use(cors({
    origin:true,
    request:true
}))

app.use('/health',healthRoute);
app.use("/login",loginRoute)
app.use('/',(req,res)=>{
    console.log("someone called default route");
    res.status(200).json({message:"api is alive"});
})

// listening on a port , starting a server
app.listen(PORT,()=>{
    console.log(`>Server started at port: ${PORT}`)
})