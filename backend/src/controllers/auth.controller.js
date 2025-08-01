import { generateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import cloudinary from "../lib/cloudinary.js"

export const signup = async (req, res) => {
    const { fullname, email, password } = req.body
    try {

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        //hash password
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "Email already exists" });

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        })

        if (newUser) {
            // generate JWT token here
            generateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilepic: newUser.profilepic,
            })
        } else {
            res.status(400).json({ message: "Invalid user data" })
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilepic: user.profilepic,
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
        res.status(500).json({ message: "Internal Server Error" })

    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })

    }
}

export const updateProfile = async (req, res) => {
    try {
        const { profilepic } = req.body;
        const userId = req.user._id

        if (!profilepic) {
            return req.status(400).json({ message: "Profile Pic is required" })
        }

        const uploadResponse = await cloudinary.uploader.upload(profilepic);
        const updatedUser = await User.findByIdAndUpdate(userId, { profilepic: uploadResponse.secure_url }, { new: true });

        res.status(200).json(updatedUser)
    } catch (error) {
        console.log("Error in update profile", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal server error" })
    }
}