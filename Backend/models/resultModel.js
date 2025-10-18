//require mongoose
const mongoose = require('mongoose')

//create a new schema using this function
const Schema = mongoose.Schema

//creating a new schema
const resultSchema = new Schema({
    courseCode: {
        type: String,
        required: true
    },
    courseTitle: {
        type: String,
        required: true
    },
    unit: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    }  
}, { timestamps: true }) //says when a doc was created

// create result model
module.exports = mongoose.model('Result', resultSchema)

