require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// require the result router
const resultRoutes = require('./routes/result')
// require the user router
const userRoutes = require('./routes/user')


// Setup Express app
const app = express()

//  middleware
app.use(cors({
  origin: 'http://localhost:3000', optionsSuccessStatus: 200,
}));

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/result', resultRoutes)
app.use('/api/user', userRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to DB & listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })
    