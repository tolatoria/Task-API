 # Task-API

This is a RESTful task management API that enables users to create, organize, and track tasks efficiently. Beyond basic CRUD operations, it supports filtering, sorting, and pagination, making it easier to manage large task lists, prioritize what matters, and stay accountable to deadlines and progress over time.

## 🚀 Live Demo
[https://task-api-9un0.onrender.com](https://task-api-9un0.onrender.com)

## 🛠️ Tech Stack
- **Node.js** – runtime environment
- **Express.js** – web framework
- **MongoDB** – database
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing

## ✨ Features
- Full CRUD operations (Create, Read, Update, Delete tasks)
- Filtering tasks by status, priority, or other fields
- Sorting tasks (ascending/descending, multiple fields)
- Pagination for handling large task lists
- Input validation using Mongoose schema options

## 📌 API Endpoints

| Method | Endpoint          | Description           |
|--------|-------------------|------------------------|
| GET    | /api/tasks        | Get all tasks (supports filtering, sorting, pagination) |
| GET    | /api/tasks/:id    | Get a single task by ID |
| POST   | /api/tasks        | Create a new task      |
| PUT    | /api/tasks/:id    | Update an existing task |
| DELETE | /api/tasks/:id    | Delete a task           |

```bash
# Clone the repo
git clone https://github.com/tolatoria/Task-API.git

# Navigate into the project
cd Task-API

# Install dependencies
npm install

# Create a .env file with:
# MONGO_URI=your_mongodb_connection_string
# PORT=5000

# Start the server
npm start
```

## 📸 Screenshot
<img width="1282" height="728" alt="Screenshot 2026-07-13 210742" src="https://github.com/user-attachments/assets/5b996e61-3a34-4b7d-9acb-c37f6e5ab8ab" />
## 📚 About This Project

This is Project 1 of a 20-project backend development roadmap, built as a hands-on way to strengthen real-world API development skills.
