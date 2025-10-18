import { useState } from "react";

// import axios from 'axios'
// import { useAuthContext } from './useAuthContext'


export const useForgotPassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    // const { dispatch } = useAuthContext()

    // axios.defaults.withCredentials = true;

    // axios.post('http://localhost:8080/api/user/forgot-password', {email})
    // .then(res => {
    //     if(res.data.Status === "Success") {
    //         navigate('/login')
    //     }
    // }).catch(err => console.log(err))

    const forgot = async (email) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('http://localhost:8080/api/user/forgot-password', {
            method: "POST",
            headers:{
            "Content-Type":  "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify(email),
        })
        const json = await response.json()
        console.log("json response data", json)
        
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setIsLoading(false)
            setError(null)
            console.log('forgot password')
        }
       
    }

    return { forgot, isLoading, error }
}