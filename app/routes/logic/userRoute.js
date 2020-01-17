const express = require('express')
const Router = express.Router()

const UserController = require('../../controllers/userController')
const userController = new UserController()

Router.post('/create', userController.create())
Router.get('/read', userController.read())
Router.put('/update/:id', userController.update())
Router.delete('/delete/:id', userController.delete())
Router.get('/index/:id', userController.index())
Router.post('/verifica', userController.verificaCampo())

module.exports = Router // EXPORTANDO O CRUD DO USER DA APLICAÇÃO \\ 