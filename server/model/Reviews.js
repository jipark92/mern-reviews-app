const mongoose = require('mongoose')

const ReviewsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    voteCount:{
        type: Number
    },
    comment:{
        type:String
    }
})

const ReviewModel = mongoose.model('reviews',ReviewsSchema)

module.exports = ReviewModel