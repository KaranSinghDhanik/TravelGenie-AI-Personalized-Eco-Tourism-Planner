# TravelGenie AI Backend

Independent Node.js + Express API for the TravelGenie AI platform.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- nodemon (development)

## Project Structure

```
backend/
├── config/        # Database and app configuration
├── controllers/   # Route handlers (future)
├── middleware/    # Express middleware (future)
├── models/        # Mongoose models (future)
├── routes/        # API route definitions (future)
├── services/      # Business logic & AI integrations (future)
├── validators/    # Request validation (future)
├── utils/         # Shared utilities (future)
├── server.js      # Application entry point
├── package.json
├── .env.example
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- MongoDB Atlas cluster and connection string

## Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

4. Fill in your `.env` values:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/travelgenie?retryWrites=true&w=majority
   GEMINI_API_KEY=
   ```

   - `PORT` — API server port (default: 5000)
   - `MONGO_URI` — MongoDB Atlas connection string
   - `GEMINI_API_KEY` — Reserved for future AI itinerary generation

## Running the Server

Development (with auto-reload):

```bash
npm run dev
```

Production:

```bash
npm start
```

## Health Check

Once running, verify the server:

```bash
curl http://localhost:5000/
```

Expected response:

```json
{
  "success": true,
  "message": "TravelGenie AI Backend Running"
}
```

## Frontend Integration

The React frontend runs separately via Vite. Configure CORS origins in middleware when connecting the frontend to this API in a future step.

## Next Steps

- Trip CRUD endpoints
- User authentication
- Gemini API integration for AI itinerary generation
