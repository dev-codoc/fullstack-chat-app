<div align="center">
<img width="256" height="256" alt="image" src="https://github.com/user-attachments/assets/20fdcb51-4ece-4117-b65b-5b9f0eb9df91" />

#  Full Stack Chat Application

### Real-time messaging application built with React, Node.js, Socket.IO & MongoDB

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?style=for-the-badge&logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4-black?style=for-the-badge&logo=socket.io)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)

A modern full-stack real-time chat application that enables users to communicate instantly with secure authentication, online user status, profile image uploads, and seamless messaging powered by Socket.IO.

</div>

---

# ✨ Features

- 💬 Real-time one-to-one messaging
- ⚡ Instant communication using Socket.IO
- 🔐 JWT Authentication
- 🍪 Secure Cookie-based Authentication
- 👤 User Registration & Login
- 🖼️ Profile Picture Upload (Cloudinary)
- 🟢 Online / Offline User Status
- 📱 Responsive UI
- 🎨 Modern interface built with DaisyUI & Tailwind CSS
- 🔥 Toast notifications
- 📂 Persistent chat history using MongoDB
- ⚙️ Global state management using Zustand
- 🚀 Fast frontend powered by Vite

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- React Router DOM
- Zustand
- Axios
- Socket.IO Client
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide React

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt.js
- Cookie Parser
- Cloudinary
- CORS
- Dotenv

---

# 📸 Screenshots

<img width="1812" height="813" alt="image" src="https://github.com/user-attachments/assets/b91cff29-d74c-4bd2-b7a9-d1f0bb7d9aa9" />
<img width="1170" height="642" alt="image" src="https://github.com/user-attachments/assets/42155fa2-b78d-4ae9-b676-549d013087bc" />
<img width="1565" height="845" alt="image" src="https://github.com/user-attachments/assets/e0adb906-562e-4a54-8fc5-fcc8878d02cb" />
<img width="1587" height="913" alt="image" src="https://github.com/user-attachments/assets/dec7bd49-2237-48e5-b817-24525019f568" />


---

# 📁 Folder Structure

```
chat-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/chat-app.git
```

```bash
cd chat-app
```

---

# Backend Setup

Move into backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env`

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

Start backend

```bash
npm run dev
```

---

# Frontend Setup

Open another terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Visit

```
http://localhost:5173
```

---

# 🔄 Application Workflow

### Authentication

- User registers
- Password is hashed using Bcrypt
- JWT token is generated
- Token stored securely in cookies

---

### Messaging

- User logs in
- Socket.IO establishes a connection
- Online users are updated instantly
- Messages are delivered in real-time
- Chats are stored in MongoDB

---

### Profile

- Upload profile picture
- Image stored in Cloudinary
- URL saved in MongoDB
- Updated profile visible across chats

---

# 📦 Main Dependencies

## Frontend

- React
- React Router DOM
- Zustand
- Axios
- Socket.IO Client
- Tailwind CSS
- DaisyUI
- React Hot Toast

## Backend

- Express
- MongoDB
- Mongoose
- Socket.IO
- JWT
- BcryptJS
- Cookie Parser
- Cloudinary
- Dotenv
- CORS

---

# 🔒 Authentication

Authentication is implemented using:

- JWT (JSON Web Tokens)
- HTTP-only Cookies
- Password Hashing with BcryptJS
- Protected Routes
- Middleware Authorization

---

# ⚡ Real-Time Communication

Socket.IO powers:

- Live Messaging
- Online User Tracking
- Instant Updates
- Connection Management

---

# ☁️ Cloud Storage

Profile images are uploaded securely using **Cloudinary**.

---

# 👨‍💻 Author

**Devanshu Singh**

Full Stack Developer

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>
