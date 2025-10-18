import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useResetPassword } from '../hooks/useResetPassword';

const ResetPassword = () => {
    const [values, setValues] = useState({
        password: '',
    })
    // const [password, setPassword] = useState()
    const navigate = useNavigate()

    const {reset, error, isLoading} = useResetPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)

        await reset(values)

        navigate('/login')
    }


    return (
        <div className="reset-password-page">
        <div className="reset-password">
            <h3>Reset Password</h3>
            <form onSubmit={handleSubmit}>
            
            <label>New Password</label>
            <input 
            type="password" placeholder="Enter Password" name="password"
            onChange={(e) => setValues(e.target.value)}/>
            {/* onChange={(e) => setPassword(e.target.value)}/> */}

            
            <label>Confirm Password</label>
            <input 
            type="password" placeholder="Re-enter Password" name="confirm_password"
            onChange={(e) => setValues(e.target.value)}/>

            <button 
            disabled={isLoading}
             type="submit">Update</button>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
        </div>
    )
    
}

export default ResetPassword;