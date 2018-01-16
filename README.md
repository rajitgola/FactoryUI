# FactoryFabricUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Heroku Deployment
1. Ensure have latest/working version of angular cli and angular compiler cli or else do
`npm install @angular/cli@latest @angular/compiler-cli --save-dev`

2. Copy from devDependencies  to dependencies
` "@angular/cli”: “1.4.9”,
"@angular/compiler-cli": "^4.4.6" `

3. Create postinstall script in package.json
`"postinstall": "ng build --aot -prod"`
The above one can throw error sometimes, in that case remove aot & prod

4. Add Node and NPM engines
`"engines": {
    "node": "6.11.0",
    "npm": "3.10.10"
  }`

5. Copy typescript from devDependencies to dependencies
`"typescript": "~2.3.3"`

6. Install Enhanced Resolve 3.3.0
`npm install enhanced-resolve@3.3.0 --save-dev`

7. Install express
`npm install express --save`

8. server.js in root
`
//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); `

9. Change start command
`"start": "node server.js"`
