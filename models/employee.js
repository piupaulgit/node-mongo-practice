const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    skill: {
        type:String,
        required: true
    },
    active: {
        type: Boolean,
        required:true,
        default: true
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema)