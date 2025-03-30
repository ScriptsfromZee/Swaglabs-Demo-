const { defineConfig } = require("cypress");
module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  video: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/results', 
    overwrite: false, 
    html: true, 
    json: true, 
    charts: true, 
    reportPageTitle: 'My Test Report'
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
    },
  },
});
