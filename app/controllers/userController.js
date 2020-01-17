const UserDAO = require('../data/userDAO')
const userDAO = new UserDAO()

class UserController {

    create() {
        return (req, res) => {
            let data = req.body
            userDAO.create(data)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Create User \\

    read() {
        return (req, res) => {
            userDAO.read()
                .then(users => {
                    res.json({
                        status: 200,
                        users: users
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Read User \\

    update() {
        return (req, res) => {
            let id = req.params.id
            let data = req.body
            userDAO.update(data, id)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Update User \\

    delete() {
        return (req, res) => {
            let id = req.params.id
            userDAO.delete(id)
                .then(result => {
                    res.json({
                        result: result,
                        status: 200
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Delete User \\

    index() {
        return (req, res) => {
            let id = req.params.id
            userDAO.index(id)
                .then(user => {
                    res.json({
                        status: 200,
                        user: user
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err
                    })
                })
        }
    } // Fim do método Index User \\

    verificaCampo() {
        return (req, res) => {
            let data = req.body
            let campo = data.campo
            userDAO.verificaCampo(campo)
                .then(result => {
                    res.json({
                        status: 200,
                        result: result
                    })
                })
                .catch(err => {
                    res.json({
                        status: 500,
                        err: err,
                    })
                })
        }
    } // Fim do método Verificar Campo do User \\

}

module.exports = UserController