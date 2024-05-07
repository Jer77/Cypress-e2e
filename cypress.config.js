const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hjb47u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
