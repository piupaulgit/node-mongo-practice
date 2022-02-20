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

module.exports = router;