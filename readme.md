# Credit card validator


## Demo version
Since this is an example project, its `docs` folder has been added to the repository. It should be accessible here: https://autioch.github.io/cc-validator/


## Installation, usage and development
1. Download or clone repository.
2. In project directory run `npm install` (node required).
3. For usage via browser - run `npm run build:watch` and access project via `localhost:8080`.
4. For publishing, run `npm run build:production`. This will place minified version in the dist folder.
5. For cli/module usage, see `example/cli.js`

## Configuration
1. Available field types are stored in `src/form/field`.
2. Configuration of displayed fields and other details can be found in `src/schema.js`.
3. Whole app model is available (for development)

## Browser support
Tested in latest Chrome, Firefox and Edge.

## Project information
1. Node style `require` used instead of `import` for compatibility with node without extra tools.
2. Classic prototypical inheritance instead of ES6 classes.
3. Some shortcuts were made due to time limit for the project.
4. Credit card number expects just 16 digits. I'm out of time to implement the mod 10 algorithm and to check for correct number of digits.
5. No time left for tests, however validation methods are moved to separate files, so adding tests should be really simple.
