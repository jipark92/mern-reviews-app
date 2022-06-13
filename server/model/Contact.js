const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    email:{
        type: String
    },
    comment:{
        type: String
    }
})

const ContactModel = mongoose.model('contact',ContactSchema)

module.exports = ContactModel