const User = require('../models/user')

class UserDAO {

    create(user) {
        return new Promise((resolve, reject) => {
            User.create({
                    campo: user.campo,
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método create user \\

    read() {
        return new Promise((resolve, reject) => {
            User.findAll({
                    attributes: [
                        'id',
                        'campo',
                    ]
                })
                .then(user => {
                    let users = []
                    user.forEach(user => {
                        users.push(user.dataValues)
                    })
                    resolve(users)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método read user \\

    update(user, id) {
        return new Promise((resolve, reject) => {
            User.update({
                    campo: user.campo,
                }, {
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err))
        })


    } // Fim do método update user \\

    delete(id) {
        return new Promise((resolve, reject) => {
            User.destroy({
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })

    } // Fim do método delete user \\

    index(id) {
        return new Promise((resolve, reject) => {
            User.findAll({
                    where: {
                        id: id
                    }
                })
                .then(user => {
                    resolve(user[0].dataValues)
                })
                .catch(err => reject(err))
        })

    } // Fim do método index user \\

    verificaCampo(campo) {
        return new Promise((resolve, reject) => {
            User.count({
                    where: {
                        campo: campo
                    }
                })
                .then(result => {
                    resolve(result)
                })
                .catch(err => reject(err))
        })
    } // Fim do método verifica campo \\

}

module.exports = UserDAO

// REALIZANDO TESTES DE CONTROLE DO DAO \\

// const userDAO = new UserDAO()

// userDAO.create({
//     campo: "HelloBro",
// })

// userDAO.read()

// userDAO.index(1)

// userDAO.update({
//     campo: "HelloUpdate",
// }, 1)

// userDAO.delete(1)