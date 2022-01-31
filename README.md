# Boilerplate

## Description

This is a template for an easy set up of a React project. It uses React, Redux, Bootstrap, and Express.

## Set up

To install:

```
npm install
```

To build and run program:

```
npm run start-dev
```

Open your browser to http://localhost:8080/ to view your app. Save and refresh to see changes.

## Tech Stack

### React

The react components are on in the ==client== directory. This single-page application uses React Router, which can be modified in the `routes.js` file.

React-Bootstrap components help with styling and responsiveness.

### Redux

The React Redux library helps with state management. The store can be connected to any component using the `connect()` function. You can find an example of this connection [here](https://react-redux.js.org/api/connect).

### Express

Express routes are on the server side, and includes a directory for api routes on an Express Router. For production deployment you can run `node server` or `npm run start`.

### Webpack and Babel

Babel transcompiles the project and Webpack bundles it for deployment into the public file `bundle.js`. Their configurations can be found in `.bablerc` and `webpack.config.js`.
