import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk"
dotenv.config()

// importing routes
import healthRoute from "./routes/healthRoute.js"
import loginRoute from "./routes/loginRoute.js"
import connectDb from "./utils/connectToMongo.js"

const app = express();
const PORT = process.env.PORT || 8000;

connectDb();

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
app.use("/register",registerRoute);


app.use('/',(req,res)=>{
    console.log("someone called default route");
    res.status(200).json({message:"api is alive"});
})

// listening on a port , starting a server
app.listen(PORT,()=>{
    console.log(chalk.blue(`>>> Server started at port: ${PORT}`))
})