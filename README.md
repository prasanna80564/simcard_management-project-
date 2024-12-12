# Customer and SIM Card Management System

This project is a **Customer and SIM Card Management System** built using **Node.js**, **Express**, **MongoDB**, and **localStorage** (for frontend data storage). The system provides CRUD operations for managing customers and their SIM card details.

## Features

- **Add Customers**: Add new customer details, including their name, email, and SIM card information.
- **View Customers**: View all customers and their respective SIM card details in a tabular format.
- **Edit Customers**: Modify customer and SIM card information.
- **Delete Customers**: Remove customer records from the system.
- **Backend Integration**: Supports MongoDB for persistent backend storage.
- **Frontend Management**: Handles local data using `localStorage` for quick access and management.
- **Responsive Design**: User interface designed for desktop and mobile devices.

## Technologies Used

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database for persistent storage.

### Frontend
- **HTML**: Markup language for UI.
- **CSS**: Styling the UI.
- **JavaScript**: Logic and interaction.
- **LocalStorage**: Temporary data storage in the browser.

### Tools
- **Body-parser**: Middleware for parsing request bodies.
- **CORS**: Middleware to handle cross-origin requests.
- **Mongoose**: ODM for MongoDB.
- **GitHub**: Version control.

## Installation

### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (running locally or via a cloud provider)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/customer-sim-management.git
   cd customer-sim-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   ```bash
   mongod
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

### Base URL
```
http://localhost:3000/customers
```

## Documentation
[Hotel Management System Documentation](https://docs.google.com/document/d/1fknGEZg-wWIsQKdS7JvjCaYHYD_Cc_MnmkOgW4lGIWc/edit?usp=sharing)





