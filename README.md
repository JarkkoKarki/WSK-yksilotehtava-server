# WSK Yksilötehtävä Server

This is a Node.js-based server application built with Express.js. It provides RESTful APIs for user management, authentication, and bus stop data retrieval. The project also includes file upload functionality and integrates with external APIs like Digitransit.

## Features

- **User Management**: Create, update, delete, and retrieve user information.
- **Authentication**: User login and JWT-based authentication.
- **Bus Stop Data**: Fetch nearby bus stops using coordinates and distance.
- **File Upload**: Upload images and generate thumbnails using `multer` and `sharp`.
- **Error Handling**: Centralized error handling for consistent API responses.
- **Environment Configuration**: Use `.env` for sensitive configuration values.

## API Endpoints

### Authentication

- **POST** `/api/v1/auth/login`: Login with username and password.
- **GET** `/api/v1/auth/me`: Get the authenticated user's information.

### User Management

- **GET** `/api/v1/users`: List all users.
- **POST** `/api/v1/users`: Register a new user.
- **GET** `/api/v1/users/:id`: Get user details by ID.
- **PUT** `/api/v1/users/:id`: Update user details.
- **DELETE** `/api/v1/users/:id`: Delete a user.

### Bus Stops

- **GET** `/api/v1/buss/stops/:lon/:lat/:dis`: Fetch nearby bus stops by longitude, latitude, and distance.

### File Upload

- **POST** `/api/v1/users` (with `profilePicture`): Upload a profile picture and generate a thumbnail.

## Database

This project uses a **MySQL** database to store user information.

### Database Configuration

The database connection is managed using a connection pool in `src/utils/database.js`.
