const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    comment:{
        type: String
    },
    date:{
        type: String
    }
})

const ContactModel = mongoose.model('contact',ContactSchema)

module.exports = ContactModel