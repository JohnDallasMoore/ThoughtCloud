# ThoughtCloud

---

#### NoSQL Social Network API

---

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

---

<a id='description'></a>
## Description

Welcome to ThoughtCloud, the NoSQL Social Network API. This application serves as the backend for a social network platform where users can share their thoughts, react to friends' thoughts, and manage their friend list. The application is built using Express.js for routing, utilizes MongoDB as the database, and employs the Mongoose ODM for data modeling. The API enables handling of large amounts of unstructured data efficiently, which is crucial for a modern social networking platform.


[Video Walkthrough]()



---

<a id='installation'></a>
## Installation

To set up and run the ThoughtCloud API on your local machine, follow these steps:

1. Clone this repository to your local machine using the following command: `git clone https://github.com/JohnDallasMoore/ThoughtCloud.git`
2. Navigate to the project directory: `cd ThoughtCloud`
3. Install the required dependencies using npm:`npm install`
4. Start the server: `npm start`
5. The server should now be running. You can access the API at `http://localhost:3001`.



---

<a id='usage'></a>
## Usage

Once the server is up and running, you can use tools like Insomnia or Postman to interact with the API. Below are the available API routes and their functionalities:

- **GET `/api/users`**: Get all users.
- **GET `/api/users/:userId`**: Get a single user by ID along with their thoughts and friend data.
- **POST `/api/users`**: Create a new user. Example request body:
  ```json
  {
    "username": "newUser123",
    "email": "newuser@example.com"
  }
- **PUT `/api/users/:userId`**: Update a user by ID.

- **DELETE `/api/users/:userId`**: Delete a user by ID. Associated thoughts will also be deleted.

- **POST `/api/users/:userId/friends/:friendId`**: Add a friend to a user's friend list.

- **DELETE `/api/users/:userId/friends/:friendId`**: Remove a friend from a user's friend list.

- **GET `/api/thoughts`**: Get all thoughts.

- **GET `/api/thoughts/:thoughtId`**: Get a single thought by ID.

- **POST `/api/thoughts`**: Create a new thought. Example request body:
  ```json
  {
  "thoughtText": "Here's a cool thought...",
  "username": "user123",
  "userId": "5edff358a0fcb779aa7b118b"
    }
- **PUT `/api/thoughts/:thoughtId`**: Update a thought by ID.

- **DELETE `/api/thoughts/:thoughtId`**: Delete a thought by ID.

- **POST `/api/thoughts/:thoughtId/reactions`**: Add a reaction to a thought.

- **DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`**: Remove a reaction from a thought.

For detailed examples and usage demonstrations, please refer to the walkthrough video linked above.







---

<a id='license'></a>
## License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

---

<a id='credits'></a>
## Credits

## Credits

This project utilizes the following dependencies:

- [Node.js](https://nodejs.org): A JavaScript runtime environment.
- [Express.js](https://expressjs.com): A fast and minimalist web application framework for Node.js.
- [MongoDB](https://www.mongodb.com): A widely used NoSQL database management system.
- [Mongoose](https://mongoosejs.com): An elegant MongoDB object modeling tool for Node.js.
- [moment](https://www.npmjs.com/package/moment): A library for parsing, validating, manipulating, and formatting dates and times.
- [nodemon](https://www.npmjs.com/package/nodemon): A utility that automatically restarts the server when changes are detected during development.

Make sure to install these dependencies by running `npm install` before using the application.


---

<a id='contact'></a>
## Contact

For any questions, please feel free to send me an email at [moore.johndallas@gmail.com](mailto:moore.johndallas@gmail.com).

Check out my [GitHub](https://github.com/JohnDallasMoore/) for more information.