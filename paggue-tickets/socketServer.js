// socketServer.js
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const server = http.createServer();
const io = socketIo(server, {
    cors: {
        origin: '*', 
        methods: ['GET', 'POST']
    }
});


io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on('confirmarCompra', (data) => {
        console.log('Mensagem de confirmação de compra recebida:', data.mensagem);
    })
});

const PORT = 3002; // Escolha uma porta para o servidor Socket.io
server.listen(PORT, () => {
    console.log(`Servidor WebSocket está rodando na porta ${PORT}`);
});
