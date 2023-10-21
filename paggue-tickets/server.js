const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router('eventos.json'); 
const router2 = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();

// Adicione middlewares padrão (logger, manipulação de CORS, etc.)
server.use(middlewares);

// Defina suas rotas aqui
server.use('/eventos/', router1); // Rota para o primeiro arquivo JSON
server.use('/users/', router2); // Rota para o segundo arquivo JSON

// Inicie o servidor
const PORT = 3000; // Você pode escolher qualquer porta que desejar
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
