const db = require('../config/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const User = db.database.define('user', {
    campo: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false
    },

})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
// User.sync({
//     force: true
// })

module.exports = User //exportando o Model \\