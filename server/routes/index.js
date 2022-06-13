const express = require('express')
const router = express.Router()
const ReviewModel = require('../model/Reviews')
const ContactModel = require('../model/Contact')

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

//post new project
router.post('/newproject', async (req,res)=>{
    const addNewProject = req.body
    const newProject = new ReviewModel(addNewProject)
    await newProject.save()
    res.json(addNewProject)
})

//post new contact 
router.post('/contact', async (req,res)=>{
    const addNewContact = req.body
    const newContact = new ContactModel(addNewContact)
    await newContact.save()
    res.json(addNewContact)
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
    const newImgUrl = req.body.newImgUrl
    const newDescription = req.body.newDescription
    const newDate = req.body.newDate

    try {
        ReviewModel.findById(id,(err,result)=>{
            result.title = newTitle
            result.imageURL = newImgUrl
            result.description = newDescription
            result.date = newDate
            result.save()
        })
    } catch (error) {
        console.log('error')
    }
})

module.exports = router