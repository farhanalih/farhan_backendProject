const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')

require('dotenv/config')

//Middleware
app.use(bodyParser())
//import routes
const accountRoutes = require('./routes/account')
const loginRoutes = require('./routes/auth')


//routes
app.use('/account',accountRoutes)
app.use('/login',loginRoutes)


//connect to Database
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true  })
let db = mongoose.connection

db.on('error',console.error.bind(console,'Database connect Error !'))
db.once('open',()=>{
    console.log('Database is Connected');
})
//listener port
app.listen(process.env.PORT, ()=>{
    console.log(`Server running in ${process.env.PORT}`);
})
