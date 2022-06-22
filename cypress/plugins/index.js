/**
 * @type {Cypress.PluginConfig}
 */


const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {

  // export for cucumber
  on('file:preprocessor', cucumber())
  

}








