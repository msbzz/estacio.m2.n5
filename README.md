 
## Estacio| Missão Prática | Nível 5 | Mundo 2

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
  
A Primeira parte da tarefa é se ter um servidor node com express que poderá estar conectado tanto a um banco mongoDB 
local como a um banco mongoDb de sua conta ao Atlas Database (https://www.mongodb.com/atlas/database) bastando apenas 
fornecer os dados necessários a conexão.

A segunda parte e adaptar os projetos da livraria em  React JS, Next Js e Angular para que possam consumir essa API fornecida pelo servidor 'express' 
   
## Procedimentos 

https://sway.office.com/W3QP981juMlvGPIv?ref=Link&loc=play

## Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:
- Navegador web atualizado (recomenda-se o Google Chrome, Mozilla Firefox ou Microsoft Edge)

- Ter o MongoDB instaldo localmente com um banco já definido a ser configurado em .env
                ou  ter conta https://www.mongodb.com/atlas/database com uma conexão ativa 

## Instalação
Siga estas etapas para instalar e executar o projeto em sua máquina local:

1. Clone o repositório: 
 
 
   git clone https://github.com/msbzz/estacio.m2.n5.git
   
   
2. Ativação dos aplicativos 
   
   2.1 Ativação do servidor 

 
      2.1.1  Navegue até o diretório do projeto
             
            . cd livro-servidor   
      
      2.1.2  instale as dependências 

            . npm install ou yarn install (mac)
      
            2.1.3 Configure connect string do banco de dados
             
             1) configurar arquivo .env na raiz do projeto(no mesmo nivel de package.JSON)
               
               Caso o banco ser acessado caso seja local, e necessite, defina usuario e senha 
               (USER e PWD), o banco é necessário e será definir em DATABASE  
               
               Caso queira acessar o Mongo Atlas preencha o USER_ATLAS e PWD_ATLAS 
              
               
 ![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/3c288f76-03f0-499f-87a5-c2cf4e5ae5ea)


 
               
               obs: por minha conta ser free, creio que por isso não necessite da definição do banco 
              
              2)  configurar arquivo setDB.js na raiz do projeto(no mesmo nivel de package.JSON)
                 
                 Nesse arquivo exitirá uma constante que definirá o tipo de acesso a ser feito
                  
              vide imagem
               
 
   ![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/b3519637-b754-4f49-b149-d81723e2ccd5)

 
 
                  Por default esta como "2" ao mongo local mas poderia ser "1" para conexão local 
                  sem usuario e senha e "3" para o mongo atlas
      
      2.1.4 ative o servidor    
            npm start
            
      2.1.5 certifique-se do funcionamento
            Abra o postman realize operações CRUD com seguinte end point
            http://localhost:3030/livros

         
   2.2. Ativação dos clientes 
  
   
    
     2.2.1 Cliente React JS
      . acessar a pasta 'livros-react' em 'clientes'
      . executar o comando npm install
      . executar o comando npm start
      . o app será executado em http://localhost:3003/
     
     2.2.2 Cliente Next JS
      . acessar a pasta 'livros-next' em 'clientes'
      . executar o comando npm install
      . executar o comando npm run dev
      . o app será executado em http://localhost:3005/
     
     2.2.3 Cliente Next JS

      . acessar a pasta 'livros-angular' em 'clientes'
      . executar o comando npm install
      . executar o comando npm start
      . o app será executado em http://localhost:4200/ 
      
    obs:  todos os apps estão configurados para usar o end point do
          servidor node em ''http://127.0.0.1:3030/livros'
          ex: 
          
          ![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/651e11ea-ce8a-4f60-bb8f-dfe08972f486)

  
   
 
   
    
## Tecnologias utilizadas
- HTML
- Bootstrap
- CSS
- JavaScript
- node
- React JS
- Next JS
- Angular
- 
## Estrutura de diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:

 
  ![image](https://github.com/msbzz/estacio.m2.n5/assets/44148209/25fddf06-8ad2-4b3f-878b-a3125a07b7e8)


  
 
