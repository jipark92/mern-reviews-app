const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

let indexRouter = require('./routes/index')

mongoose.connect('mongodb+srv://norf:norf@cluster0.fcxk5lk.mongodb.net/reviews?retryWrites=true&w=majority')

app.use('/',indexRouter)

app.listen(process.env.PORT || 3001, ()=>{console.log('connected to port 3001')})