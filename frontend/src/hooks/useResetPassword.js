import { useState } from "react";
import { useParams } from 'react-router-dom';

// import axios from 'axios'

// import { useAuthContext } from './useAuthContext'


export const useResetPassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {id, token} = useParams()

    // const { dispatch } = useAuthContext()

    // axios.defaults.withCredentials = true;

    // axios.post(`http://localhost:8080/api/user/reset-password/${id}/${token}`, {password})
    // .then(res => {
    //     if(res.data.Status === "Success") {
    //         navigate('/login')
    //     }
    // }).catch(err => console.log(err))

    const reset = async (values) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch(`http://localhost:8080/api/user/reset-password/${id}/${token}`, {
            method: "POST",
            headers:{
            "Content-Type":  "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify(values),
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
            console.log('Password Reset')
        }
       
    }

    return { reset, isLoading, error }
}