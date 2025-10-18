const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const schema = mongoose.Schema

const userSchema = new schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    matricnumber: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true,
    }
});

// Static signup method
userSchema.statics.signup = async function(email, matricnumber, contact, password) {

    // validation
    // if (!firstname || !lastname || !middlename || !about || !level || !gender) {
    //     throw Error('All fields must be filled')
    //}

    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }
    

    const exists = await this.find({ email, matricnumber, contact })

    if (exists) {
        if (exists.email === email) {
            throw Error('Email already registered')
        }
        if (exists.matricnumber === matricnumber) {
            throw Error('Matric Number already registered')
        }
        if (exists.contact === contact) {
            throw Error('Mobile Number already registered')
        }    
    }

    // Middleware to hash the password before saving the user
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log('Hashed Password:', hash);

    const user = await this.create({ email, matricnumber, contact, password: hash });

    return user


}

// Static login method
userSchema.statics.login = async function(matricnumber, password) {
    console.log('Matric Number:', matricnumber);
    console.log('Password:', password);
    
    if (!matricnumber || !password) {
        throw Error('All fields must be filled')
    }

    const users = await this.findOne({ matricnumber});
    
    if (!users) {
        throw Error('User does not exist')
    }

    console.log('Entered Password:', password);
    console.log('Stored Hashed Password:', users.password);

    const match = await bcrypt.compare(password, users.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    const user = await this.login(matricnumber, password)

    return user
}

module.exports = mongoose.model('User', userSchema, 'users');