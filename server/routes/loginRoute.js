import jwt from "jsonwebtoken";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config()


const router = Router();
router.post("/login",(req,res)=>{
    // desturing values
    const {req_email,req_password} = req.body;
    if(!req_email){
        return res.status(400).json({
            message:"req_email field is required",
        })
    }

    else if(!req_password){
        return res.status(400).json({
            message:"req_password is required"
        })
    }

    else if(req_password){
        if (req_password.includes("#")) return res.status(400).json({message:"hashtags are not allowed"})
        else if(req_password.includes("1")) return res.status(400).json({message:"number 1 is not allowed"})
    }

    //payload is data inside token 
    const payload={
        username:req_email
    };

    // signing the token 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });   
    res.json({token,"message":"jwt attached"}
    )

})

export default router;