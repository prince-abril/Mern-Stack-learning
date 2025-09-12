import { JsonWebTokenError } from "jsonwebtoken";
import User from "../model/user";

export const createUser = async (req,res)=>{
    try{
        const {username, email, age, password} = req.body;
        const existUser = await User.findOne({
            email:email
        })

        if(existUser){
            return res.json({
                message:"user is already exist"
            })
        }

        const newUser = new User.create({
            username:username,
            email:email,
            age:age,
            password:password
        })

        await newUser.save();

        res.json({
            message : "User Created SuccessFUlly",
            data:newUser,
            success:true,
            error:false
        })

    }catch{

    }
}