const express = require('express')
const router = express.Router()
const Account = require('../models/accountModel')
const verifyToken = require('../routes/verifyToken')
const userController = require('../controller/accountController')

//create account
router.post('/create', userController.createAccount)
//read account
router.get('/read',verifyToken, userController.readAccount)

//get user by accountNumber
router.get('/:accountNumber',verifyToken,userController.findByAN)

//get user by IdentityNumber
router.get('/findbyIn/:iN',verifyToken, userController.findByIN)

//update account
router.put('/:accountId',verifyToken, userController.updateAccount)

//Delete Account
router.delete('/delete/:accountId',verifyToken, userController.deleteAccount)

module.exports = router