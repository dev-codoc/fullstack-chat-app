import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import path from "path";

import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { app, server } from "./lib/socket.js"

dotenv.config()


const PORT = process.env.PORT;
const __dirname = path.resolve();
const allowedOrigins = [
    "http://localhost:5173",
    "https://cryptochats.vercel.app",
    "https://bxmwtl3g-5173.inc1.devtunnels.ms",
    "https://chatz-gyef.onrender.com"
]

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist" , "index.html"));
    });
}

server.listen(PORT, () => {
    console.log("Server is running on PORT : " + PORT);
    connectDB()
})