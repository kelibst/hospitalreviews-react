import React,{ useState, createContext } from "react";
export const ErrorContext = createContext();

const ErrorContextProvider = (props) => {
    const [error, setError] = useState({})
    const addError = (err)=>{
        setError(err)
    }

    return (
        <ErrorContext.Provider value = {{error, addError}}>
            {props.children}
        </ErrorContext.Provider>
    )
}

export default ErrorContextProvider