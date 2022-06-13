const mongoose = require('mongoose')

const ReviewsSchema = new mongoose.Schema({
    title:{
        type: String
    },
    imageURL:{
        type: String
    },
    description:{
        type:String
    }
})

const ReviewModel = mongoose.model('reviews',ReviewsSchema)

module.exports = ReviewModel