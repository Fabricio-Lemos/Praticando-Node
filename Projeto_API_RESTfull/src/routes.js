const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserControler')
const AddressController = require('./controllers/AddressController')
const authMiddleware = require('./middlewares/auth')

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.post('/users/login', UserController.login);

router.use(authMiddleware)

router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.put('/users/logout/:user_id', UserController.logout);

router.get('/users/:user_id/address', AddressController.index);
router.post('/users/:user_id/address', AddressController.store);
router.put('/users/:id/address', AddressController.update);
router.delete('/users/:id/address', AddressController.delete);

module.exports = router