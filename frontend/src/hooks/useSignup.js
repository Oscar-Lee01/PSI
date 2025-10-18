import { useState, useEffect } from "react";
import { useAuthContext } from './useAuthContext'

// Custom hook to manage localStorage
const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ?
            JSON.parse(storedValue) :
            initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    
    const { dispatch } = useAuthContext()
    
    const [localStorageValue, setLocalStorageValue] =
        UseLocalStorage('myLocalStorageKey', 'default');

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(json));
    // }, [response]);

    const signup = async (values) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8080/api/user/signup', {
            method: "POST",
            headers:{
            "Content-Type":  "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify(values),
        })
        const json = await response.json()
        console.log("json response data", json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            setLocalStorageValue(JSON.stringify(json))
            
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
       
    }

    return { signup, isLoading, error }
}