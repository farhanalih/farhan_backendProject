const mongoose = require('mongoose')
const AccountSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    accountNumber:{
        type: String,
        required : true
    },
    emailAddress : {
        type: String,
        unique : "Email already exist",
        required : true
    },
    identityNumber: {
        type : String,
        unique: "Identity Number already exist",
        required: true
    }
})

module.exports = mongoose.model('Account',AccountSchema)