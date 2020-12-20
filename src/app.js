const express = require('express');
const Student = require('./models/Student');


const app = express();

// middleware 
app.use(express.json());

// Routes

// Get all the students
app.get('/students', async (req, res) => {
    // write your codes here
    Student.find().then(result => res.send(result)).catch(err => res.send(err.message));
})

// Add student to database
app.post('/students', async (req, res) =>{
    // write your codes here
    let std = new Student(req.body);

    std.save().then(std => res.send(std)).catch(err => res.send(err.message));
})

// Get specific student
app.get('/students/:id', async (req, res) =>{
    // write your codes here
    const id = req.params.id;
    Student.findById(id).then(result => res.send(result)).catch(err => res.send(err.message));
})

// delete specific student
app.delete('/students/:id', async (req, res) =>{
    // write your codes here
    const type = req.query.type;
    const id = req.params.id;

    if(!type){
        return;
    }

    if(type === "soft"){

    }

    if(type === "hard"){
        Student.findByIdAndDelete(id).then(() => res.send(id)).catch(err => res.send(err.message));
    }


}) 


module.exports = app;
