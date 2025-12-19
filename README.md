# Clueso Clone – Full Stack SaaS Application

This project is a **full-stack clone inspired by Clueso**, built as part of an assessment to demonstrate frontend UI cloning, backend API design, authentication, and system integration.

It includes:
- A **public landing page** (marketing website)
- A **protected SaaS dashboard**
- Feedback collection and AI-style insights (mocked)

> ⚠️ This project is for **educational and assessment purposes only** and is **not affiliated with Clueso**.

---

## 🚀 Features

### 🌐 Landing Page
- Clueso-style hero section
- Feature highlights
- Pricing section
- Responsive design using Tailwind CSS
- Call-to-action buttons for signup and login

### 🔐 Authentication
- User signup and login
- JWT-based authentication
- Protected routes on frontend and backend

### 📊 Dashboard
- Sidebar navigation
- Feedback management UI
- AI insights UI
- Responsive layout (desktop & mobile)

### 📝 Feedback System
- Submit feedback
- View feedback list
- Data stored in MongoDB
- Protected APIs

### 🤖 AI Insights (Mock)
- Generates summary, sentiment, and themes
- Implemented using rule-based mock logic
- Clearly documented as mocked functionality

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- CORS enabled

---

<img width="211" height="562" alt="image" src="https://github.com/user-attachments/assets/52e5ed42-cfcb-4a25-ab00-19dd42ec55b8" />


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/Vithobaa/clueso-clone.git
cd clueso-clone

cd backend
npm install

Create a .env file using .env.example:

PORT=3000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
Start backend:

npm run dev
Backend runs at:

http://localhost:3000

## 3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


## Frontend runs at:
http://localhost:5173

## application route
| Route     | Description  |
| --------- | ------------ |
| `/`       | Landing page |
| `/login`  | Login        |
| `/signup` | Signup       |
## protected route
| Route        | Description         |
| ------------ | ------------------- |
| `/dashboard` | Dashboard           |
| `/feedback`  | Feedback management |
| `/insights`  | AI insights         |


## 🔒 Authentication Flow

User signs up or logs in

Backend returns JWT

JWT stored in browser storage

Token sent via Authorization header

Protected routes validated on backend

## 🤖 AI Insights Disclaimer

The AI insights feature uses mocked logic based on keywords and feedback content.

This approach was intentionally chosen to:

Focus on system design and integration

Avoid over-engineering for assessment scope

## 🧪 Testing Notes

Backend APIs tested using Postman

Frontend tested via browser

Protected routes verified by login/logout flow

## 📌 Submission Notes

No sensitive credentials committed

node_modules excluded via .gitignore

Code organized and documented

UI closely follows Clueso design language

##📄 License / Disclaimer

This project is created only for learning and assessment purposes.
All product names and branding belong to their respective owners.
