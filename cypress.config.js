const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  watchForFileChanges: false,
  experimentalInteractiveRunEvents: true,
  viewportHeight: 768,
  viewportWidth: 1366,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
