## Contact Management Service

Welcome to the Contact Management Service! This repository contains a back-end CRUD application designed for efficient contact management. The application is built primarily using JavaScript, ExpressJS, and MongoDB. User authentication and security aspects are handled through JWT (JSON Web Tokens) and bcrypt.

### Getting Started

Before you dive into using the Contact Management Service, make sure you have the following prerequisites in place:

- Node.js
- npm
- MongoDB

Once you've confirmed these prerequisites, proceed with the following steps to set up the project:

1. **Clone the Repository:** Begin by cloning this repository from GitHub.

2. **Install Dependencies:** In the project directory, run the following command to install the required dependencies:

   ```
   npm install
   ```

3. **Set Up MongoDB:** Create a MongoDB database and set up a collection specifically for storing contacts.

4. **Start the Application:** Launch the application by executing the following command within the project directory:

   ```
   npm start
   ```

   You can access the application through your web browser at [http://localhost:3000](http://localhost:3000).

### Environment Variables

For `.env` file.
- The `ACCESS_TOKEN_SECRET` variable is used to sign JSON Web Tokens (JWTs) for user authentication and authorization.
- The `CONNECTION_STRING` variable is used to establish a connection to a MongoDB database using the Mongoose library. 
- The `PORT` variable is used to specify the port number on which the Express.js server will listen for incoming HTTP requests.

### User Authentication

Upon logging in, users will be provided with a JWT. The JWT is used to access all the private contact APIs.

- To register a user, make a POST request to the `/api/users/register` endpoint. The request body should include the contact's username, email address, and password.

- To register a user, make a POST request to the `/api/users/login` endpoint. The request body should include the email address, and password. The request will contain a JWT.

- To access the current user information, send a GET request at the `/api/users/current` endpoint.

### Contact Usage

The Contact Management Service facilitates the following functionalities: creating, reading, updating, and deleting contacts.

- To create a new contact, make a POST request to the `/api/contacts` endpoint. The request body should include the contact's name, email address, and phone number.

- To retrieve all contacts, send a GET request to the `/api/contacts` endpoint.

- To retrieve a contact, send a GET request to the `/api/contacts/:id` endpoint, where `:id` represents the contact's unique identifier.

- To update a contact's information, utilize a PUT request at the `/contacts/:id` endpoint, where `:id` represents the contact's unique identifier. Remember to include the contact's name, email address, and phone number.

- For deleting a contact, initiate a DELETE request at the `/contacts/:id` endpoint, where `:id` represents the contact's unique identifier.
