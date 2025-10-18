import React, { useState } from "react";
// import { useResultsContext } from "../hooks/useResultsContext";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    // const { dispatch } = useResultsContext()

    const [formState, setFormState] = useState(defaultValue || {
        courseTitle: "",
        courseCode: "",
        unit: "",
        score: "",
        grade: "",
    });

    const [error, setError] = useState("")
    const [emptyFields, setEmptyFields] = useState([])

    // modal validation & error checks
    const validateForm = () => {
        if (formState.courseTitle && formState.courseCode && formState.unit && formState.score && formState.grade)
        {
            setError("")
            return true;
        } else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)) {
                if (!value) {
                 errorFields.push(key);
                }
            }
            setError(errorFields.join(", "));

            return false;
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      const response = await fetch('http://localhost:8080/api/result/CreateResult', {
                method: 'POST',
                body: JSON.stringify(formState),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
    
            if (!response.ok) {
                setError(json.error)
                setEmptyFields(json.emptyFields)
                console.log(json.error)
            }
            if (response.ok) {
                setFormState('')
                setError(null)
                setEmptyFields([])
                console.log('New Result Added', json)
                // dispatch({type: 'CREATE_RESULT', payload: json})
            }

        if (!validateForm()) return;

        onSubmit(formState);
        console.log(formState);

        closeModal();
    };

    return(
        <div className="modal-container"
          onClick={(e) => {
            if (e.target.className === "modal-container")
            closeModal();
        }}
        >
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Course Title</label>
                        <input name="courseTitle" value={formState.courseTitle} onChange={handleChange}
                        className={emptyFields.includes('Course Title') ? 'error' : ''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Code</label>
                        <input name="courseCode" value={formState.courseCode} onChange={handleChange}
                        className={emptyFields.includes('Course Code') ? 'error' : ''}                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Unit</label>
                        <select name="unit" className="select" value={formState.unit} onChange={handleChange}>
                            <option value={ 1 }>1</option>
                            <option value={ 2 }>2</option>
                            <option value={ 3 }>3</option>
                            <option value={ 4 }>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Score</label>
                        <textarea name="score" value={formState.score} onChange={handleChange}
                        className={emptyFields.includes('score') ? 'error' : ''}
                        />
                    </div>
                    <div className="form-group">
                        <label>Grade</label>
                        <select name="grade" className="select" value={formState.grade} onChange={handleChange}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    {error && <div className="error">{`Please include: ${error}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}