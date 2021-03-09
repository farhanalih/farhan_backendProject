const express = require('express')
const router = express.Router()
const Account = require('../models/accountModel')
const jwt = require('jsonwebtoken')

//login
router.post('/', async (req,res)=>{
    const emailExist = await Account.findOne({emailAddress: req.body.emailAddress})
    if(!emailExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Email is not registered'
    })

    //create token with jwt
    const token = jwt.sign({_id:Account._id},process.env.SECRET_KEY)
    res.header('auth-token',token).json({
        token: token
    })
})

module.exports = router