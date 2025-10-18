import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForgotPassword } from '../hooks/useForgotPassword';

const ForgotPassword = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    
    const {forgot, error, isLoading} = useForgotPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)

        await forgot(email)

        navigate('/login')
    }

    
    return (
        <div className="forgot-password-page">
        <div className="forgot-password">
            <h3>Forgot Password</h3>
            <form onSubmit={handleSubmit}>
            
            <label>Email Address</label>
            <input 
            type="email" placeholder="Enter Email Address" name="email"
            onChange={(e) => setEmail(e.target.value)} />
            
            <button 
            disabled={isLoading}
             type="submit">Submit</button>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
        </div>
    )
}

export default ForgotPassword;