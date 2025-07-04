import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
    return userSocketMap[userId]; // Return the socket ID for the given user ID
}


// USED TO STORE ONLINE USERS
const userSocketMap = {}

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId) {
        userSocketMap[userId] = socket.id; // Store the socket ID for the user
    }

    // Emit the current online users to the newly connected client
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        delete userSocketMap[userId]; // Remove the user from the online users map
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit the updated online users
    });
});

export { io, app, server };