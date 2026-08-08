# TravelGenie AI – Personalized Eco-Tourism Planner
A full-stack MERN application for personalized, eco-friendly travel planning powered by generative AI.

TravelGenie AI enables users to discover, plan, and manage personalized, eco-friendly travel itineraries. By combining user preferences with dynamic prompt engineering and AI endpoints, TravelGenie AI delivers detailed daily plans, local attractions, weather guidelines, and curated sustainable homestay recommendations to promote responsible tourism.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Deployment](#live-deployment)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [AI Workflow](#ai-workflow)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Known Limitations](#known-limitations)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [Deployment](#deployment)
- [License](#license)

---

## Project Overview

TravelGenie AI is a web-based travel planner designed to promote sustainable eco-tourism. By providing a personalized planning experience, the application helps users discover local attractions, find certified eco-friendly homestays, and follow sustainable travel guidelines.

- **What it does**: The project takes user preferences—such as destination, duration, budget, and travel style—and generates a detailed, structured daily itinerary complete with lodging, attractions, activities, and specific packing lists.
- **Who it is for**: The application is designed for eco-conscious travelers, backpackers, tourists interested in responsible travel, and evaluators looking for robust, full-stack implementations of generative AI.
- **The main problem it solves**: Traditional travel planners often overlook the ecological impact of tourism, steering travelers toward large commercial chains and crowded areas. TravelGenie AI highlights sustainable alternatives, local micro-businesses, and green travel practices to minimize environmental impact.
- **Why AI is used**: Generative AI enables the dynamic tailoring of itineraries from unstructured inputs, allowing the system to construct custom travel schedules and extract localized eco-friendly recommendations in real time without pre-programmed templates.

---

## Live Deployment

- **Live Frontend URL**: [https://travel-genie-ai-personalized-eco-to.vercel.app](https://travel-genie-ai-personalized-eco-to.vercel.app)
- **Live Backend URL**: [https://travelgenie-ai-backend.onrender.com](https://travelgenie-ai-backend.onrender.com)
- **GitHub Repository**: [https://github.com/KaranSinghDhanik/TravelGenie-AI-Personalized-Eco-Tourism-Planner](https://github.com/KaranSinghDhanik/TravelGenie-AI-Personalized-Eco-Tourism-Planner)

---

## Features

### Authentication
- **JWT Authentication**: Secure user registration, password hashing (bcrypt), and session tokens stored in local storage.
- **Protected Routes**: React Router route guards on the frontend and custom authorization middleware checks on the backend API.

### AI Features
- **AI-Powered Itineraries**: Instant generation of structured travel itineraries based on destination, budget, duration, interests, and style.
- **Sustainable Focus**: Automated recommendations for certified eco-homestays and local green travel guidelines.

### Trip Management
- **Trip Management (CRUD)**: Save generated itineraries directly to MongoDB Atlas and view, edit, update status (Planning/Completed), or delete saved trips.
- **Dynamic Itinerary Preview**: Interactive side-by-side rendering of days, schedules, mapping data, and packing checklists.

### User Experience
- **Responsive UI/UX**: Sleek visual styling, fluid layouts, and complete dark mode support using Tailwind CSS.
- **Real-time Notifications**: Dynamic toast alerts for success actions, form validation warnings, and API error reports.

---

## Tech Stack

| Category | Technologies |
|:---|:---|
| **Frontend** | React 19, Vite, Tailwind CSS, React Router DOM, Axios, Fetch API |
| **Backend** | Node.js, Express.js, JWT (json-web-token) |
| **Database** | MongoDB Atlas, Mongoose |
| **AI Integration** | Groq API, Gemini Models, Custom Prompt Engineering |

---

## AI Workflow

The flow below represents how travel preferences are transformed into actionable itineraries:

```text
User Input
    │
    ▼
TravelPlannerForm
    │
    ▼
Backend API
    │
    ▼
Prompt Builder
    │
    ▼
Groq AI
    │
    ▼
Structured JSON Response
    │
    ▼
AI Itinerary Preview
    │
    ▼
Save Trip
    │
    ▼
MongoDB
```

---

## Project Structure

```text
TravelGenie-AI/
├── backend/                  # Node.js & Express server
│   ├── config/               # Configuration files (DB, passports, etc.)
│   ├── controllers/          # API controllers handling business logic
│   ├── middleware/           # Protected route checks and rate limiters
│   ├── models/               # Mongoose data schemas
│   ├── routes/               # Express endpoint routers
│   ├── services/             # Axios helper services (AI API connectors)
│   └── utils/                # Prompt builders and formatting helpers
│
└── src/                      # Vite + React Frontend
    ├── components/           # Reusable UI elements and previews
    ├── pages/                # Routed pages (AI Planner, Dashboard, Auth)
    ├── services/             # API services (trip management, AI client)
    └── context/              # Authentication & UI states
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/KaranSinghDhanik/TravelGenie-AI-Personalized-Eco-Tourism-Planner.git
cd TravelGenie-AI-Personalized-Eco-Tourism-Planner
```

### 2. Install Dependencies

Install the required packages for both the frontend client and the backend server:

```bash
# Install frontend packages
npm install

# Install backend packages
cd backend
npm install
cd ..
```

### 3. Run the Project Locally

**Start the Frontend App:**

```bash
npm run dev
```
*Frontend will be running locally at the development URL `http://localhost:5173` (the deployed application uses the production URL `https://travel-genie-ai-personalized-eco-to.vercel.app`).*

**Start the Backend Server:**

```bash
cd backend
npm run dev
```
*Backend API server will be running locally at the development URL `http://localhost:5000` (the deployed application uses the production URL `https://travelgenie-ai-backend.onrender.com`).*

---

## Environment Variables

### Backend Configuration (`backend/.env`)

Create a `.env` file in the `backend/` directory and configure the following variables:

#### Development Environment
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travelgenie
JWT_SECRET=your_development_jwt_secret_key
SESSION_SECRET=your_development_session_secret_key
GROQ_API_KEY=your_groq_api_key
FRONTEND_URL=http://localhost:5173
```

#### Production Environment
```env
PORT=5000
MONGO_URI=your_production_mongodb_atlas_connection_string
JWT_SECRET=your_production_jwt_signing_secret_key
SESSION_SECRET=your_production_session_secret_key
GROQ_API_KEY=your_production_groq_api_key
FRONTEND_URL=https://travel-genie-ai-personalized-eco-to.vercel.app
```

---

### Frontend Configuration (`.env`)

Create a `.env` file in the root directory to configure the backend connection URL:

#### Development Environment
```env
VITE_API_URL=http://localhost:5000/api
```

#### Production Environment
```env
VITE_API_URL=https://travelgenie-ai-backend.onrender.com/api
```

---

## API Documentation

**Production Base URL**: `https://travelgenie-ai-backend.onrender.com`

### Authentication

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Log in with credentials | No |
| `GET` | `/api/auth/me` | Fetch active user profile | Yes |

### Trip Management

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| `GET` | `/api/trips` | Fetch all saved trips for logged-in user | Yes |
| `POST` | `/api/trips` | Save a new trip | Yes |
| `PUT` | `/api/trips/:id` | Update trip details by ID | Yes |
| `DELETE` | `/api/trips/:id` | Remove a trip by ID | Yes |

### AI Itinerary

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| `POST` | `/api/ai/itinerary` | Generate AI travel plan | Yes |

---

## Known Limitations

- **Render Free Tier Spin Down**: The backend server is hosted on Render's free tier, which automatically spins down after periods of inactivity.
- **Initial Request Latency**: The first request to the backend may take 30–60 seconds to complete after an idle period while the server spins back up.
- **AI Response Dependencies**: AI itinerary generation response time is dependent on the latency of the external LLM APIs (Groq/Gemini).
- **Network Dependency**: A stable internet connection is required to communicate with external APIs and successfully generate travel plans.

---

## Future Enhancements

- **PDF Export**: Allow users to download and print their generated eco-tourism plans.
- **Google Maps Integration**: Visually map trip routes, attractions, and accommodations.
- **Weather APIs**: Dynamic real-time weather alerts based on travel dates.
- **Itinerary Regeneration**: Single-click regeneration of specific days or events.
- **Social Sharing**: Share generated itinerary pages with friends and fellow travelers.
- **Carbon Footprint Metrics**: Graphic visualizations of calculated travel footprints.
- **Offline Access**: Progressive Web App (PWA) support to access plans in remote locations.

---

## Author

- **Name**: Karan Singh Dhanik
- **University**: Graphic Era University
- **Program**: Summer Internship Program 2026
- **GitHub**: [KaranSinghDhanik](https://github.com/KaranSinghDhanik)
- **LinkedIn**: [KaranSinghDhanik](https://www.linkedin.com/in/karan-singh-dhanik-553274335)

---

## Deployment

| Layer | Hosting Platform | Database |
|:---|:---|:---|
| **Frontend** | Vercel | N/A |
| **Backend** | Render | N/A |
| **Database** | MongoDB Atlas | MongoDB |

---

## License

This project is licensed under the [MIT License](LICENSE).
