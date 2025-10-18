const Result = require('../models/resultModel')
const mongoose = require('mongoose')

// get all results
const getResults = async (req, res) => {
    const results = await Result.find({ }).sort({createdAt: -1}) // -1= descending order, i.e newest ones would appear at the top

    res.status(200).json(results)
}

// get a single result
const getResult = async (req, res) => {
    const { id } = req.params //grabbing the id prop from the route parameter

    // this method checks if our id is valid, if not, it returns a 404 error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'result does not exist'})
    }

    const result = await Result.findById(id)

    if (!result) {
        return res.status(404).json({error: 'result does not exist'})
    }

    res.status(200).json(result)
}

// create new result
const createResult = async (req, res) => {
    const {courseCode, courseTitle, unit, score, grade} = req.body

    let emptyFields = []

    if(!courseCode) {
        emptyFields.push('Course Code')
    }
    if(!courseTitle) {
        emptyFields.push('Course Title')
    }
    if(!unit) {
        emptyFields.push('unit')
    }
    if(!score) {
        emptyFields.push('score')
    }
    if(!grade) {
        emptyFields.push('grade')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
    }


    // add doc to DB
    try{
        const result = await Result.create({courseCode, courseTitle, unit, score, grade})
        res.status(200).json(result)
    } catch (error) {
      res.status(400).json({error: error.message })
    }

}

// delete a result
const deleteResult = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'result does not exist'})
    }

    const result = await Result.findOneAndDelete({_id: id})

    if (!result) {
        return res.status(400).json({error: 'result does not exist'})
    }

    res.status(200).json(result)
}

// update a result
const updateResult = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'result does not exist'})
    }

    const result = await Result.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!result) {
        return res.status(404).json({error: 'result does not exist'})
    }

    res.status(200).json(result)
}
    

module.exports = {
    getResults,
    getResult,
    createResult,
    deleteResult,
    updateResult
}