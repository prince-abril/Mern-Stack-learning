import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    age:{
        type:Number,
        min:0
    },
    password:{
        type:String,
        required:true,
        min: 6
    }


})

userSchema.index({name:1});

userSchema.methods.validatePassword = async function (password) {
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(password,passwordHash);
    return isPasswordValid
}

userSchema.pre('save',async function (next) {
    const user = this;
    if (user.isModified('password')) return next();

    try{
        const hashedPassword = await bcrypt.hash(user.password,10)
        user.password = hashedPassword
        
        next();
    }catch(error){
        next(error)
    }
})

// Create a model from the schema
const User = mongoose.model('User',userSchema)

export default User;
