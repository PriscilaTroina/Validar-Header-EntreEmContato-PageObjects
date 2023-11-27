const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dxvdej',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    timeout: 4000,
    viewportWidth: 1200,
    viewportHeight: 940,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
