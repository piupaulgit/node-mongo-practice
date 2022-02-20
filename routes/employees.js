const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')


router.get('/', async(req,res) => {
    try{
        const employees = await Employee.find()
        res.send({employees})
    }
    catch{
        const employees = new Employee.find()
        res.send('err')
    }
})

router.get('/:id', async(req,res) => {
    try{
        const emp = await Employee.findById(req.params.id)
        res.json(emp)
    }
    catch(err) {
        res.send(err)
    }
})

router.post('/', async(req,res) => {
    const employee = new Employee({
        name: req.body.name,
        skill: req.body.skill,
        active: true
    })

    try{
        const response = await employee.save()
        res.json(response)
    }
    catch(err){
        res.send(err + 'err')
    }
})

module.exports = router;