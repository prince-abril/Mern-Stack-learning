import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRoutes.js";
import { loginUser } from "./controller/userController.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const mongodb = process.env.MONGODB_URL || 'mongodb://localhost:27017/'

mongoose.connect(mongodb).then(() => {
    console.log("Database Successfully connected");
    
    app.listen(PORT, () => {
        console.log(`server started now on 😎 ${PORT}`);
    })
})
.catch((err) => console.error("connection error ", err))

app.use(express.json());

app.use("/user",userRouter);
app.use("/user",loginUser);


app.get("/", (req, res) => {
    res.send("app is working ")
    
})

app.post("/add-task", (req, res) => {
    res.send("insert task")
})





