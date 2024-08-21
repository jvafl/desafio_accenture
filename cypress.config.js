const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber());
    },
    baseUrl: "http://sampleapp.tricentis.com/101/app.php",
  },
});
