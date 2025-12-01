Swarna Project – Medication Manager

The Medication Manager is a full-stack application designed to manage medications, scheduling, and dosage tracking. It provides a structured backend API and a responsive frontend interface intended for production-grade scalability and future enterprise integrations.

Overview

This system enables users to:

Create and maintain medication records

Define schedules with recurrence rules

Automatically generate dose events

Track medication adherence

View upcoming doses in a unified UI

The application is structured for modular expansion, including planned support for a persistent database, user accounts, and deployment pipelines.

Technology Stack
Backend

FastAPI (Python)

Uvicorn ASGI server

Pydantic for data modeling and validation

Repository abstraction layer (in-memory by default, MongoDB-ready)

API key–based authentication

CORS and rate-limiting middleware

Frontend

React 19

Redux Toolkit

React Router DOM

Tailwind CSS

Vite build system

Current Capabilities
Backend Features

Medications

Create medication

Retrieve all active medications

Deactivate medication

Schedules

Create schedules (daily, weekly, multi-time per day)

Retrieve schedules for a medication

Doses

Generate doses (7-day window)

Retrieve upcoming doses

Mark doses as taken

Additional backend features:

API key authentication via x-api-key

Input validation

Basic error handling

CORS enabled for frontend communication

Frontend Features

Medication list interface

Medication creation flow

Detailed medication view

Schedule management UI

Dose tracking interface

Upcoming doses side panel

Responsive layout with Tailwind

State managed via Redux slices for medications, schedules, and doses