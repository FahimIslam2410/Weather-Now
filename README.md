# MERN Template

This repository is a MERN (MongoDB, Express.js, React, Node.js) template for web development. It offers a pre-configured MERN stack setup to jumpstart your web projects. 

Whether you're creating a personal website, portfolio, or complex web app, you can fork or clone this repo, customize it, and accelerate your development process.

# Table of Contents

1. [Introduction](#mern-template)
3. [MERN template's directory structure](#mern-templates-directory-structure)
3. [Install Node.js](#install-nodejs)
2. [Set up your project](#set-up-your-project)
3. [Configuring MongoDB](#configuring-mongodb)
4. [How to run the server and use the app](#how-to-run-the-server-and-use-the-app-as-a-human)

5. [Using the App](#using-the-app)
6. [How to run automated tests](#how-to-run-automated-tests)

 
 ## MERN template's directory structure.
  Here's an brief explanation of each folder:

- `api/`:
  - `bin/www`: This file appears to be responsible for setting up the MongoDB database. It's common to have an entry point like this that initializes the server and database connections.
  - `controllers/`: This directory likely contains the controllers for your API routes. Controllers handle the logic for specific routes, such as retrieving data from the database or processing requests.
  - `models/`: In the models directory, you typically define the data models for your MongoDB collections. These models define the structure and behavior of your data.
  - `routes/`: This folder likely contains the route definitions for your API endpoints. It's where you define the available routes, their HTTP methods, and which controller functions should handle them.
  - `spec/`: The spec directory appears to store test files for your controllers, models, and routes. These tests are essential for ensuring the correctness of your backend code.

- `frontend/`:
  - `src/`: The source code for the frontend of your MERN application is located here. It's a common practice to organize the frontend code under a `src` directory.
    - `components/`: This directory likely contains reusable React components that make up your frontend user interface. Organizing components in this way promotes code reusability and maintainability.

   - `public/`:
      - This directory is typically used for storing static assets that are served directly to clients, such as HTML files, images, fonts, or other resources. It's common to place the root HTML file (e.g., `index.html`) here, which serves as the entry point for your React application.


## Install Node.js

1. Install Node Version Manager (NVM)
```
brew install nvm
```
Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
```
nvm install 18
```

## Set up your project

1. **Fork this repository**: Click the "Fork" button in the top right corner of this page.

2. **Rename your fork**: After forking, rename your repository to a name of your choice through the GitHub settings.

3. **Clone your fork**: Clone your forked repository to your local machine using Git.

4. **Install Node.js dependencies**:
- Navigate to the `api` directory:
```
cd api
npm install
```
- Then navigate to the `frontend` directory:
```
cd ../frontend
npm install
```

5. **Install an ESLint plugin for your editor**: You can use [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom or a similar plugin for your code editor.

6. **Install MongoDB**:
```
brew tap mongodb/brew
brew install mongodb-community@5.0
```
*Note:* Follow the instructions if prompted to add MongoDB to your PATH, and restart your terminal.

7. **Start MongoDB**:
```
brew services start mongodb-community@5.0
```
## Configuring MongoDB

To configure your MongoDB settings, follow these steps:

1. **Navigate to the `api` directory**:
```
cd api
```

2. **Access the `bin` directory**:
```
cd bin
```

3. **Open the `www` file**:
- In your code editor, locate and open the `www` file.

4. **Modify the database name**:
- In the `www` file, find line 14 and line 29.
- Change the word `"demo"` to whatever you'd like to name your database.

5. **Save your changes**.

This will update the database name used by your application to the one you've specified.

## How to run the server and use the app (as a human)

1. **Start the server application** (in the `api` directory):
```
cd api
JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
```

2. **Start the front end application** (in the `frontend` directory):
In a new terminal session:
```
cd frontend
npm start
```

## Using the App

- Once both the server and frontend applications are running, you can access the app in your web browser.

- You can access the form page at [http://localhost:3000/form](http://localhost:3000/form) to fill in the form and get redirected to [http://localhost:3000/render](http://localhost:3000/render).

- Alternatively, you can open your browser directly at [http://localhost:3000/render](http://localhost:3000/render) to access the app without going through the form page.

This template includes demo files to help you understand how the template works and how to build your own MERN stack application.




## How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**.

```bash
# Make sure you're in the api directory
cd api

JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below.

### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory
cd api

JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```

### Running tests for the frontend

Start the front end in a new terminal session:

```bash
# Make sure you're in the frontend directory
cd frontend

JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
```

Then run the tests in a new terminal session:

```bash
# Make sure you're in the frontend directory
cd frontend

JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```

This file was forked from [Makers Academy](https://github.com/makersacademy/acebook-mern-template) but heavily altered to create a MERN (MongoDB, Express, React, Node.js) template.