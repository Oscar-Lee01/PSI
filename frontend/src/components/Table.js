import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
import './Table.css';
import { Button } from './Button'
import './Button.css';

export const Table = ({ rows, deleteRow, editRow }) => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
        
    //     const result = {}

    //     const response = await fetch('/api/result', {
    //         method: 'POST',
    //         body: JSON.stringify(result),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const json = await response.json()

    //     if (!response.ok) {
    //         setErrors(json.errors)
    //     }
    //     if (response.ok) {
    //         setErrors(null)
    //         console.log('New Result Added')
    //     }

    // }

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th className="expand">Course Title</th>
                        <th>Course Code</th>
                        <th>Unit</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            const gradeText = row.grade.charAt(0).toUpperCase() + row.grade.slice(1);
                            return <tr key={idx}>
                                <td className="expand">{row.courseTitle}</td>
                                <td>{row.courseCode}</td>
                                <td>{row.unit}</td>
                                <td>{row.score}</td>
                                <td>
                                    <span className={`label label-${row.grade}`}>
                                      {gradeText}
                                    </span>
                                </td>
                                <td>
                                    <span className="actions">
                                        <BsFillPencilFill className="edit-btn" onClick={() => editRow(idx)}/>
                                        <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                <Button className="btn" />
                </table>
        </div>
    )
}