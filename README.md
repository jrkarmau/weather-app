# TJTS5901 Weather App

## Getting Started

1. Install Node.js: [https://nodejs.org/en](https://nodejs.org/en)
2. Clone the Git repository to your local machine
3. Navigate to the project directory in the terminal
4. Create a `.env` file in the root of the project directory
5. Add the following environment variables to the `.env` file from Github CI/CD secrets:
   - `REACT_APP_OPENWEATHER_API_KEY`
   - `REACT_APP_WEATHERAPI_API_KEY`

6. Install dependencies: `npm install`
7. Start the application: `npm start`

## Running Tests
1. Run unit tests: `npm test`
2. run e2e tests: `npm run cypress`

## Security
System runs https://github.com/github/codeql-action/tree/main tool on every push to scan project for security vulnerabilities.
And https://github.com/actions/dependency-review-action?tab=readme-ov-file on every push to do dependency review.

## How It Works

The application allows users to enter a city in Finland, retrieves weather data from two different APIs, and compares the results.

## Additional Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
