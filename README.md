
# User Authentication API

This project is a user authentication system implemented using Node.js, Express.js, and MongoDB. It includes APIs for user registration, login, and password reset functionalities.

## Features

- **User Registration:** Allows users to register with an email, username, and password. Passwords are securely hashed using bcrypt before being stored in the database.
- **User Login:** Users can log in using their username and password. The system verifies the credentials and responds accordingly.
- **Password Reset:** Users can request a password reset by providing their registered email address. The system simulates sending a password reset link.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt**: Library for hashing passwords.


