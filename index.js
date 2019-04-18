
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');


/**
 * 
 * Cria os arquivos de environment do angular a partir de variáveis de ambiente
 * @author  Gilluan Formiga <gilluan.sousa@sicoob.com.br>
 * @param {string} envValues - Informe os valores que deseja. Ex.: { URL: process.env.URL }.
 * @param {string} templateLayout - Informe o template do layout.
 * @param {string} fileName - Informe o nome do arquivo a ser gerado.
 * @param {string} [dirPath = ../src/environments] - Informe o path dos arquivos de environments
 * 
 */

exports.generateEnvFromEnvSys = (envValues, templateLayout, fileName, dirPath = '../src/environments') => {
  const environmentFilesDirectory = path.join(__dirname, dirPath);
  const output = ejs.render(templateLayout, {...envValues, ...process.env});
  fs.writeFileSync(path.join(environmentFilesDirectory, fileName), output);
}
