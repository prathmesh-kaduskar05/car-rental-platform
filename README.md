# 🚗 Car Rental Platform

> A modern, full-stack car rental web application that allows users to browse, view, and manage car listings with a seamless and responsive user experience.

## 🌐 Live Demo

- **Frontend:** [https://car-rental-frontend-3g9g.onrender.com](https://car-rental-frontend-3g9g.onrender.com)
- **Backend API:** [https://car-rental-backend-7n5k.onrender.com](https://car-rental-backend-7n5k.onrender.com)

---

## 📌 Project Overview

The **Car Rental Platform** is a full-stack web application designed to simplify the process of browsing and managing car rentals. It features a clean and intuitive UI built with React and a robust REST API backend powered by Node.js and Express. Data is stored in MongoDB, making it scalable and flexible.

This project follows a modern **monorepo structure** with separate `frontend` and `backend` folders, each independently deployable. The app is fully deployed on **Render** — backend as a Web Service and frontend as a Static Site.

### 🎯 Key Highlights
- ⚡ Built with **Vite** for lightning-fast development and optimized production builds
- 🎨 Styled with **Tailwind CSS** for a responsive, mobile-first design
- 🔗 RESTful API architecture with clean separation of concerns
- ☁️ Cloud-deployed with environment-based configuration
- 🔔 Real-time user feedback with **React Hot Toast** notifications

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center">
      <img src="screenshots/home-page.png" width="400" alt="Home Page"/>
      <br/>
      <b>🏠 Home Page</b>
    </td>
    <td align="center">
      <img src="screenshots/car-listing.png" width="400" alt="Car Listings"/>
      <br/>
      <b>🚗 Car Listings</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="screenshots/car-detail.png" width="400" alt="Car Detail Page"/>
      <br/>
      <b>🔍 Car Detail Page</b>
    </td>
    <td align="center">
      <img src="screenshots/create-car.png" width="400" alt="Create Car Page"/>
      <br/>
      <b>➕ Create Car Page</b>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI Library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Axios | API Requests |
| React Hot Toast | Notifications |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| dotenv | Environment Variables |
| CORS | Cross-Origin Requests |

---

## 📁 Project Structure

```
car-rental-platform/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── lib/
│   │   │   └── axios.js
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CarDetailPage.jsx
│   │   │   └── CreateCarPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   │   └── carRoutes.js
    │   └── server.js
    ├── package.json
    └── .env
```

---

## 🚀 Deployment

The app is deployed on **Render**:

| Service | Type | Platform |
|---|---|---|
| Backend | Web Service | Render |
| Frontend | Static Site | Render |

### Environment Variables on Render

**Backend:**
| Key | Value |
|---|---|
| `MONGO_URI` | Your MongoDB connection string |
| `PORT` | 3000 |

**Frontend:**
| Key | Value |
|---|---|
| `VITE_API_URL` | Your backend Render URL |

---

## ✨ Features

- 🚗 Browse all available cars
- 🔍 View detailed car information
- ➕ Create new car listings
- 🗑️ Delete car listings
- 🔔 Real-time toast notifications
- 📱 Fully responsive design
- ⚡ Fast page loads with Vite

---

## 🔮 Future Advancements

Here are the planned features and improvements for upcoming versions:

### 🔐 Authentication & Authorization
- [ ] User registration and login system
- [ ] JWT-based authentication
- [ ] Role-based access (Admin / User)
- [ ] OAuth login with Google / GitHub

### 🚗 Car Management
- [ ] Edit/update existing car listings
- [ ] Image upload for car photos (Cloudinary)
- [ ] Car availability calendar
- [ ] Car category filtering (SUV, Sedan, Electric, etc.)
- [ ] Search and sort functionality

### 📅 Booking System
- [ ] Car booking with date range picker
- [ ] Booking confirmation emails
- [ ] Booking history for users
- [ ] Cancel/modify bookings

### 💳 Payments
- [ ] Stripe payment gateway integration
- [ ] Invoice generation
- [ ] Refund management

### ⭐ Reviews & Ratings
- [ ] User reviews on car listings
- [ ] Star rating system
- [ ] Review moderation by admin

### 📊 Admin Dashboard
- [ ] Analytics for total bookings, revenue, users
- [ ] Manage all cars and users
- [ ] Charts and reports

### 🌍 Other Improvements
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) support
- [ ] Unit and integration testing
- [ ] CI/CD pipeline with GitHub Actions

---

<p align="center">Made with ❤️ by Prathmesh Kaduskar</p>
