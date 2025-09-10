import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";
import express from "express"
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



app.listen(PORT, () => {
    console.log(`server started now on 😎 ${PORT}`);

})
