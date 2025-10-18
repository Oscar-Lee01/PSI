// import user model
const User = require('../models/userModel')
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
const nodemailer = require('nodemailer')

// line 9: ARG 1; obj representing the payload on the token we want to create, 
//ARG 2; The SECRET,the secret string only known to the server
//ARG 3; An OPTION: User log in session(Token) expires in 3days
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}


// login user
const loginUser = async (req, res) => {
    const {matricnumber, password} = req.body

    // add doc to DB
    try {
        if (!matricnumber || !password) {
            throw Error('All fields must be filled')
        }

        const users = await User.findOne({ matricnumber })


    if (!users) {
        throw Error('User does not exist')
        }
        
        const match = await bcrypt.compare(password, users.password)

        if (!match) {
            throw Error('Incorrect password')
        }

        const user = await User.login({matricnumber, password})

        // create a token
        const token = createToken(user._id)

        res.status(200).json({matricnumber, token});
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
}

// forgot password, send mail route
const Forgot = async (req, res) => {
    const {email} = req.body;

    // find email form db
    try {
        const user = await User.findOne({email})
    // .then(user => {
    //   if(!user) {
    //     return res.send({Status: "User does not exist"})
    //   }

      // create a token
        const token = createToken(user._id)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'oscarlee415@gmail.com',
                pass: 'greenarrow1'
            }
        });

        const mailOptions = {
            from: 'oscarlee415@gmail.com',
            to: user.email,
            subject: 'Reset Password Link',
            text: `<p>Click the link below to reset your password:</p>
            http://localhost:3000/api/user/reset-password/${user._id}/${token}`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(500).send({ message: "Error sending mail"});
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send({ message: "Email sent successfully"});
            }
            // e.target.reset()
        });
        
        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
    // })
  }

// signup user
const signupUser = async (req, res) => {
    const {firstname, lastname, middlename, email, matricnumber, contact, gender, level, password, about} = req.body;

    // add doc to DB 
    try {
        if (!email || !password) {
            throw Error('All fields must be filled')
        }
        if (!validator.isEmail(email)) {
            throw Error('Invalid Email')
        }
        if (!validator.isStrongPassword(password)) {
            throw Error('Password not strong enough. Password must be at least 8 characters and must contain at least an uppercase letter, lowercase letter and a symbol (e.g _ # . $ - )'
            )
        }

        const emailExists = await User.findOne({ email })
        const matricnumberExists = await User.findOne({ matricnumber })
        const contactExists = await User.findOne({ contact })


    if (emailExists) {
        throw Error('Email already registered')
        } else if (matricnumberExists) {
        throw Error('Matric Number already registered')
        } else if (contactExists) {
            throw Error('Mobile Number already registered')
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        console.log('Hashed Password:', hash);

        const user = await User.create({firstname, lastname, middlename, email, matricnumber, contact, gender, level, password: hash, about})

        // create a token
        const token = createToken(user._id)

        // res.json({ message: 'Welcome!' })
        res.status(200).json({firstname, lastname, middlename, email, matricnumber, contact, gender, level, about, token});
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
}

//  reset password
const Reset = async (req, res) => {
    const {id, token} = req.params;
    const {password} = req.body;

    // verify token
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if(error) {
           return res.status(400).json({error: error.message})
        } else {
            bcrypt.hash(password, 10)
            .then(hash => {
                User.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
            })
            .catch(error => res.send({Status: error}))
        }
    })
}

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({ })

    res.status(200).json(users)
}

// get a single user
const getUser = async (req, res) => {
    const { id } = req.params //grabbing the id prop from the route parameter

    // this method checks if our id is valid, if not, it returns a 404 error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'user does not exist'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'user does not exist'})
    }

    res.status(200).json(user)
}


module.exports = { signupUser, loginUser, Forgot, Reset, getUsers, getUser}