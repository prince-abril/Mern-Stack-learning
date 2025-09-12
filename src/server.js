import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";
import express from "express"
import User from "./model/user.js";
const app = express();
const PORT = process.env.PORT || 8000;

const mongodb = process.env.MONGODB_URL || 'mongodb://localhost:27017/'
app.use(express.json());

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database Successfully connected")).catch((err) => console.error("connection error ", err))


app.get("/",(req,res)=>{
    res.send("app is working ")
})

app.post("/add-task",(req,res)=>{
    res.send("insert task")
})

// app.post("/user/add-user", async (req,res)=>{
//     try{
//         const {username,email,age,password}= req.body
//         const newUser = new User({username,email,age,password})
//         const savedUser = await newUser.save();
        
//         res.status(201).json(savedUser)
//     }catch(error){
//         res.status(500).json({message:'failed to insert user',error:error.message})
//     }
// });

app.get("/user/all-user", async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({
            message:"failed to fetch users",
            error:error.message
        })
    }
})



app.listen(PORT, () => {
    console.log(`server started now on 😎 ${PORT}`);

})
