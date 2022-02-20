const express = require('express');
const mongoose = require('mongoose');
const employeesRoute = require('./routes/employees')

const url = 'mongodb://localhost/27017';
const app =  express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection;
con.on('open', () =>{
    console.log('connected successfully...')
})

app.listen(9000, () => {
    console.log("Server Started");
})

app.use('/employees', employeesRoute)