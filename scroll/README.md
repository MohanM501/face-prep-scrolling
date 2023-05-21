Infinite Scrolling

This project demonstrates how to implement infinite scrolling in a React application. Infinite scrolling is a technique that loads additional content automatically as the user scrolls down the page, providing a smooth and continuous browsing experience.

Features

Fetches data from an API in chunks as the user scrolls.

Dynamically adds new data to the existing list of items.

Provided facke login functionality and only user who logged in can access the Home Page.


Technologies Used

React: A JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

axios: A promise-based HTTP client for making API requests.

CSS Modules: A CSS naming convention that scopes styles to the component level.

Loader Component: A reusable component to display a loading indicator while fetching data.

Auth Context: Manages the authentication state and provides authentication-related functions.

Private Route: Wraps a route component and checks if the user is authenticated before rendering it.
react-router-dom: A routing library for React applications.

Usage

As you scroll down the page, new items will be loaded dynamically and added to the existing list.

A loader component will be displayed while fetching data.

When you reach the end of the page, the application will make another API call to load more items.

The Auth Context provides the login, logout, and isAuthenticated functions to manage the authentication state.

Future Scope:

- Optimizing the number of API Calls 