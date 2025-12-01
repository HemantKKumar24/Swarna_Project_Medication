#  Project Medication Manager

A simple full-stack web app for managing medications, schedules, and daily doses.
Frontend is built using React and Redux, and the backend uses FastAPI.

--------------------------------------

## Overview

The application allows users to:
- Add medications with basic instructions
- Create schedules (daily, weekly, or multiple times per day)
- Generate doses for the next few days
- Mark doses as taken
- View medications, schedules, and upcoming doses through a clean UI

Data is currently stored in memory on the backend, so everything resets when the server restarts.

--------------------------------------

## Technology Stack

Backend: FastAPI, Uvicorn, Pydantic
Frontend: React, Redux Toolkit, React Router, Tailwind CSS, Vite
Optional: MongoDB support prepared but not enabled

--------------------------------------

## Features Currently Working

Backend:
- Add, list, and deactivate medications
- Create schedules with recurrence rules
- Generate doses for upcoming days
- View upcoming doses and mark them as taken
- API key validation through x-api-key
- CORS and basic rate limiting

Frontend:
- Medication list and detail pages
- Medication creation form
- Schedule creation and viewing
- Upcoming doses view
- Redux-based state
- Responsive UI

--------------------------------------

## Features Planned

- MongoDB database integration
- Editing and deleting items
- User authentication
- Calendar UI, charts, dose history
- Docker deployment and CI/CD
- Automated tests

--------------------------------------

## Running the Project Locally

Backend:

cd backend
python -m venv myvenv
./myvenv/Scripts/Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

API docs: http://localhost:8000/docs

Frontend:

cd frontend
npm install
npm run dev

Runs at: http://localhost:5173

Create a .env file inside frontend:

VITE_API_URL=http://localhost:8000
VITE_API_KEY=local-dev-key

--------------------------------------

## Quick Testing

1. Add a medication (e.g., Aspirin)
2. Add a daily schedule (e.g., 09:00 and 21:00)
3. Open the Doses page to see generated doses

--------------------------------------

## Repository

https://github.com/HemantKKumar24/Swarna_Project_Medication.git
