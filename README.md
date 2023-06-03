 
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
 
![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/8b5216e5-9cc5-41fc-8b8c-61e93f32aa3d)

````bash
    f. Associar LivroSchema e a coleção livros, definida na criação do banco, ao
modelo de dados Livro, através de uma chamada para banco.model

    g. Exportar o modelo Livro no padrão de módulo do Java Script
```` 

.Implemente o gerenciamento de dados para Livro:

````bash
a. Criar o arquivo "livro-dao.js", na pasta modelo

b. Em "livro-dao.js", definir uma variável Livro, referenciando o modelo
   exportado por livro-schema

c. Adicionar a função obterLivros, no estilo Arrow Function, assíncrona, sem
   parâmetros, e que deve retornar o conjunto de livros obtidos na chamada
   para o método find, sem parâmetros, de Livro

d. Adicionar a função incluir, no estilo Arrow Function, assíncrona, com um
   parâmetro livro, no formato JSON, invocando o método create, de Livro,
   com a passagem do valor fornecido

e. Adicionar a função excluir, no estilo Arrow Function, assíncrona, com um
   parâmetro codigo, invocando o método deleteOne, de Livro, onde será
   utilizado um objeto JSON, com o atributo _id recebendo o valor de codigo

f. Exportar as três funções definidas, com base no padrão de módulo
```` 

.Implemente as rotas que serão utilizadas para o gerenciamento dos livros:

````bash
a. Criar o arquivo "livros.js", na pasta routes, onde estão definidas as rotas
   criadas por padrão pelo Express Generator (index e users)

b. No arquivo "livros.js", com a inclusão das funções obterLivros, incluir e
   excluir, a partir de livro-dao, criação da variável express, referenciando a
   biblioteca de mesmo nome, e criação do objeto router, obtido a partir da
   chamada para o método Router, de express

c. Adicionar a resposta para a rota raiz, no modo GET, a partir do método de
   router com o mesmo nome, com envio dos livros, no formato JSON,
   obtidos através da chamada para obterLivros

d. Adicionar a resposta para a rota raiz, no modo POST, a partir do método
   de router com o mesmo nome, com a recepção de um livro, no corpo da
   requisição, passagem do livro para a função incluir, e envio de mensagem
   indicando sucesso ou falha na operação, no formato JSON

e. Adicionar a resposta para a rota raiz, concatenada a um segmento com o
   código do livro (_id), no modo DELETE, a partir do método de router com
   o mesmo nome, com a extração do segmento com o código, a partir do
   campo params da requisição, passagem do código para a função excluir,
   e envio de mensagem indicando sucesso ou falha na operação

f. Exportar router, com base no padrão de módulo do Java Script
```` 

.Configure o servidor express, modificando a porta, gerenciando o sistema de
CORS (Cross-Origin Resource Sharing), e incluindo as rotas:

````bash
a. Definir a porta utilizada como 3030, no arquivo www, da pasta bin, com a
   mudança de var port = normalizePort(process.env.PORT || '3000') para
   var port = normalizePort(process.env.PORT || '3030')

b. Em "app.js", na pasta raiz do projeto, definir uma variável livroRouter,
   referenciando routes/livros

c. Adicionar a rota no objeto app, referenciando a url de base "/livros" e o
   objeto de roteamento livroRouter, com a chamada para o método use

d. Para as duas ações anteriores, posicionar as linhas de código na
   sequência das utilizadas para a rota raiz e a rota users, adicionadas por
   padrão

e. Configurar o sistema de CORS, definindo uma variável cors, que receberá
   a biblioteca de mesmo nome, antes de instanciar app, e utilizá-la pelo app
   logo após instanciar, através do método use, mantendo a configuração
   padrão, onde temos acesso a partir de qualquer porta ou endereço

```` 
![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/f6b0f991-7e33-4d0a-a9a3-13b66551bb55)


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

  
 
