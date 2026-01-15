🚀 Storage Management System Backend

A clean, secure, and production-ready backend for a Storage Management System built with Node.js, Express.js, and MongoDB, following Modular Architecture and industry best practices.

This project was developed as a technical assignment and demonstrates real-world backend concepts such as authentication, authorization, protected routes, and file/folder management.


---

✨ Key Highlights

Modular & scalable architecture (Controller–Service–Route–Model)

Secure authentication using JWT

Email verification using OTP (console-based for local development)

Fully protected APIs with middleware

Clean error handling and standardized API responses

Ready for local development and production extension



---

🛠️ Tech Stack

Technology	Purpose

Node.js	Runtime environment
Express.js	Web framework
MongoDB	Database
Mongoose	ODM
JWT	Authentication
Multer	File upload
Postman	API testing



---

📂 Project Structure

storage-management-system/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.routes.js
│   │   │   └── auth.model.js
│   │   │
│   │   ├── folder/
│   │   │   ├── folder.controller.js
│   │   │   ├── folder.service.js
│   │   │   ├── folder.routes.js
│   │   │   └── folder.model.js
│   │   │
│   │   ├── file/
│   │   │   ├── file.controller.js
│   │   │   ├── file.service.js
│   │   │   ├── file.routes.js
│   │   │   └── file.model.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── utils/
│   │   └── response.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
├── .env
├── package.json
└── README.md


---

⚙️ Environment Setup

Create a .env file in the project root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/storage_db
JWT_SECRET=your_super_secret_key

> ⚠️ .env is intentionally excluded from GitHub for security reasons.




---

▶️ Run the Project Locally

npm install
npm start

Server will run at:

http://localhost:5000


---

🔐 Authentication Flow

1. Register User → OTP generated


2. Verify OTP → Email verified


3. Login → JWT token issued


4. Access Protected APIs using Bearer Token



Authorization Header Format

Authorization: Bearer <JWT_TOKEN>


---

📌 Core API Endpoints

Authentication

POST /api/auth/register

POST /api/auth/verify-otp

POST /api/auth/login


Folder (Protected)

POST /api/folders

GET /api/folders

PUT /api/folders/:id

DELETE /api/folders/:id


File (Protected)

POST /api/files/upload

DELETE /api/files/:id

PATCH /api/files/:id/favorite

GET /api/files?date=YYYY-MM-DD



---

🧪 API Testing

All APIs were tested using Postman.

Auth Type: Bearer Token

Token: JWT received from login response



---

✅ Project Status

✔ Authentication & Authorization

✔ OTP Verification Flow

✔ Protected Routes

✔ Folder Management

✔ File Upload Ready

✔ Clean Code & Structure



---

📦 Submission Note

> Implemented a secure Storage Management backend using Node.js, Express.js, and MongoDB. The system supports OTP-based email verification, JWT authentication, protected APIs, and modular architecture. All APIs were tested via Postman.




---

👨‍💻 Author

Zahid Hasan
Backend Developer


---

🔥 Assignment Completed Successfully 🔥
