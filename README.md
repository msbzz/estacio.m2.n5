 
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

.Execute o servidor com npm start, e teste as chamadas através do Postman
  ou do Boomerang, lembrando que apenas o método GET pode ser verificado
   através do navegador:

![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/720e2d4b-7ec9-4077-849c-78b8a3b8d0bf)

.Após testar o servidor, utilize também o MongoDB Compass para verificar os
  dados que foram inseridos

![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/606dfdea-1596-4ee5-9654-eb6590912d6e)


👉 2º Procedimento | Alteração dos Projetos Clientes

.Crie um diretório denominado clientes, e copiar para dentro dele os projetos
livros-react, livros-next e livros-angular;

.Abra a cópia do projeto livros-react no Visual Studio Code;

.Altere a classe Livro, no arquivo src/model/Livro.ts, mudando o tipo do
 atributo codigo para String, com o objetivo de compatibilizar com os
 identificadores do banco de dados MongoDB

.Altere a classe ControleLivros, no arquivo src/controle/ControleLivros.ts,
 de acordo os passos seguintes:

```bash
a. Definir a constante global baseURL, recebendo o endereço de base do
   servidor Express, em "http://localhost:3030/livros"

b. Definir a interface LivroMongo, para compatibilizar o tipo de Livro às
   chamadas para o servidor, contendo os atributos apresentados a seguir:
``` 
![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/24fd595d-1a95-413f-882c-0227f41a92b5)

```bash
    c. Eliminar o vetor livros, que funcionava como fonte de dados

    d. Alterar o método obterLivros para comportamento assíncrono, com uso de
fetch no endereço de base, modo GET, recuperação da resposta como vetor
JSON, e retorno com o mapeamento de cada elemento para um novo objeto do
tipo Livro

    e. Alterar o método excluir para o comportamento assíncrono, recebendo
codigo, do tipo String, chamando baseURL/codigo via fetch, no modo
DELETE, e retornando o campo ok da resposta, indicando sucesso ou falha

    f. Alterar o método incluir para o comportamento assíncrono, adotando o
parâmetro livro, do tipo Livro, com a conversão dele para uma interface
LivroMongo, chamada para baseURL via fetch, no modo POST, incluindo o
tipo de conteúdo como informação do header e a interface, que deve ser
convertida para texto através de JSON.stringfy, no corpo. O retorno da função
será o campo ok da resposta, indicando sucesso ou falha
``` 

. Altere o código-fonte de LivroLista, no arquivo src/LivroLista.js, de acordo
  com os passos seguintes:

```bash
a. Alterar a implementação de useEffect, adotando o modelo assíncrono na
   chamada para obterTodos do controlador, seguida do operador then, e
   consequente invocação de setLivros com uso do resultado

b. Alterar a implementação do método excluir, efetuando a chamada para
   setCarregado, com valor false, apenas ao final da execução do método
   excluir do controlador, o que é viabilizado pelo operador then

c. No mapeamento para LinhaLivro, adicionar o index no lambda, utilizando
   o valor no atributo key do componente que é repetido, pois deve ser um
   valor numérico, e agora o código do livro é textual
``` 

 . Altere o código-fonte de LivroDados, no arquivo src/LivroDados.js, de
   acordo com os passos seguintes:

```bash
a. Ao nível do método incluir, alterar o construtor do livro, utilizando um
   texto vazio para o código

b, No mesmo método, efetuar a chamada para navigate, direcionando para a
   raiz, apenas ao final da execução do método incluir do controlador, o que é
   viabilizado pelo operador then
``` 
. Com o projeto livro-servidor em execução, iniciar a execução da nova versão
de livros-react com npm start, e testar as funcionalidades através de um
navegador, acessando o endereço http://localhost:3000

![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/605a589f-5839-4ce7-826f-df47ee58e390)


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

  
 
