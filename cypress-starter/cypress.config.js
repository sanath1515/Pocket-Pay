const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: "http://localhost:3001/",
      name: "ShaikShakeel",
      email: "Shaikshakeel@gmail.com",
      password: "12345678",
      pswd: "1234567"
    },
  },
  chromeWebSecurity: false,
});
