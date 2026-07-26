
# 🌌 TravelGenie AI – Personalized Eco-Tourism Planner

TravelGenie AI is a professional full-stack MERN application that enables users to discover, plan, and manage personalized, eco-friendly travel itineraries. By combining user preferences with dynamic prompt engineering and AI endpoints, TravelGenie AI delivers detailed daily plans, local attractions, weather guidelines, and curated sustainable homestay recommendations to promote responsible tourism.

---

## 🚀 Features

- **🔐 JWT Authentication**: Secure user registration, password hashing (bcrypt), and session tokens stored in local storage.
- **🛡️ Protected Routes**: React Router route guards on the frontend and custom authorization middleware checks on the backend API.
- **🤖 AI-Powered Itineraries**: Instant generation of structured travel itineraries based on destination, budget, duration, interests, and style.
- **🌱 Sustainable Focus**: Automated recommendations for certified eco-homestays and local green travel guidelines.
- **📅 Dynamic Itinerary Preview**: Interactive side-by-side rendering of days, schedules, mapping data, and packing checklists.
- **💾 Trip Management (CRUD)**: Save generated itineraries directly to MongoDB Atlas and view, edit, update status (Planning/Completed), or delete saved trips.
- **📱 Responsive UI/UX**: Sleek visual styling, fluid layouts, and complete dark mode support using Tailwind CSS.
- **🔔 Real-time Notifications**: Dynamic toast alerts for success actions, form validation warnings, and API error reports.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** – Component-based user interface architecture.
- **Vite** – Fast build tooling and hot module replacement.
- **Tailwind CSS** – Utility-first premium styling framework.
- **React Router Dom** – Declarative routing and protection guards.
- **Axios & Fetch** – HTTP requests with bearer authorization middleware.

### Backend
- **Node.js & Express.js** – Structured RESTful API router and MVC design.
- **MongoDB Atlas & Mongoose** – Flexible document databases and schema modeling.
- **JWT (json-web-token)** – Secure stateless token authorization.

### AI Integration
- **Groq API & Gemini Models** – Next-generation LLM APIs for structured JSON responses.
- **Prompt Engineering** – Dedicated prompt builder enforcing strict eco-friendly parameters.

---

## 🔄 AI Workflow

The flow below represents how travel preferences are transformed into actionable itineraries:

```
User Input
    ↓
TravelPlannerForm
    ↓
Backend API
    ↓
Prompt Builder
    ↓
Groq AI
    ↓
Structured JSON Response
    ↓
AI Itinerary Preview
    ↓
Save Trip
    ↓
MongoDB
```

---

## 📂 Project Structure

```
TravelGenie-AI/
│
├── backend/                  # Node.js & Express server
│   ├── config/              # Configuration files (DB, passports, etc.)
│   ├── controllers/         # API controllers handling business logic
│   ├── middleware/          # Protected route checks and rate limiters
│   ├── models/              # Mongoose data schemas
│   ├── routes/              # Express endpoint routers
│   ├── services/            # Axios helper services (AI API connectors)
│   └── utils/               # Prompt builders and formatting helpers
│
└── src/                      # Vite + React Frontend
    ├── components/          # Reusable UI elements and previews
    ├── pages/               # Routed pages (AI Planner, Dashboard, Auth)
    ├── services/            # API services (trip management, AI client)
    └── context/             # Authentication & UI states
```

---

## 💻 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/KaranSinghDhanik/TravelGenie-AI-Personalized-Eco-Tourism-Planner.git
cd TravelGenie-AI-Personalized-Eco-Tourism-Planner
```

### 2. Install Dependencies
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
*Frontend will be running at `http://localhost:5173`*

**Start the Backend Server:**
```bash
cd backend
npm run dev
```
*Backend API server will be running at `http://localhost:5000`*

---

## 🔐 Environment Variables

### Backend Configuration (`backend/.env`)
Create a `.env` file in the `backend/` folder and include the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_signing_secret_key
GROQ_API_KEY=your_groq_or_gemini_api_credentials
```

### Frontend Configuration (`.env`)
Create a `.env` file in the root directory and configure the backend connection URL:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Log in with credentials | No |
| `GET` | `/api/auth/me` | Fetch active user profile | Yes |

### Trip Management
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/api/trips` | Fetch all saved trips for logged-in user | Yes |
| `POST` | `/api/trips` | Save a new trip | Yes |
| `PUT` | `/api/trips/:id` | Update trip details by ID | Yes |
| `DELETE` | `/api/trips/:id` | Remove a trip by ID | Yes |

### AI Itinerary
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/ai/itinerary` | Generate AI travel plan | Yes |

---

## 📸 Screenshots

### Login Page
![Login Page](./screenshots/login_page.png)

### AI Planner Form
![AI Planner Form](./screenshots/ai_planner_form.png)

### AI Loading State
![AI Loading State](./screenshots/ai_loading_state.png)

### Generated Itinerary
![Generated Itinerary](./screenshots/generated_itinerary.png)

### Saved Trips Dashboard
![Saved Trips Dashboard](./screenshots/saved_trips_dashboard.png)

---

## 🔮 Future Enhancements

- 📄 **Export to PDF**: Allow users to download and print their generated eco-tourism plans.
- 🗺️ **Google Maps Integration**: Visually map trip routes, attractions, and accommodations.
- 🌦️ **Weather APIs**: Dynamic real-time weather alerts based on travel dates.
- 🔄 **Itinerary Regeneration**: Single-click regeneration of specific days or events.
- 🔗 **Social Sharing**: Share generated itinerary pages with friends and fellow travelers.
- 📊 **Carbon Footprint Metrics**: Graphic visualizations of calculated travel footprints.
- 📴 **Offline Access**: Progressive Web App (PWA) support to access plans in remote locations.

---

## 👥 Contributors

- **Karan Singh Dhanik** - *Summer Internship Program 2026* - Graphic Era University

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
