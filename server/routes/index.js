const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const ReviewModel = require('../model/Reviews')

//read
router.get('/',(req,res)=>{
    ReviewModel.find({},(err,result)=>{
        try {
            res.json(result)
        } catch (error) {
            console.log('error')
        }
    })
})

//post
router.post('/newproject', async (req,res)=>{
    const addNewProject = req.body
    const newProject = new ReviewModel(addNewProject)
    await newProject.save()
    res.json(addNewProject)
})

//delete

//update

module.exports = router