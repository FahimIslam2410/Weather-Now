# Weather Now

I've created Weather Now, a weather app powered by the MERN stack and using data from the OpenWeatherAPI. It's super easy to use with a search bar where you can enter your city. Once you've done that, Weather Now gives you all the important weather info: the current conditions with a weather icon, the city name, temperature, "feels like" temperature, humidity, and wind speed. You'll find wind and humidity details in the bottom corners with clear logo icons. Plus, this app works smoothly on mobile devices. It starts with London's weather by default.

<img width="1269" alt="Screenshot 2023-09-18 at 11 51 12" src="https://github.com/FahimIslam2410/Weather-Now/assets/120402745/4b677bf6-4eec-4e53-bc5b-f90a0983daeb">

<img width="1269" alt="Screenshot 2023-09-18 at 11 54 39" src="https://github.com/FahimIslam2410/Weather-Now/assets/120402745/bdc1a09f-29d7-4828-b0f1-c75f8e33c41f">


# Table of Contents

1. [Introduction](#weather-now)
3. [Install Node.js](#install-nodejs)
2. [Set up your project](#set-up-your-project)
4. [How to run the server and use the app](#how-to-run-the-server-and-use-the-app-as-a-human)
5. [Using the App](#using-the-app)
6. [How to run automated tests](#how-to-run-automated-tests)


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

### Setup .env file (API Key)

To fetch weather data from the OpenWeatherAPI, you'll need to obtain an API key from [https://openweathermap.org/](https://openweathermap.org/). Here's how to set it up:

1. Visit [https://openweathermap.org/](https://openweathermap.org/).

2. Sign up for an account and log in (if you haven't already).

3. Once logged in, go to the API Keys section (usually under your profile settings).

4. Create a new API key and copy it to your clipboard.

5. In the `api` directory of your project, create a `.env` file if it doesn't already exist.

6. Open the `.env` file and add the following line, replacing `<YOUR_API_KEY>` with the API key you obtained:

```API_KEY=<YOUR_API_KEY>```

7. Save the `.env` file.

Now your backend application is configured to use the OpenWeatherAPI with your API key. Be sure to keep your API key confidential and don't share it publicly.


## How to run the server and use the app (as a human)

1. **Start the application** (in the `api` directory):
```
cd api
npm start
```

## Using the App

- Once both the server and frontend applications are running, you can access the app in your web browser.

- You can access the weather page at [http://localhost:3000](http://localhost:3000) and enter any city of your choice and it will return the current weather information.


## How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**.

```bash
# Make sure you're in the api directory
cd api

npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below.

### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory
cd api

npm run test
```

### Running tests for the frontend

Start the front end in a new terminal session:

```bash
# Make sure you're in the frontend directory
cd frontend

npm start
```

Then run the tests in a new terminal session:

```bash
# Make sure you're in the frontend directory
cd frontend

npm run test
```

### Credits

The Icons used were created by [Bas Milius](https://bas.dev/work/meteocons)
