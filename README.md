
# Isomorphic App Demo

### Demo app using most updated versions of following tools

This demo is an adaptation of [fluxible examples] (https://github.com/eriknyk/flux-examples/tree/master/react-router)

- [react](https://github.com/facebook/react) v0.13.3
    - ECMA 6 Classes
- [react-router](https://github.com/rackt/react-router) v1.0.0-beta3
    - declarative route config
    - asynchronous routes
- [fluxible] (https://github.com/yahoo/fluxible) v0.4.12
- [babel] (https://github.com/babel/babel)
- [webpack] (https://github.com/webpack/webpack)
    - babel loader
    - Code Splitting with require.ensure

This shows routing on the client and the server with [react-router](https://github.com/rackt/react-router). Navigation uses history pushes on the client but browser refresh will render the current page correctly on the server.

## Usage


First install dependencies

```bash
npm install
```

And run development env

```bash
$ npm run dev
```

This will use `nodemon` and `webpack` to watch for changes and restart and rebuild as needed.

Open http://localhost:3000
