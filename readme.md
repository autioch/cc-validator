# Credit card validator


## Usage
Since this is an example project, its `dist` folder has been added to the repository. In it can be found `index.html` file.


## Installation, usage and development
1. Download or clone repository.
2. In project directory run `npm install` (node required).
3. For usage via browser:
  - Run `npm run build:watch` and access project via `localhost:8080`.
  - Run `npm run build:production`. This will place minified version in the dist folder.
4. For CLI usage, this package is not yet ready - webpack allows absolute paths and require sass without extenstions.

## Configuration
1. Available field types are stored in `src/form/field`.
2. Configuration of displayed fields and other details can be found in `src/schema.js`.
3. Whole app model is available (for development)


## Project information
1. Node style `require` used instead of `import` for compatibility with node without extra tools.
2. Classic prototypical inheritance instead of ES6 classes.
3. Some shortcuts were made due to time limit for the project.
4. Credit card number expect 16 digits - there are some exceptions, however I didn't have enough time to implement them. There is however place to improve validation for each field type.
5. No time left for tests, however validation methods are moved to separate files, so adding tests should be really simple.
