
# Storage Management System Backend

A **modular, production-ready backend** built with **Node.js, Express.js, and MongoDB** following clean architecture and industry best practices.

This project is designed to support a file storage system UI (as provided in Figma) by exposing secure, scalable REST APIs.

---

## ✨ Features

### 🔐 Authentication
- User signup with email & password
- Login with JWT
- Email verification using OTP (mocked)
- PIN setup & verification

### 📁 Folder Management
- Create folder
- Rename folder
- Delete folder
- Get folder list

### 📄 File Management (Image / PDF / Note)
- Upload image
- Upload PDF
- Create text note
- Rename file
- Duplicate file
- Delete file
- Favorite / Unfavorite file
- Generate shareable link

### 📅 Calendar
- Fetch files by date (YYYY-MM-DD)

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT** for authentication
- **Bcrypt** for hashing
- **Multer** for file uploads

---

## 📁 Project Structure

```text
storage-management-system/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── modules/
│   │   ├── auth/
│   │   ├── file/
│   │   └── folder/
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── utils/
│   │   └── response.js
│   ├── app.js
│   └── server.js
├── package.json
├── README.md
└── .env (ignored)
