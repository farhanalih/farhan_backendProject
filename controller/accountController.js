const clearCache = require('../services/redis-cache')
const Account = require('../models/accountModel')


const readAccount = async (req, res) => {
    try {
        const account = await Account.find().select('userName emailAddress accountNumber identityNumber').cache()
        res.json(account)
    } catch (err) {
        res.json({ message: err })
    }
}

const createAccount = async (req, res) => {
    const accountCreate = new Account({
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber
    })
    
    try {
        const nameUser = await Account.findOne({userName : accountCreate.userName})
        const numberAccount = await Account.findOne({accountNumber : accountCreate.accountNumber})
        const emailUser = await Account.findOne({emailAddress : accountCreate.emailAddress})
        const numberIdentity = await Account.findOne({identityNumber : accountCreate.identityNumber})
        if (nameUser) {
            return res.status(404).json({
                status: false,
                message: 'Username already exist'
            })
        }
        else if (numberAccount) {
            return res.status(404).json({
                status: false,
                message: 'Account number already exist'
            })
        }
        else if (emailUser) {
            return res.status(404).json({
                status: false,
                message: 'Email already exist'
            })
        }
        else if (numberIdentity) {
            return res.status(404).json({
                status: false,
                message: 'Identity number already exist'
            })
        }
        
            const account = await accountCreate.save()
            res.json(account)
        
        
    } catch (err) {
        res.json({ messae: err })
    }
}

const findByAN = async(req,res)=>{
    try {
        const accountNumber = await Account.findOne({accountNumber: req.params.accountNumber})
        res.json(accountNumber)
    } catch (err) {
        res.json({message : err})
    }
}

const findByIN = async(req,res)=>{
    try {
        const identityNumber = await Account.findOne({identityNumber: req.params.iN})
        res.json(identityNumber)
    } catch (err) {
        res.json({message : err})
    }
}

const updateAccount = async (req, res) => {
    try {
        const accountUpdate = await Account.updateOne({ _id: req.params.accountId }, {
            userName: req.body.userName,
            accountNumber: req.body.accountNumber,
            emailAddress: req.body.emailAddress,
            identityNumber: req.body.identityNumber
        })
        res.json(accountUpdate)
    } catch (err) {
        res.json({message:err})
    }
}

const deleteAccount = async (req, res) => {
    try {
        const accountDelete = await Account.deleteOne({ _id: req.params.accountId })
        res.json(accountDelete)
    } catch (err) {
        res.json({message:err})
    }
}

module.exports ={
    readAccount,
    createAccount,
    findByAN,
    findByIN,
    updateAccount,
    deleteAccount
}