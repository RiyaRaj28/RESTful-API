# RESTful API

This project implements a RESTful API for managing student information. 
It uses Node.js with Express for the server, MongoDB for the database, and Mongoose for data modeling.
Also, Postman was used to carry out the testing of the given API. 

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/RiyaRaj28/RESTful-API.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- MongoDB

## API Endpoints

### `GET /students`

Returns a list of all students.

### `POST /students`

Creates a new student. Requires a JSON object with the following properties:

- `name` (String, required): The name of the student.
- `email` (String, required): The email address of the student.
- `phone` (Number, required): The phone number of the student.
- `address` (String, required): The address of the student.

### `GET /students/:id`

Returns the student with the specified ID.

### `PUT /students/:id`

Updates the student with the specified ID. Requires a JSON object with the following properties:

- `name` (String, optional): The new name of the student.
- `email` (String, optional): The new email address of the student.
- `phone` (Number, optional): The new phone number of the student.
- `address` (String, optional): The new address of the student.

### `DELETE /students/:id`

Deletes the student with the specified ID.

## Dependencies

This project uses the following dependencies:

- Express
- Mongoose
- Validator

This project was fundametal to my understanding of building and using APIs. 
I tested several data with Postman and gained hands-on experience through this project. 
