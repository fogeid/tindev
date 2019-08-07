const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Criando o Servidor
const server = express();

mongoose.connect('mongodb+srv://admin:admin123@cluster0-wlif2.mongodb.net/dbtindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json())
server.use(routes);

// Usando a Porta 3333
server.listen(3333);