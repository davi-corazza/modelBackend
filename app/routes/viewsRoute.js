const express = require('express');
const router = express.Router();

router.get('/views', (req, res) => {
    res.send('HELLO BRO!')
})

module.exports = router