const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const ReviewModel = require('../model/Reviews')

router.get('/',(req,res)=>{
    ReviewModel.find({},(err,result)=>{
        try {
            res.json(result)
        } catch (error) {
            console.log('error')
        }
    })
})

module.exports = router