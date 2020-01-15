//express: micro framework(conjunto de funcionalidades prontas)
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://cleiton:cleiton@omnistack-z6q71.mongodb.net/semano09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req: Serve para pegar/receber todas as informações que o usuário está enviando para a requisição
//res: Serve para devolver uma resposta para as requisições que o usuário está enviando

//GET, POST, PUT, DELETE...
/*
GET: Método para BUSCAR alguma informação/dado no backend.      Exemplo - Listagem dos usuários 
POST: Método para INSERIR alguma informação/dado no backend.    Exemplo - Cadastro dos usuários 
PUT: Método para EDITAR alguma informação/dado no backend.      Exemplo - Editar informações dos usuários 
DELETE: Método para APAGAR alguma informação/dado no backend.   Exemplo - Deletar usuário e suas informações 

NÃO É POSSIVEL ACESSAR APIs DO TIPO POST PELO NAVEGADOR. EXEMPLO: app.post... .POIS O NAVEGADOR POR PADRÃO SEMPRE 
EXECUTA UM MÉTODO GET
*/

//req.query - Acessar query parants. Para: Filtros
//req.params - Acessar router params. Para: Editar e Deletar
//req.body - Acessar corpo da requisição. Para: Criação e Edição

//Comando para utilizar paremetros recebidos em formato json
app.use(express.json());
app.use(routes);
//Acessar a aplicação no localhost/3333
app.listen(3333); 