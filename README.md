 
## Estacio| Missão Prática | Nível 4 | Mundo 2

## Descrição

 O objetivo e seguir os procedimentos para criar um
servidor baseado em Express e Mongoogse, com acesso ao banco de dados
MongoDB, além de utilizar diversas tecnologias para implementar o front-end,
tornando-se capacitado para lidar com plataformas de desenvolvimento
variadas, e satisfazendo às necessidades de um mercado cada vez mais
heterogêneo:

Utilizar o banco de dados MongoDB para a criação de repositório NoSQL
Implementar servidor baseado em Express e Mongoose
Implementar biblioteca cliente de acesso em Java Script
Utilizar front-ends baseados em React JS, Next JS e Angular
   
## Funcionamento
   
## Procedimentos 

👉 1º Procedimento | Criando o Servidor com Express e Mogoose

Crie o banco de dados livraria, e a coleção livros, no MongoDB Compass,
através da opção Create Database, como na imagem seguinte:

 ![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/51c46ea6-a68c-4b58-896d-651b2812b850)

Crie o aplicativo livros-servidor, baseado em Node JS, com Express e
Mongoose:

```bash

a. Instalar o gerador de aplicativos do Express, de forma global, utilizando o
comando npm install -g express-generator

b. Gerar o servidor, através do comando express -e livro-servidor

c. Entrar no diretório gerado, utilizando o comando cd livro-servidor

d. Instalar as dependências do Node JS, através do comando npm install

e.Instalar o Mongoose, utilizando o comando npm install mongoose

f. Instalar o gerenciador de CORS, utilizando o comando npm install cors

.Através do ambiente do Visual Studio Code, defina a conexão com o banco de
dados MongoDB e a classe de modelo para o Mongoose:

a. Adicionar uma pasta com o nome modelo

b. Na pasta modelo, criar os arquivos "conexao.js" e "livro-schema.js"

c. Em "conexao.js", definir uma variável banco, referenciando a biblioteca
   mongoose, e uma variável options, no formato JSON, com os atributos
   useUnifiedTopology e useNewUrlParser, ambos com valor true

d. Efetuar a conexão com o MongoDB, a partir da variável banco, e exportar
   a variável no padrão de módulo do Java Script

e. Em "livro-schema.js", importar a conexão efetuada na variável banco e
   definir a estrutura do banco, na variável LivroSchema, instanciando um
   objeto do tipo banco.Schema, e passando a estrutura no formato JSON
 ``` 

## Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:
- Navegador web atualizado (recomenda-se o Google Chrome, Mozilla Firefox ou Microsoft Edge)
 

## Instalação
Siga estas etapas para instalar e executar o projeto em sua máquina local:

1. Clone o repositório: 
   ```bash
   git clone https://github.com/msbzz/estacio.m2.n5.git
   ```
   
   
2. Navegue até o diretório do projeto:
   ```bash
   2.1 procedimento 1 ou 2 
   
      ex: cd procedimento1/livros-angular 
      
   2.2. instale as dependencias 
  
      npm install ou yarn install (mac)

   2.3 execute o projeto  
    
      npm start 
   
   ``` 
## Tecnologias utilizadas
- HTML
- Bootstrap
- CSS
- JavaScript

## Estrutura de diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:

```
nome-do-repositorio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── imagem1.jpg
│   └── imagem2.png
└── README.md
```

  
 
