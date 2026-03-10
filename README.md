# 🚗 CarRental — MERN Stack Car Rental Application

A full-stack car rental management platform built with the MERN stack. Users can browse available cars, create rental bookings, filter by type and price, and manage listings end-to-end.

---

## Screenshots

| Home | Add New Car | 
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/e2170290-64ac-4375-af19-7820b326d320" width="400" /> | <img src="https://github.com/user-attachments/assets/9cbb145c-18e2-4fd3-bbd6-8af8bc590160" width="400"  />
| **Update Car Detail** | **Car Details**|
| <img src="https://github.com/user-attachments/assets/a5d834d4-c77a-4501-82c2-bde6c793ae10" width="400" /> | <img src="https://github.com/user-attachments/assets/2153c56a-2508-47fc-8c75-18586e636d9a" width="400"  />

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Styling** | CSS / Tailwind CSS |
| **HTTP Client** | Axios |

---

## ✨ Features

- 🔍 **Search & Filter** — Filter rentals by city/model, car type (Sedan, SUV, Luxury, Electric), date range, and max price per day
- ➕ **Add New Car** — Create a new rental listing with user info, car model, type, year, location, image URL, pickup/return dates, and price
- ✏️ **Edit Booking** — Update any booking details including dates, status, and price
- 🗑️ **Delete Car** — Remove a car listing from the platform
- 📋 **Listings View** — Browse all available rental cars with a match counter
- 💰 **Price Slider** — Dynamic max price/day filter (up to $1000/day)
- 📅 **Date Filtering** — Filter available cars by pickup and return dates
- 🏷️ **Car Types** — Sedan, SUV, Luxury, Electric categories
- 🖼️ **Image Support** — Car image via URL with color-coded placeholder fallback

---

## 📁 Project Structure

```
carrental/
├── client/                   # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── CarCard.jsx
│       │   ├── FilterBar.jsx
│       │   └── EmptyState.jsx
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── NewCarPage.jsx
│       │   └── EditCarPage.jsx
│       ├── App.jsx
│       └── main.jsx
│
├── server/                   # Express Backend
│   ├── models/
│   │   └── Car.js
│   ├── routes/
│   │   └── cars.js
│   ├── controllers/
│   │   └── carController.js
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/cars` | Get all car rentals |
| `POST` | `/api/cars` | Create a new car rental |
| `PUT` | `/api/cars/:id` | Update a car rental by ID |
| `DELETE` | `/api/cars/:id` | Delete a car rental by ID |

---

## 📦 Car Data Model

```js
{
  userName: String,          // Renter's name
  userEmail: String,         // Renter's email
  carModel: String,          // e.g. "Tesla Model 3"
  carType: String,           // Sedan | SUV | Luxury | Electric
  year: Number,              // e.g. 2026
  location: String,          // e.g. "Mumbai"
  imageUrl: String,          // Car image URL
  pickupDate: Date,          // Rental start date
  returnDate: Date,          // Rental end date
  status: String,            // Pending | Confirmed | Completed
  pricePerDay: Number,       // e.g. 100
  createdAt: Date            // Auto-generated
}
```
---

## 🧪 Sample Car Entry

```json
{
  "userName": "Prathmesh K",
  "userEmail": "kaduskarprathmesh05@gmail.com",
  "carModel": "Tesla Model 3",
  "carType": "Sedan",
  "year": 2026,
  "location": "Mumbai",
  "imageUrl": "https://www.tesla.model.com",
  "pickupDate": "2026-03-10",
  "returnDate": "2026-03-12",
  "status": "Pending",
  "pricePerDay": 100
}
```

---

## 📌 Available Filter Options

| Filter | Options |
|---|---|
| Search | City or Model name |
| Car Type | All Types, Sedan, SUV, Luxury, Electric |
| Dates | Pickup date → Return date |
| Max Price | $0 – $1000 / day (slider) |

---

> Built with ❤️ using the MERN Stack
