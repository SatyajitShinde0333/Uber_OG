# User Authentication API

A Node.js backend service providing user authentication functionality with MongoDB integration.

## Project Structure

```
Backend/
├── app.js              # Express app configuration
├── server.js           # Server startup
├── controllers/        # Request handlers
│   └── user.controller.js
├── models/            # Database models
│   └── user.model.js
├── routes/            # API routes
│   └── user.routes.js
├── services/          # Business logic
│   └── user.service.js
└── db/                # Database configuration
    └── db.js
```

## Features

- User registration with validation
- Password hashing using bcrypt
- JWT token-based authentication
- MongoDB integration
- Input validation using express-validator
- CORS enabled
- Environment variables support

## API Endpoints

### User Registration
- **POST** `/users/register`
  - Register a new user
  - Body parameters:
    ```json
    {
      "fullname": {
        "firstname": "string (min 3 characters)",
        "lastname": "string (min 3 characters)"
      },
      "email": "valid email address",
      "password": "string (min 6 characters)"
    }
    ```
  - Returns:
    - JWT token
    - User details

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000 (optional, defaults to 3000)
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cd Backend
   npm install
   ```
3. Set up environment variables
4. Start the server:
   ```bash
   npm start
   ```

## Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- bcrypt - Password hashing
- jsonwebtoken - JWT authentication
- dotenv - Environment variables
- cors - CORS middleware
- express-validator - Input validation

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- Input validation and sanitization
- Protected password field in responses
- CORS protection

## Error Handling

The API includes validation for:
- Email format
- Password length (minimum 6 characters)
- First name length (minimum 3 characters)
- Last name length (minimum 3 characters)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
