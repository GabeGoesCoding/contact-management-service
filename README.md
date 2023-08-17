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

### Usage

The Contact Management Service facilitates the following functionalities: creating, reading, updating, and deleting contacts.

- To create a new contact, make a POST request to the `/contacts` endpoint. The request body should include the contact's name, email address, and phone number.

- To retrieve a contact, send a GET request to the `/contacts/:id` endpoint, where `:id` represents the contact's unique identifier.

- To update a contact's information, utilize a PUT request at the `/contacts/:id` endpoint. Remember to include the updated contact details in the request body.

- For deleting a contact, initiate a DELETE request at the `/contacts/:id` endpoint.

### Authentication

To ensure the security of the application, authentication is carried out using JWT (JSON Web Tokens).

Feel free to explore and utilize the Contact Management Service to efficiently manage your contacts. If you encounter any issues or have questions, don't hesitate to reach out for assistance.
