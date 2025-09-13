import User from "../model/userModel.js";
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {
        const { username, email, age, password } = req.body;
        const existUser = await User.findOne({
            email: email
        })

        if (existUser) {
            return res.json({
                message: "user is already exist"
            })
        }

        const newUser = new User.create({
            username: username,
            email: email,
            age: age,
            password: password
        })

        await newUser.save();

        res.json({
            message: "User Created SuccessFUlly",
            data: newUser,
            success: true,
            error: false
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message,
            message: "Something went wrong"
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            return res.json({ message: "Enter Email" })
        }
        if (!password) {
            return res.json({ message: "Enter Email" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ message: "Invalid Credentials", success: false, error: true });
        }

        const isPasswordValid = await user.validatePassword(password);
        if (!isPasswordValid) {
            return res.json({ message: "Invalid Password", success: false, error: true });
        }

        const jwToken = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );
        const cookieOptions = {
            httpOnly: true,
            secure: false,
            sameSite: "Lax"
        };

        return res.json({
            message: "login successfully",
            user: {
                email: user.email,
                id: user._id,
            },
            success: true,
            error: false,

        })



    } catch (error) {
        return res.status(500).json({
            error: error.message,
            message: "Something went wrong",
        });
    }

}