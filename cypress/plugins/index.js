import { createMochawesomeReport } from 'mochawesome/addon/marge';
import { createHandler } from 'mochawesome';

export default (on, config) => {
  // // Diretório de destino para os relatórios mochawesome
  // const reportDir = 'C:\\Users\\juliana.paula\\Desktop\\novoprojetocypress\\cypress\\reports\\mochawesome';

  // // Configurar o plugin mochawesome-reporter
  // on('after:run', (results) => {
  //   const options = {
  //     reportDir: reportDir,
  //     overwrite: false,
  //     html: false,
  //     json: true
  //   };

  //   return createMochawesomeReport(options);
  // });

  // // Configurar o plugin mochawesome
  // on('task', createHandler());

  // // Retornar a configuração
  // return config;
};


// const { defineConfig } = require('cypress');
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

