import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET;
JWT_SECRET.toString();


export async function userlogin(req,res){
    const {email,password,number}= req.body;
    try{
        const doesUserEmailExists = await UserModel.findOne({email:email});
        if(!userEmailExists){
            return res.status(400).json({message:"user doesnt exists, please sign up"})
        }
        const doesPasswordMatch = brcrypt.compare(password,UserModel.hashedPassword)
        if(!doesPasswordMatch){
            return res.status(400).json({message:"incorrect password."})
        }
        
        res.status(200).json("user logged in sucessfully");

    }
}