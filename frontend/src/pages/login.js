import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [values, setValues] = useState({
        matricnumber: '',
        password: '',
    })
    const navigate = useNavigate()

    // const [email, setemail] = useState('')
    // const [matricnumber, setMatricnumber] = useState('')
    // const [password, setPassword] = useState('')

    const {login, error, isLoading} = useLogin()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)

        await login(values)

        navigate('/')
    }

    return (
        <div className="login-page">
        <div className="login">
            <h3>Log in</h3>
            <form onSubmit={handleSubmit}>
            
            <label>Matric Number</label>
            <input 
            type="text" placeholder="Enter Matric No" name="matricnumber"
            onChange={(e) => handleChanges(e)} required value={values.matricnumber}/>
            
            <label>Password</label>
            <input 
            type="password" placeholder="Enter Password" name="password"
            onChange={(e) => handleChanges(e)} required/>

            <button disabled={isLoading} type="submit">Log in</button>
            <p className="forgot-password-text">
                <Link to={'/forgot-password'}>Forgot Password?</Link>
            </p>


            {error && <div className="error">{error}</div>}
            </form>
        </div>
        </div>
    )

}

export default Login;