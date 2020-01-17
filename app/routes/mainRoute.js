const express = require('express');
const app = express();

// CARREGANDO E EXPORTANDO AS ROTAS DA APLICAÇÃO \\

const logicRoute = require('./logicRoute')
app.use('/', logicRoute)

const viewsRoute = require('./viewsRoute')
app.use('/', viewsRoute)

module.exports = app