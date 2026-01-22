import dotenv from "dotenv"
import mongoose from "mongoose"
import chalk from  "chalk"
dotenv.config()


export default async function connectDb(){
    try{
        const URI = process.env.MONGO_URI
        if(!URI){
            throw new error("MONGO_URI doesnt exist in .env ") 
        }
        URI.toString();
        await mongoose.connect(URI); // since, mongoose.connect is an async function 
        console.log(chalk.green(">>> Mongodb connected sucessfully 🍃"));
    }
    catch(error){
        console.error(chalk.red("****connnection to mongo failed, check env ",error.message));
        process.exit(1);
    }
}

