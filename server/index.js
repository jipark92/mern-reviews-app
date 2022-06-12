const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

let indexRouter = require('./routes/index')

// mongoose.connect('')

app.use('/',indexRouter)



app.listen(3001, ()=>{console.log('connected to port 3001')})