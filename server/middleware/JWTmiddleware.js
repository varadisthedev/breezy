import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const JWT_SECRET = process.env.JWT_Secret_Key;
const verifyJWT = (req, res, next) => {
  try{
    
  }
};

export default verifyJWT;