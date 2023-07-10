const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  mochawesomeReporterOptions: {
    reportDir: 'cypress/report', // Diretório de saída do relatório
    overwrite: false, // Defina como true se você quiser substituir relatórios existentes a cada execução
    html: false, // Defina como true se você deseja gerar um arquivo HTML
    json: true, // Defina como true se você deseja gerar um arquivo JSON
  },
});
