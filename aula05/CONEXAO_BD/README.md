COMO RODAR O PROJETO BAIXADO
Instalar todas as dependências indicada pelo pckage.json
### npm install

Criar a base de dados no MYSQL com o nome "celke"
Alterar as credenciais do banco de dados no arquivo "db/config/config.js".

Rodar o projeto
### node app.js


SEQÊNCIA PARA CRIAR O PROJETO
Criar o arquivo packge
###npm init

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm instal --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Rodar o projeto
### node app.js

Manipular variáveis de ambiente
### npm install --save dotenv