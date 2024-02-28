# Library Engine

## Overview

The Book Search Engine is a full-stack application that allows users to search for books with the Google Books API, save their favorite books to their account, and manage their saved books. This application was originally built using a RESTful API architecture but has since been transitioned to use GraphQL with Apollo Server and Client, enhancing the efficiency of data fetching and mutations with a single endpoint.

## Features

- User authentication (sign up, log in, log out)
- Search for books using the Google Books API
- Save books to the user's account
- View and manage saved books

## Technologies Used

- React.js for the frontend
- Node.js and Express.js for the backend server
- MongoDB and Mongoose for the database
- GraphQL with Apollo Server for the API
- Apollo Client for integrating GraphQL with the React frontend
- React Bootstrap for styling

## Transition to GraphQL

The transition from a RESTful API to GraphQL provided a more efficient and flexible way to interact with our server. Instead of multiple REST endpoints, a single GraphQL endpoint is used to handle queries and mutations. This simplifies the frontend code, reduces network requests, and allows for more precise data fetching.

### Key Changes

- **GraphQL Schemas**: Defined type definitions and resolvers for user authentication, book searches, and book management.
- **Apollo Server**: Set up Apollo Server to handle GraphQL API requests.
- **Apollo Client**: Utilized Apollo Client in the React frontend for making queries and mutations to the GraphQL server.
- **JWT Authentication**: Integrated JSON Web Tokens (JWT) with GraphQL context for secure user authentication.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Install dependencies for the server and client:
```console
npm install
cd client 
npm install
```
3. Start the MongoDB server in a separate terminal.
4. Run the server and client:
```console
npm run start
cd client
npm start
```
5. Visit `http://localhost:3000` in your browser.

## Usage

After logging in or signing up, use the search bar to find books. Click "Save this Book!" to add a book to your saved list. You can view your saved books under the "See Your Books" link and remove them as needed.

## Contributing

Contributions are welcome. Please open an issue to discuss your ideas or submit a pull request.

