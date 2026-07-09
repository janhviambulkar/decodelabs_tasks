# 🚀 CareerConnect – DecodeLabs Internship (Week 2)

![GitHub](https://img.shields.io/badge/Project-Week%202-blue)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Node.js-green)
![Express.js](https://img.shields.io/badge/Express.js-black)

> **Week 2 Submission - DecodeLabs Full Stack Development Internship**

CareerConnect is a modern Job & Internship Portal developed as part of the DecodeLabs Full Stack Development Internship. This week's focus was integrating a dynamic backend using **Node.js**, **Express.js**, and **REST APIs**, enabling the frontend to fetch and display live job listings.

---

# 📖 Project Overview

CareerConnect is designed to bridge the gap between students and recruiters by providing an intuitive platform to explore internship and job opportunities.

Unlike the Week 1 static website, this version integrates a backend server that delivers job data dynamically using REST APIs, making the application more scalable and closer to a real-world job portal.

---

# ✨ Features

- 🚀 Responsive Landing Page
- 🔍 Search Jobs by Role, Company or Skills
- 💼 Dynamic Job Listings
- 🌐 REST API Integration
- ⚡ Live Data Fetching using Fetch API
- 🏢 Featured Companies Section
- 🎨 Modern Responsive UI
- 📱 Mobile-Friendly Layout
- 🔄 Dynamic Rendering of Job Cards
- 🌍 Cross-Origin Support (CORS)

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express.js

## Development Tools

- Visual Studio Code
- Live Server
- Git
- GitHub
- Postman

---

# 📂 Folder Structure

```text
Week2/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
Server/
│
├── index.js
├── package.json
└── node_modules/
```

---

# ⚙️ REST API Endpoints

## Home Route

```http
GET /
```

Returns

```
CareerConnect API is Running...
```

---

## Get All Jobs

```http
GET /jobs
```

Returns all available jobs in JSON format.

---

## Get Job By ID

```http
GET /jobs/:id
```

Example

```http
GET /jobs/1
```

---

## Add New Job

```http
POST /jobs
```

Accepts JSON data to create a new job listing.

---

# 💻 Sample API Response

```json
[
  {
    "id": 1,
    "title": "Frontend Developer Intern",
    "company": "Google",
    "location": "Bangalore",
    "type": "Internship",
    "salary": "₹30,000/month"
  }
]
```

---

# 🚀 How to Run

## 1️⃣ Install Dependencies

```bash
npm install
```

---

## 2️⃣ Start Backend Server

```bash
node index.js
```

Server runs on

```
http://localhost:3000
```

---

## 3️⃣ Start Frontend

Open

```
index.html
```

using **Live Server** in Visual Studio Code.

---

# 📸 Project Modules

✔ Responsive Navigation Bar

✔ Hero Section

✔ Search Functionality

✔ Featured Jobs

✔ Dynamic API Integration

✔ Top Companies Section

✔ Footer

---

# 🎯 Learning Outcomes

During Week 2, I learned:

- REST API Development
- Express.js Routing
- Backend Architecture
- Fetch API
- Asynchronous JavaScript
- JSON Data Handling
- Client-Server Communication
- API Testing using Postman
- Git & GitHub Workflow

---

# 🔮 Future Enhancements

- 🔐 User Authentication
- 🗄 MongoDB Database
- 📝 Job Application System
- 👨‍💼 Admin Dashboard
- 👤 User Profiles
- 📄 Resume Upload
- 🔎 Advanced Filters
- ☁ Cloud Deployment (Render/Netlify)
- 📧 Email Notifications
- 🔑 JWT Authentication

---

# 📌 Internship Information

**Internship:** DecodeLabs Full Stack Development Internship

**Week:** 2

**Project:** CareerConnect – Backend Integration using Node.js & Express.js

---

# 👩‍💻 Developer

## Janhvi Ambulkar

🎓 B.Tech – Computer Science & Engineering

🏫 KDK College of Engineering, Nagpur

---

# 📬 Connect With Me

### 💻 GitHub

https://github.com/janhviambulkar

### 💼 LinkedIn

https://www.linkedin.com/in/janhvi-ambulkar-16b95637b

---

# 🙏 Acknowledgements

This project was successfully completed as **Week 2** of the **DecodeLabs Full Stack Development Internship**, focusing on backend development, REST APIs, and frontend-backend integration.

---

# ⭐ Support

If you found this project useful, consider giving this repository a ⭐ on GitHub.

---

## 🚀 Made with ❤️ by Janhvi Ambulkar
