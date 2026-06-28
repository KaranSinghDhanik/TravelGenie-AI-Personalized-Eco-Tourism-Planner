# TravelGenie AI – Personalized Eco-Tourism Planner

TravelGenie AI is a full-stack MERN application that helps users plan eco-friendly trips with a modern, responsive interface. Users can create and manage trips through a RESTful backend powered by MongoDB Atlas, while the React frontend provides an AI Trip Planner experience with itinerary previews and trip history.

AI-powered itinerary generation will be integrated in **Week 5** using **Google's Gemini API**, enabling personalized day-by-day plans, homestay recommendations, and packing suggestions based on user preferences.

---

## Features

- AI Trip Planner interface
- Create new trips
- View recently created trips
- RESTful CRUD API
- Search trips
- Filter trips by status
- MongoDB Atlas database
- Responsive React frontend
- Dark mode support

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Testing

- Postman

### Version Control

- Git
- GitHub

---

## Folder Structure

```
TravelGenie-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/TravelGenie-AI-Personalized-Eco-Tourism-Planner.git
cd TravelGenie-AI-Personalized-Eco-Tourism-Planner
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Run the frontend

```bash
npm run dev
```

The React app will be available at `http://localhost:5173`.

### 5. Run the backend

```bash
cd backend
npm run dev
```

The API server will be available at `http://localhost:5000`.

---

## Environment Variables

Create a `backend/.env` file by copying the example file:

```bash
cp backend/.env.example backend/.env
```

| Variable         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `PORT`           | Port for the Express server (default: `5000`)    |
| `MONGO_URI`      | MongoDB Atlas connection string                  |
| `GEMINI_API_KEY` | Google Gemini API key (reserved for Week 5)      |

Example `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/travelgenie?retryWrites=true&w=majority
GEMINI_API_KEY=
```

---

## REST API Endpoints

| Method | Endpoint                    | Description                          |
| ------ | --------------------------- | ------------------------------------ |
| POST   | `/api/trips`                | Create a new trip                    |
| GET    | `/api/trips`                | Retrieve all trips                   |
| GET    | `/api/trips/:id`            | Retrieve a trip by ID                |
| PUT    | `/api/trips/:id`            | Update a trip by ID                  |
| DELETE | `/api/trips/:id`            | Delete a trip by ID                  |
| GET    | `/api/trips/search`         | Search trips by destination query    |
| GET    | `/api/trips/status/:status` | Filter trips by status               |

**Health check:** `GET /` returns server status.

**Search example:** `GET /api/trips/search?destination=Kerala`

**Filter example:** `GET /api/trips/status/Draft`

---

## Screenshots

> Add screenshots to a `/screenshots` folder and replace the placeholders below.

### Home Page

![Home Page](./screenshots/home.png)

### AI Planner

![AI Planner](./screenshots/ai-planner.png)

### My Recent Trips

![My Recent Trips](./screenshots/recent-trips.png)

### Backend API

![Backend API](./screenshots/backend-api.png)

---

## Future Improvements

- Gemini AI itinerary generation
- Authentication
- User accounts
- Trip sharing
- Weather integration
- Maps integration
- Packing recommendations
- Budget estimation
- Email itinerary export

---

## Author

**Karan Singh Dhanik**

Graphic Era University

Summer Internship Program 2026
