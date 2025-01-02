# Node Express Blog Boilerplate

This repository serves as a boilerplate for creating a blog application using Node.js, Express, and MongoDB. It provides a foundational setup to quickly get started with building and deploying a fully functional blog.

## Features

- **Authentication**: User registration, login, and logout functionality using cookie express sessions.
- **Blog Management**: Create, read, update, and delete (CRUD) blog posts.
- **Comment System**: Users can add and manage comments on blog posts.
- **API Support**: RESTful API endpoints for integration with other platforms.
- **Error Handling**: Comprehensive error handling for both client and server-side.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: expess session, jwt with bcrypt for password hashing
- **Templating**: EJS
- **Styling**: Bootstrap or custom CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or cloud instance)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/achalakavinda/node-blog.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node-blog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=3000
   mongodb_user=
   mongodb_password=
   ```

2. Replace `your-mongodb_user` and `your-mongodb_password` with appropriate values.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Testing

Run tests using the following command:
```bash
npm test
```

## Folder Structure

```
node-express-blog-boilerplate/
├── public/          # Static files (CSS, JS, Images)
├── tests/           # Unit and integration tests
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
├──server/
        ├── 
        ├── routes/          # Route handlers
        ├── models/          # Mongoose schemas and models
        ├── views/           # Templating engine files (EJS or Handlebars)
        ├── controllers/     # Application logic and controllers
        ├── middleware/      # Custom middleware

```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License


## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
