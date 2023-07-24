const router = require('express').Router()
const todoItemsModel = require('../models/todoItems')
router.post('/api/item', async (req,res)=>{
    try {
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json('items added successfully')   
    } catch (error) {
        res.json(err)
    }
})      
//export router
module.exports =router