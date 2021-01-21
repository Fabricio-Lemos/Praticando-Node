const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserControler')

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.post('/users/login', UserController.login);

module.exports = router