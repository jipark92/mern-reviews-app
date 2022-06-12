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
router.delete('/deleteproject/:id',(req,res)=>{
    const id = req.params.id
    ReviewModel.findByIdAndDelete(id).exec()
})


//update

module.exports = router