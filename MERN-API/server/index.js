const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5500
//import routes 
const todoItemsRoute = require('./routes/todoItems')

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('database connected successfully'))
.catch(err => console.log(err))
app.use('/',todoItemsRoute)
app.listen(PORT,()=>console.log('server is connected'))