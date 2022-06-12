const express = require('express')
const router = express.Router()
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
router.delete('/deleteproject/:id',async (req,res)=>{
    const id = req.params.id
    await ReviewModel.findByIdAndDelete(id).exec()
})

//update
router.put('/updateproject',(req,res)=>{
    const id = req.body.id
    const newTitle = req.body.newTitle
    const newDescription = req.body.newDescription

    try {
        ReviewModel.findById(id,(err,result)=>{
            result.title = newTitle
            result.description = newDescription
            result.save()
        })
    } catch (error) {
        console.log('error')
    }
})

module.exports = router