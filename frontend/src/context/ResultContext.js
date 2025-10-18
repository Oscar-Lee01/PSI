import { createContext, useReducer } from "react";


export const ResultsContext = createContext()

export const resultsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                results: action.payload
            }
        case 'CREATE_RESULT':
            return {
                results: [action.payload, ...state.results]
            }
        default:
            return state
    }
}

export const ResultsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resultsReducer, {
        results: null
    })


    return (
        <ResultsContext.Provider value={{...state, dispatch}}>
            { children }
        </ResultsContext.Provider>
    )
}