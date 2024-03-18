//Esse programa foi desenvolvido usando Node.js, e o gerenciador de pacotes Express através do Yarn para instalar os módulos do Node e nodemon para atualizar o servidor automaticamente
const express = require('express');
const server = express();

//toda vez que acessar o servidor e por uma / acessaremos todos os dados da API, tudo que vem depois da / é uma rota, req = requisição da API, res=Resposta do back end, =>{} é uma função anônima
server.get('/', (req,res)=>{ 
    return res.json({mensagem: 'Nossa API está funcionando'})
});

server.listen(3000,() =>{
    console.log('Servidor funcionando...')
});