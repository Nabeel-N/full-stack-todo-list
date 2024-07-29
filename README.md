# Full-Stack Todo List Application

This is a comprehensive todo list application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, view, and manage their todo items with a clean and intuitive interface.

## Features

- Create new todo items with title and description
- View list of existing todos
- Mark todos as completed
- RESTful API for CRUD operations
- Input validation using Zod

## Tech Stack

- Frontend: React (with Vite as build tool)
- Backend: Express.js
- Database: MongoDB
- Validation: Zod

## Project Structure

- `frontend/`: Contains the React application
  - `src/`: Source files for the React app
    - `components/`: React components (CreateTodo, Todos)
    - `App.jsx`: Main application component
- `backend/`: Contains the Express.js server
  - `index.js`: Entry point for the server
  - `db.js`: Database connection and schema
  - `type.js`: Zod schemas for input validation

## Setup and Installation

1. Clone the repository

2. Install dependencies

3. Set up environment variables
- Create a `.env` file in the `backend` directory
- Add your MongoDB connection string:
  ```
  MONGODB_URI=your_mongodb_connection_string
  ```

4. Start the application

5. Open your browser and navigate to `http://localhost:5173` (or the port Vite is running on)

## API Endpoints

- POST `/todo`: Create a new todo
- GET `/todos`: Retrieve all todos
- PUT `/completed`: Mark a todo as completed

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.
