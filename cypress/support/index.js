import { create } from 'mochawesome';

import 'cypress-mochawesome-reporter/register';

export default (on, config) => {
  // on('after:run', (results) => {
  //   const reportDir = 'C:\\Users\\juliana.paula\\Desktop\\novoprojetocypress\\cypress\\reports\\mochawesome'; // Diretório de saída do relatório
  //   const reportFilename = 'report.html'; // Nome do arquivo de relatório

  //   // Configuração do relatório mochawesome
  //   const options = {
  //     reportDir,
  //     reportFilename,
  //     reportTitle: 'Cypress Tests', // Título do relatório (pode ser personalizado)
  //     overwrite: false, // Não sobrescrever relatórios existentes
  //     charts: true, // Gerar gráficos no relatório
  //     showHooks: 'failed', // Exibir apenas hooks falhados no relatório
  //     quiet: true // Não exibir logs no terminal durante a geração do relatório
  //   };

  //   return create(options)
  //     .save()
  //     .then(() => {
  //       console.log('Relatório mochawesome gerado em: ', reportDir);
  //     });
  // });
};
