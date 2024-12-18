const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Id is required"]

    },
    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    position: {
        type: String,
        required: [true, "Position is required"]
    }, 
    birthdate: {
        type: String,
        required: [true, "Birthdate is required"]
    }, 
    dateEmployed: {
        type: String,
        required: [true, "Date employed is required"]
    }, 
})

module.exports = employeeSchema