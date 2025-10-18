import { ResultsContext } from "../context/ResultContext";
import { useContext } from "react";

export const useResultsContext = () => {
    const context = useContext(ResultsContext)

    if (!context) {
        throw Error('useResultsContext must be used inside a ResultsContextProvider')
    }

    return context
}