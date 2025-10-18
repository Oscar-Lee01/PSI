import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        middlename: '',
        email: '',
        matricnumber: '',
        contact: '',
        gender: '',
        level: '',
        password: '',
        about: '',
    })
    const navigate = useNavigate()

    
    const {signup, error, isLoading} = useSignup()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)

        await signup(values)
        
        // navigate('/')
    }

    return (
        <div className="signup-page">
        <div className="create">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>

            <label>First Name</label>
            <input 
            type="text" placeholder="Enter First Name" name="firstname"
            onChange={(e) => handleChanges(e)} required value={values.firstname}/>
            
            <label>Last Name</label>
            <input 
            type="text" placeholder="Enter Last Name" name="lastname"
            onChange={(e) => handleChanges(e)} required value={values.lastname}/>

            <label>Middle Name</label>
            <input 
            type="text" placeholder="Enter Middle Name" name="middlename"
            onChange={(e) => handleChanges(e)} required value={values.middlename}/>
            
            <label>Email Address</label>
            <input 
            type="email" placeholder="Enter Email Address" name="email"
            onChange={(e) => handleChanges(e)} required value={values.email}/>
            
            <label>Matric Number</label>
            <input 
            type="text" placeholder="Enter Matric No" name="matricnumber"
            onChange={(e) => handleChanges(e)} required
            minLength={8}
            value={values.matricnumber}/>

            <label>Contact</label>
            <input 
            type="text" placeholder="Enter Mobile Number" name="contact"
            onChange={(e) => handleChanges(e)} required value={values.contact}/>
            
            <label>Gender</label>
            <input type="radio" name="gender"
            onChange={(e) => handleChanges(e)} /> Male
            <input type="radio" name="gender"
            onChange={(e) => handleChanges(e)} /> Female
            
            <label>Level</label>
            <select name="level" id="level" onChange={(e) => handleChanges(e)} value={values.level} >
                <option value={ 100 }>100</option>
                <option value={ 200 }>200</option>
                <option value={ 300 }>300</option>
                <option value={ 400 }>400</option>
            </select>
            
            <label>Password</label>
            <input 
            type="password" placeholder="Enter Password" name="password"
            onChange={(e) => handleChanges(e)} required/>
            
            <label>Confirm Password</label>
            <input 
            type="password" placeholder="Re-enter Password" name="password"
            onChange={(e) => handleChanges(e)} required/>

            <label>About</label>
            <textarea name="about" id="about" cols={20} rows={10}
            onChange={(e) => handleChanges(e)} value={values.about} placeholder="Describe yourself">    
            </textarea>

            <button disabled={isLoading} type="submit">Sign Up</button>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
        </div>
    )
}

export default Signup;